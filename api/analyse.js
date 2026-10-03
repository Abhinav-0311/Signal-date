const API_BASE = "https://api.apify.com/v2";
const LINKEDIN_ACTOR = "data_forge_org/linkedin-scraper";
const INSTAGRAM_ACTOR = "apify/instagram-profile-scraper";
const MAX_SOURCE_RUN_CHARGE_USD = "0.03";

function handleFromInstagram(url) {
  return new URL(url).pathname.split("/").filter(Boolean)[0] || "";
}

function isPublicProfileUrl(value, host) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname.replace(/^www\./, "").endsWith(host) && Boolean(url.pathname.split("/").filter(Boolean)[0]);
  } catch {
    return false;
  }
}

function firstText(value, limit = 240) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, limit);
}

function extractEvidence(item, platform) {
  const fields = platform === "linkedin"
    ? ["headline", "about", "summary", "description", "position", "experience"]
    : ["biography", "bio", "fullName", "latestPosts", "posts"];
  const snippets = fields
    .flatMap(field => Array.isArray(item?.[field]) ? item[field] : [item?.[field]])
    .map(value => typeof value === "object" ? value?.text || value?.caption || value?.title : value)
    .map(value => firstText(value))
    .filter(Boolean)
    .slice(0, 3);
  return snippets.map(text => ({ platform, text }));
}

function profileName(item, platform) {
  const fields = platform === "linkedin"
    ? ["full_name", "name"]
    : ["fullName", "full_name", "name"];
  return fields.map(field => firstText(item?.[field], 120)).find(Boolean) || "";
}

function normalizedName(value) {
  return value.toLocaleLowerCase().replace(/[^a-z0-9]+/g, "");
}

function namesMatch(linkedinName, instagramName) {
  const left = normalizedName(linkedinName);
  const right = normalizedName(instagramName);
  if (!left || !right) return false;
  return left === right;
}

async function runActor({ actorId, input, token }) {
  if (!actorId) throw new Error("The selected source adapter is not configured.");
  const apiActorId = actorId.replace("/", "~");
  const headers = { authorization: `Bearer ${token}` };
  const started = await fetch(`${API_BASE}/acts/${encodeURIComponent(apiActorId)}/runs?maxTotalChargeUsd=${MAX_SOURCE_RUN_CHARGE_USD}`, {
    method: "POST",
    headers: { ...headers, "content-type": "application/json" },
    body: JSON.stringify(input)
  });
  if (!started.ok) throw new Error(`Apify could not start ${actorId}: ${started.status}`);
  const startedData = await started.json();
  const run = startedData.data;
  const finished = await fetch(`${API_BASE}/actor-runs/${run.id}?waitForFinish=120`, { headers });
  if (!finished.ok) throw new Error(`Apify run status failed: ${finished.status}`);
  const finishedData = await finished.json();
  if (finishedData.data.status !== "SUCCEEDED") throw new Error(`Source run ended as ${finishedData.data.status}.`);
  const datasetId = finishedData.data.defaultDatasetId;
  const dataset = await fetch(`${API_BASE}/datasets/${datasetId}/items?clean=true`, { headers });
  if (!dataset.ok) throw new Error(`Apify dataset read failed: ${dataset.status}`);
  return dataset.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const { name, linkedin, instagram } = req.body || {};
  if (!name || !linkedin || !instagram) return res.status(400).json({ error: "name, linkedin, and instagram are required" });
  if (!isPublicProfileUrl(linkedin, "linkedin.com") || !isPublicProfileUrl(instagram, "instagram.com")) {
    return res.status(400).json({ error: "Use HTTPS public LinkedIn and Instagram profile URLs." });
  }
  const token = process.env.APIFY_API_TOKEN;
  if (!token) return res.status(503).json({ error: "Source adapter is not configured on this deployment." });

  try {
    const [linkedinItems, instagramItems] = await Promise.all([
      runActor({ actorId: LINKEDIN_ACTOR, token, input: { profileUrls: [linkedin] } }),
      runActor({ actorId: INSTAGRAM_ACTOR, token, input: { usernames: [handleFromInstagram(instagram)] } })
    ]);
    const evidence = [
      ...extractEvidence(linkedinItems[0], "linkedin"),
      ...extractEvidence(instagramItems[0], "instagram")
    ];
    if (!evidence.length) return res.status(422).json({ error: "The source adapter returned no readable profile evidence." });
    const linkedinName = profileName(linkedinItems[0], "linkedin");
    const instagramName = profileName(instagramItems[0], "instagram");
    if (!namesMatch(linkedinName, instagramName)) {
      return res.status(422).json({ error: "The public source pair could not pass the identity name-match check." });
    }
    return res.status(200).json({ evidence, identity: { matched: true } });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Source adapter failed." });
  }
}
