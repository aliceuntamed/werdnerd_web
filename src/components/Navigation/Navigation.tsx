import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="site-nav"
    >
      <div className="site-nav-inner">
        {/* Brand */}
        <Link to="/" className="site-nav-brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            className="site-nav-brand-icon"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
            />
          </svg>
          <span>WerdNerd</span>
        </Link>

        {/* Desktop Links */}
        <div className="site-nav-links">
          <NavItem to="/" label="Home" />
          <NavItem to="/vault" label="Vault" />
          <NavItem to="/about" label="About" />
          <NavItem to="/submit" label="Submit Word" />
          <NavItem to="/games" label="Games" />
          <NavItem to="/playground" label="Palette Playground" />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="site-nav-toggle"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="site-nav-mobile"
        >
          <MobileItem to="/" label="Home" />
          <MobileItem to="/vault" label="Vault" />
          <MobileItem to="/about" label="About" />
          <MobileItem to="/submit" label="Submit Word" />
          <MobileItem to="/games" label="Games" />
          <MobileItem to="/playground" label="Palette Playground" />
        </div>
      )}
    </header>
  );
}

/* --- Subcomponents for clean code --- */

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="site-nav-link"
    >
      {label}
    </Link>
  );
}

function MobileItem({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="site-nav-mobile-link"
    >
      {label}
    </Link>
  );
}
