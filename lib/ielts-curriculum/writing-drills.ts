import { SpellingExercise, GrammarDrillExercise, ParaphraseExercise, SynonymDrillExercise } from "@/types/curriculum";
import {
  SPELLING_500_EXERCISES,
  SYNONYM_500_EXERCISES,
  IELTS_500_PACKS,
  IELTS_500_WORDS,
  IELTS500Pack,
  IELTS500WordItem,
} from "./ielts-500-words";

// Re-export 500 words and 19 thematic packs
export {
  IELTS_500_PACKS,
  IELTS_500_WORDS,
  SPELLING_500_EXERCISES,
  SYNONYM_500_EXERCISES,
};
export type { IELTS500Pack, IELTS500WordItem };

// Backward compatibility
export const SPELLING_PACKS = IELTS_500_PACKS;

// ================= TRACK A: 500 ESSENTIAL WORDS (SPELLING MASTERY) =================
export const SPELLING_EXERCISES: SpellingExercise[] = SPELLING_500_EXERCISES;

// ================= TRACK B: 500 ACADEMIC SYNONYMS (NO REPETITION IN WRITING) =================
export const SYNONYM_EXERCISES: SynonymDrillExercise[] = SYNONYM_500_EXERCISES;



// ================= TRACK B: GRAMMATICAL RANGE & ACCURACY =================
export const GRAMMAR_EXERCISES: GrammarDrillExercise[] = [
  {
    id: "gram-1",
    type: "grammar",
    category: "Inversion",
    baseSentence: "The temperatures rose significantly, and drought conditions also worsened.",
    targetSentence: "Not only did temperatures rise significantly, but drought conditions also worsened.",
    wordTiles: [
      "Not only",
      "did",
      "temperatures",
      "rise",
      "significantly,",
      "but",
      "drought",
      "conditions",
      "also",
      "worsened.",
    ],
    correctTileOrder: [
      "Not only",
      "did",
      "temperatures",
      "rise",
      "significantly,",
      "but",
      "drought",
      "conditions",
      "also",
      "worsened.",
    ],
    explanation:
      "Negative inversion with 'Not only' triggers auxiliary verb inversion (did + subject + base verb), creating an authoritative Band 8.5+ emphatic tone in Task 2 essays.",
    grammarRule:
      "Structure: Not only + auxiliary verb (did/do/is/have) + subject + main verb + ..., but (also) + clause.",
  },
  {
    id: "gram-2",
    type: "grammar",
    category: "Cleft Sentence",
    baseSentence: "The rapid expansion of urban sprawl challenges metropolitan infrastructure.",
    targetSentence: "What challenges metropolitan infrastructure most acutely is the rapid expansion of urban sprawl.",
    wordTiles: [
      "What",
      "challenges",
      "metropolitan",
      "infrastructure",
      "most acutely",
      "is",
      "the rapid expansion",
      "of urban sprawl.",
    ],
    correctTileOrder: [
      "What",
      "challenges",
      "metropolitan",
      "infrastructure",
      "most acutely",
      "is",
      "the rapid expansion",
      "of urban sprawl.",
    ],
    explanation:
      "Wh-cleft sentences focus the reader's attention on the key subject or finding, demonstrating advanced grammatical flexibility for Band 8+ Grammatical Range & Accuracy.",
    grammarRule: "Structure: What + clause + is/was + emphasized noun phrase.",
  },
  {
    id: "gram-3",
    type: "grammar",
    category: "Complex Conditional",
    baseSentence: "If local authorities had invested in renewable grids, emissions would have dropped.",
    targetSentence: "Had local authorities invested in renewable grids, carbon emissions would have dropped dramatically.",
    wordTiles: [
      "Had",
      "local authorities",
      "invested",
      "in renewable grids,",
      "carbon emissions",
      "would have",
      "dropped",
      "dramatically.",
    ],
    correctTileOrder: [
      "Had",
      "local authorities",
      "invested",
      "in renewable grids,",
      "carbon emissions",
      "would have",
      "dropped",
      "dramatically.",
    ],
    explanation:
      "Inversion in the third conditional eliminates 'if' and frontloads the auxiliary 'Had', which is highly regarded by Cambridge examiners for academic formality.",
    grammarRule:
      "Structure: Had + subject + past participle (V3), subject + would have + past participle.",
  },
  {
    id: "gram-4",
    type: "grammar",
    category: "Passive Voice",
    baseSentence: "Many sociologists argue that screen addiction reduces youth empathy.",
    targetSentence: "It is widely contended that youth empathy is undermined by pervasive screen addiction.",
    wordTiles: [
      "It is widely",
      "contended that",
      "youth empathy",
      "is undermined",
      "by",
      "pervasive",
      "screen addiction.",
    ],
    correctTileOrder: [
      "It is widely",
      "contended that",
      "youth empathy",
      "is undermined",
      "by",
      "pervasive",
      "screen addiction.",
    ],
    explanation:
      "Impersonal passive reporting structures ('It is widely contended/asserted that...') depersonalize arguments and satisfy Academic Writing objective style conventions.",
    grammarRule:
      "Structure: It is + [adverb] + [past participle of reporting verb] (acknowledged/claimed/contended) + that-clause.",
  },
  {
    id: "gram-5",
    type: "grammar",
    category: "Inversion",
    baseSentence: "Governments should under no circumstances subsidize fossil fuels.",
    targetSentence: "Under no circumstances should governments subsidize ecologically damaging fossil fuels.",
    wordTiles: [
      "Under no circumstances",
      "should",
      "governments",
      "subsidize",
      "ecologically damaging",
      "fossil fuels.",
    ],
    correctTileOrder: [
      "Under no circumstances",
      "should",
      "governments",
      "subsidize",
      "ecologically damaging",
      "fossil fuels.",
    ],
    explanation:
      "Fronting a limiting prepositional phrase ('Under no circumstances', 'Seldom', 'Scarcely') forces subject-auxiliary inversion ('should governments subsidize').",
    grammarRule:
      "Structure: Negative adverbial phrase + modal/auxiliary verb + subject + bare infinitive.",
  },
];

