import { PageWrapper } from "../../components/layout/PageWrapper";
import { Header } from "../../components/layout/Header";

import { Hero } from "./Hero";
import { PaletteGrid } from "./PaletteGrid";
import { TypographyExperiments } from "./TypographyExperiments";
import { QuickBrowse } from "./QuickBrowse";
import { RemixModal } from "./RemixModal";

export default function PalettePlaygroundPage() {
  return (
    <PageWrapper>
      <Header />

      <main className="flex flex-col">
        <Hero />


        <PaletteGrid />
        <TypographyExperiments />
        <QuickBrowse />
        <RemixModal />
      </main>
    </PageWrapper>
  );
}
