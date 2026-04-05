import { useNavigate } from "react-router-dom";

export function WordSearchArtifact() {
  const navigate = useNavigate();

  // A tiny 4x4 sample grid for the artifact
  const grid = [
    ["W", "O", "R", "D"],
    ["S", "E", "A", "R"],
    ["C", "H", "F", "X"],
    ["P", "Z", "L", "E"],
  ];

  // Letters to subtly highlight (to give it a puzzle vibe)
  const highlight = new Set(["W", "O", "R", "D", "S", "E", "A", "R", "C", "H"]);

  return (
    <div
      onClick={() => navigate("/games/wordsearch")}
      className="
        relative cursor-pointer select-none
        transition-transform
        hover:scale-[1.04]
        hover:drop-shadow-[0_0_14px_rgba(155,188,255,0.35)]
      "
    >
      {/* Chrome puzzle plate */}
      <div
        className="
          p-4 rounded-2xl
          bg-[#0b0b0d]
          border border-white/20
          bg-gradient-to-br from-white/10 to-white/5
          shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),_0_8px_18px_rgba(0,0,0,0.7)]
        "
      >
        <div className="grid grid-cols-4 gap-2">
          {grid.flat().map((letter, i) => (
            <div
              key={i}
              className={`
                w-10 h-10 rounded-lg flex items-center justify-center
                font-heading text-lg
                border border-white/10
                ${highlight.has(letter) ? "text-white" : "text-white/30"}
                ${
                  highlight.has(letter)
                    ? "bg-white/10 shadow-[0_0_6px_rgba(155,188,255,0.4)]"
                    : "bg-transparent"
                }
              `}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>

      {/* Engraved title */}
      <div
        className="
          absolute -bottom-6 left-1/2 -translate-x-1/2
          text-white/40 font-heading text-sm tracking-wide
        "
      >
        Word Search
      </div>
    </div>
  );
}
