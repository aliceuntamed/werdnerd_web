import { useNavigate } from "react-router-dom";

export function WordleArtifact() {
  const navigate = useNavigate();

  const letters = ["W", "O", "R", "D", "L"];

  return (
    <div
      onClick={() => navigate("/games/wordle")}
      className="
        relative cursor-pointer select-none
        transition-transform
        hover:scale-[1.04]
        hover:drop-shadow-[0_0_14px_rgba(155,188,255,0.35)]
      "
    >
      {/* 5-tile chrome strip */}
      <div className="flex gap-2">
        {letters.map((letter, i) => (
          <div
            key={i}
            className={`
              w-14 h-14 rounded-xl flex items-center justify-center
              font-heading text-xl text-white
              bg-[#0b0b0d]
              border border-white/20
              bg-gradient-to-br from-white/10 to-white/5
              shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),_0_6px_14px_rgba(0,0,0,0.7)]
              transition
              ${i === 2 ? "scale-[1.08]" : ""}
            `}
          >
            {letter}
          </div>
        ))}
      </div>

      {/* Engraved title */}
      <div
        className="
          absolute -bottom-6 left-1/2 -translate-x-1/2
          text-white/40 font-heading text-sm tracking-wide
        "
      >
        Wordle
      </div>
    </div>
  );
}
