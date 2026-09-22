"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIeltsStore } from "@/lib/store/useIeltsStore";
import { soundEngine } from "@/lib/audio/sound-effects";
import { Flame, Zap, Award, Volume2, VolumeX, BookOpen, Calculator, FileCheck, Bookmark, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { useVocabularyStore } from "@/lib/store/useVocabularyStore";
import { useMistakesStore } from "@/lib/store/useMistakesStore";

export function Navbar() {
  const pathname = usePathname();
  const { streak, xp, soundEnabled, toggleSound, getEstimatedBand } = useIeltsStore();
  const savedWords = useVocabularyStore((s) => s.savedWords);
  const unresolvedMistakes = useMistakesStore((s) => s.mistakes.filter((m) => !m.resolved));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSoundToggle = () => {
    soundEngine.setEnabled(!soundEnabled);
    toggleSound();
    if (!soundEnabled) {
      soundEngine.playTileClick();
    }
  };

  const estimatedBand = mounted ? getEstimatedBand() : 6.5;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-lingo-green to-lingo-green-dark text-white shadow-lingo-green transition-transform group-hover:scale-105">
            <span className="text-xl font-black tracking-tighter">IL</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-gray-900">
                IELTS<span className="text-lingo-green">Lingo</span>
              </span>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-amber-700">
                SUPER
              </span>
            </div>
            <span className="text-[10px] font-medium text-gray-400 hidden sm:inline">
              Cambridge 1–21 Micro-Drills
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5">
          <Link
            href="/learn"
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-bold transition-all ${
              pathname.startsWith("/learn")
                ? "bg-lingo-green/10 text-lingo-green-dark"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            Skill Tree
          </Link>
          <Link
            href="/full-practice"
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-bold transition-all ${
              pathname.startsWith("/full-practice")
                ? "bg-purple-50 text-purple-700 font-black"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FileCheck className="h-4 w-4 text-purple-600" />
            <span>Full Practice</span>
            <span className="rounded-full bg-purple-100 px-1.5 py-0.2 text-[9px] font-black text-purple-800">
              1–21
            </span>
          </Link>
          <Link
            href="/vocabulary"
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-bold transition-all ${
              pathname.startsWith("/vocabulary")
                ? "bg-amber-50 text-amber-700 font-black"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Bookmark className="h-4 w-4 text-amber-600" />
            <span>Vocabulary</span>
            {mounted && savedWords.length > 0 && (
              <span className="rounded-full bg-amber-100 px-1.5 py-0.2 text-[10px] font-black text-amber-800">
                {savedWords.length}
              </span>
            )}
          </Link>
          <Link
            href="/mistakes"
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-bold transition-all ${
              pathname.startsWith("/mistakes")
                ? "bg-rose-50 text-rose-700 font-black"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <AlertTriangle className="h-4 w-4 text-rose-600" />
            <span>Mistakes</span>
            {mounted && unresolvedMistakes.length > 0 && (
              <span className="rounded-full bg-rose-500 px-1.5 py-0.2 text-[10px] font-black text-white animate-pulse">
                {unresolvedMistakes.length}
              </span>
            )}
          </Link>
          <Link
            href="/band-calculator"
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-bold transition-all ${
              pathname.startsWith("/band-calculator")
                ? "bg-lingo-blue/10 text-lingo-blue-dark"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Calculator className="h-4 w-4" />
            Band Calculator
          </Link>
        </nav>


        {/* Gamification Stats */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Daily Streak */}
          <div
            className="flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-xs sm:text-sm font-black text-amber-600 border border-orange-100"
            title="Daily Practice Streak"
          >
            <Flame className="h-4 w-4 fill-amber-500 text-amber-500 animate-pulse" />
            <span>{mounted ? streak : 4}</span>
          </div>

          {/* XP Display */}
          <div
            className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs sm:text-sm font-black text-amber-700 border border-amber-200/60"
            title="Earned Experience Points"
          >
            <Zap className="h-4 w-4 fill-amber-400 text-amber-500" />
            <span>{mounted ? xp : 420} <span className="text-[10px] text-amber-600/80">XP</span></span>
          </div>

          {/* Band Score Indicator */}
          <div
            className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs sm:text-sm font-black text-lingo-blue-dark border border-blue-100"
            title="Estimated Cambridge Band Score"
          >
            <Award className="h-4 w-4 text-lingo-blue" />
            <span className="hidden sm:inline text-xs font-bold text-gray-500">Band</span>
            <span>{estimatedBand.toFixed(1)}</span>
          </div>

          {/* Mobile Vocabulary Link */}
          <Link
            href="/vocabulary"
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors shadow-sm relative"
            title="Saved Vocabulary Words"
            aria-label="Vocabulary"
          >
            <Bookmark className="h-4 w-4 text-amber-600" />
            {mounted && savedWords.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4.5 min-w-4.5 px-1 items-center justify-center rounded-full bg-amber-600 text-[9px] font-black text-white shadow-sm">
                {savedWords.length > 9 ? "9+" : savedWords.length}
              </span>
            )}
          </Link>

          {/* Mobile Mistakes Link */}
          <Link
            href="/mistakes"
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors shadow-sm relative"
            title="Səhvlərim (Mistakes Bank)"
            aria-label="Mistakes"
          >
            <AlertTriangle className="h-4 w-4 text-rose-600" />
            {mounted && unresolvedMistakes.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4.5 min-w-4.5 px-1 items-center justify-center rounded-full bg-rose-500 text-[9px] font-black text-white shadow-sm animate-pulse">
                {unresolvedMistakes.length > 9 ? "9+" : unresolvedMistakes.length}
              </span>
            )}
          </Link>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
            title={soundEnabled ? "Mute Game Audio" : "Enable Game Audio"}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? (
              <Volume2 className="h-4 w-4 text-lingo-green" />
            ) : (
              <VolumeX className="h-4 w-4 text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
