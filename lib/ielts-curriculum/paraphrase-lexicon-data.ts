// The Master IELTS 200-Word Paraphrasing Lexicon Data
// Curated: Only the 3-4 most frequently used, natural academic synonyms (No obscure jargon)

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
    "description": "Show, increase, decrease, cause, prevent, alter, produce..."
  },
  {
    "index": 2,
    "name": "Judgments, Qualities & Modifiers",
    "range": [
      21,
      40
    ],
    "icon": "\ud83d\udc8e",
    "description": "Beneficial, harmful, substantial, minimal, crucial..."
  },
  {
    "index": 3,
    "name": "People, Society & Demographics",
    "range": [
      41,
      60
    ],
    "icon": "\ud83d\udc65",
    "description": "Individuals, youth, elderly, citizens, parents..."
  },
  {
    "index": 4,
    "name": "Education, Learning & Intellect",
    "range": [
      61,
      80
    ],
    "icon": "\ud83c\udf93",
    "description": "Institutions, educators, undergraduates, skills..."
  },
  {
    "index": 5,
    "name": "Technology, Science & Innovation",
    "range": [
      81,
      100
    ],
    "icon": "\ud83d\ude80",
    "description": "Digital tools, modern devices, internet, AI..."
  },
  {
    "index": 6,
    "name": "Environment, Climate & Urban Life",
    "range": [
      101,
      120
    ],
    "icon": "\ud83c\udf31",
    "description": "Ecosystem, emissions, metropolis, wildlife..."
  },
  {
    "index": 7,
    "name": "Economy, Business, Money & Work",
    "range": [
      121,
      140
    ],
    "icon": "\ud83d\udcbc",
    "description": "Income, employment, enterprise, commerce..."
  },
  {
    "index": 8,
    "name": "Health, Well-being & Lifestyle",
    "range": [
      141,
      160
    ],
    "icon": "\ud83e\ude7a",
    "description": "Well-being, physical activity, nutrition, longevity..."
  },
  {
    "index": 9,
    "name": "Causes, Effects, Logic & Problems",
    "range": [
      161,
      180
    ],
    "icon": "\ud83e\udde9",
    "description": "Consequence, challenge, remedy, influence..."
  },
  {
    "index": 10,
    "name": "Discourse Markers & Transitions",
    "range": [
      181,
      200
    ],
    "icon": "\ud83d\udd17",
    "description": "Furthermore, however, since, consequently, overall..."
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
      "Demonstrate",
      "Illustrate",
      "Reveal",
      "Indicate"
    ],
    "contextSentence": "The chart clearly illustrates the trend in energy use."
  },
  {
    "id": 2,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Increase (v)",
    "highBandParaphrases": [
      "Rise",
      "Grow",
      "Climb",
      "Surge"
    ],
    "contextSentence": "Carbon emissions continue to rise each year."
  },
  {
    "id": 3,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Decrease (v)",
    "highBandParaphrases": [
      "Decline",
      "Drop",
      "Fall",
      "Diminish"
    ],
    "contextSentence": "Car use declined sharply after the tax was introduced."
  },
  {
    "id": 4,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Cause (v)",
    "highBandParaphrases": [
      "Lead to",
      "Result in",
      "Trigger",
      "Bring about"
    ],
    "contextSentence": "Heavy traffic leads to severe air pollution in cities."
  },
  {
    "id": 5,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Stop / Prevent",
    "highBandParaphrases": [
      "Prevent",
      "Halt",
      "Curb",
      "Deter"
    ],
    "contextSentence": "Strict laws can prevent illegal waste dumping."
  },
  {
    "id": 6,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Change (v)",
    "highBandParaphrases": [
      "Alter",
      "Transform",
      "Modify",
      "Shift"
    ],
    "contextSentence": "Technology has transformed the way people work."
  },
  {
    "id": 7,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Create / Make",
    "highBandParaphrases": [
      "Produce",
      "Generate",
      "Build",
      "Establish"
    ],
    "contextSentence": "Green energy projects generate many new jobs."
  },
  {
    "id": 8,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Give / Provide",
    "highBandParaphrases": [
      "Provide",
      "Offer",
      "Supply",
      "Grant"
    ],
    "contextSentence": "Universities should provide financial aid to low-income students."
  },
  {
    "id": 9,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Get / Receive",
    "highBandParaphrases": [
      "Obtain",
      "Acquire",
      "Gain",
      "Receive"
    ],
    "contextSentence": "Graduates gain valuable practical experience from internships."
  },
  {
    "id": 10,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Use (v)",
    "highBandParaphrases": [
      "Utilise",
      "Employ",
      "Apply",
      "Adopt"
    ],
    "contextSentence": "Schools should utilise digital tools in daily teaching."
  },
  {
    "id": 11,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Choose",
    "highBandParaphrases": [
      "Select",
      "Opt for",
      "Decide on",
      "Pick"
    ],
    "contextSentence": "Many school leavers opt for vocational training over university."
  },
  {
    "id": 12,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Need / Require",
    "highBandParaphrases": [
      "Require",
      "Demand",
      "Call for",
      "Necessitate"
    ],
    "contextSentence": "The housing shortage requires prompt action from the council."
  },
  {
    "id": 13,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Understand",
    "highBandParaphrases": [
      "Comprehend",
      "Grasp",
      "Recognise",
      "Realise"
    ],
    "contextSentence": "Students need to grasp basic mathematical principles early."
  },
  {
    "id": 14,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Agree",
    "highBandParaphrases": [
      "Support",
      "Concur",
      "Accept",
      "Back"
    ],
    "contextSentence": "Most economists support the idea of investing in clean power."
  },
  {
    "id": 15,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Disagree",
    "highBandParaphrases": [
      "Oppose",
      "Reject",
      "Dispute",
      "Challenge"
    ],
    "contextSentence": "Some residents oppose the construction of the new highway."
  },
  {
    "id": 16,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Destroy / Damage",
    "highBandParaphrases": [
      "Damage",
      "Harm",
      "Ruin",
      "Impair"
    ],
    "contextSentence": "Excessive logging harms local wildlife and soil quality."
  },
  {
    "id": 17,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Improve",
    "highBandParaphrases": [
      "Enhance",
      "Boost",
      "Upgrade",
      "Develop"
    ],
    "contextSentence": "Better public transport enhances the quality of city life."
  },
  {
    "id": 18,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Happen / Occur",
    "highBandParaphrases": [
      "Occur",
      "Take place",
      "Arise",
      "Happen"
    ],
    "contextSentence": "Traffic jams frequently occur during morning rush hours."
  },
  {
    "id": 19,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Explain",
    "highBandParaphrases": [
      "Clarify",
      "Account for",
      "Describe",
      "Outline"
    ],
    "contextSentence": "The report clarifies why public transit use increased."
  },
  {
    "id": 20,
    "categoryId": 1,
    "categoryName": "Academic Verbs & Actions",
    "categoryIcon": "\u26a1",
    "baseWord": "Start / Begin",
    "highBandParaphrases": [
      "Begin",
      "Initiate",
      "Launch",
      "Introduce"
    ],
    "contextSentence": "The government plans to launch a nationwide recycling drive."
  },
  {
    "id": 21,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Good / Positive",
    "highBandParaphrases": [
      "Beneficial",
      "Advantageous",
      "Favourable",
      "Positive"
    ],
    "contextSentence": "Regular physical exercise is beneficial for heart health."
  },
  {
    "id": 22,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Bad / Negative",
    "highBandParaphrases": [
      "Harmful",
      "Damaging",
      "Detrimental",
      "Adverse"
    ],
    "contextSentence": "A poor diet has detrimental effects on children's growth."
  },
  {
    "id": 23,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Big / Huge",
    "highBandParaphrases": [
      "Substantial",
      "Significant",
      "Considerable",
      "Major"
    ],
    "contextSentence": "Tourism brings substantial revenue to coastal towns."
  },
  {
    "id": 24,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Small / Minor",
    "highBandParaphrases": [
      "Minor",
      "Minimal",
      "Modest",
      "Slight"
    ],
    "contextSentence": "The price rise had only a minimal impact on sales."
  },
  {
    "id": 25,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Important",
    "highBandParaphrases": [
      "Crucial",
      "Vital",
      "Essential",
      "Significant"
    ],
    "contextSentence": "Reading regularly is crucial for language development."
  },
  {
    "id": 26,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Unimportant",
    "highBandParaphrases": [
      "Insignificant",
      "Minor",
      "Secondary",
      "Trivial"
    ],
    "contextSentence": "Minor spelling slips are secondary to clear essay structure."
  },
  {
    "id": 27,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Necessary",
    "highBandParaphrases": [
      "Essential",
      "Required",
      "Vital",
      "Mandatory"
    ],
    "contextSentence": "Safety training is mandatory for all factory employees."
  },
  {
    "id": 28,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Easy",
    "highBandParaphrases": [
      "Simple",
      "Straightforward",
      "Manageable",
      "Effortless"
    ],
    "contextSentence": "Online banking makes managing personal savings straightforward."
  },
  {
    "id": 29,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Difficult / Hard",
    "highBandParaphrases": [
      "Challenging",
      "Demanding",
      "Tough",
      "Complex"
    ],
    "contextSentence": "Learning a second language as an adult is demanding."
  },
  {
    "id": 30,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Many / A lot of",
    "highBandParaphrases": [
      "Numerous",
      "A wide range of",
      "Multiple",
      "Abundant"
    ],
    "contextSentence": "Online platforms offer numerous courses for adult learners."
  },
  {
    "id": 31,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Few / Little",
    "highBandParaphrases": [
      "Limited",
      "Scarce",
      "Insufficient",
      "Meager"
    ],
    "contextSentence": "Funds for regional art galleries remain scarce."
  },
  {
    "id": 32,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Common / Usual",
    "highBandParaphrases": [
      "Widespread",
      "Typical",
      "Prevalent",
      "Regular"
    ],
    "contextSentence": "Remote working is now widespread in the tech sector."
  },
  {
    "id": 33,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Rare / Unusual",
    "highBandParaphrases": [
      "Uncommon",
      "Exceptional",
      "Infrequent",
      "Rare"
    ],
    "contextSentence": "Snowfall is uncommon in this southern province."
  },
  {
    "id": 34,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Dangerous",
    "highBandParaphrases": [
      "Risky",
      "Hazardous",
      "Unsafe",
      "Perilous"
    ],
    "contextSentence": "Riding bicycles without helmets is hazardous on busy roads."
  },
  {
    "id": 35,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Safe",
    "highBandParaphrases": [
      "Secure",
      "Protected",
      "Risk-free",
      "Harmless"
    ],
    "contextSentence": "Modern air travel is exceptionally safe and reliable."
  },
  {
    "id": 36,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Cheap",
    "highBandParaphrases": [
      "Inexpensive",
      "Affordable",
      "Low-cost",
      "Economical"
    ],
    "contextSentence": "Solar power is becoming more affordable for households."
  },
  {
    "id": 37,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Expensive",
    "highBandParaphrases": [
      "Costly",
      "Overpriced",
      "High-priced",
      "Exorbitant"
    ],
    "contextSentence": "Renting a flat in London has become extremely costly."
  },
  {
    "id": 38,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Fast / Rapid",
    "highBandParaphrases": [
      "Rapid",
      "Quick",
      "Swift",
      "Speedy"
    ],
    "contextSentence": "Urban areas experienced rapid population growth last decade."
  },
  {
    "id": 39,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Slow",
    "highBandParaphrases": [
      "Gradual",
      "Sluggish",
      "Steady",
      "Slow-paced"
    ],
    "contextSentence": "Economic recovery in rural districts remains sluggish."
  },
  {
    "id": 40,
    "categoryId": 2,
    "categoryName": "Judgments, Qualities & Modifiers",
    "categoryIcon": "\ud83d\udc8e",
    "baseWord": "Famous / Popular",
    "highBandParaphrases": [
      "Well-known",
      "Renowned",
      "Celebrated",
      "Prominent"
    ],
    "contextSentence": "The city is renowned for its historic museums and parks."
  },
  {
    "id": 41,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "People",
    "highBandParaphrases": [
      "Individuals",
      "Citizens",
      "The public",
      "Society"
    ],
    "contextSentence": "Individuals should take personal responsibility for waste."
  },
  {
    "id": 42,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Society",
    "highBandParaphrases": [
      "Community",
      "The public",
      "Civilization",
      "Culture"
    ],
    "contextSentence": "Modern society relies heavily on digital communication."
  },
  {
    "id": 43,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Children / Kids",
    "highBandParaphrases": [
      "Young people",
      "Minors",
      "Youngsters",
      "Adolescents"
    ],
    "contextSentence": "Parents must limit screen time for young minors."
  },
  {
    "id": 44,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Old people",
    "highBandParaphrases": [
      "The elderly",
      "Senior citizens",
      "Older adults",
      "Retirees"
    ],
    "contextSentence": "Healthcare systems must support an expanding elderly population."
  },
  {
    "id": 45,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Young people",
    "highBandParaphrases": [
      "Youth",
      "Teenagers",
      "Young adults",
      "Adolescents"
    ],
    "contextSentence": "Youth unemployment is a serious challenge in many nations."
  },
  {
    "id": 46,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Parents",
    "highBandParaphrases": [
      "Guardians",
      "Caregivers",
      "Mothers and fathers",
      "Family"
    ],
    "contextSentence": "Guardians play a central role in early emotional development."
  },
  {
    "id": 47,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Rich people",
    "highBandParaphrases": [
      "Wealthy individuals",
      "The rich",
      "High-income earners",
      "Affluent families"
    ],
    "contextSentence": "Affluent households tend to spend more on private tutoring."
  },
  {
    "id": 48,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Poor people",
    "highBandParaphrases": [
      "Low-income families",
      "The poor",
      "Disadvantaged groups",
      "Impoverished citizens"
    ],
    "contextSentence": "Government grants directly assist low-income families."
  },
  {
    "id": 49,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Public (n)",
    "highBandParaphrases": [
      "Citizens",
      "Community",
      "General public",
      "Taxpayers"
    ],
    "contextSentence": "The general public expects prompt and honest public services."
  },
  {
    "id": 50,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Worker / Employee",
    "highBandParaphrases": [
      "Staff",
      "Employee",
      "Workforce",
      "Personnel"
    ],
    "contextSentence": "Companies should invest in training their staff members."
  },
  {
    "id": 51,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Boss / Employer",
    "highBandParaphrases": [
      "Manager",
      "Supervisor",
      "Employer",
      "Executive"
    ],
    "contextSentence": "A supportive manager improves team productivity and morale."
  },
  {
    "id": 52,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Government",
    "highBandParaphrases": [
      "Authorities",
      "The state",
      "Policymakers",
      "Administration"
    ],
    "contextSentence": "Policymakers must introduce stricter limits on emissions."
  },
  {
    "id": 53,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Citizen",
    "highBandParaphrases": [
      "Resident",
      "Inhabitant",
      "National",
      "Taxpayer"
    ],
    "contextSentence": "Local residents voted in favour of the new city library."
  },
  {
    "id": 54,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Criminal",
    "highBandParaphrases": [
      "Offender",
      "Lawbreaker",
      "Wrongdoer",
      "Culprit"
    ],
    "contextSentence": "Community service helps first-time offenders reform."
  },
  {
    "id": 55,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Victim",
    "highBandParaphrases": [
      "Sufferer",
      "Affected person",
      "Casualty",
      "Injured party"
    ],
    "contextSentence": "Legal advice should be easily accessible for fraud victims."
  },
  {
    "id": 56,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Community",
    "highBandParaphrases": [
      "Neighbourhood",
      "Local area",
      "Society",
      "District"
    ],
    "contextSentence": "Community gardens encourage healthier habits in the district."
  },
  {
    "id": 57,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Family",
    "highBandParaphrases": [
      "Household",
      "Relatives",
      "Nuclear family",
      "Family unit"
    ],
    "contextSentence": "Rising housing prices place strain on young households."
  },
  {
    "id": 58,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Generation",
    "highBandParaphrases": [
      "Age group",
      "Peer group",
      "Cohort",
      "Younger generation"
    ],
    "contextSentence": "The younger age group prefers streaming services over cable TV."
  },
  {
    "id": 59,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Population",
    "highBandParaphrases": [
      "Inhabitants",
      "Residents",
      "Demographics",
      "Citizens"
    ],
    "contextSentence": "The city's population grew rapidly due to job growth."
  },
  {
    "id": 60,
    "categoryId": 3,
    "categoryName": "People, Society & Demographics",
    "categoryIcon": "\ud83d\udc65",
    "baseWord": "Human (n/adj)",
    "highBandParaphrases": [
      "Humankind",
      "Human beings",
      "People",
      "Mankind"
    ],
    "contextSentence": "Human beings have had a profound impact on global ecosystems."
  },
  {
    "id": 61,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "School / University",
    "highBandParaphrases": [
      "Educational institution",
      "College",
      "Academy",
      "Campus"
    ],
    "contextSentence": "Higher educational institutions should foster critical thinking."
  },
  {
    "id": 62,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Student",
    "highBandParaphrases": [
      "Learner",
      "Pupil",
      "Undergraduate",
      "Scholar"
    ],
    "contextSentence": "Learners benefit when theory is paired with practical lab work."
  },
  {
    "id": 63,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Teacher",
    "highBandParaphrases": [
      "Educator",
      "Instructor",
      "Lecturer",
      "Tutor"
    ],
    "contextSentence": "Skilled educators motivate pupils to read independently."
  },
  {
    "id": 64,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Learn / Study",
    "highBandParaphrases": [
      "Acquire knowledge",
      "Master skills",
      "Study",
      "Revise"
    ],
    "contextSentence": "Pupils acquire essential digital skills through weekly workshops."
  },
  {
    "id": 65,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Knowledge",
    "highBandParaphrases": [
      "Understanding",
      "Expertise",
      "Information",
      "Insight"
    ],
    "contextSentence": "Hands-on projects deepen students' understanding of physics."
  },
  {
    "id": 66,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Skill / Ability",
    "highBandParaphrases": [
      "Competence",
      "Proficiency",
      "Capability",
      "Talent"
    ],
    "contextSentence": "Language proficiency opens up diverse international careers."
  },
  {
    "id": 67,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Test / Exam",
    "highBandParaphrases": [
      "Assessment",
      "Examination",
      "Evaluation",
      "Appraisal"
    ],
    "contextSentence": "Continuous assessment offers a fair reflection of pupil ability."
  },
  {
    "id": 68,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Subject",
    "highBandParaphrases": [
      "Academic discipline",
      "Field of study",
      "Course",
      "Topic"
    ],
    "contextSentence": "Science and humanities are equally vital fields of study."
  },
  {
    "id": 69,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Smart / Clever",
    "highBandParaphrases": [
      "Intelligent",
      "Bright",
      "Gifted",
      "Sharp"
    ],
    "contextSentence": "Bright pupils often need advanced challenges to stay engaged."
  },
  {
    "id": 70,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Degree / Diploma",
    "highBandParaphrases": [
      "Qualification",
      "Certificate",
      "Credential",
      "Academic award"
    ],
    "contextSentence": "A recognized qualification helps job applicants stand out."
  },
  {
    "id": 71,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Homework",
    "highBandParaphrases": [
      "Assignments",
      "Coursework",
      "Independent tasks",
      "Study tasks"
    ],
    "contextSentence": "Regular assignments help pupils consolidate weekly lessons."
  },
  {
    "id": 72,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Career",
    "highBandParaphrases": [
      "Profession",
      "Occupation",
      "Career path",
      "Vocation"
    ],
    "contextSentence": "Engineering is a respected and rewarding career path."
  },
  {
    "id": 73,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Success",
    "highBandParaphrases": [
      "Achievement",
      "Accomplishment",
      "Triumph",
      "Progress"
    ],
    "contextSentence": "Academic achievement requires consistent effort and self-discipline."
  },
  {
    "id": 74,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Failure",
    "highBandParaphrases": [
      "Setback",
      "Defeat",
      "Shortcoming",
      "Lack of success"
    ],
    "contextSentence": "Treating setbacks as learning moments builds resilience."
  },
  {
    "id": 75,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Remember",
    "highBandParaphrases": [
      "Recall",
      "Retain",
      "Keep in mind",
      "Bear in mind"
    ],
    "contextSentence": "Flashcards help language students retain key vocabulary."
  },
  {
    "id": 76,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Forget",
    "highBandParaphrases": [
      "Overlook",
      "Neglect",
      "Ignore",
      "Omit"
    ],
    "contextSentence": "Historians must not overlook the contribution of rural workers."
  },
  {
    "id": 77,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Think / Opinion",
    "highBandParaphrases": [
      "Belief",
      "Perspective",
      "Viewpoint",
      "Stance"
    ],
    "contextSentence": "Scholars hold different perspectives on the benefits of homework."
  },
  {
    "id": 78,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Idea",
    "highBandParaphrases": [
      "Concept",
      "Notion",
      "Proposal",
      "Suggestion"
    ],
    "contextSentence": "The concept of lifelong education is now widely embraced."
  },
  {
    "id": 79,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Fact",
    "highBandParaphrases": [
      "Reality",
      "Truth",
      "Evidence",
      "Finding"
    ],
    "contextSentence": "Scientific evidence confirms that smoking harms lung health."
  },
  {
    "id": 80,
    "categoryId": 4,
    "categoryName": "Education, Learning & Intellect",
    "categoryIcon": "\ud83c\udf93",
    "baseWord": "Truth",
    "highBandParaphrases": [
      "Accuracy",
      "Factual truth",
      "Validity",
      "Correctness"
    ],
    "contextSentence": "Examiners evaluate the factual accuracy of Task 1 reports."
  },
  {
    "id": 81,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Technology",
    "highBandParaphrases": [
      "Tech systems",
      "Digital tools",
      "Innovations",
      "Modern devices"
    ],
    "contextSentence": "Classrooms use digital tools to make lessons interactive."
  },
  {
    "id": 82,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Modern",
    "highBandParaphrases": [
      "Contemporary",
      "Current",
      "Recent",
      "Present-day"
    ],
    "contextSentence": "In contemporary society, telecommuting is becoming commonplace."
  },
  {
    "id": 83,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Internet",
    "highBandParaphrases": [
      "The web",
      "Online space",
      "Cyberspace",
      "Digital network"
    ],
    "contextSentence": "The web allows instant access to global news and libraries."
  },
  {
    "id": 84,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Phone / Computer",
    "highBandParaphrases": [
      "Digital device",
      "Electronic gadget",
      "Handheld device",
      "Terminal"
    ],
    "contextSentence": "Children spend excessive hours on handheld devices."
  },
  {
    "id": 85,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Device / Machine",
    "highBandParaphrases": [
      "Appliance",
      "Equipment",
      "Gadget",
      "Instrument"
    ],
    "contextSentence": "Automated equipment speeds up vehicle production lines."
  },
  {
    "id": 86,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "AI / Robot",
    "highBandParaphrases": [
      "Artificial intelligence",
      "Smart machines",
      "Automated systems",
      "Robotic tools"
    ],
    "contextSentence": "Artificial intelligence helps doctors detect illnesses early."
  },
  {
    "id": 87,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Future (n/adj)",
    "highBandParaphrases": [
      "Coming years",
      "Ahead",
      "Long term",
      "Upcoming"
    ],
    "contextSentence": "Planning for the coming years requires resilient public works."
  },
  {
    "id": 88,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Progress / Develop",
    "highBandParaphrases": [
      "Advance",
      "Grow",
      "Move forward",
      "Evolve"
    ],
    "contextSentence": "Medical science has advanced dramatically in recent decades."
  },
  {
    "id": 89,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Information",
    "highBandParaphrases": [
      "Data",
      "Details",
      "Facts",
      "Findings"
    ],
    "contextSentence": "Online search engines help researchers locate relevant data."
  },
  {
    "id": 90,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Communicate",
    "highBandParaphrases": [
      "Interact",
      "Converse",
      "Stay in touch",
      "Exchange views"
    ],
    "contextSentence": "Colleagues interact across time zones using video calls."
  },
  {
    "id": 91,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Replace / Automate",
    "highBandParaphrases": [
      "Substitute",
      "Take over",
      "Displace",
      "Mechanise"
    ],
    "contextSentence": "Automated self-checkouts have substituted human cashiers."
  },
  {
    "id": 92,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Connect",
    "highBandParaphrases": [
      "Link",
      "Join",
      "Bridge",
      "Network"
    ],
    "contextSentence": "High-speed rail links provincial cities to the capital."
  },
  {
    "id": 93,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Isolate / Disconnect",
    "highBandParaphrases": [
      "Cut off",
      "Separate",
      "Alienate",
      "Detach"
    ],
    "contextSentence": "Living alone in distant suburbs can cut off elderly residents."
  },
  {
    "id": 94,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Online / Virtual",
    "highBandParaphrases": [
      "Digital",
      "Web-based",
      "Electronic",
      "Remote"
    ],
    "contextSentence": "Web-based degrees offer flexibility for working adults."
  },
  {
    "id": 95,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Risk / Danger (tech)",
    "highBandParaphrases": [
      "Cyber threat",
      "Security risk",
      "Vulnerability",
      "Hazard"
    ],
    "contextSentence": "Data hacking is an urgent cybersecurity risk for online banks."
  },
  {
    "id": 96,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Instant / Fast",
    "highBandParaphrases": [
      "Immediate",
      "Rapid",
      "Prompt",
      "Instantaneous"
    ],
    "contextSentence": "Consumers expect prompt delivery when shopping on the web."
  },
  {
    "id": 97,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Convenient",
    "highBandParaphrases": [
      "Practical",
      "User-friendly",
      "Handy",
      "Hassle-free"
    ],
    "contextSentence": "Smartphones offer a practical way to manage daily travel."
  },
  {
    "id": 98,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Electricity / Power",
    "highBandParaphrases": [
      "Energy",
      "Electrical power",
      "Power supply",
      "Current"
    ],
    "contextSentence": "Transitioning to clean energy reduces national reliance on gas."
  },
  {
    "id": 99,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Research (n/v)",
    "highBandParaphrases": [
      "Study",
      "Investigation",
      "Inquiry",
      "Examine"
    ],
    "contextSentence": "A recent medical study confirms the benefits of daily walking."
  },
  {
    "id": 100,
    "categoryId": 5,
    "categoryName": "Technology, Science & Innovation",
    "categoryIcon": "\ud83d\ude80",
    "baseWord": "Invention",
    "highBandParaphrases": [
      "Breakthrough",
      "Creation",
      "Innovation",
      "Discovery"
    ],
    "contextSentence": "The discovery of penicillin was a landmark medical breakthrough."
  },
  {
    "id": 101,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Environment",
    "highBandParaphrases": [
      "Nature",
      "Natural world",
      "Ecosystem",
      "Habitat"
    ],
    "contextSentence": "Pollution damages the delicate balance of the natural world."
  },
  {
    "id": 102,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Pollution",
    "highBandParaphrases": [
      "Contamination",
      "Emissions",
      "Toxic waste",
      "Smog"
    ],
    "contextSentence": "Vehicle emissions remain the chief driver of urban smog."
  },
  {
    "id": 103,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Trash / Rubbish",
    "highBandParaphrases": [
      "Waste",
      "Garbage",
      "Litter",
      "Refuse"
    ],
    "contextSentence": "Banning plastic bags helps reduce roadside litter."
  },
  {
    "id": 104,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "City / Urban",
    "highBandParaphrases": [
      "Metropolis",
      "Urban area",
      "Town",
      "Civic centre"
    ],
    "contextSentence": "Traffic congestion is common across every major metropolis."
  },
  {
    "id": 105,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Countryside / Rural",
    "highBandParaphrases": [
      "Rural area",
      "Country",
      "Countryside",
      "Village"
    ],
    "contextSentence": "Quiet rural areas appeal to retirees seeking peace."
  },
  {
    "id": 106,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Climate change",
    "highBandParaphrases": [
      "Global warming",
      "Climate crisis",
      "Rising temperatures",
      "Shifting climates"
    ],
    "contextSentence": "Mitigating global warming requires coordinated international treaties."
  },
  {
    "id": 107,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Nature / Animals",
    "highBandParaphrases": [
      "Wildlife",
      "Fauna and flora",
      "Living creatures",
      "Wild species"
    ],
    "contextSentence": "Deforestation threatens unique wildlife in tropical forests."
  },
  {
    "id": 108,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Protect / Conserve",
    "highBandParaphrases": [
      "Safeguard",
      "Preserve",
      "Protect",
      "Conserve"
    ],
    "contextSentence": "Nations must safeguard coral reefs from destructive fishing."
  },
  {
    "id": 109,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Cut down (trees)",
    "highBandParaphrases": [
      "Clear trees",
      "Log",
      "Deforest",
      "Fell"
    ],
    "contextSentence": "Farming companies continue to clear trees across the Amazon basin."
  },
  {
    "id": 110,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Traffic / Cars",
    "highBandParaphrases": [
      "Vehicular traffic",
      "Road congestion",
      "Gridlock",
      "Motor vehicles"
    ],
    "contextSentence": "Encouraging bus transport helps relieve morning road congestion."
  },
  {
    "id": 111,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Air (dirty)",
    "highBandParaphrases": [
      "Smog",
      "Air pollution",
      "Fumes",
      "Hazy air"
    ],
    "contextSentence": "Severe air pollution raises the incidence of asthma in children."
  },
  {
    "id": 112,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Water (clean)",
    "highBandParaphrases": [
      "Potable water",
      "Freshwater",
      "Drinking water",
      "Clean water"
    ],
    "contextSentence": "Access to clean drinking water is a fundamental human right."
  },
  {
    "id": 113,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Fuel / Energy",
    "highBandParaphrases": [
      "Fossil fuels",
      "Energy sources",
      "Clean energy",
      "Power supplies"
    ],
    "contextSentence": "Investing in clean energy sources cuts reliance on imported oil."
  },
  {
    "id": 114,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Earth / Planet",
    "highBandParaphrases": [
      "The globe",
      "Our planet",
      "The world",
      "The earth"
    ],
    "contextSentence": "Conserving fresh water is vital for communities around the globe."
  },
  {
    "id": 115,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Global Warming",
    "highBandParaphrases": [
      "Rising temperatures",
      "Climate heating",
      "Thermal warming",
      "Greenhouse effect"
    ],
    "contextSentence": "Rising temperatures are causing mountain glaciers to shrink."
  },
  {
    "id": 116,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Habitat",
    "highBandParaphrases": [
      "Natural home",
      "Breeding ground",
      "Ecosystem",
      "Biome"
    ],
    "contextSentence": "Coastal wetlands serve as an essential breeding ground for birds."
  },
  {
    "id": 117,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Animal (wild)",
    "highBandParaphrases": [
      "Wildlife",
      "Wild creatures",
      "Native animals",
      "Fauna"
    ],
    "contextSentence": "Commercial hunting imperils countless native wild creatures."
  },
  {
    "id": 118,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Plant / Tree",
    "highBandParaphrases": [
      "Flora",
      "Vegetation",
      "Greenery",
      "Foliage"
    ],
    "contextSentence": "Native vegetation survives drought conditions far better than crops."
  },
  {
    "id": 119,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Green / Eco",
    "highBandParaphrases": [
      "Eco-friendly",
      "Sustainable",
      "Clean",
      "Environmentally sound"
    ],
    "contextSentence": "Eco-friendly homes use heat pumps and solar roof tiles."
  },
  {
    "id": 120,
    "categoryId": 6,
    "categoryName": "Environment, Climate & Urban Life",
    "categoryIcon": "\ud83c\udf31",
    "baseWord": "Disaster",
    "highBandParaphrases": [
      "Catastrophe",
      "Crisis",
      "Calamity",
      "Natural hazard"
    ],
    "contextSentence": "Earthquakes and typhoons represent devastating natural catastrophes."
  },
  {
    "id": 121,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Money",
    "highBandParaphrases": [
      "Funds",
      "Capital",
      "Finances",
      "Cash"
    ],
    "contextSentence": "Young firms need adequate venture capital to develop prototypes."
  },
  {
    "id": 122,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Salary / Wage",
    "highBandParaphrases": [
      "Income",
      "Earnings",
      "Pay",
      "Remuneration"
    ],
    "contextSentence": "A fair monthly income motivates employees to stay with the firm."
  },
  {
    "id": 123,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Job / Work",
    "highBandParaphrases": [
      "Employment",
      "Occupation",
      "Profession",
      "Career"
    ],
    "contextSentence": "The medical profession requires years of dedicated study."
  },
  {
    "id": 124,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Company / Business",
    "highBandParaphrases": [
      "Enterprise",
      "Firm",
      "Corporation",
      "Business"
    ],
    "contextSentence": "Multinational corporations have set net-zero emissions targets."
  },
  {
    "id": 125,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Buy / Purchase",
    "highBandParaphrases": [
      "Purchase",
      "Acquire",
      "Buy",
      "Procure"
    ],
    "contextSentence": "More families now purchase everyday groceries on the web."
  },
  {
    "id": 126,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Sell",
    "highBandParaphrases": [
      "Market",
      "Distribute",
      "Retail",
      "Trade"
    ],
    "contextSentence": "Small farms can market organic vegetables directly to neighbours."
  },
  {
    "id": 127,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Cost / Price",
    "highBandParaphrases": [
      "Expense",
      "Charge",
      "Outlay",
      "Price"
    ],
    "contextSentence": "High initial equipment expenses can deter small firms from green tech."
  },
  {
    "id": 128,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Economy",
    "highBandParaphrases": [
      "Economic system",
      "Financial market",
      "Commerce",
      "Trade sector"
    ],
    "contextSentence": "Tourism contributes billions of pounds to the national economic system."
  },
  {
    "id": 129,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Free (no cost)",
    "highBandParaphrases": [
      "Complimentary",
      "State-funded",
      "Cost-free",
      "Subsidised"
    ],
    "contextSentence": "Basic medical checkups should remain state-funded for all."
  },
  {
    "id": 130,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Tax",
    "highBandParaphrases": [
      "Levy",
      "Duty",
      "Tariff",
      "Taxation"
    ],
    "contextSentence": "Placing a tax levy on sugary drinks encourages healthier choices."
  },
  {
    "id": 131,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Debt",
    "highBandParaphrases": [
      "Borrowing",
      "Loans",
      "Deficit",
      "Financial liability"
    ],
    "contextSentence": "Heavy student debt can delay young adults from purchasing homes."
  },
  {
    "id": 132,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Profit",
    "highBandParaphrases": [
      "Financial gain",
      "Earnings",
      "Net income",
      "Return"
    ],
    "contextSentence": "Companies must balance financial gains with workplace ethics."
  },
  {
    "id": 133,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Trade",
    "highBandParaphrases": [
      "Commerce",
      "Business dealings",
      "Exchange",
      "Export-import"
    ],
    "contextSentence": "International commerce fosters diplomatic partnerships among nations."
  },
  {
    "id": 134,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Market",
    "highBandParaphrases": [
      "Marketplace",
      "Commercial sector",
      "Consumer market",
      "Trade arena"
    ],
    "contextSentence": "Electric cars are capturing a larger share of the auto marketplace."
  },
  {
    "id": 135,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Employment",
    "highBandParaphrases": [
      "Job creation",
      "Work opportunities",
      "Staffing",
      "Hiring"
    ],
    "contextSentence": "Expanding solar factories stimulates steady local job creation."
  },
  {
    "id": 136,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Unemployment",
    "highBandParaphrases": [
      "Joblessness",
      "Lack of jobs",
      "Redundancy",
      "Out of work"
    ],
    "contextSentence": "Youth joblessness contributes to economic instability in towns."
  },
  {
    "id": 137,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Opportunity",
    "highBandParaphrases": [
      "Prospect",
      "Possibility",
      "Chance",
      "Opening"
    ],
    "contextSentence": "Vocational apprenticeships unlock rewarding career prospects."
  },
  {
    "id": 138,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Industry",
    "highBandParaphrases": [
      "Manufacturing sector",
      "Production field",
      "Trade area",
      "Commercial sector"
    ],
    "contextSentence": "The renewable energy manufacturing sector is expanding swiftly."
  },
  {
    "id": 139,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Wealth",
    "highBandParaphrases": [
      "Affluence",
      "Prosperity",
      "Assets",
      "Fortune"
    ],
    "contextSentence": "Nations should reinvest national oil wealth into schools and roads."
  },
  {
    "id": 140,
    "categoryId": 7,
    "categoryName": "Economy, Business, Money & Work",
    "categoryIcon": "\ud83d\udcbc",
    "baseWord": "Luxury",
    "highBandParaphrases": [
      "Extravagance",
      "Splendour",
      "Premium goods",
      "Opulence"
    ],
    "contextSentence": "Spending on needless extravagance contrasts with poverty elsewhere."
  },
  {
    "id": 141,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Health",
    "highBandParaphrases": [
      "Well-being",
      "Physical fitness",
      "Health condition",
      "Vitality"
    ],
    "contextSentence": "A balanced diet contributes to sustained physical well-being."
  },
  {
    "id": 142,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Sick / Illness",
    "highBandParaphrases": [
      "Disease",
      "Ailment",
      "Disorder",
      "Infection"
    ],
    "contextSentence": "Sedentary office jobs increase the likelihood of heart ailments."
  },
  {
    "id": 143,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Food / Diet",
    "highBandParaphrases": [
      "Nutrition",
      "Daily diet",
      "Meals",
      "Nourishment"
    ],
    "contextSentence": "Wholesome nutrition is essential for cognitive performance in school."
  },
  {
    "id": 144,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Exercise (v/n)",
    "highBandParaphrases": [
      "Physical activity",
      "Workout",
      "Training",
      "Keeping fit"
    ],
    "contextSentence": "Regular physical activity strengthens muscles and lifts mood."
  },
  {
    "id": 145,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Hospital / Doctor",
    "highBandParaphrases": [
      "Medical clinic",
      "Healthcare provider",
      "Physician",
      "Doctor"
    ],
    "contextSentence": "Rural districts need modern medical clinics and qualified physicians."
  },
  {
    "id": 146,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Medicine / Cure",
    "highBandParaphrases": [
      "Medication",
      "Treatment",
      "Remedy",
      "Therapy"
    ],
    "contextSentence": "Early antibiotic treatment prevents common bacterial infections."
  },
  {
    "id": 147,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Stress / Tiredness",
    "highBandParaphrases": [
      "Fatigue",
      "Exhaustion",
      "Tension",
      "Burnout"
    ],
    "contextSentence": "Chronic mental fatigue impairs daily concentration and memory."
  },
  {
    "id": 148,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Mental Health",
    "highBandParaphrases": [
      "Psychological well-being",
      "Emotional health",
      "Mental wellness",
      "Peace of mind"
    ],
    "contextSentence": "Schools should promote pupil emotional health alongside exam grades."
  },
  {
    "id": 149,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Fat / Obesity",
    "highBandParaphrases": [
      "Overweight",
      "Excess weight",
      "Obesity",
      "Heavy build"
    ],
    "contextSentence": "Childhood obesity has become a major global health priority."
  },
  {
    "id": 150,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Lifespan / Age",
    "highBandParaphrases": [
      "Life expectancy",
      "Longevity",
      "Lifespan",
      "Years of life"
    ],
    "contextSentence": "Clean water and vaccines have dramatically prolonged average life expectancy."
  },
  {
    "id": 151,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Habit",
    "highBandParaphrases": [
      "Routine",
      "Practice",
      "Pattern",
      "Custom"
    ],
    "contextSentence": "Setting consistent sleep routines improves productivity next day."
  },
  {
    "id": 152,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Lifestyle",
    "highBandParaphrases": [
      "Way of living",
      "Life pattern",
      "Daily habits",
      "Lifestyle"
    ],
    "contextSentence": "A sedentary way of living raises blood pressure over time."
  },
  {
    "id": 153,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Pain",
    "highBandParaphrases": [
      "Discomfort",
      "Ache",
      "Soreness",
      "Distress"
    ],
    "contextSentence": "Stretching exercises relieve lower back discomfort in office workers."
  },
  {
    "id": 154,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Addiction",
    "highBandParaphrases": [
      "Dependency",
      "Heavy reliance",
      "Compulsion",
      "Craving"
    ],
    "contextSentence": "Mobile phone dependency disrupts normal face-to-face conversation."
  },
  {
    "id": 155,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Fitness",
    "highBandParaphrases": [
      "Stamina",
      "Physical endurance",
      "Good shape",
      "Strength"
    ],
    "contextSentence": "Aerobic swimming builds cardiovascular stamina and joint flexibility."
  },
  {
    "id": 156,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Recreation / Fun",
    "highBandParaphrases": [
      "Leisure",
      "Pastime",
      "Entertainment",
      "Amusement"
    ],
    "contextSentence": "Public parks offer pleasant leisure areas for urban families."
  },
  {
    "id": 157,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Sleep",
    "highBandParaphrases": [
      "Rest",
      "Slumber",
      "Nocturnal rest",
      "Sleep cycle"
    ],
    "contextSentence": "Adequate nocturnal rest is vital for repairing muscle tissue."
  },
  {
    "id": 158,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Clean / Hygiene",
    "highBandParaphrases": [
      "Sanitation",
      "Cleanliness",
      "Hygiene",
      "Sterile conditions"
    ],
    "contextSentence": "Hand-washing sanitation stops the transmission of winter colds."
  },
  {
    "id": 159,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Safety",
    "highBandParaphrases": [
      "Protection",
      "Security",
      "Welfare",
      "Precaution"
    ],
    "contextSentence": "Seat belts provide critical protection during road collisions."
  },
  {
    "id": 160,
    "categoryId": 8,
    "categoryName": "Health, Well-being & Lifestyle",
    "categoryIcon": "\ud83e\ude7a",
    "baseWord": "Treatment",
    "highBandParaphrases": [
      "Therapy",
      "Medical care",
      "Rehabilitation",
      "Remedy"
    ],
    "contextSentence": "Physical therapy helps sports players recover from knee sprains."
  },
  {
    "id": 161,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Cause (n)",
    "highBandParaphrases": [
      "Root factor",
      "Origin",
      "Reason",
      "Source"
    ],
    "contextSentence": "Lack of sleep is often the root factor behind low morning focus."
  },
  {
    "id": 162,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Effect / Result",
    "highBandParaphrases": [
      "Consequence",
      "Outcome",
      "Impact",
      "Repercussion"
    ],
    "contextSentence": "The policy had an immediate positive consequence on local air quality."
  },
  {
    "id": 163,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Reason",
    "highBandParaphrases": [
      "Rationale",
      "Motive",
      "Justification",
      "Explanation"
    ],
    "contextSentence": "The main rationale for the new speed limit is road safety."
  },
  {
    "id": 164,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Consequence",
    "highBandParaphrases": [
      "Outcome",
      "Aftermath",
      "Result",
      "Effect"
    ],
    "contextSentence": "Deforestation produces severe consequences for river water supplies."
  },
  {
    "id": 165,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Problem",
    "highBandParaphrases": [
      "Issue",
      "Challenge",
      "Difficulty",
      "Obstacle"
    ],
    "contextSentence": "Affordable housing is a pressing issue across capital cities."
  },
  {
    "id": 166,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Solution",
    "highBandParaphrases": [
      "Remedy",
      "Answer",
      "Resolution",
      "Countermeasure"
    ],
    "contextSentence": "Promoting bicycles is an effective remedy for urban congestion."
  },
  {
    "id": 167,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Danger",
    "highBandParaphrases": [
      "Risk",
      "Hazard",
      "Threat",
      "Peril"
    ],
    "contextSentence": "Reckless driving poses an unacceptable hazard to pedestrians."
  },
  {
    "id": 168,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Benefit",
    "highBandParaphrases": [
      "Advantage",
      "Gain",
      "Positive aspect",
      "Merit"
    ],
    "contextSentence": "Early language exposure brings cognitive advantages throughout life."
  },
  {
    "id": 169,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Drawback",
    "highBandParaphrases": [
      "Disadvantage",
      "Downside",
      "Flaw",
      "Shortcoming"
    ],
    "contextSentence": "A key downside of working from home is feeling isolated."
  },
  {
    "id": 170,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Impact",
    "highBandParaphrases": [
      "Influence",
      "Effect",
      "Impression",
      "Consequence"
    ],
    "contextSentence": "Advertising exerts a strong influence on teenage eating habits."
  },
  {
    "id": 171,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Proof / Evidence",
    "highBandParaphrases": [
      "Evidence",
      "Data",
      "Documentation",
      "Proof"
    ],
    "contextSentence": "Scientific evidence supports the claim that mindfulness reduces stress."
  },
  {
    "id": 172,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Example",
    "highBandParaphrases": [
      "Illustration",
      "Instance",
      "Case in point",
      "Sample"
    ],
    "contextSentence": "Singapore is an impressive illustration of efficient public transport."
  },
  {
    "id": 173,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Factor",
    "highBandParaphrases": [
      "Element",
      "Component",
      "Aspect",
      "Influence"
    ],
    "contextSentence": "Diet is a deciding element in overall physical wellness."
  },
  {
    "id": 174,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Goal / Aim",
    "highBandParaphrases": [
      "Objective",
      "Target",
      "Purpose",
      "Ambition"
    ],
    "contextSentence": "Reducing carbon output by half is our primary environmental objective."
  },
  {
    "id": 175,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Measure / Step",
    "highBandParaphrases": [
      "Action",
      "Step",
      "Policy",
      "Initiative"
    ],
    "contextSentence": "The council should take swift steps to repair potholed streets."
  },
  {
    "id": 176,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Advantage",
    "highBandParaphrases": [
      "Benefit",
      "Merit",
      "Edge",
      "Asset"
    ],
    "contextSentence": "Bilingual speakers enjoy an extra edge in international hospitality."
  },
  {
    "id": 177,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Disadvantage",
    "highBandParaphrases": [
      "Drawback",
      "Handicap",
      "Downside",
      "Weakness"
    ],
    "contextSentence": "Poor computer skills are a severe handicap in the modern office."
  },
  {
    "id": 178,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Situation",
    "highBandParaphrases": [
      "Circumstance",
      "State of affairs",
      "Condition",
      "Context"
    ],
    "contextSentence": "Rising inflation creates a difficult circumstance for young families."
  },
  {
    "id": 179,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Condition",
    "highBandParaphrases": [
      "Requirement",
      "State",
      "Prerequisite",
      "Stipulation"
    ],
    "contextSentence": "A valid visa is a strict prerequisite for international employment."
  },
  {
    "id": 180,
    "categoryId": 9,
    "categoryName": "Causes, Effects, Logic & Problems",
    "categoryIcon": "\ud83e\udde9",
    "baseWord": "Outcome",
    "highBandParaphrases": [
      "Result",
      "Conclusion",
      "End product",
      "Resolution"
    ],
    "contextSentence": "The negotiations led to a mutually beneficial resolution."
  },
  {
    "id": 181,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Also",
    "highBandParaphrases": [
      "Furthermore",
      "Moreover",
      "In addition",
      "Additionally"
    ],
    "contextSentence": "Solar energy cuts bills; furthermore, it reduces home emissions."
  },
  {
    "id": 182,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "But / However",
    "highBandParaphrases": [
      "However",
      "Nevertheless",
      "Yet",
      "On the other hand"
    ],
    "contextSentence": "Tuition fees are rising; however, degree applications remain high."
  },
  {
    "id": 183,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Because",
    "highBandParaphrases": [
      "Since",
      "As",
      "Due to",
      "Owing to"
    ],
    "contextSentence": "The flight was delayed owing to adverse weather on the runway."
  },
  {
    "id": 184,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "So / Therefore",
    "highBandParaphrases": [
      "Consequently",
      "Therefore",
      "As a result",
      "Thus"
    ],
    "contextSentence": "The road flooded; consequently, all bus routes were diverted."
  },
  {
    "id": 185,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "In conclusion",
    "highBandParaphrases": [
      "To summarize",
      "In summary",
      "Overall",
      "To conclude"
    ],
    "contextSentence": "In summary, governments must balance economic growth with green laws."
  },
  {
    "id": 186,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "For example",
    "highBandParaphrases": [
      "For instance",
      "Such as",
      "To illustrate",
      "As an example"
    ],
    "contextSentence": "Many European capitals, for instance Vienna, invest heavily in social housing."
  },
  {
    "id": 187,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "In contrast",
    "highBandParaphrases": [
      "Unlike this",
      "On the contrary",
      "In comparison",
      "Conversely"
    ],
    "contextSentence": "Electric trains are clean; in contrast, diesel trucks pollute heavily."
  },
  {
    "id": 188,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "In addition",
    "highBandParaphrases": [
      "Alongside this",
      "As well as",
      "Besides",
      "Coupled with"
    ],
    "contextSentence": "Good salaries, coupled with friendly culture, retain top workers."
  },
  {
    "id": 189,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "In fact / Actually",
    "highBandParaphrases": [
      "In reality",
      "Indeed",
      "In truth",
      "As a matter of fact"
    ],
    "contextSentence": "Indeed, practical experience often counts more than exam grades."
  },
  {
    "id": 190,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Nowadays",
    "highBandParaphrases": [
      "Today",
      "In recent times",
      "These days",
      "At present"
    ],
    "contextSentence": "At present, renewable energy powers over a third of national homes."
  },
  {
    "id": 191,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Firstly",
    "highBandParaphrases": [
      "First of all",
      "To begin with",
      "In the first place",
      "Initially"
    ],
    "contextSentence": "First of all, schools should teach children basic budgeting skills."
  },
  {
    "id": 192,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Secondly",
    "highBandParaphrases": [
      "In the second place",
      "Next",
      "Furthermore",
      "Additionally"
    ],
    "contextSentence": "In the second place, sports facilities in rural towns need grants."
  },
  {
    "id": 193,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Lastly",
    "highBandParaphrases": [
      "Finally",
      "Ultimately",
      "In the end",
      "Lastly"
    ],
    "contextSentence": "Finally, communities must take responsibility for local cleanliness."
  },
  {
    "id": 194,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Overall",
    "highBandParaphrases": [
      "On the whole",
      "In general",
      "Generally speaking",
      "All in all"
    ],
    "contextSentence": "On the whole, public satisfaction with the metro system increased."
  },
  {
    "id": 195,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Although / Even if",
    "highBandParaphrases": [
      "Even though",
      "While",
      "Despite",
      "Though"
    ],
    "contextSentence": "Even though taxes rose slightly, public transit services improved."
  },
  {
    "id": 196,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Similarly",
    "highBandParaphrases": [
      "Likewise",
      "In the same way",
      "Equally",
      "Correspondingly"
    ],
    "contextSentence": "Teachers teach respect; likewise, parents must demonstrate patience."
  },
  {
    "id": 197,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Especially",
    "highBandParaphrases": [
      "Particularly",
      "Notably",
      "In particular",
      "Above all"
    ],
    "contextSentence": "Air pollution affects everyone, particularly young children and the elderly."
  },
  {
    "id": 198,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Naturally / Of course",
    "highBandParaphrases": [
      "Undeniably",
      "As expected",
      "Clearly",
      "Inevitably"
    ],
    "contextSentence": "Undeniably, learning to code opens up diverse technical jobs."
  },
  {
    "id": 199,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Clearly / Obviously",
    "highBandParaphrases": [
      "Evidently",
      "Apparent",
      "Plainly",
      "Clearly"
    ],
    "contextSentence": "Evidently, regular revision helps pupils remember difficult formulas."
  },
  {
    "id": 200,
    "categoryId": 10,
    "categoryName": "Discourse Markers & Transitions",
    "categoryIcon": "\ud83d\udd17",
    "baseWord": "Above all",
    "highBandParaphrases": [
      "Most importantly",
      "Primarily",
      "Chiefly",
      "Mainly"
    ],
    "contextSentence": "Most importantly, pupils must feel safe and valued in the classroom."
  }
];

