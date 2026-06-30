import { useState } from "react";
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

let loadingWordIndex = 0;

function getNextLoadingWord() {
  const word = LOADING_WORDS[loadingWordIndex % LOADING_WORDS.length];
  loadingWordIndex += 1;
  return word;
}

interface LoadingScreenProps {
  message?: string;
  color1?: string;
  color2?: string;
  size?: number;
  speed?: number;
  fullScreen?: boolean;
  blurBackground?: boolean;
  className?: string;
}

export default function LoadingScreen({
  message,
  color1 = "#EDADC7",
  color2 = "#82C0CC",
  size = 80,
  speed = 2.5,
  fullScreen = true,
  blurBackground = false,
  className = "",
}: LoadingScreenProps) {
  const [fallbackMessage] = useState(getNextLoadingWord);
  const loadingWord = message ?? fallbackMessage;

  const containerClasses = fullScreen
    ? `min-h-screen flex flex-col items-center justify-center ${
        blurBackground ? "backdrop-blur-xl bg-black/20" : "bg-[#0a0a0f]"
      }`
    : "flex flex-col items-center justify-center p-8";

  return (
    <div className={`${containerClasses} ${className}`} role="status" aria-live="polite">
      <Loader
        color1={color1}
        color2={color2}
        size={size}
        speed={speed}
        className="mb-4"
        label={loadingWord}
      />

      <p className="text-white/60 font-body text-center animate-pulse">
        {loadingWord}
      </p>
    </div>
  );
}
