import { Flower2, Mail, Search, Sparkles } from "lucide-react";
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
  return (
    <main className="about-page-shell">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero__word" aria-hidden="true">
          about
        </div>

        <div className="about-hero__stage">
          <div className="about-hero__photo-wrap">
            <img
              src="/about-img.png"
              alt="Stephanie, the creator of WerdNerd, smiling in an elegant setting"
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
                Hi, I&rsquo;m Stephanie, the human behind WerdNerd. 👽 I&rsquo;m
                a designer with a soft spot for life&rsquo;s peculiarities,
                especially the strange little wonders hiding in the English
                language. I built this digital lexicon to be part word vault,
                part curiosity cabinet, and part excuse to collect and share my
                favorite oddities.
              </p>
              <p>
                WerdNerd is a personal passion project born from a lifelong love
                of words that sparkle, charm, confuse, amuse, and make you
                pause, grin, and immediately want to tell someone else. If you
                have a favorite strange, beautiful, or criminally underused
                word, send it my way. The vault always has room for one more odd
                little gem.
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
              <a
                className="about-button about-button--ghost"
                href="#contact"
              >
                <Mail size={18} aria-hidden="true" />
                Say Hello
              </a>
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
    </main>
  );
}
