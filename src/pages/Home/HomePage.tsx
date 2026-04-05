import VideoBackground from "../../components/ui/VideoBackground";
import Hero from "./Hero";
import WOTD from "./WOTD";
import CuratedPicks from "./CuratedPicks";
import SpinTheVault from "./SpinTheVault";
import ContributeCTA from "./ContributeCTA";

function SectionDivider() {
  return (
    <div className="w-full flex items-center gap-6 px-6 max-w-6xl mx-auto">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <VideoBackground src="/hero-video.mp4" opacity={0.5} />

      <main
        className="relative w-full min-h-screen text-white"
        style={{ zIndex: 10 }}
      >
        <Hero />

        <SectionDivider />

        <section className="py-24 relative">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 px-6">
            <WOTD />
          </div>
        </section>

        <SectionDivider />

        <section className="py-24 relative">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 px-6">
            <CuratedPicks />
          </div>
        </section>

        <SectionDivider />

        <section className="py-24 relative">
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 px-6">
            <SpinTheVault />
          </div>
        </section>

        <SectionDivider />

        <section className="py-24 relative">
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 px-6">
            <ContributeCTA />
          </div>
        </section>
      </main>
    </>
  );
}
