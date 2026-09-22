"use client";

import { useState, useEffect } from "react";
import { FullReadingExam } from "@/types/curriculum";
import { soundEngine } from "@/lib/audio/sound-effects";
import {
  Clock,
  Bookmark,
  Send,
  BookOpen,
  Award,
} from "lucide-react";


interface FullReadingSimulatorProps {
  exam: FullReadingExam;
  onExit: () => void;
}

export function FullReadingSimulator({ exam, onExit }: FullReadingSimulatorProps) {
  const [activePassageIndex, setActivePassageIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: string }>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<{ [qNum: number]: boolean }>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(exam.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || timeLeftSeconds <= 0) return;
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeftSeconds]);

  const activePassage = exam.passages[activePassageIndex];

  // Flatten all questions across passages
  const allQuestions = exam.passages.flatMap((p) => p.questions);

  const handleAnswerChange = (qId: string, value: string) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const toggleFlag = (qNum: number) => {
    setFlaggedQuestions((prev) => ({ ...prev, [qNum]: !prev[qNum] }));
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    soundEngine.playFanfare();
  };

  // Calculate score out of 40 (or total available questions)
  let rawScore = 0;
  allQuestions.forEach((q) => {
    const user = (userAnswers[q.id] || "").trim().toLowerCase();
    const correct = q.correctAnswer.trim().toLowerCase();
    const isAccepted = q.acceptableAnswers?.some(
      (a) => a.trim().toLowerCase() === user
    );
    if (user === correct || isAccepted) {
      rawScore++;
    }
  });

  // Calculate Cambridge band score for Reading
  const scaleRatio = 40 / allQuestions.length;
  const scaledScore = Math.round(rawScore * scaleRatio);
  let bandScore = 6.0;
  if (scaledScore >= 39) bandScore = 9.0;
  else if (scaledScore >= 37) bandScore = 8.5;
  else if (scaledScore >= 35) bandScore = 8.0;
  else if (scaledScore >= 33) bandScore = 7.5;
  else if (scaledScore >= 30) bandScore = 7.0;
  else if (scaledScore >= 27) bandScore = 6.5;
  else if (scaledScore >= 23) bandScore = 6.0;
  else if (scaledScore >= 19) bandScore = 5.5;
  else bandScore = 5.0;

  const minutes = Math.floor(timeLeftSeconds / 60);
  const seconds = timeLeftSeconds % 60;

  return (
    <div className="flex flex-col gap-6 pb-20">
      {/* EXAM CONTROL BAR */}
      <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-black">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-black text-gray-900 leading-tight">
              {exam.title}
            </h2>
            <span className="text-xs text-gray-500">
              Passage {activePassage.passageNumber} of {exam.passages.length} • 40 Questions
            </span>
          </div>
        </div>

        {/* Timer & Submit */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl bg-amber-50 px-3.5 py-2 font-mono text-sm font-black text-amber-700 border border-amber-200">
            <Clock className="h-4 w-4" />
            <span>
              {minutes}:{seconds.toString().padStart(2, "0")}
            </span>
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmitExam}
              className="btn-3d flex items-center gap-1.5 rounded-xl bg-lingo-green px-5 py-2 text-xs font-black uppercase text-white shadow-lingo-green hover:bg-lingo-green-dark"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Submit Test</span>
            </button>
          ) : (
            <button
              onClick={onExit}
              className="btn-3d rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-white shadow-md"
            >
              Exit Review
            </button>
          )}
        </div>
      </div>

      {/* RESULTS MODAL BANNER (If Submitted) */}
      {isSubmitted && (
        <div className="rounded-3xl border-2 border-lingo-green bg-white p-6 sm:p-8 shadow-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lingo-green text-white shadow-lingo-green mb-3">
            <Award className="h-8 w-8 stroke-[2.5]" />
          </div>
          <h3 className="text-2xl font-black text-gray-900">
            Official Cambridge Exam Result
          </h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">
            Raw Score: {rawScore} / {allQuestions.length} correct
          </p>
          <div className="my-4 inline-flex items-center gap-3 rounded-2xl bg-emerald-50 px-6 py-3 border border-emerald-200">
            <span className="text-sm font-bold text-emerald-800">Calculated Reading Band:</span>
            <span className="text-3xl font-black text-emerald-950">Band {bandScore.toFixed(1)}</span>
          </div>
          <p className="text-xs text-gray-400">
            Scroll down to review every question alongside Cambridge proof quotes and explanations.
          </p>
        </div>
      )}

      {/* PASSAGE TABS (Passage 1, Passage 2, Passage 3) */}
      <div className="flex gap-2 border-b border-gray-200 pb-2">
        {exam.passages.map((p, idx) => (
          <button
            key={p.passageNumber}
            onClick={() => setActivePassageIndex(idx)}
            className={`btn-3d rounded-xl px-5 py-2.5 text-xs sm:text-sm font-extrabold transition-all ${
              activePassageIndex === idx
                ? "bg-lingo-green text-white shadow-lingo-green"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50"
            }`}
          >
            Passage {p.passageNumber}: {p.title.slice(0, 22)}...
          </button>
        ))}
      </div>

      {/* SPLIT SCREEN VIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT: Passage Text */}
        <div className="lg:col-span-7 rounded-3xl border-2 border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="border-b border-gray-100 pb-3 mb-4">
            <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-black text-emerald-800">
              READING PASSAGE {activePassage.passageNumber}
            </span>
            <h3 className="text-xl font-extrabold text-gray-900 mt-2">
              {activePassage.title}
            </h3>
            {activePassage.subtitle && (
              <p className="text-xs font-semibold text-gray-500 italic mt-0.5">
                {activePassage.subtitle}
              </p>
            )}
          </div>

          <div className="font-serif text-base sm:text-lg leading-relaxed sm:leading-loose text-gray-800 whitespace-pre-line selection:bg-amber-200">
            {activePassage.text}
          </div>
        </div>

        {/* RIGHT: Questions for this Passage */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {activePassage.questions.map((q) => {
            const currentAns = userAnswers[q.id] || "";
            const isFlagged = flaggedQuestions[q.questionNumber];
            const isCorrect =
              isSubmitted &&
              (currentAns.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase() ||
                q.acceptableAnswers?.some(
                  (a) => a.trim().toLowerCase() === currentAns.trim().toLowerCase()
                ));

            return (
              <div
                key={q.id}
                className={`rounded-3xl border-2 p-5 bg-white shadow-sm transition-all ${
                  isSubmitted
                    ? isCorrect
                      ? "border-green-400 bg-green-50/30"
                      : "border-red-300 bg-red-50/30"
                    : isFlagged
                    ? "border-amber-400"
                    : "border-gray-200"
                }`}
              >
                {/* Question Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gray-100 text-xs font-black text-gray-800">
                      Q{q.questionNumber}
                    </span>
                    <span className="text-[11px] font-bold text-gray-400 uppercase">
                      {q.type.replace("_", " ")}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleFlag(q.questionNumber)}
                    className={`flex items-center gap-1 text-xs font-bold ${
                      isFlagged ? "text-amber-600" : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <Bookmark className="h-3.5 w-3.5" />
                    <span>{isFlagged ? "Flagged" : "Flag"}</span>
                  </button>
                </div>

                <p className="text-sm sm:text-base font-bold text-gray-900 mb-4 whitespace-pre-line leading-snug">
                  {q.prompt}
                </p>

                {/* Input Modes */}
                {q.type === "tfng" ? (
                  <div className="flex gap-2">
                    {["TRUE", "FALSE", "NOT GIVEN"].map((opt) => (
                      <button
                        key={opt}
                        disabled={isSubmitted}
                        onClick={() => handleAnswerChange(q.id, opt)}
                        className={`btn-3d flex-1 rounded-xl border-2 py-2.5 text-xs font-black transition-all ${
                          currentAns === opt
                            ? "border-lingo-blue bg-lingo-blue text-white shadow-lingo-blue"
                            : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                ) : q.type === "multiple_choice" && q.options ? (
                  <div className="flex flex-col gap-2">
                    {q.options.map((opt, i) => {
                      const letter = ["A", "B", "C", "D"][i];
                      return (
                        <button
                          key={opt}
                          disabled={isSubmitted}
                          onClick={() => handleAnswerChange(q.id, opt)}
                          className={`btn-3d flex items-start gap-2.5 rounded-xl border-2 p-3 text-left transition-all ${
                            currentAns === opt
                              ? "border-lingo-blue bg-lingo-blue-light/50 text-lingo-blue-dark shadow-lingo-blue"
                              : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-gray-100 text-[10px] font-black">
                            {letter}
                          </span>
                          <span className="text-xs font-semibold">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <input
                    type="text"
                    disabled={isSubmitted}
                    value={currentAns}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    placeholder="Type answer from passage..."
                    className="w-full rounded-xl border-2 border-gray-200 bg-white px-3.5 py-2.5 text-sm font-bold text-gray-800 outline-none focus:border-lingo-blue"
                  />
                )}

                {/* Review Details if Submitted */}
                {isSubmitted && (
                  <div className="mt-4 border-t border-gray-200/80 pt-3 text-xs flex flex-col gap-1.5">
                    <div className="font-bold flex items-center gap-1 text-gray-800">
                      <span>Correct Answer:</span>
                      <span className="font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {q.correctAnswer}
                      </span>
                    </div>
                    {q.proofQuote && (
                      <p className="font-serif italic text-gray-600 bg-gray-50 p-2 rounded-lg border border-gray-100">
                        Proof: &ldquo;{q.proofQuote}&rdquo;
                      </p>
                    )}
                    {q.explanation && (
                      <p className="text-gray-500 font-medium">{q.explanation}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* QUESTION NAVIGATOR PALETTE */}
      <div className="rounded-3xl border-2 border-gray-200 bg-white p-5 shadow-sm">
        <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">
          Question Navigator (1 to {allQuestions.length})
        </h4>
        <div className="flex flex-wrap gap-2">
          {allQuestions.map((q) => {
            const hasAnswer = (userAnswers[q.id] || "").trim().length > 0;
            const isFlagged = flaggedQuestions[q.questionNumber];

            return (
              <div
                key={q.id}
                className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-black border-2 transition-all ${
                  hasAnswer
                    ? "border-lingo-green bg-lingo-green text-white"
                    : isFlagged
                    ? "border-amber-400 bg-amber-100 text-amber-900"
                    : "border-gray-200 bg-gray-50 text-gray-500"
                }`}
                title={`Question ${q.questionNumber}`}
              >
                {q.questionNumber}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
