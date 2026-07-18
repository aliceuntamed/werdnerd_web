import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Volume2 } from "lucide-react";
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
              message="Selecting today's werd..."
              size={58}
              speed={2.4}
            />
          </div>
        )}

        {!loading && !werd && (
          <div className="wotd-empty">
            <div className="wotd-label">
              <span>WOTD</span>
              <span>№ 001</span>
            </div>
            <h3 className="wotd-werd">WOTD</h3>
            <p>No werd today. The vault is being mysterious.</p>
          </div>
        )}

        {!loading && werd && (
          <article className="wotd-entry">
            <div>
              <div className="wotd-label">
                <span>WOTD</span>
                <span>№ 001</span>
              </div>
              <span className="wotd-speak" aria-hidden="true">
                <Volume2 className="home-icon" />
              </span>

              <h3 className="wotd-werd chrome-gradient-text">{werd.werd}</h3>

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
              Next specimen
              <ArrowUpRight className="home-icon" />
            </Link>
          </article>
        )}
      </div>
    </div>
  );
}
