import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import WOTD from "./WOTD";
import CuratedPicks from "./CuratedPicks";
import SpinTheVault from "./SpinTheVault";
import ContributeCTA from "./ContributeCTA";
import QuickBrowse from "./QuickBrowse";
import { fetchWerds } from "../../utils/supabase/queries";
import type { Werd } from "../../types/werd";
import "./home.css";

function AmbientDivider() {
  return (
    <div className="home-divider-wrap" aria-hidden="true">
      <div className="home-divider">
        <span />
      </div>
    </div>
  );
}

function HomeBand({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`home-band ${className}`}>
      <div className="home-band-line" />
      <div className="home-container">{children}</div>
    </section>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [werds, setWerds] = useState<Werd[]>([]);

  useEffect(() => {
    fetchWerds()
      .then(setWerds)
      .catch(() => setWerds([]));
  }, []);

  const popularTags = useMemo(() => {
    const counts = new Map<string, number>();

    werds.forEach((werd) => {
      werd.tags.forEach((tag) => {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      });
    });

    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 14)
      .map(([tag]) => tag);
  }, [werds]);

  function handleTagSelect(tag: string) {
    navigate(`/vault?tag=${encodeURIComponent(tag)}`);
  }

  return (
    <main className="home-main">
      <div className="home-atmosphere" aria-hidden="true">
        <span className="home-atmosphere__beam home-atmosphere__beam-one" />
        <span className="home-atmosphere__beam home-atmosphere__beam-two" />
        <span className="home-atmosphere__grain" />
      </div>

      <div className="home-scroll-frame">
        <Hero />

        <AmbientDivider />

        <section className="home-feature-shelf" aria-label="Featured word tools">
          <div className="home-container home-feature-grid">
            <WOTD />
            <SpinTheVault />
          </div>
        </section>

        <HomeBand className="home-band-mid">
          <CuratedPicks />
        </HomeBand>

        <AmbientDivider />

        {popularTags.length > 0 && (
          <HomeBand className="home-band-tags">
            <QuickBrowse tags={popularTags} onSelect={handleTagSelect} />
          </HomeBand>
        )}

        <AmbientDivider />

        <HomeBand className="home-band-soft">
          <ContributeCTA />
        </HomeBand>
      </div>
    </main>
  );
}
