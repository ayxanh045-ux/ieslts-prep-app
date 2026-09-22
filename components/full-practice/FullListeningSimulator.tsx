"use client";

import { useState, useEffect, useRef } from "react";
import { FullListeningExam } from "@/types/curriculum";
import { soundEngine } from "@/lib/audio/sound-effects";
import {
  Headphones,
  Play,
  Pause,
  Send,
  Award,
  FileText,
  Bookmark,
  Volume2,
  VolumeX,
  Gauge,
} from "lucide-react";

interface FullListeningSimulatorProps {
  exam: FullListeningExam;
  onExit: () => void;
}

export function FullListeningSimulator({ exam, onExit }: FullListeningSimulatorProps) {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: string }>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<{ [qNum: number]: boolean }>({});
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(300);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [audioMode, setAudioMode] = useState<"original" | "narrator">("original");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeSection = exam.sections[activeSectionIndex];
  const allQuestions = exam.sections.flatMap((s) => s.questions);

  // Sync audio element on section change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    soundEngine.stopSpeaking();
    setIsPlaying(false);
    setCurrentTime(0);
  }, [activeSectionIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, [activeSection.audioUrl]);

  const handlePlayAudio = () => {
    if (audioMode === "original" && activeSection.audioUrl) {
      const audio = audioRef.current;
      if (!audio) return;

      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setAudioMode("narrator");
          playNarratorFallback();
        });
      }
    } else {
      playNarratorFallback();
    }
  };

  const playNarratorFallback = () => {
    if (isPlaying) {
      soundEngine.stopSpeaking();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      soundEngine.speak(activeSection.audioScript, "British", () => {
        setIsPlaying(false);
      });
    }
  };

  const handleSeek = (secs: number) => {
    if (audioRef.current && audioMode === "original") {
      audioRef.current.currentTime = Math.max(0, Math.min(secs, duration));
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const toggleRate = () => {
    const nextRate = playbackRate === 1.0 ? 1.2 : playbackRate === 1.2 ? 0.8 : 1.0;
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleAnswerChange = (qId: string, val: string) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const toggleFlag = (qNum: number) => {
    setFlaggedQuestions((prev) => ({ ...prev, [qNum]: !prev[qNum] }));
  };

  const handleSubmitExam = () => {
    if (audioRef.current) audioRef.current.pause();
    soundEngine.stopSpeaking();
    setIsPlaying(false);
    setIsSubmitted(true);
    soundEngine.playFanfare();
  };

  // Calculate score
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

  // Calculate Band Score
  const scaleRatio = 40 / allQuestions.length;
  const scaled = Math.round(rawScore * scaleRatio);
  let bandScore = 6.0;
  if (scaled >= 39) bandScore = 9.0;
  else if (scaled >= 37) bandScore = 8.5;
  else if (scaled >= 35) bandScore = 8.0;
  else if (scaled >= 32) bandScore = 7.5;
  else if (scaled >= 30) bandScore = 7.0;
  else if (scaled >= 26) bandScore = 6.5;
  else if (scaled >= 23) bandScore = 6.0;
  else if (scaled >= 18) bandScore = 5.5;
  else bandScore = 5.0;

  return (
    <div className="flex flex-col gap-6 pb-20">
      {/* Hidden native HTML5 Audio element */}
      {activeSection.audioUrl && (
        <audio
          ref={audioRef}
          src={activeSection.audioUrl}
          preload="metadata"
        />
      )}

      {/* HEADER CONTROL BAR */}
      <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700 font-black">
            <Headphones className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-black text-gray-900 leading-tight">
              {exam.title}
            </h2>
            <span className="text-xs text-gray-500">
              Section {activeSection.sectionNumber} of {exam.sections.length} • {allQuestions.length} Questions
            </span>
          </div>
        </div>

        {/* Audio Play Button & Submit */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePlayAudio}
            className={`btn-3d flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase text-white shadow-lingo ${
              isPlaying
                ? "bg-amber-500 hover:bg-amber-600 shadow-lingo-amber"
                : "bg-purple-600 hover:bg-purple-700 shadow-lingo-purple"
            }`}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            <span>{isPlaying ? "Pause Audio" : "Play Cambridge Audio"}</span>
          </button>

          {!isSubmitted ? (
            <button
              onClick={handleSubmitExam}
              className="btn-3d flex items-center gap-1.5 rounded-xl bg-lingo-green px-5 py-2 text-xs font-black uppercase text-white shadow-lingo-green hover:bg-lingo-green-dark"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Submit</span>
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

      {/* RESULTS BANNER */}
      {isSubmitted && (
        <div className="rounded-3xl border-2 border-lingo-green bg-white p-6 sm:p-8 shadow-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-white shadow-lingo-purple mb-3">
            <Award className="h-8 w-8 stroke-[2.5]" />
          </div>
          <h3 className="text-2xl font-black text-gray-900">
            Official Cambridge Listening Result
          </h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">
            Raw Score: {rawScore} / {allQuestions.length} correct
          </p>
          <div className="my-4 inline-flex items-center gap-3 rounded-2xl bg-purple-50 px-6 py-3 border border-purple-200">
            <span className="text-sm font-bold text-purple-800">Calculated Listening Band:</span>
            <span className="text-3xl font-black text-purple-950">Band {bandScore.toFixed(1)}</span>
          </div>
        </div>
      )}

      {/* SECTION TABS */}
      <div className="flex gap-2 border-b border-gray-200 pb-2">
        {exam.sections.map((s, idx) => (
          <button
            key={s.sectionNumber}
            onClick={() => {
              if (audioRef.current) audioRef.current.pause();
              soundEngine.stopSpeaking();
              setIsPlaying(false);
              setActiveSectionIndex(idx);
            }}
            className={`btn-3d rounded-xl px-5 py-2.5 text-xs sm:text-sm font-extrabold transition-all ${
              activeSectionIndex === idx
                ? "bg-purple-600 text-white shadow-lingo-purple"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50"
            }`}
          >
            Section {s.sectionNumber}
          </button>
        ))}
      </div>

      {/* SECTION BRIEF & AUTHENTIC CAMBRIDGE AUDIO CONSOLE */}
      <div className="flex flex-col gap-5">
        <div className="rounded-3xl border-2 border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-purple-100 px-2.5 py-0.5 text-xs font-black text-purple-800">
                SECTION {activeSection.sectionNumber}
              </span>
              <span className="rounded-lg bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[11px] font-black text-emerald-800">
                Official Cambridge Studio Audio
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleRate}
                className="flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-xs font-bold text-gray-700 hover:bg-gray-200"
              >
                <Gauge className="h-3 w-3" />
                <span>{playbackRate}x</span>
              </button>
              <button
                onClick={toggleMute}
                className="rounded-lg bg-gray-100 p-1 text-gray-700 hover:bg-gray-200"
              >
                {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          <h3 className="text-lg font-extrabold text-gray-900">{activeSection.title}</h3>
          <p className="text-xs text-gray-500 mt-1 italic">{activeSection.contextDescription}</p>

          {/* Scrubber slider */}
          <div className="mt-4 flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
            <span className="font-mono text-xs font-bold text-gray-500">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 300}
              step={0.5}
              value={currentTime}
              onChange={(e) => handleSeek(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <span className="font-mono text-xs font-bold text-gray-500">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Question Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeSection.questions.map((q) => {
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
                className={`rounded-3xl border-2 p-5 bg-white shadow-sm flex flex-col justify-between transition-all ${
                  isSubmitted
                    ? isCorrect
                      ? "border-green-400 bg-green-50/30"
                      : "border-red-300 bg-red-50/30"
                    : isFlagged
                    ? "border-amber-400"
                    : "border-gray-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-600 text-xs font-black text-white">
                      {q.questionNumber}
                    </span>
                    <button
                      onClick={() => toggleFlag(q.questionNumber)}
                      className={`flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold transition-all ${
                        isFlagged
                          ? "bg-amber-100 text-amber-800"
                          : "text-gray-400 hover:bg-gray-100"
                      }`}
                    >
                      <Bookmark className="h-3 w-3" />
                      <span>{isFlagged ? "Flagged" : "Flag"}</span>
                    </button>
                  </div>

                  <p className="text-sm font-bold text-gray-900 leading-snug whitespace-pre-line mb-4">
                    {q.prompt}
                  </p>

                  {/* Multiple Choice */}
                  {q.options && (
                    <div className="flex flex-col gap-2">
                      {q.options.map((opt, i) => {
                        const isSelected = currentAns === opt;
                        return (
                          <button
                            key={i}
                            disabled={isSubmitted}
                            onClick={() => handleAnswerChange(q.id, opt)}
                            className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-left text-xs font-semibold transition-all ${
                              isSelected
                                ? "border-purple-600 bg-purple-50 text-purple-900 font-bold"
                                : "border-gray-200 hover:bg-gray-50 text-gray-700"
                            }`}
                          >
                            <span className="flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold">
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Text Input / Note Completion */}
                  {!q.options && (
                    <input
                      type="text"
                      disabled={isSubmitted}
                      value={currentAns}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      placeholder="Type answer..."
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-3 py-2 text-xs font-bold text-gray-800 focus:border-purple-600 focus:bg-white focus:outline-none"
                    />
                  )}
                </div>

                {/* Review feedback after submission */}
                {isSubmitted && (
                  <div className="mt-4 border-t border-gray-100 pt-3 text-xs">
                    <div className="font-bold text-gray-700">
                      Correct Answer:{" "}
                      <span className="text-lingo-green-dark">{q.correctAnswer}</span>
                    </div>
                    {q.proofQuote && (
                      <div className="mt-1 text-gray-500 italic">
                        Proof: &quot;{q.proofQuote}&quot;
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* TRANSCRIPT TOGGLE (Available in review mode) */}
        {isSubmitted && (
          <div className="rounded-3xl border-2 border-gray-200 bg-white p-5 shadow-sm">
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="flex items-center gap-2 text-xs font-black uppercase text-purple-700"
            >
              <FileText className="h-4 w-4" />
              <span>{showTranscript ? "Hide Transcript" : "Show Full Section Audio Script"}</span>
            </button>
            {showTranscript && (
              <div className="mt-4 rounded-2xl bg-gray-50 p-4 text-xs font-serif leading-relaxed text-gray-700 whitespace-pre-line border border-gray-100">
                {activeSection.audioScript}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
