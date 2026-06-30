import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen } from "lucide-react";
import LoadingScreen from "../../components/ui/LoadingScreen";
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
      <div className="wotd-card">
        <div className="wotd-card-glow" />
        <div className="wotd-card-line" />

        {loading && (
          <div className="home-loading">
            <LoadingScreen
              fullScreen={false}
              message="Selecting today's word..."
              size={58}
              speed={2.4}
            />
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
                <span>today's featured pick:</span>
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
