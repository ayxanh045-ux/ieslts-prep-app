"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { useMistakesStore, MistakeItem } from "@/lib/store/useMistakesStore";
import { useIeltsStore } from "@/lib/store/useIeltsStore";
import { soundEngine } from "@/lib/audio/sound-effects";
import { SpellingInput } from "@/components/practice/SpellingInput";
import { SynonymDrill } from "@/components/practice/SynonymDrill";
import { BottomResultTray } from "@/components/practice/BottomResultTray";
import { SpellingExercise, SynonymDrillExercise } from "@/types/curriculum";
import {
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Trash2,
  Play,
  Award,
  ArrowRight,
  Volume2,
  X,
  Flame,
  Check,
  Search,
} from "lucide-react";

export default function MistakesPage() {
  const {
    mistakes,
    resolveMistake,
    removeMistake,
    clearResolvedMistakes,
    clearAllMistakes,
  } = useMistakesStore();

  const { completeTrack } = useIeltsStore();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [activeTab, setActiveTab] = useState<"all" | "spelling" | "synonym" | "resolved">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Practice Session State
  const [isPracticing, setIsPracticing] = useState(false);
  const [practiceQueue, setPracticeQueue] = useState<MistakeItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
  const [isSessionCompleted, setIsSessionCompleted] = useState(false);

  const activeMistakesList = useMemo(() => (mounted ? mistakes : []), [mounted, mistakes]);

  // Filtered mistakes for list view
  const filteredMistakes = useMemo(() => {
    return activeMistakesList.filter((item) => {
      if (activeTab === "resolved") {
        if (!item.resolved) return false;
      } else {
        if (item.resolved) return false;
        if (activeTab === "spelling" && item.type !== "spelling") return false;
        if (activeTab === "synonym" && item.type !== "synonym") return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchWord = item.targetWord.toLowerCase().includes(q);
        const matchMean = item.azerbaijaniMeaning?.toLowerCase().includes(q);
        const matchUser = item.userAnswer?.toLowerCase().includes(q);
        return matchWord || matchMean || matchUser;
      }

      return true;
    });
  }, [activeMistakesList, activeTab, searchQuery]);

  const unresolvedMistakes = useMemo(
    () => activeMistakesList.filter((m) => !m.resolved),
    [activeMistakesList]
  );
  const resolvedCount = useMemo(
    () => activeMistakesList.filter((m) => m.resolved).length,
    [activeMistakesList]
  );

  // Start Practicing all unresolved mistakes (or a specific item)
  const startPractice = (specificItem?: MistakeItem) => {
    const queue = specificItem
      ? [specificItem]
      : unresolvedMistakes.length > 0
      ? unresolvedMistakes
      : activeMistakesList;

    if (queue.length === 0) return;

    setPracticeQueue(queue);
    setCurrentIdx(0);
    setUserAnswer("");
    setStatus("idle");
    setIsSessionCompleted(false);
    setIsPracticing(true);
  };

  const currentMistake: MistakeItem | undefined = practiceQueue[currentIdx];

  // Map MistakeItem to SpellingExercise
  const currentSpellingExercise: SpellingExercise | undefined = useMemo(() => {
    if (!currentMistake || currentMistake.type !== "spelling") return undefined;
    return {
      id: currentMistake.id,
      type: "spelling",
      targetWord: currentMistake.targetWord,
      ipa: currentMistake.ipa || `/${currentMistake.targetWord}/`,
      definition: currentMistake.definition,
      azerbaijaniMeaning: currentMistake.azerbaijaniMeaning,
      synonyms: currentMistake.synonyms || [],
      contextSentenceWithBlank: currentMistake.contextSentenceWithBlank,
      misspellingTraps: currentMistake.misspellingTraps || [currentMistake.userAnswer],
      audioPromptText:
        currentMistake.audioPromptText ||
        `${currentMistake.targetWord}. ${currentMistake.contextSentenceWithBlank.replace("______________", currentMistake.targetWord)}`,
      explanation: currentMistake.explanation,
      cambridgeFrequency: "Extremely High",
      cambridgeRule: currentMistake.cambridgeRule,
    };
  }, [currentMistake]);

  // Map MistakeItem to SynonymDrillExercise
  const currentSynonymExercise: SynonymDrillExercise | undefined = useMemo(() => {
    if (!currentMistake || currentMistake.type !== "synonym") return undefined;
    const defaultOptions = currentMistake.options && currentMistake.options.length >= 4
      ? currentMistake.options
      : [currentMistake.targetWord, currentMistake.userAnswer, "substitute", "modify"].sort(() => 0.5 - Math.random());

    return {
      id: currentMistake.id,
      type: "synonym",
      targetWord: currentMistake.targetWord,
      azerbaijaniMeaning: currentMistake.azerbaijaniMeaning || "",
      definition: currentMistake.definition,
      commonOverusedWord: currentMistake.commonOverusedWord || "basic word",
      contextSentenceWithBlank: currentMistake.contextSentenceWithBlank,
      correctSynonyms: currentMistake.correctSynonyms || [currentMistake.targetWord],
      options: defaultOptions,
      correctAnswer: currentMistake.correctAnswer,
      explanation: currentMistake.explanation,
    };
  }, [currentMistake]);

  // Check Answer in Practice Mode
  const handleCheckAnswer = () => {
    if (!currentMistake) return;

    let isCorrect = false;
    if (currentMistake.type === "spelling") {
      isCorrect = userAnswer.trim().toLowerCase() === currentMistake.targetWord.toLowerCase();
    } else {
      isCorrect = userAnswer.trim().toLowerCase() === currentMistake.correctAnswer.toLowerCase();
    }

    if (isCorrect) {
      soundEngine.playCorrect();
      setStatus("correct");
      resolveMistake(currentMistake.id);
    } else {
      soundEngine.playIncorrect();
      setStatus("incorrect");
    }
  };

  const handleContinue = () => {
    setStatus("idle");
    setUserAnswer("");

    if (currentIdx + 1 < practiceQueue.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Completed practice session!
      setIsSessionCompleted(true);
      soundEngine.playFanfare();
      completeTrack("mistakes-drill", "writing", 40);

      if (typeof window !== "undefined") {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#58CC02", "#1CB0F6", "#FF9600", "#CE82FF"],
        });
      }
    }
  };

  // ================= RENDER PRACTICE MODE =================
  if (isPracticing && currentMistake) {
    const progressPercent = Math.min(
      100,
      Math.round(((currentIdx + (status === "correct" ? 1 : 0)) / practiceQueue.length) * 100)
    );

    return (
      <div className="min-h-screen bg-[#F7F9FA] flex flex-col justify-between pb-32">
        {/* Top Header */}
        <div className="border-b border-gray-200 bg-white px-4 py-3 sm:px-8">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
            <button
              onClick={() => setIsPracticing(false)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
              title="Exit Mistakes Practice"
            >
              <X className="h-6 w-6 stroke-[2.5]" />
            </button>

            {/* Progress Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-rose-500 transition-all duration-300 ease-out shadow-sm"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-black text-rose-600 border border-rose-200">
              <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
              <span>
                {currentIdx + 1} / {practiceQueue.length}
              </span>
            </div>
          </div>
        </div>

        {/* Practice Body */}
        <main className="mx-auto w-full max-w-4xl px-4 pt-6 sm:px-6">
          {isSessionCompleted ? (
            <div className="mx-auto max-w-lg rounded-3xl border-2 border-emerald-500 bg-white p-8 text-center shadow-xl">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lingo-green text-white shadow-lingo-green">
                <Award className="h-10 w-10 stroke-[2.5]" />
              </div>

              <h2 className="mt-4 text-2xl sm:text-3xl font-black text-gray-900">
                All Mistakes Mastered!
              </h2>
              <p className="mt-1 text-sm font-semibold text-gray-500">
                You successfully reviewed and corrected your previous mistakes.
              </p>

              <div className="mt-6 rounded-2xl bg-emerald-50 p-4 border border-emerald-200">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-800">
                  Reward Earned
                </span>
                <div className="text-2xl font-black text-emerald-600 mt-0.5">+40 XP</div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={() => setIsPracticing(false)}
                  className="btn-3d flex items-center justify-center gap-2 rounded-2xl bg-lingo-green py-4 text-base font-black uppercase text-white shadow-lingo-green hover:bg-lingo-green-dark"
                >
                  <span>Return to Mistakes Bank</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Previous Mistake Warning Reminder */}
              <div className="mx-auto max-w-2xl rounded-2xl bg-rose-50/90 p-3.5 border-2 border-rose-200 shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-100 text-rose-700 shrink-0 font-bold">
                    ⚠️
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-rose-800 block">
                      Targeted Correction:
                    </span>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Əvvəlki səhv cavabınız:{" "}
                      <span className="font-mono font-bold text-rose-600 line-through">
                        &ldquo;{currentMistake.userAnswer}&rdquo;
                      </span>
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-rose-700 border border-rose-200 shrink-0">
                  {currentMistake.type === "spelling" ? "Spelling Drill" : "Synonym Drill"}
                </span>
              </div>

              {/* Render Exercise by Type */}
              {currentMistake.type === "spelling" && currentSpellingExercise && (
                <SpellingInput
                  exercise={currentSpellingExercise}
                  userAnswer={userAnswer}
                  onAnswerChange={(val) => setUserAnswer(val)}
                  status={status}
                />
              )}

              {currentMistake.type === "synonym" && currentSynonymExercise && (
                <SynonymDrill
                  exercise={currentSynonymExercise}
                  selectedAnswer={userAnswer}
                  onSelectAnswer={(val) => setUserAnswer(val)}
                  status={status}
                />
              )}
            </div>
          )}
        </main>

        {/* Bottom Check Bar */}
        {!isSessionCompleted && status === "idle" && (
          <div className="fixed bottom-0 left-0 right-0 z-30 border-t-2 border-gray-200 bg-white p-4 sm:p-5">
            <div className="mx-auto flex max-w-5xl items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 hidden sm:inline">
                Səhv etdiyiniz sözləri bir-bir düzəldərək tam mənimsəyin
              </span>
              <button
                onClick={handleCheckAnswer}
                disabled={!userAnswer.trim()}
                className={`btn-3d ml-auto w-full sm:w-auto rounded-2xl px-10 py-3.5 text-base font-black uppercase tracking-wider text-white shadow-lingo transition-all ${
                  userAnswer.trim()
                    ? "bg-lingo-green hover:bg-lingo-green-dark shadow-lingo-green"
                    : "bg-gray-300 text-gray-500 shadow-lingo-gray cursor-not-allowed"
                }`}
              >
                Check Answer
              </button>
            </div>
          </div>
        )}

        {/* Bottom Result Tray */}
        <BottomResultTray
          status={status}
          correctAnswer={
            currentMistake.type === "spelling"
              ? currentMistake.targetWord
              : currentMistake.correctAnswer
          }
          explanation={currentMistake.explanation}
          cambridgeTip={`Səhvinizi uğurla düzəltdiniz! Bu sözü IELTS Writing-də təkrar etməməyə çalışın.`}
          xpEarned={15}
          onContinue={handleContinue}
        />
      </div>
    );
  }

  // ================= RENDER LIST / BANK MODE =================
  return (
    <div className="min-h-screen bg-[#F7F9FA] pb-24 pt-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 p-6 sm:p-8 text-white shadow-lingo mb-8">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-sm">
                <AlertTriangle className="h-3.5 w-3.5 fill-current" />
                Personal Error Memory & Targeted Drills
              </div>
              <h1 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight">
                My IELTS Mistakes Bank
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                Spelling və sinonim məşqlərində etdiyiniz hər bir səhv avtomatik olaraq burada saxlanılır.
                Səhvlərinizi xüsusi rejimdə təkrar məşq edərək Cambridge imtahanında cərimələnməkdən qorunun.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 text-center border border-white/20 min-w-[85px]">
                <div className="text-xl font-black">{unresolvedMistakes.length}</div>
                <div className="text-[10px] uppercase font-bold text-white/80">Active Errors</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 text-center border border-white/20 min-w-[85px]">
                <div className="text-xl font-black text-emerald-300">{resolvedCount}</div>
                <div className="text-[10px] uppercase font-bold text-white/80">Corrected</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA PRACTICE BANNER */}
        {unresolvedMistakes.length > 0 && (
          <div className="mb-6 rounded-3xl border-2 border-rose-300 bg-white p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-lingo-red shrink-0">
                <Flame className="h-6 w-6 fill-current animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900">
                  Ready to correct your {unresolvedMistakes.length} mistakes?
                </h3>
                <p className="text-xs text-gray-500">
                  Practice only the exact spelling traps and synonym replacements you struggled with.
                </p>
              </div>
            </div>

            <button
              onClick={() => startPractice()}
              className="btn-3d w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-rose-600 px-6 py-3 text-sm font-black uppercase text-white shadow-lingo-red hover:bg-rose-700 transition-all shrink-0"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>Practice All Mistakes ({unresolvedMistakes.length})</span>
            </button>
          </div>
        )}

        {/* NAVIGATION CONTROLS & FILTER TABS */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border-2 border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
          {/* Tabs */}
          <div className="flex gap-1.5 bg-gray-100 p-1 rounded-2xl overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-black transition-all ${
                activeTab === "all"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <span>All Active ({unresolvedMistakes.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("spelling")}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-black transition-all ${
                activeTab === "spelling"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <span>Spelling ({unresolvedMistakes.filter((m) => m.type === "spelling").length})</span>
            </button>
            <button
              onClick={() => setActiveTab("synonym")}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-black transition-all ${
                activeTab === "synonym"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <span>Synonyms ({unresolvedMistakes.filter((m) => m.type === "synonym").length})</span>
            </button>
            <button
              onClick={() => setActiveTab("resolved")}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-black transition-all ${
                activeTab === "resolved"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <Check className="h-3 w-3 text-emerald-600" />
              <span>Corrected ({resolvedCount})</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search word or meaning..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-1.5 pl-9 pr-8 text-xs font-medium text-gray-800 placeholder-gray-400 focus:border-rose-500 focus:bg-white focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Clear Controls */}
          {activeMistakesList.length > 0 && (
            <div className="flex items-center gap-2 self-end sm:self-center">
              {resolvedCount > 0 && (
                <button
                  onClick={clearResolvedMistakes}
                  className="rounded-xl border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Clear Corrected
                </button>
              )}
              <button
                onClick={() => {
                  if (confirm("Bütün səhvlər tarixçəsini sıfırlamaq istədiyinizdən əminsiniz?")) {
                    clearAllMistakes();
                  }
                }}
                className="rounded-xl border border-red-200 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-50 transition-colors"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* MISTAKES LIST */}
        {filteredMistakes.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-lg font-black text-gray-800">
              {activeTab === "resolved" ? "Hələ düzəldilmiş səhv yoxdur" : "Təbriklər! Aktiv səhviniz yoxdur"}
            </h3>
            <p className="mt-1 text-xs text-gray-500 max-w-md mx-auto">
              Writing bölməsində spelling və sinonim tapşırıqlarını işlədikdə səhv etdiyiniz hər bir söz
              avtomatik bura düşəcək və təkrar məşq edə biləcəksiniz.
            </p>
            <Link
              href="/learn"
              className="btn-3d mt-5 inline-flex items-center gap-2 rounded-xl bg-lingo-blue px-6 py-2.5 text-xs font-black uppercase text-white shadow-lingo-blue"
            >
              <span>Practice Writing Drills</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMistakes.map((mistake) => (
              <div
                key={mistake.id}
                className={`flex flex-col justify-between rounded-3xl border-2 p-5 bg-white transition-all hover:shadow-md ${
                  mistake.resolved
                    ? "border-emerald-200 bg-emerald-50/20"
                    : "border-rose-200 hover:border-rose-400"
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`rounded-xl px-2.5 py-0.5 text-xs font-black uppercase ${
                        mistake.type === "spelling"
                          ? "bg-amber-100 text-amber-900 border border-amber-200"
                          : "bg-purple-100 text-purple-900 border border-purple-200"
                      }`}
                    >
                      {mistake.type === "spelling" ? "Spelling Trap" : "Synonym Upgrade"}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-800">
                        {mistake.mistakeCount}x səhv
                      </span>
                      <button
                        onClick={() => removeMistake(mistake.id)}
                        className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-red-600 transition-colors"
                        title="Remove from Mistakes"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Target Word */}
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xl font-black text-gray-900 tracking-wide">
                      {mistake.targetWord}
                    </h4>
                    <button
                      onClick={() => soundEngine.speak(mistake.targetWord, "British")}
                      className="rounded-xl p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                      title="Pronounce"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Wrong Attempt vs Correct */}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-rose-50 border border-rose-200 px-2.5 py-1 text-xs font-bold text-rose-700">
                      ❌ Səhv: <span className="line-through">{mistake.userAnswer}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-bold text-emerald-800">
                      ✅ Düzgün: {mistake.correctAnswer}
                    </span>
                  </div>

                  {/* Azerbaijani Meaning */}
                  {mistake.azerbaijaniMeaning && (
                    <p className="mt-2.5 text-xs text-gray-700">
                      <span className="font-bold text-gray-900">🇦🇿 Məna: </span>
                      {mistake.azerbaijaniMeaning}
                    </p>
                  )}

                  {/* English Definition */}
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                    {mistake.definition}
                  </p>
                </div>

                {/* Card Footer Action */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="text-[11px] font-bold text-gray-400">
                    {mistake.resolved ? "✅ Düzəldilib" : "🔴 Məşq tələb olunur"}
                  </span>
                  <button
                    onClick={() => startPractice(mistake)}
                    className="btn-3d inline-flex items-center gap-1.5 rounded-xl bg-lingo-blue px-3.5 py-1.5 text-xs font-black uppercase text-white shadow-lingo-blue hover:brightness-105 transition-all"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Məşq Et</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
