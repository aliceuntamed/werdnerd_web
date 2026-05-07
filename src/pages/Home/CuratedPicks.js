import { useEffect, useState } from "react";
import { fetchCuratedWerds } from "../../utils/supabase/queries";
import { Link } from "react-router-dom";
export default function CuratedPicks() {
    const [werds, setWerds] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchCuratedWerds()
            .then(setWerds)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);
    return (<div className="max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-4xl md:text-5xl chrome-gradient-text mb-3">
          Curated Picks
        </h2>
        <p className="font-body text-white/45 text-base md:text-lg max-w-md mx-auto">
          Hand-selected gems from the vault.
        </p>
      </div>

      {loading && (<div className="text-white/40 italic text-center py-16 font-body animate-pulse">
          Loading curated picks…
        </div>)}

      {!loading && werds.length === 0 && (<div className="text-center py-16">
          <p className="text-white/40 italic font-body mb-4">
            No curated words yet — check back soon.
          </p>
          <Link to="/vault" className="text-sm text-white/50 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all font-body">
            Browse the full vault →
          </Link>
        </div>)}

      {!loading && werds.length > 0 && (<>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {werds.slice(0, 6).map((w) => (<div key={w.werd_id} className="relative p-[1.5px] rounded-2xl bg-gradient-to-br from-white/30 via-[#9bbcff]/40 to-[#c084fc]/40 group hover:from-white/50 hover:via-[#9bbcff]/60 hover:to-[#c084fc]/60 transition-all duration-500">
                <div className="rounded-2xl h-full w-full bg-black/55 backdrop-blur-md p-6 flex flex-col gap-3">
                  <h3 className="font-heading text-2xl text-white leading-tight">
                    {w.werd}
                  </h3>

                  {w.pronunciation && (<p className="font-body text-white/40 italic text-sm">
                      /{w.pronunciation}/
                    </p>)}

                  {w.part_of_speech && (<span className="inline-block self-start text-xs tracking-widest uppercase text-white/30 font-body border border-white/10 px-2 py-0.5 rounded-full">
                      {w.part_of_speech}
                    </span>)}

                  <p className="font-body text-white/75 leading-relaxed flex-1">
                    {w.definition}
                  </p>

                  <Link to={`/vault?search=${encodeURIComponent(w.werd)}`} className="inline-block mt-2 text-sm font-body text-white/40 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-white/15 hover:decoration-white">
                    More like this →
                  </Link>
                </div>
              </div>))}
          </div>

          <div className="text-center mt-10">
            <Link to="/vault" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading text-sm text-white/70 border border-white/15 bg-white/[0.04] backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all">
              Browse the full vault →
            </Link>
          </div>
        </>)}
    </div>);
}
