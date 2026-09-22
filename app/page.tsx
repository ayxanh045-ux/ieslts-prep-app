"use client";

import Link from "next/link";
import { useIeltsStore } from "@/lib/store/useIeltsStore";
import {
  Flame,
  Zap,
  Award,
  BookOpen,
  PenTool,
  Headphones,
  FileCheck,
  ArrowRight,
  Sparkles,
  Infinity as InfinityIcon,
  Timer,
  BookMarked,
} from "lucide-react";

export default function HomePage() {
  const { streak, xp, getEstimatedBand } = useIeltsStore();
  const estimatedBand = getEstimatedBand();

  const features = [
    {
      icon: InfinityIcon,
      title: "No Heart Limits",
      description: "Super/Unlimited mode. Səhvlər cəza vermir; hər səhv cavabda ətraflı Cambridge izahı və ipucu açılır.",
      color: "bg-red-100 text-lingo-red",
    },
    {
      icon: Timer,
      title: "2-3 Min Micro-Learning",
      description: "Yorucu 60 dəqiqəlik testlər yerinə 2-3 dəqiqəlik hədəfli mikroməşqlər.",
      color: "bg-blue-100 text-lingo-blue-dark",
    },
    {
      icon: BookMarked,
      title: "Cambridge Books 1–21",
      description: "Həqiqi imtahan mətnləri, TFNG sübut cümlələri, və akademik distractor tələləri.",
      color: "bg-green-100 text-lingo-green-dark",
    },
  ];

  const pillarCards = [
    {
      title: "Reading: Micro-Passages",
      subtitle: "Paragraph-by-Paragraph breakdown",
      detail: "True/False/Not Given with proof quotes & summary completions",
      href: "/practice/reading-1",
      icon: BookOpen,
      badge: "Cambridge 17",
      color: "border-emerald-200 hover:border-lingo-green",
      btnColor: "bg-lingo-green hover:bg-lingo-green-dark shadow-lingo-green",
    },
    {
      title: "Writing: 3 Tracks",
      subtitle: "Spelling, Inversions & Paraphrasing",
      detail: "Master top spelling traps, Parsons word tiles, & Task 1/2 register upgrades",
      href: "/practice/writing-grammar",
      icon: PenTool,
      badge: "Band 8.5+ Syntax",
      color: "border-blue-200 hover:border-lingo-blue",
      btnColor: "bg-lingo-blue hover:bg-lingo-blue-dark shadow-lingo-blue",
    },
    {
      title: "Listening: Segmented Chunks",
      subtitle: "40-70s authentic dialogues",
      detail: "30s preview countdown, British/Australian audio, & distractor analysis",
      href: "/practice/listening-1",
      icon: Headphones,
      badge: "Accent Focus",
      color: "border-purple-200 hover:border-purple-500",
      btnColor: "bg-purple-600 hover:bg-purple-700 shadow-lingo-purple",
    },
    {
      title: "Full Practice: Books 1–21",
      subtitle: "Whole Reading, Listening & Writing (Task 1 & 2)",
      detail: "Official 40-question exam simulators, 60-min timers, and Band 9 model benchmarks",
      href: "/full-practice",
      icon: FileCheck,
      badge: "Cambridge 1–21",
      color: "border-indigo-200 hover:border-indigo-600",
      btnColor: "bg-indigo-600 hover:bg-indigo-700 shadow-lingo-purple",
    },
  ];


  return (
    <div className="min-h-screen bg-[#F7F9FA] pb-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-gray-200 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Copy */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-emerald-800 border border-emerald-200/80 mb-4">
                <Sparkles className="h-4 w-4 text-lingo-green" />
                <span>Gamified Cambridge 1–21 Engine</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-950 leading-[1.1]">
                Master IELTS in{" "}
                <span className="text-lingo-green underline decoration-wavy decoration-emerald-400">
                  3-Minute Chunks
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
                The addictive, Duolingo-style micro-practice platform modeled purely on authentic Cambridge IELTS exam patterns. No exhausting 60-minute tests. No penalty hearts.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/learn"
                  className="btn-3d flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-lingo-green px-6 py-4 text-base font-black uppercase tracking-wider text-white shadow-lingo-green hover:bg-lingo-green-dark"
                >
                  <span>Skill Tree</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/full-practice"
                  className="btn-3d flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-purple-600 px-6 py-4 text-base font-black uppercase tracking-wider text-white shadow-lingo-purple hover:bg-purple-700"
                >
                  <FileCheck className="h-5 w-5" />
                  <span>Full Mock Exams (1–21)</span>
                </Link>
                <Link
                  href="/band-calculator"
                  className="btn-3d flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-sm font-extrabold text-gray-700 hover:bg-gray-50 shadow-lingo-gray"
                >
                  <span>Calculator</span>
                </Link>
              </div>

            </div>

            {/* Right Gamified Stats Card */}
            <div className="w-full max-w-md rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-xl relative">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lingo-green text-white font-black text-lg shadow-lingo-green">
                    IL
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-gray-900">Your Exam Readiness</h3>
                    <span className="text-[11px] font-semibold text-gray-400">Continuous Assessment</span>
                  </div>
                </div>
                <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-black text-amber-800">
                  SUPER
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 text-center mb-5">
                <div className="rounded-2xl bg-orange-50 p-3 border border-orange-100">
                  <Flame className="h-5 w-5 fill-amber-500 text-amber-500 mx-auto" />
                  <div className="text-lg font-black text-amber-900 mt-1">{streak} Days</div>
                  <span className="text-[10px] font-bold text-amber-700 uppercase">Streak</span>
                </div>
                <div className="rounded-2xl bg-amber-50 p-3 border border-amber-100">
                  <Zap className="h-5 w-5 fill-amber-400 text-amber-500 mx-auto" />
                  <div className="text-lg font-black text-amber-900 mt-1">{xp}</div>
                  <span className="text-[10px] font-bold text-amber-700 uppercase">Total XP</span>
                </div>
                <div className="rounded-2xl bg-blue-50 p-3 border border-blue-100">
                  <Award className="h-5 w-5 text-lingo-blue mx-auto" />
                  <div className="text-lg font-black text-blue-900 mt-1">{estimatedBand.toFixed(1)}</div>
                  <span className="text-[10px] font-bold text-blue-700 uppercase">Est. Band</span>
                </div>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4 border border-gray-100 text-left">
                <span className="text-xs font-bold text-gray-700 block mb-1">
                  Today&apos;s Recommended Micro-Drill:
                </span>
                <p className="text-xs text-gray-500 mb-3">
                  Negative Inversion Parsons puzzle & TFNG Silk Road analysis.
                </p>
                <Link
                  href="/practice/writing-grammar"
                  className="btn-3d flex items-center justify-center gap-1.5 rounded-xl bg-lingo-blue py-2.5 text-xs font-black uppercase text-white shadow-lingo-blue hover:bg-lingo-blue-dark"
                >
                  <span>Start 2-Min Drill</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE OPERATING PRINCIPLES */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm flex flex-col items-start gap-3"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${f.color} font-black`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 CORE PILLARS QUICK-LAUNCH */}
      <section className="py-6">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col gap-1 mb-6">
            <h2 className="text-2xl font-black text-gray-900">
              The 4 Pillars of Cambridge IELTS
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-gray-500">
              Select a specialized micro-track to practice immediately:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillarCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-3xl border-2 bg-white p-6 shadow-sm transition-all flex flex-col justify-between ${card.color}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-black text-gray-700">
                        {card.badge}
                      </span>
                      <Icon className="h-5 w-5 text-gray-400" />
                    </div>

                    <h3 className="text-lg font-black text-gray-900">{card.title}</h3>
                    <p className="text-xs font-bold text-gray-500 mt-0.5">{card.subtitle}</p>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">{card.detail}</p>
                  </div>

                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <Link
                      href={card.href}
                      className={`btn-3d flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-black uppercase text-white shadow-lingo ${card.btnColor}`}
                    >
                      <span>Jump Into Micro-Drill</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
