const cohortRows = [
  ["Ali Abdaal", "Writer & creator", "aliabdaal", "learning, creative work, health", "reflective", "Teaching, systems, and the small habits that make a good week.", "Public profile references creator education and entrepreneurship.", "Public posts repeatedly centre learning and life design.", "How much social energy they want on a first date is not visible."],
  ["Ankur Warikoo", "Entrepreneur & educator", "ankurwarikoo", "learning, writing, entrepreneurship", "curious", "A practical conversationalist who likes clear ideas and personal experiments.", "Public professional profile identifies an education and entrepreneurship focus.", "Public posts feature writing, work, and personal routines.", "Relationship intentions are not stated in the sources."],
  ["Kunal Shah", "Founder & investor", "kunalshah1", "technology, business, ideas", "analytical", "Drawn to unusual questions, ambitious work, and a conversation with some edge.", "Public professional profile describes founder and investment work.", "Public posts foreground ideas, work, and observations.", "Offline interests cannot be assumed from professional content."],
  ["Gaurav Munjal", "Founder", "gauravmunjal", "education, technology, building", "ambitious", "Enjoys people who care about making difficult things useful for others.", "Public professional profile references education technology and company building.", "Public posts show work and creator-community moments.", "No reliable signal about a preferred date setting."],
  ["Sahil Lavingia", "Founder & writer", "sahillavingia", "writing, design, entrepreneurship", "reflective", "A quiet builder who is likely to enjoy a precise idea over a loud plan.", "Public professional profile references Gumroad, design, and writing.", "Public posts feature independent work and reflective observations.", "The sources do not show whether they enjoy structured or spontaneous plans."],
  ["Marques Brownlee", "Technology creator", "marquesbrownlee", "technology, design, sport", "playful", "Likes clear opinions, good tools, and conversation that stays curious rather than performative.", "Public professional profile identifies technology media work.", "Public posts show technology, production, and sport-related moments.", "A profile cannot establish what they want from dating."],
  ["Gary Vaynerchuk", "Entrepreneur", "garyvee", "business, media, collecting", "high-energy", "Fast-moving and direct, with an appetite for a big conversation and a specific point of view.", "Public professional profile identifies entrepreneurship and media work.", "Public posts feature business, media, and collecting culture.", "High posting volume should not be read as availability."],
  ["Matt D'Avella", "Filmmaker", "mattdavella", "film, habits, creativity", "reflective", "Responds well to an unhurried plan and a conversation about how people make choices.", "Public professional profile references filmmaking and creative work.", "Public posts feature film, habits, and creative process.", "The sources do not reveal a comfort level with new social settings."],
  ["Marie Forleo", "Entrepreneur & author", "marieforleo", "business, learning, writing", "warm", "A practical optimist with public cues around building a business and a life with room for growth.", "Public professional profile identifies entrepreneurship and education work.", "Public posts focus on learning, business, and personal growth.", "Relationship intentions and private preferences are not stated in the sources."],
  ["Alex Hormozi", "Operator & investor", "hormozi", "business, learning, fitness", "analytical", "More likely to connect through a sharp question and a useful story than generic small talk.", "Public professional profile references operating and investing.", "Public posts centre business ideas, learning, and fitness-adjacent routines.", "The sources do not establish leisure preferences."],
  ["Leila Hormozi", "Operator & investor", "leilahormozi", "business, design, learning", "direct", "Values clarity, personal standards, and people who can discuss the work behind the outcome.", "Public professional profile references operating and investment work.", "Public posts feature business operations and design-minded work.", "The profile does not state what social pace feels right."],
  ["Sahil Bloom", "Writer & investor", "sahilbloom", "writing, investing, health", "curious", "A wide-ranging thinker with strong cues around ideas, health, and meaningful work.", "Public professional profile references writing and investing.", "Public posts feature writing, fitness, and reflections on work.", "The sources do not show the person’s current dating goals."],
  ["Justin Welsh", "Writer & founder", "thejustinwelsh", "writing, independence, business", "reflective", "May fit someone who likes a calm walk, an honest work story, and room for thoughtful pauses.", "Public professional profile references independent business and writing.", "Public posts show creator work and solo-business themes.", "No inference is made about private hobbies."],
  ["Simon Sinek", "Author & speaker", "simonsinek", "leadership, ideas, books", "curious", "Most engaged by purpose-led conversation and people who can turn a belief into a lived example.", "Public professional profile identifies author and speaker work.", "Public posts feature leadership ideas and public conversations.", "The sources cannot tell us their ideal amount of social novelty."],
  ["Jay Shetty", "Author & host", "jayshetty", "wellbeing, conversation, books", "warm", "Leans toward intentional, considerate conversation and low-pressure shared rituals.", "Public professional profile references hosting, writing, and wellbeing work.", "Public posts feature interviews, wellbeing, and reflective prompts.", "The evidence does not support assumptions about compatibility needs."],
  ["Nuseir Yassin", "Media creator", "nasdaily", "travel, storytelling, culture", "playful", "Likely to meet through a story, a place, or a question that opens up a different view of the world.", "Public professional profile references media and storytelling work.", "Public posts feature travel, culture, and creator work.", "Travel content alone does not prove a travel preference in dating."],
  ["Lewis Howes", "Author & host", "lewishowes", "learning, books, fitness", "warm", "A public-facing host with cues around learning, sport, and conversations about meaningful growth.", "Public professional profile identifies author, podcast, and sports leadership work.", "Public posts foreground the School of Greatness, books, and handball.", "The sources do not establish a preferred relationship style."],
  ["Tiago Forte", "Author & educator", "fortelabs", "learning, systems, books", "analytical", "Connects through curious questions, useful frameworks, and a shared appetite for making life less noisy.", "Public professional profile references knowledge work and education.", "Public posts feature learning systems, books, and creative work.", "A system preference is not a personality diagnosis."],
  ["Anne-Laure Le Cunff", "Writer & founder", "neuranne", "learning, science, writing", "curious", "Likely to enjoy an observant, idea-led date where both people can admit what they are still figuring out.", "Public professional profile references learning science and writing.", "Public posts feature learning, science, and creative practice.", "The sources do not reveal a preferred relationship style."],
  ["Varun Mayya", "Founder & creator", "varunmayya", "technology, design, entrepreneurship", "ambitious", "A builder with public cues around technology, design, and making ideas tangible.", "Public professional profile references founding and technology work.", "Public posts show technology, design, and creator work.", "The evidence does not establish non-work interests."],
  ["Noah Kagan", "Founder & creator", "noahkagan", "business, technology, learning", "playful", "A maker with public cues around entrepreneurship, products, and staying curious through experiments.", "Public professional profile identifies AppSumo and entrepreneurial work.", "Public posts feature entrepreneurship, technology, and creator education.", "The sources do not establish private relationship preferences."],
  ["Shradha Khapra", "Educator & builder", "shradhakhapra", "education, technology, community", "warm", "Leans toward shared learning, grounded optimism, and someone who enjoys building a community around an idea.", "Public professional profile references education and technology work.", "Public posts feature education, community, and creator work.", "The profile does not tell us their ideal first-date format."],
  ["Aman Dhattarwal", "Educator & creator", "amandhattarwal", "education, technology, community", "high-energy", "Brings visible energy around teaching and community, which could suit an active, conversational first meeting.", "Public professional profile references education and creator work.", "Public posts feature teaching, technology, and community moments.", "The sources do not provide a reliable signal about private boundaries."],
  ["Prakhar Gupta", "Host & creator", "prakharkepravachan", "conversation, culture, ideas", "playful", "A cue-rich conversational match for someone who likes questions with a little bite and a real answer.", "Public professional profile references hosting and creator work.", "Public posts feature conversations, culture, and public ideas.", "Public content cannot determine what makes someone feel comfortable."],
  ["Sandeep Maheshwari", "Entrepreneur & speaker", "sandeepmaheshwari", "ideas, photography, learning", "warm", "A people-focused communicator whose public work makes room for reflection and useful perspective.", "Public professional profile references entrepreneurship and public speaking.", "Public posts feature ideas, learning, and audience conversations.", "The sources do not support detailed lifestyle assumptions."]
];

