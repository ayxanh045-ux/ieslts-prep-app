// The Master IELTS 200-Word Paraphrasing Lexicon Data
// A Complete Reference Guide to Eliminating Repetition in Writing (Task 1 & 2) and Speaking

export interface ParaphraseCategory {
  index: number;
  name: string;
  range: [number, number];
  icon: string;
  description: string;
}

export interface ParaphraseLexiconItem {
  id: number;
  categoryId: number;
  categoryName: string;
  categoryIcon: string;
  baseWord: string;
  highBandParaphrases: string[];
  contextSentence: string;
}

export const PARAPHRASE_CATEGORIES: ParaphraseCategory[] = [
  {
    "index": 1,
    "name": "Academic Verbs & Actions",
    "range": [
      1,
      20
    ],
    "icon": "\u26a1",
    "description": "Show, increase, decrease, cause, prevent, alter, furnish..."
  },
  {
    "index": 2,
    "name": "Judgments, Qualities & Modifiers",
    "range": [
      21,
      40
    ],
    "icon": "\ud83d\udc8e",
    "description": "Beneficial, deleterious, immense, negligible, paramount..."
  },
  {
    "index": 3,
    "name": "People, Society & Demographics",
    "range": [
      41,
      60
    ],
    "icon": "\ud83d\udc65",
    "description": "Populace, adolescents, affluent strata, denizens, felons..."
  },
  {
    "index": 4,
    "name": "Education, Learning & Intellect",
    "range": [
      61,
      80
    ],
    "icon": "\ud83c\udf93",
    "description": "Tertiary establishments, pedagogical professionals, erudition..."
  },
  {
    "index": 5,
    "name": "Technology, Science & Innovation",
    "range": [
      81,
      100
    ],
    "icon": "\ud83d\ude80",
    "description": "Automated algorithms, synthetic cognitive agents, cyberspace..."
  },
  {
    "index": 6,
    "name": "Environment, Climate & Urban Life",
    "range": [
      101,
      120
    ],
    "icon": "\ud83c\udf31",
    "description": "Biosphere, contamination, metropolises, anthropogenic crisis..."
  },
  {
    "index": 7,
    "name": "Economy, Business, Money & Work",
    "range": [
      121,
      140
    ],
    "icon": "\ud83d\udcbc",
    "description": "Remuneration, corporate entities, fiscal ecosystem, capital..."
  },
  {
    "index": 8,
    "name": "Health, Well-being & Lifestyle",
    "range": [
      141,
      160
    ],
    "icon": "\ud83e\ude7a",
    "description": "Physiological vitality, chronic ailments, adiposity, longevity..."
  },
  {
    "index": 9,
    "name": "Causes, Effects, Logic & Problems",
    "range": [
      161,
      180
    ],
    "icon": "\ud83e\udde9",
    "description": "Catalyst, repercussions, conundrums, empirical validation..."
  },
  {
    "index": 10,
    "name": "Discourse Markers & Transitions",
    "range": [
      181,
      200
    ],
    "icon": "\ud83d\udd17",
    "description": "Furthermore, conversely, owing to, by stark contrast, ultimately..."
  }
];

