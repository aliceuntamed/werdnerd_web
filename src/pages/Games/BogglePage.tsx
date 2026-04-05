import { useState } from "react";
import { BoggleEngine } from "../../games/boggle/BoggleEngine";
import { BoggleBoard } from "../../components/games/boggle/BoggleBoard";

export default function BogglePage() {
  const [engine] = useState(() => new BoggleEngine());
  const [selected, setSelected] = useState<number[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  function handleTileClick(index: number) {
    setSelected((prev) => [...prev, index]);
  }

  function submitWord() {
    const flat = engine.board.flat();
    const word = selected.map((i) => flat[i]).join("");

    if (engine.validate(word) && !foundWords.includes(word)) {
      setFoundWords([...foundWords, word]);
      setScore(score + engine.score(word));
    }

    setSelected([]);
  }

  function newBoard() {
    engine.resetBoard();
    setSelected([]);
    setFoundWords([]);
    setScore(0);
  }

  return (
    <div className="min-h-screen pt-20 pb-32 px-6 relative">
      {/* Cinematic background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,200,255,0.12),_rgba(10,10,10,0.95))]" />

      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Score pill */}
        <div
          className="
            px-6 py-2 rounded-full font-heading text-lg text-white
            border border-white/20 shadow-sm
          "
          style={{
            background: "linear-gradient(135deg, #e5e7eb, #9bbcff, #c084fc)",
          }}
        >
          Score: {score}
        </div>

        {/* Floating chrome board */}
        <BoggleBoard
          board={engine.board}
          selected={selected}
          onSelect={handleTileClick}
        />

        {/* Submit + New Board buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={submitWord}
            className="
              px-5 py-2 rounded-lg font-heading text-white
              border border-white/20
            "
            style={{
              background: "linear-gradient(135deg, #e5e7eb, #9bbcff, #c084fc)",
            }}
          >
            Submit Word
          </button>

          <button
            onClick={newBoard}
            className="
              px-5 py-2 rounded-lg font-heading text-white
              border border-white/20
            "
            style={{
              background: "linear-gradient(135deg, #e5e7eb, #9bbcff, #c084fc)",
            }}
          >
            New Board
          </button>
        </div>

        {/* Found words list */}
        <div className="mt-4 text-white/70 font-body text-sm">
          {foundWords.length > 0 && (
            <div className="text-center">
              <p className="mb-2">Found Words:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {foundWords.map((w) => (
                  <span
                    key={w}
                    className="
                      px-3 py-1 rounded-full text-xs
                      bg-white/10 border border-white/20
                      font-heading text-white
                    "
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