const seedEvidence = {"person-1":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/aliabdaal","cue":"I’m Ali, a YouTuber, podcaster, author of New York Times and Sunday Times bestseller…"},"instagram":{"url":"https://www.instagram.com/aliabdaal","cue":"👨‍⚕️ Doctor turned Entrepreneur\n📚 NYT Bestselling Book: Feel-Good Productivity\n💻 @lifestylebusinessacademy\n👇Give @superfocus.me a go"}},"person-2":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/warikoo","cue":"Founder @WebVeda, @IndiaGeniusChallenge @Monzy • 6X Bestselling Author • 16M+ community"},"instagram":{"url":"https://www.instagram.com/ankurwarikoo","cue":"Founder: WebVeda | India Genius Challenge | Monzy\nLove learning, teaching and sharing ❤️"}},"person-3":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/kunalshah1","cue":"Head - WhatsApp, Founder - CRED, curious."},"instagram":{"url":"https://www.instagram.com/kunalshah1","cue":""}},"person-4":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/gauravmunjal","cue":"Avid participant and proponent of the Gig Economy"},"instagram":{"url":"https://www.instagram.com/gauravmunjal","cue":"Unacademy, Airlearn, Graphy, PrepLadder"}},"person-5":{"verified":false,"linkedin":{"url":"https://www.linkedin.com/in/sahillavingia","cue":"Building products for fun and profit"},"instagram":{"url":"https://www.instagram.com/sahillavingia","cue":""}},"person-6":{"verified":false,"linkedin":{"url":"https://www.linkedin.com/in/marquesbrownlee","cue":""},"instagram":{"url":"https://www.instagram.com/marquesbrownlee","cue":"I was born to play games and eat pizza. Egypt."}},"person-7":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/garyvaynerchuk","cue":"Chairman – VaynerX, CEO – VaynerMedia, Creator – VeeFriends"},"instagram":{"url":"https://www.instagram.com/garyvee","cue":"✈️CEO/Chairman @vaynermedia\n🐈‍⬛CEO/Founder   @veefriends\n🔮Investor FB,Venmo,Twitter,Liquid Death\n📲Text me 1-212-931-5731\n🍱@vcrgroup partner"}},"person-8":{"verified":false,"linkedin":{"url":"https://www.linkedin.com/in/mattdavella","cue":""},"instagram":{"url":"https://www.instagram.com/mattdavella","cue":"Filmmaker, YouTuber, guy who wears the same shirt every day. Helping creators make meaningful stuff without sacrificing their soul to the algorithm."}},"person-9":{"verified":false,"linkedin":{"url":"https://www.linkedin.com/in/halataha","cue":""},"instagram":{"url":"https://www.instagram.com/halataha","cue":"\"واجعل لي لسان صدق في الآخرين\""}},"person-10":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/alexhormozi","cue":""},"instagram":{"url":"https://www.instagram.com/hormozi","cue":"Founder Acquisition.com, Co-Founder Skool.com.\nI talk about scaling businesses.\nGet your free scaling roadmap 👇"}},"person-11":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/leilahormozi","cue":"Leila Hormozi is an entrepreneur, investor, and Chairwoman of Acquisition.com, a $200M+…"},"instagram":{"url":"https://www.instagram.com/leilahormozi","cue":"Founder & Chairwoman @acquisition\nBuilding the business that builds businesses\n⬇️Get Our Free Five Scaling Frameworks⬇️"}},"person-12":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/sahilbloom","cue":"NYT Bestselling Author | Entrepreneur | Investor"},"instagram":{"url":"https://www.instagram.com/sahilbloom","cue":"New York Times Bestselling Author of The 5 Types of Wealth. Founder @wildromanofficial. Creating things I’d want to consume."}},"person-13":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/justinwelsh","cue":"Writer & Entrepreneur. I write The Saturday Essay for 200,000+ ambitious people living and working on their own terms."},"instagram":{"url":"https://www.instagram.com/thejustinwelsh","cue":"Writer & Entrepreneur. I write The Saturday Essay for 200,000+ ambitious people living and working on their own terms."}},"person-14":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/simonsinek","cue":"Optimist, New York Times bestselling author of \"Start with Why\" and \"The Infinite Game\", and founder of The Optimism Company"},"instagram":{"url":"https://www.instagram.com/simonsinek","cue":"To run & jump & laugh & cry & love & hope & imagine...to experience as much as I can for one purpose: to inspire.🇺🇦 \nFounder of The Optimism Company"}},"person-15":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/jayshetty","cue":"I’m a proven technology leader, versatile architect and entrepreneur with 20+ years of…"},"instagram":{"url":"https://www.instagram.com/jayshetty","cue":"Author,Podcaster,Speaker,Coach\n#1 @nytimes \n🎙️ @jayshettypodcast \n🎬 @perfectstrangersmedia \n🫧 @drinkjuni \n🧘‍♀️ @calm"}},"person-16":{"verified":false,"linkedin":{"url":"https://www.linkedin.com/in/nasdaily","cue":""},"instagram":{"url":"https://www.instagram.com/nasdaily","cue":"Building @nas.com_ to help businesses grow with AI. \ncontact: ea@nas.com"}},"person-17":{"verified":false,"linkedin":{"url":"https://www.linkedin.com/in/david_perell","cue":""},"instagram":{"url":"https://www.instagram.com/david_perell","cue":""}},"person-18":{"verified":false,"linkedin":{"url":"https://www.linkedin.com/in/fortelabs","cue":""},"instagram":{"url":"https://www.instagram.com/fortelabs","cue":""}},"person-19":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/neuranne","cue":"I'm a neuroscientist at King's College London investigating the neurodevelopment of…"},"instagram":{"url":"https://www.instagram.com/neuranne","cue":"• Neuroscientist @kingsioppn\n• Author of Tiny Experiments (order now!)\n• 130k people read the Ness Labs newsletter 👇"}},"person-20":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/varunmayya","cue":"Builder, hacker, content creator, idiot"},"instagram":{"url":"https://www.instagram.com/varunmayya","cue":""}},"person-21":{"verified":false,"linkedin":{"url":"https://www.linkedin.com/in/radhikaguptarich","cue":""},"instagram":{"url":"https://www.instagram.com/radhikaguptarich","cue":""}},"person-22":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/shradha-khapra","cue":""},"instagram":{"url":"https://www.instagram.com/shradhakhapra","cue":"Founder - @officialapnacollege | 10Mn+\nEx - Microsoft, DRDO, Google SPS\n✉️ partnerships@apnacollege.in\n🏆 No.1 for Tech Placement Preparation👇"}},"person-23":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/dhattarwalaman","cue":""},"instagram":{"url":"https://www.instagram.com/amandhattarwal","cue":"Entrepreneur by chance, learner by choice."}},"person-24":{"verified":false,"linkedin":{"url":"https://www.linkedin.com/in/prakharkepravachan","cue":""},"instagram":{"url":"https://www.instagram.com/prakharkepravachan","cue":"Hi. I have changed my username now.\nYou can find me now on @prvkhvr and @pgxpodcast"}},"person-25":{"verified":true,"linkedin":{"url":"https://www.linkedin.com/in/sandeepmaheshwari","cue":""},"instagram":{"url":"https://www.instagram.com/sandeepmaheshwari","cue":""}}};

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
  "Matt D'Avella": "matt-d-avella-bb70a5390",
  "Marie Forleo": "marieforleo",
  "Lewis Howes": "lewishowes",
  "Noah Kagan": "noahkagan",
  "Justin Welsh": "justinwelsh",
  "Nuseir Yassin": "nyassin",
  "David Perell": "davidperell",
  "Tiago Forte": "tiagoforte",
  "Radhika Gupta": "radhikagupta2",
  "Shradha Khapra": "shradha-khapra"
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
  status: "checking"
}));

