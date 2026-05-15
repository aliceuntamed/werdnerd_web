import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { WerdNerdMark } from "../brand/WerdNerdMark";
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
    <header
      className="site-nav"
    >
      <div className="site-nav-inner">
        {/* Brand */}
        <Link to="/" className="site-nav-brand">
          <WerdNerdMark className="site-nav-brand-icon" />
          <span className="site-nav-brand-wordmark">
            <span>Werd</span>
            <span>Nerd</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="site-nav-links">
          <NavItem to="/" label="Home" />
          <NavItem to="/vault" label="Vault" />
          <NavItem to="/about" label="About" />
          <NavItem to="/submit" label="Submit Word" />
          <NavItem to="/games" label="Games" />
          <NavItem to="/playground" label="Palette Playground" />

          {/* Auth Buttons */}
          <div className="site-nav-auth">
            {user ? (
              <button
                onClick={handleSignOut}
                className="site-nav-link site-nav-auth-button"
              >
                Sign Out
              </button>
            ) : (
              <>
                <NavItem to={ROUTES.LOGIN} label="Sign In" />
                <NavItem to={ROUTES.SIGNUP} label="Sign Up" />
              </>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="site-nav-toggle"
          aria-expanded={isOpen}
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
          <MobileItem to="/" label="Home" onClick={closeMobileMenu} />
          <MobileItem to="/vault" label="Vault" onClick={closeMobileMenu} />
          <MobileItem to="/about" label="About" onClick={closeMobileMenu} />
          <MobileItem to="/submit" label="Submit Word" onClick={closeMobileMenu} />
          <MobileItem to="/games" label="Games" onClick={closeMobileMenu} />
          <MobileItem
            to="/playground"
            label="Palette Playground"
            onClick={closeMobileMenu}
          />

          {/* Mobile Auth Buttons */}
          <div className="site-nav-mobile-auth">
            {user ? (
              <button
                onClick={handleSignOut}
                className="site-nav-mobile-link site-nav-mobile-auth-button"
              >
                Sign Out
              </button>
            ) : (
              <>
                <MobileItem to={ROUTES.LOGIN} label="Sign In" onClick={closeMobileMenu} />
                <MobileItem to={ROUTES.SIGNUP} label="Sign Up" onClick={closeMobileMenu} />
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

/* --- Subcomponents for clean code --- */

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `site-nav-link ${isActive ? "site-nav-link-active" : ""}`
      }
      end={to === "/"}
    >
      {label}
    </NavLink>
  );
}

function MobileItem({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `site-nav-mobile-link ${isActive ? "site-nav-mobile-link-active" : ""}`
      }
      end={to === "/"}
    >
      {label}
    </NavLink>
  );
}
