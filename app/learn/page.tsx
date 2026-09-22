"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useIeltsStore } from "@/lib/store/useIeltsStore";
import { cambridgeFullTreeEngine } from "@/lib/ielts-curriculum/cambridge-full-tree-engine";
import { ModuleType } from "@/types/curriculum";
import {
  BookOpen,
  PenTool,
  Headphones,
  CheckCircle2,
  Play,
  Clock,
  Sparkles,
  ArrowRight,
  Volume2,
  GraduationCap,
} from "lucide-react";

export default function LearnPage() {
  const { isTrackCompleted, xp, streak } = useIeltsStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Navigation State
  const [selectedBook, setSelectedBook] = useState<number>(21);
  const [selectedTest, setSelectedTest] = useState<number>(1);
  const [activeModuleFilter, setActiveModuleFilter] = useState<ModuleType | "all">("all");

  const booksList = useMemo(() => cambridgeFullTreeEngine.getAllBooksList(), []);
  const currentBookInfo = booksList.find((b) => b.bookNumber === selectedBook) || booksList[0];

  // Dynamic paragraph-by-paragraph reading data for selected book & test
  const readingParagraphs = useMemo(() => {
    return cambridgeFullTreeEngine.getReadingParagraphsForTest(selectedBook, selectedTest);
  }, [selectedBook, selectedTest]);

  // Group reading paragraphs by passage
  const readingPassagesGrouped = useMemo(() => {
    const groups: { [pNum: number]: typeof readingParagraphs } = { 1: [], 2: [], 3: [] };
    for (const para of readingParagraphs) {
      const pNum = para.source.section as 1 | 2 | 3;
      if (!groups[pNum]) groups[pNum] = [];
      groups[pNum].push(para);
    }
    return groups;
  }, [readingParagraphs]);

  // Dynamic chunk-by-chunk listening data for selected book & test
  const listeningChunks = useMemo(() => {
    return cambridgeFullTreeEngine.getListeningChunksForTest(selectedBook, selectedTest);
  }, [selectedBook, selectedTest]);

  // Group listening chunks by section
  const listeningSectionsGrouped = useMemo(() => {
    const groups: { [secNum: number]: typeof listeningChunks } = { 1: [], 2: [], 3: [] };
    for (const chk of listeningChunks) {
      const sNum = chk.part;
      if (!groups[sNum]) groups[sNum] = [];
      groups[sNum].push(chk);
    }
    return groups;
  }, [listeningChunks]);

  // Writing drills
  const writingDrills = [
    {
      id: "writing-spelling",
      title: "500 Essential Words: Spelling Mastery",
      subtitle: "Spell all 500 core IELTS writing words with Azerbaijani translations, audio & synonyms.",
      category: "500 Words • Spelling",
      badge: "19 Packs (500 Words)",
      estimatedMinutes: 3,
      xpReward: 35,
    },
    {
      id: "writing-synonyms",
      title: "500 Academic Synonyms: Avoid Repetition",
      subtitle: "Replace overused Band 5-6 words with Band 8+ academic synonyms to maximize Lexical Resource.",
      category: "Lexical Upgrades",
      badge: "Band 8.0-9.0",
      estimatedMinutes: 3,
      xpReward: 35,
    },
    {
      id: "writing-grammar",
      title: "Syntax Mastery: Inversions & Cleft Sentences",
      subtitle: "Reconstruct Band 8.5+ sophisticated structures using Parsons puzzle word tiles.",
      category: "Advanced Grammar",
      badge: "Band 8.0-9.0",
      estimatedMinutes: 3,
      xpReward: 35,
    },
    {
      id: "writing-paraphrase",
      title: "Paraphrase Architecture: Task 1 & 2 Upgrades",
      subtitle: "Select optimal lexical and syntactic transformations to elevate your score.",
      category: "Lexical Resource",
      badge: "Scoring Strategy",
      estimatedMinutes: 3,
      xpReward: 35,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FA] pb-24 pt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 p-6 sm:p-8 text-white shadow-lingo-green mb-8">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Cambridge IELTS Books 1 to 21 • Complete Micro-Learning Tree
              </div>
              <h1 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight">
                Paragraph & Audio Chunk Skill Tree
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
                Practice authentic Cambridge exam patterns one piece at a time. Every Reading passage is broken down <strong>paragraph-by-paragraph</strong> with its exact questions, and every Listening test is segmented into <strong>individual 40–70s audio chunks</strong> with 30s prep countdowns.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 text-center border border-white/20 min-w-[75px]">
                <div className="text-xl font-black">{mounted ? streak : 0} Days</div>
                <div className="text-[10px] uppercase font-bold text-white/80">Streak</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 text-center border border-white/20 min-w-[75px]">
                <div className="text-xl font-black">{mounted ? xp : 0} XP</div>
                <div className="text-[10px] uppercase font-bold text-white/80">Earned</div>
              </div>
            </div>
          </div>
        </div>

        {/* CAMBRIDGE 1 TO 21 INTERACTIVE SELECTOR CONTROL */}
        <div className="mb-8 rounded-3xl border-2 border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
          {/* Top Bar: Book Edition Selector */}
          <div className="mb-5">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-lingo-blue" />
                <span className="text-xs font-black uppercase tracking-wider text-gray-500">
                  Select Cambridge Book (Books 21 down to 1):
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Cambridge {selectedBook} ({currentBookInfo.year})
              </span>
            </div>

            {/* Horizontal Scrollable Book Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
              {booksList.map((b) => (
                <button
                  key={b.bookNumber}
                  onClick={() => setSelectedBook(b.bookNumber)}
                  className={`btn-3d flex-shrink-0 flex flex-col items-center justify-center rounded-2xl px-3.5 py-2 transition-all min-w-[72px] ${
                    selectedBook === b.bookNumber
                      ? "bg-gray-900 text-white shadow-md scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200/60"
                  }`}
                >
                  <span className="text-[10px] uppercase font-extrabold opacity-70">Book</span>
                  <span className="text-lg font-black leading-tight">{b.bookNumber}</span>
                  <span className="text-[9px] opacity-60 font-semibold">{b.year}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Test Number Switcher (Tests 1 to 4) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-gray-400">
                Select Test:
              </span>
              <div className="flex gap-1.5 bg-gray-100 p-1 rounded-2xl">
                {[1, 2, 3, 4].map((testNum) => (
                  <button
                    key={testNum}
                    onClick={() => setSelectedTest(testNum)}
                    className={`rounded-xl px-4 py-1.5 text-xs font-black transition-all ${
                      selectedTest === testNum
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    Test {testNum}
                  </button>
                ))}
              </div>
            </div>

            {/* Module Filter Pills */}
            <div className="flex items-center gap-1.5 bg-gray-50 p-1 rounded-2xl border border-gray-100">
              <button
                onClick={() => setActiveModuleFilter("all")}
                className={`rounded-xl px-3 py-1 text-xs font-black transition-all ${
                  activeModuleFilter === "all"
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                All Modules
              </button>
              <button
                onClick={() => setActiveModuleFilter("reading")}
                className={`rounded-xl px-3 py-1 text-xs font-black transition-all ${
                  activeModuleFilter === "reading"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Reading
              </button>
              <button
                onClick={() => setActiveModuleFilter("listening")}
                className={`rounded-xl px-3 py-1 text-xs font-black transition-all ${
                  activeModuleFilter === "listening"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Listening
              </button>
              <button
                onClick={() => setActiveModuleFilter("writing")}
                className={`rounded-xl px-3 py-1 text-xs font-black transition-all ${
                  activeModuleFilter === "writing"
                    ? "bg-lingo-blue text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Writing
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 1: READING — PARAGRAPH BY PARAGRAPH BREAKDOWN */}
        {(activeModuleFilter === "all" || activeModuleFilter === "reading") && (
          <div className="mb-12">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    Reading: Paragraph-by-Paragraph Breakdown
                  </h2>
                  <p className="text-xs text-gray-500">
                    Cambridge Book {selectedBook}, Test {selectedTest} • Each node gives a single isolated paragraph & only its specific questions.
                  </p>
                </div>
              </div>

              <Link
                href={`/full-practice/cambridge-${selectedBook}-test-${selectedTest}`}
                className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200 transition-colors"
              >
                <span>Take Full 60-min Exam</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Render Each Passage with its Individual Paragraphs */}
            <div className="space-y-6">
              {[1, 2, 3].map((passageNum) => {
                const paras = readingPassagesGrouped[passageNum] || [];
                if (paras.length === 0) return null;
                const samplePara = paras[0];

                return (
                  <div
                    key={passageNum}
                    className="rounded-3xl border-2 border-emerald-100 bg-white p-5 sm:p-6 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-4">
                      <div>
                        <span className="rounded-lg bg-emerald-50 px-2.5 py-0.5 text-xs font-black text-emerald-700 border border-emerald-200">
                          Passage {passageNum}
                        </span>
                        <h3 className="mt-1 text-base sm:text-lg font-black text-gray-900">
                          {samplePara.source.title}
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-gray-400">
                        {paras.length} Paragraph Micro-Drills • 40 Words / min Target
                      </span>
                    </div>

                    {/* Individual Paragraph Nodes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {paras.map((para) => {
                        const completed = mounted ? isTrackCompleted(para.id) : false;

                        return (
                          <div
                            key={para.id}
                            className={`group relative flex flex-col justify-between rounded-2xl border-2 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                              completed
                                ? "border-emerald-300 bg-emerald-50/40"
                                : "border-gray-200 bg-white hover:border-emerald-400"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="rounded-xl bg-emerald-100 px-2.5 py-0.5 text-xs font-black text-emerald-800">
                                  {para.paragraphLabel}
                                </span>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400">
                                  <Clock className="h-3.5 w-3.5" />
                                  <span>3 mins</span>
                                </div>
                              </div>

                              <h4 className="text-sm font-black text-gray-900 group-hover:text-emerald-700 transition-colors">
                                {para.title}
                              </h4>

                              <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                                {para.paragraphText}
                              </p>

                              {/* Question Types Pill */}
                              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                                {para.questions.map((q, idx) => (
                                  <span
                                    key={idx}
                                    className="rounded-lg bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-600"
                                  >
                                    {q.type === "tfng"
                                      ? "TFNG"
                                      : q.type === "matching_heading"
                                      ? "Heading"
                                      : "Sentence Fill"}
                                  </span>
                                ))}
                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                                  +30 XP
                                </span>
                              </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                              <span className="text-[11px] font-semibold text-gray-400">
                                {para.questions.length} questions
                              </span>

                              <Link
                                href={`/practice/${para.id}`}
                                className={`btn-3d inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-black transition-all ${
                                  completed
                                    ? "bg-emerald-600 text-white shadow-lingo-green"
                                    : "bg-lingo-green text-white shadow-lingo-green hover:brightness-105"
                                }`}
                              >
                                {completed ? (
                                  <>
                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                    <span>Practice Again</span>
                                  </>
                                ) : (
                                  <>
                                    <Play className="h-3.5 w-3.5 fill-current" />
                                    <span>Practice Paragraph</span>
                                  </>
                                )}
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 2: LISTENING — SEGMENTED AUDIO CHUNKS */}
        {(activeModuleFilter === "all" || activeModuleFilter === "listening") && (
          <div className="mb-12">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                  <Headphones className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    Listening: Segmented Audio Chunks
                  </h2>
                  <p className="text-xs text-gray-500">
                    Cambridge Book {selectedBook}, Test {selectedTest} • 30-second inspection prep, focused 40–70s audio, and post-listening distractor trap analysis.
                  </p>
                </div>
              </div>

              <Link
                href={`/full-practice/cambridge-${selectedBook}-test-${selectedTest}`}
                className="inline-flex items-center gap-1.5 text-xs font-black text-purple-700 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-xl border border-purple-200 transition-colors"
              >
                <span>Take Full 40-min Listening</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Render Each Section with its Segmented Chunks */}
            <div className="space-y-6">
              {[1, 2, 3, 4].map((sectionNum) => {
                const chunks = listeningSectionsGrouped[sectionNum] || [];
                if (chunks.length === 0) return null;
                const sampleChunk = chunks[0];

                return (
                  <div
                    key={sectionNum}
                    className="rounded-3xl border-2 border-purple-100 bg-white p-5 sm:p-6 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-4">
                      <div>
                        <span className="rounded-lg bg-purple-50 px-2.5 py-0.5 text-xs font-black text-purple-700 border border-purple-200">
                          Section {sectionNum}
                        </span>
                        <h3 className="mt-1 text-base sm:text-lg font-black text-gray-900">
                          {sampleChunk.source.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {sampleChunk.contextDescription}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-bold text-purple-700 border border-purple-200">
                          {sampleChunk.speakerAccent} Accent
                        </span>
                      </div>
                    </div>

                    {/* Chunks Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {chunks.map((chk) => {
                        const completed = mounted ? isTrackCompleted(chk.id) : false;

                        return (
                          <div
                            key={chk.id}
                            className={`group relative flex flex-col justify-between rounded-2xl border-2 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                              completed
                                ? "border-purple-300 bg-purple-50/40"
                                : "border-gray-200 bg-white hover:border-purple-400"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="rounded-xl bg-purple-100 px-2.5 py-0.5 text-xs font-black text-purple-800">
                                  {chk.title.split("—")[1]?.trim() || `Part ${chk.part}`}
                                </span>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400">
                                  <Volume2 className="h-3.5 w-3.5 text-purple-600" />
                                  <span>{chk.durationSeconds}s audio</span>
                                </div>
                              </div>

                              <h4 className="text-sm font-black text-gray-900 group-hover:text-purple-700 transition-colors">
                                {chk.title.split("—")[0]?.trim()}
                              </h4>

                              <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                                &quot;{chk.audioScript}&quot;
                              </p>

                              {/* Features Pill */}
                              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                                <span className="rounded-lg bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
                                  30s Inspection
                                </span>
                                <span className="rounded-lg bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-600">
                                  Trap Analysis
                                </span>
                                <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">
                                  +35 XP
                                </span>
                              </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                              <span className="text-[11px] font-semibold text-gray-400">
                                {chk.questions.length} questions
                              </span>

                              <Link
                                href={`/practice/${chk.id}`}
                                className={`btn-3d inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-black transition-all ${
                                  completed
                                    ? "bg-purple-600 text-white shadow-md"
                                    : "bg-purple-600 text-white shadow-md hover:bg-purple-700"
                                }`}
                              >
                                {completed ? (
                                  <>
                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                    <span>Listen Again</span>
                                  </>
                                ) : (
                                  <>
                                    <Play className="h-3.5 w-3.5 fill-current" />
                                    <span>Start Chunk</span>
                                  </>
                                )}
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 3: WRITING — FOUNDATIONAL TRACKS */}
        {(activeModuleFilter === "all" || activeModuleFilter === "writing") && (
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <PenTool className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                  Writing: Foundational Syntax & Lexis
                </h2>
                <p className="text-xs text-gray-500">
                  Academic Spelling Traps, Parsons Word-Tile Negative Inversions, and Task 1 & 2 Paraphrase Architecture.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {writingDrills.map((drill) => {
                const completed = mounted ? isTrackCompleted(drill.id) : false;

                return (
                  <div
                    key={drill.id}
                    className={`group relative flex flex-col justify-between rounded-3xl border-2 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                      completed
                        ? "border-blue-300 bg-blue-50/40"
                        : "border-gray-200 bg-white hover:border-lingo-blue"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="rounded-xl bg-blue-100 px-2.5 py-0.5 text-xs font-black text-blue-800">
                          {drill.category}
                        </span>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-600">
                          {drill.badge}
                        </span>
                      </div>

                      <h3 className="text-base font-black text-gray-900 group-hover:text-lingo-blue transition-colors">
                        {drill.title}
                      </h3>

                      <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                        {drill.subtitle}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{drill.estimatedMinutes} mins</span>
                        <span>•</span>
                        <span className="text-lingo-blue">+{drill.xpReward} XP</span>
                      </div>

                      <Link
                        href={`/practice/${drill.id}`}
                        className={`btn-3d inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-black transition-all ${
                          completed
                            ? "bg-lingo-blue text-white shadow-lingo-blue"
                            : "bg-lingo-blue text-white shadow-lingo-blue hover:brightness-105"
                        }`}
                      >
                        {completed ? (
                          <>
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>Drill Again</span>
                          </>
                        ) : (
                          <>
                            <Play className="h-3.5 w-3.5 fill-current" />
                            <span>Start Drill</span>
                          </>
                        )}
                      </Link>
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
