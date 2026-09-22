import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface MistakeItem {
  id: string; // e.g. "spell-500-1" or "syn-500-1"
  type: "spelling" | "synonym";
  targetWord: string;
  azerbaijaniMeaning?: string;
  definition: string;
  userAnswer: string; // The incorrect answer the user entered
  correctAnswer: string;
  contextSentenceWithBlank: string;
  explanation: string;
  // Specific to spelling
  ipa?: string;
  audioPromptText?: string;
  misspellingTraps?: string[];
  cambridgeRule?: string;
  synonyms?: string[];
  // Specific to synonym
  commonOverusedWord?: string;
  correctSynonyms?: string[];
  options?: string[];
  // Metadata
  mistakeCount: number;
  lastAttemptAt: number;
  resolved: boolean;
}

interface MistakesStoreState {
  mistakes: MistakeItem[];

  recordMistake: (
    item: Omit<MistakeItem, "mistakeCount" | "lastAttemptAt" | "resolved">
  ) => void;
  resolveMistake: (id: string) => void;
  removeMistake: (id: string) => void;
  clearResolvedMistakes: () => void;
  clearAllMistakes: () => void;
  getUnresolvedCount: () => number;
}

export const useMistakesStore = create<MistakesStoreState>()(
  persist(
    (set, get) => ({
      mistakes: [],

      recordMistake: (item) => {
        set((state) => {
          const currentMistakes = Array.isArray(state.mistakes) ? state.mistakes : [];
          const existingIndex = currentMistakes.findIndex(
            (m) => m.id === item.id || m.targetWord.toLowerCase() === item.targetWord.toLowerCase()
          );

          if (existingIndex >= 0) {
            const updated = [...currentMistakes];
            const prev = updated[existingIndex];
            updated[existingIndex] = {
              ...prev,
              ...item,
              mistakeCount: prev.mistakeCount + 1,
              userAnswer: item.userAnswer || prev.userAnswer,
              lastAttemptAt: Date.now(),
              resolved: false,
            };
            return { mistakes: updated };
          }

          const newMistake: MistakeItem = {
            ...item,
            mistakeCount: 1,
            lastAttemptAt: Date.now(),
            resolved: false,
          };

          return { mistakes: [newMistake, ...currentMistakes] };
        });
      },

      resolveMistake: (id) => {
        set((state) => ({
          mistakes: (Array.isArray(state.mistakes) ? state.mistakes : []).map((m) =>
            m.id === id ? { ...m, resolved: true } : m
          ),
        }));
      },

      removeMistake: (id) => {
        set((state) => ({
          mistakes: (Array.isArray(state.mistakes) ? state.mistakes : []).filter((m) => m.id !== id),
        }));
      },

      clearResolvedMistakes: () => {
        set((state) => ({
          mistakes: (Array.isArray(state.mistakes) ? state.mistakes : []).filter((m) => !m.resolved),
        }));
      },

      clearAllMistakes: () => {
        set({ mistakes: [] });
      },

      getUnresolvedCount: () => {
        const list = get().mistakes;
        return Array.isArray(list) ? list.filter((m) => !m.resolved).length : 0;
      },
    }),
    {
      name: "ielts-mistakes-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
