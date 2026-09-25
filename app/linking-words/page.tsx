"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  LINKING_WORDS_DATA,
  LINKING_WORDS_PARTS,
  ESSAY_ARCHITECTURE_ZONES,
  LinkingWordItem,
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
  ArrowLeft,
  Link2,
  Layers,
  RotateCcw,
  Trophy,
  Target,
} from "lucide-react";

export default function LinkingWordsPage() {
  const [activeTab, setActiveTab] = useState<"explorer" | "quiz" | "architecture">("explorer");
  const [selectedPartId, setSelectedPartId] = useState<number | null>(null);
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
  const handleToggleSave = (item: LinkingWordItem) => {
    const isSaved = isWordSaved(item.phrase);
    if (isSaved) {
      const match = savedWords.find((w) => w.word.toLowerCase() === item.phrase.toLowerCase());
      if (match) removeWord(match.id);
      showToast(`Removed "${item.phrase}" from Notebook`);
    } else {
      saveWord({
        word: item.phrase,
        contextSentence: item.example,
        sourcePassageTitle: "Essential IELTS Linking Words & Cohesive Devices",
        sourceReference: `Part ${item.partNumber}: ${item.category} (#${item.id})`,
        definition: `Placement: ${item.whereToUse} | Formula: ${item.grammarFormula}`,
      });
      soundEngine.playCorrect();
      showToast(`Saved "${item.phrase}" to Notebook (+10 XP)`);
    }
  };

  // Filter items in Explorer mode
  const filteredItems = useMemo(() => {
    return LINKING_WORDS_DATA.filter((item) => {
      if (selectedPartId !== null && item.partNumber !== selectedPartId) {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchPhrase = item.phrase.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchWhere = item.whereToUse.toLowerCase().includes(q);
      const matchEx = item.example.toLowerCase().includes(q);
      return matchPhrase || matchCat || matchWhere || matchEx;
    });
  }, [selectedPartId, searchQuery]);

  // ================= QUIZ DRILL ENGINE =================
  const [quizPool, setQuizPool] = useState<LinkingWordItem[]>(() =>
    [...LINKING_WORDS_DATA].sort(() => 0.5 - Math.random())
  );
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizStreak, setQuizStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizStatus, setQuizStatus] = useState<"idle" | "correct" | "incorrect">("idle");

  const currentQuizItem = quizPool[quizIndex] || null;

  // Options: 1 correct + 3 distractors shuffled
  const currentOptions = useMemo(() => {
    if (!currentQuizItem) return [];
    const opts = [
      currentQuizItem.clozeQuestion.correctAnswer,
      ...currentQuizItem.clozeQuestion.distractors,
    ];
    return opts.sort(() => 0.5 - Math.random());
  }, [currentQuizItem]);

  const handleSelectOption = (opt: string) => {
    if (quizStatus !== "idle") return;
    setSelectedAnswer(opt);
    const isCorrect = opt === currentQuizItem.clozeQuestion.correctAnswer;

    if (isCorrect) {
      setQuizStatus("correct");
      setQuizScore((prev) => prev + 1);
      const nextStreak = quizStreak + 1;
      setQuizStreak(nextStreak);
      soundEngine.playCorrect();

      recordAttempt("writing", true);

      if (nextStreak % 5 === 0) {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
      }

      // Auto-pronounce model sentence
      soundEngine.speak(currentQuizItem.example, "British");
    } else {
      setQuizStatus("incorrect");
      setQuizStreak(0);
      soundEngine.playIncorrect();

      recordAttempt("writing", false);
    }
  };

  const handleNextQuizQuestion = useCallback(() => {
    if (quizIndex + 1 < quizPool.length) {
      setQuizIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setQuizStatus("idle");
    } else {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      setQuizIndex(quizPool.length);
    }
  }, [quizIndex, quizPool.length]);

  const handleRestartQuiz = () => {
    setQuizPool([...LINKING_WORDS_DATA].sort(() => 0.5 - Math.random()));
    setQuizIndex(0);
    setQuizScore(0);
    setQuizStreak(0);
    setSelectedAnswer(null);
    setQuizStatus("idle");
  };

  // Keyboard shortcut: Enter advances to next question when answered
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab !== "quiz") return;
      if (e.key === "Enter" && quizStatus !== "idle") {
        e.preventDefault();
        handleNextQuizQuestion();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab, quizStatus, handleNextQuizQuestion]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4" />
          {toastMessage}
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Breadcrumb & Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="space-y-1">
            <Link
              href="/learn"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Writing Curriculum
            </Link>
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl shadow-md">
                <Link2 className="w-6 h-6" />
              </span>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Top 30 Essential IELTS Linking Words & Cohesive Devices
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Where to place them, grammatical formulas, and Band 8.5–9.0 model sentences
                </p>
              </div>
            </div>
          </div>

          {/* Quick stats badge */}
          <div className="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 rounded-xl px-4 py-2">
            <Trophy className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <div className="text-xs font-semibold">
              <span className="text-indigo-600 dark:text-indigo-400">30 Devices</span> across 9 Parts
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/80 dark:bg-slate-900 rounded-2xl max-w-md">
          <button
            onClick={() => setActiveTab("explorer")}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === "explorer"
                ? "bg-white dark:bg-slate-800 shadow-sm text-indigo-600 dark:text-indigo-400"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Explorer Mode
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === "quiz"
                ? "bg-white dark:bg-slate-800 shadow-sm text-indigo-600 dark:text-indigo-400"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <Zap className="w-4 h-4" />
            Cohesion Drill
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === "architecture"
                ? "bg-white dark:bg-slate-800 shadow-sm text-indigo-600 dark:text-indigo-400"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <Layers className="w-4 h-4" />
            Essay Map
          </button>
        </div>

        {/* ================= TAB 1: EXPLORER MODE ================= */}
        {activeTab === "explorer" && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search linking words, formulas, or topics..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {selectedPartId !== null && (
                <button
                  onClick={() => setSelectedPartId(null)}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 self-start md:self-auto"
                >
                  <RotateCcw className="w-3 h-3" /> Show All 30 Devices
                </button>
              )}
            </div>

            {/* Part category chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedPartId(null)}
                className={`text-xs font-semibold px-3 py-2 rounded-xl whitespace-nowrap transition-colors ${
                  selectedPartId === null
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                All Parts (30)
              </button>
              {LINKING_WORDS_PARTS.map((part) => (
                <button
                  key={part.id}
                  onClick={() => setSelectedPartId(part.id)}
                  className={`text-xs font-semibold px-3 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    selectedPartId === part.id
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <span>Part {part.id}:</span>
                  <span>{part.title}</span>
                  <span className="text-[10px] opacity-75">({part.range})</span>
                </button>
              ))}
            </div>

            {/* Grid of 30 Linking Words */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => {
                const isSaved = isWordSaved(item.phrase);
                return (
                  <div
                    key={item.id}
                    className="p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                              Part {item.partNumber} • {item.targetRole}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-400">
                              #{item.id}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold font-mono text-indigo-600 dark:text-indigo-400">
                            {item.phrase}
                          </h3>
                        </div>

                        {/* Action buttons: Pronounce & Save */}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleSpeak(item.phrase)}
                            title="Hear British Pronunciation"
                            className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            <Volume2 className={`w-4 h-4 ${speakingWord === item.phrase ? "animate-pulse text-indigo-600" : ""}`} />
                          </button>
                          <button
                            onClick={() => handleToggleSave(item)}
                            title={isSaved ? "Remove from Vocabulary Notebook" : "Save to Vocabulary Notebook"}
                            className="p-2 text-slate-400 hover:text-amber-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            {isSaved ? (
                              <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                            ) : (
                              <Bookmark className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Where to use */}
                      <div className="mt-3 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                        <Target className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-slate-900 dark:text-slate-100">Where to use: </span>
                          <span>{item.whereToUse}</span>
                        </div>
                      </div>

                      {/* Grammar Formula */}
                      <div className="mt-3 text-xs bg-indigo-50/50 dark:bg-indigo-950/30 p-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900/40">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-1">
                          <Zap className="w-3 h-3" /> Grammar Formula
                        </div>
                        <code className="text-xs font-mono text-indigo-700 dark:text-indigo-300 break-words">
                          {item.grammarFormula}
                        </code>
                      </div>

                      {/* Model Sentence */}
                      <div className="mt-3 text-xs bg-slate-50 dark:bg-slate-800/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800/60">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                          Band 8.5–9.0 Model Sentence
                        </div>
                        <p className="italic text-slate-700 dark:text-slate-300 leading-relaxed">
                          &ldquo;{item.example}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Bottom CTA to speak full sentence */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
                      <span className="text-slate-400 text-[11px]">{item.category}</span>
                      <button
                        onClick={() => handleSpeak(item.example)}
                        className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                      >
                        <Volume2 className="w-3.5 h-3.5" /> Listen to Model
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <Search className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                <h4 className="text-base font-semibold">No linking words found</h4>
                <p className="text-xs text-slate-500 mt-1">Try refining your search keyword or reset the category filter.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedPartId(null);
                  }}
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 2: COHESION DRILL (QUIZ) ================= */}
        {activeTab === "quiz" && (
          <div className="max-w-2xl mx-auto space-y-6">
            {quizIndex < quizPool.length && currentQuizItem ? (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
                {/* Quiz header with streak and progress */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      Question {quizIndex + 1} of {quizPool.length}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Part {currentQuizItem.partNumber}: {currentQuizItem.targetRole}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                      <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span>{quizStreak} Streak</span>
                    </div>
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      Score: {quizScore}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((quizIndex + 1) / quizPool.length) * 100}%` }}
                  />
                </div>

                {/* Question Prompt */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Select the correct cohesive device to complete the Band 9 sentence:
                    </span>
                    <button
                      onClick={() => handleSpeak(currentQuizItem.clozeQuestion.sentenceWithBlank.replace("_____", currentQuizItem.phrase))}
                      title="Listen"
                      className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 text-base sm:text-lg font-medium leading-relaxed">
                    {currentQuizItem.clozeQuestion.sentenceWithBlank}
                  </div>

                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Context: {currentQuizItem.whereToUse}</span>
                  </div>
                </div>

                {/* Options List */}
                <div className="space-y-2.5">
                  {currentOptions.map((opt, idx) => {
                    const isSelected = selectedAnswer === opt;
                    const isCorrect = opt === currentQuizItem.clozeQuestion.correctAnswer;

                    let btnStyle = "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 text-slate-800 dark:text-slate-200";

                    if (quizStatus !== "idle") {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold shadow-sm";
                      } else if (isSelected && !isCorrect) {
                        btnStyle = "bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200 font-bold";
                      } else {
                        btnStyle = "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-40";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={quizStatus !== "idle"}
                        onClick={() => handleSelectOption(opt)}
                        className={`w-full p-4 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span className="font-mono">{opt}</span>
                        {quizStatus !== "idle" && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        )}
                        {quizStatus !== "idle" && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Result Feedback Banner */}
                {quizStatus !== "idle" && (
                  <div
                    className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 animate-fadeIn ${
                      quizStatus === "correct"
                        ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                        : "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-sm">
                      {quizStatus === "correct" ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Excellent! +15 XP</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600" />
                          <span>Correct Answer: &ldquo;{currentQuizItem.clozeQuestion.correctAnswer}&rdquo;</span>
                        </>
                      )}
                    </div>
                    <p className="leading-relaxed opacity-90">
                      {currentQuizItem.clozeQuestion.explanation}
                    </p>
                    <div className="text-xs font-mono pt-1 opacity-80">
                      Formula: {currentQuizItem.grammarFormula}
                    </div>
                  </div>
                )}

                {/* Footer Controls: Next Question / Enter Hint */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    {quizStatus !== "idle" && (
                      <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[10px]">Enter ↵</kbd> to continue</span>
                    )}
                  </div>

                  {quizStatus !== "idle" && (
                    <button
                      onClick={handleNextQuizQuestion}
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 ml-auto"
                    >
                      <span>{quizIndex + 1 < quizPool.length ? "Next Device" : "Finish Drill"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Completed Quiz Summary */
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center space-y-6 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-indigo-500 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Trophy className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold">Cohesion Drill Completed!</h3>
                  <p className="text-sm text-slate-500">
                    You mastered all 30 Essential IELTS Linking Devices & Formulas.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{quizScore} / {quizPool.length}</div>
                    <div className="text-xs text-slate-500 font-semibold uppercase mt-1">Accuracy</div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">+{quizScore * 15}</div>
                    <div className="text-xs text-slate-500 font-semibold uppercase mt-1">XP Earned</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <button
                    onClick={handleRestartQuiz}
                    className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" /> Practice Again
                  </button>
                  <button
                    onClick={() => setActiveTab("explorer")}
                    className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs sm:text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    Review in Explorer
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: ESSAY ARCHITECTURE MAP ================= */}
        {activeTab === "architecture" && (
          <div className="space-y-8">
            {/* Intro banner */}
            <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="max-w-2xl space-y-2 relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" /> Task 2 Cohesion Blueprint
                </span>
                <h2 className="text-xl sm:text-2xl font-black">
                  Where Cohesive Devices Live in a Band 9 Essay
                </h2>
                <p className="text-xs sm:text-sm text-indigo-200/90 leading-relaxed">
                  Examiners award Band 9 for Coherence &amp; Cohesion when cohesive devices attract no unwanted attention and naturally weave ideas together. Follow this structural placement map.
                </p>
              </div>
            </div>

            {/* Architecture Zones */}
            <div className="space-y-6">
              {ESSAY_ARCHITECTURE_ZONES.map((zone, zIdx) => {
                const zoneDevices = LINKING_WORDS_DATA.filter((d) =>
                  zone.deviceIds.includes(d.id)
                );

                return (
                  <div
                    key={zIdx}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4"
                  >
                    {/* Zone Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                          {zone.badge}
                        </span>
                        <h3 className="text-lg font-bold mt-1 text-slate-900 dark:text-slate-100">
                          {zone.zone}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 max-w-md">
                        {zone.description}
                      </p>
                    </div>

                    {/* Zone Devices Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {zoneDevices.map((item) => (
                        <div
                          key={item.id}
                          className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60 flex flex-col justify-between space-y-2 hover:border-indigo-400 transition-colors"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">
                                {item.phrase}
                              </span>
                              <span className="text-[10px] text-slate-400 font-semibold">
                                #{item.id}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                              {item.whereToUse}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/40 dark:border-slate-700/40 text-xs">
                            <code className="text-[11px] font-mono text-slate-500 truncate max-w-[200px]">
                              {item.grammarFormula}
                            </code>
                            <button
                              onClick={() => handleSpeak(item.example)}
                              className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                            >
                              <Volume2 className="w-3 h-3" /> Listen
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
