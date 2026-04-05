import { BoggleArtifact } from "../../components/games/artifacts/BoggleArtifact";
import { WordleArtifact } from "../../components/games/artifacts/WordleArtifact";
import { WordSearchArtifact } from "../../components/games/artifacts/WordSearchArtifact";
import { TriviaArtifact } from "../../components/games/artifacts/TriviaArtifact";
import { HangmanArtifact } from "../../components/games/artifacts/HangmanArtifact";
import { BrainTeasersArtifact } from "../../components/games/artifacts/BrainTeasersArtifact";
import { CodenamesArtifact } from "../../components/games/artifacts/CodenamesArtifact";

export default function GamesPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 relative">
      {/* Cinematic radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,200,255,0.10),_rgba(10,10,10,0.95))]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="
              font-heading text-5xl text-white mb-4
              drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
            "
            style={{
              background: "linear-gradient(135deg, #e5e7eb, #9bbcff, #c084fc)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Games
          </h1>

          {/* Chrome accent bar */}
          <div className="w-24 h-[2px] mx-auto bg-white/30 rounded-full" />
        </div>

        {/* Puzzle Gallery */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-14
            place-items-center
          "
        >
          <BoggleArtifact />
          <WordleArtifact />
          <WordSearchArtifact />
          <TriviaArtifact />
          <HangmanArtifact />
          <BrainTeasersArtifact />
          <CodenamesArtifact />
        </div>
      </div>
    </div>
  );
}
