"use client";

import { useState, useMemo, useEffect } from "react";
import { SpellingExercise } from "@/types/curriculum";
import { soundEngine } from "@/lib/audio/sound-effects";
import { Volume2, Bookmark, BookmarkCheck, Eye, EyeOff } from "lucide-react";
import { useVocabularyStore } from "@/lib/store/useVocabularyStore";

interface SpellingInputProps {
  exercise: SpellingExercise;
  userAnswer: string;
  onAnswerChange: (val: string) => void;
  status: "idle" | "correct" | "incorrect";
}

export function SpellingInput({
  exercise,
  userAnswer,
  onAnswerChange,
  status,
}: SpellingInputProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);

  // Reset hint visibility whenever a new word is loaded
  useEffect(() => {
    setShowHint(false);
  }, [exercise.id]);

  const { isWordSaved, saveWord, removeWord, savedWords } = useVocabularyStore();
  const saved = isWordSaved(exercise.targetWord);

  const playAudio = () => {
    setIsPlayingAudio(true);
    // Speak only the target word itself, not the full context sentence
    soundEngine.speak(exercise.targetWord, "British", () => {
      setIsPlayingAudio(false);
    });
  };

  const handleToggleSave = () => {
    if (saved) {
      const match = savedWords.find(
        (w) => w.word.toLowerCase() === exercise.targetWord.toLowerCase()
      );
      if (match) removeWord(match.id);
      showToast("Removed from Vocabulary Notebook");
    } else {
      saveWord({
        word: exercise.targetWord,
        contextSentence: exercise.contextSentenceWithBlank.replace("______________", exercise.targetWord),
        sourcePassageTitle: "Cambridge Academic Spelling Drills",
        sourceReference: "IELTS Writing Core Lexicon",
        definition: exercise.definition,
      });
      showToast("Saved to Vocabulary Notebook (+10 XP)");
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Memoize randomized choices per exercise to prevent re-shuffling while typing
  const choices = useMemo(() => {
    return [exercise.targetWord, ...exercise.misspellingTraps].sort(
      () => 0.5 - Math.random()
    );
  }, [exercise.targetWord, exercise.misspellingTraps]);


  return (
    <div className="mx-auto max-w-2xl flex flex-col gap-6 rounded-3xl border-2 border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="rounded-xl bg-orange-100 px-3 py-1 text-xs font-black text-amber-800 uppercase tracking-wide">
            Track A • Academic Spelling
          </span>
          <span className="text-xs font-bold text-gray-400">
            Penalized Trap in Cambridge Writing
          </span>
        </div>
        <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-bold text-red-600">
          {exercise.cambridgeFrequency} Trap
        </span>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="flex items-center justify-center rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-lg animate-in fade-in slide-in-from-top duration-200">
          {toastMessage}
        </div>
      )}

      {/* Audio Pronunciation & Word Action Box */}
      <div className="flex flex-col gap-4 rounded-2xl bg-amber-50/70 p-4 sm:p-5 border border-amber-200/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <button
              onClick={playAudio}
              className={`btn-3d flex h-14 w-14 items-center justify-center rounded-2xl bg-lingo-blue text-white shadow-lingo-blue transition-transform hover:scale-105 shrink-0 ${
                isPlayingAudio ? "animate-pulse" : ""
              }`}
              title="Listen to British Pronunciation"
            >
              <Volume2 className="h-7 w-7" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-extrabold text-gray-900">
                  Click to Listen
                </span>
                {exercise.ipa && (
                  showHint ? (
                    <span className="font-mono text-xs font-bold text-gray-600 bg-amber-100/60 px-2 py-0.5 rounded-md animate-in fade-in">
                      {exercise.ipa}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowHint(true)}
                      className="text-[11px] font-bold text-gray-400 hover:text-amber-800 bg-white/80 border border-amber-200/80 px-2 py-0.5 rounded-md transition-colors"
                      title="Tələffüz transkripsiyasını göstər"
                    >
                      [Tələffüzü göstər]
                    </button>
                  )
                )}
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-snug">
                <span className="font-bold text-gray-700">English Definition: </span>
                {exercise.definition}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleToggleSave}
            className={`btn-3d flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all shrink-0 self-end sm:self-center ${
              saved
                ? "bg-amber-100 text-amber-900 border border-amber-300"
                : "bg-white text-gray-700 border border-amber-200 hover:bg-amber-50"
            }`}
            title="Save this word to your Vocabulary Notebook for revision"
          >
            {saved ? (
              <>
                <BookmarkCheck className="h-4 w-4 text-amber-600 fill-amber-500" />
                <span>Saved Word</span>
              </>
            ) : (
              <>
                <Bookmark className="h-4 w-4 text-amber-600" />
                <span>Save Word</span>
              </>
            )}
          </button>
        </div>

        {/* Azerbaijani Meaning & Academic Synonyms */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-amber-200/70">
          {exercise.azerbaijaniMeaning && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-100/90 border border-emerald-200 px-2.5 py-1 text-xs font-black text-emerald-900">
                🇦🇿 Məna:
              </span>
              <span className="text-sm font-bold text-gray-900">
                {exercise.azerbaijaniMeaning}
              </span>
            </div>
          )}

          {exercise.synonyms && exercise.synonyms.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Sinonimlər:
              </span>
              {exercise.synonyms.map((syn, idx) => (
                <span
                  key={idx}
                  className="rounded-lg bg-white border border-amber-300 px-2 py-0.5 text-xs font-semibold text-gray-800 shadow-2xs"
                >
                  {syn}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Cambridge Memory Rule if available (Hidden by default to prevent giving away spelling) */}
        {exercise.cambridgeRule && showHint && (
          <div className="rounded-xl bg-amber-100/60 px-3 py-1.5 text-xs font-semibold text-amber-900 border border-amber-200/60 animate-in fade-in">
            <span className="font-black">Cambridge Rule: </span>
            {exercise.cambridgeRule}
          </div>
        )}
      </div>

      {/* Context Sentence */}
      <div className="rounded-2xl bg-gray-50 p-4 border border-gray-100">
        <span className="text-xs font-black uppercase tracking-wider text-gray-400 block mb-1">
          Cambridge Context Sentence
        </span>
        <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed font-serif">
          {exercise.contextSentenceWithBlank}
        </p>
      </div>

      {/* Interactive Input or Selection */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-gray-700 flex items-center justify-between">
          <span>Type the correct Cambridge spelling:</span>
          <span className="text-xs font-normal text-gray-400">Exact letters required</span>
        </label>

        <div className="relative">
          <input
            type="text"
            disabled={status !== "idle"}
            value={userAnswer}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="Type word here..."
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck="false"
            className="w-full rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-xl font-bold tracking-wide text-gray-900 placeholder-gray-400 outline-none focus:border-lingo-blue focus:ring-4 focus:ring-lingo-blue/10 transition-all shadow-sm"
          />
        </div>

        {/* Hint & Variation Toggle */}
        <div className="mt-1 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowHint((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-amber-50 hover:border-amber-300 px-3 py-1.5 text-xs font-bold text-gray-600 hover:text-amber-900 transition-all"
          >
            {showHint ? (
              <>
                <EyeOff className="h-3.5 w-3.5 text-gray-500" />
                <span>İpucu və Seçimləri Gizlət</span>
              </>
            ) : (
              <>
                <Eye className="h-3.5 w-3.5 text-amber-600" />
                <span>Köməkçi Seçimləri və İpucunu Göstər</span>
              </>
            )}
          </button>
          <span className="text-[11px] text-gray-400">
            {showHint ? "İpucu aktivdir" : "Kopya olmasın deyə gizlədilib"}
          </span>
        </div>

        {/* Quick-select chips if user explicitly wants hints */}
        {showHint && (
          <div className="mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
            <span className="text-xs font-bold text-gray-400 block mb-2">
              Seçimlərdən düzgün variantı tapın:
            </span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {choices.map((trapWord) => (
                <button
                  key={trapWord}
                  disabled={status !== "idle"}
                  onClick={() => {
                    soundEngine.playTileClick();
                    onAnswerChange(trapWord);
                  }}
                  className={`btn-3d rounded-xl border-2 px-3 py-2 text-xs sm:text-sm font-bold transition-all ${
                    userAnswer.toLowerCase() === trapWord.toLowerCase()
                      ? "border-lingo-blue bg-lingo-blue-light/60 text-lingo-blue-dark shadow-lingo-blue"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 shadow-lingo-gray"
                  }`}
                >
                  {trapWord}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
