import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ArrowUpRight, Bookmark, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useWerds } from "../../hooks/useWerds";
import { useFavorites } from "../../hooks/useFavorites";
import { useAuth } from "../../contexts/AuthContext";
import { WerdVaultTagCloud } from "../../components/ui/WerdVaultTagCloud";
import LoadingScreen from "../../components/ui/LoadingScreen";
import type { Werd } from "../../types/werd";
import { werdPath } from "./werdSlug";
import DailyFunFact from "./DailyFunFact";
import "./WerdVault.css";

const UNTAGGED_LABEL = "untagged";

function normalizeTag(tag: string) {
  return tag?.trim() || UNTAGGED_LABEL;
}

type CardFavorites = {
  savedIds: Set<string>;
  pendingIds: Set<string>;
  disabled: boolean;
  loginPath: string | null;
  toggle: (werd: Werd) => void;
};

function WerdShelfCard({ werd, index, favorites }: { werd: Werd; index: number; favorites: CardFavorites }) {
  const saved = favorites.savedIds.has(werd.werd_id);
  const pending = favorites.pendingIds.has(werd.werd_id);
  const action = saved ? `Remove ${werd.werd} from favorites` : `Add ${werd.werd} to favorites`;
  return (
    <article className="vault-card" aria-label={`${werd.werd} specimen`}>
      <span className="vault-card__number">{String(index + 1).padStart(2, "0")}</span>
      {favorites.loginPath && !favorites.disabled ? (
        <Link className="vault-card__favorite" to={favorites.loginPath} aria-label={`Sign in to add ${werd.werd} to favorites`} title="Sign in to add to favorites"><Bookmark size={18} aria-hidden="true" /></Link>
      ) : (
        <button className="vault-card__favorite" type="button" aria-label={action} title={pending ? 'Saving change…' : action} aria-pressed={saved} aria-busy={pending} disabled={favorites.disabled || pending} onClick={() => favorites.toggle(werd)}><Bookmark size={18} fill={saved ? 'currentColor' : 'none'} aria-hidden="true" /></button>
      )}
      <div className="vault-card__meta">
        <span>{werd.part_of_speech || "specimen"}</span>
        <span>{werd.language || "origin unknown"}</span>
      </div>
      <div className="vault-card__body">
        <h3><Link className="vault-card__link" to={werdPath(werd.werd)}>{werd.werd}</Link></h3>
        {werd.pronunciation ? <p className="vault-card__pronunciation">/{werd.pronunciation}/</p> : null}
        <p className="vault-card__definition">{werd.definition || "Definition pending. Even the vault has mysteries."}</p>
      </div>
      <div className="vault-card__footer">
        <span>{werd.tags[0] || UNTAGGED_LABEL}</span>
        <span className="vault-card__open">Open file <ArrowUpRight aria-hidden="true" /></span>
      </div>
    </article>
  );
}

function WerdTagShelf({ tag, werds, favorites }: { tag: string; werds: Werd[]; favorites: CardFavorites }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const shelfId = `vault-shelf-${tag.replace(/\s+/g, "-")}`;

  const updateScrollButtons = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setCanScrollLeft(track.scrollLeft > 8);
    setCanScrollRight(track.scrollLeft < max - 8);
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

  function scroll(direction: "left" | "right") {
    trackRef.current?.scrollBy({
      left: (direction === "right" ? 1 : -1) * (trackRef.current?.clientWidth ?? 0) * 0.82,
      behavior: "smooth",
    });
  }

  return (
    <section className="vault-shelf" aria-labelledby={shelfId}>
      <header className="vault-shelf__header">
        <div><p>Collection / tag</p><h2 id={shelfId}>{tag}</h2></div>
        <span>{String(werds.length).padStart(2, "0")} filed</span>
      </header>
      <div className="vault-shelf__rail">
        <div ref={trackRef} className="vault-shelf__track" aria-label={`${tag} werds`}>
          {werds.map((werd, index) => <WerdShelfCard key={`${tag}-${werd.werd_id}`} werd={werd} index={index} favorites={favorites} />)}
        </div>
        {canScrollLeft ? <button className="vault-shelf__arrow vault-shelf__arrow--left" type="button" onClick={() => scroll("left")} aria-label={`Scroll ${tag} left`}><ChevronLeft /></button> : null}
        {canScrollRight ? <button className="vault-shelf__arrow vault-shelf__arrow--right" type="button" onClick={() => scroll("right")} aria-label={`Scroll ${tag} right`}><ChevronRight /></button> : null}
      </div>
    </section>
  );
}

export default function WerdVaultPage() {
  const { user, loading } = useAuth();
  return <WerdVaultContent key={user?.id ?? 'signed-out'} userId={user?.id ?? null} authLoading={loading} />;
}

