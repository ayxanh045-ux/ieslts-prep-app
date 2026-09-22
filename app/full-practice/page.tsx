"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CAMBRIDGE_BOOKS_ARCHIVE,
  SAMPLE_FULL_READING_EXAM,
  SAMPLE_FULL_LISTENING_EXAM,
  SAMPLE_FULL_WRITING_EXAM,
} from "@/lib/ielts-curriculum/cambridge-archive";
import {
  BookOpen,
  Headphones,
  PenTool,
  Clock,
  Sparkles,
  ChevronRight,
  Filter,
} from "lucide-react";


export default function FullPracticeHubPage() {
  const [selectedBookNumber, setSelectedBookNumber] = useState<number>(18);
  const [selectedModule, setSelectedModule] = useState<"all" | "reading" | "listening" | "writing">("all");

  const selectedBook = CAMBRIDGE_BOOKS_ARCHIVE.find(
    (b) => b.bookNumber === selectedBookNumber
  ) || CAMBRIDGE_BOOKS_ARCHIVE[0];

  return (
    <div className="min-h-screen bg-[#F7F9FA] pb-24 pt-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 sm:p-8 text-white shadow-xl mb-8">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Complete Cambridge 1 to 21 Archive
              </div>
              <h1 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight">
                Full Authentic Mock Exam Hub
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                Take complete, authentic exam tests: <strong>Whole Reading (40 Questions)</strong>, <strong>Whole Listening (40 Questions)</strong>, and <strong>Whole Writing (both Task 1 & Task 2)</strong> modeled directly on Books 1–21.
              </p>
            </div>

            <div className="flex flex-row md:flex-col items-center gap-2">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md px-4 py-2.5 text-center border border-white/20">
                <div className="text-xl font-black">21 Books</div>
                <div className="text-[10px] uppercase font-bold text-white/80">Cambridge 1–21</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md px-4 py-2.5 text-center border border-white/20">
                <div className="text-xl font-black">84 Tests</div>
                <div className="text-[10px] uppercase font-bold text-white/80">Full Test Suites</div>
              </div>
            </div>
          </div>
        </div>

        {/* CAMBRIDGE BOOK SELECTOR (1 TO 21) */}
        <div className="mb-6 rounded-3xl border-2 border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <Filter className="h-3.5 w-3.5 text-lingo-blue" />
              <span>Select Cambridge Edition (Books 1 to 21):</span>
            </span>
            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-black text-lingo-blue-dark">
              Active: Cambridge {selectedBookNumber} ({selectedBook.year})
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {CAMBRIDGE_BOOKS_ARCHIVE.map((book) => {
              const isSelected = book.bookNumber === selectedBookNumber;
              return (
                <button
                  key={book.bookNumber}
                  onClick={() => setSelectedBookNumber(book.bookNumber)}
                  className={`btn-3d flex-shrink-0 rounded-2xl border-2 px-4 py-2.5 text-xs font-black transition-all ${
                    isSelected
                      ? "border-lingo-blue bg-lingo-blue text-white shadow-lingo-blue"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 shadow-lingo-gray"
                  }`}
                >
                  Book {book.bookNumber}
                </button>
              );
            })}
          </div>
        </div>

        {/* MODULE FILTER TABS */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setSelectedModule("all")}
            className={`btn-3d rounded-xl px-4 py-2 text-xs font-extrabold transition-all ${
              selectedModule === "all"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            All Modules
          </button>
          <button
            onClick={() => setSelectedModule("reading")}
            className={`btn-3d flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-extrabold transition-all ${
              selectedModule === "reading"
                ? "bg-lingo-green text-white shadow-lingo-green"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Whole Reading (40Q)</span>
          </button>
          <button
            onClick={() => setSelectedModule("listening")}
            className={`btn-3d flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-extrabold transition-all ${
              selectedModule === "listening"
                ? "bg-purple-600 text-white shadow-lingo-purple"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            <Headphones className="h-3.5 w-3.5" />
            <span>Whole Listening (40Q)</span>
          </button>
          <button
            onClick={() => setSelectedModule("writing")}
            className={`btn-3d flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-extrabold transition-all ${
              selectedModule === "writing"
                ? "bg-lingo-blue text-white shadow-lingo-blue"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            <PenTool className="h-3.5 w-3.5" />
            <span>Whole Writing (Tasks 1 & 2)</span>
          </button>
        </div>

        {/* 4 TESTS FOR THE SELECTED BOOK */}
        <div className="flex flex-col gap-6">
          {selectedBook.tests.map((t) => (
            <div
              key={t.testNumber}
              className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="rounded-xl bg-gray-900 px-3 py-1 text-xs font-black text-white">
                    Test {t.testNumber}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-gray-900">
                    Cambridge IELTS {selectedBookNumber} — Academic Test {t.testNumber}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5">
                  {t.themes.map((th, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-600"
                    >
                      {th}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3 Module Cards for this Test */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Whole Reading */}
                {(selectedModule === "all" || selectedModule === "reading") && (
                  <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50/30 p-4 flex flex-col justify-between hover:border-lingo-green transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center gap-1 text-xs font-black text-lingo-green-dark">
                          <BookOpen className="h-4 w-4" />
                          <span>Whole Reading</span>
                        </span>
                        <span className="text-[10px] font-bold text-gray-400">
                          Passages 1–3
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 font-medium">
                        Complete 40-question exam across 3 academic passages with TFNG, Headings & Summaries.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-[11px] font-bold text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>60 Mins</span>
                      </span>

                      <Link
                        href={`/full-practice/${SAMPLE_FULL_READING_EXAM.id}`}
                        className="btn-3d flex items-center gap-1 rounded-xl bg-lingo-green px-3.5 py-1.5 text-xs font-black uppercase text-white shadow-lingo-green hover:bg-lingo-green-dark"
                      >
                        <span>Start Test</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* 2. Whole Listening */}
                {(selectedModule === "all" || selectedModule === "listening") && (
                  <div className="rounded-2xl border-2 border-purple-100 bg-purple-50/30 p-4 flex flex-col justify-between hover:border-purple-500 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center gap-1 text-xs font-black text-purple-700">
                          <Headphones className="h-4 w-4" />
                          <span>Whole Listening</span>
                        </span>
                        <span className="text-[10px] font-bold text-gray-400">
                          Sections 1–4
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 font-medium">
                        Complete 40 questions across all 4 authentic audio recordings with interactive transcripts.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-[11px] font-bold text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>35 Mins</span>
                      </span>

                      <Link
                        href={`/full-practice/${SAMPLE_FULL_LISTENING_EXAM.id}`}
                        className="btn-3d flex items-center gap-1 rounded-xl bg-purple-600 px-3.5 py-1.5 text-xs font-black uppercase text-white shadow-lingo-purple hover:bg-purple-700"
                      >
                        <span>Start Test</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* 3. Whole Writing */}
                {(selectedModule === "all" || selectedModule === "writing") && (
                  <div className="rounded-2xl border-2 border-blue-100 bg-blue-50/30 p-4 flex flex-col justify-between hover:border-lingo-blue transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center gap-1 text-xs font-black text-lingo-blue-dark">
                          <PenTool className="h-4 w-4" />
                          <span>Whole Writing</span>
                        </span>
                        <span className="text-[10px] font-bold text-gray-400">
                          Task 1 & Task 2
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 font-medium">
                        Both Task 1 (150w report) and Task 2 (250w essay) with live word counter and Band 9 comparisons.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-[11px] font-bold text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>60 Mins</span>
                      </span>

                      <Link
                        href={`/full-practice/${SAMPLE_FULL_WRITING_EXAM.id}`}
                        className="btn-3d flex items-center gap-1 rounded-xl bg-lingo-blue px-3.5 py-1.5 text-xs font-black uppercase text-white shadow-lingo-blue hover:bg-lingo-blue-dark"
                      >
                        <span>Start Test</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
