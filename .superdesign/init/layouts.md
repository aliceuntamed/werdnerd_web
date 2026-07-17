# Shared Layout Components

## `src/App.tsx`

Root app shell. Renders Navigation, routed page, and Footer.

```tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";
import Navigation from "./components/Navigation/Navigation";
import { Footer } from "./components/layout/Footer";
import ErrorBoundary from "./components/layout/ErrorBoundary";

import { ROUTE_COMPONENTS } from "./routes";

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Navigation />
        <Suspense fallback={<LoadingScreen blurBackground />}>
          <Routes>
            {Object.entries(ROUTE_COMPONENTS).map(([path, Component]) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}
```

## `src/components/Navigation/Navigation.tsx`

Absolute top nav with brand, desktop links, auth link, mobile menu, and chrome underline behavior.

```tsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ROUTES } from "../../routes";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  const closeMobileMenu = () => setIsOpen(false);

  const handleSignOut = async () => {
    await signOut();
    closeMobileMenu();
  };

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" className="site-nav-brand">WerdNerd</Link>
        <div className="site-nav-links">
          <NavItem to="/vault" label="Vault" />
          <NavItem to="/games" label="Games" />
          <NavItem to="/about" label="About" />
          <NavItem to="/submit" label="Submit a Werd" />
          <span className="site-nav-spark" aria-hidden="true">✦</span>
          <div className="site-nav-auth">
            {user ? (
              <button onClick={handleSignOut} className="site-nav-link site-nav-auth-button">Sign Out</button>
            ) : (
              <NavItem to={ROUTES.LOGIN} label="Log In" />
            )}
          </div>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="site-nav-toggle" aria-expanded={isOpen} aria-label="Toggle navigation">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="site-nav-mobile">
          <MobileItem to="/vault" label="Vault" onClick={closeMobileMenu} />
          <MobileItem to="/games" label="Games" onClick={closeMobileMenu} />
          <MobileItem to="/about" label="About" onClick={closeMobileMenu} />
          <MobileItem to="/submit" label="Submit a Werd" onClick={closeMobileMenu} />
          <div className="site-nav-mobile-auth">
            {user ? (
              <button onClick={handleSignOut} className="site-nav-mobile-link site-nav-mobile-auth-button">Sign Out</button>
            ) : (
              <MobileItem to={ROUTES.LOGIN} label="Log In" onClick={closeMobileMenu} />
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink to={to} className={({ isActive }) => `site-nav-link ${isActive ? "site-nav-link-active" : ""}`} end={to === "/"}>
      {label}
    </NavLink>
  );
}

function MobileItem({ to, label, onClick }: { to: string; label: string; onClick: () => void }) {
  return (
    <NavLink to={to} onClick={onClick} className={({ isActive }) => `site-nav-mobile-link ${isActive ? "site-nav-mobile-link-active" : ""}`} end={to === "/"}>
      {label}
    </NavLink>
  );
}
```

## `src/components/layout/Footer.tsx`

Global footer with WerdNerd brand, newsletter, directory links, socials, and badge row.

```tsx
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { ROUTES } from "../../routes";

type FooterLink = { label: string; to: string } | { label: string; href: string };

const navColumns: Array<{ title: string; links: FooterLink[] }> = [
  { title: "Lexicon", links: [{ label: "The Vault", to: ROUTES.VAULT }, { label: "Etymology Explorer", href: "#etymology" }, { label: "Phonetic Fun", href: "#phonetic-fun" }, { label: "Daily Fun Fact", href: "#daily-fun-fact" }] },
  { title: "Community", links: [{ label: "Submit a Werd", to: ROUTES.SUBMIT }, { label: "Nerd Forum", href: "#forum" }, { label: "Tournaments", to: ROUTES.GAMES }, { label: "Get in Touch", to: ROUTES.ABOUT }] },
  { title: "Legalese", links: [{ label: "Privacy Policy", href: "#privacy" }, { label: "Terms of Service", href: "#terms" }, { label: "Cookie Settings", href: "#cookies" }, { label: "Accessibility", href: "#accessibility" }] },
];

const socialLinks = [
  { label: "Instagram", href: "#instagram", icon: "instagram" },
  { label: "GitHub", href: "#github", icon: "github" },
  { label: "LinkedIn", href: "#linkedin", icon: "linkedin" },
  { label: "Facebook", href: "#facebook", icon: "facebook" },
  { label: "WhatsApp", href: "#whatsapp", icon: "whatsapp" },
];

function SocialIcon({ name }: { name: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px]"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="2" /></svg>;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <section className="site-footer__brand">
            <div className="site-footer__brand-copy">
              <h2 className="site-footer__logo"><span>Werd</span> Nerd</h2>
              <p className="site-footer__tagline">Curating the peculiar, the obscure, and the delightfully polysyllabic.</p>
            </div>
            <form className="site-footer__newsletter" aria-label="Newsletter signup" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="footer-email" className="site-footer__newsletter-label">Be Difficult to Bore</label>
              <p className="site-footer__newsletter-copy">Get a <em>weekly dose</em> of <em>linguistic levity</em> sent to your inbox.</p>
              <div className="site-footer__form-row">
                <div className="site-footer__input-wrap">
                  <input id="footer-email" type="email" placeholder="Email" className="site-footer__input" />
                  <Mail aria-hidden="true" size={17} className="site-footer__mail-icon" />
                </div>
                <button type="submit" className="site-footer__subscribe">Subscribe</button>
              </div>
            </form>
          </section>
          <section className="site-footer__directory">
            <div className="site-footer__columns">
              {navColumns.map((column) => (
                <div key={column.title} className="site-footer__column">
                  <h3>{column.title}</h3>
                  <nav aria-label={`${column.title} footer links`} className="site-footer__nav">
                    {column.links.map((link) => "to" in link ? <Link key={link.label} to={link.to} className="site-footer__link">{link.label}</Link> : <a key={link.label} href={link.href} className="site-footer__link">{link.label}</a>)}
                  </nav>
                </div>
              ))}
            </div>
            <div className="site-footer__socials">
              {socialLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} aria-label={`Follow Werd Nerd on ${label}`} className="site-footer__social"><span><SocialIcon name={icon} /></span></a>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <p>&copy; 2026 WerdNerd. Built with TypeScript &amp; and curiousity.</p>
          <div className="site-footer__badges"><span>Lexically Unsupervised</span><span>100% Organically Curated</span></div>
        </div>
      </div>
    </footer>
  );
}
```

## `src/components/layout/PageWrapper.tsx`

Minimal page wrapper.

```tsx
import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-bg-main text-text-primary font-body">
      {children}
    </div>
  );
}
```
