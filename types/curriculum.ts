export type ModuleType = "reading" | "writing" | "listening";

export interface CambridgeReference {
  book: number;
  test: number;
  section: number;
  title: string;
}

// ================= READING TYPES =================
export type ReadingQuestionType = "tfng" | "matching_heading" | "sentence_completion";

export interface ReadingQuestion {
  id: string;
  type: ReadingQuestionType;
  prompt: string;
  options?: string[]; // for matching headings or multiple choice
  correctAnswer: string; // "TRUE" | "FALSE" | "NOT GIVEN" or heading letter or exact word
  acceptableAnswers?: string[]; // for sentence completion variations
  explanation: string;
  proofQuote: string; // Exact sentence in the paragraph
  cambridgeTip: string;
}

export interface ReadingPassageChunk {
  id: string;
  title: string;
  paragraphLabel: string; // e.g. "Paragraph B"
  source: CambridgeReference;
  paragraphText: string;
  wordCount: number;
  difficulty: "Band 6.0-6.5" | "Band 6.5-7.0" | "Band 7.0-7.5" | "Band 7.5-8.0" | "Band 8.0-9.0";
  questions: ReadingQuestion[];
}


// ================= WRITING TYPES =================
export type WritingTrackType = "spelling" | "synonym" | "grammar_inversion" | "grammar_cleft" | "paraphrase";

export interface SpellingExercise {
  id: string;
  type: "spelling";
  targetWord: string;
  ipa: string;
  definition: string;
  azerbaijaniMeaning?: string;
  synonyms?: string[];
  contextSentenceWithBlank: string;
  misspellingTraps: string[]; // e.g. ["accommodate", "acommodate", "accomodate"]
  audioPromptText: string;
  explanation: string;
  cambridgeFrequency: "Extremely High" | "High";
  category?: string;
  cambridgeRule?: string;
}

export interface SynonymDrillExercise {
  id: string;
  type: "synonym";
  targetWord: string;
  azerbaijaniMeaning: string;
  definition: string;
  commonOverusedWord: string; // The repetitive Band 5-6 word to replace (e.g. "big", "important", "decrease")
  contextSentenceWithBlank: string;
  correctSynonyms: string[];
  options: string[]; // 4 choices
  correctAnswer: string;
  explanation: string;
  category?: string;
}

export interface GrammarDrillExercise {
  id: string;
  type: "grammar";
  category: "Inversion" | "Cleft Sentence" | "Complex Conditional" | "Passive Voice";
  baseSentence: string; // The simple Band 6 sentence
  targetSentence: string; // The Band 8-9 complex version
  wordTiles: string[]; // Scrambled tiles for Parsons puzzle
  correctTileOrder: string[];
  explanation: string;
  grammarRule: string;
}

export interface ParaphraseExercise {
  id: string;
  type: "paraphrase";
  taskType: "Task 1" | "Task 2";
  originalPrompt: string; // e.g., "The chart shows the amount of waste produced by three companies..."
  options: {
    id: string;
    text: string;
    bandRating: "Band 6" | "Band 7" | "Band 8.5+";
    isBest: boolean;
    feedback: string;
  }[];
  keySynonymMap: { [original: string]: string[] };
  explanation: string;
}

// ================= LISTENING TYPES =================
export type ListeningQuestionType = "note_completion" | "multiple_choice" | "map_labelling";

export interface ListeningQuestion {
  id: string;
  questionNumber: number;
  type: ListeningQuestionType;
  prompt: string;
  options?: string[];
  correctAnswer: string;
  acceptableAnswers?: string[];
  transcriptTimestamp: string; // e.g. "0:42"
  audioTimestampSeconds?: number; // Exact second in audio where clue is spoken (e.g. 24)
  proofQuote: string;
  distractorTrapExplanation: string;
}

export interface ListeningChunk {
  id: string;
  title: string;
  part: 1 | 2 | 3 | 4;
  source: CambridgeReference;
  contextDescription: string;
  speakerAccent: "British" | "Australian" | "North American";
  prepTimeSeconds: number; // usually 30s
  durationSeconds: number; // 45-75s
  audioScript: string;
  audioUrl?: string; // Direct link to authentic Cambridge IELTS MP3 recording
  segmentStartTime?: number; // Start offset in seconds for this chunk in official recording
  segmentEndTime?: number; // End offset in seconds for this chunk
  questions: ListeningQuestion[];
}

// ================= FULL EXAM TYPES =================
export interface FullExamQuestion {
  id: string;
  questionNumber: number; // 1 to 40
  type: "multiple_choice" | "tfng" | "sentence_completion" | "note_completion" | "matching_heading";
  prompt: string;
  options?: string[];
  correctAnswer: string;
  acceptableAnswers?: string[];
  explanation?: string;
  proofQuote?: string;
}

export interface FullReadingPassage {
  passageNumber: 1 | 2 | 3;
  title: string;
  subtitle?: string;
  text: string;
  questions: FullExamQuestion[];
}

export interface FullReadingExam {
  id: string;
  book: number;
  test: number;
  title: string;
  durationMinutes: number; // 60
  passages: FullReadingPassage[]; // 3 passages with 40 questions total
}

export interface FullListeningSection {
  sectionNumber: 1 | 2 | 3 | 4;
  title: string;
  contextDescription: string;
  audioScript: string;
  audioUrl?: string; // Direct link to authentic Cambridge IELTS MP3 recording
  questions: FullExamQuestion[];
}

export interface FullListeningExam {
  id: string;
  book: number;
  test: number;
  title: string;
  durationMinutes: number; // 35-40
  sections: FullListeningSection[]; // 4 sections with 40 questions total
}

export interface FullWritingExam {
  id: string;
  book: number;
  test: number;
  title: string;
  task1: {
    title: string;
    prompt: string;
    graphicDescription: string;
    minWords: number;
    recommendedMinutes: number;
    modelAnswerBand9: string;
    examinerAnalysis: string;
  };
  task2: {
    title: string;
    prompt: string;
    essayType: "Opinion / Agree-Disagree" | "Discussion" | "Problem-Solution" | "Double Question";
    minWords: number;
    recommendedMinutes: number;
    modelAnswerBand9: string;
    examinerAnalysis: string;
  };
}

export interface CambridgeBookOverview {
  bookNumber: number;
  year: number;
  title: string;
  tests: {
    testNumber: number;
    hasFullReading: boolean;
    hasFullListening: boolean;
    hasFullWriting: boolean;
    themes: string[];
  }[];
}

// ================= UNIFIED DRILL / LESSON =================
export interface LessonTrack {
  id: string;
  title: string;
  module: ModuleType;
  subtitle: string;
  estimatedMinutes: number;
  xpReward: number;
  difficulty: "Foundation (5.5-6.5)" | "Advanced (7.0-8.0)" | "Mastery (8.5-9.0)";
  cambridgeReference: string;
  description: string;
  bookNumber?: number; // Cambridge Book 1 to 21
}


