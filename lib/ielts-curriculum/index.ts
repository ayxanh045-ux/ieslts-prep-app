import { LessonTrack, ReadingPassageChunk, ListeningChunk } from "@/types/curriculum";
import { READING_PASSAGES as BASE_READING_PASSAGES } from "./reading-passages";
import { LISTENING_CHUNKS as BASE_LISTENING_CHUNKS } from "./listening-chunks";
import {
  CAMBRIDGE_1_TO_21_READING_PASSAGES,
  CAMBRIDGE_1_TO_21_LISTENING_CHUNKS,
  CAMBRIDGE_1_TO_21_MICRO_TRACKS,
} from "./cambridge-micro-practice";
import { cambridgeFullTreeEngine } from "./cambridge-full-tree-engine";

export * from "./reading-passages";
export * from "./writing-drills";
export * from "./listening-chunks";
export * from "./cambridge-micro-practice";
export * from "./cambridge-full-tree-engine";
export * from "./paraphrase-lexicon-data";

// Unified reading passages pool
export const COMBINED_READING_PASSAGES: ReadingPassageChunk[] = [
  ...BASE_READING_PASSAGES,
  ...CAMBRIDGE_1_TO_21_READING_PASSAGES,
];

// Unified listening chunks pool
export const COMBINED_LISTENING_CHUNKS: ListeningChunk[] = [
  ...BASE_LISTENING_CHUNKS,
  ...CAMBRIDGE_1_TO_21_LISTENING_CHUNKS,
];

export const ALL_LESSON_TRACKS: LessonTrack[] = [
  ...CAMBRIDGE_1_TO_21_MICRO_TRACKS,
];

export function getTrackById(id: string): LessonTrack | undefined {
  const existing = ALL_LESSON_TRACKS.find((t) => t.id === id);
  if (existing) return existing;
  return cambridgeFullTreeEngine.getLessonTrack(id);
}

export function getReadingPassageById(id: string): ReadingPassageChunk | undefined {
  const existing = COMBINED_READING_PASSAGES.find((p) => p.id === id);
  if (existing) return existing;
  return cambridgeFullTreeEngine.getReadingChunkById(id);
}

export function getListeningChunkById(id: string): ListeningChunk | undefined {
  const existing = COMBINED_LISTENING_CHUNKS.find((c) => c.id === id);
  if (existing) return existing;
  return cambridgeFullTreeEngine.getListeningChunkById(id);
}


