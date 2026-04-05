import { Link } from "react-router-dom";
import { Feather } from "lucide-react";

export default function ContributeCTA() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-10 md:p-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-1/3 bg-chrome-horizontal rounded-full opacity-60" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,100,200,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-14 h-14 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
            <Feather className="w-6 h-6 text-white/60" />
          </div>

          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-white tracking-tight mb-4">
              Contribute to the Vault
            </h2>
            <p className="font-body text-white/50 max-w-md mx-auto leading-relaxed text-lg">
              Know a rare, poetic, or peculiar word that deserves a place in the
              archive? Help expand the lexicon.
            </p>
          </div>

          <Link
            to="/submit-werd"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-heading text-base text-black bg-chrome-horizontal shadow-lg hover:opacity-90 active:scale-95 transition-all"
          >
            <Feather className="w-4 h-4" />
            Submit a Word
          </Link>
        </div>
      </div>
    </div>
  );
}
