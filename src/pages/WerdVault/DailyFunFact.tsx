import {
  type FocusEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { ArrowUpRight, ChevronDown, RotateCcw } from "lucide-react";
import { useLocation } from "react-router-dom";
import Loader from "../../components/ui/Loader";
import {
  getDailyFunFact,
  type FunFact,
} from "../../utils/supabase/queries";
import { DAILY_FUN_FACT_HASH } from "./dailyFactSelection";
import "./DailyFunFact.css";

type LoadState = "loading" | "ready" | "empty" | "error";

export default function DailyFunFact() {
  const location = useLocation();
  const sectionRef = useRef<HTMLElement>(null);
  const [fact, setFact] = useState<FunFact | null>(null);
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [revealed, setRevealed] = useState(false);
  const isHashTarget = location.hash === DAILY_FUN_FACT_HASH;
  const isRevealed = revealed || isHashTarget;

  async function retryLoad() {
    setLoadState("loading");

    try {
      const nextFact = await getDailyFunFact();
      setFact(nextFact);
      setLoadState(nextFact ? "ready" : "empty");
    } catch {
      setFact(null);
      setLoadState("error");
    }
  }

  useEffect(() => {
    let active = true;

    void getDailyFunFact()
      .then((nextFact) => {
        if (!active) return;
        setFact(nextFact);
        setLoadState(nextFact ? "ready" : "empty");
      })
      .catch(() => {
        if (!active) return;
        setFact(null);
        setLoadState("error");
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!isHashTarget) return;

    let scrollFrame = 0;
    const revealFrame = window.requestAnimationFrame(() => {
      scrollFrame = window.requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({ block: "center" });
      });
    });

    return () => {
      window.cancelAnimationFrame(revealFrame);
      window.cancelAnimationFrame(scrollFrame);
    };
  }, [isHashTarget]);

  function closeWhenFocusLeaves(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setRevealed(false);
    }
  }

  const revealLabel = isRevealed
    ? "Close the unindexed drawer"
    : "Open the unindexed drawer";

  return (
    <section
      ref={sectionRef}
      id={DAILY_FUN_FACT_HASH.slice(1)}
      className={`daily-fact ${isRevealed ? "daily-fact--revealed" : ""}`}
      aria-label="Daily Fun Fact"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => {
        if (!sectionRef.current?.contains(document.activeElement)) {
          setRevealed(false);
        }
      }}
      onFocusCapture={() => setRevealed(true)}
      onBlurCapture={closeWhenFocusLeaves}
    >
      <div className="daily-fact__cabinet">
        <button
          className="daily-fact__latch"
          type="button"
          aria-expanded={isRevealed}
          aria-controls="daily-fact-contents"
          onClick={() => setRevealed((current) => !current)}
        >
          <span className="daily-fact__registry" aria-hidden="true">
            UF–{String(new Date().getUTCDate()).padStart(2, "0")}
          </span>
          <span className="daily-fact__latch-copy">
            <strong>A drawer the archivist forgot.</strong>
            <small>The latch is warmer than the others.</small>
          </span>
          <span className="daily-fact__handle" aria-hidden="true">
            <ChevronDown />
          </span>
          <span className="sr-only">{revealLabel}</span>
        </button>

        <div
          id="daily-fact-contents"
          className="daily-fact__reveal"
          aria-hidden={!isRevealed}
        >
          <div className="daily-fact__reveal-inner">
            {loadState === "loading" ? (
              <div className="daily-fact__state" role="status">
                <Loader
                  size={48}
                  speed={2.4}
                  label="Searching the unindexed drawer"
                />
                <p>Something is rustling behind the catalog.</p>
              </div>
            ) : null}

            {loadState === "error" ? (
              <div className="daily-fact__state" role="alert">
                <p>The drawer jammed before it surrendered today&apos;s find.</p>
                <button
                  type="button"
                  tabIndex={isRevealed ? 0 : -1}
                  onClick={() => {
                    void retryLoad();
                  }}
                >
                  <RotateCcw aria-hidden="true" />
                  Try the latch again
                </button>
              </div>
            ) : null}

            {loadState === "empty" ? (
              <div className="daily-fact__state">
                <p>Only dust in this drawer. The archivist may have noticed.</p>
              </div>
            ) : null}

            {loadState === "ready" && fact ? (
              <article
                className={`daily-fact__specimen ${fact.fact_img ? "daily-fact__specimen--illustrated" : ""}`}
              >
                <div className="daily-fact__copy">
                  <div className="daily-fact__meta">
                    <span>Unindexed curiosity</span>
                    {fact.fact_category ? <span>{fact.fact_category}</span> : null}
                  </div>
                  <h2>{fact.fact_text}</h2>
                  {fact.fact_details ? <p>{fact.fact_details}</p> : null}
                  {fact.fact_source ? (
                    <a
                      href={fact.fact_source}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={isRevealed ? 0 : -1}
                    >
                      Inspect the evidence
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ) : null}
                </div>

                {fact.fact_img ? (
                  <figure className="daily-fact__image">
                    <img
                      src={fact.fact_img}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <figcaption>Visual evidence / filed without comment</figcaption>
                  </figure>
                ) : null}
              </article>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
