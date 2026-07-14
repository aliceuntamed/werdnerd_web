import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Shuffle } from "lucide-react";
import LoadingScreen from "../../components/ui/LoadingScreen";
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
        <p className="home-eyebrow">02 / Chance encounter</p>
        <h2 className="home-section-title">Spin the Vault.</h2>
        <p className="home-section-copy spin-copy">
          Let the fates decide your next literary obsession.
        </p>
      </div>

      <div className="spin-card">
        <div className="spin-card-line" />
        <div className="spin-card-glow" />

        <div className="spin-stage">
          {!spun && !loading && (
            <div className="spin-empty">
              <small>Press spin to pull a random word from the vault.</small>
            </div>
          )}

          {loading && (
            <div className="home-loading">
              <LoadingScreen
                fullScreen={false}
                message="Spinning..."
                size={58}
                speed={2.2}
              />
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
                See full werd
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
