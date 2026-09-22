import { SpellingExercise } from "@/types/curriculum";

export interface SpellingPack {
  id: string;
  name: string;
  description: string;
  icon: string;
  startIndex: number;
  endIndex: number;
}

export const SPELLING_PACKS: SpellingPack[] = [
  {
    id: "pack-1",
    name: "Pack 1: Cambridge Top Traps",
    description: "The 20 most penalized double-letter & silent consonant errors in IELTS.",
    icon: "🔥",
    startIndex: 0,
    endIndex: 20,
  },
  {
    id: "pack-2",
    name: "Pack 2: Suffix & Vowel Traps",
    description: "Master -ible vs -able, -ence vs -ance, and tricky 'ie'/'ei' rules.",
    icon: "🎯",
    startIndex: 20,
    endIndex: 40,
  },
  {
    id: "pack-3",
    name: "Pack 3: Band 8+ Academic Lexis",
    description: "Sophisticated vocabulary for high-scoring Task 2 synthesis & evaluations.",
    icon: "💎",
    startIndex: 40,
    endIndex: 60,
  },
  {
    id: "pack-4",
    name: "Pack 4: Research & Data Analysis",
    description: "Precision vocabulary essential for Task 1 data descriptions & trends.",
    icon: "📊",
    startIndex: 60,
    endIndex: 80,
  },
  {
    id: "pack-5",
    name: "Pack 5: Orthographic Confusions",
    description: "Easily confused homophones, subtle prefixes, and deceptive silent letters.",
    icon: "⚡",
    startIndex: 80,
    endIndex: 100,
  },
  {
    id: "pack-6",
    name: "Pack 6: Environment & Science",
    description: "High-frequency lexis for ecological, urban, and scientific topics.",
    icon: "🌱",
    startIndex: 100,
    endIndex: 120,
  },
  {
    id: "pack-7",
    name: "Pack 7: Society & Economics",
    description: "Fiscal, demographic, and educational vocabulary for social policies.",
    icon: "🏛️",
    startIndex: 120,
    endIndex: 140,
  },
];

