"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Lightbulb, ArrowRight, BookCheck } from "lucide-react";


interface BottomResultTrayProps {
  status: "idle" | "correct" | "incorrect";
  correctAnswer?: string;
  explanation?: string;
  proofQuote?: string;
  cambridgeTip?: string;
  xpEarned?: number;
  onContinue: () => void;
}

export function BottomResultTray({
  status,
  correctAnswer,
  explanation,
  proofQuote,
  cambridgeTip,
  xpEarned = 10,
  onContinue,
}: BottomResultTrayProps) {
  if (status === "idle") return null;

  const isCorrect = status === "correct";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 150, opacity: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
        className={`fixed bottom-0 left-0 right-0 z-50 border-t-2 py-4 sm:py-6 px-4 sm:px-8 shadow-2xl ${
          isCorrect
            ? "border-lingo-green bg-[#D7FFB8] text-gray-900"
            : "border-lingo-red bg-[#FFDFE0] text-gray-900"
        }`}
      >
        <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Status Message & Cambridge Proof */}
          <div className="flex items-start gap-3.5 sm:gap-4 max-w-2xl">
            <div
              className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full shadow-md ${
                isCorrect ? "bg-lingo-green text-white" : "bg-lingo-red text-white"
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="h-7 w-7 stroke-[2.5]" />
              ) : (
                <XCircle className="h-7 w-7 stroke-[2.5]" />
              )}
            </div>

            <div className="flex flex-col gap-1 text-left">
              <div className="flex items-center gap-2">
                <span
                  className={`text-lg sm:text-xl font-extrabold tracking-tight ${
                    isCorrect ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {isCorrect ? "Outstanding!" : "Cambridge Analysis & Proof"}
                </span>

                {isCorrect && (
                  <span className="rounded-full bg-green-600/15 px-2.5 py-0.5 text-xs font-black text-green-800">
                    +{xpEarned} XP
                  </span>
                )}
              </div>

              {!isCorrect && correctAnswer && (
                <div className="text-sm font-bold text-red-900 flex items-center gap-1.5 mt-0.5">
                  <span>Correct Answer:</span>
                  <span className="rounded-md bg-white/80 px-2 py-0.5 font-mono text-sm font-black text-red-700 border border-red-200">
                    {correctAnswer}
                  </span>
                </div>
              )}

              {proofQuote && (
                <div className="mt-1 rounded-xl bg-white/90 p-2.5 sm:p-3 text-xs sm:text-sm text-gray-800 shadow-sm border border-black/5">
                  <div className="flex items-center gap-1.5 font-bold text-gray-700 mb-1">
                    <BookCheck className="h-3.5 w-3.5 text-lingo-blue" />
                    <span>Passage Proof Sentence:</span>
                  </div>
                  <p className="italic text-gray-700 font-serif leading-relaxed">
                    &ldquo;{proofQuote}&rdquo;
                  </p>
                </div>
              )}

              {explanation && (
                <p className="mt-1 text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                  {explanation}
                </p>
              )}

              {cambridgeTip && (
                <div className="mt-1 flex items-start gap-1.5 text-[11px] sm:text-xs font-semibold text-gray-600">
                  <Lightbulb className="h-3.5 w-3.5 flex-shrink-0 text-amber-600 mt-0.5" />
                  <span>
                    <strong className="text-gray-800">Cambridge Strategy:</strong> {cambridgeTip}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Continue Action Button */}
          <div className="flex items-center justify-end sm:flex-shrink-0">
            <button
              onClick={onContinue}
              className={`btn-3d flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-8 py-3.5 text-base font-black uppercase tracking-wider text-white shadow-lingo ${
                isCorrect
                  ? "bg-lingo-green hover:bg-lingo-green-dark shadow-lingo-green"
                  : "bg-lingo-red hover:bg-lingo-red-dark shadow-lingo-red"
              }`}
            >
              <span>{isCorrect ? "Continue" : "Got It"}</span>
              <ArrowRight className="h-5 w-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
