const cohortRows = [
  ["Ali Abdaal", "Writer & creator", "aliabdaal", "learning, creative work, health", "reflective", "Teaching, systems, and the small habits that make a good week.", "Public profile references creator education and entrepreneurship.", "Public posts repeatedly centre learning and life design.", "How much social energy they want on a first date is not visible."],
  ["Ankur Warikoo", "Entrepreneur & educator", "ankurwarikoo", "learning, writing, entrepreneurship", "curious", "A practical conversationalist who likes clear ideas and personal experiments.", "Public professional profile identifies an education and entrepreneurship focus.", "Public posts feature writing, work, and personal routines.", "Relationship intentions are not stated in the sources."],
  ["Kunal Shah", "Founder & investor", "kunalshah1", "technology, business, ideas", "analytical", "Drawn to unusual questions, ambitious work, and a conversation with some edge.", "Public professional profile describes founder and investment work.", "Public posts foreground ideas, work, and observations.", "Offline interests cannot be assumed from professional content."],
  ["Gaurav Munjal", "Founder", "gauravmunjal", "education, technology, building", "ambitious", "Enjoys people who care about making difficult things useful for others.", "Public professional profile references education technology and company building.", "Public posts show work and creator-community moments.", "No reliable signal about a preferred date setting."],
  ["Sahil Lavingia", "Founder & writer", "sahillavingia", "writing, design, entrepreneurship", "reflective", "A quiet builder who is likely to enjoy a precise idea over a loud plan.", "Public professional profile references Gumroad, design, and writing.", "Public posts feature independent work and reflective observations.", "The sources do not show whether they enjoy structured or spontaneous plans."],
  ["Marques Brownlee", "Technology creator", "marquesbrownlee", "technology, design, sport", "playful", "Likes clear opinions, good tools, and conversation that stays curious rather than performative.", "Public professional profile identifies technology media work.", "Public posts show technology, production, and sport-related moments.", "A profile cannot establish what they want from dating."],
  ["Gary Vaynerchuk", "Entrepreneur", "garyvee", "business, media, collecting", "high-energy", "Fast-moving and direct, with an appetite for a big conversation and a specific point of view.", "Public professional profile identifies entrepreneurship and media work.", "Public posts feature business, media, and collecting culture.", "High posting volume should not be read as availability."],
  ["Matt D'Avella", "Filmmaker", "mattdavella", "film, habits, creativity", "reflective", "Responds well to an unhurried plan and a conversation about how people make choices.", "Public professional profile references filmmaking and creative work.", "Public posts feature film, habits, and creative process.", "The sources do not reveal a comfort level with new social settings."],
  ["Hala Taha", "Founder & podcaster", "halataha", "podcasts, business, conversation", "high-energy", "A confident host who likely enjoys people who bring a real story, not just a polished bio.", "Public professional profile references podcasting and entrepreneurship.", "Public posts highlight interviews, media, and business work.", "Personal interests beyond public work are thinly evidenced."],
  ["Alex Hormozi", "Operator & investor", "hormozi", "business, learning, fitness", "analytical", "More likely to connect through a sharp question and a useful story than generic small talk.", "Public professional profile references operating and investing.", "Public posts centre business ideas, learning, and fitness-adjacent routines.", "The sources do not establish leisure preferences."],
  ["Leila Hormozi", "Operator & investor", "leilahormozi", "business, design, learning", "direct", "Values clarity, personal standards, and people who can discuss the work behind the outcome.", "Public professional profile references operating and investment work.", "Public posts feature business operations and design-minded work.", "The profile does not state what social pace feels right."],
  ["Sahil Bloom", "Writer & investor", "sahilbloom", "writing, investing, health", "curious", "A wide-ranging thinker with strong cues around ideas, health, and meaningful work.", "Public professional profile references writing and investing.", "Public posts feature writing, fitness, and reflections on work.", "The sources do not show the person’s current dating goals."],
  ["Justin Welsh", "Writer & founder", "thejustinwelsh", "writing, independence, business", "reflective", "May fit someone who likes a calm walk, an honest work story, and room for thoughtful pauses.", "Public professional profile references independent business and writing.", "Public posts show creator work and solo-business themes.", "No inference is made about private hobbies."],
  ["Simon Sinek", "Author & speaker", "simonsinek", "leadership, ideas, books", "curious", "Most engaged by purpose-led conversation and people who can turn a belief into a lived example.", "Public professional profile identifies author and speaker work.", "Public posts feature leadership ideas and public conversations.", "The sources cannot tell us their ideal amount of social novelty."],
  ["Jay Shetty", "Author & host", "jayshetty", "wellbeing, conversation, books", "warm", "Leans toward intentional, considerate conversation and low-pressure shared rituals.", "Public professional profile references hosting, writing, and wellbeing work.", "Public posts feature interviews, wellbeing, and reflective prompts.", "The evidence does not support assumptions about compatibility needs."],
  ["Nuseir Yassin", "Media creator", "nasdaily", "travel, storytelling, culture", "playful", "Likely to meet through a story, a place, or a question that opens up a different view of the world.", "Public professional profile references media and storytelling work.", "Public posts feature travel, culture, and creator work.", "Travel content alone does not prove a travel preference in dating."],
  ["David Perell", "Writer & teacher", "david_perell", "writing, ideas, learning", "reflective", "Best matched with someone who likes a bookstore detour and a conversation that can linger on one idea.", "Public professional profile references writing and education work.", "Public posts feature writing, reading, and learning communities.", "The sources contain little evidence about social pace."],
  ["Tiago Forte", "Author & educator", "fortelabs", "learning, systems, books", "analytical", "Connects through curious questions, useful frameworks, and a shared appetite for making life less noisy.", "Public professional profile references knowledge work and education.", "Public posts feature learning systems, books, and creative work.", "A system preference is not a personality diagnosis."],
  ["Anne-Laure Le Cunff", "Writer & founder", "neuranne", "learning, science, writing", "curious", "Likely to enjoy an observant, idea-led date where both people can admit what they are still figuring out.", "Public professional profile references learning science and writing.", "Public posts feature learning, science, and creative practice.", "The sources do not reveal a preferred relationship style."],
  ["Varun Mayya", "Founder & creator", "varunmayya", "technology, design, entrepreneurship", "ambitious", "A builder with public cues around technology, design, and making ideas tangible.", "Public professional profile references founding and technology work.", "Public posts show technology, design, and creator work.", "The evidence does not establish non-work interests."],
  ["Radhika Gupta", "Investor & leader", "radhikaguptarich", "investing, leadership, reading", "direct", "Likely to appreciate a person with a clear point of view and a little intellectual honesty.", "Public professional profile references investment and leadership work.", "Public posts feature leadership, finance, and personal reflections.", "Public visibility is not consent to infer private preferences."],
  ["Shradha Khapra", "Educator & builder", "shradhakhapra", "education, technology, community", "warm", "Leans toward shared learning, grounded optimism, and someone who enjoys building a community around an idea.", "Public professional profile references education and technology work.", "Public posts feature education, community, and creator work.", "The profile does not tell us their ideal first-date format."],
  ["Aman Dhattarwal", "Educator & creator", "amandhattarwal", "education, technology, community", "high-energy", "Brings visible energy around teaching and community, which could suit an active, conversational first meeting.", "Public professional profile references education and creator work.", "Public posts feature teaching, technology, and community moments.", "The sources do not provide a reliable signal about private boundaries."],
  ["Prakhar Gupta", "Host & creator", "prakharkepravachan", "conversation, culture, ideas", "playful", "A cue-rich conversational match for someone who likes questions with a little bite and a real answer.", "Public professional profile references hosting and creator work.", "Public posts feature conversations, culture, and public ideas.", "Public content cannot determine what makes someone feel comfortable."],
  ["Sandeep Maheshwari", "Entrepreneur & speaker", "sandeepmaheshwari", "ideas, photography, learning", "warm", "A people-focused communicator whose public work makes room for reflection and useful perspective.", "Public professional profile references entrepreneurship and public speaking.", "Public posts feature ideas, learning, and audience conversations.", "The sources do not support detailed lifestyle assumptions."]
];

