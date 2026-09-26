// Web Audio API Sound Synthesizer & Hybrid High-Fidelity Human TTS Engine
// Uses studio-grade realistic human voice audio with intelligent Web Speech API fallback

class SoundEngine {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;
  private currentAudio: HTMLAudioElement | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private voicesLoaded: boolean = false;

  constructor() {
    this.initVoices();
  }

  private initVoices(): void {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const load = () => {
      this.voices = window.speechSynthesis.getVoices();
      if (this.voices.length > 0) {
        this.voicesLoaded = true;
      }
    };

    load();
    if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
      window.speechSynthesis.onvoiceschanged = load;
    }
  }

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
    if (!enabled) {
      this.stopSpeaking();
    }
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  /** Play cheerful Duolingo-style rising chime on correct answer */
  public playCorrect(): void {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + index * 0.08);

      gain.gain.setValueAtTime(0, now + index * 0.08);
      gain.gain.linearRampToValueAtTime(0.2, now + index * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.25);
    });
  }

  /** Play soft low thud on incorrect answer (supportive, not punishing) */
  public playIncorrect(): void {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  /** Play triumphant fanfare when micro-lesson is completed */
  public playFanfare(): void {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const melody = [
      { f: 523.25, t: 0, d: 0.12 }, // C5
      { f: 659.25, t: 0.12, d: 0.12 }, // E5
      { f: 783.99, t: 0.24, d: 0.12 }, // G5
      { f: 1046.5, t: 0.36, d: 0.35 }, // C6 (hold)
      { f: 880.0, t: 0.5, d: 0.15 }, // A5
      { f: 1046.5, t: 0.65, d: 0.5 }, // C6
    ];

    melody.forEach(({ f, t, d }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(f, now + t);

      gain.gain.setValueAtTime(0, now + t);
      gain.gain.linearRampToValueAtTime(0.25, now + t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + t + d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + t);
      osc.stop(now + t + d);
    });
  }

  /** Play a short pop when clicking tiles */
  public playTileClick(): void {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  /**
   * Preload human audio into browser cache for zero-latency instant playback
   */
  public preload(
    text: string,
    accent: "British" | "Australian" | "American" | "North American" = "British"
  ): void {
    if (typeof window === "undefined" || !text.trim()) return;
    const cleanText = text
      .replace(/[*_#`[\]()]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    let lang = "en-GB";
    if (accent === "Australian") lang = "en-AU";
    if (accent === "American" || accent === "North American") lang = "en-US";

    const audioUrl = `/api/tts?text=${encodeURIComponent(cleanText)}&lang=${lang}`;
    const preloader = new Audio();
    preloader.preload = "auto";
    preloader.src = audioUrl;
  }

  /**
   * Speak text using realistic studio human voice audio with natural intonation.
   * If network is unavailable, falls back to the highest quality system neural voice.
   */
  public speak(
    text: string,
    accent: "British" | "Australian" | "American" | "North American" = "British",
    onEnd?: () => void
  ): void {
    if (typeof window === "undefined") {
      onEnd?.();
      return;
    }

    // Always stop previous audio / speech
    this.stopSpeaking();

    if (!this.soundEnabled || !text.trim()) {
      onEnd?.();
      return;
    }

    const cleanText = text
      .replace(/[*_#`[\]()]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    let lang = "en-GB";
    if (accent === "Australian") lang = "en-AU";
    if (accent === "American" || accent === "North American") lang = "en-US";

    const audioUrl = `/api/tts?text=${encodeURIComponent(cleanText)}&lang=${lang}`;

    const audio = new Audio(audioUrl);
    this.currentAudio = audio;

    let finished = false;
    const handleFinish = () => {
      if (!finished) {
        finished = true;
        if (this.currentAudio === audio) {
          this.currentAudio = null;
        }
        onEnd?.();
      }
    };

    audio.onended = handleFinish;

    // In case network fails or blocked, fallback gracefully to Enhanced Web Speech API
    audio.onerror = () => {
      if (this.currentAudio === audio) {
        this.speakWithWebSpeech(cleanText, accent, handleFinish);
      }
    };

    audio.play().catch(() => {
      if (this.currentAudio === audio) {
        this.speakWithWebSpeech(cleanText, accent, handleFinish);
      }
    });
  }

  /**
   * Fallback Web Speech Engine with priority ranking for human/neural voices
   */
  private speakWithWebSpeech(
    text: string,
    accent: "British" | "Australian" | "American" | "North American",
    onEnd?: () => void
  ): void {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      onEnd?.();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    // 0.90 provides clear, deliberate articulation for vocabulary learners
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    let targetLang = "en-GB";
    if (accent === "Australian") targetLang = "en-AU";
    if (accent === "American" || accent === "North American") targetLang = "en-US";

    const availableVoices =
      this.voices.length > 0 ? this.voices : window.speechSynthesis.getVoices();

    const bestVoice = this.pickBestVoice(availableVoices, targetLang, accent);

    if (bestVoice) {
      utterance.voice = bestVoice;
    } else {
      utterance.lang = targetLang;
    }

    utterance.onend = () => onEnd?.();
    utterance.onerror = () => onEnd?.();

    window.speechSynthesis.speak(utterance);
  }

  /**
   * Selects highest-scoring natural / neural voice instead of legacy robotic voices
   */
  private pickBestVoice(
    voices: SpeechSynthesisVoice[],
    targetLang: string,
    accent: string
  ): SpeechSynthesisVoice | null {
    if (!voices || voices.length === 0) return null;

    let topVoice: SpeechSynthesisVoice | null = null;
    let maxScore = -999;

    for (const v of voices) {
      let score = 0;
      const vLang = v.lang.toLowerCase().replace("_", "-");
      const vName = v.name.toLowerCase();
      const target = targetLang.toLowerCase();

      // Language exact match
      if (vLang === target) score += 60;
      else if (vLang.startsWith(target.split("-")[0])) score += 25;

      // High-grade natural / neural voices
      if (vName.includes("natural")) score += 45;
      if (vName.includes("neural")) score += 45;
      if (vName.includes("enhanced")) score += 40;
      if (vName.includes("premium")) score += 40;
      if (vName.includes("online")) score += 30;
      if (vName.includes("google")) score += 35;

      // British preferred native speakers
      if (accent === "British") {
        if (vName.includes("sonia") || vName.includes("ryan") || vName.includes("libby"))
          score += 35;
        if (
          vName.includes("daniel") ||
          vName.includes("oliver") ||
          vName.includes("serena") ||
          vName.includes("kate") ||
          vName.includes("martha")
        )
          score += 30;
        if (vName.includes("uk") || vName.includes("british")) score += 20;
      }

      // Penalize legacy robotic / compact voices
      if (vName.includes("compact")) score -= 25;
      if (vName.includes("espeak")) score -= 40;

      if (score > maxScore) {
        maxScore = score;
        topVoice = v;
      }
    }

    return topVoice;
  }

  public stopSpeaking(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const soundEngine = new SoundEngine();
