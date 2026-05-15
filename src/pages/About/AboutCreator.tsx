import { Flower2, Mail, Search, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const traits = [
  {
    icon: Flower2,
    title: "Vibrant Spirit",
    copy: "Infusing color into the dusty corners of grammar.",
  },
  {
    icon: Search,
    title: "Curious Mind",
    copy: "Always hunting for the rarest etymologies.",
  },
];

export function AboutCreator() {
  const [open, setOpen] = useState(false);

  return (
    <main className="about-page-shell">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero__word" aria-hidden="true">
          about
        </div>

        <div className="about-hero__stage">
          <div className="about-hero__photo-wrap">
            <img
              src="/creator.png"
              alt="Stephanie, the creator of WerdNerd, smiling in a wooded setting"
              className="about-hero__photo"
            />

            <figure className="about-hero__quote">
              <blockquote>
                &ldquo;I have no special talents. I am only passionately
                curious.&rdquo;
              </blockquote>
              <figcaption>- Albert Einstein</figcaption>
            </figure>
          </div>

          <div className="about-hero__story">
            <p className="about-hero__kicker">The Mind Behind WerdNerd</p>
            <h1 id="about-title">Confessions of a Logophile</h1>

            <div className="about-hero__copy">
              <p>
                Welcome to my digital sanctuary of oddities. I&rsquo;m the
                creator of WerdNerd, a project born from a lifelong obsession
                with the &ldquo;mumpsimus&rdquo; and
                &ldquo;floccinaucinihilipilification&rdquo; of the English
                language.
              </p>
              <p>
                While others collect stamps or vintage coins, I collect
                syllables. I believe every &ldquo;mellifluous&rdquo; sound and
                &ldquo;petrichor&rdquo; scent deserves a place to be celebrated.
                This site is my personal cabinet of linguistic curiosities,
                shared with fellow nerds who find joy in the
                &ldquo;tintinnabulation&rdquo; of a well-placed werd.
              </p>
            </div>

            <div className="about-hero__traits" aria-label="Creator traits">
              {traits.map(({ icon: Icon, title, copy }) => (
                <article className="about-trait" key={title}>
                  <span className="about-trait__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={2.3} />
                  </span>
                  <span>
                    <strong>{title}</strong>
                    <span>{copy}</span>
                  </span>
                </article>
              ))}
            </div>

            <div className="about-hero__actions">
              <Link className="about-button about-button--primary" to="/vault">
                <Sparkles size={18} aria-hidden="true" />
                Explore the Vault
              </Link>
              <button
                className="about-button about-button--ghost"
                type="button"
                onClick={() => setOpen(true)}
              >
                <Mail size={18} aria-hidden="true" />
                Say Hello
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-notes" aria-label="WerdNerd point of view">
        <p>Part word-hoard, part playground, part love letter to language.</p>
        <p>
          The useful kind of nerdy: obscure enough to sparkle, clear enough to
          share.
        </p>
      </section>

      {open && (
        <div
          className="about-modal"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            className="about-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-contact-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="about-modal__close"
              type="button"
              aria-label="Close contact form"
              onClick={() => setOpen(false)}
            >
              <X size={20} aria-hidden="true" />
            </button>

            <h2 id="about-contact-title">Send a Message</h2>
            <p>
              Got a favorite &ldquo;werd&rdquo; you want to share? I&rsquo;m
              all ears.
            </p>

            <form className="about-form">
              <label>
                <span>Name</span>
                <input type="text" placeholder="Your name..." />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="you@email.com" />
              </label>
              <label>
                <span>Message</span>
                <textarea rows={4} placeholder="Tell me something unusual..." />
              </label>

              <div className="about-form__actions">
                <button className="about-button about-button--primary" type="submit">
                  Send Werd
                </button>
                <button
                  className="about-button about-button--quiet"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
