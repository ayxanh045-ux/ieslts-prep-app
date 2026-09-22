"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { ReadingPassageChunk, ReadingQuestion } from "@/types/curriculum";
import { useVocabularyStore } from "@/lib/store/useVocabularyStore";
import { soundEngine } from "@/lib/audio/sound-effects";
import {
  Highlighter,
  Bookmark,
  Volume2,
  Trash2,
  Check,
  Sparkles,
  X,
} from "lucide-react";

interface ReadingMicroPaneProps {
  passage: ReadingPassageChunk;
  activeQuestionIndex: number;
  selectedAnswer: string;
  onSelectAnswer: (val: string) => void;
  status: "idle" | "correct" | "incorrect";
}

interface SelectionPopupState {
  visible: boolean;
  x: number;
  y: number;
  selectedText: string;
  contextSentence: string;
}

export function ReadingMicroPane({
  passage,
  activeQuestionIndex,
  selectedAnswer,
  onSelectAnswer,
  status,
}: ReadingMicroPaneProps) {
  const paragraphContainerRef = useRef<HTMLDivElement | null>(null);

  // Vocabulary & Highlight Store
  const {
    savedWords,
    saveWord,
    passageHighlights,
    addHighlight,
    removeHighlight,
    clearPassageHighlights,
  } = useVocabularyStore();

  const currentHighlights = useMemo(() => {
    return passageHighlights[passage.id] || [];
  }, [passageHighlights, passage.id]);

  const currentQuestion: ReadingQuestion = passage.questions[activeQuestionIndex];

  // Selection popup state
  const [popup, setPopup] = useState<SelectionPopupState>({
    visible: false,
    x: 0,
    y: 0,
    selectedText: "",
    contextSentence: "",
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Show transient toast feedback
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Listen for text selection inside paragraph text
  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      // Don't close immediately if clicking inside the popup
      return;
    }

    const text = selection.toString().trim();
    if (!text || text.length < 2) return;

    // Check if selection occurred inside our paragraph container
    if (
      paragraphContainerRef.current &&
      paragraphContainerRef.current.contains(selection.anchorNode)
    ) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      // Find the sentence containing this selection
      const fullText = passage.paragraphText;
      let sentence = "";
      const textIndex = fullText.indexOf(text);
      if (textIndex !== -1) {
        const lastPeriod = fullText.lastIndexOf(".", textIndex);
        const nextPeriod = fullText.indexOf(".", textIndex + text.length);
        const start = lastPeriod === -1 ? 0 : lastPeriod + 1;
        const end = nextPeriod === -1 ? fullText.length : nextPeriod + 1;
        sentence = fullText.substring(start, end).trim();
      } else {
        sentence = text;
      }

      setPopup({
        visible: true,
        x: rect.left + rect.width / 2,
        y: rect.top - 12,
        selectedText: text,
        contextSentence: sentence,
      });
    }
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#selection-action-popup")) {
        setPopup((prev) => ({ ...prev, visible: false }));
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  // Action: Highlight selected text
  const handleApplyHighlight = () => {
    if (!popup.selectedText) return;
    addHighlight(passage.id, popup.selectedText);
    soundEngine.playTileClick();
    showToast(`Highlighted: "${popup.selectedText}"`);
    setPopup((prev) => ({ ...prev, visible: false }));
    window.getSelection()?.removeAllRanges();
  };

  // Action: Save unknown word to vocabulary notebook
  const handleSaveUnknownWord = () => {
    if (!popup.selectedText) return;
    saveWord({
      word: popup.selectedText,
      contextSentence: popup.contextSentence,
      sourcePassageTitle: passage.title,
      sourceReference: `Cambridge ${passage.source.book} • Test ${passage.source.test} • ${passage.paragraphLabel}`,
    });
    soundEngine.playCorrect();
    showToast(`Saved to Vocabulary Notebook: "${popup.selectedText}"!`);
    setPopup((prev) => ({ ...prev, visible: false }));
    window.getSelection()?.removeAllRanges();
  };

  // Action: Pronounce selected text
  const handleSpeakText = () => {
    if (!popup.selectedText) return;
    soundEngine.speak(popup.selectedText, "British");
  };

  // Render paragraph text with interactive highlight marks & saved word tags
  const renderedParagraphContent = useMemo(() => {
    const text = passage.paragraphText;
    if (!currentHighlights || currentHighlights.length === 0) {
      return text;
    }

    // Sort highlights by length descending to prevent substring collisions
    const sortedHighlights = [...currentHighlights].sort((a, b) => b.length - a.length);

    // Build regular expression
    const escaped = sortedHighlights
      .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");

    if (!escaped) return text;

    const regex = new RegExp(`(${escaped})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const matchHighlight = sortedHighlights.find(
        (h) => h.toLowerCase() === part.toLowerCase()
      );

      if (matchHighlight) {
        return (
          <mark
            key={index}
            className="group/mark relative inline-block bg-amber-200 text-amber-950 font-semibold px-1 py-0.5 rounded cursor-pointer transition-colors hover:bg-amber-300"
            title="Click to remove highlight or save word"
            onClick={(e) => {
              e.stopPropagation();
              removeHighlight(passage.id, matchHighlight);
              showToast(`Removed highlight: "${matchHighlight}"`);
            }}
          >
            {part}
            <span className="hidden group-hover/mark:inline-block ml-1 text-[10px] text-amber-700 underline">
              ✕
            </span>
          </mark>
        );
      }
      return <span key={index}>{part}</span>;
    });
  }, [passage.paragraphText, currentHighlights, passage.id, removeHighlight]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative">
      {/* FLOATING SELECTION ACTION TOOLTIP POPUP */}
      {popup.visible && (
        <div
          id="selection-action-popup"
          className="fixed z-50 flex items-center gap-1.5 rounded-2xl bg-gray-900 px-3 py-2 text-white shadow-2xl transition-all animate-in fade-in zoom-in-95 -translate-x-1/2 -translate-y-full"
          style={{
            left: `${popup.x}px`,
            top: `${popup.y}px`,
          }}
        >
          {/* Highlight Button */}
          <button
            onClick={handleApplyHighlight}
            className="flex items-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 px-2.5 py-1 text-xs font-black text-gray-950 transition-colors"
            title="Highlight selected text in yellow"
          >
            <Highlighter className="h-3.5 w-3.5" />
            <span>Highlight</span>
          </button>

          {/* Save Unknown Word to Notebook Button */}
          <button
            onClick={handleSaveUnknownWord}
            className="flex items-center gap-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 px-2.5 py-1 text-xs font-black text-white transition-colors"
            title="Save this word to your Vocabulary Notebook for revision"
          >
            <Bookmark className="h-3.5 w-3.5 fill-current" />
            <span>Save Word</span>
          </button>

          {/* Pronounce Button */}
          <button
            onClick={handleSpeakText}
            className="rounded-xl bg-slate-800 hover:bg-slate-700 p-1.5 text-slate-200 transition-colors"
            title="Hear British pronunciation"
          >
            <Volume2 className="h-3.5 w-3.5" />
          </button>

          {/* Close Button */}
          <button
            onClick={() => setPopup((prev) => ({ ...prev, visible: false }))}
            className="rounded-xl p-1 text-slate-400 hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>

          {/* Tooltip caret arrow pointing down */}
          <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}

      {/* TOAST FEEDBACK NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl bg-gray-900 px-4 py-2.5 text-xs font-bold text-white shadow-2xl animate-in slide-in-from-bottom-3">
          <Check className="h-4 w-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* LEFT PANE: Authentic Cambridge Paragraph with Real Highlighting */}
      <div className="lg:col-span-7 flex flex-col rounded-3xl border-2 border-gray-200 bg-white p-5 sm:p-7 shadow-sm">
        {/* Paragraph Header & Tools */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="rounded-xl bg-lingo-green/10 px-2.5 py-1 text-xs font-black text-lingo-green-dark">
              {passage.paragraphLabel}
            </span>
            <span className="text-xs font-bold text-gray-500">
              {passage.source.title} (Bk {passage.source.book}, Test {passage.source.test})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-lingo-blue-dark">
              {passage.wordCount} words
            </span>

            {/* Clear highlights if any */}
            {currentHighlights.length > 0 && (
              <button
                onClick={() => clearPassageHighlights(passage.id)}
                className="flex items-center gap-1 rounded-lg bg-gray-100 hover:bg-red-50 hover:text-red-700 px-2 py-1 text-xs font-bold text-gray-600 transition-colors"
                title="Clear all highlights from this paragraph"
              >
                <Trash2 className="h-3 w-3" />
                <span>Clear ({currentHighlights.length})</span>
              </button>
            )}

            {/* Quick Link to Saved Vocabulary Notebook */}
            <Link
              href="/vocabulary"
              className="flex items-center gap-1 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 px-2.5 py-1 text-xs font-bold transition-colors"
              title="Open your personal IELTS Vocabulary Bank"
            >
              <Bookmark className="h-3 w-3 fill-current" />
              <span>Vocab ({savedWords.length})</span>
            </Link>
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-gray-900 mb-2">
          {passage.title}
        </h3>

        {/* Tip / Helper Banner */}
        <div className="mb-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 px-3.5 py-2 flex items-center justify-between gap-2 text-xs text-amber-900">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-amber-600 flex-shrink-0" />
            <span>
              <strong>Tip:</strong> Select any word/phrase with your mouse to <strong>Highlight</strong> or <strong>Save to Vocabulary</strong>.
            </span>
          </div>
        </div>

        {/* Paragraph Text with Live Interactive Highlighting */}
        <div
          ref={paragraphContainerRef}
          onMouseUp={handleMouseUp}
          className="font-serif text-base sm:text-lg leading-relaxed sm:leading-loose text-gray-800 tracking-normal select-text selection:bg-amber-200"
        >
          {renderedParagraphContent}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-400">
          <span>Official Cambridge Academic Reading Format</span>
          <span className="font-semibold text-gray-500">{passage.difficulty}</span>
        </div>
      </div>

      {/* RIGHT PANE: Interactive Question Block */}
      <div className="lg:col-span-5 flex flex-col rounded-3xl border-2 border-gray-200 bg-white p-5 sm:p-7 shadow-sm">
        {/* Question Counter */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-black uppercase tracking-wider text-gray-400">
            Question {activeQuestionIndex + 1} of {passage.questions.length}
          </span>
          <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[11px] font-black text-purple-700">
            {currentQuestion.type === "tfng"
              ? "True / False / Not Given"
              : currentQuestion.type === "matching_heading"
              ? "Matching Headings"
              : "Sentence Completion"}
          </span>
        </div>

        {/* Prompt */}
        <div className="mb-5">
          <p className="text-base sm:text-lg font-bold text-gray-900 leading-snug whitespace-pre-line">
            {currentQuestion.prompt}
          </p>
        </div>

        {/* Dynamic Question Interactive Controls */}
        <div className="flex flex-col gap-3">
          {/* TYPE 1: TRUE / FALSE / NOT GIVEN */}
          {currentQuestion.type === "tfng" && (
            <div className="grid grid-cols-3 gap-2">
              {["TRUE", "FALSE", "NOT GIVEN"].map((val) => {
                const isSelected = selectedAnswer === val;
                return (
                  <button
                    key={val}
                    onClick={() => onSelectAnswer(val)}
                    className={`btn-3d rounded-2xl py-3.5 text-xs sm:text-sm font-black transition-all ${
                      isSelected
                        ? "bg-lingo-green text-white shadow-lingo-green"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
          )}

          {/* TYPE 2: MATCHING HEADINGS / MULTIPLE CHOICE */}
          {currentQuestion.type === "matching_heading" && currentQuestion.options && (
            <div className="flex flex-col gap-2">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                return (
                  <button
                    key={idx}
                    onClick={() => onSelectAnswer(option)}
                    className={`flex items-start gap-3 rounded-2xl border-2 p-3.5 text-left transition-all ${
                      isSelected
                        ? "border-lingo-green bg-lingo-green/10 shadow-sm"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 text-xs font-black ${
                        isSelected
                          ? "border-lingo-green bg-lingo-green text-white"
                          : "border-gray-300 text-gray-400"
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* TYPE 3: SENTENCE COMPLETION */}
          {currentQuestion.type === "sentence_completion" && (
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-wider text-gray-400">
                Type Your Answer From The Paragraph:
              </label>
              <input
                type="text"
                value={selectedAnswer}
                onChange={(e) => onSelectAnswer(e.target.value)}
                placeholder="Type exact words from passage..."
                className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-base font-bold text-gray-900 transition-all focus:border-lingo-green focus:bg-white focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* Proof Sentence Highlighter helper */}
        {status !== "idle" && currentQuestion.proofQuote && (
          <div className="mt-5 rounded-2xl bg-amber-50 border border-amber-200 p-3.5 text-xs text-amber-900">
            <div className="font-black uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5">
              <Highlighter className="h-3.5 w-3.5" />
              <span>Passage Proof Sentence:</span>
            </div>
            <p className="italic font-serif leading-relaxed">
              &quot;{currentQuestion.proofQuote}&quot;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
