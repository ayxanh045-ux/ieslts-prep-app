"use client";

import { useState } from "react";
import { Calculator, BookOpen, Headphones, PenTool, Info } from "lucide-react";

// Official Cambridge raw to band conversion tables
function getListeningBand(raw: number): number {
  if (raw >= 39) return 9.0;
  if (raw >= 37) return 8.5;
  if (raw >= 35) return 8.0;
  if (raw >= 32) return 7.5;
  if (raw >= 30) return 7.0;
  if (raw >= 26) return 6.5;
  if (raw >= 23) return 6.0;
  if (raw >= 18) return 5.5;
  if (raw >= 16) return 5.0;
  if (raw >= 13) return 4.5;
  if (raw >= 10) return 4.0;
  if (raw >= 6) return 3.5;
  return 3.0;
}

function getAcademicReadingBand(raw: number): number {
  if (raw >= 39) return 9.0;
  if (raw >= 37) return 8.5;
  if (raw >= 35) return 8.0;
  if (raw >= 33) return 7.5;
  if (raw >= 30) return 7.0;
  if (raw >= 27) return 6.5;
  if (raw >= 23) return 6.0;
  if (raw >= 19) return 5.5;
  if (raw >= 15) return 5.0;
  if (raw >= 13) return 4.5;
  if (raw >= 10) return 4.0;
  if (raw >= 6) return 3.5;
  return 3.0;
}

function getGeneralReadingBand(raw: number): number {
  if (raw >= 40) return 9.0;
  if (raw >= 39) return 8.5;
  if (raw >= 37) return 8.0;
  if (raw >= 36) return 7.5;
  if (raw >= 34) return 7.0;
  if (raw >= 32) return 6.5;
  if (raw >= 30) return 6.0;
  if (raw >= 27) return 5.5;
  if (raw >= 23) return 5.0;
  if (raw >= 19) return 4.5;
  if (raw >= 15) return 4.0;
  return 3.5;
}

// Official Cambridge IELTS overall score rounding algorithm
function calculateOverallIeltsBand(
  listening: number,
  reading: number,
  writing: number
): number {
  const avg = (listening + reading + writing) / 3;
  const decimal = avg - Math.floor(avg);

  if (decimal < 0.25) {
    return Math.floor(avg);
  } else if (decimal < 0.75) {
    return Math.floor(avg) + 0.5;
  } else {
    return Math.ceil(avg);
  }
}

