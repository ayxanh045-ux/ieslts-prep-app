"use client";

import { useState, useEffect, useRef, useId } from "react";
import { ListeningChunk } from "@/types/curriculum";
import { soundEngine } from "@/lib/audio/sound-effects";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  FileText,
  AlertTriangle,
  Radio,
  ChevronDown,
  ChevronUp,
  Gauge,
  Headphones,
  Target,
} from "lucide-react";

interface AudioChunkPlayerProps {
  chunk: ListeningChunk;
  activeQuestionIndex: number;
  userAnswers: { [qId: string]: string };
  onAnswerChange: (qId: string, val: string) => void;
  status: "idle" | "correct" | "incorrect";
}

export function AudioChunkPlayer({
  chunk,
  activeQuestionIndex,
  userAnswers,
  onAnswerChange,
  status,
}: AudioChunkPlayerProps) {
  const audioId = useId();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 30s question inspection countdown state
  const [prepTimeRemaining, setPrepTimeRemaining] = useState<number>(chunk.prepTimeSeconds);
  const [prepActive, setPrepActive] = useState<boolean>(true);

  // Audio Playback State
  const [audioMode, setAudioMode] = useState<"original" | "narrator">(
    chunk.audioUrl ? "original" : "narrator"
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(chunk.segmentStartTime || 0);
  const [duration, setDuration] = useState<number>(chunk.durationSeconds || 60);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  const segmentStart = chunk.segmentStartTime || 0;
  const segmentEnd = chunk.segmentEndTime || (duration > 0 ? duration : 300);

  // Countdown timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (prepActive && prepTimeRemaining > 0) {
      timer = setInterval(() => {
        setPrepTimeRemaining((prev) => {
          if (prev <= 1) {
            setPrepActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [prepActive, prepTimeRemaining]);

  // Sync HTML5 Audio element events & chunk bounds
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);

      // Enforce chunk segment boundary: stop when chunk reaches its segment end
      if (chunk.segmentEndTime && audio.currentTime >= chunk.segmentEndTime) {
        audio.pause();
        setIsPlaying(false);
        audio.currentTime = segmentStart;
      }
    };

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
      // Cue to segment start offset
      if (segmentStart > 0 && audio.currentTime < segmentStart) {
        audio.currentTime = segmentStart;
        setCurrentTime(segmentStart);
      }
      setAudioError(false);
    };

    const onEnded = () => setIsPlaying(false);
    const onError = () => {
      setAudioError(true);
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [chunk.audioUrl, chunk.segmentEndTime, segmentStart]);

  // Audio Play / Pause toggle
  const handlePlay = () => {
    if (audioMode === "original" && chunk.audioUrl && !audioError) {
      const audio = audioRef.current;
      if (!audio) return;

      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        // If before start or after end, cue to segment start
        if (audio.currentTime < segmentStart || audio.currentTime >= segmentEnd) {
          audio.currentTime = segmentStart;
        }

        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setAudioError(true);
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
      soundEngine.speak(chunk.audioScript, chunk.speakerAccent, () => {
        setIsPlaying(false);
      });
    }
  };

  const handleSkipPrep = () => {
    setPrepActive(false);
    setPrepTimeRemaining(0);
    handlePlay();
  };

  const handleSeek = (seconds: number) => {
    if (audioRef.current && audioMode === "original") {
      audioRef.current.currentTime = Math.max(0, Math.min(seconds, duration));
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSkip10 = (forward: boolean) => {
    const delta = forward ? 10 : -10;
    handleSeek(currentTime + delta);
  };

  // Jump directly to a question's audio clue (with 2-second lead-in)
  const handleJumpToQuestionAudio = (secs?: number) => {
    if (typeof secs !== "number") return;
    if (audioRef.current && audioMode === "original") {
      audioRef.current.currentTime = Math.max(0, secs - 2);
      setCurrentTime(audioRef.current.currentTime);
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
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

  const currentQ = chunk.questions[activeQuestionIndex];

  // Check if current question's answer is actively being spoken right now
  const isCurrentlySpoken =
    isPlaying &&
    typeof currentQ.audioTimestampSeconds === "number" &&
    Math.abs(currentTime - currentQ.audioTimestampSeconds) <= 6;

  return (
    <div className="mx-auto max-w-4xl flex flex-col gap-6">
      {/* Hidden native HTML5 Audio element */}
      {chunk.audioUrl && (
        <audio
          id={audioId}
          ref={audioRef}
          src={chunk.audioUrl}
          preload="metadata"
        />
      )}

      {/* 30-Second Inspection Countdown Banner */}
      {prepActive && (
        <div className="rounded-3xl border-2 border-amber-300 bg-amber-50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm animate-pulse">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white font-black text-xl shadow-lingo-amber">
              {prepTimeRemaining}s
            </div>
            <div>
              <h4 className="text-base font-extrabold text-amber-900">
                Cambridge 30-Second Question Inspection
              </h4>
              <p className="text-xs text-amber-700">
                Read questions 1 to {chunk.questions.length} and predict missing keywords before the official recording plays.
              </p>
            </div>
          </div>
          <button
            onClick={handleSkipPrep}
            className="btn-3d rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-black uppercase text-white shadow-lingo-amber hover:bg-amber-600 transition-colors"
          >
            Start Audio Now
          </button>
        </div>
      )}

      {/* Main Authentic Cambridge Audio Player Card */}
      <div className="rounded-3xl border-2 border-gray-200 bg-white p-5 sm:p-7 shadow-sm">
        {/* Header with Badges & Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gray-100 pb-4 mb-5">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-xs font-black text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Original Cambridge Audio (Studio Recording)
              </span>
              <span className="rounded-lg bg-purple-50 px-2.5 py-0.5 text-xs font-black text-purple-700">
                Part {chunk.part} • {chunk.speakerAccent} Accent
              </span>
              {chunk.segmentStartTime !== undefined && (
                <span className="rounded-lg bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-700 border border-blue-200">
                  Segment: {formatTime(chunk.segmentStartTime)} – {formatTime(chunk.segmentEndTime || 0)}
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">{chunk.title}</h3>
            <span className="text-xs font-bold text-gray-400">
              {chunk.source.title} (Cambridge Book {chunk.source.book}, Test {chunk.source.test})
            </span>
          </div>

          {/* Audio Source Selector */}
          <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-2xl border border-gray-200/60">
            <button
              onClick={() => {
                if (isPlaying) {
                  audioRef.current?.pause();
                  soundEngine.stopSpeaking();
                  setIsPlaying(false);
                }
                setAudioMode("original");
              }}
              className={`flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-black transition-all ${
                audioMode === "original"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <Radio className="h-3 w-3 text-emerald-600" />
              <span>Original Audio</span>
            </button>
            <button
              onClick={() => {
                if (isPlaying) {
                  audioRef.current?.pause();
                  soundEngine.stopSpeaking();
                  setIsPlaying(false);
                }
                setAudioMode("narrator");
              }}
              className={`flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-black transition-all ${
                audioMode === "narrator"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <Headphones className="h-3 w-3 text-purple-600" />
              <span>Voice Narrator</span>
            </button>
          </div>
        </div>

        {/* Audio Error Alert with Fallback */}
        {audioError && audioMode === "original" && (
          <div className="mb-4 rounded-2xl bg-amber-50 border border-amber-200 p-3 flex items-center justify-between gap-3 text-xs text-amber-900">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0" />
              <span>
                Streaming original audio encountered network latency. You can listen via the voice narrator.
              </span>
            </div>
            <button
              onClick={() => setAudioMode("narrator")}
              className="font-bold underline text-amber-800 hover:text-amber-950 flex-shrink-0"
            >
              Switch to Narrator
            </button>
          </div>
        )}

        {/* CONTROLS BAR: Play, Skip 10s, Time Scrubber, Waveform, Speed, Volume */}
        <div className="rounded-2xl bg-[#0F172A] p-4 sm:p-5 text-white shadow-inner flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Play/Pause & Skip Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleSkip10(false)}
                className="rounded-xl bg-slate-800 p-2.5 text-slate-300 hover:bg-slate-700 hover:text-white transition-all text-xs font-bold"
                title="Rewind 10 seconds"
              >
                -10s
              </button>

              <button
                onClick={handlePlay}
                className={`btn-3d flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-all ${
                  isPlaying
                    ? "bg-amber-500 shadow-lingo-amber hover:bg-amber-600 scale-105"
                    : "bg-emerald-500 shadow-lingo-green hover:bg-emerald-600"
                }`}
                title={isPlaying ? "Pause audio" : "Play original Cambridge recording"}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 fill-current" />
                ) : (
                  <Play className="h-6 w-6 fill-current ml-0.5" />
                )}
              </button>

              <button
                onClick={() => handleSkip10(true)}
                className="rounded-xl bg-slate-800 p-2.5 text-slate-300 hover:bg-slate-700 hover:text-white transition-all text-xs font-bold"
                title="Forward 10 seconds"
              >
                +10s
              </button>
            </div>

            {/* Visualizer Soundwave Animation */}
            <div className="flex items-center gap-1 h-8 px-4 bg-slate-800/80 rounded-xl">
              {[40, 75, 55, 90, 30, 85, 60, 95, 45, 70, 80, 50].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying ? "bg-emerald-400 animate-pulse" : "bg-slate-600"
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(20, (h * (i % 3 + 1)) % 100)}%` : "25%",
                    animationDelay: `${i * 75}ms`,
                  }}
                />
              ))}
              <span className="ml-3 text-[11px] font-mono font-bold text-slate-300">
                {isPlaying ? "PLAYING AUDIO" : "READY"}
              </span>
            </div>

            {/* Speed & Volume Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleRate}
                className="flex items-center gap-1 rounded-xl bg-slate-800 px-3 py-2 text-xs font-black text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                title="Change playback speed"
              >
                <Gauge className="h-3.5 w-3.5" />
                <span>{playbackRate}x</span>
              </button>

              <button
                onClick={toggleMute}
                className="rounded-xl bg-slate-800 p-2 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Time Scrubber Slider */}
          <div className="flex items-center gap-3 pt-1">
            <span className="font-mono text-xs font-bold text-slate-400 min-w-[42px]">
              {formatTime(currentTime)}
            </span>

            <input
              type="range"
              min={0}
              max={duration || 60}
              step={0.5}
              value={currentTime}
              onChange={(e) => handleSeek(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />

            <span className="font-mono text-xs font-bold text-slate-400 min-w-[42px] text-right">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-500 italic">
          <strong>Exam Context:</strong> {chunk.contextDescription}
        </p>

        {/* TRANSCRIPT ACCORDION (Review & Distractor Traps) */}
        <div className="mt-4 border-t border-gray-100 pt-3">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-1.5 text-xs font-black text-gray-500 hover:text-gray-800 transition-colors"
          >
            <FileText className="h-3.5 w-3.5 text-purple-600" />
            <span>{showTranscript ? "Hide Cambridge Transcript" : "View Cambridge Audio Script & Answers"}</span>
            {showTranscript ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>

          {showTranscript && (
            <div className="mt-3 rounded-2xl bg-purple-50/50 p-4 border border-purple-100 text-xs sm:text-sm text-gray-800 font-serif leading-relaxed">
              <div className="font-bold font-sans text-xs uppercase text-purple-700 mb-2">
                Official Audio Script
              </div>
              <p className="whitespace-pre-line">{chunk.audioScript}</p>
            </div>
          )}
        </div>
      </div>

      {/* QUESTION INTERACTIVE AREA — SYNCHRONIZED WITH AUDIO */}
      <div
        className={`rounded-3xl border-2 bg-white p-5 sm:p-7 shadow-sm transition-all duration-300 ${
          isCurrentlySpoken ? "border-emerald-500 ring-4 ring-emerald-100" : "border-gray-200"
        }`}
      >
        {/* Question Header & Synchronization Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-gray-400">
              Question {activeQuestionIndex + 1} of {chunk.questions.length}
            </span>

            {/* Jump-to-audio-clue button */}
            {currentQ.audioTimestampSeconds !== undefined && (
              <button
                onClick={() => handleJumpToQuestionAudio(currentQ.audioTimestampSeconds)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 px-2.5 py-1 text-xs font-black text-purple-800 transition-colors"
                title="Jump directly to the audio moment containing this answer"
              >
                <Headphones className="h-3.5 w-3.5" />
                <span>Jump to Audio ({currentQ.transcriptTimestamp})</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Live talking indicator */}
            {isCurrentlySpoken && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 text-xs font-black text-emerald-800 animate-pulse">
                <Target className="h-3.5 w-3.5 text-emerald-600 animate-spin" />
                <span>Speaker Discussing Answer!</span>
              </span>
            )}
            <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-black text-purple-700">
              {currentQ.type === "note_completion" ? "Note Completion" : "Multiple Choice"}
            </span>
          </div>
        </div>

        {/* Question Prompt */}
        <div className="mb-6">
          <p className="text-base sm:text-lg font-bold text-gray-900 leading-snug whitespace-pre-line">
            {currentQ.prompt}
          </p>
        </div>

        {/* Input Controls */}
        {currentQ.type === "note_completion" && (
          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-wider text-gray-400">
              Type Your Answer (Strict IELTS Word/Number Limits):
            </label>
            <input
              type="text"
              value={userAnswers[currentQ.id] || ""}
              onChange={(e) => onAnswerChange(currentQ.id, e.target.value)}
              placeholder="e.g., 22 or Sunday"
              className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3.5 text-base font-bold text-gray-900 transition-all focus:border-purple-600 focus:bg-white focus:outline-none"
            />
          </div>
        )}

        {currentQ.type === "multiple_choice" && currentQ.options && (
          <div className="flex flex-col gap-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = userAnswers[currentQ.id] === option;
              return (
                <button
                  key={idx}
                  onClick={() => onAnswerChange(currentQ.id, option)}
                  className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all ${
                    isSelected
                      ? "border-purple-600 bg-purple-50/50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 text-xs font-black ${
                      isSelected
                        ? "border-purple-600 bg-purple-600 text-white"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-sm font-bold text-gray-800">{option}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Distractor Trap Insight after answer submission */}
        {status !== "idle" && (
          <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-950">
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-2 font-black uppercase tracking-wider text-amber-800">
                <AlertTriangle className="h-4 w-4" />
                <span>Cambridge Distractor Analysis:</span>
              </div>
              {currentQ.audioTimestampSeconds !== undefined && (
                <button
                  onClick={() => handleJumpToQuestionAudio(currentQ.audioTimestampSeconds)}
                  className="inline-flex items-center gap-1 rounded-lg bg-amber-200 hover:bg-amber-300 px-2 py-0.5 text-[11px] font-black text-amber-900 transition-colors"
                >
                  <Play className="h-3 w-3 fill-current" />
                  <span>Replay Proof Snippet</span>
                </button>
              )}
            </div>
            <p className="mt-1 leading-relaxed">{currentQ.distractorTrapExplanation}</p>
            <div className="mt-2 text-amber-700 italic border-t border-amber-200/60 pt-2">
              <strong>Exact Recording Quote:</strong> &quot;{currentQ.proofQuote}&quot;
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