export const PARAPHRASE_LEXICON_ITEMS: ParaphraseLexiconItem[] = [
  {
    "id": 1,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Show",
    "highBandParaphrases": [
      "Illustrate",
      "demonstrate",
      "elucidate",
      "depict",
      "reveal",
      "delineate"
    ],
    "contextSentence": "The diagram elucidates the cyclical process of..."
  },
  {
    "id": 2,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Increase (v)",
    "highBandParaphrases": [
      "Surge",
      "escalate",
      "soar",
      "proliferate",
      "climb",
      "experience an upward trajectory"
    ],
    "contextSentence": "Carbon emissions have surged dramatically over the decade."
  },
  {
    "id": 3,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Decrease (v)",
    "highBandParaphrases": [
      "Plummet",
      "plunge",
      "dwindle",
      "diminish",
      "contract",
      "experience a downturn"
    ],
    "contextSentence": "Oil consumption dwindled steadily following the mandate."
  },
  {
    "id": 4,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Cause (v)",
    "highBandParaphrases": [
      "Trigger",
      "precipitate",
      "engender",
      "bring about",
      "induce",
      "give rise to"
    ],
    "contextSentence": "Rapid industrialisation precipitated severe air degradation."
  },
  {
    "id": 5,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Stop / Prevent",
    "highBandParaphrases": [
      "Halt",
      "impede",
      "deter",
      "curb",
      "thwart",
      "restrain",
      "mitigate"
    ],
    "contextSentence": "Government policies must curb reckless fossil fuel usage."
  },
  {
    "id": 6,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Change (v)",
    "highBandParaphrases": [
      "Transform",
      "revolutionise",
      "alter",
      "modify",
      "diversify",
      "undergo shifts"
    ],
    "contextSentence": "Urban planning has undergone a monumental transformation."
  },
  {
    "id": 7,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Create / Make",
    "highBandParaphrases": [
      "Generate",
      "establish",
      "formulate",
      "produce",
      "fabricate",
      "cultivate"
    ],
    "contextSentence": "Renewable initiatives generate extensive employment prospects."
  },
  {
    "id": 8,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Give / Provide",
    "highBandParaphrases": [
      "Furnish",
      "allocate",
      "render",
      "confer",
      "dispense",
      "supply"
    ],
    "contextSentence": "The state must furnish subsidies for tertiary scholars."
  },
  {
    "id": 9,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Get / Receive",
    "highBandParaphrases": [
      "Acquire",
      "obtain",
      "derive",
      "gain",
      "garner",
      "secure"
    ],
    "contextSentence": "Graduates derive substantial professional advantage from internships."
  },
  {
    "id": 10,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Use (v)",
    "highBandParaphrases": [
      "Utilise",
      "employ",
      "harness",
      "exploit",
      "adopt",
      "leverage"
    ],
    "contextSentence": "Companies should leverage artificial intelligence to optimise efficiency."
  },
  {
    "id": 11,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Choose",
    "highBandParaphrases": [
      "Opt for",
      "select",
      "single out",
      "designate",
      "gravitate toward"
    ],
    "contextSentence": "Many students gravitate toward STEM disciplines."
  },
  {
    "id": 12,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Need / Require",
    "highBandParaphrases": [
      "Necessitate",
      "demand",
      "entail",
      "warrant",
      "call for"
    ],
    "contextSentence": "The housing crisis warrants immediate government intervention."
  },
  {
    "id": 13,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Understand",
    "highBandParaphrases": [
      "Comprehend",
      "fathom",
      "grasp",
      "perceive",
      "discern"
    ],
    "contextSentence": "Scholars must discern the intricate relationship between economics and ecology."
  },
  {
    "id": 14,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Agree",
    "highBandParaphrases": [
      "Concur",
      "endorse",
      "subscribe to",
      "advocate",
      "align with"
    ],
    "contextSentence": "I firmly concur with the assertion that primary healthcare is fundamental."
  },
  {
    "id": 15,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Disagree",
    "highBandParaphrases": [
      "Dispute",
      "contest",
      "repudiate",
      "refute",
      "oppose",
      "dissent from"
    ],
    "contextSentence": "Socio-economic analysts refute the premise that automation causes net job loss."
  },
  {
    "id": 16,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Destroy / Damage",
    "highBandParaphrases": [
      "Devastate",
      "impair",
      "ruin",
      "compromise",
      "wreak havoc on",
      "degrade"
    ],
    "contextSentence": "Deforestation severely compromises global ecological stability."
  },
  {
    "id": 17,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Improve",
    "highBandParaphrases": [
      "Enhance",
      "ameliorate",
      "bolster",
      "upgrade",
      "elevate",
      "refine"
    ],
    "contextSentence": "Modern public transit ameliorates daily commuting stress."
  },
  {
    "id": 18,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Happen / Occur",
    "highBandParaphrases": [
      "Transpire",
      "materialise",
      "arise",
      "ensue",
      "take place"
    ],
    "contextSentence": "Unforeseen complications frequently materialise during rapid urban sprawl."
  },
  {
    "id": 19,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Explain",
    "highBandParaphrases": [
      "Articulate",
      "clarify",
      "explicate",
      "account for",
      "rationalize"
    ],
    "contextSentence": "Sociologists account for this demographic trend by citing economic pressure."
  },
  {
    "id": 20,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Start / Begin",
    "highBandParaphrases": [
      "Commence",
      "initiate",
      "embark on",
      "inaugurate",
      "trigger"
    ],
    "contextSentence": "Municipalities must initiate recycling campaigns without delay."
  },
  {
    "id": 21,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Good / Positive",
    "highBandParaphrases": [
      "Beneficial",
      "advantageous",
      "constructive",
      "salutary",
      "fruitful"
    ],
    "contextSentence": "Bilingualism yields salutary cognitive dividends."
  },
  {
    "id": 22,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Bad / Negative",
    "highBandParaphrases": [
      "Detrimental",
      "adverse",
      "deleterious",
      "pernicious",
      "counterproductive"
    ],
    "contextSentence": "Sedentary routines exert deleterious effects on cardiovascular health."
  },
  {
    "id": 23,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Big / Huge",
    "highBandParaphrases": [
      "Substantial",
      "monumental",
      "immense",
      "considerable",
      "colossal"
    ],
    "contextSentence": "Urban migration places an immense strain on civic services."
  },
  {
    "id": 24,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Small / Minor",
    "highBandParaphrases": [
      "Negligible",
      "marginal",
      "minimal",
      "modest",
      "trifling",
      "fractional"
    ],
    "contextSentence": "The price disparity produced a negligible shift in consumer demand."
  },
  {
    "id": 25,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Important",
    "highBandParaphrases": [
      "Crucial",
      "vital",
      "paramount",
      "pivotal",
      "indispensable",
      "momentous"
    ],
    "contextSentence": "Early childhood intervention is of paramount importance."
  },
  {
    "id": 26,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Unimportant",
    "highBandParaphrases": [
      "Inconsequential",
      "trivial",
      "peripheral",
      "negligible",
      "secondary"
    ],
    "contextSentence": "Initial logistical concerns proved inconsequential to overall success."
  },
  {
    "id": 27,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Necessary",
    "highBandParaphrases": [
      "Imperative",
      "compulsory",
      "obligatory",
      "indispensable",
      "requisite"
    ],
    "contextSentence": "Strict statutory compliance is imperative for workplace safety."
  },
  {
    "id": 28,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Easy",
    "highBandParaphrases": [
      "Straightforward",
      "effortless",
      "unchallenging",
      "manageable",
      "accessible"
    ],
    "contextSentence": "Digital portals make tax filing vastly more accessible."
  },
  {
    "id": 29,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Difficult / Hard",
    "highBandParaphrases": [
      "Arduous",
      "demanding",
      "formidable",
      "onerous",
      "challenging"
    ],
    "contextSentence": "Mastering a foreign language is an arduous intellectual undertaking."
  },
  {
    "id": 30,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Many / A lot of",
    "highBandParaphrases": [
      "Numerous",
      "myriad",
      "an abundance of",
      "a plethora of",
      "copious"
    ],
    "contextSentence": "Globalisation presents myriad economic opportunities."
  },
  {
    "id": 31,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Few / Little",
    "highBandParaphrases": [
      "Scarce",
      "sparse",
      "deficient",
      "meager",
      "nominal",
      "scant"
    ],
    "contextSentence": "Public funding allocated to regional libraries remains scant."
  },
  {
    "id": 32,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Common / Usual",
    "highBandParaphrases": [
      "Prevalent",
      "ubiquitous",
      "widespread",
      "conventional",
      "pervasive"
    ],
    "contextSentence": "Mobile payment systems are now ubiquitous across urban centres."
  },
  {
    "id": 33,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Rare / Unusual",
    "highBandParaphrases": [
      "Unprecedented",
      "exceptional",
      "scarce",
      "anomalous",
      "infrequent"
    ],
    "contextSentence": "Such meteorologic events were virtually unprecedented a century ago."
  },
  {
    "id": 34,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Dangerous",
    "highBandParaphrases": [
      "Hazardous",
      "perilous",
      "precarious",
      "treacherous",
      "high-risk"
    ],
    "contextSentence": "Disposing of untreated effluents poses a perilous threat to marine life."
  },
  {
    "id": 35,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Safe",
    "highBandParaphrases": [
      "Secure",
      "unthreatened",
      "protected",
      "invulnerable",
      "risk-free"
    ],
    "contextSentence": "Investments in state infrastructure remain economically secure."
  },
  {
    "id": 36,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Cheap",
    "highBandParaphrases": [
      "Inexpensive",
      "economical",
      "cost-effective",
      "budget-friendly",
      "low-cost"
    ],
    "contextSentence": "Solar installations have become increasingly cost-effective."
  },
  {
    "id": 37,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Expensive",
    "highBandParaphrases": [
      "Exorbitant",
      "prohibitive",
      "costly",
      "premium-priced",
      "extortionate"
    ],
    "contextSentence": "Tertiary tuition fees in Western institutions are often cost-prohibitive."
  },
  {
    "id": 38,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Fast / Rapid",
    "highBandParaphrases": [
      "Swift",
      "expeditious",
      "accelerated",
      "brisk",
      "instantaneous"
    ],
    "contextSentence": "Technological evolution unfolds at an accelerated pace."
  },
  {
    "id": 39,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Slow",
    "highBandParaphrases": [
      "Sluggish",
      "gradual",
      "protracted",
      "languid",
      "sluggish"
    ],
    "contextSentence": "Economic recovery across peripheral zones remains sluggish."
  },
  {
    "id": 40,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Famous / Popular",
    "highBandParaphrases": [
      "Renowned",
      "celebrated",
      "distinguished",
      "prominent",
      "eminent"
    ],
    "contextSentence": "The region is renowned for its rich architectural heritage."
  },
  {
    "id": 41,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "People",
    "highBandParaphrases": [
      "Individuals",
      "citizens",
      "populace",
      "inhabitants",
      "human beings"
    ],
    "contextSentence": "Urban populaces face escalating real-estate costs."
  },
  {
    "id": 42,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Society",
    "highBandParaphrases": [
      "Civilisation",
      "the general public",
      "community",
      "social fabric"
    ],
    "contextSentence": "Technological disruption reshapes our contemporary social fabric."
  },
  {
    "id": 43,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Children / Kids",
    "highBandParaphrases": [
      "Adolescents",
      "minors",
      "youngsters",
      "juveniles",
      "offspring"
    ],
    "contextSentence": "Compulsory schooling serves to nurture young minors."
  },
  {
    "id": 44,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Old people",
    "highBandParaphrases": [
      "The elderly",
      "senior citizens",
      "geriatric populace",
      "retirees"
    ],
    "contextSentence": "An expanding geriatric populace places demands on healthcare."
  },
  {
    "id": 45,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Young people",
    "highBandParaphrases": [
      "The youth",
      "adolescents",
      "emerging generation",
      "young adults"
    ],
    "contextSentence": "Governments must empower the emerging generation through tech training."
  },
  {
    "id": 46,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Parents",
    "highBandParaphrases": [
      "Guardians",
      "caregivers",
      "primary providers",
      "maternal/paternal figures"
    ],
    "contextSentence": "Legal guardians bear accountability for child welfare."
  },
  {
    "id": 47,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Rich people",
    "highBandParaphrases": [
      "Affluent demographics",
      "wealthy strata",
      "high-net-worth individuals"
    ],
    "contextSentence": "The affluent strata of society have greater investment leverage."
  },
  {
    "id": 48,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Poor people",
    "highBandParaphrases": [
      "Underprivileged populations",
      "impoverished households",
      "low-income citizens"
    ],
    "contextSentence": "Subsidies should directly assist impoverished households."
  },
  {
    "id": 49,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Public (n)",
    "highBandParaphrases": [
      "Civic community",
      "electorate",
      "general citizenry",
      "taxpayers"
    ],
    "contextSentence": "The general citizenry expects transparent governance."
  },
  {
    "id": 50,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Worker / Employee",
    "highBandParaphrases": [
      "Labourer",
      "staff member",
      "workforce participant",
      "personnel"
    ],
    "contextSentence": "Corporate retention hinges on incentivising qualified personnel."
  },
  {
    "id": 51,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Boss / Employer",
    "highBandParaphrases": [
      "Executive",
      "management",
      "corporate head",
      "supervisor",
      "enterprise lead"
    ],
    "contextSentence": "Enlightened supervisors champion work-life balance."
  },
  {
    "id": 52,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Government",
    "highBandParaphrases": [
      "The state",
      "governing authorities",
      "policymakers",
      "administration"
    ],
    "contextSentence": "National policymakers must enact rigorous carbon taxes."
  },
  {
    "id": 53,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Citizen",
    "highBandParaphrases": [
      "Denizen",
      "resident",
      "national",
      "taxpaying member of the state"
    ],
    "contextSentence": "Urban denizens demand reliable, non-polluting public transport."
  },
  {
    "id": 54,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Criminal",
    "highBandParaphrases": [
      "Offender",
      "lawbreaker",
      "felon",
      "delinquent",
      "perpetrator"
    ],
    "contextSentence": "Recidivism among repeat felons remains a major societal concern."
  },
  {
    "id": 55,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Victim",
    "highBandParaphrases": [
      "Aggrieved party",
      "affected individual",
      "casualty",
      "sufferer"
    ],
    "contextSentence": "Restorative justice seeks restitution for the aggrieved party."
  },
  {
    "id": 56,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Community",
    "highBandParaphrases": [
      "Locality",
      "civic collective",
      "neighborhood",
      "social demographic"
    ],
    "contextSentence": "Rural localities often suffer from infrastructural neglect."
  },
  {
    "id": 57,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Family",
    "highBandParaphrases": [
      "Nuclear unit",
      "extended family",
      "household",
      "domestic circle"
    ],
    "contextSentence": "Economic stress strains the contemporary nuclear household."
  },
  {
    "id": 58,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Generation",
    "highBandParaphrases": [
      "Age cohort",
      "peer group",
      "contemporary demographic"
    ],
    "contextSentence": "The millennial age cohort values flexibility over corporate tenure."
  },
  {
    "id": 59,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Population",
    "highBandParaphrases": [
      "Demographic count",
      "head count",
      "aggregate populace"
    ],
    "contextSentence": "A shrinking aggregate populace poses acute economic hurdles."
  },
  {
    "id": 60,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Human (n/adj)",
    "highBandParaphrases": [
      "Mankind",
      "Homo sapiens",
      "human race",
      "mortal beings"
    ],
    "contextSentence": "The ultimate survival of mankind relies on planetary stewardship."
  },
  {
    "id": 61,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "School / University",
    "highBandParaphrases": [
      "Educational institution",
      "academy",
      "tertiary establishment",
      "alma mater"
    ],
    "contextSentence": "Enrollment in tertiary establishments has risen steeply."
  },
  {
    "id": 62,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Student",
    "highBandParaphrases": [
      "Scholar",
      "learner",
      "undergraduate",
      "postgraduate",
      "pupil",
      "candidate"
    ],
    "contextSentence": "Ambitious undergraduates seek competitive internships."
  },
  {
    "id": 63,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Teacher",
    "highBandParaphrases": [
      "Educator",
      "pedagogical professional",
      "instructor",
      "mentor",
      "lecturer"
    ],
    "contextSentence": "Skillful pedagogical professionals spark lifelong intellectual curiosity."
  },
  {
    "id": 64,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Learn / Study",
    "highBandParaphrases": [
      "Acquire knowledge",
      "assimilate information",
      "pursue academia",
      "master"
    ],
    "contextSentence": "Students must assimilate complex theoretical frameworks."
  },
  {
    "id": 65,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Knowledge",
    "highBandParaphrases": [
      "Erudition",
      "intellectual capital",
      "scholarly insight",
      "expertise"
    ],
    "contextSentence": "Building domestic intellectual capital accelerates national innovation."
  },
  {
    "id": 66,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Skill / Ability",
    "highBandParaphrases": [
      "Proficiency",
      "competency",
      "aptitude",
      "expertise",
      "dexterity"
    ],
    "contextSentence": "Digital competency is prerequisite for contemporary vocations."
  },
  {
    "id": 67,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Test / Exam",
    "highBandParaphrases": [
      "Standardised assessment",
      "evaluation",
      "examination",
      "benchmark appraisal"
    ],
    "contextSentence": "Rigid standardised assessments may stifle creative thinking."
  },
  {
    "id": 68,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Subject",
    "highBandParaphrases": [
      "Academic discipline",
      "area of inquiry",
      "curriculum domain"
    ],
    "contextSentence": "Interdisciplinary areas of inquiry bridge science and philosophy."
  },
  {
    "id": 69,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Smart / Clever",
    "highBandParaphrases": [
      "Academically gifted",
      "astute",
      "intellectually formidable",
      "proficient"
    ],
    "contextSentence": "Recognising intellectually gifted pupils enables tailored curricula."
  },
  {
    "id": 70,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Degree / Diploma",
    "highBandParaphrases": [
      "Academic qualification",
      "credential",
      "tertiary certificate"
    ],
    "contextSentence": "Attaining a recognized academic credential elevates earning potential."
  },
  {
    "id": 71,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Homework",
    "highBandParaphrases": [
      "Independent assignments",
      "academic coursework",
      "off-campus tasks"
    ],
    "contextSentence": "Excessive academic coursework can lead to student exhaustion."
  },
  {
    "id": 72,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Career",
    "highBandParaphrases": [
      "Vocational path",
      "professional trajectory",
      "chosen calling"
    ],
    "contextSentence": "A promising professional trajectory requires adaptable skills."
  },
  {
    "id": 73,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Success",
    "highBandParaphrases": [
      "Triumph",
      "accomplishment",
      "attainment",
      "prosperity",
      "fruition"
    ],
    "contextSentence": "Academic attainment does not automatically guarantee executive prowess."
  },
  {
    "id": 74,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Failure",
    "highBandParaphrases": [
      "Defeat",
      "setback",
      "shortcoming",
      "deficiency",
      "underachievement"
    ],
    "contextSentence": "Institutional underachievement stems from systemic underfunding."
  },
  {
    "id": 75,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Remember",
    "highBandParaphrases": [
      "Recall",
      "retain",
      "preserve in memory",
      "reminisce"
    ],
    "contextSentence": "Active learning strategies help learners retain abstract concepts."
  },
  {
    "id": 76,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Forget",
    "highBandParaphrases": [
      "Overlook",
      "neglect",
      "lose sight of",
      "disregard"
    ],
    "contextSentence": "Curricula must not lose sight of ethics in scientific training."
  },
  {
    "id": 77,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Think / Opinion",
    "highBandParaphrases": [
      "Contention",
      "perspective",
      "worldview",
      "intellectual stance"
    ],
    "contextSentence": "Scholars adopt varying intellectual stances regarding globalisation."
  },
  {
    "id": 78,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Idea",
    "highBandParaphrases": [
      "Concept",
      "notion",
      "proposition",
      "theory",
      "premise"
    ],
    "contextSentence": "The underlying premise of the pedagogical model is self-direction."
  },
  {
    "id": 79,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Fact",
    "highBandParaphrases": [
      "Empirical reality",
      "established truth",
      "substantiated datum"
    ],
    "contextSentence": "That climate change is human-driven is an empirical reality."
  },
  {
    "id": 80,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Truth",
    "highBandParaphrases": [
      "Veracity",
      "authenticity",
      "validity",
      "factual accuracy"
    ],
    "contextSentence": "Examiners assess the factual validity of arguments."
  },
  {
    "id": 81,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Technology",
    "highBandParaphrases": [
      "Technological innovations",
      "digital apparatus",
      "automated systems"
    ],
    "contextSentence": "Embracing state-of-the-art technological innovations enhances output."
  },
  {
    "id": 82,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Modern",
    "highBandParaphrases": [
      "Contemporary",
      "state-of-the-art",
      "avant-garde",
      "21st-century"
    ],
    "contextSentence": "In contemporary urban societies, telecommuting has become standard."
  },
  {
    "id": 83,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Internet",
    "highBandParaphrases": [
      "Cyberspace",
      "digital superhighway",
      "virtual network",
      "online sphere"
    ],
    "contextSentence": "Commerce is increasingly anchored within the digital sphere."
  },
  {
    "id": 84,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Phone / Computer",
    "highBandParaphrases": [
      "Handheld gadget",
      "digital terminal",
      "electronic device"
    ],
    "contextSentence": "Over-reliance on portable electronic devices disrupts sleep hygiene."
  },
  {
    "id": 85,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Device / Machine",
    "highBandParaphrases": [
      "Apparatus",
      "instrument",
      "mechanical unit",
      "appliance"
    ],
    "contextSentence": "Automated apparatuses minimise human error in manufacturing."
  },
  {
    "id": 86,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "AI / Robot",
    "highBandParaphrases": [
      "Artificial intelligence",
      "automated algorithm",
      "synthetic cognitive agent"
    ],
    "contextSentence": "Deploying synthetic cognitive agents transforms customer service."
  },
  {
    "id": 87,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Future (n/adj)",
    "highBandParaphrases": [
      "Prospective era",
      "subsequent decades",
      "oncoming horizon"
    ],
    "contextSentence": "Planning for subsequent decades requires resilient infrastructure."
  },
  {
    "id": 88,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Progress / Develop",
    "highBandParaphrases": [
      "Evolution",
      "advancement",
      "proliferation",
      "technological stride"
    ],
    "contextSentence": "Rapid technological strides outpace legal and regulatory frameworks."
  },
  {
    "id": 89,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Information",
    "highBandParaphrases": [
      "Data",
      "intelligence",
      "empirical findings",
      "analytics"
    ],
    "contextSentence": "Harnessing big data analytics delivers predictive customer insight."
  },
  {
    "id": 90,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Communicate",
    "highBandParaphrases": [
      "Interact",
      "liaise",
      "converse",
      "transmit information",
      "interface"
    ],
    "contextSentence": "Remote personnel liaise seamlessly across international time zones."
  },
  {
    "id": 91,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Replace / Automate",
    "highBandParaphrases": [
      "Supersede",
      "render obsolete",
      "displace human labour",
      "mechanise"
    ],
    "contextSentence": "Automated workflows threaten to displace manual clerical roles."
  },
  {
    "id": 92,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Connect",
    "highBandParaphrases": [
      "Integrate",
      "interface",
      "interlink",
      "bridge",
      "synchronize"
    ],
    "contextSentence": "High-speed transit systems interlink peripheral towns with the capital."
  },
  {
    "id": 93,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Isolate / Disconnect",
    "highBandParaphrases": [
      "Alienate",
      "sequester",
      "marginalise",
      "insulate"
    ],
    "contextSentence": "Social media overuse inadvertently alienates young adolescents."
  },
  {
    "id": 94,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Online / Virtual",
    "highBandParaphrases": [
      "Digital",
      "cloud-based",
      "cyberspace-based",
      "simulated"
    ],
    "contextSentence": "The migration toward cloud-based workplaces is accelerating."
  },
  {
    "id": 95,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Risk / Danger (tech)",
    "highBandParaphrases": [
      "Cyber threat",
      "vulnerability",
      "algorithmic bias",
      "security hazard"
    ],
    "contextSentence": "Data breaches represent a severe cybersecurity vulnerability."
  },
  {
    "id": 96,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Instant / Fast",
    "highBandParaphrases": [
      "Immediate",
      "real-time",
      "instantaneous",
      "rapid"
    ],
    "contextSentence": "Users expect real-time financial transaction settlements."
  },
  {
    "id": 97,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Convenient",
    "highBandParaphrases": [
      "Frictionless",
      "pragmatic",
      "user-friendly",
      "expedient",
      "hassle-free"
    ],
    "contextSentence": "E-commerce affords a remarkably frictionless purchasing journey."
  },
  {
    "id": 98,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Electricity / Power",
    "highBandParaphrases": [
      "Energy grid",
      "electrical energy",
      "wattage",
      "thermal/hydro output"
    ],
    "contextSentence": "Transitioning the national energy grid to green power is crucial."
  },
  {
    "id": 99,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Research (n/v)",
    "highBandParaphrases": [
      "Empirical investigation",
      "scholarly inquiry",
      "probe",
      "investigate"
    ],
    "contextSentence": "Recent scholarly inquiries corroborate the benefits of mindfulness."
  },
  {
    "id": 100,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Invention",
    "highBandParaphrases": [
      "Breakthrough",
      "novel innovation",
      "proprietary invention",
      "conception"
    ],
    "contextSentence": "The discovery of penicillin was a seminal medical breakthrough."
  },
  {
    "id": 101,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Environment",
    "highBandParaphrases": [
      "Biosphere",
      "ecosystem",
      "natural habitat",
      "ecological landscape"
    ],
    "contextSentence": "Human activities threaten the delicate balance of the biosphere."
  },
  {
    "id": 102,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Pollution",
    "highBandParaphrases": [
      "Contamination",
      "ecological degradation",
      "toxic emissions",
      "pollutants"
    ],
    "contextSentence": "Unregulated industrialisation accelerates severe water contamination."
  },
  {
    "id": 103,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Trash / Rubbish",
    "highBandParaphrases": [
      "Municipal refuse",
      "non-biodegradable waste",
      "landfill debris"
    ],
    "contextSentence": "Curbing single-use plastic refuse demands legislative intervention."
  },
  {
    "id": 104,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "City / Urban",
    "highBandParaphrases": [
      "Metropolis",
      "municipal hub",
      "urban agglomeration",
      "civic centre"
    ],
    "contextSentence": "Congestion in the metropolis demands sustainable transit solutions."
  },
  {
    "id": 105,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Countryside / Rural",
    "highBandParaphrases": [
      "Agrarian region",
      "rural hinterland",
      "peripheral locality",
      "province"
    ],
    "contextSentence": "Depopulation challenges many agrarian regions worldwide."
  },
  {
    "id": 106,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Climate change",
    "highBandParaphrases": [
      "Anthropogenic climate crisis",
      "global ecological disruption"
    ],
    "contextSentence": "Mitigating the anthropogenic climate crisis is a collective duty."
  },
  {
    "id": 107,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Nature / Animals",
    "highBandParaphrases": [
      "Fauna and flora",
      "biodiversity",
      "indigenous species",
      "wildlife"
    ],
    "contextSentence": "Deforestation imperils countless indigenous fauna and flora."
  },
  {
    "id": 108,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Protect / Conserve",
    "highBandParaphrases": [
      "Safeguard",
      "preserve",
      "champion ecological stewardship",
      "sustain"
    ],
    "contextSentence": "We must safeguard pristine marine habitats from overfishing."
  },
  {
    "id": 109,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Cut down (trees)",
    "highBandParaphrases": [
      "Deforest",
      "clear-cut",
      "raze",
      "log",
      "decimate forest cover"
    ],
    "contextSentence": "Logging corporations continue to raze ancient rainforests."
  },
  {
    "id": 110,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Traffic / Cars",
    "highBandParaphrases": [
      "Vehicular congestion",
      "gridlock",
      "private automobile dependency"
    ],
    "contextSentence": "Expanding bicycle lanes alleviates heavy vehicular gridlock."
  },
  {
    "id": 111,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Air (dirty)",
    "highBandParaphrases": [
      "Atmospheric quality",
      "smog",
      "airborne particulates",
      "carbon pollution"
    ],
    "contextSentence": "Elevated concentrations of airborne particulates trigger asthma."
  },
  {
    "id": 112,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Water (clean)",
    "highBandParaphrases": [
      "Freshwater reserves",
      "potable water",
      "aquatic resources"
    ],
    "contextSentence": "Access to potable water constitutes a fundamental human right."
  },
  {
    "id": 113,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Fuel / Energy",
    "highBandParaphrases": [
      "Fossil fuels",
      "hydrocarbons",
      "renewable energy sources",
      "solar/wind"
    ],
    "contextSentence": "Subsidising clean hydrocarbon alternatives spurs decarbonisation."
  },
  {
    "id": 114,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Earth / Planet",
    "highBandParaphrases": [
      "The globe",
      "the terrestrial sphere",
      "the planet"
    ],
    "contextSentence": "Preserving resource equilibrium across the terrestrial sphere is imperative."
  },
  {
    "id": 115,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Global Warming",
    "highBandParaphrases": [
      "Rising planetary temperatures",
      "greenhouse thermal trapping"
    ],
    "contextSentence": "Accelerated glacier melt reflects rising planetary temperatures."
  },
  {
    "id": 116,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Habitat",
    "highBandParaphrases": [
      "Natural biome",
      "breeding ground",
      "ecological niche"
    ],
    "contextSentence": "Urban development encroaches upon vulnerable wetland biomes."
  },
  {
    "id": 117,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Animal (wild)",
    "highBandParaphrases": [
      "Wildlife",
      "terrestrial fauna",
      "feral creature",
      "wild beast"
    ],
    "contextSentence": "Commercial poaching decimates endangered terrestrial fauna."
  },
  {
    "id": 118,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Plant / Tree",
    "highBandParaphrases": [
      "Botanical specimen",
      "vegetation",
      "flora",
      "canopy",
      "greenery"
    ],
    "contextSentence": "Native botanical specimens exhibit resilient drought tolerance."
  },
  {
    "id": 119,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Green / Eco",
    "highBandParaphrases": [
      "Sustainable",
      "eco-friendly",
      "carbon-neutral",
      "ecologically sound"
    ],
    "contextSentence": "Municipalities ought to mandate carbon-neutral building designs."
  },
  {
    "id": 120,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Disaster",
    "highBandParaphrases": [
      "Catastrophe",
      "calamity",
      "meteorological emergency",
      "devastation"
    ],
    "contextSentence": "Intense flash floods represent a severe meteorological calamity."
  },
  {
    "id": 121,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Money",
    "highBandParaphrases": [
      "Capital",
      "financial resources",
      "funds",
      "fiscal assets",
      "currency"
    ],
    "contextSentence": "Startups require access to substantial venture capital."
  },
  {
    "id": 122,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Salary / Wage",
    "highBandParaphrases": [
      "Financial remuneration",
      "compensation package",
      "earnings",
      "stipend"
    ],
    "contextSentence": "Attracting top talent necessitates competitive remuneration."
  },
  {
    "id": 123,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Job / Work",
    "highBandParaphrases": [
      "Occupation",
      "profession",
      "vocational appointment",
      "livelihood"
    ],
    "contextSentence": "Automated algorithms increasingly disrupt the accounting profession."
  },
  {
    "id": 124,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Company / Business",
    "highBandParaphrases": [
      "Commercial enterprise",
      "corporate entity",
      "conglomerate",
      "firm"
    ],
    "contextSentence": "Multinational corporate entities wield immense market influence."
  },
  {
    "id": 125,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Buy / Purchase",
    "highBandParaphrases": [
      "Acquire",
      "procure",
      "consume",
      "invest in",
      "obtain"
    ],
    "contextSentence": "Households procure essential staples online."
  },
  {
    "id": 126,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Sell",
    "highBandParaphrases": [
      "Market",
      "retail",
      "merchandise",
      "vend",
      "distribute"
    ],
    "contextSentence": "Producers distribute perishable commodities directly to consumers."
  },
  {
    "id": 127,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Cost / Price",
    "highBandParaphrases": [
      "Financial outlay",
      "expenditure",
      "tariff",
      "overhead",
      "expense"
    ],
    "contextSentence": "High initial financial outlays deter adoption of heat pumps."
  },
  {
    "id": 128,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Economy",
    "highBandParaphrases": [
      "Macroeconomic framework",
      "fiscal ecosystem",
      "financial landscape"
    ],
    "contextSentence": "Diversification strengthens the national macroeconomic framework."
  },
  {
    "id": 129,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Free (no cost)",
    "highBandParaphrases": [
      "Complimentary",
      "cost-free",
      "subsidised",
      "state-funded",
      "gratis"
    ],
    "contextSentence": "Basic healthcare should remain state-funded and accessible."
  },
  {
    "id": 130,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Tax",
    "highBandParaphrases": [
      "Fiscal levy",
      "taxation duty",
      "tariff",
      "excise",
      "municipal tribute"
    ],
    "contextSentence": "Levying an excise duty on sugary beverages curbs consumption."
  },
  {
    "id": 131,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Debt",
    "highBandParaphrases": [
      "Financial liabilities",
      "fiscal deficits",
      "obligations",
      "indebtedness"
    ],
    "contextSentence": "Escalating household indebtedness constrains national growth."
  },
  {
    "id": 132,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Profit",
    "highBandParaphrases": [
      "Fiscal return",
      "financial gain",
      "net yield",
      "revenue surplus"
    ],
    "contextSentence": "Firms must balance revenue surpluses with environmental ethics."
  },
  {
    "id": 133,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Trade",
    "highBandParaphrases": [
      "Commerce",
      "bilateral mercantile exchange",
      "export-import flows"
    ],
    "contextSentence": "International mercantile exchange fosters geopolitical cooperation."
  },
  {
    "id": 134,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Market",
    "highBandParaphrases": [
      "Commercial arena",
      "marketplace",
      "economic sector",
      "consumer base"
    ],
    "contextSentence": "Emerging economies capture a growing share of the global marketplace."
  },
  {
    "id": 135,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Employment",
    "highBandParaphrases": [
      "Workforce engagement",
      "job creation",
      "labour absorption"
    ],
    "contextSentence": "Green technology stimulates substantial workforce engagement."
  },
  {
    "id": 136,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Unemployment",
    "highBandParaphrases": [
      "Joblessness",
      "workforce redundancy",
      "labour inactivity"
    ],
    "contextSentence": "Youth joblessness correlates with socio-economic unrest."
  },
  {
    "id": 137,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Opportunity",
    "highBandParaphrases": [
      "Prospect",
      "avenue",
      "viable opening",
      "potential pathway"
    ],
    "contextSentence": "Vocational apprenticeships unlock lucrative career avenues."
  },
  {
    "id": 138,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Industry",
    "highBandParaphrases": [
      "Commercial sector",
      "manufacturing domain",
      "trade sphere"
    ],
    "contextSentence": "The pharmaceutical manufacturing sector requires rigorous oversight."
  },
  {
    "id": 139,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Wealth",
    "highBandParaphrases": [
      "Affluence",
      "prosperity",
      "accumulated capital",
      "fortune"
    ],
    "contextSentence": "Disproportionate concentration of affluence exacerbates societal divide."
  },
  {
    "id": 140,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Luxury",
    "highBandParaphrases": [
      "Extravagance",
      "opulent amenity",
      "premium indulgence"
    ],
    "contextSentence": "Excessive spending on opulent goods highlights consumerist culture."
  },
  {
    "id": 141,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Health",
    "highBandParaphrases": [
      "Physical condition",
      "physiological well-being",
      "vitality",
      "health status"
    ],
    "contextSentence": "Regular exercise enhances general physiological vitality."
  },
  {
    "id": 142,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Sick / Illness",
    "highBandParaphrases": [
      "Afflicted by ailments",
      "pathology",
      "chronic disorder",
      "indisposition"
    ],
    "contextSentence": "Sedentary workers are increasingly afflicted by chronic ailments."
  },
  {
    "id": 143,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Food / Diet",
    "highBandParaphrases": [
      "Nutrition",
      "dietary intake",
      "nourishment",
      "sustenance",
      "regimen"
    ],
    "contextSentence": "Maintaining a well-balanced nutritional regimen prevents disease."
  },
  {
    "id": 144,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Exercise (v/n)",
    "highBandParaphrases": [
      "Physical exertion",
      "cardiovascular regimen",
      "workout routine",
      "train"
    ],
    "contextSentence": "Engaging in moderate physical exertion bolsters mental acuity."
  },
  {
    "id": 145,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Hospital / Doctor",
    "highBandParaphrases": [
      "Medical institution",
      "healthcare provider",
      "physician",
      "clinician"
    ],
    "contextSentence": "Public medical institutions require modernisation."
  },
  {
    "id": 146,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Medicine / Cure",
    "highBandParaphrases": [
      "Pharmaceutical remedy",
      "therapeutic intervention",
      "antidote",
      "treatment"
    ],
    "contextSentence": "Gene therapy represents a revolutionary therapeutic intervention."
  },
  {
    "id": 147,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Stress / Tiredness",
    "highBandParaphrases": [
      "Cognitive fatigue",
      "burnout",
      "psychological strain",
      "exhaustion"
    ],
    "contextSentence": "Long work hours precipitate chronic occupational burnout."
  },
  {
    "id": 148,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Mental Health",
    "highBandParaphrases": [
      "Psychological well-being",
      "psychiatric equilibrium",
      "emotional health"
    ],
    "contextSentence": "Workplaces must safeguard the psychological equilibrium of staff."
  },
  {
    "id": 149,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Fat / Obesity",
    "highBandParaphrases": [
      "Adiposity",
      "severe overweightness",
      "corpulence",
      "excess body mass"
    ],
    "contextSentence": "Childhood adiposity has evolved into a global public health crisis."
  },
  {
    "id": 150,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Lifespan / Age",
    "highBandParaphrases": [
      "Longevity",
      "life expectancy",
      "biological survival span"
    ],
    "contextSentence": "Advances in oncology have dramatically enhanced human longevity."
  },
  {
    "id": 151,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Habit",
    "highBandParaphrases": [
      "Behavioral pattern",
      "routine",
      "practice",
      "predisposition"
    ],
    "contextSentence": "Cultivating constructive study behavioral patterns early is vital."
  },
  {
    "id": 152,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Lifestyle",
    "highBandParaphrases": [
      "Way of living",
      "daily conduct",
      "standard of existence"
    ],
    "contextSentence": "A hyper-consumerist way of living strains global natural reserves."
  },
  {
    "id": 153,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Pain",
    "highBandParaphrases": [
      "Discomfort",
      "distress",
      "agony",
      "physical affliction"
    ],
    "contextSentence": "Physical therapy alleviates muscular discomfort without opioids."
  },
  {
    "id": 154,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Addiction",
    "highBandParaphrases": [
      "Dependency",
      "compulsive fixation",
      "substance reliance"
    ],
    "contextSentence": "Digital device dependency undermines deep concentration in students."
  },
  {
    "id": 155,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Fitness",
    "highBandParaphrases": [
      "Physical stamina",
      "cardiovascular robustness",
      "conditioning"
    ],
    "contextSentence": "High-intensity training builds muscular and cardiovascular robustness."
  },
  {
    "id": 156,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Recreation / Fun",
    "highBandParaphrases": [
      "Leisure pursuit",
      "amusement",
      "diverting pastime",
      "entertainment"
    ],
    "contextSentence": "Access to parks provides enriching leisure pursuits for urban families."
  },
  {
    "id": 157,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Sleep",
    "highBandParaphrases": [
      "Nocturnal rest",
      "slumber",
      "circadian restoration"
    ],
    "contextSentence": "Chronic deficit of nocturnal rest impairs cognitive decision-making."
  },
  {
    "id": 158,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Clean / Hygiene",
    "highBandParaphrases": [
      "Sanitary condition",
      "sterilization",
      "prophylactic hygiene",
      "antiseptic"
    ],
    "contextSentence": "Ensuring rigorous sanitary standards halts microbial outbreaks."
  },
  {
    "id": 159,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Safety",
    "highBandParaphrases": [
      "Security",
      "protection",
      "welfare",
      "hazard mitigation"
    ],
    "contextSentence": "Aviation protocols place paramount emphasis on passenger welfare."
  },
  {
    "id": 160,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Treatment",
    "highBandParaphrases": [
      "Therapy",
      "medical management",
      "clinical protocol",
      "rehabilitation"
    ],
    "contextSentence": "Cognitive behavioural therapy is effective for mood disorders."
  },
  {
    "id": 161,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Cause (n)",
    "highBandParaphrases": [
      "Catalyst",
      "root determinant",
      "instigator",
      "underlying origin"
    ],
    "contextSentence": "Income disparity acts as the primary catalyst for crime."
  },
  {
    "id": 162,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Effect / Result",
    "highBandParaphrases": [
      "Repercussion",
      "consequence",
      "outcome",
      "aftermath",
      "byproduct"
    ],
    "contextSentence": "Economic sanctions yielded severe repercussions across the market."
  },
  {
    "id": 163,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Reason",
    "highBandParaphrases": [
      "Rationale",
      "justification",
      "underlying basis",
      "motive"
    ],
    "contextSentence": "The underlying rationale behind the reform is fiscal transparency."
  },
  {
    "id": 164,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Consequence",
    "highBandParaphrases": [
      "Ramification",
      "fallout",
      "aftermath",
      "backwash",
      "corollary"
    ],
    "contextSentence": "Environmental negligence carries catastrophic ramifications."
  },
  {
    "id": 165,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Problem",
    "highBandParaphrases": [
      "Predicament",
      "dilemma",
      "obstacle",
      "conundrum",
      "challenge"
    ],
    "contextSentence": "Urban waste disposal represents a perplexing municipal conundrum."
  },
  {
    "id": 166,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Solution",
    "highBandParaphrases": [
      "Remedy",
      "countermeasure",
      "panacea",
      "corrective measure"
    ],
    "contextSentence": "Renewable energy adoption constitutes a viable countermeasure."
  },
  {
    "id": 167,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Danger",
    "highBandParaphrases": [
      "Peril",
      "threat",
      "hazard",
      "jeopardy",
      "hazard"
    ],
    "contextSentence": "Cyber warfare places national infrastructure in grave jeopardy."
  },
  {
    "id": 168,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Benefit",
    "highBandParaphrases": [
      "Advantage",
      "dividend",
      "asset",
      "positive outcome",
      "virtue"
    ],
    "contextSentence": "Investing in preschool education reaps substantial social dividends."
  },
  {
    "id": 169,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Drawback",
    "highBandParaphrases": [
      "Deficiency",
      "disadvantage",
      "vulnerability",
      "shortfall",
      "pitfall"
    ],
    "contextSentence": "A notable pitfall of remote employment is interpersonal isolation."
  },
  {
    "id": 170,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Impact",
    "highBandParaphrases": [
      "Influence",
      "impression",
      "footprint",
      "reverberation"
    ],
    "contextSentence": "Tourism leaves an undeniable ecological footprint on coral reefs."
  },
  {
    "id": 171,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Proof / Evidence",
    "highBandParaphrases": [
      "Empirical validation",
      "corroboration",
      "substantiate data",
      "proof"
    ],
    "contextSentence": "There is abundant empirical validation supporting early childhood bilingualism."
  },
  {
    "id": 172,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Example",
    "highBandParaphrases": [
      "Illustration",
      "exemplar",
      "case in point",
      "archetype",
      "precedent"
    ],
    "contextSentence": "Singapore serves as a prime exemplar of integrated public transit."
  },
  {
    "id": 173,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Factor",
    "highBandParaphrases": [
      "Determinant",
      "contributing element",
      "variable",
      "component"
    ],
    "contextSentence": "Poverty is a leading determinant of early school dropouts."
  },
  {
    "id": 174,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Goal / Aim",
    "highBandParaphrases": [
      "Objective",
      "aspiration",
      "target",
      "ambition",
      "milestone"
    ],
    "contextSentence": "Achieving carbon neutrality by 2050 is a non-negotiable target."
  },
  {
    "id": 175,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Measure / Step",
    "highBandParaphrases": [
      "Initiative",
      "course of action",
      "strategic intervention",
      "policy"
    ],
    "contextSentence": "State authorities must adopt stringent strategic interventions."
  },
  {
    "id": 176,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Advantage",
    "highBandParaphrases": [
      "Competitive edge",
      "merit",
      "strength",
      "asset",
      "leverage"
    ],
    "contextSentence": "Fluency in several languages confers a distinct competitive edge."
  },
  {
    "id": 177,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Disadvantage",
    "highBandParaphrases": [
      "Handicap",
      "liability",
      "impediment",
      "vulnerability"
    ],
    "contextSentence": "A lack of digital literacy proves a crippling handicap in today's job market."
  },
  {
    "id": 178,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Situation",
    "highBandParaphrases": [
      "Circumstance",
      "state of affairs",
      "context",
      "predicament"
    ],
    "contextSentence": "The prevailing state of affairs demands international mediation."
  },
  {
    "id": 179,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Condition",
    "highBandParaphrases": [
      "Stipulation",
      "prerequisite",
      "climate",
      "status quo"
    ],
    "contextSentence": "Economic stability is an indispensable prerequisite for foreign investment."
  },
  {
    "id": 180,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Outcome",
    "highBandParaphrases": [
      "End result",
      "fruition",
      "ultimate payoff",
      "resolution"
    ],
    "contextSentence": "The collaborative project reached a mutually advantageous resolution."
  },
  {
    "id": 181,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Also",
    "highBandParaphrases": [
      "Furthermore",
      "moreover",
      "in addition",
      "additionally",
      "along with this"
    ],
    "contextSentence": "The tax cuts reduce poverty; furthermore, they stimulate investment."
  },
  {
    "id": 182,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "But / However",
    "highBandParaphrases": [
      "Conversely",
      "nevertheless",
      "nonetheless",
      "yet",
      "by contrast"
    ],
    "contextSentence": "Tuition is high; nonetheless, university enrollment continues to grow."
  },
  {
    "id": 183,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Because",
    "highBandParaphrases": [
      "Owing to",
      "attributable to",
      "on the grounds that",
      "inasmuch as"
    ],
    "contextSentence": "Species decline is directly attributable to anthropogenic habitat loss."
  },
  {
    "id": 184,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "So / Therefore",
    "highBandParaphrases": [
      "Consequently",
      "hence",
      "accordingly",
      "thus",
      "as a corollary"
    ],
    "contextSentence": "The infrastructure deteriorated; consequently, transit delays mounted."
  },
  {
    "id": 185,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "In conclusion",
    "highBandParaphrases": [
      "To recapitulate",
      "in the final analysis",
      "to synthesise",
      "in summary"
    ],
    "contextSentence": "In the final analysis, environmental preservation must outweigh short-term profits."
  },
  {
    "id": 186,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "For example",
    "highBandParaphrases": [
      "To illustrate this point",
      "as evidenced by",
      "a case in point is"
    ],
    "contextSentence": "To illustrate this point, renewable-powered public transit cuts smog."
  },
  {
    "id": 187,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "In contrast",
    "highBandParaphrases": [
      "On the contrary",
      "on the flip side",
      "diametrically opposed to"
    ],
    "contextSentence": "Private cars waste energy; by stark contrast, subways are hyper-efficient."
  },
  {
    "id": 188,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "In addition",
    "highBandParaphrases": [
      "Coupled with",
      "alongside this",
      "supplementary to this"
    ],
    "contextSentence": "High salaries, coupled with stellar healthcare benefits, attract talent."
  },
  {
    "id": 189,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "In fact / Actually",
    "highBandParaphrases": [
      "In reality",
      "indeed",
      "as a matter of empirical reality"
    ],
    "contextSentence": "Indeed, empirical data reinforces the necessity of early childhood care."
  },
  {
    "id": 190,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Nowadays",
    "highBandParaphrases": [
      "In the contemporary era",
      "in recent times",
      "at present"
    ],
    "contextSentence": "In the contemporary era, automation reshapes white-collar employment."
  },
  {
    "id": 191,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Firstly",
    "highBandParaphrases": [
      "In the first instance",
      "primarily",
      "initially",
      "to commence with"
    ],
    "contextSentence": "In the first instance, funding must be allocated toward teacher training."
  },
  {
    "id": 192,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Secondly",
    "highBandParaphrases": [
      "Subsequently",
      "in the second place",
      "furthermore"
    ],
    "contextSentence": "Subsequently, modern laboratories ought to be furnished."
  },
  {
    "id": 193,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Lastly",
    "highBandParaphrases": [
      "Finally",
      "ultimately",
      "in the closing analysis"
    ],
    "contextSentence": "Ultimately, ethical accountability must govern AI rollouts."
  },
  {
    "id": 194,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Overall",
    "highBandParaphrases": [
      "On the whole",
      "in broad terms",
      "taking a holistic view"
    ],
    "contextSentence": "Taking a holistic view, the graph delineates an upward trajectory."
  },
  {
    "id": 195,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Although / Even if",
    "highBandParaphrases": [
      "Notwithstanding the fact that",
      "albeit",
      "despite the reality that"
    ],
    "contextSentence": "The initiative advanced, notwithstanding the fact that resources were constrained."
  },
  {
    "id": 196,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Similarly",
    "highBandParaphrases": [
      "By the same token",
      "likewise",
      "in parallel",
      "correspondingly"
    ],
    "contextSentence": "Schools teach ethics; by the same token, parents must model honesty."
  },
  {
    "id": 197,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Especially",
    "highBandParaphrases": [
      "Particularly",
      "notably",
      "predominantly",
      "in particular"
    ],
    "contextSentence": "The issue affects developing nations, predominantly in arid zones."
  },
  {
    "id": 198,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Naturally / Of course",
    "highBandParaphrases": [
      "Inevitably",
      "undeniably",
      "as might be anticipated"
    ],
    "contextSentence": "Rapid migration inevitably increases municipal housing demand."
  },
  {
    "id": 199,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Clearly / Obviously",
    "highBandParaphrases": [
      "Manifestly",
      "unmistakably",
      "patently",
      "self-evidently"
    ],
    "contextSentence": "The data patently proves that carbon taxes decrease industrial emissions."
  },
  {
    "id": 200,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Above all",
    "highBandParaphrases": [
      "Most crucially",
      "pre-eminently",
      "paramount among these"
    ],
    "contextSentence": "Paramount among these considerations is the preservation of public health."
  }
];

