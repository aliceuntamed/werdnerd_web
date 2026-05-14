// pages/WerdVaultPage.tsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWerds } from "../../hooks/useWerds";
import { WerdVaultTagCloud } from "../../components/ui/WerdVaultTagCloud";
import { ChromeSky } from "../../components/ui/ChromeSky";
import type { Werd } from "../../types/werd";
import "./WerdVault.css";

const UNTAGS_LABEL = "untagged";

function normalizeTag(tag: string) {
  return tag?.trim() || UNTAGS_LABEL;
}

function WerdShelfCard({ werd }: { werd: Werd }) {
  const visibleTags = werd.tags.slice(0, 3);

  return (
    <article
      className="vault-shelf-card"
      tabIndex={0}
      aria-label={`${werd.werd}: ${werd.definition ?? "No definition available"}`}
    >
      <div className="vault-shelf-card__shine" />
      <div className="vault-shelf-card__topline" />

      <div className="vault-shelf-card__header">
        {werd.part_of_speech && (
          <span className="vault-shelf-card__meta">{werd.part_of_speech}</span>
        )}
        {werd.language && (
          <span className="vault-shelf-card__meta">{werd.language}</span>
        )}
      </div>

      <h3>{werd.werd}</h3>

      {werd.pronunciation && (
        <p className="vault-shelf-card__pronunciation">/{werd.pronunciation}/</p>
      )}

      {werd.definition && (
        <p className="vault-shelf-card__definition">{werd.definition}</p>
      )}

      {visibleTags.length > 0 && (
        <div className="vault-shelf-card__tags" aria-hidden="true">
          {visibleTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </article>
  );
}

function WerdTagShelf({ tag, werds }: { tag: string; werds: Werd[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const shelfId = `vault-shelf-${tag.replace(/\s+/g, "-")}`;
  const hasShelfOverflow = werds.length > 3;

  const updateScrollButtons = useCallback(() => {
    const track = trackRef.current;

    if (!track) return;

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    setCanScrollLeft(track.scrollLeft > 8);
    setCanScrollRight(track.scrollLeft < maxScrollLeft - 8);
  }, []);

  useEffect(() => {
    updateScrollButtons();

    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      track.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons, werds.length]);

  function scrollShelf(direction: "left" | "right") {
    const track = trackRef.current;

    if (!track) return;

    if (direction === "right") {
      setCanScrollLeft(true);
    } else {
      setCanScrollRight(true);
    }

    track.scrollBy({
      left: direction === "right" ? track.clientWidth * 0.82 : -track.clientWidth * 0.82,
      behavior: "smooth",
    });
  }

  return (
    <section className="vault-shelf" aria-labelledby={shelfId}>
      <div className="vault-shelf__header">
        <div>
          <p className="vault-eyebrow">Tag</p>
          <h2 id={shelfId}>{tag}</h2>
        </div>
        <span className="vault-shelf__count">
          {werds.length} {werds.length === 1 ? "werd" : "werds"}
        </span>
      </div>

      <div className="vault-shelf__rail">
        <div
          ref={trackRef}
          className="vault-shelf__track"
          aria-label={`${tag} werds`}
        >
          {werds.map((werd) => (
            <WerdShelfCard key={`${tag}-${werd.werd_id}`} werd={werd} />
          ))}
        </div>

        {hasShelfOverflow && canScrollLeft && (
          <button
            type="button"
            className="vault-shelf__arrow vault-shelf__arrow--left"
            onClick={() => scrollShelf("left")}
            aria-label={`Scroll ${tag} shelf left`}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
        )}

        {hasShelfOverflow && (canScrollRight || !canScrollLeft) && (
          <button
            type="button"
            className="vault-shelf__arrow vault-shelf__arrow--right"
            onClick={() => scrollShelf("right")}
            aria-label={`Scroll ${tag} shelf right`}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  );
}

export default function WerdVaultPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const { werds, loading } = useWerds();

  const tagGroups = useMemo(() => {
    const groups = new Map<string, Werd[]>();

    werds.forEach((werd) => {
      const tags = werd.tags.length > 0 ? werd.tags : [UNTAGS_LABEL];

      tags.forEach((tag) => {
        const normalizedTag = normalizeTag(tag);
        groups.set(normalizedTag, [...(groups.get(normalizedTag) ?? []), werd]);
      });
    });

    return Array.from(groups.entries())
      .map(([tag, groupedWerds]) => ({ tag, werds: groupedWerds }))
      .sort((a, b) => b.werds.length - a.werds.length || a.tag.localeCompare(b.tag));
  }, [werds]);

  const allTags = tagGroups.map((group) => group.tag);
  const visibleGroups = activeTag
    ? tagGroups.filter((group) => group.tag === activeTag)
    : tagGroups;

  return (
    <main className="vault-page">
      <ChromeSky className="absolute inset-0 -z-10 opacity-40" />

      <section className="vault-hero">
        <div className="vault-hero__copy">
          <p className="vault-eyebrow">Werd Vault</p>
          <h1>Browse by instinct, then fall down the rabbit hole.</h1>
          <p>
            The long list is retired. The archive now behaves more like a set
            of shelves: pick a tag, skim sideways, and let the strange little
            words make eye contact first.
          </p>
        </div>

        <div className="vault-hero__stats" aria-label="Vault stats">
          <div>
            <strong>{werds.length}</strong>
            <span>werds</span>
          </div>
          <div>
            <strong>{allTags.length}</strong>
            <span>tags</span>
          </div>
        </div>
      </section>

      <section className="vault-content" aria-label="Werd Vault archive">
        <div className="vault-filter">
          <div className="vault-filter__header">
            <p className="vault-eyebrow">Shelf filter</p>
            {activeTag && (
              <button
                type="button"
                className="vault-filter__clear"
                onClick={() => setActiveTag(null)}
              >
                Show all
              </button>
            )}
          </div>

          <WerdVaultTagCloud
            tags={allTags}
            activeTag={activeTag}
            onSelect={(tag) =>
              setActiveTag((prev) => (prev === tag ? null : tag))
            }
            size="sm"
            gap="gap-2"
            className="vault-filter__tags"
          />
        </div>

        {loading ? (
          <div className="vault-loading">
            <div className="vault-loading__spinner" />
            <p>Loading the shelves...</p>
          </div>
        ) : visibleGroups.length > 0 ? (
          <div className="vault-shelves">
            {visibleGroups.map((group) => (
              <WerdTagShelf key={group.tag} tag={group.tag} werds={group.werds} />
            ))}
          </div>
        ) : (
          <div className="vault-empty">No werds found for this shelf.</div>
        )}
      </section>
    </main>
  );
}
