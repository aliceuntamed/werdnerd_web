import { useNavigate } from "react-router-dom";

type GameType =
  | "boggle"
  | "wordle"
  | "trivia"
  | "hangman"
  | "wordsearch"
  | "brainteasers"
  | "codenames";

interface GameArtifactProps {
  game: GameType;
}

export function GameArtifact({ game }: GameArtifactProps) {
  const navigate = useNavigate();

  const getGamePath = (gameType: GameType): string => {
    const paths: Record<GameType, string> = {
      boggle: "/games/boggle",
      wordle: "/games/wordle",
      trivia: "/games/trivia",
      hangman: "/games/hangman",
      wordsearch: "/games/wordsearch",
      brainteasers: "/games/brainteasers",
      codenames: "/games/codenames",
    };
    return paths[gameType];
  };

  const getGameTitle = (gameType: GameType): string => {
    const titles: Record<GameType, string> = {
      boggle: "Boggle",
      wordle: "Wordle",
      trivia: "Trivia",
      hangman: "Hangman",
      wordsearch: "Word Search",
      brainteasers: "Brain Teasers",
      codenames: "Codenames",
    };
    return titles[gameType];
  };

  const renderGameContent = (gameType: GameType) => {
    switch (gameType) {
      case "boggle":
        return (
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
        );

      case "wordle": {
        const letters = ["W", "O", "R", "D", "L"];
        return (
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
        );
      }

      case "trivia":
        return (
          <div
            className="
              w-32 h-32 rounded-full flex items-center justify-center mx-auto
              bg-[#0b0b0d]
              border border-white/20
              bg-gradient-to-br from-white/10 to-white/5
              shadow-[inset_0_2px_3px_rgba(255,255,255,0.25),_0_10px_20px_rgba(0,0,0,0.7)]
            "
          >
            <span
              className="
                font-heading text-4xl text-white
                drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]
              "
            >
              ?
            </span>
          </div>
        );

      case "hangman":
        return (
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
              <line x1="5" y1="105" x2="65" y2="105" />
              <line x1="20" y1="105" x2="20" y2="10" />
              <line x1="20" y1="10" x2="50" y2="10" />
              <line x1="50" y1="10" x2="50" y2="25" />
              <circle cx="50" cy="35" r="10" />
            </svg>
          </div>
        );

      case "wordsearch": {
        const grid = [
          ["W", "O", "R", "D"],
          ["S", "E", "A", "R"],
          ["C", "H", "F", "X"],
          ["P", "Z", "L", "E"],
        ];
        const highlight = new Set([
          "W",
          "O",
          "R",
          "D",
          "S",
          "E",
          "A",
          "R",
          "C",
          "H",
        ]);

        return (
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
        );
      }

      case "brainteasers":
        return (
          <div className="relative w-32 h-32 mx-auto">
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
        );

      case "codenames":
        return (
          <div className="relative w-40 h-28 mx-auto">
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
        );

      default:
        return null;
    }
  };

  return (
    <div
      onClick={() => navigate(getGamePath(game))}
      className={`
        relative cursor-pointer select-none
        transition-transform
        hover:scale-[1.04]
        hover:drop-shadow-[0_0_14px_rgba(155,188,255,0.35)]
        ${
          game === "trivia" ||
          game === "hangman" ||
          game === "brainteasers" ||
          game === "codenames"
            ? "hover:scale-[1.05] hover:drop-shadow-[0_0_16px_rgba(155,188,255,0.35)]"
            : ""
        }
      `}
    >
      {renderGameContent(game)}

      <div
        className="
          absolute -bottom-6 left-1/2 -translate-x-1/2
          text-white/40 font-heading text-sm tracking-wide
        "
      >
        {getGameTitle(game)}
      </div>
    </div>
  );
}