// A LinkedIn public slug is independent from an Instagram handle. Only use an
// explicit slug when it has been checked; a provider adapter should supply the rest.
const linkedInSlugs = {
  "Ali Abdaal": "aliabdaal",
  "Ankur Warikoo": "warikoo",
  "Kunal Shah": "shahkunaly",
  "Gaurav Munjal": "gauravmunjal8",
  "Sahil Lavingia": "sahillavingia",
  "Marques Brownlee": "mkbhd",
  "Gary Vaynerchuk": "garyvaynerchuk",
  "Matt D'Avella": "matt-d-avella-bb70a5390"
};

const people = cohortRows.map((row, index) => ({
  id: `person-${index + 1}`,
  name: row[0],
  role: row[1],
  handle: row[2],
  interests: row[3].split(", "),
  energy: row[4],
  summary: row[5],
  linkedinEvidence: row[6],
  instagramEvidence: row[7],
  unknowns: row[8],
  linkedin: `https://www.linkedin.com/in/${linkedInSlugs[row[0]] || row[2]}/`,
  instagram: `https://www.instagram.com/${row[2]}/`,
  status: "seeded"
}));

const grid = document.querySelector("#cohort-grid");
const search = document.querySelector("#cohort-search");
const count = document.querySelector("#cohort-count");
const personDialog = document.querySelector("#person-dialog");
const dialogContent = document.querySelector("#dialog-content");
const addDialog = document.querySelector("#add-dialog");
const addForm = document.querySelector("#add-form");
const formError = document.querySelector("#form-error");

