import { useMemo } from "react";
import Loader from "./Loader";

const LOADING_WORDS = [
  "Engineering...",
  "Designing...",
  "Scheming...",
  "Contriving...",
  "Assembling...",
  "Conceiving...",
  "Initiating...",
  "Percolating...",
  "Implementing...",
  "Systematizing...",
  "Actuating...",
  "Substantiating...",
  "Catalyzing...",
  "Synthesizing...",
  "Spawning...",
  "Harmonizing...",
];

interface LoadingScreenProps {
  message?: string;
  color1?: string;
  color2?: string;
  size?: number;
  speed?: number;
  fullScreen?: boolean;
  blurBackground?: boolean; // NEW
}

export default function LoadingScreen({
  message,
  color1 = "#EDADC7",
  color2 = "#82C0CC",
  size = 80,
  speed = 2.5,
  fullScreen = true,
  blurBackground = false,
}: LoadingScreenProps) {
  // Pick a random word once per mount
  const randomWord = useMemo(() => {
    return LOADING_WORDS[Math.floor(Math.random() * LOADING_WORDS.length)];
  }, []);

  const containerClasses = fullScreen
    ? `min-h-screen flex flex-col items-center justify-center ${
        blurBackground ? "backdrop-blur-xl bg-black/20" : "bg-[#0a0a0f]"
      }`
    : "flex flex-col items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      <Loader
        color1={color1}
        color2={color2}
        size={size}
        speed={speed}
        className="mb-4"
      />

      <p className="text-white/60 font-body text-center animate-pulse">
        {message ?? randomWord}
      </p>
    </div>
  );
}
