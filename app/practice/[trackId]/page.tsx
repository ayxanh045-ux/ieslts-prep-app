"use client";

import { useState, useMemo, use, useEffect, useRef } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { useIeltsStore } from "@/lib/store/useIeltsStore";
import { useMistakesStore } from "@/lib/store/useMistakesStore";
import { soundEngine } from "@/lib/audio/sound-effects";
import {
  getTrackById,
  getReadingPassageById,
  getListeningChunkById,
  SPELLING_EXERCISES,
  SYNONYM_EXERCISES,
  SPELLING_PACKS,
  GRAMMAR_EXERCISES,
  PARAPHRASE_EXERCISES,
} from "@/lib/ielts-curriculum";

import { ReadingMicroPane } from "@/components/practice/ReadingMicroPane";
import { SpellingInput } from "@/components/practice/SpellingInput";
import { SynonymDrill } from "@/components/practice/SynonymDrill";
import { GrammarTileDrill } from "@/components/practice/GrammarTileDrill";
import { ParaphraseEditor } from "@/components/practice/ParaphraseEditor";
import { AudioChunkPlayer } from "@/components/practice/AudioChunkPlayer";
import { BottomResultTray } from "@/components/practice/BottomResultTray";

import { X, Heart, Award, ArrowRight, RotateCcw, Check } from "lucide-react";

interface PageProps {
  params: Promise<{ trackId: string }>;
}