export const CAMBRIDGE_140_SPELLING_EXERCISES: SpellingExercise[] = [
  {
    "id": "spell-1",
    "type": "spelling",
    "targetWord": "accommodation",
    "ipa": "/\u0259\u02cck\u0252m.\u0259\u02c8de\u026a.\u0283\u0259n/",
    "definition": "A room, group of rooms, or building in which someone may live or stay.",
    "contextSentenceWithBlank": "University students frequently complain about the escalating costs of student ______________ in metropolitan centers.",
    "misspellingTraps": [
      "acommodation",
      "accomodation",
      "acomodation"
    ],
    "audioPromptText": "Accommodation. University students need affordable accommodation.",
    "explanation": "Double 'c' and double 'm' (ac-com-mo-da-tion). Ranked among the top 3 most penalized spelling errors in IELTS Writing and Listening Section 1.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-2",
    "type": "spelling",
    "targetWord": "privilege",
    "ipa": "/\u02c8pr\u026av.\u0259l.\u026ad\u0292/",
    "definition": "A special right, advantage, or immunity granted or available only to a particular person or group.",
    "contextSentenceWithBlank": "Higher education should be regarded as a universal human right rather than an exclusive ______________.",
    "misspellingTraps": [
      "privelege",
      "priviledge",
      "privelidge"
    ],
    "audioPromptText": "Privilege. Higher education is not merely a privilege.",
    "explanation": "Spelled with two 'i's and two 'e's: p-r-i-v-i-l-e-g-e. There is NO 'd' in privilege, unlike 'knowledge' or 'bridge'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-3",
    "type": "spelling",
    "targetWord": "environment",
    "ipa": "/\u026an\u02c8va\u026a.r\u0259n.m\u0259nt/",
    "definition": "The surroundings or conditions in which a person, animal, or plant lives or operates.",
    "contextSentenceWithBlank": "Industrial emissions have caused irreversible degradation to the global ______________.",
    "misspellingTraps": [
      "enviroment",
      "enviornment",
      "enviorment"
    ],
    "audioPromptText": "Environment. We must protect the natural environment.",
    "explanation": "Never forget the silent 'n' before 'ment': e-n-v-i-r-o-N-m-e-n-t. Pronouncing it as 'en-vi-ron-ment' reinforces the correct spelling.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-4",
    "type": "spelling",
    "targetWord": "questionnaire",
    "ipa": "/\u02cckwes.t\u0283\u0259\u02c8ne\u0259r/",
    "definition": "A set of printed or written questions with a choice of answers, devised for the purposes of a survey.",
    "contextSentenceWithBlank": "Respondents were requested to complete an anonymous ______________ regarding public transport habits.",
    "misspellingTraps": [
      "questionaire",
      "questionnare",
      "questionair"
    ],
    "audioPromptText": "Questionnaire. Participants filled out a detailed questionnaire.",
    "explanation": "Notice the double 'n' and ending '-aire': q-u-e-s-t-i-o-n-n-a-i-r-e. Originating from French, it preserves the 'nn'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-5",
    "type": "spelling",
    "targetWord": "hierarchy",
    "ipa": "/\u02c8ha\u026a\u0259.r\u0251\u02d0.ki/",
    "definition": "A system in which members of an organization or society are ranked according to relative status.",
    "contextSentenceWithBlank": "Modern tech enterprises favor flat organizational structures over traditional corporate ______________.",
    "misspellingTraps": [
      "heirarchy",
      "hierachy",
      "hierarcy"
    ],
    "audioPromptText": "Hierarchy. Breaking down strict corporate hierarchy fosters agility.",
    "explanation": "Remember 'i' before 'e' in 'hier-': h-i-e-r-a-r-c-h-y. Don't confuse it with 'heir' (an inheritor).",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-6",
    "type": "spelling",
    "targetWord": "millennium",
    "ipa": "/m\u026a\u02c8len.i.\u0259m/",
    "definition": "A period of a thousand years.",
    "contextSentenceWithBlank": "At the turn of the new ______________, global communications underwent an unprecedented technological transformation.",
    "misspellingTraps": [
      "millenium",
      "milenium",
      "millennum"
    ],
    "audioPromptText": "Millennium. Marking the turn of the millennium.",
    "explanation": "Like 'accommodation', millennium has two double letters: double 'l' and double 'n' (m-i-l-l-e-n-n-i-u-m).",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-7",
    "type": "spelling",
    "targetWord": "recommend",
    "ipa": "/\u02ccrek.\u0259\u02c8mend/",
    "definition": "Put forward someone or something with approval as being suitable for a purpose or role.",
    "contextSentenceWithBlank": "Healthcare professionals strongly ______________ a balanced diet alongside daily cardiovascular exercise.",
    "misspellingTraps": [
      "recommand",
      "recommed",
      "reccomend"
    ],
    "audioPromptText": "Recommend. Doctors recommend thirty minutes of daily activity.",
    "explanation": "Single 'c', double 'm' (re-com-mend). A very common error is writing double 'c'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-8",
    "type": "spelling",
    "targetWord": "occurrence",
    "ipa": "/\u0259\u02c8k\u028cr.\u0259ns/",
    "definition": "An incident or event, especially one that happens unexpectedly.",
    "contextSentenceWithBlank": "Extreme climatic disasters are unfortunately becoming an everyday ______________ in low-lying coastal territories.",
    "misspellingTraps": [
      "occurance",
      "occurence",
      "ocurrence"
    ],
    "audioPromptText": "Occurrence. Severe flooding was a frequent occurrence.",
    "explanation": "Double 'c', double 'r', and ends in '-ence', NOT '-ance' (oc-cur-rence).",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-9",
    "type": "spelling",
    "targetWord": "noticeable",
    "ipa": "/\u02c8n\u0259\u028a.t\u026a.s\u0259.b\u0259l/",
    "definition": "Easily seen or noticed; clear or apparent.",
    "contextSentenceWithBlank": "There was a ______________ increase in consumer spending following the reduction in retail sales tax.",
    "misspellingTraps": [
      "noticable",
      "noticible",
      "notisable"
    ],
    "audioPromptText": "Noticeable. A noticeable shift occurred in market behavior.",
    "explanation": "Keep the silent 'e' after 'c' to preserve the soft 's' sound before '-able': n-o-t-i-c-e-a-b-l-e.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-10",
    "type": "spelling",
    "targetWord": "indispensable",
    "ipa": "/\u02cc\u026an.d\u026a\u02c8spen.s\u0259.b\u0259l/",
    "definition": "Absolutely necessary or essential.",
    "contextSentenceWithBlank": "Digital connectivity has become an ______________ asset for both primary and tertiary education systems.",
    "misspellingTraps": [
      "indispensible",
      "indespensable",
      "indespensible"
    ],
    "audioPromptText": "Indispensable. Clean water is an indispensable resource.",
    "explanation": "Ends in '-able', NOT '-ible'. Think: able to dispense -> indispensable.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-11",
    "type": "spelling",
    "targetWord": "maintenance",
    "ipa": "/\u02c8me\u026an.t\u0259n.\u0259ns/",
    "definition": "The process of preserving a condition or situation or the state of being preserved.",
    "contextSentenceWithBlank": "Municipal authorities frequently underestimate the annual cost of road ______________.",
    "misspellingTraps": [
      "maintainance",
      "maintenence",
      "maintanence"
    ],
    "audioPromptText": "Maintenance. Adequate budget must be allocated for building maintenance.",
    "explanation": "Even though the verb is 'maintain', the noun shifts the vowel to 'ten': m-a-i-n-t-e-n-a-n-c-e.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-12",
    "type": "spelling",
    "targetWord": "perseverance",
    "ipa": "/\u02ccp\u025c\u02d0.s\u026a\u02c8v\u026a\u0259.r\u0259ns/",
    "definition": "Persistence in doing something despite difficulty or delay in achieving success.",
    "contextSentenceWithBlank": "Mastering a second language requires consistent dedication and immense ______________.",
    "misspellingTraps": [
      "perseverence",
      "perserverance",
      "perserverence"
    ],
    "audioPromptText": "Perseverance. Success in research demands relentless perseverance.",
    "explanation": "Notice the spelling: p-e-r-s-e-v-e-r-a-n-c-e (ends with '-ance' and there is NO 'r' after the 's').",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-13",
    "type": "spelling",
    "targetWord": "separate",
    "ipa": "/\u02c8sep.\u0259r.\u0259t/",
    "definition": "Forming or viewed as a unit by itself.",
    "contextSentenceWithBlank": "The laboratory tests were conducted under two ______________ experimental conditions.",
    "misspellingTraps": [
      "seperate",
      "seprate",
      "seperete"
    ],
    "audioPromptText": "Separate. Keep the chemicals in separate containers.",
    "explanation": "There is 'a rat' in sep-a-rate! Spelled s-e-p-A-r-a-t-e, never with an 'e' in the middle.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-14",
    "type": "spelling",
    "targetWord": "definitely",
    "ipa": "/\u02c8def.\u026a.n\u0259t.li/",
    "definition": "Without doubt; clearly.",
    "contextSentenceWithBlank": "Investing in renewable infrastructure will ______________ yield long-term ecological dividends.",
    "misspellingTraps": [
      "definately",
      "definitly",
      "defanitely"
    ],
    "audioPromptText": "Definitely. Renewable resources are definitely the future.",
    "explanation": "Related to 'finite': d-e-f-i-n-i-t-e-l-y. There is an 'i' in the third syllable, not an 'a'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-15",
    "type": "spelling",
    "targetWord": "government",
    "ipa": "/\u02c8\u0261\u028cv.\u0259n.m\u0259nt/",
    "definition": "The group of people with the authority to govern a country or state.",
    "contextSentenceWithBlank": "The federal ______________ must implement stringent policies to subsidize electric vehicle adoption.",
    "misspellingTraps": [
      "goverment",
      "govermant",
      "govrenment"
    ],
    "audioPromptText": "Government. The national government approved the budget.",
    "explanation": "Remember the 'n' in govern: g-o-v-e-r-N-m-e-n-t. Pronounce the base verb 'govern' to remember.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-16",
    "type": "spelling",
    "targetWord": "embarrass",
    "ipa": "/\u026am\u02c8b\u00e6r.\u0259s/",
    "definition": "Cause someone to feel awkward, self-conscious, or ashamed.",
    "contextSentenceWithBlank": "Diplomatic leaders avoid public statements that could ______________ their international counterparts.",
    "misspellingTraps": [
      "embarass",
      "embarraas",
      "embaras"
    ],
    "audioPromptText": "Embarrass. Such diplomatic faux pas can embarrass the delegation.",
    "explanation": "Two 'r's and two 's's (em-bar-rass). Both consonants are doubled.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-17",
    "type": "spelling",
    "targetWord": "committee",
    "ipa": "/k\u0259\u02c8m\u026at.i/",
    "definition": "A group of people appointed for a specific function by a larger group.",
    "contextSentenceWithBlank": "An independent ethics ______________ was appointed to evaluate the safety of the clinical trial.",
    "misspellingTraps": [
      "commitee",
      "comittee",
      "comite"
    ],
    "audioPromptText": "Committee. The parliamentary committee reviewed the evidence.",
    "explanation": "Three pairs of double letters: double 'm', double 't', double 'e' (c-o-m-m-i-t-t-e-e).",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-18",
    "type": "spelling",
    "targetWord": "conscious",
    "ipa": "/\u02c8k\u0252n.\u0283\u0259s/",
    "definition": "Aware of and responding to one's surroundings.",
    "contextSentenceWithBlank": "Modern consumers are increasingly ______________ of the carbon footprint associated with imported goods.",
    "misspellingTraps": [
      "concious",
      "conscous",
      "conscius"
    ],
    "audioPromptText": "Conscious. Consumers are conscious of sustainability.",
    "explanation": "Spelled c-o-n-s-c-i-o-u-s. Contains both 's' and 'c' before 'ious'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-19",
    "type": "spelling",
    "targetWord": "rhythm",
    "ipa": "/\u02c8r\u026a\u00f0.\u0259m/",
    "definition": "A strong, regular repeated pattern of movement or sound.",
    "contextSentenceWithBlank": "Disruptions to the circadian ______________ can induce serious metabolic disorders.",
    "misspellingTraps": [
      "rythm",
      "rhythum",
      "rythym"
    ],
    "audioPromptText": "Rhythm. The biological rhythm governs our sleep cycles.",
    "explanation": "Only one vowel ('y'): r-h-y-t-h-m. Two 'h's: one after 'r' and one after 't'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-20",
    "type": "spelling",
    "targetWord": "bureaucracy",
    "ipa": "/bj\u028a\u0259\u02c8r\u0252k.r\u0259.si/",
    "definition": "A system of government in which most decisions are taken by state officials.",
    "contextSentenceWithBlank": "Excessive administrative ______________ can significantly retard entrepreneurial innovation.",
    "misspellingTraps": [
      "beuraucracy",
      "bureacracy",
      "bureaucrasy"
    ],
    "audioPromptText": "Bureaucracy. Cumbersome bureaucracy slows economic recovery.",
    "explanation": "Notice the 'eau' from French 'bureau': b-u-r-E-A-U-c-r-a-c-y. Ends in '-cy', not '-sy'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-21",
    "type": "spelling",
    "targetWord": "feasible",
    "ipa": "/\u02c8fi\u02d0.z\u0259.b\u0259l/",
    "definition": "Possible to do easily or conveniently.",
    "contextSentenceWithBlank": "Constructing high-speed railways between both cities is economically ______________ within the next decade.",
    "misspellingTraps": [
      "feasable",
      "feezable",
      "feisible"
    ],
    "audioPromptText": "Feasible. The engineers presented a feasible development plan.",
    "explanation": "Ends in '-ible', not '-able': f-e-a-s-i-b-l-e. Begins with 'ea'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-22",
    "type": "spelling",
    "targetWord": "plausible",
    "ipa": "/\u02c8pl\u0254\u02d0.z\u0259.b\u0259l/",
    "definition": "Seeming reasonable or probable.",
    "contextSentenceWithBlank": "The researchers formulated a ______________ hypothesis explaining the migratory deviation.",
    "misspellingTraps": [
      "plausable",
      "plosible",
      "plauseable"
    ],
    "audioPromptText": "Plausible. He offered a plausible explanation for the discrepancy.",
    "explanation": "Spelled with '-ible': p-l-a-u-s-i-b-l-e. Starts with 'au'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-23",
    "type": "spelling",
    "targetWord": "eligible",
    "ipa": "/\u02c8el.\u026a.d\u0292\u0259.b\u0259l/",
    "definition": "Having the right to do or obtain something through meeting appropriate conditions.",
    "contextSentenceWithBlank": "Only applicants with verifiable academic credentials are ______________ for the international stipend.",
    "misspellingTraps": [
      "eligable",
      "elegible",
      "illegible"
    ],
    "audioPromptText": "Eligible. Candidates must be eligible under national criteria.",
    "explanation": "Spelled e-l-i-g-i-b-l-e with two 'i's and ending in '-ible'. Don't confuse with 'illegible' (unreadble).",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-24",
    "type": "spelling",
    "targetWord": "susceptible",
    "ipa": "/s\u0259\u02c8sep.t\u0259.b\u0259l/",
    "definition": "Likely or liable to be influenced or harmed by a particular thing.",
    "contextSentenceWithBlank": "Underfunded healthcare systems are particularly ______________ to seasonal epidemic surges.",
    "misspellingTraps": [
      "susceptable",
      "susseptible",
      "suceptible"
    ],
    "audioPromptText": "Susceptible. Infants are susceptible to infectious illnesses.",
    "explanation": "Contains 'sc' in the first syllable: s-u-s-c-e-p-t-i-b-l-e. Ends with '-ible'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-25",
    "type": "spelling",
    "targetWord": "surveillance",
    "ipa": "/s\u0259\u02c8ve\u026a.l\u0259ns/",
    "definition": "Close observation, especially of a suspected spy or criminal.",
    "contextSentenceWithBlank": "Civil liberties groups argue that ubiquitous video ______________ violates individual privacy.",
    "misspellingTraps": [
      "surveilance",
      "survalience",
      "survailance"
    ],
    "audioPromptText": "Surveillance. City centers have increased electronic surveillance.",
    "explanation": "French origin: s-u-r-v-e-i-l-l-a-n-c-e. Double 'l' and ends with '-ance'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-26",
    "type": "spelling",
    "targetWord": "disappearance",
    "ipa": "/\u02ccd\u026as.\u0259\u02c8p\u026a\u0259.r\u0259ns/",
    "definition": "An instance of someone or something ceasing to be visible or to exist.",
    "contextSentenceWithBlank": "The gradual ______________ of ancient rainforests threatens thousands of indigenous species.",
    "misspellingTraps": [
      "disapearance",
      "disappearence",
      "dissappearance"
    ],
    "audioPromptText": "Disappearance. Scientists investigated the disappearance of native flora.",
    "explanation": "Single 's', double 'p', and ends in '-ance': d-i-s-a-p-p-e-a-r-a-n-c-e.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-27",
    "type": "spelling",
    "targetWord": "convenient",
    "ipa": "/k\u0259n\u02c8vi\u02d0.ni.\u0259nt/",
    "definition": "Fitting in well with a person's needs, activities, and plans.",
    "contextSentenceWithBlank": "E-commerce delivers an extremely ______________ shopping experience for busy professionals.",
    "misspellingTraps": [
      "conveniant",
      "convienient",
      "convinient"
    ],
    "audioPromptText": "Convenient. Online booking is remarkably convenient.",
    "explanation": "Spelled c-o-n-v-e-n-i-e-n-t. Keep 'e-n-i-e-n-t' in order. Ends in '-ent', not '-ant'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-28",
    "type": "spelling",
    "targetWord": "existence",
    "ipa": "/\u026a\u0261\u02c8z\u026as.t\u0259ns/",
    "definition": "The fact or state of living or having objective reality.",
    "contextSentenceWithBlank": "Fossil records provide empirical proof of the ______________ of giant reptiles.",
    "misspellingTraps": [
      "existance",
      "existense",
      "exsistence"
    ],
    "audioPromptText": "Existence. Confirmation of the organism's existence delighted biologists.",
    "explanation": "Ends in '-ence', NOT '-ance': e-x-i-s-t-e-n-c-e. One of the top false-vowel errors in IELTS.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-29",
    "type": "spelling",
    "targetWord": "consistent",
    "ipa": "/k\u0259n\u02c8s\u026as.t\u0259nt/",
    "definition": "Acting or done in the same way over time, especially so as to be fair or accurate.",
    "contextSentenceWithBlank": "The findings are ______________ with earlier longitudinal studies conducted in Scandinavian nations.",
    "misspellingTraps": [
      "consistant",
      "consitent",
      "consistint"
    ],
    "audioPromptText": "Consistent. The results remained consistent across every trial.",
    "explanation": "Ends in '-ent': c-o-n-s-i-s-t-e-n-t. Don't write 'consistant'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-30",
    "type": "spelling",
    "targetWord": "coherent",
    "ipa": "/k\u0259\u028a\u02c8h\u026a\u0259.r\u0259nt/",
    "definition": "Logical and consistent; argued clearly.",
    "contextSentenceWithBlank": "Candidates must structure their IELTS essays around a clear and ______________ central progression.",
    "misspellingTraps": [
      "coherant",
      "coherant",
      "cohearent"
    ],
    "audioPromptText": "Coherent. The candidate constructed a coherent analytical argument.",
    "explanation": "Ends in '-ent': c-o-h-e-r-e-n-t. Coherence Criterion in IELTS Writing requires coherent essays.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-31",
    "type": "spelling",
    "targetWord": "prevalent",
    "ipa": "/\u02c8prev.\u0259l.\u0259nt/",
    "definition": "Widespread in a particular area or at a particular time.",
    "contextSentenceWithBlank": "Sedentary lifestyles have become increasingly ______________ among office workers.",
    "misspellingTraps": [
      "prevelant",
      "previlent",
      "prevelent"
    ],
    "audioPromptText": "Prevalent. Chronic stress is prevalent in modern societies.",
    "explanation": "The second vowel is 'a': p-r-e-v-a-l-e-n-t, but it ends in '-ent'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-32",
    "type": "spelling",
    "targetWord": "dominant",
    "ipa": "/\u02c8d\u0252m.\u026a.n\u0259nt/",
    "definition": "Most important, strong, or influential.",
    "contextSentenceWithBlank": "Renewable generation will be the ______________ energy source by mid-century.",
    "misspellingTraps": [
      "dominate",
      "dominent",
      "domanant"
    ],
    "audioPromptText": "Dominant. Solar energy assumed a dominant role in the grid.",
    "explanation": "Adjective ends in '-ant': d-o-m-i-n-a-n-t. Don't confuse with verb 'dominate'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-33",
    "type": "spelling",
    "targetWord": "significant",
    "ipa": "/s\u026a\u0261\u02c8n\u026af.\u026a.k\u0259nt/",
    "definition": "Sufficiently great or important to be worthy of attention.",
    "contextSentenceWithBlank": "There was a ______________ reduction in greenhouse gas emissions during the lockdown.",
    "misspellingTraps": [
      "significient",
      "signifigant",
      "signifacant"
    ],
    "audioPromptText": "Significant. The policy caused a significant downturn in inflation.",
    "explanation": "Ends in '-cant': s-i-g-n-i-f-i-c-a-n-t. Never write with 'g' instead of 'c'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-34",
    "type": "spelling",
    "targetWord": "independent",
    "ipa": "/\u02cc\u026an.d\u026a\u02c8pen.d\u0259nt/",
    "definition": "Free from outside control; not subject to another's authority.",
    "contextSentenceWithBlank": "The government commissioned an ______________ review of public pension schemes.",
    "misspellingTraps": [
      "independant",
      "indipendent",
      "independunt"
    ],
    "audioPromptText": "Independent. The auditor conducted an independent examination.",
    "explanation": "All 'e's in the root: i-n-d-e-p-e-n-d-e-n-t. Never write with 'ant'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-35",
    "type": "spelling",
    "targetWord": "achieve",
    "ipa": "/\u0259\u02c8t\u0283i\u02d0v/",
    "definition": "Successfully bring about or reach by effort, skill, or courage.",
    "contextSentenceWithBlank": "Developing nations strive to ______________ economic parity with industrialized powers.",
    "misspellingTraps": [
      "acheive",
      "acheve",
      "achive"
    ],
    "audioPromptText": "Achieve. Students can achieve band eight through disciplined study.",
    "explanation": "'i' before 'e' except after 'c': a-c-h-I-E-v-e. 'ch' is not 'c' alone.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-36",
    "type": "spelling",
    "targetWord": "receive",
    "ipa": "/r\u026a\u02c8si\u02d0v/",
    "definition": "Be given, presented with, or paid.",
    "contextSentenceWithBlank": "Underprivileged households should ______________ targeted heating subsidies in winter.",
    "misspellingTraps": [
      "recieve",
      "recive",
      "receve"
    ],
    "audioPromptText": "Receive. Rural clinics receive financial grants annually.",
    "explanation": "'i' before 'e' EXCEPT AFTER 'C': r-e-C-E-I-v-e. Because of the 'c', 'e' comes first.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-37",
    "type": "spelling",
    "targetWord": "perceive",
    "ipa": "/p\u0259\u02c8si\u02d0v/",
    "definition": "Become aware or conscious of something; come to realize or understand.",
    "contextSentenceWithBlank": "Citizens often ______________ rapid automation as a direct threat to employment stability.",
    "misspellingTraps": [
      "percieve",
      "percive",
      "purceive"
    ],
    "audioPromptText": "Perceive. How citizens perceive tax reform affects compliance.",
    "explanation": "After 'c', write 'ei': p-e-r-C-E-I-v-e. Same rule as 'receive'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-38",
    "type": "spelling",
    "targetWord": "leisure",
    "ipa": "/\u02c8le\u0292.\u0259r/",
    "definition": "Time when one is not working or occupied; free time.",
    "contextSentenceWithBlank": "The expansion of automation has granted individuals more time for creative ______________.",
    "misspellingTraps": [
      "liesure",
      "lesure",
      "leasure"
    ],
    "audioPromptText": "Leisure. Balanced living requires healthy leisure activities.",
    "explanation": "Exception to the rule: spelled l-E-I-s-u-r-e ('ei', not 'ie').",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-39",
    "type": "spelling",
    "targetWord": "foreign",
    "ipa": "/\u02c8f\u0252r.\u0259n/",
    "definition": "Of, from, in, or characteristic of a country or language other than one's own.",
    "contextSentenceWithBlank": "Attracting ______________ direct investment is a prime objective for developing economies.",
    "misspellingTraps": [
      "foriegn",
      "forein",
      "forreign"
    ],
    "audioPromptText": "Foreign. The country welcomed foreign direct investment.",
    "explanation": "Spelled f-o-r-E-I-g-n with silent 'g'. 'e' comes before 'i'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-40",
    "type": "spelling",
    "targetWord": "sovereign",
    "ipa": "/\u02c8s\u0252v.r\u026an/",
    "definition": "Possessing supreme or ultimate power; acting independently.",
    "contextSentenceWithBlank": "Each ______________ nation maintains jurisdiction over its internal territorial boundaries.",
    "misspellingTraps": [
      "soveriegn",
      "soverign",
      "sovran"
    ],
    "audioPromptText": "Sovereign. The parliament represents the sovereign authority.",
    "explanation": "Like 'foreign', it has 'eign': s-o-v-e-r-e-i-g-n.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-41",
    "type": "spelling",
    "targetWord": "deteriorate",
    "ipa": "/d\u026a\u02c8t\u026a\u0259.ri.\u0259.re\u026at/",
    "definition": "Become progressively worse.",
    "contextSentenceWithBlank": "If infrastructure is neglected, urban traffic conditions will steadily ______________.",
    "misspellingTraps": [
      "deteriate",
      "detoriate",
      "deterioate"
    ],
    "audioPromptText": "Deteriorate. Air quality began to deteriorate rapidly.",
    "explanation": "Contains three 'e's and four syllables: d-e-t-e-r-i-o-r-a-t-e.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-42",
    "type": "spelling",
    "targetWord": "phenomenon",
    "ipa": "/f\u0259\u02c8n\u0252m.\u026a.n\u0259n/",
    "definition": "A fact or situation that is observed to exist or happen.",
    "contextSentenceWithBlank": "Urban sprawl is a complex socio-economic ______________ observed worldwide.",
    "misspellingTraps": [
      "phenominon",
      "phenomenen",
      "fenomenon"
    ],
    "audioPromptText": "Phenomenon. Global warming is an undeniable phenomenon.",
    "explanation": "Singular: p-h-e-n-o-m-e-n-o-n (plural: phenomena). Begins with 'ph'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-43",
    "type": "spelling",
    "targetWord": "unprecedented",
    "ipa": "/\u028cn\u02c8pres.\u026a.den.t\u026ad/",
    "definition": "Never done or known before.",
    "contextSentenceWithBlank": "The pandemic caused an ______________ surge in remote employment arrangements.",
    "misspellingTraps": [
      "unprecidented",
      "unpresidented",
      "unprecedanted"
    ],
    "audioPromptText": "Unprecedented. The treaty marked an unprecedented diplomatic victory.",
    "explanation": "From 'precedent' (rule set previously): u-n-p-r-e-c-e-d-e-n-t-e-d. Spelled with 'c', not 's'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-44",
    "type": "spelling",
    "targetWord": "ubiquitous",
    "ipa": "/ju\u02d0\u02c8b\u026ak.w\u026a.t\u0259s/",
    "definition": "Present, appearing, or found everywhere.",
    "contextSentenceWithBlank": "Smartphones have become a ______________ feature of 21st-century adolescence.",
    "misspellingTraps": [
      "ubiquotous",
      "ubiqutous",
      "ubikwitous"
    ],
    "audioPromptText": "Ubiquitous. Artificial intelligence is becoming ubiquitous.",
    "explanation": "Spelled u-b-i-q-u-i-t-o-u-s. Notice 'qui' followed by 'tous'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-45",
    "type": "spelling",
    "targetWord": "intermittent",
    "ipa": "/\u02cc\u026an.t\u0259\u02c8m\u026at.\u0259nt/",
    "definition": "Occurring at irregular intervals; not continuous or steady.",
    "contextSentenceWithBlank": "Wind power faces operational criticism due to its ______________ energy output.",
    "misspellingTraps": [
      "intermitent",
      "intermittant",
      "intermitant"
    ],
    "audioPromptText": "Intermittent. Solar energy generation can be intermittent on cloudy days.",
    "explanation": "Double 't' in the middle and ends with '-ent': i-n-t-e-r-m-i-t-t-e-n-t.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-46",
    "type": "spelling",
    "targetWord": "catastrophic",
    "ipa": "/\u02cck\u00e6t.\u0259\u02c8str\u0252f.\u026ak/",
    "definition": "Involving or causing sudden great damage or suffering.",
    "contextSentenceWithBlank": "Unchecked carbon emissions could trigger ______________ rises in global ocean levels.",
    "misspellingTraps": [
      "catestrophic",
      "catastrophick",
      "catostrophic"
    ],
    "audioPromptText": "Catastrophic. The cyclone caused catastrophic devastation along the coast.",
    "explanation": "From Greek: c-a-t-a-s-t-r-o-p-h-i-c. Spelled with 'ph' for the 'f' sound.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-47",
    "type": "spelling",
    "targetWord": "vulnerable",
    "ipa": "/\u02c8v\u028cl.n\u0259r.\u0259.b\u0259l/",
    "definition": "Exposed to the possibility of being attacked or harmed.",
    "contextSentenceWithBlank": "Impoverished communities remain disproportionately ______________ to ecological catastrophes.",
    "misspellingTraps": [
      "vulnerble",
      "volnerable",
      "vulnarable"
    ],
    "audioPromptText": "Vulnerable. Isolated ecosystems are highly vulnerable to alien species.",
    "explanation": "Notice the 'er' in the middle: v-u-l-n-e-r-a-b-l-e. Four syllables.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-48",
    "type": "spelling",
    "targetWord": "volatile",
    "ipa": "/\u02c8v\u0252l.\u0259.ta\u026al/",
    "definition": "Liable to change rapidly and unpredictably, especially for the worse.",
    "contextSentenceWithBlank": "Developing markets are susceptible to ______________ currency valuation swings.",
    "misspellingTraps": [
      "volitile",
      "volatyle",
      "volitale"
    ],
    "audioPromptText": "Volatile. The stock index proved exceptionally volatile this quarter.",
    "explanation": "Spelled v-o-l-a-t-i-l-e with 'a' in the second syllable.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-49",
    "type": "spelling",
    "targetWord": "scrutinize",
    "ipa": "/\u02c8skru\u02d0.t\u026a.na\u026az/",
    "definition": "Examine or inspect closely and thoroughly.",
    "contextSentenceWithBlank": "Regulatory bodies must meticulously ______________ the clinical claims made by pharmaceutical manufacturers.",
    "misspellingTraps": [
      "scrutenize",
      "scrutinise",
      "scruitinize"
    ],
    "audioPromptText": "Scrutinize. Regulators scrutinize corporate financial disclosures.",
    "explanation": "Spelled s-c-r-u-t-i-n-i-z-e (or British 'scrutinise'). The 'u' comes first, then two 'i's.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-50",
    "type": "spelling",
    "targetWord": "facilitate",
    "ipa": "/f\u0259\u02c8s\u026al.\u026a.te\u026at/",
    "definition": "Make an action or process easy or easier.",
    "contextSentenceWithBlank": "State-subsidized childcare centers ______________ female workforce participation.",
    "misspellingTraps": [
      "facillitate",
      "fasilitate",
      "faciletate"
    ],
    "audioPromptText": "Facilitate. Modern infrastructure will facilitate cross-border trade.",
    "explanation": "Single 'l' in the middle: f-a-c-i-l-i-t-a-t-e. Don't double the 'l'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-51",
    "type": "spelling",
    "targetWord": "alleviate",
    "ipa": "/\u0259\u02c8li\u02d0.vi.e\u026at/",
    "definition": "Make suffering, deficiency, or a problem less severe.",
    "contextSentenceWithBlank": "Constructing bypass roads helps ______________ inner-city traffic bottlenecks.",
    "misspellingTraps": [
      "aleviate",
      "allevate",
      "alliviate"
    ],
    "audioPromptText": "Alleviate. Better medical facilities alleviate patient distress.",
    "explanation": "Double 'l' and '-evi-': a-l-l-e-v-i-a-t-e. Top IELTS Band 8 replacement for 'make better'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-52",
    "type": "spelling",
    "targetWord": "exacerbate",
    "ipa": "/\u026a\u0261\u02c8z\u00e6s.\u0259.be\u026at/",
    "definition": "Make a problem, bad situation, or negative feeling worse.",
    "contextSentenceWithBlank": "Deforestation and urban runoff dramatically ______________ seasonal soil erosion.",
    "misspellingTraps": [
      "exacerbate",
      "exhaserbate",
      "exascerbate"
    ],
    "audioPromptText": "Exacerbate. Rising fuel tariffs exacerbate poverty.",
    "explanation": "Notice 'c' before 'e': e-x-a-c-e-r-b-a-t-e. Top IELTS Band 8 synonym for 'worsen'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-53",
    "type": "spelling",
    "targetWord": "mitigate",
    "ipa": "/\u02c8m\u026at.\u026a.\u0261e\u026at/",
    "definition": "Make less severe, serious, or painful.",
    "contextSentenceWithBlank": "Planting urban green belts can substantially ______________ the heat island effect.",
    "misspellingTraps": [
      "mitagate",
      "mitty-gate",
      "mittigate"
    ],
    "audioPromptText": "Mitigate. Strict emission caps mitigate urban pollution.",
    "explanation": "Single 't': m-i-t-i-g-a-t-e. Essential lexical resource in Environmental Task 2 essays.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-54",
    "type": "spelling",
    "targetWord": "corroborate",
    "ipa": "/k\u0259\u02c8r\u0252b.\u0259.re\u026at/",
    "definition": "Confirm or give support to a statement, theory, or finding.",
    "contextSentenceWithBlank": "Additional chemical assays were required to ______________ the initial field findings.",
    "misspellingTraps": [
      "coroborate",
      "corroborite",
      "corobberate"
    ],
    "audioPromptText": "Corroborate. Satellite photographs corroborate the surveyor's claims.",
    "explanation": "Double 'r' and single 'b': c-o-r-r-o-b-o-r-a-t-e.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-55",
    "type": "spelling",
    "targetWord": "pragmatic",
    "ipa": "/pr\u00e6\u0261\u02c8m\u00e6t.\u026ak/",
    "definition": "Dealing with things sensibly and realistically in a way that is based on practical considerations.",
    "contextSentenceWithBlank": "Governments must adopt a ______________ approach when allocating limited emergency reserves.",
    "misspellingTraps": [
      "progmatic",
      "pragmatick",
      "pragmatic"
    ],
    "audioPromptText": "Pragmatic. Lawmakers chose a pragmatic compromise.",
    "explanation": "Root 'pragma' (action): p-r-a-g-m-a-t-i-c. Two 'a's.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-56",
    "type": "spelling",
    "targetWord": "resilient",
    "ipa": "/r\u026a\u02c8z\u026al.i.\u0259nt/",
    "definition": "Able to withstand or recover quickly from difficult conditions.",
    "contextSentenceWithBlank": "Genetically modified crops are engineered to be highly ______________ against prolonged drought.",
    "misspellingTraps": [
      "resiliant",
      "resilant",
      "rezelient"
    ],
    "audioPromptText": "Resilient. Modern crop varieties are resilient against pathogens.",
    "explanation": "Ends in '-ent', not '-ant': r-e-s-i-l-i-e-n-t.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-57",
    "type": "spelling",
    "targetWord": "conspicuous",
    "ipa": "/k\u0259n\u02c8sp\u026ak.ju.\u0259s/",
    "definition": "Standing out so as to be clearly visible; attracting notice or attention.",
    "contextSentenceWithBlank": "There was a ______________ absence of senior executives at the public town-hall hearing.",
    "misspellingTraps": [
      "conspicous",
      "conspicious",
      "conspicuis"
    ],
    "audioPromptText": "Conspicuous. He made a conspicuous contribution to the panel.",
    "explanation": "Contains 'u-o-u-s': c-o-n-s-p-i-c-u-o-u-s. Don't omit the first 'u'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-58",
    "type": "spelling",
    "targetWord": "preliminary",
    "ipa": "/pr\u026a\u02c8l\u026am.\u026a.n\u0259r.i/",
    "definition": "Denoting an action or event preceding or done in preparation for something fuller.",
    "contextSentenceWithBlank": "The ______________ findings of the survey indicate strong popular support for solar subsidies.",
    "misspellingTraps": [
      "prelimenary",
      "prelimnary",
      "perliminary"
    ],
    "audioPromptText": "Preliminary. Preliminary trials proved extremely promising.",
    "explanation": "Four syllables: p-r-e-l-i-m-i-n-a-r-y. Notice two 'i's in 'limin'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-59",
    "type": "spelling",
    "targetWord": "discrepancy",
    "ipa": "/d\u026a\u02c8skrep.\u0259n.si/",
    "definition": "An illogical or surprising lack of compatibility between two or more facts.",
    "contextSentenceWithBlank": "Auditors noticed a substantial financial ______________ between reported revenue and tax deposits.",
    "misspellingTraps": [
      "discrepency",
      "descripancy",
      "discrepensy"
    ],
    "audioPromptText": "Discrepancy. The audit uncovered a glaring discrepancy.",
    "explanation": "Ends in '-ancy', NOT '-ency': d-i-s-c-r-e-p-a-n-c-y.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-60",
    "type": "spelling",
    "targetWord": "fluctuate",
    "ipa": "/\u02c8fl\u028ck.t\u0283u.e\u026at/",
    "definition": "Rise and fall irregularly in number or amount.",
    "contextSentenceWithBlank": "Global commodity prices tend to ______________ violently during geopolitical instability.",
    "misspellingTraps": [
      "fluctate",
      "fluctiate",
      "flucktuate"
    ],
    "audioPromptText": "Fluctuate. Export rates continue to fluctuate throughout the year.",
    "explanation": "Contains 'ctu': f-l-u-c-t-u-a-t-e. Primary verb for Cambridge IELTS Writing Task 1 line graphs.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-61",
    "type": "spelling",
    "targetWord": "comprehensive",
    "ipa": "/\u02cck\u0252m.pr\u026a\u02c8hen.s\u026av/",
    "definition": "Including or dealing with all or nearly all elements or aspects of something.",
    "contextSentenceWithBlank": "The ministry published a ______________ audit of national water treatment facilities.",
    "misspellingTraps": [
      "comprehansive",
      "comprehencive",
      "comprehesive"
    ],
    "audioPromptText": "Comprehensive. We require a comprehensive review of all curriculum modules.",
    "explanation": "Spelled c-o-m-p-r-e-h-e-n-s-i-v-e. Ends with 'sive', not 'cive'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-62",
    "type": "spelling",
    "targetWord": "assimilate",
    "ipa": "/\u0259\u02c8s\u026am.\u026a.le\u026at/",
    "definition": "Take in and understand fully (information, ideas, or culture).",
    "contextSentenceWithBlank": "Immigrant families frequently strive to ______________ into the host community while preserving their heritage.",
    "misspellingTraps": [
      "asimulate",
      "assimelate",
      "assimilite"
    ],
    "audioPromptText": "Assimilate. Migrants assimilate new linguistic patterns over time.",
    "explanation": "Double 's' and single 'm': a-s-s-i-m-i-l-a-t-e.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-63",
    "type": "spelling",
    "targetWord": "allocate",
    "ipa": "/\u02c8\u00e6l.\u0259.ke\u026at/",
    "definition": "Distribute (resources or duties) for a particular purpose.",
    "contextSentenceWithBlank": "Regional governments must ______________ sufficient fiscal capital toward elderly healthcare.",
    "misspellingTraps": [
      "alocate",
      "allicate",
      "allrecate"
    ],
    "audioPromptText": "Allocate. The treasury will allocate additional funding to green transit.",
    "explanation": "Double 'l': a-l-l-o-c-a-t-e. Crucial for Writing Task 1 budget breakdown diagrams.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-64",
    "type": "spelling",
    "targetWord": "articulate",
    "ipa": "/\u0251\u02d0\u02c8t\u026ak.j\u0259.l\u0259t/",
    "definition": "Having or showing the ability to speak fluently and coherently.",
    "contextSentenceWithBlank": "University candidates must clearly ______________ their empirical research questions in their thesis.",
    "misspellingTraps": [
      "artickulate",
      "articulete",
      "artuculate"
    ],
    "audioPromptText": "Articulate. She was able to articulate a persuasive counterargument.",
    "explanation": "Spelled a-r-t-i-c-u-l-a-t-e with 'c', never 'ck'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-65",
    "type": "spelling",
    "targetWord": "advocate",
    "ipa": "/\u02c8\u00e6d.v\u0259.ke\u026at/",
    "definition": "Publicly recommend or support a particular cause or policy.",
    "contextSentenceWithBlank": "Many environmental economists ______________ imposing a direct levy on single-use plastics.",
    "misspellingTraps": [
      "advokate",
      "advicate",
      "advoceat"
    ],
    "audioPromptText": "Advocate. Health organizations advocate stricter tobacco controls.",
    "explanation": "Spelled a-d-v-o-c-a-t-e. Use in Task 2: 'Proponents advocate that...'",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-66",
    "type": "spelling",
    "targetWord": "ambiguous",
    "ipa": "/\u00e6m\u02c8b\u026a\u0261.ju.\u0259s/",
    "definition": "Open to more than one interpretation; not having one obvious meaning.",
    "contextSentenceWithBlank": "Legal contracts should avoid ______________ phrasing that could lead to contractual litigation.",
    "misspellingTraps": [
      "ambigeous",
      "ambigous",
      "ambiguis"
    ],
    "audioPromptText": "Ambiguous. The survey questions were criticized as overly ambiguous.",
    "explanation": "Notice the 'u' before 'ous': a-m-b-i-g-u-o-u-s.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-67",
    "type": "spelling",
    "targetWord": "anticipate",
    "ipa": "/\u00e6n\u02c8t\u026as.\u026a.pe\u026at/",
    "definition": "Regard as probable; expect or predict.",
    "contextSentenceWithBlank": "Demographers ______________ an exponential increase in urban populations by 2050.",
    "misspellingTraps": [
      "antisipate",
      "anticepate",
      "anticepate"
    ],
    "audioPromptText": "Anticipate. Economists anticipate a sharp rebound in retail activity.",
    "explanation": "Notice 'c' before 'i': a-n-t-i-c-i-p-a-t-e.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-68",
    "type": "spelling",
    "targetWord": "approximate",
    "ipa": "/\u0259\u02c8pr\u0252k.s\u026a.m\u0259t/",
    "definition": "Close to the actual, but not completely accurate or exact.",
    "contextSentenceWithBlank": "The ______________ expenditure on renewable energy accounted for a third of the budget.",
    "misspellingTraps": [
      "aproximate",
      "approxemate",
      "approcksimate"
    ],
    "audioPromptText": "Approximate. We can determine an approximate estimation of costs.",
    "explanation": "Double 'p': a-p-p-r-o-x-i-m-a-t-e. Frequently needed in Task 1 data descriptions.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-69",
    "type": "spelling",
    "targetWord": "assess",
    "ipa": "/\u0259\u02c8ses/",
    "definition": "Evaluate or estimate the nature, ability, or quality of.",
    "contextSentenceWithBlank": "Standardized tests seek to ______________ language proficiency across four distinct modules.",
    "misspellingTraps": [
      "asess",
      "asses",
      "acesse"
    ],
    "audioPromptText": "Assess. The panel will assess the environmental ramifications.",
    "explanation": "Two pairs of double 's': a-s-s-e-s-s. Total four 's's.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-70",
    "type": "spelling",
    "targetWord": "acknowledge",
    "ipa": "/\u0259k\u02c8n\u0252l.\u026ad\u0292/",
    "definition": "Accept or admit the existence or truth of.",
    "contextSentenceWithBlank": "Governments must openly ______________ the catastrophic hazards of runaway global heating.",
    "misspellingTraps": [
      "aknowledge",
      "acknowlege",
      "acknowlede"
    ],
    "audioPromptText": "Acknowledge. Authorities must acknowledge the public concern.",
    "explanation": "Contains 'ck' and ends in 'dge': a-c-k-n-o-w-l-e-d-g-e. Don't omit the 'd'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-71",
    "type": "spelling",
    "targetWord": "diminish",
    "ipa": "/d\u026a\u02c8m\u026an.\u026a\u0283/",
    "definition": "Make or become less.",
    "contextSentenceWithBlank": "Technological advancements did not ______________ the demand for skilled classroom educators.",
    "misspellingTraps": [
      "deminish",
      "diminnish",
      "diminash"
    ],
    "audioPromptText": "Diminish. Natural reserves will diminish if usage stays unregulated.",
    "explanation": "Three 'i's: d-i-m-i-n-i-s-h. Begins with 'di', not 'de'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-72",
    "type": "spelling",
    "targetWord": "diversify",
    "ipa": "/da\u026a\u02c8v\u025c\u02d0.s\u026a.fa\u026a/",
    "definition": "Make or become more diverse or varied.",
    "contextSentenceWithBlank": "Emerging economies are urged to ______________ their exports away from raw hydrocarbons.",
    "misspellingTraps": [
      "divercify",
      "divirsify",
      "diversfy"
    ],
    "audioPromptText": "Diversify. Smallholders diversify their agricultural yield.",
    "explanation": "Spelled with 's': d-i-v-e-r-s-i-f-y. Ends in '-ify'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-73",
    "type": "spelling",
    "targetWord": "enhance",
    "ipa": "/\u026an\u02c8h\u0251\u02d0ns/",
    "definition": "Intensify, increase, or further improve the quality, value, or extent of.",
    "contextSentenceWithBlank": "Constructing bicycle highways will ______________ urban livability and public cardiovascular health.",
    "misspellingTraps": [
      "enhannce",
      "enhannse",
      "enhanse"
    ],
    "audioPromptText": "Enhance. Modern methods enhance agricultural productivity.",
    "explanation": "Ends in '-nce': e-n-h-a-n-c-e, not '-nse'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-74",
    "type": "spelling",
    "targetWord": "evident",
    "ipa": "/\u02c8ev.\u026a.d\u0259nt/",
    "definition": "Plain or obvious; clearly seen or understood.",
    "contextSentenceWithBlank": "It is ______________ from the bar chart that automobile ownership surged between 2010 and 2020.",
    "misspellingTraps": [
      "evidant",
      "evedent",
      "evadent"
    ],
    "audioPromptText": "Evident. It is evident that industrial production declined.",
    "explanation": "Ends in '-ent': e-v-i-d-e-n-t. 'As is evident from the data...'",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-75",
    "type": "spelling",
    "targetWord": "illustrate",
    "ipa": "/\u02c8\u026al.\u0259.stre\u026at/",
    "definition": "Explain or make something clear by using examples, charts, or pictures.",
    "contextSentenceWithBlank": "The accompanying pie charts ______________ the demographic distribution of university graduates.",
    "misspellingTraps": [
      "ilustrate",
      "illistrate",
      "illustraite"
    ],
    "audioPromptText": "Illustrate. The diagrams illustrate the water purification cycle.",
    "explanation": "Double 'l': i-l-l-u-s-t-r-a-t-e. Crucial Task 1 introductory lexis.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-76",
    "type": "spelling",
    "targetWord": "implication",
    "ipa": "/\u02cc\u026am.pl\u026a\u02c8ke\u026a.\u0283\u0259n/",
    "definition": "The conclusion that can be drawn from something although it is not explicitly stated.",
    "contextSentenceWithBlank": "Researchers must reflect on the ethical ______________ of gene editing technologies.",
    "misspellingTraps": [
      "implacation",
      "implecation",
      "implicasion"
    ],
    "audioPromptText": "Implication. We must consider the implication of automated policing.",
    "explanation": "Notice the 'i' in the second syllable: i-m-p-l-i-c-a-t-i-o-n.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-77",
    "type": "spelling",
    "targetWord": "incorporate",
    "ipa": "/\u026an\u02c8k\u0254\u02d0.p\u0259r.e\u026at/",
    "definition": "Take in or contain (something) as part of a whole; include.",
    "contextSentenceWithBlank": "Modern syllabuses increasingly ______________ computer programming into primary schooling.",
    "misspellingTraps": [
      "incorperate",
      "incorparate",
      "incoorporate"
    ],
    "audioPromptText": "Incorporate. Town planners incorporate parks into residential sectors.",
    "explanation": "Spelled i-n-c-o-r-p-o-r-a-t-e with two 'o's.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-78",
    "type": "spelling",
    "targetWord": "initiate",
    "ipa": "/\u026a\u02c8n\u026a\u0283.i.e\u026at/",
    "definition": "Cause (a process or action) to begin.",
    "contextSentenceWithBlank": "The ministry decided to ______________ a national recycling initiative across all state municipalities.",
    "misspellingTraps": [
      "innitiate",
      "iniciate",
      "initate"
    ],
    "audioPromptText": "Initiate. The board agreed to initiate formal investigations.",
    "explanation": "Single 'n': i-n-i-t-i-a-t-e. Don't write double 'n'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-79",
    "type": "spelling",
    "targetWord": "interpret",
    "ipa": "/\u026an\u02c8t\u025c\u02d0.pr\u026at/",
    "definition": "Explain the meaning of (information or actions).",
    "contextSentenceWithBlank": "Economists ______________ the dip in consumer borrowing as a harbinger of fiscal caution.",
    "misspellingTraps": [
      "interprete",
      "interprit",
      "interpreat"
    ],
    "audioPromptText": "Interpret. How we interpret data dictates public health policy.",
    "explanation": "No 'e' at the end: i-n-t-e-r-p-r-e-t.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-80",
    "type": "spelling",
    "targetWord": "justify",
    "ipa": "/\u02c8d\u0292\u028cs.t\u026a.fa\u026a/",
    "definition": "Show or prove to be right or reasonable.",
    "contextSentenceWithBlank": "High economic returns cannot ______________ environmental devastation of pristine coastal ecosystems.",
    "misspellingTraps": [
      "justefy",
      "justifi",
      "juestify"
    ],
    "audioPromptText": "Justify. The company failed to justify the sudden price hike.",
    "explanation": "Spelled j-u-s-t-i-f-y with 'i', ending in 'fy'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-81",
    "type": "spelling",
    "targetWord": "supersede",
    "ipa": "/\u02ccsu\u02d0.p\u0259\u02c8si\u02d0d/",
    "definition": "Take the place of (a person or thing previously in authority or use); supplant.",
    "contextSentenceWithBlank": "Digital textbooks are poised to ______________ printed volumes in secondary schools.",
    "misspellingTraps": [
      "supercede",
      "superceed",
      "supercede"
    ],
    "audioPromptText": "Supersede. Electric propulsion will supersede the internal combustion engine.",
    "explanation": "Spelled with 's', NOT 'c': s-u-p-e-r-S-E-D-E. One of the most famous traps in the English language.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-82",
    "type": "spelling",
    "targetWord": "consensus",
    "ipa": "/k\u0259n\u02c8sen.s\u0259s/",
    "definition": "A general agreement.",
    "contextSentenceWithBlank": "There is strong scientific ______________ regarding human culpability in climatic shifts.",
    "misspellingTraps": [
      "concensus",
      "consencus",
      "consensius"
    ],
    "audioPromptText": "Consensus. Scientific consensus endorses green transition strategies.",
    "explanation": "Starts with 'c', followed by two 's's: c-o-n-s-e-n-s-u-s. No 'c' in the middle.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-83",
    "type": "spelling",
    "targetWord": "subtle",
    "ipa": "/\u02c8s\u028ct.\u0259l/",
    "definition": "So delicate or precise as to be difficult to analyze or describe.",
    "contextSentenceWithBlank": "Experienced editors can detect ______________ semantic distinctions in academic prose.",
    "misspellingTraps": [
      "suttle",
      "subtel",
      "subtile"
    ],
    "audioPromptText": "Subtle. Subtle nuances in phrasing alter the meaning entirely.",
    "explanation": "Contains a silent 'b': s-u-b-t-l-e. The 'b' is completely unpronounced.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-84",
    "type": "spelling",
    "targetWord": "manoeuvre",
    "ipa": "/m\u0259\u02c8nu\u02d0.v\u0259r/",
    "definition": "A movement or series of moves requiring skill and care.",
    "contextSentenceWithBlank": "Navigating complex geopolitics requires adroit diplomatic ______________.",
    "misspellingTraps": [
      "maneuver",
      "manouver",
      "maneuvre"
    ],
    "audioPromptText": "Manoeuvre. Cambridge tests standard British spelling: manoeuvre.",
    "explanation": "British Cambridge standard: m-a-n-o-e-u-v-r-e. Note the 'oeu' vowel sequence.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-85",
    "type": "spelling",
    "targetWord": "schedule",
    "ipa": "/\u02c8\u0283ed\u0292.u\u02d0l/",
    "definition": "A plan for carrying out a process or procedure.",
    "contextSentenceWithBlank": "The high-speed rail network operates on a rigorous timetable and ______________.",
    "misspellingTraps": [
      "shedule",
      "skedule",
      "scheduele"
    ],
    "audioPromptText": "Schedule. Keep to the strict project delivery schedule.",
    "explanation": "Begins with 'sch': s-c-h-e-d-u-l-e. In British RP pronounced /\u02c8\u0283ed\u0292.u\u02d0l/.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-86",
    "type": "spelling",
    "targetWord": "miscellaneous",
    "ipa": "/\u02ccm\u026as.\u0259l\u02c8e\u026a.ni.\u0259s/",
    "definition": "Of various types or from different sources.",
    "contextSentenceWithBlank": "Under the category of ______________ expenditure were travel stipends and conference passes.",
    "misspellingTraps": [
      "miscellanious",
      "miscelaneous",
      "misscellaneous"
    ],
    "audioPromptText": "Miscellaneous. He listed miscellaneous overhead costs.",
    "explanation": "Double 'l': m-i-s-c-e-l-l-a-n-e-o-u-s. Ends with 'eous'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-87",
    "type": "spelling",
    "targetWord": "personnel",
    "ipa": "/\u02ccp\u025c\u02d0.s\u0259n\u02c8el/",
    "definition": "People employed in an organization or engaged in an organized undertaking.",
    "contextSentenceWithBlank": "Military and medical ______________ were deployed promptly to the earthquake epicenter.",
    "misspellingTraps": [
      "personel",
      "personal",
      "personell"
    ],
    "audioPromptText": "Personnel. Highly trained hospital personnel responded.",
    "explanation": "Double 'n' and single 'l': p-e-r-s-o-n-n-e-l. Meaning staff (vs personal = private).",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-88",
    "type": "spelling",
    "targetWord": "stationary",
    "ipa": "/\u02c8ste\u026a.\u0283\u0259n.\u0259r.i/",
    "definition": "Not moving or not intended to be moved.",
    "contextSentenceWithBlank": "Traffic was virtually ______________ on the ring road for three consecutive hours.",
    "misspellingTraps": [
      "stationery",
      "stationairy",
      "stationarry"
    ],
    "audioPromptText": "Stationary. The vehicle remained stationary at the intersection.",
    "explanation": "Spelled with 'a': s-t-a-t-i-o-n-A-r-y = motionless (as opposed to stationERy = envelopes/pens).",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-89",
    "type": "spelling",
    "targetWord": "stationery",
    "ipa": "/\u02c8ste\u026a.\u0283\u0259n.\u0259r.i/",
    "definition": "Writing materials, like paper and envelopes.",
    "contextSentenceWithBlank": "The administrative department ordered fresh supplies of office ______________ and inkjet cartridges.",
    "misspellingTraps": [
      "stationary",
      "stationairy",
      "stationry"
    ],
    "audioPromptText": "Stationery. We restocked office stationery supplies.",
    "explanation": "Spelled with 'e': s-t-a-t-i-o-n-E-r-y = Envelopes and paper. Remember 'e' for envelope.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-90",
    "type": "spelling",
    "targetWord": "complement",
    "ipa": "/\u02c8k\u0252m.pl\u026a.m\u0259nt/",
    "definition": "A thing that completes or brings to perfection.",
    "contextSentenceWithBlank": "Theoretical lectures serve as a vital ______________ to hands-on clinical rotations.",
    "misspellingTraps": [
      "compliment",
      "complament",
      "compelment"
    ],
    "audioPromptText": "Complement. Practical skills complement academic theory.",
    "explanation": "Spelled with 'e': c-o-m-p-l-E-m-e-n-t = completes something (complIment = words of praise).",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-91",
    "type": "spelling",
    "targetWord": "principle",
    "ipa": "/\u02c8pr\u026an.s\u0259.p\u0259l/",
    "definition": "A fundamental truth or proposition that serves as the foundation for a system of belief.",
    "contextSentenceWithBlank": "Democratic governance is rooted in the fundamental ______________ of universal equality.",
    "misspellingTraps": [
      "principal",
      "prinsepal",
      "principel"
    ],
    "audioPromptText": "Principle. Adhere strictly to the principle of scientific impartiality.",
    "explanation": "Ends in '-le': p-r-i-n-c-i-p-L-E = rule/truth (principal = head of school / main).",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-92",
    "type": "spelling",
    "targetWord": "principal",
    "ipa": "/\u02c8pr\u026an.s\u0259.p\u0259l/",
    "definition": "First in order of importance; main.",
    "contextSentenceWithBlank": "The ______________ reason for the migration influx was economic opportunity in the metropolis.",
    "misspellingTraps": [
      "principle",
      "principil",
      "prinsipal"
    ],
    "audioPromptText": "Principal. The principal argument against the highway was budget cost.",
    "explanation": "Ends in '-al': p-r-i-n-c-i-p-A-L = chief / primary.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-93",
    "type": "spelling",
    "targetWord": "receipt",
    "ipa": "/r\u026a\u02c8si\u02d0t/",
    "definition": "A written acknowledgment of having received a specified amount of money or goods.",
    "contextSentenceWithBlank": "Customers are entitled to a full financial refund upon producing their sales ______________.",
    "misspellingTraps": [
      "reciept",
      "reciet",
      "reseipt"
    ],
    "audioPromptText": "Receipt. Retain the receipt as proof of purchase.",
    "explanation": "Silent 'p' and 'ei': r-e-c-E-I-P-t. Don't forget the silent 'p'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-94",
    "type": "spelling",
    "targetWord": "debt",
    "ipa": "/det/",
    "definition": "Something, typically money, that is owed or due.",
    "contextSentenceWithBlank": "National sovereign ______________ has climbed significantly following prolonged infrastructure borrowing.",
    "misspellingTraps": [
      "det",
      "depbt",
      "dept"
    ],
    "audioPromptText": "Debt. He struggled under a mountain of credit debt.",
    "explanation": "Contains a silent 'b': d-e-B-t. Not to be confused with 'dept' (department).",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-95",
    "type": "spelling",
    "targetWord": "doubt",
    "ipa": "/da\u028at/",
    "definition": "A feeling of uncertainty or lack of conviction.",
    "contextSentenceWithBlank": "There is little ______________ that automated analytics will transform financial services.",
    "misspellingTraps": [
      "dout",
      "doubte",
      "dawt"
    ],
    "audioPromptText": "Doubt. Beyond a shadow of a doubt.",
    "explanation": "Silent 'b': d-o-u-B-t. 'Undoubtedly' also keeps the 'b'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-96",
    "type": "spelling",
    "targetWord": "column",
    "ipa": "/\u02c8k\u0252l.\u0259m/",
    "definition": "An upright pillar, or a vertical division of a page or text.",
    "contextSentenceWithBlank": "The second ______________ of the statistical table displays percentage shifts in employment.",
    "misspellingTraps": [
      "colum",
      "collumn",
      "columnn"
    ],
    "audioPromptText": "Column. Read the data across the third column.",
    "explanation": "Silent 'n' at the end: c-o-l-u-m-N. Single 'l'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-97",
    "type": "spelling",
    "targetWord": "autumn",
    "ipa": "/\u02c8\u0254\u02d0.t\u0259m/",
    "definition": "The season after summer and before winter; fall.",
    "contextSentenceWithBlank": "University terms in the United Kingdom typically commence in early ______________.",
    "misspellingTraps": [
      "autum",
      "automn",
      "ortumn"
    ],
    "audioPromptText": "Autumn. The semester begins in late autumn.",
    "explanation": "Silent 'n' at the end: a-u-t-u-m-N. British English preference in Cambridge exams.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-98",
    "type": "spelling",
    "targetWord": "paradigm",
    "ipa": "/\u02c8p\u00e6r.\u0259.da\u026am/",
    "definition": "A typical example or pattern of something; a model.",
    "contextSentenceWithBlank": "Quantum computing represents a radical ______________ shift in data processing capabilities.",
    "misspellingTraps": [
      "paradime",
      "paridigm",
      "paradaigm"
    ],
    "audioPromptText": "Paradigm. A paradigm shift in educational methodology.",
    "explanation": "Silent 'g': p-a-r-a-d-i-G-m. But the 'g' is heard in 'paradigmatic'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-99",
    "type": "spelling",
    "targetWord": "liaison",
    "ipa": "/li\u02c8e\u026a.z\u0252n/",
    "definition": "Communication or cooperation which facilitates a close working relationship.",
    "contextSentenceWithBlank": "The police established a community ______________ officer to build trust with local youth.",
    "misspellingTraps": [
      "liason",
      "liazon",
      "liasion"
    ],
    "audioPromptText": "Liaison. Close liaison between departments prevented delays.",
    "explanation": "Two 'i's: l-i-a-i-s-o-n. Pronounced /li\u02c8e\u026a.z\u0252n/.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-100",
    "type": "spelling",
    "targetWord": "dilemma",
    "ipa": "/da\u026a\u02c8lem.\u0259/",
    "definition": "A situation in which a difficult choice has to be made between two or more alternatives.",
    "contextSentenceWithBlank": "Ethicists face a modern ______________ regarding the autonomous decision-making of AI vehicles.",
    "misspellingTraps": [
      "dilemna",
      "dilema",
      "dillima"
    ],
    "audioPromptText": "Dilemma. Policy makers are caught in a difficult economic dilemma.",
    "explanation": "Double 'm', NOT 'mn': d-i-l-e-M-M-a. A widespread misconception is writing 'dilemna'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-101",
    "type": "spelling",
    "targetWord": "biodiversity",
    "ipa": "/\u02ccba\u026a.\u0259\u028a.da\u026a\u02c8v\u025c\u02d0.s\u0259.ti/",
    "definition": "The variety of plant and animal life in the world or in a particular habitat.",
    "contextSentenceWithBlank": "Amazonian deforestation poses an existential threat to planetary ______________.",
    "misspellingTraps": [
      "biodivercity",
      "biodiversty",
      "biodeversity"
    ],
    "audioPromptText": "Biodiversity. Protecting marine biodiversity is urgent.",
    "explanation": "Spelled b-i-o-d-i-v-e-r-s-i-t-y. Ends in '-sity', not '-city'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-102",
    "type": "spelling",
    "targetWord": "renewable",
    "ipa": "/r\u026a\u02c8nju\u02d0.\u0259.b\u0259l/",
    "definition": "Capable of being replenished naturally; not depleted by use.",
    "contextSentenceWithBlank": "Subsidies for ______________ energy sources have stimulated substantial private investment.",
    "misspellingTraps": [
      "renewible",
      "reneweble",
      "renwable"
    ],
    "audioPromptText": "Renewable. Solar and wind are leading renewable energies.",
    "explanation": "From 'renew' + '-able': r-e-n-e-w-a-b-l-e. Ends in '-able'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-103",
    "type": "spelling",
    "targetWord": "degradation",
    "ipa": "/\u02ccde\u0261.r\u0259\u02c8de\u026a.\u0283\u0259n/",
    "definition": "The process of deteriorating or being degraded to a lower condition.",
    "contextSentenceWithBlank": "Excessive chemical fertilization leads to severe soil ______________ and erosion.",
    "misspellingTraps": [
      "degredation",
      "degradition",
      "degridation"
    ],
    "audioPromptText": "Degradation. Halting environmental degradation is a global goal.",
    "explanation": "Spelled d-e-g-r-a-d-a-t-i-o-n with 'a' in the second syllable.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-104",
    "type": "spelling",
    "targetWord": "ecosystem",
    "ipa": "/\u02c8i\u02d0.k\u0259\u028a\u02ccs\u026as.t\u0259m/",
    "definition": "A biological community of interacting organisms and their physical environment.",
    "contextSentenceWithBlank": "The introduction of cane toads disrupted the delicate balance of the local ______________.",
    "misspellingTraps": [
      "ecosystim",
      "ecocystem",
      "ecrosystem"
    ],
    "audioPromptText": "Ecosystem. Coral reefs constitute a fragile aquatic ecosystem.",
    "explanation": "Spelled e-c-o-s-y-s-t-e-m with 'y' in the root system.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-105",
    "type": "spelling",
    "targetWord": "infrastructure",
    "ipa": "/\u02c8\u026an.fr\u0259\u02ccstr\u028ck.t\u0283\u0259r/",
    "definition": "The basic physical and organizational structures and facilities needed for the operation of a society.",
    "contextSentenceWithBlank": "State investment in broadband ______________ connects isolated rural communities.",
    "misspellingTraps": [
      "infrastructer",
      "infastructure",
      "infrastucture"
    ],
    "audioPromptText": "Infrastructure. Upgrading national rail infrastructure requires billions.",
    "explanation": "Notice 'infra' with 'r': i-n-f-R-a-s-t-r-u-c-t-u-r-e. Don't omit the first 'r'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-106",
    "type": "spelling",
    "targetWord": "congestion",
    "ipa": "/k\u0259n\u02c8d\u0292es.t\u0283\u0259n/",
    "definition": "The state of being congested or overcrowded, especially with traffic.",
    "contextSentenceWithBlank": "Congestion pricing successfully reduced vehicular ______________ in central London.",
    "misspellingTraps": [
      "conjeation",
      "congeston",
      "congesstion"
    ],
    "audioPromptText": "Congestion. Heavy congestion slows commuter buses.",
    "explanation": "Spelled c-o-n-g-e-s-t-i-o-n with 'g' and single 's'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-107",
    "type": "spelling",
    "targetWord": "urbanization",
    "ipa": "/\u02cc\u025c\u02d0.b\u0259n.a\u026a\u02c8ze\u026a.\u0283\u0259n/",
    "definition": "The process of making an area more urban; the gradual increase in the proportion of people living in urban areas.",
    "contextSentenceWithBlank": "Rapid ______________ in developing nations puts tremendous strain on municipal water networks.",
    "misspellingTraps": [
      "urbanisation",
      "urbanasation",
      "urabanization"
    ],
    "audioPromptText": "Urbanization. The pace of urbanization is accelerating in East Asia.",
    "explanation": "Spelled u-r-b-a-n-i-z-a-t-i-o-n (or British 'urbanisation'). Both are accepted in IELTS.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-108",
    "type": "spelling",
    "targetWord": "sustainability",
    "ipa": "/s\u0259\u02ccste\u026a.n\u0259\u02c8b\u026al.\u0259.ti/",
    "definition": "The ability to be maintained at a certain rate or level; ecological balance.",
    "contextSentenceWithBlank": "Corporate enterprises must prioritize environmental ______________ over short-term quarterly revenue.",
    "misspellingTraps": [
      "sustainibility",
      "sustanability",
      "sustainabilaty"
    ],
    "audioPromptText": "Sustainability. Long-term agricultural sustainability must be ensured.",
    "explanation": "From 'sustainable': s-u-s-t-a-i-n-a-b-i-l-i-t-y. Notice 'ai' in sustain.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-109",
    "type": "spelling",
    "targetWord": "emissions",
    "ipa": "/i\u02c8m\u026a\u0283.\u0259nz/",
    "definition": "The production and discharge of something, especially gas or radiation.",
    "contextSentenceWithBlank": "Stringent regulatory limits were imposed on greenhouse gas ______________ from commercial aviation.",
    "misspellingTraps": [
      "emmisions",
      "emmisions",
      "emisions"
    ],
    "audioPromptText": "Emissions. Reducing carbon emissions is central to the treaty.",
    "explanation": "Single 'm', double 's': e-m-i-s-s-i-o-n-s. Top error is writing double 'm'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-110",
    "type": "spelling",
    "targetWord": "consumption",
    "ipa": "/k\u0259n\u02c8s\u028cmp.\u0283\u0259n/",
    "definition": "The using up of a resource.",
    "contextSentenceWithBlank": "Per capita power ______________ reached an all-time peak during the summer heatwave.",
    "misspellingTraps": [
      "comsumption",
      "consumsion",
      "consumtion"
    ],
    "audioPromptText": "Consumption. Fossil fuel consumption remains unsustainably high.",
    "explanation": "Notice the 'p' before 'tion': c-o-n-s-u-m-P-t-i-o-n. Root: consume.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-111",
    "type": "spelling",
    "targetWord": "deplete",
    "ipa": "/d\u026a\u02c8pli\u02d0t/",
    "definition": "Use up the supply or resources of.",
    "contextSentenceWithBlank": "Intensive agricultural cultivation can rapidly ______________ the soil of essential nitrogen compounds.",
    "misspellingTraps": [
      "depleat",
      "depleet",
      "deplite"
    ],
    "audioPromptText": "Deplete. Overfishing will deplete offshore fish stocks.",
    "explanation": "Spelled d-e-p-l-e-t-e with two 'e's separated by 't'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-112",
    "type": "spelling",
    "targetWord": "contamination",
    "ipa": "/k\u0259n\u02cct\u00e6m.\u026a\u02c8ne\u026a.\u0283\u0259n/",
    "definition": "The action or state of making or being made impure by polluting or poisoning.",
    "contextSentenceWithBlank": "Industrial effluent led to toxic ______________ of regional subterranean aquifers.",
    "misspellingTraps": [
      "contamenation",
      "contaminasion",
      "contamenasion"
    ],
    "audioPromptText": "Contamination. Chemical contamination forced the evacuation of the district.",
    "explanation": "Notice 'i' in the third syllable: c-o-n-t-a-m-i-n-a-t-i-o-n.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-113",
    "type": "spelling",
    "targetWord": "agricultural",
    "ipa": "/\u02cc\u00e6\u0261.r\u026a\u02c8k\u028cl.t\u0283\u0259r.\u0259l/",
    "definition": "Relating to agriculture, farming, or cultivation.",
    "contextSentenceWithBlank": "Modern drip irrigation dramatically elevates ______________ productivity in arid regions.",
    "misspellingTraps": [
      "agricultral",
      "agracultural",
      "agriculturial"
    ],
    "audioPromptText": "Agricultural. Agricultural subsidies protect small farmers.",
    "explanation": "Spelled a-g-r-i-c-u-l-t-u-r-a-l. Don't omit the 'u' after 't'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-114",
    "type": "spelling",
    "targetWord": "deforestation",
    "ipa": "/di\u02d0\u02ccf\u0252r.\u026a\u02c8ste\u026a.\u0283\u0259n/",
    "definition": "The action of clearing a wide area of trees.",
    "contextSentenceWithBlank": "Unregulated ______________ directly accelerates atmospheric greenhouse gas accumulation.",
    "misspellingTraps": [
      "deforestration",
      "deforistation",
      "deforetation"
    ],
    "audioPromptText": "Deforestation. Curbing tropical deforestation is imperative.",
    "explanation": "From 'forest': d-e-f-o-r-e-s-t-a-t-i-o-n.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-115",
    "type": "spelling",
    "targetWord": "reservoir",
    "ipa": "/\u02c8rez.\u0259.vw\u0251\u02d0/",
    "definition": "A large natural or artificial lake used as a source of water supply.",
    "contextSentenceWithBlank": "Prolonged droughts caused water levels in the municipal ______________ to plummet.",
    "misspellingTraps": [
      "resevoir",
      "reservior",
      "reservoire"
    ],
    "audioPromptText": "Reservoir. Water was piped from the mountain reservoir.",
    "explanation": "French origin: r-e-s-e-r-v-o-i-r. Ends in 'oir', NOT 'ior'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-116",
    "type": "spelling",
    "targetWord": "hazardous",
    "ipa": "/\u02c8h\u00e6z.\u0259.d\u0259s/",
    "definition": "Risky; dangerous.",
    "contextSentenceWithBlank": "Strict transport protocols must govern the disposal of ______________ biological waste.",
    "misspellingTraps": [
      "hazardus",
      "hazerdous",
      "hazardouse"
    ],
    "audioPromptText": "Hazardous. Dumping hazardous effluent into rivers is illegal.",
    "explanation": "Spelled h-a-z-a-r-d-o-u-s. From 'hazard' + 'ous'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-117",
    "type": "spelling",
    "targetWord": "sanitation",
    "ipa": "/\u02ccs\u00e6n.\u026a\u02c8te\u026a.\u0283\u0259n/",
    "definition": "Conditions relating to public health, especially the provision of clean drinking water and sewage disposal.",
    "contextSentenceWithBlank": "Access to clean drinking water and adequate ______________ prevents waterborne epidemics.",
    "misspellingTraps": [
      "sanetation",
      "sanitasian",
      "sannitation"
    ],
    "audioPromptText": "Sanitation. Universal sanitation is a fundamental developmental milestone.",
    "explanation": "Single 'n', spelled s-a-n-i-t-a-t-i-o-n with 'i' in the second syllable.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-118",
    "type": "spelling",
    "targetWord": "exhaustion",
    "ipa": "/\u026a\u0261\u02c8z\u0254\u02d0s.t\u0283\u0259n/",
    "definition": "A state of extreme physical or mental fatigue; the action of using something up.",
    "contextSentenceWithBlank": "The ______________ of finite fossil fuel deposits will compel a transition to nuclear and solar alternatives.",
    "misspellingTraps": [
      "exhaution",
      "exorstion",
      "exhastion"
    ],
    "audioPromptText": "Exhaustion. The complete exhaustion of oil reserves.",
    "explanation": "Notice 'au': e-x-h-a-u-s-t-i-o-n. Contains silent 'h'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-119",
    "type": "spelling",
    "targetWord": "deterrent",
    "ipa": "/d\u026a\u02c8ter.\u0259nt/",
    "definition": "A thing that discourages or is intended to discourage someone from doing something.",
    "contextSentenceWithBlank": "Hefty financial penalties act as an effective ______________ against corporate pollution.",
    "misspellingTraps": [
      "deterant",
      "deterrant",
      "deterent"
    ],
    "audioPromptText": "Deterrent. Heavy fines serve as an effective deterrent.",
    "explanation": "Double 'r' and ends in '-ent': d-e-t-e-r-r-e-n-t.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-120",
    "type": "spelling",
    "targetWord": "preservation",
    "ipa": "/\u02ccprez.\u0259\u02c8ve\u026a.\u0283\u0259n/",
    "definition": "The act of keeping something in its original state or in good condition.",
    "contextSentenceWithBlank": "Public donations supported the ______________ of the historic Victorian library.",
    "misspellingTraps": [
      "presurvation",
      "presevation",
      "prezervation"
    ],
    "audioPromptText": "Preservation. Historical site preservation requires funding.",
    "explanation": "Spelled p-r-e-s-e-r-v-a-t-i-o-n. From 'preserve'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-121",
    "type": "spelling",
    "targetWord": "globalization",
    "ipa": "/\u02cc\u0261l\u0259\u028a.b\u0259l.a\u026a\u02c8ze\u026a.\u0283\u0259n/",
    "definition": "The process by which businesses or other organizations develop international influence or start operating on an international scale.",
    "contextSentenceWithBlank": "Economic ______________ has facilitated the seamless transnational distribution of commodities.",
    "misspellingTraps": [
      "globalisation",
      "globalasation",
      "globlization"
    ],
    "audioPromptText": "Globalization. The impacts of globalization on indigenous cultures.",
    "explanation": "Spelled g-l-o-b-a-l-i-z-a-t-i-o-n (or British 'globalisation').",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-122",
    "type": "spelling",
    "targetWord": "curriculum",
    "ipa": "/k\u0259\u02c8r\u026ak.j\u0259.l\u0259m/",
    "definition": "The subjects comprising a course of study in a school or college.",
    "contextSentenceWithBlank": "Integrating financial literacy into the national school ______________ prepares youth for adult independence.",
    "misspellingTraps": [
      "curriculam",
      "cirriculum",
      "curiculum"
    ],
    "audioPromptText": "Curriculum. The ministry refreshed the secondary science curriculum.",
    "explanation": "Double 'r', single 'l': c-u-r-r-i-c-u-l-u-m. Ends with '-um'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-123",
    "type": "spelling",
    "targetWord": "prerequisite",
    "ipa": "/\u02ccpri\u02d0\u02c8rek.w\u026a.z\u026at/",
    "definition": "A thing that is required as a prior condition for something else to happen or exist.",
    "contextSentenceWithBlank": "A bachelor degree is an essential ______________ for acceptance into the doctoral program.",
    "misspellingTraps": [
      "prerequsite",
      "prerequisit",
      "pre-requisite"
    ],
    "audioPromptText": "Prerequisite. Fluency is an obligatory prerequisite.",
    "explanation": "Spelled p-r-e-r-e-q-u-i-s-i-t-e. Two 'i's and ending in 'e'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-124",
    "type": "spelling",
    "targetWord": "pedagogical",
    "ipa": "/\u02ccped.\u0259\u02c8\u0261\u0252d\u0292.\u026a.k\u0259l/",
    "definition": "Relating to teaching or the profession of teaching.",
    "contextSentenceWithBlank": "Modern educators employ diverse ______________ methods to sustain student engagement.",
    "misspellingTraps": [
      "pedigogical",
      "pedogogical",
      "pedagogicall"
    ],
    "audioPromptText": "Pedagogical. Universities are rethinking pedagogical frameworks.",
    "explanation": "Spelled p-e-d-a-g-o-g-i-c-a-l with 'a' then 'o'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-125",
    "type": "spelling",
    "targetWord": "expenditure",
    "ipa": "/\u026ak\u02c8spen.d\u026a.t\u0283\u0259r/",
    "definition": "An amount of money spent, as recorded in accounts.",
    "contextSentenceWithBlank": "Government ______________ on public health exceeded defense spending for the third year.",
    "misspellingTraps": [
      "expendature",
      "expendidure",
      "expendature"
    ],
    "audioPromptText": "Expenditure. Capital expenditure increased by twelve percent.",
    "explanation": "Spelled e-x-p-e-n-d-i-t-u-r-e. In Task 1 writing, an essential synonym for 'spending'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-126",
    "type": "spelling",
    "targetWord": "revenue",
    "ipa": "/\u02c8rev.\u0259n.ju\u02d0/",
    "definition": "Income, especially when of an organization and of a substantial nature.",
    "contextSentenceWithBlank": "Corporate tax reform is projected to generate billions in additional state ______________.",
    "misspellingTraps": [
      "revenew",
      "revenu",
      "revanue"
    ],
    "audioPromptText": "Revenue. The firm announced record quarterly revenue.",
    "explanation": "Spelled r-e-v-e-n-u-e. Ends in '-ue', NOT '-ew'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-127",
    "type": "spelling",
    "targetWord": "fiscal",
    "ipa": "/\u02c8f\u026as.k\u0259l/",
    "definition": "Relating to government revenue, especially taxes.",
    "contextSentenceWithBlank": "Central bankers urged lawmakers to exercise disciplined ______________ restraint during inflationary peaks.",
    "misspellingTraps": [
      "fiscil",
      "fiskal",
      "phiscal"
    ],
    "audioPromptText": "Fiscal. The fiscal year concludes at the end of March.",
    "explanation": "Spelled f-i-s-c-a-l. Starts with 'f', not 'ph'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-128",
    "type": "spelling",
    "targetWord": "demographic",
    "ipa": "/\u02ccdem.\u0259\u02c8\u0261r\u00e6f.\u026ak/",
    "definition": "Relating to the structure of populations.",
    "contextSentenceWithBlank": "An aging ______________ places significant pressure on national pension reserves.",
    "misspellingTraps": [
      "demografic",
      "demagraphic",
      "demographick"
    ],
    "audioPromptText": "Demographic. Demographic trends predict labor shortages.",
    "explanation": "Spelled d-e-m-o-g-r-a-p-h-i-c with 'ph' for the 'f' sound.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-129",
    "type": "spelling",
    "targetWord": "inequality",
    "ipa": "/\u02cc\u026an.\u026a\u02c8kw\u0252l.\u0259.ti/",
    "definition": "Difference in size, degree, circumstances, etc.; lack of equality.",
    "contextSentenceWithBlank": "Widening wealth ______________ threatens social stability across both emerging and developed economies.",
    "misspellingTraps": [
      "inequalaty",
      "inequallity",
      "inequalty"
    ],
    "audioPromptText": "Inequality. Tackling income inequality remains a priority.",
    "explanation": "Single 'l': i-n-e-q-u-a-l-i-t-y. From 'unequal' / 'inequality'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-130",
    "type": "spelling",
    "targetWord": "pension",
    "ipa": "/\u02c8pen.\u0283\u0259n/",
    "definition": "A regular payment made during a person's retirement from an investment fund.",
    "contextSentenceWithBlank": "Many citizens worry that their state ______________ will be insufficient to cope with rising living costs.",
    "misspellingTraps": [
      "pention",
      "pencian",
      "pensen"
    ],
    "audioPromptText": "Pension. The state pension age will gradually rise.",
    "explanation": "Spelled p-e-n-s-i-o-n with 's', NOT 't' (pention).",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-131",
    "type": "spelling",
    "targetWord": "subsidy",
    "ipa": "/\u02c8s\u028cb.s\u026a.di/",
    "definition": "A sum of money granted by the government or a public body to assist an industry or business.",
    "contextSentenceWithBlank": "A direct state ______________ on solar installations incentivized home insulation retrofits.",
    "misspellingTraps": [
      "subsidie",
      "subcidy",
      "subsady"
    ],
    "audioPromptText": "Subsidy. The agricultural subsidy eased farmers' debts.",
    "explanation": "Spelled s-u-b-s-i-d-y. Both 's' and 'd' with an 'i' between them. Plural: subsidies.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-132",
    "type": "spelling",
    "targetWord": "unemployment",
    "ipa": "/\u02cc\u028cn.\u026am\u02c8pl\u0254\u026a.m\u0259nt/",
    "definition": "The state of being unemployed or the number or proportion of unemployed people.",
    "contextSentenceWithBlank": "Youth ______________ climbed steeply in the aftermath of the global financial contraction.",
    "misspellingTraps": [
      "unemployement",
      "unemploymant",
      "unemploment"
    ],
    "audioPromptText": "Unemployment. The unemployment rate dropped to record lows.",
    "explanation": "Spelled u-n-e-m-p-l-o-y-m-e-n-t. No 'e' between 'y' and 'ment'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-133",
    "type": "spelling",
    "targetWord": "inflation",
    "ipa": "/\u026an\u02c8fle\u026a.\u0283\u0259n/",
    "definition": "A general increase in prices and fall in the purchasing value of money.",
    "contextSentenceWithBlank": "Central banks raised benchmark lending rates to counteract spiraling consumer ______________.",
    "misspellingTraps": [
      "inflasion",
      "inflashon",
      "infaltion"
    ],
    "audioPromptText": "Inflation. Inflation eroded consumer purchasing capacity.",
    "explanation": "Spelled i-n-f-l-a-t-i-o-n with '-tion'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-134",
    "type": "spelling",
    "targetWord": "commerce",
    "ipa": "/\u02c8k\u0252m.\u025c\u02d0s/",
    "definition": "The activity of buying and selling, especially on a large scale.",
    "contextSentenceWithBlank": "The proliferation of digital ______________ transformed high-street retail dynamics.",
    "misspellingTraps": [
      "comerce",
      "commerece",
      "commers"
    ],
    "audioPromptText": "Commerce. International commerce relies on maritime corridors.",
    "explanation": "Double 'm': c-o-m-m-e-r-c-e. Ends in '-ce'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-135",
    "type": "spelling",
    "targetWord": "corporate",
    "ipa": "/\u02c8k\u0254\u02d0.p\u0259r.\u0259t/",
    "definition": "Relating to a large company or group.",
    "contextSentenceWithBlank": "Public opinion demands greater ______________ social responsibility regarding plastic packaging.",
    "misspellingTraps": [
      "corperat",
      "corperate",
      "coorporate"
    ],
    "audioPromptText": "Corporate. Corporate governance standards must be enforced.",
    "explanation": "Spelled c-o-r-p-o-r-a-t-e with two 'o's: cor-por-ate.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-136",
    "type": "spelling",
    "targetWord": "innovation",
    "ipa": "/\u02cc\u026an.\u0259\u02c8ve\u026a.\u0283\u0259n/",
    "definition": "The action or process of innovating; a new method, idea, or product.",
    "contextSentenceWithBlank": "Fostering technological ______________ is essential for sustained industrial competitiveness.",
    "misspellingTraps": [
      "inovation",
      "innovasion",
      "innavation"
    ],
    "audioPromptText": "Innovation. Green innovation drives economic diversification.",
    "explanation": "Double 'n': i-n-n-o-v-a-t-i-o-n. Origin: Latin 'innovare'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-137",
    "type": "spelling",
    "targetWord": "autonomous",
    "ipa": "/\u0254\u02d0\u02c8t\u0252n.\u0259.m\u0259s/",
    "definition": "Acting independently or having the freedom to do so.",
    "contextSentenceWithBlank": "Several metropolitan authorities are trialing ______________ electric buses on dedicated lanes.",
    "misspellingTraps": [
      "autonomus",
      "autonimous",
      "ortonomous"
    ],
    "audioPromptText": "Autonomous. Fully autonomous delivery drones are being tested.",
    "explanation": "Spelled a-u-t-o-n-o-m-o-u-s. Ends with '-ous'.",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-138",
    "type": "spelling",
    "targetWord": "compulsory",
    "ipa": "/k\u0259m\u02c8p\u028cl.s\u0259r.i/",
    "definition": "Required by law or a rule; obligatory.",
    "contextSentenceWithBlank": "Many educators argue that secondary mathematics should remain ______________ for all students.",
    "misspellingTraps": [
      "compulsary",
      "compulsery",
      "compulsry"
    ],
    "audioPromptText": "Compulsory. Primary education is free and compulsory.",
    "explanation": "Notice the 'o': c-o-m-p-u-l-s-O-r-y. Ends in '-ory', not '-ary'.",
    "cambridgeFrequency": "Extremely High"
  },
  {
    "id": "spell-139",
    "type": "spelling",
    "targetWord": "vocational",
    "ipa": "/v\u0259\u028a\u02c8ke\u026a.\u0283\u0259n.\u0259l/",
    "definition": "Relating to an occupation or employment.",
    "contextSentenceWithBlank": "Governments should allocate equal prestige and funding to ______________ apprenticeships.",
    "misspellingTraps": [
      "vocashenal",
      "vocationel",
      "vacational"
    ],
    "audioPromptText": "Vocational. Vocational training prepares students for technical careers.",
    "explanation": "From 'vocation': v-o-c-a-t-i-o-n-a-l. Don't confuse with 'vacation' (holiday).",
    "cambridgeFrequency": "High"
  },
  {
    "id": "spell-140",
    "type": "spelling",
    "targetWord": "literacy",
    "ipa": "/\u02c8l\u026at.\u0259r.\u0259.si/",
    "definition": "The ability to read and write.",
    "contextSentenceWithBlank": "Universal female ______________ is universally acknowledged as the single most effective driver of health improvement.",
    "misspellingTraps": [
      "litracy",
      "literasy",
      "litiracy"
    ],
    "audioPromptText": "Literacy. Promoting adult literacy across rural provinces.",
    "explanation": "Spelled l-i-t-e-r-a-c-y. Three syllables: lit-er-a-cy. Ends in '-cy'.",
    "cambridgeFrequency": "Extremely High"
  }
];