const sourceTopics = ["writing", "learning", "technology", "design", "education", "business", "books", "health", "travel", "film", "podcasts", "fitness", "investing", "leadership", "community", "photography"];

function hasVerifiedSources(person) {
  return person.status === "seeded" || person.status === "verified";
}

function comparableName(value) {
  return value.toLocaleLowerCase().replace(/[^a-z0-9]+/g, "");
}

function topicsFromEvidence(text) {
  return sourceTopics.filter(topic => new RegExp(`\\b${topic}\\b`, "i").test(text)).slice(0, 4);
}

async function hydrateSeedEvidence() {
  try {
    const evidence = seedEvidence;
    people.forEach(person => {
      const record = evidence[person.id];
      if (!record) { person.status = "blocked"; return; }
      if (record.linkedin?.url) person.linkedin = record.linkedin.url;
      if (record.instagram?.url) person.instagram = record.instagram.url;
      const sourceText = [record.linkedin?.cue, record.instagram?.cue].filter(Boolean).join(" ");
      const derivedTopics = topicsFromEvidence(sourceText);
      if (derivedTopics.length) person.interests = derivedTopics;
      if (record.linkedin?.cue) person.linkedinEvidence = record.linkedin.cue;
      if (record.instagram?.cue) person.instagramEvidence = record.instagram.cue;
      person.status = record.verified ? "seeded" : "blocked";
      if (!record.verified) person.unknowns = "This source pair did not pass the name-match check. It stays out of rankings until an operator verifies both public profiles refer to the same person.";
    });
  } catch {
    people.forEach(person => { person.status = "blocked"; person.unknowns = "Seed evidence could not be loaded, so this profile cannot be ranked or simulated."; });
  }
  renderGrid(search.value);
}