function initials(name) {
  return name.split(" ").slice(0, 2).map(part => part[0]).join("");
}

function renderGrid(query = "") {
  const term = query.trim().toLowerCase();
  const filtered = people.filter(person => `${person.name} ${person.role} ${person.interests.join(" ")}`.toLowerCase().includes(term));
  count.textContent = `${filtered.length} of ${people.length}`;
  grid.innerHTML = "";
  if (!filtered.length) {
    grid.append(document.querySelector("#empty-template").content.cloneNode(true));
    return;
  }
  filtered.forEach(person => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "person-card";
    card.dataset.personId = person.id;
    card.innerHTML = `<span class="avatar" aria-hidden="true">${initials(person.name)}</span><h3>${person.name}</h3><p>${person.role}</p><span class="card-meta">${person.status === "seeded" ? "source pair linked" : "source check blocked"}</span>`;
    grid.append(card);
  });
}

function sharedInterests(a, b) {
  return a.interests.filter(interest => b.interests.includes(interest));
}

function scoreMatch(a, b) {
  const shared = sharedInterests(a, b);
  const complementary = a.energy !== b.energy && !["high-energy", "ambitious"].includes(a.energy) && !["high-energy", "ambitious"].includes(b.energy);
  const base = 42 + shared.length * 16 + (a.energy === b.energy ? 9 : 0) + (complementary ? 7 : 0);
  return Math.min(94, base);
}

function rankingsFor(person) {
  return people
    .filter(candidate => candidate.id !== person.id && candidate.status === "seeded")
    .map(candidate => ({ candidate, score: scoreMatch(person, candidate), shared: sharedInterests(person, candidate) }))
    .sort((a, b) => b.score - a.score || a.candidate.name.localeCompare(b.candidate.name))
    .slice(0, 5);
}

function dateIdea(person, match) {
  const shared = sharedInterests(person, match);
  const seed = shared[0] || "curiosity";
  const plans = {
    writing: "a quiet bookshop browse followed by one coffee and a favourite paragraph each",
    learning: "a small museum or public talk, then a walk to unpack the one idea that stayed",
    technology: "a design exhibition or new-tool demo, with a no-pitch rule after the first ten minutes",
    education: "a local learning event and a conversation about the teacher who changed their mind",
    business: "a neighbourhood coffee shop where each person brings one work story they rarely get to tell",
    conversation: "a long-table café with one real question apiece and phones face-down",
    books: "a bookshop detour and a low-stakes debate over which book is worth rereading",
    creativity: "a small gallery visit and a walk home by the less obvious route",
    default: "a quiet café and a small shared question neither person has a rehearsed answer for"
  };
  return plans[seed] || plans.default;
}

