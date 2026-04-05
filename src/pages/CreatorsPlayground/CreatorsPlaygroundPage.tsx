import { PageWrapper } from "../../components/layout/PageWrapper";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";

import { Hero } from "./Hero";
import { PaletteGrid } from "./PaletteGrid";
import { TypographyExperiments } from "./TypographyExperiments";
import { QuickBrowse } from "./QuickBrowse";
import { RemixModal } from "./RemixModal";

import { ColorOrbit } from "../../components/ui/ColorOrbit";

export default function PalettePlaygroundPage() {
  return (
    <PageWrapper>
      <Header />

      <main className="flex flex-col">
        <Hero />

        {/* ✨ Section Divider Artifact */}
        <section className="py-24 flex justify-center">
          <ColorOrbit className="scale-75 opacity-90" />
        </section>

        <PaletteGrid />
        <TypographyExperiments />
        <QuickBrowse />
        <RemixModal />
      </main>

      <Footer />
    </PageWrapper>
  );
}
