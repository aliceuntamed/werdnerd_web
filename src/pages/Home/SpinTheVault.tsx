import { useState } from "react";
import { Shuffle } from "lucide-react";
import { getRandomWerd } from "../../utils/supabase/queries";
import type { Werd } from "../../types/werd";
import { Link } from "react-router-dom";

export default function SpinTheVault() {
  const [werd, setWerd] = useState<Werd | null>(null);
  const [loading, setLoading] = useState(false);
  const [spun, setSpun] = useState(false);

  async function spin() {
    setLoading(true);
    setSpun(true);
    const random = await getRandomWerd();
    setWerd(random);
    setLoading(false);
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-4xl md:text-5xl chrome-gradient-text mb-3">
          Spin the Vault
        </h2>
        <p className="font-body text-white/45 text-base md:text-lg">
          Let fate choose your next obsession.
        </p>
      </div>

      <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 md:p-12 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1.5px] w-1/3 bg-chrome-horizontal rounded-full opacity-40" />

        <div className="min-h-[12rem] flex flex-col items-center justify-center mb-8">
          {!spun && !loading && (
            <p className="font-body text-white/30 italic text-lg">
              Press spin to reveal a random word from the vault.
            </p>
          )}

          {loading && (
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white/70 animate-spin" />
              <p className="font-body text-white/40 italic animate-pulse">Spinning…</p>
            </div>
          )}

          {!loading && werd && (
            <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="font-heading text-5xl md:text-6xl chrome-gradient-text leading-none">
                {werd.werd}
              </h3>

              {werd.pronunciation && (
                <p className="font-body text-white/40 italic text-lg">
                  /{werd.pronunciation}/
                </p>
              )}

              {werd.part_of_speech && (
                <span className="text-xs tracking-widest uppercase text-white/30 font-body border border-white/10 px-3 py-1 rounded-full">
                  {werd.part_of_speech}
                </span>
              )}

              <p className="font-body text-white/75 text-lg max-w-lg leading-relaxed mt-2">
                {werd.definition}
              </p>

              <Link
                to={`/vault?search=${encodeURIComponent(werd.werd)}`}
                className="mt-2 text-sm font-body text-white/40 hover:text-white transition-colors underline underline-offset-4 decoration-white/15 hover:decoration-white"
              >
                See full entry →
              </Link>
            </div>
          )}
        </div>

        <button
          onClick={spin}
          disabled={loading}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading text-base text-black bg-chrome-horizontal shadow-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Shuffle className={`w-5 h-5 ${loading ? "animate-spin" : ""}`} />
          {loading ? "Spinning…" : spun ? "Spin Again" : "Spin the Vault"}
        </button>
      </div>
    </div>
  );
}
