"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  PARAPHRASE_CATEGORIES,
  PARAPHRASE_LEXICON_ITEMS,
  PARAPHRASE_GOLDEN_RULES,
  ParaphraseLexiconItem,
} from "@/lib/ielts-curriculum";
import { soundEngine } from "@/lib/audio/sound-effects";
import { useVocabularyStore } from "@/lib/store/useVocabularyStore";
import { useIeltsStore } from "@/lib/store/useIeltsStore";
import {
  Search,
  Volume2,
  Bookmark,
  BookmarkCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  BookOpen,
  Zap,
  Check,
  Lightbulb,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

export default function ParaphraseLexiconPage() {
  const [activeTab, setActiveTab] = useState<"explorer" | "quiz" | "rules">("explorer");
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Store integration
  const { savedWords, saveWord, removeWord, isWordSaved } = useVocabularyStore();
  const { recordAttempt } = useIeltsStore();

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Play British audio
  const handleSpeak = (text: string) => {
    setSpeakingWord(text);
    soundEngine.speak(text, "British", () => {
      setSpeakingWord(null);
    });
  };

  // Save / Toggle word in vocabulary store
  const handleToggleSave = (item: ParaphraseLexiconItem, wordToSave: string) => {
    const isSaved = isWordSaved(wordToSave);
    if (isSaved) {
      const match = savedWords.find((w) => w.word.toLowerCase() === wordToSave.toLowerCase());
      if (match) removeWord(match.id);
      showToast(`Removed "${wordToSave}" from Notebook`);
    } else {
      saveWord({
        word: wordToSave,
        contextSentence: item.contextSentence,
        sourcePassageTitle: "Master IELTS Paraphrasing Lexicon",
        sourceReference: `${item.categoryName} (#${item.id})`,
        definition: `Band 8.0+ Academic Paraphrase for base word "${item.baseWord}".`,
      });
      soundEngine.playCorrect();
      showToast(`Saved "${wordToSave}" to Vocabulary Notebook (+10 XP)`);
    }
  };

  // Filter items in Explorer mode
  const filteredItems = useMemo(() => {
    return PARAPHRASE_LEXICON_ITEMS.filter((item) => {
      if (selectedCategoryId !== null && item.categoryId !== selectedCategoryId) {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchBase = item.baseWord.toLowerCase().includes(q);
      const matchSyns = item.highBandParaphrases.some((p) => p.toLowerCase().includes(q));
      const matchContext = item.contextSentence.toLowerCase().includes(q);
      return matchBase || matchSyns || matchContext;
    });
  }, [selectedCategoryId, searchQuery]);

  // ================= QUIZ DRILL ENGINE =================
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizStreak, setQuizStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizStatus, setQuizStatus] = useState<"idle" | "correct" | "incorrect">("idle");

  // Shuffled quiz pool
  const quizPool = useMemo(() => {
    return [...PARAPHRASE_LEXICON_ITEMS].sort(() => 0.5 - Math.random());
  }, []);

  const currentQuizItem = quizPool[quizIndex % quizPool.length];

  // Generate 4 randomized options for the current quiz item
  const quizOptions = useMemo(() => {
    if (!currentQuizItem) return [];
    const correct = currentQuizItem.highBandParaphrases[0];
    const distractors: string[] = [];
    const poolWithoutCurrent = PARAPHRASE_LEXICON_ITEMS.filter((i) => i.id !== currentQuizItem.id);

    while (distractors.length < 3) {
      const randItem = poolWithoutCurrent[Math.floor(Math.random() * poolWithoutCurrent.length)];
      const randSyn = randItem.highBandParaphrases[0];
      if (!distractors.includes(randSyn) && randSyn !== correct) {
        distractors.push(randSyn);
      }
    }

    return [correct, ...distractors].sort(() => 0.5 - Math.random());
  }, [currentQuizItem]);

  const handleSelectQuizOption = (opt: string) => {
    if (quizStatus !== "idle") return;
    setSelectedAnswer(opt);
    const correct = currentQuizItem.highBandParaphrases[0];
    const isCorrect = opt.toLowerCase() === correct.toLowerCase();

    if (isCorrect) {
      soundEngine.playCorrect();
      setQuizStatus("correct");
      setQuizScore((prev) => prev + 1);
      setQuizStreak((prev) => prev + 1);
      recordAttempt("writing", true);

      if ((quizScore + 1) % 5 === 0 && typeof window !== "undefined") {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#58CC02", "#1CB0F6", "#FF9600", "#CE82FF"],
        });
      }
    } else {
      soundEngine.playIncorrect();
      setQuizStatus("incorrect");
      setQuizStreak(0);
      recordAttempt("writing", false);
    }
  };

  const handleNextQuizQuestion = () => {
    setQuizIndex((prev) => prev + 1);
    setSelectedAnswer(null);
    setQuizStatus("idle");
  };

  // Keyboard shortcut for Enter in Quiz
  useEffect(() => {
    if (activeTab !== "quiz") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (quizStatus !== "idle") {
          e.preventDefault();
          handleNextQuizQuestion();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab, quizStatus]);

  return (
    <div className="min-h-screen bg-[#F7F9FA] pb-24 pt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-xl text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Skill Tree</span>
          </Link>

          <span className="text-xs font-bold text-gray-400">
            IELTS Academic Writing & Speaking • Band 8.5+
          </span>
        </div>

        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-emerald-800 to-slate-900 p-6 sm:p-8 text-white shadow-xl mb-8">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                Zero-Repetition Strategy • 200 Core Words
              </div>
              <h1 className="mt-3 text-2xl sm:text-4xl font-black tracking-tight">
                The Master 200-Word Paraphrasing Lexicon
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
                Repetition is the #1 reason candidates get stuck at Band 6.0–6.5. This master lexicon
                arms you with over 600+ Band 7.5–9.0 synonyms, natural academic collocations, and
                syntactic transformations to eliminate repetition across Task 1 and Task 2 essays.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 text-center border border-white/20 min-w-[80px]">
                <div className="text-xl font-black">200</div>
                <div className="text-[10px] uppercase font-bold text-white/80">Base Words</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 text-center border border-white/20 min-w-[80px]">
                <div className="text-xl font-black">10</div>
                <div className="text-[10px] uppercase font-bold text-white/80">Categories</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 text-center border border-white/20 min-w-[80px]">
                <div className="text-xl font-black text-amber-300">Band 9</div>
                <div className="text-[10px] uppercase font-bold text-white/80">Target</div>
              </div>
            </div>
          </div>
        </div>

        {/* TOAST NOTIFICATION */}
        {toastMessage && (
          <div className="fixed top-20 right-6 z-50 flex items-center gap-2 rounded-2xl bg-amber-600 px-4 py-2.5 text-xs font-black text-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <Check className="h-4 w-4" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* TAB CONTROLS */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("explorer")}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-black transition-all ${
                activeTab === "explorer"
                  ? "bg-lingo-blue text-white shadow-lingo-blue"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Lexicon Explorer ({filteredItems.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-black transition-all ${
                activeTab === "quiz"
                  ? "bg-purple-600 text-white shadow-lingo-purple"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <Zap className="h-4 w-4 text-amber-300" />
              <span>Zero-Repetition Drill</span>
              {quizScore > 0 && (
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">
                  {quizScore} pts
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("rules")}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-black transition-all ${
                activeTab === "rules"
                  ? "bg-emerald-600 text-white shadow-lingo-green"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <Lightbulb className="h-4 w-4 text-amber-300" />
              <span>Band 8.0+ Golden Rules</span>
            </button>
          </div>

          <Link
            href="/practice/writing-synonyms"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-lingo-blue hover:underline"
          >
            <span>Practice 500 Synonyms Track</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* ================= TAB 1: LEXICON EXPLORER ================= */}
        {activeTab === "explorer" && (
          <div className="space-y-6">
            {/* Search and Category Filter Card */}
            <div className="rounded-3xl border-2 border-gray-200 bg-white p-5 shadow-sm space-y-4">
              {/* Live Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search overused words (e.g. 'show', 'people', 'increase', 'good', 'because', 'problem')..."
                  className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-lingo-blue focus:bg-white focus:ring-4 focus:ring-lingo-blue/10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-700"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Horizontal Category Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Filter by Cambridge Thematic Domain (10 Categories):
                  </span>
                  {selectedCategoryId !== null && (
                    <button
                      onClick={() => setSelectedCategoryId(null)}
                      className="text-[11px] font-bold text-lingo-blue hover:underline"
                    >
                      Show All 200 Words
                    </button>
                  )}
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                  <button
                    onClick={() => setSelectedCategoryId(null)}
                    className={`btn-3d flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                      selectedCategoryId === null
                        ? "bg-gray-900 text-white shadow-sm"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span>🌟</span>
                    <span>All 200 Words</span>
                  </button>

                  {PARAPHRASE_CATEGORIES.map((cat) => {
                    const isSelected = selectedCategoryId === cat.index;
                    return (
                      <button
                        key={cat.index}
                        onClick={() => setSelectedCategoryId(cat.index)}
                        className={`btn-3d flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                          isSelected
                            ? "bg-lingo-blue text-white shadow-lingo-blue"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <span>{cat.icon}</span>
                        <span>{cat.name.split("&")[0].trim()}</span>
                        <span className="rounded-full bg-black/10 px-1.5 py-0.2 text-[9px] font-black">
                          {cat.range[1] - cat.range[0] + 1}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Word Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredItems.map((item) => {
                const primaryWord = item.highBandParaphrases[0];
                const saved = isWordSaved(primaryWord);

                return (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between rounded-3xl border-2 border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
                  >
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-2 pb-3 border-b border-gray-100 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gray-100 text-xs font-black text-gray-600">
                            #{item.id}
                          </span>
                          <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                            <span>{item.categoryIcon}</span>
                            <span>{item.categoryName}</span>
                          </span>
                        </div>

                        <span className="rounded-full bg-rose-50 px-2.5 py-0.5 text-[10px] font-black text-rose-600 border border-rose-200 uppercase tracking-wide">
                          Overused Word
                        </span>
                      </div>

                      {/* Overused Base Word */}
                      <div className="mb-3">
                        <span className="text-[11px] font-bold text-gray-400 block mb-0.5">
                          Base Overused Expression:
                        </span>
                        <h3 className="text-lg font-black text-gray-900 line-through decoration-rose-500 decoration-2">
                          {item.baseWord}
                        </h3>
                      </div>

                      {/* High-Band Paraphrases */}
                      <div className="mb-4">
                        <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 block mb-1.5">
                          High-Band Academic Alternatives (Band 7.5–9.0):
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.highBandParaphrases.map((para, pIdx) => {
                            const isSpeaking = speakingWord === para;
                            return (
                              <button
                                key={pIdx}
                                onClick={() => handleSpeak(para)}
                                className={`inline-flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50/80 px-2.5 py-1 text-xs font-black text-emerald-900 transition-transform hover:scale-105 hover:bg-emerald-100 ${
                                  isSpeaking ? "ring-2 ring-emerald-500 animate-pulse" : ""
                                }`}
                                title="Click to listen to British pronunciation"
                              >
                                <span>{para}</span>
                                <Volume2 className="h-3 w-3 text-emerald-600 shrink-0" />
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Context / Collocation Box */}
                      <div className="rounded-2xl bg-amber-50/60 p-3.5 border border-amber-200/80 mb-3">
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 block mb-1">
                          Cambridge Exam Collocation:
                        </span>
                        <p className="text-xs sm:text-sm font-medium text-gray-800 italic leading-relaxed font-serif">
                          &ldquo;{item.contextSentence}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Card Actions Bar */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-1">
                      <button
                        onClick={() => handleSpeak(item.contextSentence)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-lingo-blue transition-colors"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                        <span>Listen to Sentence</span>
                      </button>

                      <button
                        onClick={() => handleToggleSave(item, primaryWord)}
                        className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                          saved
                            ? "bg-amber-100 text-amber-900 border border-amber-300"
                            : "bg-gray-100 text-gray-700 hover:bg-amber-50 hover:text-amber-900 hover:border-amber-200 border border-transparent"
                        }`}
                        title="Save primary paraphrase to Vocabulary Notebook"
                      >
                        {saved ? (
                          <>
                            <BookmarkCheck className="h-3.5 w-3.5 text-amber-600 fill-amber-500" />
                            <span>Saved</span>
                          </>
                        ) : (
                          <>
                            <Bookmark className="h-3.5 w-3.5 text-amber-600" />
                            <span>Save to Notebook</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <div className="rounded-3xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
                <Search className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <h3 className="text-base font-black text-gray-800">No matching words found</h3>
                <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                  Try searching for another base word like &quot;important&quot;, &quot;increase&quot;, &quot;government&quot;, or clear your filter.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategoryId(null);
                  }}
                  className="mt-4 rounded-xl bg-lingo-blue px-4 py-2 text-xs font-bold text-white shadow-lingo-blue"
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 2: ZERO-REPETITION DRILL ================= */}
        {activeTab === "quiz" && (
          <div className="mx-auto max-w-2xl">
            {/* Quiz Header Card */}
            <div className="rounded-3xl border-2 border-purple-200 bg-white p-6 sm:p-8 shadow-md space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-xl bg-purple-100 px-3 py-1 text-xs font-black text-purple-900 uppercase">
                    Zero-Repetition Reflex Drill
                  </span>
                  <span className="text-xs font-bold text-gray-400">
                    Question {quizIndex + 1}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-xs font-black text-amber-600">
                    <Zap className="h-4 w-4 fill-amber-500" />
                    <span>Streak: {quizStreak}</span>
                  </div>
                  <div className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-black text-purple-700 border border-purple-200">
                    Score: {quizScore}
                  </div>
                </div>
              </div>

              {/* Question Body */}
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-rose-500 block mb-1">
                  Replace the Overused Word (Do Not Repeat):
                </span>
                <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <span>Base Word:</span>
                    <span className="font-black text-gray-900 text-base line-through decoration-rose-500 decoration-2">
                      {currentQuizItem.baseWord}
                    </span>
                    <span className="text-[11px] text-gray-400">({currentQuizItem.categoryName})</span>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed font-serif mt-2">
                    &ldquo;{currentQuizItem.contextSentence}&rdquo;
                  </p>
                </div>

                <label className="text-xs font-bold text-gray-700 block mb-2">
                  Which is the optimal Band 8.5+ paraphrase for this context?
                </label>

                {/* 4 Multiple Choice Options */}
                <div className="grid grid-cols-1 gap-2.5">
                  {quizOptions.map((opt, oIdx) => {
                    const isSelected = selectedAnswer === opt;
                    const isCorrectOpt =
                      opt.toLowerCase() === currentQuizItem.highBandParaphrases[0].toLowerCase();

                    let btnStyle = "border-gray-200 bg-white hover:bg-gray-50 text-gray-800";
                    if (quizStatus !== "idle") {
                      if (isCorrectOpt) {
                        btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-400";
                      } else if (isSelected) {
                        btnStyle = "border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-400";
                      } else {
                        btnStyle = "border-gray-200 bg-gray-50 text-gray-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={quizStatus !== "idle"}
                        onClick={() => handleSelectQuizOption(opt)}
                        className={`btn-3d flex items-center justify-between rounded-2xl border-2 p-4 text-left transition-all ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gray-100 text-xs font-black text-gray-700">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="text-sm sm:text-base font-bold">{opt}</span>
                        </div>

                        {quizStatus !== "idle" && (
                          <div>
                            {isCorrectOpt && (
                              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                            )}
                            {isSelected && !isCorrectOpt && (
                              <XCircle className="h-5 w-5 text-rose-500" />
                            )}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback & Continue */}
              {quizStatus !== "idle" && (
                <div
                  className={`rounded-2xl p-4 border animate-in fade-in slide-in-from-top-2 duration-200 ${
                    quizStatus === "correct"
                      ? "bg-emerald-50/90 border-emerald-200 text-emerald-950"
                      : "bg-rose-50/90 border-rose-200 text-rose-950"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {quizStatus === "correct" ? (
                        <>
                          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                          <span className="text-sm font-black text-emerald-800">
                            Superb! +15 XP Earned
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-5 w-5 text-rose-600" />
                          <span className="text-sm font-black text-rose-800">
                            Not Quite: Best Option is &ldquo;{currentQuizItem.highBandParaphrases[0]}&rdquo;
                          </span>
                        </>
                      )}
                    </div>

                    <button
                      onClick={() => handleSpeak(currentQuizItem.highBandParaphrases[0])}
                      className="inline-flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-gray-900"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      <span>Hear Word</span>
                    </button>
                  </div>

                  <p className="text-xs text-gray-700 leading-relaxed mb-3">
                    <strong>Other great alternatives:</strong>{" "}
                    {currentQuizItem.highBandParaphrases.slice(1).join(", ") || "None"}
                  </p>

                  <button
                    onClick={handleNextQuizQuestion}
                    className="btn-3d w-full flex items-center justify-center gap-2 rounded-2xl bg-purple-600 py-3.5 text-sm font-black text-white shadow-lingo-purple hover:bg-purple-700 transition-all"
                  >
                    <span>Next Question (Press Enter)</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 3: BAND 8.0+ GOLDEN RULES ================= */}
        {activeTab === "rules" && (
          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="max-w-2xl mb-8">
                <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800 mb-2">
                  Examiner Scoring Criteria • Lexical Resource
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                  How Cambridge Examiners Grade Paraphrasing
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  In IELTS Writing Task 1 and Task 2, examiners do not just reward isolated synonyms.
                  Repeating words triggers penalties under <em>Lexical Resource</em>, but awkward
                  synonym-hunting triggers penalties under <em>Coherence & Cohesion</em>. Follow these
                  three golden rules to score Band 8.0+:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PARAPHRASE_GOLDEN_RULES.map((rule) => (
                  <div
                    key={rule.number}
                    className="flex flex-col justify-between rounded-3xl border-2 border-gray-200 bg-gray-50/50 p-6 transition-all hover:bg-white hover:border-emerald-300 hover:shadow-md"
                  >
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-black text-lg mb-4 shadow-sm">
                        {rule.number}
                      </div>

                      <h3 className="text-base font-black text-gray-900 mb-2">
                        {rule.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {rule.summary}
                      </p>

                      <div className="space-y-2 border-t border-gray-200/80 pt-3">
                        {rule.examples.map((ex, exIdx) => (
                          <div
                            key={exIdx}
                            className={`rounded-xl p-2.5 text-xs font-medium border ${
                              ex.label.includes("Band 8") || ex.label.includes("Natural")
                                ? "bg-emerald-50/80 border-emerald-200 text-emerald-950 font-bold"
                                : "bg-rose-50/60 border-rose-200 text-rose-900"
                            }`}
                          >
                            <span className="text-[10px] font-black uppercase tracking-wider block opacity-75 mb-0.5">
                              {ex.label}:
                            </span>
                            <span>{ex.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Practice CTA Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-lingo-blue to-purple-600 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
              <div>
                <h3 className="text-xl font-black">Ready to test your reflexes?</h3>
                <p className="text-xs text-white/90 mt-1 max-w-md">
                  Practice replacing overused words with our interactive rapid-fire quiz.
                </p>
              </div>

              <button
                onClick={() => setActiveTab("quiz")}
                className="btn-3d inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-black text-gray-900 shadow-sm hover:bg-gray-50"
              >
                <span>Start Zero-Repetition Drill</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
