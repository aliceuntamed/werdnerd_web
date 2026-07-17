import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import "./GamesPage.css";

type GameStatus = "Playable" | "Coming Soon";
type GameAccent = "cyan" | "fern" | "orchid" | "hot" | "gold" | "chrome";

type GameCabinetItem = {
  id: string;
  name: string;
  baseGame: string;
  description: string;
  route: string;
  status: GameStatus;
  accent: GameAccent;
  featured?: boolean;
};

const games: GameCabinetItem[] = [
  {
    id: "letter-lock",
    name: "Letter-Lock",
    baseGame: "Boggle",
    description: "Chain adjacent letters into odd little words before the board cools.",
    route: ROUTES.BOGGLE,
    status: "Playable",
    accent: "fern",
  },
  {
    id: "daily-glyph",
    name: "The Daily Glyph",
    baseGame: "Wordle",
    description: "A five-letter ritual for guessing the day's hidden specimen.",
    route: ROUTES.WORDLE,
    status: "Coming Soon",
    accent: "cyan",
  },
  {
    id: "grid-hunter",
    name: "Grid Hunter",
    baseGame: "Word Search",
    description: "Trace words through the cabinet's letter lattice.",
    route: ROUTES.WORDSEARCH,
    status: "Coming Soon",
    accent: "chrome",
  },
  {
    id: "oracle-coin",
    name: "Oracle Coin",
    baseGame: "Trivia",
    description: "Flip the question, test the lore, pretend you meant to know that.",
    route: ROUTES.TRIVIA,
    status: "Coming Soon",
    accent: "gold",
  },
  {
    id: "last-glyph",
    name: "The Last Glyph",
    baseGame: "Hangman",
    description: "Rescue the word one letter at a time from theatrical peril.",
    route: ROUTES.HANGMAN,
    status: "Coming Soon",
    accent: "hot",
  },
  {
    id: "knot-theory",
    name: "Knot Theory",
    baseGame: "Brain Teasers",
    description: "Small linguistic puzzles with a suspicious number of trapdoors.",
    route: ROUTES.BRAINTEASERS,
    status: "Coming Soon",
    accent: "orchid",
  },
  {
    id: "lexi-link",
    name: "Lexi-Link",
    baseGame: "Codenames",
    description: "Uncover secret word identities through peculiar synonym logic.",
    route: ROUTES.CODENAMES,
    status: "Coming Soon",
    accent: "cyan",
    featured: true,
  },
];

export default function GamesPage() {
  const fallbackFeatured = games.find((game) => game.featured) ?? games[0];
  const [spotlightId, setSpotlightId] = useState(fallbackFeatured.id);

  const spotlightGame = useMemo(
    () => games.find((game) => game.id === spotlightId) ?? fallbackFeatured,
    [fallbackFeatured, spotlightId],
  );

  function insertCoin() {
    const nextGames = games.filter((game) => game.id !== spotlightId);
    const nextGame = nextGames[Math.floor(Math.random() * nextGames.length)] ?? games[0];
    setSpotlightId(nextGame.id);
  }

  return (
    <main className="games-page">
      <div className="games-page__pinball-glass" aria-hidden="true" />
      <div className="games-page__score-dots" aria-hidden="true" />
      <div className="games-page__reflection games-page__reflection--one" aria-hidden="true" />
      <div className="games-page__reflection games-page__reflection--two" aria-hidden="true" />

      <div className="games-page__content">
        <header className="games-hero" aria-labelledby="games-title">
          <div className="games-hero__copy">
            <p className="games-page__eyebrow">Cabinet 07</p>
            <h1 id="games-title">The Game Cabinet</h1>
            <p>
              A collection of linguistic curiosities and strategic enigmas for
              the restless logophile.
            </p>
          </div>

          <div className="games-hero__controls" aria-label="Game cabinet controls">
            <button type="button" onClick={insertCoin} className="insert-coin-button">
              <span className="insert-coin-button__slot" aria-hidden="true" />
              <span>Insert Coin</span>
            </button>
            <p>
              Spotlighting: <strong>{spotlightGame.name}</strong>
            </p>
          </div>
        </header>

        <section
          className={`featured-game featured-game--${spotlightGame.accent}`}
          aria-labelledby="featured-game-title"
        >
          <div className="featured-game__copy">
            <span className="games-status games-status--playable">
              {spotlightGame.status === "Playable" ? "Ready to play" : "Cabinet preview"}
            </span>
            <p className="games-page__eyebrow">{spotlightGame.baseGame} variant</p>
            <h2 id="featured-game-title">{spotlightGame.name}</h2>
            <p>{spotlightGame.description}</p>
            <Link to={spotlightGame.route} className="featured-game__link">
              Venture In
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="featured-game__artifact" aria-hidden="true">
            <GameArtifact game={spotlightGame} size="large" />
          </div>
        </section>

        <section className="games-grid" aria-label="Game cabinet shelves">
          {games.map((game) => (
            <Link
              key={game.id}
              to={game.route}
              className={`game-card game-card--${game.accent} ${
                game.id === spotlightGame.id ? "is-spotlit" : ""
              }`}
            >
              <div className="game-card__artifact" aria-hidden="true">
                <GameArtifact game={game} />
              </div>
              <div className="game-card__body">
                <span
                  className={`games-status ${
                    game.status === "Playable"
                      ? "games-status--playable"
                      : "games-status--soon"
                  }`}
                >
                  {game.status}
                </span>
                <p>{game.baseGame} variant</p>
                <h2>{game.name}</h2>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

function GameArtifact({
  game,
  size = "default",
}: {
  game: GameCabinetItem;
  size?: "default" | "large";
}) {
  const className = `game-artifact game-artifact--${game.id} ${
    size === "large" ? "game-artifact--large" : ""
  }`;

  if (game.id === "letter-lock") {
    return (
      <div className={className}>
        {["B", "O", "G", "L"].map((letter) => (
          <span key={letter}>{letter}</span>
        ))}
      </div>
    );
  }

  if (game.id === "daily-glyph") {
    return (
      <div className={className}>
        {["W", "E", "R", "D", "?"].map((letter, index) => (
          <span key={`${letter}-${index}`}>{letter}</span>
        ))}
      </div>
    );
  }

  if (game.id === "grid-hunter") {
    return (
      <div className={className}>
        {"WORDSEARCHPUZZLE".split("").slice(0, 16).map((letter, index) => (
          <span key={`${letter}-${index}`}>{letter}</span>
        ))}
      </div>
    );
  }

  if (game.id === "oracle-coin") {
    return (
      <div className={className}>
        <span>?</span>
      </div>
    );
  }

  if (game.id === "last-glyph") {
    return (
      <div className={className}>
        <svg viewBox="0 0 70 110" role="img" aria-label="">
          <line x1="5" y1="105" x2="65" y2="105" />
          <line x1="20" y1="105" x2="20" y2="10" />
          <line x1="20" y1="10" x2="50" y2="10" />
          <line x1="50" y1="10" x2="50" y2="25" />
          <circle cx="50" cy="35" r="10" />
        </svg>
      </div>
    );
  }

  if (game.id === "knot-theory") {
    return (
      <div className={className}>
        <span />
        <span />
      </div>
    );
  }

  return (
    <div className={className}>
      <span>CODE</span>
      <span>NAMES</span>
    </div>
  );
}
