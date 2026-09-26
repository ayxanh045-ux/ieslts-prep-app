import { NextRequest, NextResponse } from "next/server";

function chunkText(text: string, maxLength = 180): string[] {
  // Strip markdown, asterisks, brackets, backticks
  const clean = text
    .replace(/[*_#`[\]()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!clean) return [];
  if (clean.length <= maxLength) return [clean];

  // Split on sentence boundaries (.!?;:) first
  const sentences = clean.split(/(?<=[.!?;:])\s+/);
  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    if ((current + " " + sentence).trim().length <= maxLength) {
      current = (current + " " + sentence).trim();
    } else {
      if (current) chunks.push(current);
      if (sentence.length > maxLength) {
        const words = sentence.split(/\s+/);
        let sub = "";
        for (const w of words) {
          if ((sub + " " + w).trim().length <= maxLength) {
            sub = (sub + " " + w).trim();
          } else {
            if (sub) chunks.push(sub);
            sub = w;
          }
        }
        current = sub;
      } else {
        current = sentence;
      }
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "";
  let lang = searchParams.get("lang") || "en-GB";

  // Normalize language tags
  if (lang.toLowerCase().includes("au")) lang = "en-AU";
  else if (lang.toLowerCase().includes("us")) lang = "en-US";
  else lang = "en-GB";

  if (!text.trim()) {
    return new NextResponse("Text required", { status: 400 });
  }

  const chunks = chunkText(text, 180);
  if (chunks.length === 0) {
    return new NextResponse("Empty text after sanitization", { status: 400 });
  }

  try {
    const buffers: Buffer[] = [];

    for (const chunk of chunks) {
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encodeURIComponent(
        chunk
      )}`;

      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Referer: "https://translate.google.com/",
        },
      });

      if (!res.ok) {
        throw new Error(`Google TTS responded with status ${res.status}`);
      }

      const arrayBuffer = await res.arrayBuffer();
      buffers.push(Buffer.from(arrayBuffer));
    }

    const combined = Buffer.concat(buffers);

    return new NextResponse(combined, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("TTS Route Error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to generate speech audio" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
