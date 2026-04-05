import { useNavigate } from "react-router-dom";

export function CodenamesArtifact() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/games/codenames")}
      className="
        relative cursor-pointer select-none
        transition-transform
        hover:scale-[1.05]
        hover:drop-shadow-[0_0_16px_rgba(155,188,255,0.35)]
      "
    >
      {/* Overlapping chrome tiles */}
      <div className="relative w-40 h-28 mx-auto">
        {/* Back tile (blue‑tinted chrome) */}
        <div
          className="
            absolute top-4 left-4
            w-32 h-20 rounded-xl
            flex items-center justify-center
            font-heading text-lg text-white/80
            border border-white/20
            bg-gradient-to-br from-[#9bbcff33] to-[#4f6fbf22]
            shadow-[inset_0_2px_3px_rgba(255,255,255,0.25),_0_10px_20px_rgba(0,0,0,0.7)]
            backdrop-blur-sm
          "
        >
          CODE
        </div>

        {/* Front tile (red‑tinted chrome) */}
        <div
          className="
            absolute bottom-4 right-4
            w-32 h-20 rounded-xl
            flex items-center justify-center
            font-heading text-lg text-white
            border border-white/20
            bg-gradient-to-br from-[#ff9bbf33] to-[#bf4f6f22]
            shadow-[inset_0_2px_3px_rgba(255,255,255,0.25),_0_10px_20px_rgba(0,0,0,0.7)]
            backdrop-blur-sm
          "
        >
          NAMES
        </div>
      </div>

      {/* Engraved title */}
      <div
        className="
          absolute -bottom-6 left-1/2 -translate-x-1/2
          text-white/40 font-heading text-sm tracking-wide
        "
      >
        Codenames
      </div>
    </div>
  );
}