function renderProfile(person, tab = "profile") {
  const matches = rankingsFor(person);
  const topMatch = matches[0]?.candidate;
  const common = topMatch ? sharedInterests(person, topMatch) : [];
  const tabContent = {
    profile: `<section class="agent-summary"><h3>What the agent can reasonably say</h3><p>${person.summary}</p></section><div class="tag-list">${person.interests.map(tag => `<span class="tag">${tag}</span>`).join("")}<span class="tag inferred">${person.energy} social energy</span></div><div class="evidence-list"><article class="evidence-item"><span class="source-label">LinkedIn · source cue</span><p>${person.linkedinEvidence}</p></article><article class="evidence-item"><span class="source-label">Instagram · source cue</span><p>${person.instagramEvidence}</p></article></div><p class="unknowns"><strong>Unknown:</strong> ${person.unknowns}</p><div class="profile-actions"><button class="button button-primary" type="button" data-tab="date">Watch an agent date</button><button class="button button-secondary" type="button" data-tab="rankings">See their rankings</button></div>`,
    date: topMatch ? `<section class="date-room"><div class="date-stage"><p class="eyebrow">A simulated first introduction</p><h3>${person.name} × ${topMatch.name}</h3><p><strong>Suggested setting:</strong> ${dateIdea(person, topMatch)}.</p></div><div class="conversation"><div class="message"><span class="speaker">${person.name}'s agent</span>I noticed we both keep returning to ${common[0] || "curious work"}. Instead of making this a polished pitch, would you be up for ${dateIdea(person, topMatch)}?</div><div class="message them"><span class="speaker">${topMatch.name}'s agent</span>That works. I’d add one rule: each person brings a recent idea that changed their mind. It gives us somewhere real to start.</div><div class="message"><span class="speaker">${person.name}'s agent</span>Good rule. I’ll bring the question behind the idea too. The point is a useful hour, not a verdict on either person.</div></div><p class="unknowns"><strong>Why this pairing:</strong> ${common.length ? `shared public cues around ${common.join(" and ")}` : "the ranking is based on compatible public interaction cues, with lower confidence because interests do not overlap"}. This is a simulation; neither person receives a message.</p></section>` : `<p class="unknowns">This record has no reviewed evidence yet, so its agent cannot date or rank people.</p>`,
    rankings: `<section class="rankings"><div class="agent-summary"><h3>Fits, with reasons</h3><p>The score is an explanation aid, not a prediction. It gives most weight to shared observed cues and lowers confidence when the evidence is thin.</p></div>${matches.map((match, index) => `<article class="ranking-row"><span class="rank">${String(index + 1).padStart(2, "0")}</span><h3>${match.candidate.name}<br /><small>${match.candidate.role}</small></h3><p>${match.shared.length ? `Shared signal: ${match.shared.join(", ")}.` : "No direct shared interest; ranked from interaction style only, so confidence is limited."}</p><span class="score">${match.score}%</span></article>`).join("")}</section>`,
    sources: `<section class="source-pane"><a href="${person.linkedin}" target="_blank" rel="noreferrer"><span>Official source 01 · LinkedIn</span>${person.linkedin}</a><a href="${person.instagram}" target="_blank" rel="noreferrer"><span>Official source 02 · Instagram</span>${person.instagram}</a><p class="unknowns"><strong>Source rule:</strong> this agent may use only the two links above. If a source is private, blocked, or cannot be read through a permitted provider, the result remains unavailable.</p></section>`
  };
  dialogContent.innerHTML = `<div class="profile-shell"><aside class="profile-aside"><p class="eyebrow">${person.status === "seeded" ? "Seeded demonstration profile" : "Source check required"}</p><h2 id="profile-name">${person.name}</h2><p>${person.role}</p><p>${person.status === "seeded" ? "Two public-source links are attached. The agent keeps its reasoning and uncertainty visible." : "The links look valid, but this browser demo cannot read platform content without a permitted source adapter."}</p><button class="close-profile" type="button" data-close-profile>Close profile</button></aside><div class="profile-content"><div class="profile-tabs" role="tablist" aria-label="${person.name} profile sections"><button type="button" role="tab" aria-selected="${tab === "profile"}" data-tab="profile">Profile</button><button type="button" role="tab" aria-selected="${tab === "date"}" data-tab="date">Agent date</button><button type="button" role="tab" aria-selected="${tab === "rankings"}" data-tab="rankings">Rankings</button><button type="button" role="tab" aria-selected="${tab === "sources"}" data-tab="sources">Sources</button></div>${tabContent[tab]}</div></div>`;
  dialogContent.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", () => renderProfile(person, button.dataset.tab)));
  dialogContent.querySelector("[data-close-profile]").addEventListener("click", () => personDialog.close());
}

