"use client";

import { useState } from "react";
import { SynonymDrillExercise } from "@/types/curriculum";
import { soundEngine } from "@/lib/audio/sound-effects";
import { Volume2, Bookmark, BookmarkCheck, ArrowRight, Sparkles } from "lucide-react";
import { useVocabularyStore } from "@/lib/store/useVocabularyStore";

interface SynonymDrillProps {
  exercise: SynonymDrillExercise;
  selectedAnswer: string;
  onSelectAnswer: (val: string) => void;
  status: "idle" | "correct" | "incorrect";
}

export function SynonymDrill({
  exercise,
  selectedAnswer,
  onSelectAnswer,
  status,
}: SynonymDrillProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { isWordSaved, saveWord, removeWord, savedWords } = useVocabularyStore();
  const saved = isWordSaved(exercise.targetWord);

  const playAudio = () => {
    setIsPlayingAudio(true);
    soundEngine.speak(
      `${exercise.targetWord}. ${exercise.contextSentenceWithBlank.replace("______________", exercise.targetWord)}`,
      "British",
      () => {
        setIsPlayingAudio(false);
      }
    );
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
        sourcePassageTitle: "500 Academic Synonyms (No Repetition)",
        sourceReference: "IELTS Writing Lexical Upgrades",
        definition: exercise.definition,
      });
      showToast("Saved to Vocabulary Notebook (+10 XP)");
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="mx-auto max-w-2xl flex flex-col gap-6 rounded-3xl border-2 border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Header Badges */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="rounded-xl bg-purple-100 px-3 py-1 text-xs font-black text-purple-900 uppercase tracking-wide">
            Track B • Lexical Upgrade
          </span>
          <span className="text-xs font-bold text-gray-500 hidden sm:inline">
            Avoid Repetition in Task 1 & 2
          </span>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-black text-emerald-700 border border-emerald-200 flex items-center gap-1">
          <Sparkles className="h-3 w-3" />
          Band 8.0+ Lexis
        </span>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="flex items-center justify-center rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white shadow-lg animate-in fade-in slide-in-from-top duration-200">
          {toastMessage}
        </div>
      )}

      {/* Overused Repetitive Word vs Academic Upgrade Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-red-50 via-amber-50 to-emerald-50 p-4 sm:p-5 border border-amber-200/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-amber-200/60">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block">
              Repeated / Overused Word to Avoid:
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-lg sm:text-xl font-black text-red-700 line-through decoration-red-400">
                &ldquo;{exercise.commonOverusedWord}&rdquo;
              </span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-md">
                Find Academic Synonym
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={playAudio}
              className={`btn-3d flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lingo-purple transition-transform hover:scale-105 shrink-0 ${
                isPlayingAudio ? "animate-pulse" : ""
              }`}
              title="Listen to Target Word Pronunciation"
            >
              <Volume2 className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleToggleSave}
              className={`btn-3d flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all shrink-0 ${
                saved
                  ? "bg-purple-100 text-purple-900 border border-purple-300"
                  : "bg-white text-gray-700 border border-purple-200 hover:bg-purple-50"
              }`}
              title="Save this word to your Vocabulary Notebook"
            >
              {saved ? (
                <>
                  <BookmarkCheck className="h-4 w-4 text-purple-600 fill-purple-500" />
                  <span className="hidden sm:inline">Saved</span>
                </>
              ) : (
                <>
                  <Bookmark className="h-4 w-4 text-purple-600" />
                  <span className="hidden sm:inline">Save</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Translation & Definition */}
        <div className="pt-3 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-black text-emerald-900 border border-emerald-200">
              🇦🇿 Azərbaycanca:
            </span>
            <span className="text-sm sm:text-base font-bold text-gray-900">
              {exercise.azerbaijaniMeaning}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            <span className="font-bold text-gray-900">Definition: </span>
            {exercise.definition}
          </p>

          {exercise.correctSynonyms && exercise.correctSynonyms.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap pt-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-purple-900">
                Alternative Synonyms:
              </span>
              {exercise.correctSynonyms.map((syn, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-white border border-purple-200 px-2 py-0.5 text-xs font-semibold text-gray-800 shadow-2xs"
                >
                  {syn}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Context Sentence */}
      <div className="rounded-2xl bg-gray-50 p-4 sm:p-5 border border-gray-100">
        <span className="text-xs font-black uppercase tracking-wider text-gray-400 block mb-1">
          Cambridge Writing Sentence Context
        </span>
        <p className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed font-serif">
          {exercise.contextSentenceWithBlank}
        </p>
      </div>

      {/* 4 Multiple Choice Options */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-gray-700 flex items-center justify-between">
          <span>Choose the best academic replacement:</span>
          <span className="text-xs font-normal text-gray-400">1 of 4 choices</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {exercise.options.map((option) => {
            const isSelected = selectedAnswer.toLowerCase() === option.toLowerCase();
            const isCorrectOption = option.toLowerCase() === exercise.correctAnswer.toLowerCase();

            let optionStyle = "border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50 shadow-lingo-gray";

            if (status === "idle") {
              if (isSelected) {
                optionStyle = "border-purple-600 bg-purple-50 text-purple-900 shadow-lingo-purple ring-2 ring-purple-600/30";
              }
            } else if (status === "correct") {
              if (isCorrectOption) {
                optionStyle = "border-lingo-green bg-green-50 text-lingo-green-dark shadow-lingo-green ring-2 ring-lingo-green/40";
              }
            } else if (status === "incorrect") {
              if (isSelected) {
                optionStyle = "border-red-500 bg-red-50 text-red-700 shadow-lingo-red";
              } else if (isCorrectOption) {
                optionStyle = "border-lingo-green bg-green-50 text-lingo-green-dark shadow-lingo-green";
              }
            }

            return (
              <button
                key={option}
                type="button"
                disabled={status !== "idle"}
                onClick={() => {
                  soundEngine.playTileClick();
                  onSelectAnswer(option);
                }}
                className={`btn-3d flex items-center justify-between rounded-2xl border-2 px-5 py-4 text-left font-bold transition-all ${optionStyle}`}
              >
                <span className="text-base sm:text-lg tracking-wide">{option}</span>
                <span className="text-xs font-black uppercase text-gray-400">
                  {isSelected ? "Selected" : "Select"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
