"use client";

import { ParaphraseExercise } from "@/types/curriculum";
import { soundEngine } from "@/lib/audio/sound-effects";
import { Check, BookOpen } from "lucide-react";


interface ParaphraseEditorProps {
  exercise: ParaphraseExercise;
  selectedOptionId: string;
  onSelectOption: (id: string) => void;
  status: "idle" | "correct" | "incorrect";
}

export function ParaphraseEditor({
  exercise,
  selectedOptionId,
  onSelectOption,
  status,
}: ParaphraseEditorProps) {
  return (
    <div className="mx-auto max-w-3xl flex flex-col gap-6 rounded-3xl border-2 border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Track Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="rounded-xl bg-teal-100 px-3 py-1 text-xs font-black text-teal-800 uppercase tracking-wide">
            Track C • Paraphrase Master
          </span>
          <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-bold text-teal-700">
            {exercise.taskType} Academic Introduction
          </span>
        </div>
        <span className="text-xs font-bold text-gray-400">Band 8.5+ Syntax Focus</span>
      </div>

      {/* Cambridge Prompt */}
      <div className="rounded-2xl bg-gray-50 p-4 sm:p-5 border border-gray-200/80">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-500 mb-1.5">
          <BookOpen className="h-4 w-4 text-lingo-blue" />
          <span>Original Cambridge Exam Question:</span>
        </div>
        <p className="text-base sm:text-lg font-bold text-gray-900 font-serif leading-relaxed">
          &ldquo;{exercise.originalPrompt}&rdquo;
        </p>
      </div>

      {/* Academic Synonym Bank */}
      <div className="rounded-2xl bg-blue-50/50 p-4 border border-blue-100">
        <span className="text-xs font-black uppercase tracking-wider text-lingo-blue-dark block mb-2">
          Academic Lexical Alternatives Bank:
        </span>
        <div className="flex flex-wrap gap-2">
          {Object.entries(exercise.keySynonymMap).map(([orig, syns]) => (
            <div
              key={orig}
              className="flex items-center gap-1.5 rounded-xl bg-white px-2.5 py-1 text-xs font-semibold text-gray-700 border border-blue-200/70 shadow-2xs"
            >
              <span className="text-gray-400 line-through">{orig}</span>
              <span className="text-lingo-blue font-bold">→</span>
              <span className="font-bold text-gray-900">{syns.join(" / ")}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Options Selection */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-extrabold text-gray-800">
          Select the Band 8.5+ Academic Paraphrase:
        </label>

        {exercise.options.map((opt) => {
          const isSelected = selectedOptionId === opt.id;
          return (
            <button
              key={opt.id}
              disabled={status !== "idle"}
              onClick={() => {
                soundEngine.playTileClick();
                onSelectOption(opt.id);
              }}
              className={`btn-3d flex w-full items-start gap-3.5 rounded-2xl border-2 p-4 text-left transition-all ${
                isSelected
                  ? "border-lingo-blue bg-lingo-blue-light/50 text-lingo-blue-dark shadow-lingo-blue"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 shadow-lingo-gray"
              }`}
            >
              <div
                className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                  isSelected
                    ? "border-lingo-blue bg-lingo-blue text-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-sm sm:text-base font-semibold leading-relaxed text-gray-900">
                  {opt.text}
                </span>

                {status !== "idle" && (
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase ${
                        opt.isBest
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {opt.bandRating}
                    </span>
                    <span className="text-xs text-gray-500">{opt.feedback}</span>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
