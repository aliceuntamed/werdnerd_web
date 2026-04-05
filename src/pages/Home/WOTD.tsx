import { useEffect, useState } from "react";
import { getWOTD } from "../../utils/supabase/queries";
import type { Werd } from "../../types/werd";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function WOTD() {
  const [werd, setWerd] = useState<Werd | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWOTD()
      .then(setWerd)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <span className="text-xs tracking-[0.25em] uppercase text-white/40 font-body whitespace-nowrap">
          Word of the Day
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {loading && (
        <div className="text-white/40 italic text-center py-12 font-body animate-pulse">
          Selecting today's word…
        </div>
      )}

      {!loading && !werd && (
        <p className="text-white/40 italic text-center py-12 font-body">
          No word today — check back soon.
        </p>
      )}

      {!loading && werd && (
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 md:p-12 shadow-2xl overflow-hidden group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-1/3 bg-chrome-horizontal rounded-full opacity-60" />

          <div className="relative z-10">
            <h2 className="font-heading text-5xl md:text-6xl chrome-gradient-text mb-3 leading-none">
              {werd.werd}
            </h2>

            {werd.pronunciation && (
              <p className="font-body text-white/45 italic text-lg mb-1">
                /{werd.pronunciation}/
              </p>
            )}

            {werd.part_of_speech && (
              <p className="font-body text-white/30 text-sm tracking-widest uppercase mb-6">
                {werd.part_of_speech}
              </p>
            )}

            <p className="font-body text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl">
              {werd.definition}
            </p>

            <div className="flex items-center gap-4 mt-8">
              <Link
                to={`/vault?search=${encodeURIComponent(werd.werd)}`}
                className="inline-flex items-center gap-2 text-sm font-body text-white/50 hover:text-white transition-colors group/link"
              >
                <BookOpen className="w-4 h-4" />
                <span className="underline underline-offset-4 decoration-white/20 group-hover/link:decoration-white transition-all">
                  See full entry
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
