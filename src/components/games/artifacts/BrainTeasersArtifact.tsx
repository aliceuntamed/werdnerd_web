import { useNavigate } from "react-router-dom";

export function BrainTeasersArtifact() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/games/brainteasers")}
      className="
        relative cursor-pointer select-none
        transition-transform
        hover:scale-[1.05]
        hover:drop-shadow-[0_0_16px_rgba(155,188,255,0.35)]
      "
    >
      {/* Interlocking chrome puzzle shapes */}
      <div className="relative w-32 h-32 mx-auto">
        {/* Shape A */}
        <div
          className="
            absolute top-4 left-4
            w-20 h-20 rounded-xl
            bg-[#0b0b0d]
            border border-white/20
            bg-gradient-to-br from-white/10 to-white/5
            shadow-[inset_0_2px_3px_rgba(255,255,255,0.25),_0_10px_20px_rgba(0,0,0,0.7)]
            rotate-12
          "
        />

        {/* Shape B (slightly offset and rotated) */}
        <div
          className="
            absolute bottom-4 right-4
            w-20 h-20 rounded-xl
            bg-[#0b0b0d]
            border border-white/20
            bg-gradient-to-br from-white/10 to-white/5
            shadow-[inset_0_2px_3px_rgba(255,255,255,0.25),_0_10px_20px_rgba(0,0,0,0.7)]
            -rotate-12
          "
        />
      </div>

      {/* Engraved title */}
      <div
        className="
          absolute -bottom-6 left-1/2 -translate-x-1/2
          text-white/40 font-heading text-sm tracking-wide
        "
      >
        Brain Teasers
      </div>
    </div>
  );
}
