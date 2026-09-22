"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useVocabularyStore, SavedVocabularyWord } from "@/lib/store/useVocabularyStore";
import { soundEngine } from "@/lib/audio/sound-effects";
import {
  Bookmark,
  Volume2,
  CheckCircle2,
  RotateCcw,
  Trash2,
  Search,
  BookOpen,
  Eye,
  EyeOff,
  Layers,
  GraduationCap,
} from "lucide-react";

export default function VocabularyNotebookPage() {
  const { savedWords, removeWord, toggleWordMastered } = useVocabularyStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [activeTab, setActiveTab] = useState<"list" | "flashcards">("list");
  const [filterMode, setFilterMode] = useState<"all" | "learning" | "mastered">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const activeWords = useMemo(() => (mounted ? savedWords : []), [mounted, savedWords]);

  // Flashcard practice session state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filtered words for list view
  const filteredWords = useMemo(() => {
    return activeWords.filter((item) => {
      const matchesSearch =
        item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.contextSentence.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sourceReference.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;
      if (filterMode === "learning") return !item.mastered;
      if (filterMode === "mastered") return item.mastered;
      return true;
    });
  }, [activeWords, searchQuery, filterMode]);

  // Flashcard words (only unmastered words by default, or all)
  const flashcardQueue = useMemo(() => {
    return activeWords.length > 0 ? activeWords : [];
  }, [activeWords]);

  const currentFlashcard: SavedVocabularyWord | undefined = flashcardQueue[flashcardIndex];

  const handleNextFlashcard = (markMastered?: boolean) => {
    if (currentFlashcard && markMastered) {
      toggleWordMastered(currentFlashcard.id);
      soundEngine.playCorrect();
    } else {
      soundEngine.playTileClick();
    }
    setIsFlipped(false);
    if (flashcardIndex + 1 < flashcardQueue.length) {
      setFlashcardIndex(flashcardIndex + 1);
    } else {
      setFlashcardIndex(0);
    }
  };

  const handlePronounce = (word: string) => {
    soundEngine.speak(word, "British");
  };

  const masteredCount = activeWords.filter((w) => w.mastered).length;
  const learningCount = activeWords.length - masteredCount;

  return (
    <div className="min-h-screen bg-[#F7F9FA] pb-24 pt-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 p-6 sm:p-8 text-white shadow-lingo mb-8">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-sm">
                <Bookmark className="h-3.5 w-3.5 fill-current" />
                Personal IELTS Lexical Notebook
              </div>
              <h1 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight">
                My Saved IELTS Vocabulary
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                Review and master unfamiliar words you highlighted during Cambridge reading and listening practices. Practice with interactive flashcards and context sentences.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 text-center border border-white/20 min-w-[80px]">
                <div className="text-xl font-black">{activeWords.length}</div>
                <div className="text-[10px] uppercase font-bold text-white/80">Saved</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 text-center border border-white/20 min-w-[80px]">
                <div className="text-xl font-black text-emerald-300">{masteredCount}</div>
                <div className="text-[10px] uppercase font-bold text-white/80">Mastered</div>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION CONTROLS & MODE TOGGLE */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border-2 border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
          {/* Mode Switcher */}
          <div className="flex gap-1.5 bg-gray-100 p-1 rounded-2xl">
            <button
              onClick={() => setActiveTab("list")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black transition-all ${
                activeTab === "list"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Word Bank ({activeWords.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("flashcards");
                setFlashcardIndex(0);
                setIsFlipped(false);
              }}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black transition-all ${
                activeTab === "flashcards"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Flashcard Practice</span>
            </button>
          </div>

          {/* Quick link to practice */}
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 text-xs font-black text-purple-700 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-xl border border-purple-200 transition-colors self-start sm:self-auto"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Practice Reading & Save More Words</span>
          </Link>
        </div>

        {/* TAB 1: FLASHCARD STUDY MODE */}
        {activeTab === "flashcards" && (
          <div className="mx-auto max-w-2xl">
            {flashcardQueue.length === 0 ? (
              <div className="rounded-3xl border-2 border-gray-200 bg-white p-10 text-center shadow-sm">
                <Bookmark className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                <h3 className="text-lg font-black text-gray-800">No Saved Words Yet</h3>
                <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                  Highlight unfamiliar words while practicing Cambridge reading passages to save them here for flashcard revision.
                </p>
                <Link
                  href="/learn"
                  className="btn-3d mt-4 inline-block rounded-xl bg-purple-600 px-5 py-2.5 text-xs font-black uppercase text-white shadow-lingo"
                >
                  Go to Reading Practice
                </Link>
              </div>
            ) : currentFlashcard ? (
              <div className="flex flex-col gap-6">
                {/* Progress bar */}
                <div className="flex items-center justify-between text-xs font-black text-gray-400">
                  <span>Card {flashcardIndex + 1} of {flashcardQueue.length}</span>
                  <span>{currentFlashcard.mastered ? "Status: Mastered" : "Status: In Progress"}</span>
                </div>

                {/* The Flashcard */}
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className={`cursor-pointer rounded-3xl border-4 p-8 sm:p-12 text-center transition-all duration-300 min-h-[320px] flex flex-col justify-between shadow-lg ${
                    isFlipped
                      ? "border-purple-300 bg-gradient-to-b from-purple-50 to-white"
                      : "border-gray-200 bg-white hover:border-purple-300 hover:shadow-xl"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-4">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px]">
                      {currentFlashcard.sourceReference}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePronounce(currentFlashcard.word);
                      }}
                      className="flex items-center gap-1 rounded-xl bg-purple-100 text-purple-700 px-3 py-1 hover:bg-purple-200 transition-colors"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      <span>Hear Audio</span>
                    </button>
                  </div>

                  {/* Word Content */}
                  <div className="my-auto py-4">
                    <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight capitalize">
                      {currentFlashcard.word}
                    </h2>

                    {isFlipped ? (
                      <div className="mt-6 text-left rounded-2xl bg-white p-5 border border-purple-100 shadow-sm animate-in fade-in">
                        <div className="text-xs font-black uppercase tracking-wider text-purple-700 mb-1">
                          Passage Context Sentence:
                        </div>
                        <p className="font-serif text-sm sm:text-base text-gray-800 leading-relaxed italic">
                          &quot;{currentFlashcard.contextSentence}&quot;
                        </p>
                        {currentFlashcard.definition && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <span className="text-xs font-bold text-gray-400 uppercase">Meaning:</span>
                            <p className="text-xs text-gray-600 mt-0.5">{currentFlashcard.definition}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Click card to reveal passage sentence & meaning
                      </p>
                    )}
                  </div>

                  <div className="text-xs font-semibold text-gray-400">
                    {isFlipped ? "Click anywhere on card to hide context" : "Tap card to flip"}
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="btn-3d flex items-center justify-center gap-1.5 rounded-2xl border-2 border-gray-200 bg-white py-3 text-xs font-black text-gray-700 hover:bg-gray-50"
                  >
                    {isFlipped ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span>{isFlipped ? "Hide Clue" : "Reveal Clue"}</span>
                  </button>

                  <button
                    onClick={() => handleNextFlashcard(false)}
                    className="btn-3d flex items-center justify-center gap-1.5 rounded-2xl bg-amber-500 py-3 text-xs font-black text-white shadow-lingo-amber hover:bg-amber-600"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>Needs Practice</span>
                  </button>

                  <button
                    onClick={() => handleNextFlashcard(true)}
                    className="col-span-2 sm:col-span-1 btn-3d flex items-center justify-center gap-1.5 rounded-2xl bg-emerald-600 py-3 text-xs font-black text-white shadow-lingo-green hover:bg-emerald-700"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Mastered (+10 XP)</span>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* TAB 2: WORD BANK LIST VIEW */}
        {activeTab === "list" && (
          <div className="flex flex-col gap-6">
            {/* Search Bar & Filters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search saved words, definitions, or Cambridge sources..."
                  className="w-full rounded-2xl border-2 border-gray-200 bg-white pl-11 pr-4 py-2.5 text-xs sm:text-sm font-bold text-gray-800 focus:border-purple-600 focus:outline-none"
                />
              </div>

              {/* Status Filter Buttons */}
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border-2 border-gray-200">
                <button
                  onClick={() => setFilterMode("all")}
                  className={`rounded-xl px-3 py-1.5 text-xs font-black transition-all ${
                    filterMode === "all"
                      ? "bg-gray-900 text-white"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  All ({savedWords.length})
                </button>
                <button
                  onClick={() => setFilterMode("learning")}
                  className={`rounded-xl px-3 py-1.5 text-xs font-black transition-all ${
                    filterMode === "learning"
                      ? "bg-amber-500 text-white"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  Learning ({learningCount})
                </button>
                <button
                  onClick={() => setFilterMode("mastered")}
                  className={`rounded-xl px-3 py-1.5 text-xs font-black transition-all ${
                    filterMode === "mastered"
                      ? "bg-emerald-600 text-white"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  Mastered ({masteredCount})
                </button>
              </div>
            </div>

            {/* Word List Grid */}
            {filteredWords.length === 0 ? (
              <div className="rounded-3xl border-2 border-gray-200 bg-white p-12 text-center shadow-sm">
                <Bookmark className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                <h3 className="text-lg font-black text-gray-800">No Words Match Your Filter</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Try adjusting your search query or save new vocabulary from reading passages.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredWords.map((item) => (
                  <div
                    key={item.id}
                    className={`rounded-3xl border-2 p-5 bg-white shadow-sm flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      item.mastered ? "border-emerald-200 bg-emerald-50/20" : "border-gray-200"
                    }`}
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[10px] font-black text-purple-700 border border-purple-200">
                          {item.sourceReference}
                        </span>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handlePronounce(item.word)}
                            className="rounded-xl p-1.5 text-gray-400 hover:bg-gray-100 hover:text-purple-700 transition-colors"
                            title="Pronounce word"
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => removeWord(item.id)}
                            className="rounded-xl p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                            title="Delete word from notebook"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Word Title */}
                      <h3 className="text-xl font-black text-gray-900 capitalize">
                        {item.word}
                      </h3>

                      {/* Context Sentence */}
                      <div className="mt-2.5 rounded-2xl bg-gray-50 p-3 border border-gray-100">
                        <div className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1">
                          Context from Cambridge Passage:
                        </div>
                        <p className="font-serif text-xs text-gray-800 leading-relaxed italic">
                          &quot;{item.contextSentence}&quot;
                        </p>
                      </div>

                      {/* Meaning / Notes */}
                      {item.definition && (
                        <div className="mt-2 text-xs text-gray-600">
                          <strong>Meaning:</strong> {item.definition}
                        </div>
                      )}
                    </div>

                    {/* Mastered toggle */}
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                      <span className="text-[11px] font-bold text-gray-400">
                        Saved: {new Date(item.savedAt).toLocaleDateString()}
                      </span>

                      <button
                        onClick={() => toggleWordMastered(item.id)}
                        className={`btn-3d flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-black transition-all ${
                          item.mastered
                            ? "bg-emerald-600 text-white shadow-sm"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>{item.mastered ? "Mastered" : "Mark Mastered"}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
