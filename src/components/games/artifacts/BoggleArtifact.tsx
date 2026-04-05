import { useNavigate } from "react-router-dom";

export function BoggleArtifact() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/games/boggle")}
      className="
        relative cursor-pointer select-none
        transition-transform
        hover:scale-[1.04]
        hover:drop-shadow-[0_0_14px_rgba(155,188,255,0.35)]
      "
    >
      {/* 2x2 chrome tile cluster */}
      <div className="grid grid-cols-2 gap-2">
        {[..."BOGL"].map((letter, i) => (
          <div
            key={i}
            className="
              w-16 h-16 rounded-xl flex items-center justify-center
              font-heading text-2xl text-white
              bg-[#0b0b0d]
              border border-white/20
              bg-gradient-to-br from-white/10 to-white/5
              shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),_0_6px_14px_rgba(0,0,0,0.7)]
              transition
            "
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
        Boggle
      </div>
    </div>
  );
}
