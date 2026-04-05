import { useNavigate } from "react-router-dom";

export function TriviaArtifact() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/games/trivia")}
      className="
        relative cursor-pointer select-none
        transition-transform
        hover:scale-[1.05]
        hover:drop-shadow-[0_0_16px_rgba(155,188,255,0.35)]
      "
    >
      {/* Chrome coin */}
      <div
        className="
          w-32 h-32 rounded-full flex items-center justify-center mx-auto
          bg-[#0b0b0d]
          border border-white/20
          bg-gradient-to-br from-white/10 to-white/5
          shadow-[inset_0_2px_3px_rgba(255,255,255,0.25),_0_10px_20px_rgba(0,0,0,0.7)]
        "
      >
        {/* Embossed question mark */}
        <span
          className="
            font-heading text-4xl text-white
            drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]
          "
        >
          ?
        </span>
      </div>

      {/* Engraved title */}
      <div
        className="
          absolute -bottom-6 left-1/2 -translate-x-1/2
          text-white/40 font-heading text-sm tracking-wide
        "
      >
        Trivia
      </div>
    </div>
  );
}
