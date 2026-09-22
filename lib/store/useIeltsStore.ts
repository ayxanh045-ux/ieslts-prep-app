import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ModuleType } from "@/types/curriculum";

interface IeltsStoreState {
  streak: number;
  lastActiveDate: string | null;
  xp: number;
  completedTrackIds: string[];
  completedExerciseIds: string[];
  lastPackProgress: { [key: string]: number };
  moduleAccuracy: {
    reading: { correct: number; total: number };
    writing: { correct: number; total: number };
    listening: { correct: number; total: number };
  };
  soundEnabled: boolean;

  // Actions
  recordAttempt: (module: ModuleType, isCorrect: boolean) => void;
  completeTrack: (trackId: string, module: ModuleType, xpGained: number) => void;
  toggleSound: () => void;
  getEstimatedBand: () => number;
  isTrackCompleted: (trackId: string) => boolean;
  markExerciseCompleted: (exerciseId: string) => void;
  isExerciseCompleted: (exerciseId: string) => boolean;
  setPackProgress: (trackId: string, packId: string, questionIndex: number) => void;
  getPackProgress: (trackId: string, packId: string) => number;
}

export const useIeltsStore = create<IeltsStoreState>()(
  persist(
    (set, get) => ({
      streak: 4,
      lastActiveDate: new Date().toISOString().split("T")[0],
      xp: 420,
      completedTrackIds: ["reading-1"],
      completedExerciseIds: [],
      lastPackProgress: {},
      moduleAccuracy: {
        reading: { correct: 9, total: 10 },
        writing: { correct: 14, total: 16 },
        listening: { correct: 8, total: 9 },
      },
      soundEnabled: true,


      recordAttempt: (module, isCorrect) => {
        set((state) => {
          const current = state.moduleAccuracy[module];
          return {
            moduleAccuracy: {
              ...state.moduleAccuracy,
              [module]: {
                correct: current.correct + (isCorrect ? 1 : 0),
                total: current.total + 1,
              },
            },
          };
        });
      },

      completeTrack: (trackId, module, xpGained) => {
        const today = new Date().toISOString().split("T")[0];
        set((state) => {
          const alreadyDone = state.completedTrackIds.includes(trackId);
          const newCompleted = alreadyDone
            ? state.completedTrackIds
            : [...state.completedTrackIds, trackId];

          let newStreak = state.streak;
          if (state.lastActiveDate !== today) {
            newStreak = state.streak + 1;
          }

          return {
            xp: state.xp + xpGained,
            completedTrackIds: newCompleted,
            streak: newStreak,
            lastActiveDate: today,
          };
        });
      },

      toggleSound: () => {
        set((state) => ({ soundEnabled: !state.soundEnabled }));
      },

      getEstimatedBand: () => {
        const { moduleAccuracy } = get();
        let totalPct = 0;
        let countedModules = 0;

        (Object.keys(moduleAccuracy) as ModuleType[]).forEach((mod) => {
          const stats = moduleAccuracy[mod];
          if (stats.total > 0) {
            totalPct += stats.correct / stats.total;
            countedModules++;
          }
        });

        if (countedModules === 0) return 6.5; // Baseline starting score

        const avgPct = totalPct / countedModules;
        // IELTS Band mapping: 90%+ = 8.5, 80%+ = 7.5, 70%+ = 7.0, 60%+ = 6.5, 50%+ = 6.0
        const rawBand = 5.0 + avgPct * 4.0;
        // Round to nearest 0.5 according to official IELTS rules
        return Math.min(9.0, Math.max(5.0, Math.round(rawBand * 2) / 2));

      },

      isTrackCompleted: (trackId) => {
        const list = get().completedTrackIds;
        return Array.isArray(list) ? list.includes(trackId) : false;
      },

      markExerciseCompleted: (exerciseId) => {
        set((state) => {
          const list = Array.isArray(state.completedExerciseIds) ? state.completedExerciseIds : [];
          if (list.includes(exerciseId)) return state;
          return { completedExerciseIds: [...list, exerciseId] };
        });
      },

      isExerciseCompleted: (exerciseId) => {
        const list = get().completedExerciseIds;
        return Array.isArray(list) ? list.includes(exerciseId) : false;
      },

      setPackProgress: (trackId, packId, questionIndex) => {
        set((state) => ({
          lastPackProgress: {
            ...(state.lastPackProgress || {}),
            [`${trackId}:${packId}`]: questionIndex,
          },
        }));
      },

      getPackProgress: (trackId, packId) => {
        const progressMap = get().lastPackProgress || {};
        return progressMap[`${trackId}:${packId}`] ?? 0;
      },
    }),
    {
      name: "ielts-lingo-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