export const PARAPHRASE_GOLDEN_RULES = [
  {
    "number": 1,
    "title": "Never Force Obscure or Rare Synonyms",
    "summary": "Examiners immediately penalise unnatural synonym substitution. Using natural, high-frequency academic words (e.g. 'crucial', 'vital', 'essential') produces accurate, Band 8.0+ writing.",
    "examples": [
      {
        "label": "Over-Complicated (Awkward)",
        "text": "The government must thwart the iniquitous conundrum of adiposity."
      },
      {
        "label": "Natural & Precise (Band 8.5+)",
        "text": "The government must address the growing challenge of childhood obesity."
      }
    ]
  },
  {
    "number": 2,
    "title": "Change Word Form (Syntactic Transformation)",
    "summary": "Instead of only searching for synonyms, change the grammatical class of the word (Verb \u2794 Noun, Adjective \u2794 Adverb). This demonstrates advanced grammatical range.",
    "examples": [
      {
        "label": "Base Sentence",
        "text": "The population increased significantly between 2010 and 2020."
      },
      {
        "label": "Grammar Transformation",
        "text": "There was a significant increase in the population between 2010 and 2020."
      }
    ]
  },
  {
    "number": 3,
    "title": "Use Natural Cambridge Collocations",
    "summary": "Synonyms are only effective if they pair naturally with neighbouring words. Always memorize words in their natural collocations (e.g. 'profound impact', 'rapid surge', 'vital role').",
    "examples": [
      {
        "label": "Weak Collocation",
        "text": "Tourism makes big money for the local economy."
      },
      {
        "label": "Strong Collocation (Band 8.5+)",
        "text": "Tourism generates substantial revenue for the local economy."
      }
    ]
  }
];
