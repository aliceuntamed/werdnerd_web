import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Shuffle } from "lucide-react";
import { getRandomWerd } from "../../utils/supabase/queries";
import type { Werd } from "../../types/werd";

export default function SpinTheVault() {
  const [werd, setWerd] = useState<Werd | null>(null);
  const [loading, setLoading] = useState(false);
  const [spun, setSpun] = useState(false);

  async function spin() {
    setLoading(true);
    setSpun(true);
    try {
      const random = await getRandomWerd();
      setWerd(random);
    } catch {
      setWerd(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="spin-layout">
      <div>
        <p className="home-eyebrow">Spin the Vault</p>
        <h2 className="home-section-title">
          Let chance pick the word your brain pretends it always knew.
        </h2>
        <p className="home-section-copy spin-copy">
          One click, one surprise entry. Excellent for procrastination, writing
          prompts, and mildly insufferable dinner conversation.
        </p>
      </div>

      <div className="spin-card">
        <div className="spin-card-line" />
        <div className="spin-card-glow" />

        <div className="spin-stage">
          {!spun && !loading && (
            <div className="spin-empty">
              <p>Ready when your curiosity is.</p>
              <small>Press spin to pull a random word from the vault.</small>
            </div>
          )}

          {loading && (
            <div className="home-loading">
              <div className="home-spinner" />
              <p>Spinning...</p>
            </div>
          )}

          {!loading && werd && (
            <div className="spin-result fade-in">
              <h3 className="chrome-gradient-text">{werd.werd}</h3>

              {werd.pronunciation && (
                <p className="home-pronunciation">/{werd.pronunciation}/</p>
              )}

              {werd.part_of_speech && (
                <span className="home-chip">{werd.part_of_speech}</span>
              )}

              <p className="spin-definition">{werd.definition}</p>

              <Link
                to={`/vault?search=${encodeURIComponent(werd.werd)}`}
                className="home-link"
              >
                See full entry
                <ArrowUpRight className="home-icon" />
              </Link>
            </div>
          )}
        </div>

        <button onClick={spin} disabled={loading} className="home-primary-button spin-button">
          <Shuffle className={`home-icon ${loading ? "spin-icon-active" : ""}`} />
          {loading ? "Spinning..." : spun ? "Spin Again" : "Spin the Vault"}
        </button>
      </div>
    </div>
  );
}
