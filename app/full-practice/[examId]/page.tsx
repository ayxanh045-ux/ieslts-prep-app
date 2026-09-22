"use client";

import { use } from "react";
import Link from "next/link";
import {
  SAMPLE_FULL_READING_EXAM,
  SAMPLE_FULL_LISTENING_EXAM,
  SAMPLE_FULL_WRITING_EXAM,
} from "@/lib/ielts-curriculum/cambridge-archive";
import { FullReadingSimulator } from "@/components/full-practice/FullReadingSimulator";
import { FullListeningSimulator } from "@/components/full-practice/FullListeningSimulator";
import { FullWritingSimulator } from "@/components/full-practice/FullWritingSimulator";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ examId: string }>;
}

export default function FullExamRunnerPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const examId = resolvedParams.examId;

  const isReading = examId.startsWith("reading-");
  const isListening = examId.startsWith("listening-");
  const isWriting = examId.startsWith("writing-");

  return (
    <div className="min-h-screen bg-[#F7F9FA] px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Back Link */}
        <div className="mb-4">
          <Link
            href="/full-practice"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Cambridge 1–21 Mock Hub</span>
          </Link>
        </div>

        {/* Dynamic Simulator Routing */}
        {isReading && (
          <FullReadingSimulator
            exam={SAMPLE_FULL_READING_EXAM}
            onExit={() => window.location.assign("/full-practice")}
          />
        )}

        {isListening && (
          <FullListeningSimulator
            exam={SAMPLE_FULL_LISTENING_EXAM}
            onExit={() => window.location.assign("/full-practice")}
          />
        )}

        {isWriting && (
          <FullWritingSimulator
            exam={SAMPLE_FULL_WRITING_EXAM}
            onExit={() => window.location.assign("/full-practice")}
          />
        )}

        {!isReading && !isListening && !isWriting && (
          <div className="rounded-3xl border-2 border-gray-200 bg-white p-8 text-center shadow-sm">
            <h3 className="text-xl font-black text-gray-900">Exam Test Not Found</h3>
            <p className="text-xs text-gray-500 mt-1">Please select an exam from the Cambridge hub.</p>
            <Link
              href="/full-practice"
              className="btn-3d mt-4 inline-block rounded-xl bg-lingo-blue px-6 py-2.5 text-xs font-black uppercase text-white shadow-lingo-blue"
            >
              Back to Hub
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
