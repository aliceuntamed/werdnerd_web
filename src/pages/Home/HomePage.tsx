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

const fallbackTags = [
  "poetic",
  "strange",
  "weather",
  "old-world",
  "sound",
  "delight",
  "borrowed",
  "rare",
];

function HomeBand({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`home-band ${className}`}>
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

    const rankedTags = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 14)
      .map(([tag]) => tag);

    return rankedTags.length > 0 ? rankedTags : fallbackTags;
  }, [werds]);

  function handleTagSelect(tag: string) {
    navigate(`/vault?tag=${encodeURIComponent(tag)}`);
  }

  return (
    <main className="home-main">
      <Hero />

      <div className="home-parallax-world">
        <div className="home-parallax-backdrop" aria-hidden="true" />

        <section className="home-feature-shelf" aria-labelledby="word-tools-title">
          <div className="home-container">
            <div className="home-section-heading home-section-heading--compact">
              <p>00 / The daily specimen</p>
              <h2 id="word-tools-title">
                Start with a <em>strange little word.</em>
              </h2>
              <span>One featured find, then one excellent excuse to wander.</span>
            </div>
            <div className="home-feature-grid">
            <WOTD />
            <SpinTheVault />
            </div>
          </div>
        </section>

        <HomeBand className="home-band-mid" >
          <CuratedPicks />
        </HomeBand>

        <HomeBand className="home-band-tags">
          <QuickBrowse tags={popularTags} onSelect={handleTagSelect} />
        </HomeBand>

        <HomeBand className="home-band-soft">
          <ContributeCTA />
        </HomeBand>
      </div>
    </main>
  );
}