function WerdVaultContent({ userId, authLoading }: { userId: string | null; authLoading: boolean }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // One collection per page keeps the same Werd synchronized across every tag shelf.
  const collection = useFavorites(userId);
  const savedIds = useMemo(() => new Set(collection.favorites.map(favorite => favorite.werd_id)), [collection.favorites]);
  const favorites: CardFavorites = {
    savedIds,
    pendingIds: collection.pendingIds,
    disabled: authLoading || collection.loading || !!collection.loadError,
    loginPath: userId ? null : `/auth/login?next=${encodeURIComponent(location.pathname + location.search + location.hash)}`,
    toggle: werd => { void collection.toggle({ werd_id: werd.werd_id, werd: werd.werd, definition: werd.definition ?? null, part_of_speech: werd.part_of_speech ?? null }); },
  };
  const activeTag = searchParams.get("tag");
  const query = searchParams.get("search") ?? "";
  const { werds, loading, error } = useWerds();

  const allTags = useMemo(() => Array.from(new Set(werds.flatMap((werd) => werd.tags.map(normalizeTag)))).sort(), [werds]);
  const filteredWerds = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return werds.filter((werd) => {
      const matchesTag = !activeTag || werd.tags.map(normalizeTag).includes(activeTag);
      const searchable = [werd.werd, werd.definition, werd.pronunciation, werd.language, werd.part_of_speech, ...werd.tags]
        .filter(Boolean).join(" ").toLocaleLowerCase();
      return matchesTag && (!needle || searchable.includes(needle));
    });
  }, [activeTag, query, werds]);

  const groups = useMemo(() => {
    if (activeTag) return [{ tag: activeTag, werds: filteredWerds }];
    const map = new Map<string, Werd[]>();
    filteredWerds.forEach((werd) => (werd.tags.length ? werd.tags : [UNTAGGED_LABEL]).forEach((tag) => {
      const normalized = normalizeTag(tag);
      map.set(normalized, [...(map.get(normalized) ?? []), werd]);
    }));
    return Array.from(map, ([tag, groupedWerds]) => ({ tag, werds: groupedWerds }))
      .sort((a, b) => b.werds.length - a.werds.length || a.tag.localeCompare(b.tag));
  }, [activeTag, filteredWerds]);

  function setParam(key: "tag" | "search", value: string | null) {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);
      if (value) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
      return next;
    }, { replace: key === "search" });
  }

  return (
    <main className="vault-page">
      <section className="vault-hero">
        <div className="vault-margin-note" aria-hidden="true"><span>Archive 01</span><i /><span>Est. for the incurably curious</span></div>
        <div className="vault-hero__inner">
          <div className="vault-hero__copy">
            <p className="vault-eyebrow">WerdNerd / living lexicon</p>
            <h1>The <em>WerdVault.</em></h1>
            <p>A curiosity cabinet for language&apos;s rare, unruly, and suspiciously delightful specimens. Search with intent—or browse with none whatsoever.</p>
          </div>
          <div className="vault-index" aria-label="Vault statistics">
            <span>Current holdings</span><strong>{String(werds.length).padStart(3, "0")}</strong><small>werds / {allTags.length} tags</small>
          </div>
        </div>
      </section>

      <section className="vault-catalog" aria-labelledby="vault-catalog-title">
        <div className="vault-catalog__heading">
          <div><p>01 / Search the stacks</p><h2 id="vault-catalog-title">Find your next <em>verbal oddity.</em></h2></div>
          <span>{filteredWerds.length} matches in the index</span>
        </div>
        <label className="vault-search">
          <Search aria-hidden="true" />
          <span className="sr-only">Search the WerdVault</span>
          <input value={query} onChange={(event) => setParam("search", event.target.value || null)} placeholder="Try ‘weather’, ‘obsolete’, or a werd you half remember…" type="search" />
          {query ? <button type="button" onClick={() => setParam("search", null)} aria-label="Clear search"><X /></button> : <kbd>TYPE TO SIFT</kbd>}
        </label>

        <div className="vault-filter">
          <div className="vault-filter__header"><span>Browse by instinct</span>{activeTag ? <button type="button" onClick={() => setParam("tag", null)}>Clear shelf ×</button> : null}</div>
          <WerdVaultTagCloud tags={allTags} activeTag={activeTag} onSelect={(tag) => setParam("tag", activeTag === tag ? null : tag)} size="sm" gap="gap-2" className="vault-filter__tags" />
        </div>

        {loading ? <div className="vault-state"><LoadingScreen fullScreen={false} message="Unlatching the cabinets…" size={64} speed={2.4} /></div>
          : error ? <div className="vault-state" role="alert"><span>VAULT CONNECTION LOST</span><h3>The catalog could not be opened.</h3><p>{error.message}</p><button type="button" onClick={() => window.location.reload()}>Try again</button></div>
          : groups.length && filteredWerds.length ? <div className="vault-collection">
            {(collection.loadError || collection.error) && <div className="vault-favorites-error" role="alert"><p>{collection.loadError || collection.error}</p><button type="button" disabled={collection.loading || collection.pendingIds.size > 0} onClick={() => void collection.reload()}>Retry favorites</button></div>}
            <p className="sr-only" role="status">{collection.message}</p>
            <div className="vault-shelves">{groups.map((group) => <WerdTagShelf key={group.tag} {...group} favorites={favorites} />)}</div>
          </div>
          : <div className="vault-state"><span>FILE NOT FOUND</span><h3>That specimen escaped.</h3><p>Try a broader search or clear the active shelf. Words are slippery little beasts.</p><button type="button" onClick={() => setSearchParams({})}>Reset the index</button></div>}
      </section>

      <DailyFunFact />
    </main>
  );
}
