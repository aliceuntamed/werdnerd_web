import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fetchCuratedWerds } from "../../utils/supabase/queries";
import type { Werd } from "../../types/werd";

export default function CuratedPicks() {
  const [werds, setWerds] = useState<Werd[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCuratedWerds()
      .then(setWerds)
      .catch(() => setWerds([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="curated-header">
        <div>
          <p className="home-eyebrow">Curated Picks</p>
          <h2 className="home-section-title">
            Six little trapdoors into the vault.
          </h2>
        </div>
        <p className="home-section-copy curated-copy">
          Hand-picked by the werdnerd herself.
        </p>
      </div>

      {loading && (
        <div className="home-empty">Loading curated picks...</div>
      )}

      {!loading && werds.length === 0 && (
        <div className="home-empty">
          <p>No curated words yet. Check back soon.</p>
          <Link to="/vault" className="home-link">
            Browse the full vault
            <ArrowRight className="home-icon" />
          </Link>
        </div>
      )}

      {!loading && werds.length > 0 && (
        <>
          <div className="curated-grid">
            {werds.slice(0, 6).map((w) => (
              <Link
                key={w.werd_id}
                to={`/vault?search=${encodeURIComponent(w.werd)}`}
                className="curated-card"
              >
                <div className="curated-card-top">
                  {w.part_of_speech && <small>{w.part_of_speech}</small>}
                </div>

                <h3>{w.werd}</h3>

                {w.pronunciation && <p className="home-pronunciation">/{w.pronunciation}/</p>}

                <p className="curated-definition">{w.definition}</p>

                <span className="curated-card-link">
                  More like this
                  <ArrowRight className="home-icon" />
                </span>
              </Link>
            ))}
          </div>

          <div className="curated-footer">
            <Link to="/vault" className="home-secondary-button">
              Browse the full vault
              <ArrowRight className="home-icon" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
