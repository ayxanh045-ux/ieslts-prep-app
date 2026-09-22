"use client";

import { useState, useEffect } from "react";
import { FullWritingExam } from "@/types/curriculum";
import { soundEngine } from "@/lib/audio/sound-effects";
import {
  PenTool,
  Clock,
  Send,
  Award,
  AlertCircle,
  BarChart3,
} from "lucide-react";


interface FullWritingSimulatorProps {
  exam: FullWritingExam;
  onExit: () => void;
}

export function FullWritingSimulator({ exam, onExit }: FullWritingSimulatorProps) {
  const [activeTask, setActiveTask] = useState<"task1" | "task2">("task1");
  const [task1Text, setTask1Text] = useState<string>("");
  const [task2Text, setTask2Text] = useState<string>("");
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(60 * 60); // 60 minutes
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || timeLeftSeconds <= 0) return;
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeftSeconds]);

  // Calculate live word counts
  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const task1Words = countWords(task1Text);
  const task2Words = countWords(task2Text);

  const handleSubmit = () => {
    setIsSubmitted(true);
    soundEngine.playFanfare();
  };

  const minutes = Math.floor(timeLeftSeconds / 60);
  const seconds = timeLeftSeconds % 60;

  return (
    <div className="flex flex-col gap-6 pb-20">
      {/* EXAM TOP CONTROL BAR */}
      <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lingo-blue-dark font-black">
            <PenTool className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-black text-gray-900 leading-tight">
              {exam.title}
            </h2>
            <span className="text-xs text-gray-500">
              60 Minutes Total • Task 1 (1/3 Weight) & Task 2 (2/3 Weight)
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
              onClick={handleSubmit}
              className="btn-3d flex items-center gap-1.5 rounded-xl bg-lingo-green px-5 py-2 text-xs font-black uppercase text-white shadow-lingo-green hover:bg-lingo-green-dark"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Submit Writing</span>
            </button>
          ) : (
            <button
              onClick={onExit}
              className="btn-3d rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-white"
            >
              Exit Review
            </button>
          )}
        </div>
      </div>

      {/* TASK SELECTOR TABS */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
        <button
          onClick={() => setActiveTask("task1")}
          className={`btn-3d flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-extrabold transition-all ${
            activeTask === "task1"
              ? "bg-lingo-blue text-white shadow-lingo-blue"
              : "bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50"
          }`}
        >
          <span>Task 1: Report</span>
          <span
            className={`rounded-md px-1.5 py-0.5 text-[10px] font-black ${
              task1Words >= 150 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {task1Words}/150 w
          </span>
        </button>

        <button
          onClick={() => setActiveTask("task2")}
          className={`btn-3d flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-extrabold transition-all ${
            activeTask === "task2"
              ? "bg-lingo-blue text-white shadow-lingo-blue"
              : "bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50"
          }`}
        >
          <span>Task 2: Essay</span>
          <span
            className={`rounded-md px-1.5 py-0.5 text-[10px] font-black ${
              task2Words >= 250 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {task2Words}/250 w
          </span>
        </button>
      </div>

      {/* ACTIVE TASK WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT: Prompt & Data Overview */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm">
            <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-black text-lingo-blue-dark">
              {activeTask === "task1" ? "TASK 1: ACADEMIC REPORT" : "TASK 2: ESSAY"}
            </span>

            <h3 className="text-base sm:text-lg font-black text-gray-900 mt-2 mb-3">
              {activeTask === "task1" ? exam.task1.title : exam.task2.title}
            </h3>

            <div className="rounded-2xl bg-gray-50 p-4 font-serif text-sm text-gray-800 whitespace-pre-line leading-relaxed border border-gray-200/80 mb-4">
              {activeTask === "task1" ? exam.task1.prompt : exam.task2.prompt}
            </div>

            {activeTask === "task1" && (
              <div className="rounded-2xl bg-blue-50/60 p-4 border border-blue-200/80">
                <div className="flex items-center gap-2 text-xs font-black text-lingo-blue-dark uppercase mb-1">
                  <BarChart3 className="h-4 w-4" />
                  <span>Visual Graphic Breakdown:</span>
                </div>
                <p className="text-xs text-gray-700 whitespace-pre-line leading-relaxed font-mono">
                  {exam.task1.graphicDescription}
                </p>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
              <span>
                Recommended: {activeTask === "task1" ? "20 Minutes" : "40 Minutes"}
              </span>
              <span>
                Min Words: {activeTask === "task1" ? "150 words" : "250 words"}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Text Editor & Word Counter */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm flex flex-col gap-3">
            {/* Word Count Bar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-gray-400">
                  Live Word Count:
                </span>
                <span
                  className={`text-lg font-black ${
                    activeTask === "task1"
                      ? task1Words >= 150
                        ? "text-green-600"
                        : "text-amber-600"
                      : task2Words >= 250
                      ? "text-green-600"
                      : "text-amber-600"
                  }`}
                >
                  {activeTask === "task1" ? task1Words : task2Words}
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  / {activeTask === "task1" ? "150 min" : "250 min"}
                </span>
              </div>

              {((activeTask === "task1" && task1Words < 150 && task1Words > 20) ||
                (activeTask === "task2" && task2Words < 250 && task2Words > 20)) && (
                <div className="flex items-center gap-1 text-[11px] font-bold text-amber-600">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>Underlength Penalty Applies</span>
                </div>
              )}
            </div>

            {/* Text Area */}
            <textarea
              disabled={isSubmitted}
              rows={16}
              value={activeTask === "task1" ? task1Text : task2Text}
              onChange={(e) =>
                activeTask === "task1"
                  ? setTask1Text(e.target.value)
                  : setTask2Text(e.target.value)
              }
              placeholder={
                activeTask === "task1"
                  ? "Write your Task 1 response here... (Introduction, Overview, Details 1, Details 2)"
                  : "Write your Task 2 essay here... (Introduction with thesis, Body Paragraph 1, Body Paragraph 2, Conclusion)"
              }
              className="w-full resize-y rounded-2xl border-2 border-gray-200 bg-white p-4 font-serif text-base sm:text-lg leading-relaxed text-gray-900 outline-none focus:border-lingo-blue focus:ring-4 focus:ring-lingo-blue/10"
            />
          </div>

          {/* Model Band 9 Comparison after Submission */}
          {isSubmitted && (
            <div className="rounded-3xl border-2 border-lingo-green bg-white p-6 shadow-md flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-lingo-green text-white">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-900">
                    Official Cambridge Band 9.0 Model Response
                  </h4>
                  <span className="text-xs text-gray-500">
                    {activeTask === "task1" ? "Task 1 Report Model" : "Task 2 Essay Model"}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4 sm:p-5 font-serif text-sm sm:text-base leading-relaxed text-gray-800 whitespace-pre-line border border-gray-200">
                {activeTask === "task1"
                  ? exam.task1.modelAnswerBand9
                  : exam.task2.modelAnswerBand9}
              </div>

              <div className="rounded-2xl bg-green-50/70 p-4 border border-green-200 text-xs text-green-900 font-medium leading-relaxed">
                <strong>Cambridge Examiner Assessment:</strong>{" "}
                {activeTask === "task1"
                  ? exam.task1.examinerAnalysis
                  : exam.task2.examinerAnalysis}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
