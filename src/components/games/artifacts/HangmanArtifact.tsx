import { useNavigate } from "react-router-dom";

export function HangmanArtifact() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/games/hangman")}
      className="
        relative cursor-pointer select-none
        transition-transform
        hover:scale-[1.05]
        hover:drop-shadow-[0_0_16px_rgba(155,188,255,0.35)]
      "
    >
      {/* Chrome glyph container */}
      <div
        className="
          w-28 h-36 mx-auto
          flex items-center justify-center
          bg-[#0b0b0d]
          rounded-2xl
          border border-white/20
          bg-gradient-to-br from-white/10 to-white/5
          shadow-[inset_0_2px_3px_rgba(255,255,255,0.25),_0_10px_20px_rgba(0,0,0,0.7)]
        "
      >
        {/* Minimalist gallows symbol */}
        <svg
          width="70"
          height="110"
          viewBox="0 0 70 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-white/70"
          strokeWidth="6"
          strokeLinecap="round"
        >
          {/* Base */}
          <line x1="5" y1="105" x2="65" y2="105" />
          {/* Vertical post */}
          <line x1="20" y1="105" x2="20" y2="10" />
          {/* Top beam */}
          <line x1="20" y1="10" x2="50" y2="10" />
          {/* Rope */}
          <line x1="50" y1="10" x2="50" y2="25" />
          {/* Head */}
          <circle cx="50" cy="35" r="10" />
        </svg>
      </div>

      {/* Engraved title */}
      <div
        className="
          absolute -bottom-6 left-1/2 -translate-x-1/2
          text-white/40 font-heading text-sm tracking-wide
        "
      >
        Hangman
      </div>
    </div>
  );
}
