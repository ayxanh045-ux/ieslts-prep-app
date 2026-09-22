import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface SavedVocabularyWord {
  id: string;
  word: string;
  contextSentence: string;
  sourcePassageTitle: string;
  sourceReference: string; // e.g., "Cambridge 21, Test 1, Passage 1"
  savedAt: number; // timestamp
  mastered: boolean;
  definition?: string;
  notes?: string;
}

interface VocabularyStoreState {
  savedWords: SavedVocabularyWord[];
  passageHighlights: { [passageId: string]: string[] };

  // Word Actions
  saveWord: (params: {
    word: string;
    contextSentence: string;
    sourcePassageTitle: string;
    sourceReference: string;
    definition?: string;
  }) => void;
  removeWord: (id: string) => void;
  toggleWordMastered: (id: string) => void;
  updateWordNotes: (id: string, notes: string) => void;
  isWordSaved: (word: string) => boolean;

  // Highlight Actions
  addHighlight: (passageId: string, text: string) => void;
  removeHighlight: (passageId: string, text: string) => void;
  clearPassageHighlights: (passageId: string) => void;
  getPassageHighlights: (passageId: string) => string[];
}

export const useVocabularyStore = create<VocabularyStoreState>()(
  persist(
    (set, get) => ({
      savedWords: [
        {
          id: "seed-word-1",
          word: "phenotypic plasticity",
          contextSentence:
            "Species subjected to severe ecological pressures frequently demonstrate phenotypic plasticity, altering their metabolic expenditures in direct response to resource scarcity.",
          sourcePassageTitle: "Ecological Adaptations in Modern Frontiers",
          sourceReference: "Cambridge 21 • Test 1 • Passage 1",
          savedAt: 1710000000000,
          mastered: false,
          definition: "The ability of an organism to change its phenotype in response to changes in the environment.",
        },
        {
          id: "seed-word-2",
          word: "dorsolateral prefrontal cortex",
          contextSentence:
            "Neuroimaging indicates that individuals who actively navigate two or more linguistic systems exhibit enhanced gray-matter density in the dorsolateral prefrontal cortex.",
          sourcePassageTitle: "Cognitive Linguistics & Human Memory",
          sourceReference: "Cambridge 21 • Test 1 • Passage 3",
          savedAt: 1710043200000,
          mastered: true,
          definition: "An area in the frontal lobe of the brain associated with executive functions like working memory and cognitive flexibility.",
        },
      ],
      passageHighlights: {},

      saveWord: ({ word, contextSentence, sourcePassageTitle, sourceReference, definition }) => {
        const cleanWord = word.trim().toLowerCase();
        if (!cleanWord) return;

        set((state) => {
          // Avoid exact duplicates
          const existing = state.savedWords.find(
            (w) => w.word.toLowerCase() === cleanWord
          );
          if (existing) return state;

          const newEntry: SavedVocabularyWord = {
            id: `vocab-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
            word: cleanWord,
            contextSentence: contextSentence.trim(),
            sourcePassageTitle,
            sourceReference,
            savedAt: Date.now(),
            mastered: false,
            definition,
          };

          return {
            savedWords: [newEntry, ...state.savedWords],
          };
        });
      },

      removeWord: (id) => {
        set((state) => ({
          savedWords: state.savedWords.filter((w) => w.id !== id),
        }));
      },

      toggleWordMastered: (id) => {
        set((state) => ({
          savedWords: state.savedWords.map((w) =>
            w.id === id ? { ...w, mastered: !w.mastered } : w
          ),
        }));
      },

      updateWordNotes: (id, notes) => {
        set((state) => ({
          savedWords: state.savedWords.map((w) =>
            w.id === id ? { ...w, notes } : w
          ),
        }));
      },

      isWordSaved: (word) => {
        const cleanWord = word.trim().toLowerCase();
        return get().savedWords.some((w) => w.word.toLowerCase() === cleanWord);
      },

      addHighlight: (passageId, text) => {
        const cleanText = text.trim();
        if (!cleanText || cleanText.length < 2) return;

        set((state) => {
          const current = state.passageHighlights[passageId] || [];
          if (current.includes(cleanText)) return state;
          return {
            passageHighlights: {
              ...state.passageHighlights,
              [passageId]: [...current, cleanText],
            },
          };
        });
      },

      removeHighlight: (passageId, text) => {
        const cleanText = text.trim();
        set((state) => {
          const current = state.passageHighlights[passageId] || [];
          return {
            passageHighlights: {
              ...state.passageHighlights,
              [passageId]: current.filter((h) => h !== cleanText),
            },
          };
        });
      },

      clearPassageHighlights: (passageId) => {
        set((state) => ({
          passageHighlights: {
            ...state.passageHighlights,
            [passageId]: [],
          },
        }));
      },

      getPassageHighlights: (passageId) => {
        return get().passageHighlights[passageId] || [];
      },
    }),
    {
      name: "ieltslingo-vocabulary-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
