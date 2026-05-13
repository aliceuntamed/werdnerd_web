import type React from "react";
import VideoBackground from "../../components/ui/VideoBackground";
import Hero from "./Hero";
import WOTD from "./WOTD";
import CuratedPicks from "./CuratedPicks";
import SpinTheVault from "./SpinTheVault";
import ContributeCTA from "./ContributeCTA";
import "./home.css";

function AmbientDivider() {
  return (
    <div className="home-divider-wrap">
      <div className="home-divider" />
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

function IntroRail() {
  const items = [
    ["Curated", "Uncommon words with human taste, not dictionary dust."],
    ["Playable", "Spin, browse, and test your vocabulary by instinct."],
    ["Community", "Submit the linguistic oddities that haunt your notes app."],
  ];

  return (
    <section className="home-intro-rail">
      <div className="home-intro-grid">
        {items.map(([title, body]) => (
          <div
            key={title}
            className="home-intro-item"
          >
            <p className="home-intro-title">{title}</p>
            <p className="home-intro-copy">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <VideoBackground src="/homepage-vidbg.mp4" opacity={0.5} />

      <main
        className="home-main"
        style={{ zIndex: 10 }}
      >
        <Hero />
        <IntroRail />

        <AmbientDivider />

        <HomeBand className="home-band-soft">
          <WOTD />
        </HomeBand>

        <AmbientDivider />

        <HomeBand className="home-band-mid">
          <CuratedPicks />
        </HomeBand>

        <AmbientDivider />

        <HomeBand className="home-band-deep">
          <SpinTheVault />
        </HomeBand>

        <AmbientDivider />

        <HomeBand className="home-band-cta">
          <ContributeCTA />
        </HomeBand>
      </main>
    </>
  );
}
