import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-bg-elevated border-t border-border-subtle mt-20 pt-12 pb-10 px-6 text-text-primary font-body">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Brand */}
          <div className="max-w-sm flex flex-col gap-4">
            <h2 className="font-heading text-3xl tracking-tight">
              <span className="bg-chrome-horizontal bg-clip-text text-transparent">
                Werd
              </span>{" "}
              Nerd
            </h2>

            <p className="text-text-muted text-sm leading-relaxed">
              Curating the curious, the obscure, and the delightfully
              polysyllabic. Your daily dose of linguistic levity.
            </p>

            {/* Social */}
            <div className="mt-4">
              <h3 className="font-heading text-lg mb-3">
                Join the Vocabulary Vanguard
              </h3>
              <div className="flex gap-4">
                {["Instagram", "Twitter", "LinkedIn", "Facebook"].map(
                  (label) => (
                    <button
                      key={label}
                      aria-label={`Follow us on ${label}`}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-border-subtle hover:border-accent-pink transition-colors"
                    >
                      <span className="text-text-primary opacity-80 hover:opacity-100 transition-opacity">
                        {/* Placeholder icons */}●
                      </span>
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Column 1 */}
            <div>
              <h4 className="font-heading text-lg mb-4">Lexicon</h4>
              <nav className="flex flex-col gap-2 text-sm text-text-muted">
                <Link
                  to="/"
                  className="hover:text-text-primary transition-colors"
                >
                  werd Vault
                </Link>
                <a className="hover:text-text-primary transition-colors">
                  Etymology Explorer
                </a>
                <a className="hover:text-text-primary transition-colors">
                  Phonetic Fun
                </a>
                <Link
                  to="/"
                  className="hover:text-text-primary transition-colors"
                >
                  Daily Rare werd
                </Link>
              </nav>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-heading text-lg mb-4">Community</h4>
              <nav className="flex flex-col gap-2 text-sm text-text-muted">
                <Link
                  to="/submit-werd"
                  className="hover:text-text-primary transition-colors"
                >
                  Submit a werd
                </Link>
                <a className="hover:text-text-primary transition-colors">
                  Nerd Forum
                </a>
                <a className="hover:text-text-primary transition-colors">
                  Contributor Perks
                </a>
                <a className="hover:text-text-primary transition-colors">
                  Events
                </a>
              </nav>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-heading text-lg mb-4">Legalese</h4>
              <nav className="flex flex-col gap-2 text-sm text-text-muted">
                <a className="hover:text-text-primary transition-colors">
                  Privacy Policy
                </a>
                <a className="hover:text-text-primary transition-colors">
                  Terms of Service
                </a>
                <a className="hover:text-text-primary transition-colors">
                  Cookie Settings
                </a>
                <a className="hover:text-text-primary transition-colors">
                  Accessibility
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-subtle"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-text-muted">
            © 2026 WerdNerd. Built for the logophilic & the curious.
          </p>

          <div className="flex gap-4 text-xs text-text-muted">
            <span className="px-3 py-1 rounded-full bg-bg-subtle border border-border-subtle">
              Oxford Certified Quirky
            </span>
            <span className="px-3 py-1 rounded-full bg-bg-subtle border border-border-subtle">
              100% Organic Definitions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