// ================= TRACK C: PARAPHRASE MASTER =================
export const PARAPHRASE_EXERCISES: ParaphraseExercise[] = [
  {
    id: "para-1",
    type: "paraphrase",
    taskType: "Task 1",
    originalPrompt:
      "The line graph shows the consumption of fish and different kinds of meat in a European country between 1979 and 2004.",
    options: [
      {
        id: "p1-opt1",
        text: "The line graph demonstrates how much fish and various varieties of meat were consumed in a particular European nation over a 25-year period from 1979 to 2004.",
        bandRating: "Band 8.5+",
        isBest: true,
        feedback:
          "Exceptional paraphrase: changes 'shows' -> 'demonstrates', transforms nominal 'consumption' into passive verb clause 'were consumed', and groups 'between 1979 and 2004' into 'over a 25-year period'.",
      },
      {
        id: "p1-opt2",
        text: "The graph displays the consumption of seafood and various meats in one European territory between the years 1979 and 2004.",
        bandRating: "Band 7",
        isBest: false,
        feedback:
          "Good vocabulary, but maintains the exact same noun-phrase grammatical structure ('the consumption of...') rather than transforming syntax.",
      },
      {
        id: "p1-opt3",
        text: "The given line graph shows the amount of fish and meat that people ate in Europe from 1979 to 2004.",
        bandRating: "Band 6",
        isBest: false,
        feedback:
          "Too informal ('that people ate') and overgeneralizes 'a European country' into the whole of Europe.",
      },
    ],
    keySynonymMap: {
      shows: ["illustrates", "delineates", "demonstrates", "depicts"],
      consumption: ["intake", "expenditure", "utilization"],
      "different kinds of": ["various categories of", "multiple varieties of"],
      "between 1979 and 2004": ["over a 25-year span", "over a quarter of a century"],
    },
    explanation:
      "Band 8+ Task 1 introductions achieve excellence by altering both lexical choices (synonyms) AND syntactic structures (nominalization to verbal passive clauses).",
  },
  {
    id: "para-2",
    type: "paraphrase",
    taskType: "Task 2",
    originalPrompt:
      "Some people think that universities should provide graduates with the knowledge and skills needed in the workplace, while others think that the true function of a university should be to give access to knowledge for its own sake.",
    options: [
      {
        id: "p2-opt1",
        text: "While a faction contends that tertiary institutions ought to prioritize vocational competencies tailored to corporate demands, others maintain that higher education must primarily serve as a pursuit of erudition in its own right.",
        bandRating: "Band 8.5+",
        isBest: true,
        feedback:
          "Masterful academic vocabulary: 'tertiary institutions' for universities, 'vocational competencies' for skills needed in workplace, and 'pursuit of erudition in its own right' for knowledge for its own sake.",
      },
      {
        id: "p2-opt2",
        text: "Some people believe colleges must teach job skills for working life, whereas other citizens argue universities should simply offer pure academic learning.",
        bandRating: "Band 7",
        isBest: false,
        feedback:
          "Accurate and clear, but utilizes simpler collocations ('job skills', 'working life', 'other citizens').",
      },
      {
        id: "p2-opt3",
        text: "It is considered by some that university must give skills for work, but other individuals say that knowledge itself is the main point of university.",
        bandRating: "Band 6",
        isBest: false,
        feedback:
          "Clunky phrasing with repetitive use of 'university' and basic diction ('give skills for work', 'main point').",
      },
    ],
    keySynonymMap: {
      universities: ["tertiary institutions", "higher education establishments", "academies"],
      "knowledge and skills": ["vocational proficiencies", "professional competencies"],
      "workplace": ["labor market", "contemporary job sector"],
      "for its own sake": ["as an intrinsic good", "in its own right"],
    },
    explanation:
      "Paraphrasing Task 2 prompts requires keeping the balanced contrast intact while replacing mundane everyday phrases with academic collocations.",
  },
  {
    id: "para-3",
    type: "paraphrase",
    taskType: "Task 1",
    originalPrompt:
      "The bar chart compares the percentage of renewable energy generated in four different countries between 2010 and 2020.",
    options: [
      {
        id: "p3-opt1",
        text: "The bar chart elucidates the proportion of electricity derived from sustainable sources across a quartet of nations over a ten-year timeframe commencing in 2010.",
        bandRating: "Band 8.5+",
        isBest: true,
        feedback:
          "Superb Band 8.5+ transformation: 'percentage' -> 'proportion', 'renewable energy' -> 'electricity derived from sustainable sources', 'four different countries' -> 'a quartet of nations', 'between 2010 and 2020' -> 'over a ten-year timeframe commencing in 2010'.",
      },
      {
        id: "p3-opt2",
        text: "The chart compares how much green power was made in 4 countries from 2010 to 2020.",
        bandRating: "Band 6",
        isBest: false,
        feedback:
          "Too casual: uses digit '4' instead of 'four', and 'green power was made' lacks academic tone.",
      },
      {
        id: "p3-opt3",
        text: "The diagram provides information on the share of clean energy produced in four distinct territories across a 10-year period.",
        bandRating: "Band 7",
        isBest: false,
        feedback:
          "Good, but misses specifying the timeframe endpoints (2010-2020) which are vital for Task 1 accuracy.",
      },
    ],
    keySynonymMap: {
      compares: ["elucidates", "provides a comparative analysis of", "juxtaposes"],
      percentage: ["proportion", "ratio", "share"],
      "renewable energy": ["sustainable sources", "clean power", "green alternatives"],
      generated: ["produced", "harnessed", "derived"],
    },
    explanation:
      "Cambridge Task 1 penalizes copying prompt words verbatim. Changing 'percentage' to 'proportion' and 'renewable' to 'sustainable sources' demonstrates Band 8+ Lexical Resource.",
  },
  {
    id: "para-4",
    type: "paraphrase",
    taskType: "Task 2",
    originalPrompt:
      "In many cities, traffic congestion is becoming a serious problem. What are the causes of this and what measures can be taken to solve it?",
    options: [
      {
        id: "p4-opt1",
        text: "In numerous metropolitan areas, severe vehicular gridlock has emerged as a grave municipal dilemma; this essay will examine its primary catalysts and propose viable remedial interventions.",
        bandRating: "Band 8.5+",
        isBest: true,
        feedback:
          "Flawless academic registers: 'traffic congestion' -> 'vehicular gridlock', 'serious problem' -> 'grave municipal dilemma', 'causes' -> 'catalysts', and 'measures to solve' -> 'viable remedial interventions'.",
      },
      {
        id: "p4-opt2",
        text: "Many towns suffer from heavy traffic jams which cause many troubles. Below I will write about why this happens and how governments can fix it.",
        bandRating: "Band 6",
        isBest: false,
        feedback:
          "Very colloquial: 'traffic jams', 'troubles', and the formulaic 'Below I will write'.",
      },
      {
        id: "p4-opt3",
        text: "Vehicular congestion is an escalating issue in multiple urban hubs. The factors behind this trend alongside potential solutions are explored in the subsequent paragraphs.",
        bandRating: "Band 7",
        isBest: false,
        feedback:
          "Solid and acceptable, but slightly generic in vocabulary ('escalating issue', 'potential solutions').",
      },
    ],
    keySynonymMap: {
      "traffic congestion": ["vehicular gridlock", "traffic bottle-necks", "automotive density"],
      "serious problem": ["pressing crisis", "acute dilemma", "grave concern"],
      causes: ["underlying catalysts", "root determinants", "driving factors"],
      measures: ["remedial interventions", "mitigation strategies", "legislative policies"],
    },
    explanation:
      "Task 2 introductory paraphrases set the examiner's initial expectation of your lexical competence. Using high-precision nouns elevates your score instantly.",
  },
];
