"use client";

import { useState, useEffect } from "react";
import { GrammarDrillExercise } from "@/types/curriculum";
import { soundEngine } from "@/lib/audio/sound-effects";
import { RotateCcw } from "lucide-react";

interface GrammarTileDrillProps {
  exercise: GrammarDrillExercise;
  selectedTiles: string[];
  onTilesChange: (tiles: string[]) => void;
  status: "idle" | "correct" | "incorrect";
}

export function GrammarTileDrill({
  exercise,
  selectedTiles,
  onTilesChange,
  status,
}: GrammarTileDrillProps) {
  // Available pool of tiles (excluding already selected tiles by index or identity)
  const [availableTiles, setAvailableTiles] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    // Initialize pool from exercise.wordTiles with random order
    const initial = exercise.wordTiles.map((text, idx) => ({
      id: `${text}-${idx}`,
      text,
    }));
    // Shuffle slightly for authentic puzzle feel
    setAvailableTiles([...initial].sort(() => 0.5 - Math.random()));
  }, [exercise]);



  // Click on available tile -> move to solution
  const handleSelectTile = (tile: { id: string; text: string }) => {
    if (status !== "idle") return;
    soundEngine.playTileClick();
    setAvailableTiles((prev) => prev.filter((t) => t.id !== tile.id));
    onTilesChange([...selectedTiles, tile.text]);
  };

  // Click on tile in solution -> return to available pool
  const handleRemoveTile = (text: string, indexToRemove: number) => {
    if (status !== "idle") return;
    soundEngine.playTileClick();
    const newSelected = selectedTiles.filter((_, idx) => idx !== indexToRemove);
    onTilesChange(newSelected);
    setAvailableTiles((prev) => [...prev, { id: `${text}-${Date.now()}`, text }]);
  };

  const handleReset = () => {
    if (status !== "idle") return;
    soundEngine.playTileClick();
    const initial = exercise.wordTiles.map((text, idx) => ({
      id: `${text}-${idx}`,
      text,
    }));
    setAvailableTiles([...initial].sort(() => 0.5 - Math.random()));
    onTilesChange([]);
  };

  return (
    <div className="mx-auto max-w-3xl flex flex-col gap-6 rounded-3xl border-2 border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Category Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="rounded-xl bg-purple-100 px-3 py-1 text-xs font-black text-purple-800 uppercase tracking-wide">
            Track B • Grammatical Range
          </span>
          <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-bold text-purple-700">
            {exercise.category}
          </span>
        </div>
        <button
          onClick={handleReset}
          disabled={status !== "idle" || selectedTiles.length === 0}
          className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-gray-800 disabled:opacity-30 transition-opacity"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Reset Tiles</span>
        </button>
      </div>

      {/* Baseline Band 6 Sentence */}
      <div className="rounded-2xl bg-amber-50/60 p-4 border border-amber-200/70">
        <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 block mb-1">
          Band 6.0 Standard Sentence:
        </span>
        <p className="text-base sm:text-lg font-medium text-gray-800 font-serif italic">
          &ldquo;{exercise.baseSentence}&rdquo;
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-base sm:text-lg font-extrabold text-gray-900">
          Reconstruct the Band 8.5+ Complex Sentence:
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Tap words in correct order to apply {exercise.category} structure
        </p>
      </div>

      {/* Assembly Area (Drop Zone) */}
      <div className="min-h-[110px] rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/70 p-4 flex flex-wrap items-center content-start gap-2.5 transition-all">
        {selectedTiles.length === 0 ? (
          <div className="w-full flex items-center justify-center py-6 text-sm font-semibold text-gray-400">
            Select words below to assemble the sentence
          </div>
        ) : (
          selectedTiles.map((word, idx) => (
            <button
              key={`${word}-${idx}`}
              onClick={() => handleRemoveTile(word, idx)}
              disabled={status !== "idle"}
              className="btn-3d flex items-center gap-1.5 rounded-xl border-2 border-lingo-blue bg-lingo-blue px-3.5 py-2 text-sm sm:text-base font-bold text-white shadow-lingo-blue hover:bg-lingo-blue-dark transition-all"
            >
              <span>{word}</span>
            </button>
          ))
        )}
      </div>

      {/* Available Word Tiles */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
          Available Word Tiles:
        </span>
        <div className="flex flex-wrap gap-2.5 min-h-[70px]">
          {availableTiles.map((tile) => (
            <button
              key={tile.id}
              onClick={() => handleSelectTile(tile)}
              disabled={status !== "idle"}
              className="btn-3d rounded-xl border-2 border-gray-200 bg-white px-3.5 py-2.5 text-sm sm:text-base font-bold text-gray-800 shadow-lingo-gray hover:border-gray-300 hover:bg-gray-50 active:translate-y-1 transition-all"
            >
              {tile.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