export default function PracticeSessionPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const trackId = resolvedParams.trackId;

  const track = getTrackById(trackId);
  const {
    completeTrack,
    recordAttempt,
    completedExerciseIds,
    markExerciseCompleted,
    markPackCompleted,
    isPackCompleted,
    setPackProgress,
    getPackProgress,
    setActivePack,
    getActivePack,
  } = useIeltsStore();
  const { recordMistake, resolveMistake } = useMistakesStore();

  const [mounted, setMounted] = useState(false);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Session Progression State
  const [questionIndex, setQuestionIndex] = useState(0);
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedPackId, setSelectedPackId] = useState<string>("pack-1");

  // User Answer Inputs across types
  const [selectedStringAnswer, setSelectedStringAnswer] = useState("");
  const [grammarTiles, setGrammarTiles] = useState<string[]>([]);
  const [listeningAnswers, setListeningAnswers] = useState<{ [qId: string]: string }>({});

  // Active exercises for spelling tracks (sliced by pack or all 500)
  const activeSpellingExercises = useMemo(() => {
    if (trackId !== "writing-spelling") return [];
    if (selectedPackId === "all") return SPELLING_EXERCISES;
    const pack = SPELLING_PACKS.find((p) => p.id === selectedPackId);
    if (!pack) return SPELLING_EXERCISES;
    const s = pack.startIndex ?? pack.start;
    const e = pack.endIndex ?? pack.end;
    return SPELLING_EXERCISES.slice(s, e);
  }, [trackId, selectedPackId]);

  // Active exercises for synonym tracks (sliced by pack or all 500)
  const activeSynonymExercises = useMemo(() => {
    if (trackId !== "writing-synonyms") return [];
    if (selectedPackId === "all") return SYNONYM_EXERCISES;
    const pack = SPELLING_PACKS.find((p) => p.id === selectedPackId);
    if (!pack) return SYNONYM_EXERCISES;
    const s = pack.startIndex ?? pack.start;
    const e = pack.endIndex ?? pack.end;
    return SYNONYM_EXERCISES.slice(s, e);
  }, [trackId, selectedPackId]);

  // Helper to switch pack and immediately resume its first unfinished / saved question
  const handleSelectPack = (packId: string) => {
    setSelectedPackId(packId);
    setActivePack(trackId, packId);
    setStatus("idle");
    setSelectedStringAnswer("");
    setIsCompleted(false);

    const allExercises = trackId === "writing-spelling" ? SPELLING_EXERCISES : SYNONYM_EXERCISES;
    let packWords = allExercises;
    if (packId !== "all") {
      const packDef = SPELLING_PACKS.find((p) => p.id === packId);
      if (packDef) {
        const s = packDef.startIndex ?? packDef.start;
        const e = packDef.endIndex ?? packDef.end;
        packWords = allExercises.slice(s, e);
      }
    }

    const savedQuestionIdx = getPackProgress(trackId, packId);
    if (
      savedQuestionIdx > 0 &&
      savedQuestionIdx < packWords.length &&
      !completedExerciseIds.includes(packWords[savedQuestionIdx]?.id)
    ) {
      setQuestionIndex(savedQuestionIdx);
    } else {
      const firstUnfinished = packWords.findIndex((w) => !completedExerciseIds.includes(w.id));
      setQuestionIndex(firstUnfinished >= 0 ? firstUnfinished : 0);
    }
  };

  // Helper to jump to a specific word inside current pack
  const handleJumpToWord = (idx: number) => {
    setQuestionIndex(idx);
    setStatus("idle");
    setSelectedStringAnswer("");
    if (trackId === "writing-spelling" || trackId === "writing-synonyms") {
      setPackProgress(trackId, selectedPackId, idx);
    }
  };

  // Auto-resume on initial load: choose the last active pack, or if completed, auto-advance to next pack!
  useEffect(() => {
    if (!mounted || hasInitializedRef.current) return;
    if (trackId !== "writing-spelling" && trackId !== "writing-synonyms") return;

    hasInitializedRef.current = true;

    const allExercises = trackId === "writing-spelling" ? SPELLING_EXERCISES : SYNONYM_EXERCISES;

    const checkPackDone = (pId: string) => {
      if (isPackCompleted(trackId, pId)) return true;
      const packDef = SPELLING_PACKS.find((p) => p.id === pId);
      if (!packDef) return false;
      const s = packDef.startIndex ?? packDef.start;
      const e = packDef.endIndex ?? packDef.end;
      const words = allExercises.slice(s, e);
      return words.length > 0 && words.every((w) => completedExerciseIds.includes(w.id));
    };

    const savedPack = getActivePack(trackId);
    let chosenPackId = savedPack || "pack-1";

    // If the saved pack is 100% completed, auto-advance to the first unfinished pack!
    if (chosenPackId !== "all" && checkPackDone(chosenPackId)) {
      const unfinishedPack = SPELLING_PACKS.find((p) => !checkPackDone(p.id));
      if (unfinishedPack) {
        chosenPackId = unfinishedPack.id;
      }
    }

    setSelectedPackId(chosenPackId);
    setActivePack(trackId, chosenPackId);

    // Now resolve starting word within chosen pack
    let packWords = allExercises;
    if (chosenPackId !== "all") {
      const packDef = SPELLING_PACKS.find((p) => p.id === chosenPackId);
      if (packDef) {
        const s = packDef.startIndex ?? packDef.start;
        const e = packDef.endIndex ?? packDef.end;
        packWords = allExercises.slice(s, e);
      }
    }

    const savedQuestionIdx = getPackProgress(trackId, chosenPackId);
    if (
      savedQuestionIdx > 0 &&
      savedQuestionIdx < packWords.length &&
      !completedExerciseIds.includes(packWords[savedQuestionIdx]?.id)
    ) {
      setQuestionIndex(savedQuestionIdx);
    } else {
      const firstUnfinished = packWords.findIndex((w) => !completedExerciseIds.includes(w.id));
      setQuestionIndex(firstUnfinished >= 0 ? firstUnfinished : 0);
    }
  }, [mounted, trackId]);

  // Resolve Curriculum Data for Track
  const readingPassage = getReadingPassageById(trackId);
  const listeningChunk = getListeningChunkById(trackId);

  // Calculate Total Steps for Progress Bar
  let totalSteps = 1;
  if (readingPassage) totalSteps = readingPassage.questions.length;
  else if (trackId === "writing-spelling") totalSteps = activeSpellingExercises.length || 1;
  else if (trackId === "writing-synonyms") totalSteps = activeSynonymExercises.length || 1;
  else if (trackId === "writing-grammar") totalSteps = GRAMMAR_EXERCISES.length;
  else if (trackId === "writing-paraphrase") totalSteps = PARAPHRASE_EXERCISES.length;
  else if (listeningChunk) totalSteps = listeningChunk.questions.length;

  const progressPercent = Math.min(100, Math.round(((questionIndex + (status === "correct" ? 1 : 0)) / totalSteps) * 100));

  // Determine Current Exercise Details for Bottom Tray
  let currentCorrectAnswer = "";
  let currentExplanation = "";
  let currentProofQuote = "";
  let currentCambridgeTip = "";

  if (readingPassage) {
    const q = readingPassage.questions[questionIndex];
    currentCorrectAnswer = q.correctAnswer;
    currentExplanation = q.explanation;
    currentProofQuote = q.proofQuote;
    currentCambridgeTip = q.cambridgeTip;
  } else if (trackId === "writing-spelling") {
    const ex = activeSpellingExercises[questionIndex] || SPELLING_EXERCISES[0];
    currentCorrectAnswer = ex.targetWord;
    currentExplanation = ex.explanation;
    currentCambridgeTip = `Pay special attention to double letters and silent sounds in ${ex.targetWord}.`;
  } else if (trackId === "writing-synonyms") {
    const ex = activeSynonymExercises[questionIndex] || SYNONYM_EXERCISES[0];
    currentCorrectAnswer = ex.correctAnswer;
    currentExplanation = ex.explanation;
    currentCambridgeTip = `Avoid repeating '${ex.commonOverusedWord}'. Use '${ex.correctAnswer}' or other academic synonyms (${ex.correctSynonyms.slice(0, 3).join(", ")}) to elevate Lexical Resource.`;
  } else if (trackId === "writing-grammar") {
    const ex = GRAMMAR_EXERCISES[questionIndex];
    currentCorrectAnswer = ex.targetSentence;
    currentExplanation = ex.explanation;
    currentCambridgeTip = ex.grammarRule;
  } else if (trackId === "writing-paraphrase") {
    const ex = PARAPHRASE_EXERCISES[questionIndex];
    const bestOpt = ex.options.find((o) => o.isBest);
    currentCorrectAnswer = bestOpt?.text || "";
    currentExplanation = ex.explanation;
    currentCambridgeTip = "Always avoid copying prompt phrases word-for-word in IELTS Writing.";
  } else if (listeningChunk) {
    const q = listeningChunk.questions[questionIndex];
    currentCorrectAnswer = q.correctAnswer;
    currentExplanation = q.distractorTrapExplanation;
    currentProofQuote = q.proofQuote;
    currentCambridgeTip = `Watch out for traps where speakers state a preliminary fact before amending it.`;
  }

  // Answer Submission Handler
  const handleCheckAnswer = () => {
    let isCorrect = false;

    if (readingPassage) {
      const q = readingPassage.questions[questionIndex];
      const normalizedUser = selectedStringAnswer.trim().toLowerCase();
      const normalizedCorrect = q.correctAnswer.trim().toLowerCase();
      const matchAcceptable = q.acceptableAnswers?.some(
        (ans) => ans.trim().toLowerCase() === normalizedUser
      );
      isCorrect = normalizedUser === normalizedCorrect || !!matchAcceptable;
    } else if (trackId === "writing-spelling") {
      const ex = activeSpellingExercises[questionIndex] || SPELLING_EXERCISES[0];
      isCorrect = selectedStringAnswer.trim().toLowerCase() === ex.targetWord.toLowerCase();
    } else if (trackId === "writing-synonyms") {
      const ex = activeSynonymExercises[questionIndex] || SYNONYM_EXERCISES[0];
      isCorrect = selectedStringAnswer.trim().toLowerCase() === ex.correctAnswer.trim().toLowerCase();
    } else if (trackId === "writing-grammar") {
      const ex = GRAMMAR_EXERCISES[questionIndex];
      const joinedUser = grammarTiles.join(" ").trim().toLowerCase();
      const joinedTarget = ex.correctTileOrder.join(" ").trim().toLowerCase();
      isCorrect = joinedUser === joinedTarget;
    } else if (trackId === "writing-paraphrase") {
      const ex = PARAPHRASE_EXERCISES[questionIndex];
      const chosen = ex.options.find((o) => o.id === selectedStringAnswer);
      isCorrect = !!chosen?.isBest;
    } else if (listeningChunk) {
      const q = listeningChunk.questions[questionIndex];
      const rawAns = listeningAnswers[q.id] || "";
      const normalizedUser = rawAns.trim().toLowerCase();
      const normalizedCorrect = q.correctAnswer.trim().toLowerCase();
      const matchAcceptable = q.acceptableAnswers?.some(
        (ans) => ans.trim().toLowerCase() === normalizedUser
      );
      isCorrect = normalizedUser === normalizedCorrect || !!matchAcceptable;
    }

    if (track) {
      recordAttempt(track.module, isCorrect);
    }

    if (isCorrect) {
      soundEngine.playCorrect();
      setStatus("correct");
      if (trackId === "writing-spelling") {
        const ex = activeSpellingExercises[questionIndex] || SPELLING_EXERCISES[0];
        resolveMistake(ex.id);
        markExerciseCompleted(ex.id);
      } else if (trackId === "writing-synonyms") {
        const ex = activeSynonymExercises[questionIndex] || SYNONYM_EXERCISES[0];
        resolveMistake(ex.id);
        markExerciseCompleted(ex.id);
      }
    } else {
      soundEngine.playIncorrect();
      setStatus("incorrect");

      // Record mistake for targeted practice later
      if (trackId === "writing-spelling") {
        const ex = activeSpellingExercises[questionIndex] || SPELLING_EXERCISES[0];
        recordMistake({
          id: ex.id,
          type: "spelling",
          targetWord: ex.targetWord,
          azerbaijaniMeaning: ex.azerbaijaniMeaning,
          definition: ex.definition,
          userAnswer: selectedStringAnswer,
          correctAnswer: ex.targetWord,
          contextSentenceWithBlank: ex.contextSentenceWithBlank,
          explanation: ex.explanation,
          ipa: ex.ipa,
          audioPromptText: ex.audioPromptText,
          misspellingTraps: ex.misspellingTraps,
          cambridgeRule: ex.cambridgeRule,
          synonyms: ex.synonyms,
        });
      } else if (trackId === "writing-synonyms") {
        const ex = activeSynonymExercises[questionIndex] || SYNONYM_EXERCISES[0];
        recordMistake({
          id: ex.id,
          type: "synonym",
          targetWord: ex.targetWord,
          azerbaijaniMeaning: ex.azerbaijaniMeaning,
          definition: ex.definition,
          userAnswer: selectedStringAnswer,
          correctAnswer: ex.correctAnswer,
          contextSentenceWithBlank: ex.contextSentenceWithBlank,
          explanation: ex.explanation,
          commonOverusedWord: ex.commonOverusedWord,
          correctSynonyms: ex.correctSynonyms,
          options: ex.options,
        });
      }
    }
  };

  // Continue to Next Step Handler
  const handleContinue = () => {
    setStatus("idle");
    setSelectedStringAnswer("");
    setGrammarTiles([]);

    if (questionIndex + 1 < totalSteps) {
      const nextIdx = questionIndex + 1;
      setQuestionIndex(nextIdx);
      if (trackId === "writing-spelling" || trackId === "writing-synonyms") {
        setPackProgress(trackId, selectedPackId, nextIdx);
      }
    } else {
      if (trackId === "writing-spelling" || trackId === "writing-synonyms") {
        markPackCompleted(trackId, selectedPackId);
        setPackProgress(trackId, selectedPackId, totalSteps);

        // Advance saved active pack to the next pack so next visit starts at next pack!
        if (selectedPackId !== "all") {
          const currentPackIdx = SPELLING_PACKS.findIndex((p) => p.id === selectedPackId);
          if (currentPackIdx >= 0 && currentPackIdx + 1 < SPELLING_PACKS.length) {
            const nextPack = SPELLING_PACKS[currentPackIdx + 1];
            setActivePack(trackId, nextPack.id);
            setPackProgress(trackId, nextPack.id, 0);
          }
        }
      }
      // Completed entire drill!
      triggerVictoryCelebration();
    }
  };

  // Victory Celebration
  const triggerVictoryCelebration = () => {
    setIsCompleted(true);
    soundEngine.playFanfare();
    if (track) {
      completeTrack(track.id, track.module, track.xpReward);
    }

    // Canvas Confetti blast
    if (typeof window !== "undefined") {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#58CC02", "#1CB0F6", "#FF9600", "#CE82FF"],
      });
    }
  };

  // Has User Provided an Input to enable the "Check" button?
  let canCheck = false;
  if (readingPassage) {
    canCheck = selectedStringAnswer.trim().length > 0;
  } else if (trackId === "writing-spelling") {
    canCheck = selectedStringAnswer.trim().length > 0;
  } else if (trackId === "writing-synonyms") {
    canCheck = selectedStringAnswer.trim().length > 0;
  } else if (trackId === "writing-grammar") {
    canCheck = grammarTiles.length > 0;
  } else if (trackId === "writing-paraphrase") {
    canCheck = selectedStringAnswer.length > 0;
  } else if (listeningChunk) {
    const q = listeningChunk.questions[questionIndex];
    canCheck = !!listeningAnswers[q.id]?.trim();
  }

  // Global Enter Key Handler for seamless keyboard practice:
  // If status is idle & canCheck -> Check Answer
  // If status is correct/incorrect -> Continue to next question
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (status === "idle" && canCheck) {
          e.preventDefault();
          handleCheckAnswer();
        } else if (status !== "idle" && !isCompleted) {
          e.preventDefault();
          handleContinue();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [status, canCheck, isCompleted, questionIndex, selectedStringAnswer, grammarTiles, listeningAnswers]);

  if (!track) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-black text-gray-800">Track Not Found</h2>
        <p className="text-sm text-gray-500 mt-2">The requested practice drill does not exist.</p>
        <Link
          href="/learn"
          className="btn-3d mt-4 rounded-xl bg-lingo-blue px-6 py-2.5 text-sm font-bold text-white shadow-lingo-blue"
        >
          Return to Skill Tree
        </Link>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-[#F7F9FA] flex flex-col justify-between pb-32">
      {/* TOP HEADER: Navigation, Progress Bar, Super Heart */}
      <div className="border-b border-gray-200 bg-white px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          {/* Close button */}
          <Link
            href="/learn"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            title="Exit Session"
          >
            <X className="h-6 w-6 stroke-[2.5]" />
          </Link>

          {/* Duolingo-style Progress Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-lingo-green transition-all duration-300 ease-out shadow-sm"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Super Unlimited Attempts Badge */}
          <div
            className="flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-black text-lingo-red border border-red-100"
            title="Super IELTS Mode: Unlimited Practice Attempts"
          >
            <Heart className="h-4 w-4 fill-lingo-red text-lingo-red animate-pulse" />
            <span className="text-sm font-black">∞</span>
          </div>
        </div>
      </div>

      {/* MAIN EXERCISE BODY */}
      <main className="mx-auto w-full max-w-5xl px-4 pt-6 sm:px-6">
        {/* If Completed, show Victory Card */}
        {isCompleted ? (
          <div className="mx-auto max-w-lg rounded-3xl border-2 border-lingo-green bg-white p-8 text-center shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lingo-green text-white shadow-lingo-green">
              <Award className="h-10 w-10 stroke-[2.5]" />
            </div>

            <h2 className="mt-4 text-2xl sm:text-3xl font-black text-gray-900">
              {(() => {
                if (trackId === "writing-spelling" || trackId === "writing-synonyms") {
                  const currentPackObj = SPELLING_PACKS.find((p) => p.id === selectedPackId);
                  return currentPackObj ? `${currentPackObj.name.split(":")[0]} Tamamlandı!` : "Dərs Tamamlandı!";
                }
                return "Lesson Complete!";
              })()}
            </h2>
            <p className="mt-1 text-sm font-semibold text-gray-500">
              {(() => {
                if (trackId === "writing-spelling" || trackId === "writing-synonyms") {
                  return "Bütün sözlər yadda saxlanıldı. Növbəti dəfə avtomatik qaldığınız yerdən davam edəcəksiniz.";
                }
                return "You just sharpened your authentic Cambridge exam reflexes.";
              })()}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-amber-50 p-4 border border-amber-200">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-700">
                  XP Earned
                </span>
                <div className="text-2xl font-black text-amber-600 mt-0.5">
                  +{track.xpReward} XP
                </div>
              </div>
              <div className="rounded-2xl bg-green-50 p-4 border border-green-200">
                <span className="text-[11px] font-black uppercase tracking-wider text-green-700">
                  Status
                </span>
                <div className="text-lg font-black text-green-700 mt-0.5">
                  Tamamlandı ✓
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {/* If there is a next pack, show prominent Next Pack button! */}
              {(() => {
                if ((trackId === "writing-spelling" || trackId === "writing-synonyms") && selectedPackId !== "all") {
                  const currentPackIdx = SPELLING_PACKS.findIndex((p) => p.id === selectedPackId);
                  if (currentPackIdx >= 0 && currentPackIdx + 1 < SPELLING_PACKS.length) {
                    const nextPack = SPELLING_PACKS[currentPackIdx + 1];
                    return (
                      <button
                        onClick={() => handleSelectPack(nextPack.id)}
                        className="btn-3d flex items-center justify-center gap-2 rounded-2xl bg-lingo-green py-4 text-base font-black uppercase text-white shadow-lingo-green hover:bg-lingo-green-dark"
                      >
                        <span>Növbəti: {nextPack.name.split(":")[0]}-ə Keç</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    );
                  }
                }
                return null;
              })()}

              <Link
                href="/learn"
                className="btn-3d flex items-center justify-center gap-2 rounded-2xl bg-lingo-blue py-3.5 text-base font-black uppercase text-white shadow-lingo-blue hover:bg-lingo-blue-dark"
              >
                <span>Continue on Skill Tree</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={() => {
                  setIsCompleted(false);
                  setQuestionIndex(0);
                  setStatus("idle");
                  if (trackId === "writing-spelling" || trackId === "writing-synonyms") {
                    setPackProgress(trackId, selectedPackId, 0);
                  }
                }}
                className="btn-3d flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 shadow-lingo-gray"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Bu Pack-i Təkrarla</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* 1. Reading Module */}
            {readingPassage && (
              <ReadingMicroPane
                passage={readingPassage}
                activeQuestionIndex={questionIndex}
                selectedAnswer={selectedStringAnswer}
                onSelectAnswer={(val) => setSelectedStringAnswer(val)}
                status={status}
              />
            )}

            {/* 2a. Writing: Spelling */}
            {trackId === "writing-spelling" && (
              <div className="space-y-4">
                {/* Pack Selection & Word Navigator Bar */}
                <div className="mx-auto max-w-2xl rounded-2xl bg-white p-4 border-2 border-gray-200 shadow-sm space-y-3">
                  {/* Pack Header & Progress */}
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase tracking-wider text-gray-700">
                        {SPELLING_PACKS.find((p) => p.id === selectedPackId)?.name.split(":")[0] || "500 Core Words"}
                      </span>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-black text-emerald-800 flex items-center gap-1">
                        <Check className="h-3 w-3" />
                        <span>
                          {mounted
                            ? activeSpellingExercises.filter((w) => completedExerciseIds.includes(w.id)).length
                            : 0} / {activeSpellingExercises.length} Tamamlanıb
                        </span>
                      </span>
                    </div>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      Söz {questionIndex + 1} / {activeSpellingExercises.length}
                    </span>
                  </div>

                  {/* Horizontal Scrollable Packs with Tik (✓) */}
                  <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {SPELLING_PACKS.map((pack) => {
                      const s = pack.startIndex ?? pack.start;
                      const e = pack.endIndex ?? pack.end;
                      const packWords = SPELLING_EXERCISES.slice(s, e);
                      const doneCount = mounted
                        ? packWords.filter((w) => completedExerciseIds.includes(w.id)).length
                        : 0;
                      const isAllDone = isPackCompleted(trackId, pack.id) || (doneCount === packWords.length && packWords.length > 0);
                      const isSelected = selectedPackId === pack.id;

                      return (
                        <button
                          key={pack.id}
                          type="button"
                          onClick={() => {
                            if (selectedPackId !== pack.id) {
                              handleSelectPack(pack.id);
                            }
                          }}
                          className={`btn-3d flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                            isSelected
                              ? "bg-lingo-blue text-white shadow-lingo-blue border border-lingo-blue-dark"
                              : isAllDone
                              ? "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                          }`}
                        >
                          <span>{pack.icon}</span>
                          <span>{pack.name.split(":")[0]}</span>
                          {isAllDone ? (
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-black text-white">
                              ✓
                            </span>
                          ) : doneCount > 0 ? (
                            <span
                              className={`rounded-full px-1.5 py-0.2 text-[9px] font-black ${
                                isSelected
                                  ? "bg-white/20 text-white"
                                  : "bg-emerald-100 text-emerald-800"
                              }`}
                            >
                              {doneCount}/{packWords.length}
                            </span>
                          ) : null}
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      onClick={() => {
                        if (selectedPackId !== "all") {
                          handleSelectPack("all");
                        }
                      }}
                      className={`btn-3d flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                        selectedPackId === "all"
                          ? "bg-purple-600 text-white shadow-lingo-purple border border-purple-700"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      <span>🔥</span>
                      <span>All 500 Words</span>
                      {mounted && (
                        <span
                          className={`rounded-full px-1.5 py-0.2 text-[9px] font-black ${
                            selectedPackId === "all"
                              ? "bg-white/20 text-white"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {SPELLING_EXERCISES.filter((w) => completedExerciseIds.includes(w.id)).length}/500
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Word Navigator (Pills with Checkmark ✓) */}
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-bold text-gray-400">
                        Pack daxilindəki sözlər:
                      </span>
                      {activeSpellingExercises[questionIndex] &&
                        mounted &&
                        completedExerciseIds.includes(activeSpellingExercises[questionIndex].id) && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-600">
                            <Check className="h-3 w-3" />
                            <span>Bu söz tamamlanıb (✓)</span>
                          </span>
                        )}
                    </div>
                    <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
                      {activeSpellingExercises.map((ex, idx) => {
                        const isDone = mounted && completedExerciseIds.includes(ex.id);
                        const isCurrent = idx === questionIndex;
                        return (
                          <button
                            key={ex.id}
                            type="button"
                            onClick={() => handleJumpToWord(idx)}
                            className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-all ${
                              isCurrent
                                ? "border-2 border-lingo-blue bg-lingo-blue text-white shadow-sm ring-2 ring-lingo-blue/20"
                                : isDone
                                ? "border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                                : "border border-gray-200 bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-700"
                            }`}
                            title={`Söz ${idx + 1}: ${ex.targetWord}${isDone ? " (Tamamlanıb ✓)" : ""}`}
                          >
                            {isDone ? "✓" : idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Jump to First Unfinished Word if user is viewing a completed one */}
                  {(() => {
                    const firstUnfinished = activeSpellingExercises.findIndex(
                      (ex) => !completedExerciseIds.includes(ex.id)
                    );
                    const isCurDone =
                      activeSpellingExercises[questionIndex] &&
                      completedExerciseIds.includes(activeSpellingExercises[questionIndex].id);

                    if (isCurDone && firstUnfinished >= 0 && firstUnfinished !== questionIndex) {
                      return (
                        <div className="flex items-center justify-between rounded-xl bg-amber-50 px-3 py-1.5 border border-amber-200 text-xs">
                          <span className="text-amber-800 font-medium">
                            Bu sözü artıq tamamlamısınız.
                          </span>
                          <button
                            type="button"
                            onClick={() => handleJumpToWord(firstUnfinished)}
                            className="font-bold text-amber-900 underline hover:text-amber-950 flex items-center gap-1"
                          >
                            <span>Qaldığınız yerə keç (Söz {firstUnfinished + 1})</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      );
                    }
                    return null;
                  })()}
                </div>

                <SpellingInput
                  exercise={activeSpellingExercises[questionIndex] || SPELLING_EXERCISES[0]}
                  userAnswer={selectedStringAnswer}
                  onAnswerChange={(val) => setSelectedStringAnswer(val)}
                  status={status}
                  onSubmitAnswer={handleCheckAnswer}
                />
              </div>
            )}

            {/* 2b. Writing: Academic Synonyms (No Repetition) */}
            {trackId === "writing-synonyms" && (
              <div className="space-y-4">
                {/* Pack Selection & Word Navigator Bar */}
                <div className="mx-auto max-w-2xl rounded-2xl bg-white p-4 border-2 border-gray-200 shadow-sm space-y-3">
                  {/* Pack Header & Progress */}
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase tracking-wider text-purple-800">
                        {SPELLING_PACKS.find((p) => p.id === selectedPackId)?.name.split(":")[0] || "500 Synonyms"}
                      </span>
                      <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-[10px] font-black text-purple-800 flex items-center gap-1">
                        <Check className="h-3 w-3" />
                        <span>
                          {mounted
                            ? activeSynonymExercises.filter((w) => completedExerciseIds.includes(w.id)).length
                            : 0} / {activeSynonymExercises.length} Tamamlanıb
                        </span>
                      </span>
                    </div>
                    <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                      Söz {questionIndex + 1} / {activeSynonymExercises.length}
                    </span>
                  </div>

                  {/* Horizontal Scrollable Packs with Tik (✓) */}
                  <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {SPELLING_PACKS.map((pack) => {
                      const s = pack.startIndex ?? pack.start;
                      const e = pack.endIndex ?? pack.end;
                      const packWords = SYNONYM_EXERCISES.slice(s, e);
                      const doneCount = mounted
                        ? packWords.filter((w) => completedExerciseIds.includes(w.id)).length
                        : 0;
                      const isAllDone = isPackCompleted(trackId, pack.id) || (doneCount === packWords.length && packWords.length > 0);
                      const isSelected = selectedPackId === pack.id;

                      return (
                        <button
                          key={pack.id}
                          type="button"
                          onClick={() => {
                            if (selectedPackId !== pack.id) {
                              handleSelectPack(pack.id);
                            }
                          }}
                          className={`btn-3d flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                            isSelected
                              ? "bg-purple-600 text-white shadow-lingo-purple border border-purple-700"
                              : isAllDone
                              ? "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                          }`}
                        >
                          <span>{pack.icon}</span>
                          <span>{pack.name.split(":")[0]}</span>
                          {isAllDone ? (
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-black text-white">
                              ✓
                            </span>
                          ) : doneCount > 0 ? (
                            <span
                              className={`rounded-full px-1.5 py-0.2 text-[9px] font-black ${
                                isSelected
                                  ? "bg-white/20 text-white"
                                  : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {doneCount}/{packWords.length}
                            </span>
                          ) : null}
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      onClick={() => {
                        if (selectedPackId !== "all") {
                          handleSelectPack("all");
                        }
                      }}
                      className={`btn-3d flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                        selectedPackId === "all"
                          ? "bg-emerald-600 text-white shadow-lingo-green border border-emerald-700"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      <span>🔥</span>
                      <span>All 500 Words</span>
                      {mounted && (
                        <span
                          className={`rounded-full px-1.5 py-0.2 text-[9px] font-black ${
                            selectedPackId === "all"
                              ? "bg-white/20 text-white"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          {SYNONYM_EXERCISES.filter((w) => completedExerciseIds.includes(w.id)).length}/500
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Word Navigator (Pills with Checkmark ✓) */}
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-bold text-gray-400">
                        Pack daxilindəki sözlər:
                      </span>
                      {activeSynonymExercises[questionIndex] &&
                        mounted &&
                        completedExerciseIds.includes(activeSynonymExercises[questionIndex].id) && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-600">
                            <Check className="h-3 w-3" />
                            <span>Bu söz tamamlanıb (✓)</span>
                          </span>
                        )}
                    </div>
                    <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
                      {activeSynonymExercises.map((ex, idx) => {
                        const isDone = mounted && completedExerciseIds.includes(ex.id);
                        const isCurrent = idx === questionIndex;
                        return (
                          <button
                            key={ex.id}
                            type="button"
                            onClick={() => handleJumpToWord(idx)}
                            className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-all ${
                              isCurrent
                                ? "border-2 border-purple-600 bg-purple-600 text-white shadow-sm ring-2 ring-purple-200"
                                : isDone
                                ? "border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                                : "border border-gray-200 bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-700"
                            }`}
                            title={`Söz ${idx + 1}: ${ex.targetWord}${isDone ? " (Tamamlanıb ✓)" : ""}`}
                          >
                            {isDone ? "✓" : idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Jump to First Unfinished Word if user is viewing a completed one */}
                  {(() => {
                    const firstUnfinished = activeSynonymExercises.findIndex(
                      (ex) => !completedExerciseIds.includes(ex.id)
                    );
                    const isCurDone =
                      activeSynonymExercises[questionIndex] &&
                      completedExerciseIds.includes(activeSynonymExercises[questionIndex].id);

                    if (isCurDone && firstUnfinished >= 0 && firstUnfinished !== questionIndex) {
                      return (
                        <div className="flex items-center justify-between rounded-xl bg-purple-50 px-3 py-1.5 border border-purple-200 text-xs">
                          <span className="text-purple-800 font-medium">
                            Bu sözü artıq tamamlamısınız.
                          </span>
                          <button
                            type="button"
                            onClick={() => handleJumpToWord(firstUnfinished)}
                            className="font-bold text-purple-900 underline hover:text-purple-950 flex items-center gap-1"
                          >
                            <span>Qaldığınız yerə keç (Söz {firstUnfinished + 1})</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      );
                    }
                    return null;
                  })()}
                </div>

                <SynonymDrill
                  exercise={activeSynonymExercises[questionIndex] || SYNONYM_EXERCISES[0]}
                  selectedAnswer={selectedStringAnswer}
                  onSelectAnswer={(val) => setSelectedStringAnswer(val)}
                  status={status}
                />
              </div>
            )}

            {/* 2. Writing: Grammar Inversion / Cleft */}
            {trackId === "writing-grammar" && (
              <GrammarTileDrill
                exercise={GRAMMAR_EXERCISES[questionIndex]}
                selectedTiles={grammarTiles}
                onTilesChange={(tiles) => setGrammarTiles(tiles)}
                status={status}
              />
            )}

            {/* 2. Writing: Paraphrase */}
            {trackId === "writing-paraphrase" && (
              <ParaphraseEditor
                exercise={PARAPHRASE_EXERCISES[questionIndex]}
                selectedOptionId={selectedStringAnswer}
                onSelectOption={(id) => setSelectedStringAnswer(id)}
                status={status}
              />
            )}

            {/* 3. Listening Module */}
            {listeningChunk && (
              <AudioChunkPlayer
                chunk={listeningChunk}
                activeQuestionIndex={questionIndex}
                userAnswers={listeningAnswers}
                onAnswerChange={(qId, val) =>
                  setListeningAnswers((prev) => ({ ...prev, [qId]: val }))
                }
                status={status}
              />
            )}
          </div>
        )}
      </main>

      {/* BOTTOM ACTION BAR: Duolingo Green CHECK Button */}
      {!isCompleted && status === "idle" && (
        <div className="fixed bottom-0 left-0 right-0 z-30 border-t-2 border-gray-200 bg-white p-4 sm:p-5">

          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 hidden sm:inline">
              Super IELTS Mode • Mistakes unlock Cambridge hints & proof
            </span>
            <button
              onClick={handleCheckAnswer}
              disabled={!canCheck}
              className={`btn-3d ml-auto w-full sm:w-auto rounded-2xl px-10 py-3.5 text-base font-black uppercase tracking-wider text-white shadow-lingo transition-all ${
                canCheck
                  ? "bg-lingo-green hover:bg-lingo-green-dark shadow-lingo-green"
                  : "bg-gray-300 text-gray-500 shadow-lingo-gray cursor-not-allowed"
              }`}
            >
              Check Answer
            </button>
          </div>
        </div>
      )}

      {/* BOTTOM RESULT TRAY: Slide up on Check */}
      <BottomResultTray
        status={status}
        correctAnswer={currentCorrectAnswer}
        explanation={currentExplanation}
        proofQuote={currentProofQuote}
        cambridgeTip={currentCambridgeTip}
        xpEarned={10}
        onContinue={handleContinue}
      />
    </div>
  );
}