export const PARAPHRASE_GOLDEN_RULES = [
  {
    number: 1,
    title: "Avoid Blind Synonym-Hunting",
    summary: "Never swap a word unless you know the whole phrase's natural academic collocation.",
    examples: [
      { label: "Unnatural Swap", text: "Address an inquiry (awkward)" },
      { label: "Natural Band 8+ Collocation", text: "Address an issue / Precipitate a decline / Derive benefits" }
    ]
  },
  {
    number: 2,
    title: "Transform Sentence Architecture (Not Just Words)",
    summary: "High-band writers combine lexical upgrade with syntactic restructuring (e.g. active to passive or nominalization).",
    examples: [
      { label: "Band 6.0 (Simple Repetitive)", text: "Because people use too many cars, cities are polluted." },
      { label: "Band 8.5+ (Syntactic Transformation)", text: "The ubiquitous reliance on private automobiles has precipitated severe atmospheric degradation across major metropolises." }
    ]
  },
  {
    number: 3,
    title: "Vary Discourse Markers & Transitions",
    summary: "Never rely on the same transition repeatedly (e.g. using 'Furthermore' 4 times in one Task 2 essay).",
    examples: [
      { label: "Repetitive Pattern", text: "Furthermore... Furthermore... Furthermore..." },
      { label: "Band 8.5+ Varied Chain", text: "Coupled with this -> Additionally -> Along with this -> Furthermore" }
    ]
  }
];
