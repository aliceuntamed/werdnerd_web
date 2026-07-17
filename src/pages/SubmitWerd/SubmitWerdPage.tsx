import { ChromeSky } from "../../components/ui/ChromeSky";
import SubmitWordForm from "./SubmitWerdForm";
import "./SubmitWerdPage.css";

const vaultStandards = [
  {
    title: "Rare or obscure",
    body: "Words that most people have never encountered in the wild.",
    accent: "cyan",
  },
  {
    title: "Poetically precise",
    body: "Words that describe something that feels indescribable.",
    accent: "violet",
  },
  {
    title: "Phonically satisfying",
    body: "Words that are genuinely delightful to say out loud.",
    accent: "fern",
  },
  {
    title: "Emotionally resonant",
    body: "Words that unlock something true about human experience.",
    accent: "chrome",
  },
] as const;

const recentGems = [
  {
    werd: "Susurrus",
    definition: "A whispering or rustling sound; a murmur.",
    code: "#1204",
    accent: "cyan",
  },
  {
    werd: "Limerence",
    definition: "The state of being infatuated with another person.",
    code: "#1205",
    accent: "fern",
  },
  {
    werd: "Elysian",
    definition: "Relating to or characteristic of heaven or paradise.",
    code: "#1206",
    accent: "violet",
  },
] as const;

export default function SubmitWerdPage() {
  return (
    <main className="submit-werd-page">
      <ChromeSky density="low" className="submit-werd-page__sky" />
      <div className="submit-werd-page__nebula submit-werd-page__nebula--cyan" />
      <div className="submit-werd-page__nebula submit-werd-page__nebula--violet" />
      <div className="submit-werd-page__grid" />

      <div className="submit-werd-page__content">
        <section className="submit-werd-page__intro" aria-labelledby="submit-werd-title">
          <div className="submit-werd-page__hero-copy">
            <p className="submit-werd-page__eyebrow">Archive Desk 01</p>
            <h1 id="submit-werd-title" className="submit-werd-page__title">
              Submit a Werd
            </h1>
            <p className="submit-werd-page__lede">
              Add your peculiar discoveries to the Curiosity Cabinet. Each entry
              expands our collective archive of linguistic rarities.
            </p>
          </div>

          <aside className="guidance-note" aria-labelledby="guidance-note-title">
            <div className="guidance-note__header">
              <span className="museum-label">Guidance Note 01</span>
              <h2 id="guidance-note-title">Werd Standards</h2>
              <p>Here is what we are looking for:</p>
            </div>

            <div className="guidance-note__standards">
              {vaultStandards.map((standard, index) => (
                <article
                  key={standard.title}
                  className={`guidance-note__standard guidance-note__standard--${standard.accent}`}
                  style={{ animationDelay: `${index * -1.3}s` }}
                >
                  <span className="guidance-note__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{standard.title}</h3>
                    <p>{standard.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="submit-werd-page__workbench" aria-label="Submit a Werd workbench">
          <div className="submission-form-shell">
            <div className="submission-form-shell__badge">
              Specimen Submission Form
            </div>
            <div className="submission-form-shell__overlay" />
            <SubmitWordForm />
          </div>

          <aside className="new-werd-preview" aria-label="New Werd specimen preview">
            <div className="new-werd-preview__panel">
              <div className="new-werd-preview__heading">
                <span className="museum-label">Specimen Preview</span>
              </div>

              <div className="new-werd-preview__card">
                <div className="new-werd-preview__code" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <h2>[New Werd]</h2>
                <p className="new-werd-preview__pronunciation">
                  /phonetic-entry/
                </p>
                <div className="new-werd-preview__rule" />
                <p className="new-werd-preview__copy">
                  The definition you draft will manifest here, awaiting final
                  archival validation.
                </p>

                <div className="new-werd-preview__meta">
                  <span>REF: NV-2026-X</span>
                  <span>ORIGIN: LAB_01</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="recent-gems" aria-labelledby="recent-gems-title">
          <div className="recent-gems__heading">
            <div />
            <h2 id="recent-gems-title">Recently Cataloged Gems</h2>
            <div />
          </div>

          <div className="recent-gems__grid">
            {recentGems.map((gem) => (
              <article
                key={gem.werd}
                className={`recent-gems__card recent-gems__card--${gem.accent}`}
              >
                <div>
                  <h3>{gem.werd}</h3>
                  <span>{gem.code}</span>
                </div>
                <p>{gem.definition}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
