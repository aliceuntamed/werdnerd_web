// pages/WerdVaultPage.tsx
import { useState } from "react";
import { useWerds } from "../../hooks/useWerds";
import { WerdVaultTagCloud } from "../../components/ui/WerdVaultTagCloud";
import { WerdCard } from "../../components/werd/WerdCard";
import { ChromeSky } from "../../components/ui/ChromeSky";

export default function WerdVaultPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const { werds, loading } = useWerds(activeTag);

  const allTags = Array.from(new Set(werds.flatMap((w) => w.tags))).sort();

  return (
    <div className="relative min-h-screen bg-[#0b0b0d] text-white">
      <ChromeSky className="absolute inset-0 -z-10 opacity-40" />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-heading mb-10">Werd Vault</h1>

        <WerdVaultTagCloud
          tags={allTags}
          activeTag={activeTag}
          onSelect={(tag) =>
            setActiveTag((prev) => (prev === tag ? null : tag))
          }
          className="mb-10"
        />

        {loading ? (
          <p className="text-white/60">Loading…</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {werds.map((w) => (
              <WerdCard key={w.werd_id} {...w} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
