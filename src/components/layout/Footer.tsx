import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { ROUTES } from "../../routes";

type FooterLink =
  | {
      label: string;
      to: string;
    }
  | {
      label: string;
      href: string;
    };

const navColumns: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Lexicon",
    links: [
      { label: "The Vault", to: ROUTES.VAULT },
      { label: "Etymology Explorer", href: "#etymology" },
      { label: "Phonetic Fun", href: "#phonetic-fun" },
      { label: "Daily Fun Fact", href: "#daily-fun-fact" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Submit a Werd", to: ROUTES.SUBMIT },
      { label: "Nerd Forum", href: "#forum" },
      { label: "Tournaments", to: ROUTES.GAMES },
      { label: "Get in Touch", to: ROUTES.ABOUT },
    ],
  },
  {
    title: "Legalese",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Settings", href: "#cookies" },
      { label: "Accessibility", href: "#accessibility" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "#instagram", icon: "instagram" },
  { label: "GitHub", href: "#github", icon: "github" },
  { label: "LinkedIn", href: "#linkedin", icon: "linkedin" },
  { label: "Facebook", href: "#facebook", icon: "facebook" },
  { label: "WhatsApp", href: "#whatsapp", icon: "whatsapp" },
];

function SocialIcon({ name }: { name: string }) {
  if (name === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px]">
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="3.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="16.6" cy="7.4" r="1.15" fill="currentColor" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px]">
        <path
          d="M9.2 19.3c-4.1 1.2-4.1-1.8-5.8-2.2m11.6 4v-3.2c0-.9.1-1.3-.4-1.8 2-.2 4.1-1 4.1-4.6a3.6 3.6 0 0 0-1-2.5 3.3 3.3 0 0 0-.1-2.5s-.8-.3-2.6 1a8.8 8.8 0 0 0-4.8 0c-1.8-1.3-2.6-1-2.6-1A3.3 3.3 0 0 0 7.6 9a3.6 3.6 0 0 0-1 2.5c0 3.6 2.1 4.4 4.1 4.6-.3.3-.5.8-.5 1.5v3.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px]">
        <path
          d="M7.2 10.2v7.1m0-10.6v.1m4.3 10.5v-7.1m0 3.1c0-2.1 1.2-3.3 3-3.3 1.9 0 2.8 1.2 2.8 3.5v3.8"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
        />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px]">
        <path
          d="M14.5 8.1h2V5.2c-.4 0-1.6-.2-2.9-.2-2.9 0-4.8 1.7-4.8 4.9v2.4H5.7v3.3h3.1V23h3.7v-7.4h3.1l.5-3.3h-3.6v-2c0-1 .3-2.2 2-2.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px]">
      <path
        d="M5.8 18.3 4.7 22l3.8-1a8.7 8.7 0 1 0-2.7-2.7Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9.4 8.7c.2 3.2 2.7 5.6 5.8 5.9l1.2-1.6-2.1-1-.8.7a5.2 5.2 0 0 1-2.2-2.2l.7-.8-1-2.1-1.6 1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <section className="site-footer__brand">
            <div className="site-footer__brand-copy">
              <h2 className="site-footer__logo">
                <span>Werd</span> Nerd
              </h2>

              <p className="site-footer__tagline">
                Curating the curious, the obscure, and the delightfully
                polysyllabic. Your daily dose of linguistic levity.
              </p>
            </div>

            <form
              className="site-footer__newsletter"
              aria-label="Newsletter signup"
              onSubmit={(event) => event.preventDefault()}
            >
              <label
                htmlFor="footer-email"
                className="site-footer__newsletter-label"
              >
                Join the Vocabulary Vanguard
              </label>

              <div className="site-footer__form-row">
                <div className="site-footer__input-wrap">
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="Email"
                    className="site-footer__input"
                  />
                  <Mail
                    aria-hidden="true"
                    size={17}
                    className="site-footer__mail-icon"
                  />
                </div>

                <button
                  type="submit"
                  className="site-footer__subscribe"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </section>

          <section className="site-footer__directory">
            <div className="site-footer__columns">
              {navColumns.map((column) => (
                <div key={column.title} className="site-footer__column">
                  <h3>{column.title}</h3>

                  <nav
                    aria-label={`${column.title} footer links`}
                    className="site-footer__nav"
                  >
                    {column.links.map((link) =>
                      "to" in link ? (
                        <Link
                          key={link.label}
                          to={link.to}
                          className="site-footer__link"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          key={link.label}
                          href={link.href}
                          className="site-footer__link"
                        >
                          {link.label}
                        </a>
                      ),
                    )}
                  </nav>
                </div>
              ))}
            </div>

            <div className="site-footer__socials">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Follow Werd Nerd on ${label}`}
                  className="site-footer__social"
                >
                  <span>
                    <SocialIcon name={icon} />
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <p>
            &copy; 2026 WerdNerd. Built for the logophilic &amp; the curious.
          </p>

          <div className="site-footer__badges">
            <span>Oxford Certified Quirky</span>
            <span>100% Organically Curated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