const grid = document.querySelector("#cohort-grid");
const search = document.querySelector("#cohort-search");
const count = document.querySelector("#cohort-count");
const verifiedCount = document.querySelector("#verified-count");
const reviewCount = document.querySelector("#review-count");
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
  const verified = people.filter(hasVerifiedSources).length;
  const inReview = people.filter(person => person.status === "blocked" || person.status === "checking").length;
  verifiedCount.textContent = `${verified} verified source ${verified === 1 ? "pair" : "pairs"}`;
  reviewCount.textContent = inReview ? `${inReview} pairs need review` : "All source pairs reviewed";
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
    const sourceState = hasVerifiedSources(person) ? "source pair verified" : person.status === "checking" ? "checking sources" : "source check blocked";
    card.innerHTML = `<span class="avatar" aria-hidden="true">${initials(person.name)}</span><h3>${person.name}</h3><p>${person.role}</p><span class="card-meta">${sourceState}</span>`;
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
    .filter(candidate => candidate.id !== person.id && comparableName(candidate.name) !== comparableName(person.name) && hasVerifiedSources(candidate))
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
  const topMatch = hasVerifiedSources(person) ? matches[0]?.candidate : null;
  const common = topMatch ? sharedInterests(person, topMatch) : [];
  const tabContent = {
    profile: `<section class="agent-summary"><h3>What the agent can reasonably say</h3><p>${person.summary}</p></section><div class="tag-list">${person.interests.map(tag => `<span class="tag">${tag}</span>`).join("")}<span class="tag inferred">${person.energy} social energy</span></div><div class="evidence-list"><article class="evidence-item"><span class="source-label">LinkedIn · source cue</span><p>${person.linkedinEvidence}</p></article><article class="evidence-item"><span class="source-label">Instagram · source cue</span><p>${person.instagramEvidence}</p></article></div><p class="unknowns"><strong>Unknown:</strong> ${person.unknowns}</p><div class="profile-actions"><button class="button button-primary" type="button" data-tab="date">Watch an agent date</button><button class="button button-secondary" type="button" data-tab="rankings">See their rankings</button></div>`,
    date: topMatch ? `<section class="date-room"><div class="date-stage"><p class="eyebrow">A simulated first introduction</p><h3>${person.name} × ${topMatch.name}</h3><p><strong>Suggested setting:</strong> ${dateIdea(person, topMatch)}.</p></div><div class="conversation"><div class="message"><span class="speaker">${person.name}'s agent</span>I noticed we both keep returning to ${common[0] || "curious work"}. Instead of making this a polished pitch, would you be up for ${dateIdea(person, topMatch)}?</div><div class="message them"><span class="speaker">${topMatch.name}'s agent</span>That works. I’d add one rule: each person brings a recent idea that changed their mind. It gives us somewhere real to start.</div><div class="message"><span class="speaker">${person.name}'s agent</span>Good rule. I’ll bring the question behind the idea too. The point is a useful hour, not a verdict on either person.</div></div><p class="unknowns"><strong>Why this pairing:</strong> ${common.length ? `shared public cues around ${common.join(" and ")}` : "the ranking is based on compatible public interaction cues, with lower confidence because interests do not overlap"}. This is a simulation; neither person receives a message.</p></section>` : `<p class="unknowns">This record has no reviewed evidence yet, so its agent cannot date or rank people.</p>`,
    rankings: `<section class="rankings"><div class="agent-summary"><h3>Fits, with reasons</h3><p>The score is an explanation aid, not a prediction. It gives most weight to shared observed cues and lowers confidence when the evidence is thin.</p></div>${matches.map((match, index) => `<article class="ranking-row"><span class="rank">${String(index + 1).padStart(2, "0")}</span><h3>${match.candidate.name}<br /><small>${match.candidate.role}</small></h3><p>${match.shared.length ? `Shared signal: ${match.shared.join(", ")}.` : "No direct shared interest; ranked from interaction style only, so confidence is limited."}</p><span class="score">${match.score}%</span></article>`).join("")}</section>`,
    sources: `<section class="source-pane"><a href="${person.linkedin}" target="_blank" rel="noreferrer"><span>Official source 01 · LinkedIn</span>${person.linkedin}</a><a href="${person.instagram}" target="_blank" rel="noreferrer"><span>Official source 02 · Instagram</span>${person.instagram}</a><p class="unknowns"><strong>Source rule:</strong> this agent may use only the two links above. If a source is private, blocked, or cannot be read through a permitted provider, the result remains unavailable.</p></section>`
  };
  const profileLabel = person.status === "seeded" ? "Seeded demonstration profile" : hasVerifiedSources(person) ? "Verified source pair" : "Source check required";
  const profileNote = hasVerifiedSources(person) ? "Two public-source links are attached. The agent keeps its reasoning and uncertainty visible." : "This pair stays out of simulations and rankings until its public profiles pass the identity name-match check.";
  dialogContent.innerHTML = `<div class="profile-shell"><aside class="profile-aside"><p class="eyebrow">${profileLabel}</p><h2 id="profile-name">${person.name}</h2><p>${person.role}</p><p>${profileNote}</p><button class="close-profile" type="button" data-close-profile>Close profile</button></aside><div class="profile-content"><div class="profile-tabs" role="tablist" aria-label="${person.name} profile sections"><button type="button" role="tab" aria-selected="${tab === "profile"}" data-tab="profile">Profile</button><button type="button" role="tab" aria-selected="${tab === "date"}" data-tab="date">Agent date</button><button type="button" role="tab" aria-selected="${tab === "rankings"}" data-tab="rankings">Rankings</button><button type="button" role="tab" aria-selected="${tab === "sources"}" data-tab="sources">Sources</button></div>${tabContent[tab]}</div></div>`;
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
    if (!payload.identity?.matched) throw new Error("The public source pair could not pass the identity name-match check.");
    analysis = analysisFromEvidence(payload.evidence);
    status = "verified";
  } catch (sourceError) {
    analysis = { interests: [], summary: "No analysis is available until a permitted source reader returns evidence from both supplied links.", linkedinEvidence: "Not yet read.", instagramEvidence: "Not yet read.", unknowns: `All compatibility signals remain unknown. ${sourceError.message}` };
  } finally {
    submit.disabled = false;
    submit.textContent = "Check these sources";
  }
  const record = { id: `person-${Date.now()}`, name, role: status === "verified" ? "Source-backed profile" : "Pending source review", handle: "pending", interests: analysis.interests, energy: status === "verified" ? "curious" : "unknown", summary: analysis.summary, linkedinEvidence: analysis.linkedinEvidence, instagramEvidence: analysis.instagramEvidence, unknowns: analysis.unknowns, linkedin, instagram, status };
  people.unshift(record);
  renderGrid(search.value);
  addForm.reset();
  addDialog.close();
  openProfile(record.id);
});

renderGrid();
hydrateSeedEvidence();