function openProfile(id) {
  const person = people.find(item => item.id === id);
  if (!person) return;
  renderProfile(person);
  personDialog.showModal();
}

function validProfileUrl(value, host) {
  try { return new URL(value).hostname.replace("www.", "").endsWith(host); } catch { return false; }
}

function openAdd() { addDialog.showModal(); document.querySelector("#new-name").focus(); }

function analysisFromEvidence(evidence) {
  const byPlatform = platform => evidence.filter(item => item.platform === platform).map(item => item.text).join(" ");
  const allText = evidence.map(item => item.text).join(" ");
  const vocabulary = ["writing", "learning", "technology", "design", "education", "business", "books", "health", "travel", "film", "podcasts", "fitness"];
  const interests = vocabulary.filter(term => new RegExp(`\\b${term}\\b`, "i").test(allText)).slice(0, 4);
  return {
    interests,
    summary: "This agent is limited to the evidence returned by the two supplied public sources.",
    linkedinEvidence: byPlatform("linkedin") || "No readable LinkedIn evidence was returned.",
    instagramEvidence: byPlatform("instagram") || "No readable Instagram evidence was returned.",
    unknowns: "Relationship intentions, private preferences, and any detail not present in the returned sources remain unknown."
  };
}

document.querySelectorAll("[data-open-add]").forEach(button => button.addEventListener("click", openAdd));
document.querySelector("[data-close-add]").addEventListener("click", () => addDialog.close());
search.addEventListener("input", event => renderGrid(event.target.value));
grid.addEventListener("click", event => {
  const card = event.target.closest("[data-person-id]");
  if (card) openProfile(card.dataset.personId);
  if (event.target.matches("[data-clear-search]")) { search.value = ""; renderGrid(); search.focus(); }
});
addForm.addEventListener("submit", async event => {
  event.preventDefault();
  const data = new FormData(addForm);
  const name = data.get("name").trim();
  const linkedin = data.get("linkedin").trim();
  const instagram = data.get("instagram").trim();
  const error = !name ? "Add a name so the pending source record is identifiable." : !validProfileUrl(linkedin, "linkedin.com") ? "Use a public LinkedIn profile URL from linkedin.com." : !validProfileUrl(instagram, "instagram.com") ? "Use a public Instagram profile URL from instagram.com." : "";
  if (error) { formError.textContent = error; formError.hidden = false; return; }
  formError.hidden = true;
  const submit = addForm.querySelector("button[type='submit']");
  submit.disabled = true;
  submit.textContent = "Checking permitted source adapter…";
  let analysis;
  let status = "blocked";
  try {
    const response = await fetch("/api/analyse", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name, linkedin, instagram }) });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || "The live source adapter is unavailable on this deployment.");
    analysis = analysisFromEvidence(payload.evidence);
    status = "ready";
  } catch (sourceError) {
    analysis = { interests: [], summary: "No analysis is available until a permitted source reader returns evidence from both supplied links.", linkedinEvidence: "Not yet read.", instagramEvidence: "Not yet read.", unknowns: `All compatibility signals remain unknown. ${sourceError.message}` };
  } finally {
    submit.disabled = false;
    submit.textContent = "Check these sources";
  }
  const record = { id: `person-${Date.now()}`, name, role: status === "ready" ? "Source-backed profile" : "Pending source review", handle: "pending", interests: analysis.interests, energy: status === "ready" ? "curious" : "unknown", summary: analysis.summary, linkedinEvidence: analysis.linkedinEvidence, instagramEvidence: analysis.instagramEvidence, unknowns: analysis.unknowns, linkedin, instagram, status };
  people.unshift(record);
  renderGrid(search.value);
  addForm.reset();
  addDialog.close();
  openProfile(record.id);
});

renderGrid();
