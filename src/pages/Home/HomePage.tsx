import type React from "react";
import VideoBackground from "../../components/ui/VideoBackground";
import Hero from "./Hero";
import WOTD from "./WOTD";
import CuratedPicks from "./CuratedPicks";
import SpinTheVault from "./SpinTheVault";
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

export default function HomePage() {
  return (
    <>
      <VideoBackground>
        <Hero />

        <section className="home-parallax-panel">
          <WOTD />
        </section>

        <section className="home-parallax-panel home-parallax-panel-spin">
          <SpinTheVault />
        </section>
      </VideoBackground>

      <main className="home-main">
        <AmbientDivider />

        <HomeBand className="home-band-mid">
          <CuratedPicks />
        </HomeBand>

        <AmbientDivider />
      </main>
    </>
  );
}
