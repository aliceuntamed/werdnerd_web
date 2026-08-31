import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LoadingScreen from "../../components/ui/LoadingScreen";
import { fetchCuratedWerds } from "../../utils/supabase/queries";
import type { Werd } from "../../types/werd";
import { werdPath } from "../WerdVault/werdSlug";

export default function CuratedPicks() {
  const [werds, setWerds] = useState<Werd[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCuratedWerds()
      .then(setWerds)
      .catch(() => {
        setWerds([]);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="home-section-heading curated-header">
        <p>01 / The collection</p>
        <h2>
          Open the <em>WerdVault.</em>
        </h2>
        <span>Words are small containers. Some hold entire weather systems.</span>
      </div>

      {loading && (
        <div className="home-empty">
          <LoadingScreen
            fullScreen={false}
            message="Loading curated picks..."
            size={58}
            speed={2.4}
          />
        </div>
      )}

      {!loading && werds.length === 0 && (
        <div className="home-empty">
          <p>{error ? "The curated collection could not be loaded." : "No curated Werds yet. Check back soon."}</p>
          <Link to="/vault" className="home-link">
            [Go to] The Vault
            <ArrowRight className="home-icon" />
          </Link>
        </div>
      )}

      {!loading && werds.length > 0 && (
        <>
          <div className="curated-grid">
            {werds.slice(0, 6).map((w, index) => (
              <Link
                key={w.werd_id}
                to={werdPath(w.werd)}
                className="curated-card"
              >
                <div className="curated-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {w.part_of_speech && <small>{w.part_of_speech}</small>}
                </div>

                <h3>{w.werd}</h3>

                {w.pronunciation && <p className="home-pronunciation">/{w.pronunciation}/</p>}

                <p className="curated-definition">{w.definition}</p>

                <span className="curated-card-link">
                  Collect this werd
                  <ArrowRight className="home-icon" />
                </span>
              </Link>
            ))}
          </div>

          <div className="curated-footer">
            <Link to="/vault" className="home-secondary-button">
              Enter the full vault
              <ArrowRight className="home-icon" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
