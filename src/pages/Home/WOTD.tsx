import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { getWOTD } from "../../utils/supabase/queries";
import type { Werd } from "../../types/werd";

export default function WOTD() {
  const [werd, setWerd] = useState<Werd | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWOTD()
      .then(setWerd)
      .catch(() => setWerd(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="wotd-layout">
      <div className="wotd-copy">
        <div>
          <p className="home-eyebrow">Word of the Day</p>
          <h2 className="home-section-title">
            One word. Enough texture to make a sentence stop and stare.
          </h2>
        </div>
        <p className="home-section-copy wotd-note">
          Daily vocabulary should feel like finding a strange key in your coat
          pocket. Practical? Maybe. Memorable? Absolutely.
        </p>
      </div>

      <div className="wotd-card">
        <div className="wotd-card-glow" />
        <div className="wotd-card-line" />

        {loading && (
          <div className="home-loading">
            <div className="home-spinner" />
            <p>Selecting today's word...</p>
          </div>
        )}

        {!loading && !werd && (
          <div className="home-loading">
            <p>No word today. The vault is being mysterious.</p>
          </div>
        )}

        {!loading && werd && (
          <article className="wotd-entry">
            <div>
              <div className="wotd-label">
                <BookOpen className="home-icon" />
                <span>Today's pull from the archive</span>
              </div>

              <h3 className="wotd-word chrome-gradient-text">{werd.werd}</h3>

              <div className="home-meta-row">
                {werd.pronunciation && (
                  <p className="home-pronunciation">/{werd.pronunciation}/</p>
                )}

                {werd.part_of_speech && (
                  <span className="home-chip">{werd.part_of_speech}</span>
                )}
              </div>

              <p className="wotd-definition">{werd.definition}</p>
            </div>

            <Link
              to={`/vault?search=${encodeURIComponent(werd.werd)}`}
              className="home-link"
            >
              See full entry
              <ArrowUpRight className="home-icon" />
            </Link>
          </article>
        )}
      </div>
    </div>
  );
}
