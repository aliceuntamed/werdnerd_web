import { Link } from "react-router-dom";
import { BookOpen, Feather, Sparkles } from "lucide-react";
import { Flipwords } from "../../components/ui/Flipwords";

const proofPoints = ["Rare", "Poetic", "Playable", "Peculiar"];

const sampleEntries = [
  ["sonder", "the sudden awareness of other lives"],
  ["apricity", "the warmth of winter sunlight"],
  ["limerence", "a bright, unruly infatuation"],
];

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-scrim" />
      <div className="home-hero-glow" />

      <div className="home-hero-grid">
        <div className="home-hero-copy">
          <h1 className="home-hero-title">
            <span className="chrome-gradient-text">Words</span>
            <span>worth</span>
            <span className="home-flip-line">
              <Flipwords
                werds={[
                  "hoarding",
                  "whispering",
                  "chasing",
                  "debating",
                  "savoring",
                ]}
                duration={3000}
                className="home-flip-word"
              />
            </span>
          </h1>

          <p className="home-hero-subtitle">
            A living vault of rare, poetic, and peculiar vocabulary for people
            who know a good word can ruin a perfectly productive afternoon.
          </p>

          <div className="home-hero-actions">
            <Link to="/vault" className="home-primary-button">
              <BookOpen className="home-icon" />
              Explore the Vault
            </Link>

            <Link to="/submit" className="home-secondary-button">
              <Feather className="home-icon" />
              Submit a Word
            </Link>
          </div>

          <div className="home-proof-row">
            {proofPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>

        <aside className="home-field-notes">
          <div className="home-field-glow" />
          <div className="home-field-panel">
            <div className="home-field-header">
              <div>
                <p className="home-field-title">Field Notes</p>
                <p className="home-field-subtitle">fresh from the vault</p>
              </div>
              <div className="home-field-icon">
                <Sparkles className="home-icon" />
              </div>
            </div>

            <div className="home-field-list">
              {sampleEntries.map(([word, note]) => (
                <div key={word} className="home-field-entry">
                  <div>
                    <p>{word}</p>
                    <small>{note}</small>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/vault" className="home-field-button">
              Browse all entries
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