export default function BandCalculatorPage() {
  const [readingType, setReadingType] = useState<"academic" | "general">("academic");
  const [listeningRaw, setListeningRaw] = useState<number>(32); // 7.5
  const [readingRaw, setReadingRaw] = useState<number>(34); // 7.5
  const [writingBand, setWritingBand] = useState<number>(7.0);

  const listeningBand = getListeningBand(listeningRaw);
  const readingBand =
    readingType === "academic"
      ? getAcademicReadingBand(readingRaw)
      : getGeneralReadingBand(readingRaw);

  const overallBand = calculateOverallIeltsBand(
    listeningBand,
    readingBand,
    writingBand
  );

  const rawAverage = (
    (listeningBand + readingBand + writingBand) / 3
  ).toFixed(2);


  // CEFR Descriptor
  let cefrLevel = "C1 Advanced";
  let cefrColor = "bg-blue-100 text-blue-800";
  let descriptor =
    "Good User: Operational command of the language with occasional inaccuracies and misunderstandings. Handles complex language well.";

  if (overallBand >= 8.5) {
    cefrLevel = "C2 Expert Mastery";
    cefrColor = "bg-purple-100 text-purple-800";
    descriptor =
      "Expert User: Fully operational command of the language: fluent, accurate, and completely appropriate with complete understanding.";
  } else if (overallBand >= 7.0) {
    cefrLevel = "C1 Effective Operational";
    cefrColor = "bg-emerald-100 text-emerald-800";
    descriptor =
      "Good / Very Good User: Generally handles complex language well and understands detailed academic reasoning.";
  } else if (overallBand >= 6.0) {
    cefrLevel = "B2 Independent Vantage";
    cefrColor = "bg-amber-100 text-amber-800";
    descriptor =
      "Competent User: Generally has effective command despite inaccuracies, inappropriate usage, and misunderstandings.";
  } else {
    cefrLevel = "B1 Modest Threshold";
    cefrColor = "bg-orange-100 text-orange-800";
    descriptor =
      "Modest User: Partial command of the language, coping with overall meaning in most situations.";
  }

  const bandOptions = [
    5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0,
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FA] pb-24 pt-6">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-lingo-blue-dark">
            <Calculator className="h-4 w-4" />
            <span>Official Cambridge Scoring Engine</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            IELTS Band Score Calculator
          </h1>
          <p className="text-sm font-semibold text-gray-500">
            Convert your Reading and Listening raw scores (out of 40) and apply Cambridge official half-band rounding algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: 4 Module Input Controls */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* 1. LISTENING */}
            <div className="rounded-3xl border-2 border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-gray-900">
                      Listening Raw Score
                    </h3>
                    <span className="text-xs text-gray-400">40 Questions</span>
                  </div>
                </div>
                <div className="rounded-xl bg-purple-50 px-3 py-1 text-sm font-black text-purple-700">
                  Band {listeningBand.toFixed(1)}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={listeningRaw}
                  onChange={(e) => setListeningRaw(Number(e.target.value))}
                  className="w-full accent-purple-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
                <span className="font-mono text-base font-black text-gray-800 w-10 text-right">
                  {listeningRaw}/40
                </span>
              </div>
            </div>

            {/* 2. READING */}
            <div className="rounded-3xl border-2 border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-gray-900">
                      Reading Raw Score
                    </h3>
                    <span className="text-xs text-gray-400">40 Questions</span>
                  </div>
                </div>
                <div className="rounded-xl bg-emerald-50 px-3 py-1 text-sm font-black text-emerald-700">
                  Band {readingBand.toFixed(1)}
                </div>
              </div>

              {/* Module Toggle: Academic vs General */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setReadingType("academic")}
                  className={`btn-3d flex-1 rounded-xl py-1.5 text-xs font-bold transition-all ${
                    readingType === "academic"
                      ? "bg-lingo-green text-white shadow-lingo-green"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Academic Reading
                </button>
                <button
                  onClick={() => setReadingType("general")}
                  className={`btn-3d flex-1 rounded-xl py-1.5 text-xs font-bold transition-all ${
                    readingType === "general"
                      ? "bg-lingo-green text-white shadow-lingo-green"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  General Training
                </button>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={readingRaw}
                  onChange={(e) => setReadingRaw(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
                <span className="font-mono text-base font-black text-gray-800 w-10 text-right">
                  {readingRaw}/40
                </span>
              </div>
            </div>

            {/* 3. WRITING */}
            <div className="rounded-3xl border-2 border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-lingo-blue-dark">
                    <PenTool className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-gray-900">
                      Writing Sub-Score
                    </h3>
                    <span className="text-xs text-gray-400">Task 1 (1/3) + Task 2 (2/3)</span>
                  </div>
                </div>
                <div className="rounded-xl bg-blue-50 px-3 py-1 text-sm font-black text-lingo-blue-dark">
                  Band {writingBand.toFixed(1)}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {bandOptions.map((b) => (
                  <button
                    key={b}
                    onClick={() => setWritingBand(b)}
                    className={`btn-3d rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                      writingBand === b
                        ? "bg-lingo-blue text-white shadow-lingo-blue"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {b.toFixed(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Calculated Overall Result Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-3xl border-2 border-lingo-green bg-white p-6 sm:p-8 text-center shadow-md">
              <span className="text-xs font-black uppercase tracking-wider text-gray-400">
                Estimated Overall Band
              </span>

              <div className="my-3 text-6xl sm:text-7xl font-black text-lingo-green-dark tracking-tighter">
                {overallBand.toFixed(1)}
              </div>

              <div className={`inline-block rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${cefrColor} mb-4`}>
                {cefrLevel}
              </div>

              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                {descriptor}
              </p>

              {/* Breakdown Grid (3 Modules) */}
              <div className="mt-6 border-t border-gray-100 pt-5 grid grid-cols-3 gap-2 text-left">
                <div className="rounded-2xl bg-gray-50 p-2.5 sm:p-3">
                  <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 block">Listening</span>
                  <strong className="text-sm sm:text-base font-black text-gray-800">
                    Band {listeningBand.toFixed(1)}
                  </strong>
                </div>
                <div className="rounded-2xl bg-gray-50 p-2.5 sm:p-3">
                  <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 block">Reading</span>
                  <strong className="text-sm sm:text-base font-black text-gray-800">
                    Band {readingBand.toFixed(1)}
                  </strong>
                </div>
                <div className="rounded-2xl bg-gray-50 p-2.5 sm:p-3">
                  <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 block">Writing</span>
                  <strong className="text-sm sm:text-base font-black text-gray-800">
                    Band {writingBand.toFixed(1)}
                  </strong>
                </div>
              </div>

              <div className="mt-4 text-[11px] text-gray-400">
                Exact Mathematical Mean: <strong>{rawAverage}</strong>
              </div>
            </div>


            {/* Official Cambridge Rounding Rule Info Card */}
            <div className="rounded-3xl border-2 border-gray-200 bg-white p-5 shadow-sm text-xs text-gray-600 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 font-bold text-gray-800">
                <Info className="h-4 w-4 text-lingo-blue" />
                <span>Cambridge Half-Band Rounding Rules:</span>
              </div>
              <p>
                If the average of the 4 components ends in <strong>.25</strong>, it is rounded up to the next half band (e.g. 6.25 becomes <strong>6.5</strong>).
              </p>
              <p>
                If the average ends in <strong>.75</strong>, it is rounded up to the next whole band (e.g. 6.75 becomes <strong>7.0</strong>).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
