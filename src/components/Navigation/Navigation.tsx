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
    <header
      className="site-nav"
    >
      <div className="site-nav-inner">
        <Link to="/" className="site-nav-brand">
          WerdNerd
        </Link>

        <div className="site-nav-links">
          <NavItem to="/vault" label="Vault" />
          <NavItem to="/games" label="Games" />
          <NavItem to="/about" label="About" />
          <NavItem to="/submit" label="Submit a Werd" />
          <span className="site-nav-spark" aria-hidden="true">
            ✦
          </span>

          <div className="site-nav-auth">
            {user ? (
              <button
                onClick={handleSignOut}
                className="site-nav-link site-nav-auth-button"
              >
                Sign Out
              </button>
            ) : (
              <NavItem to={ROUTES.LOGIN} label="Log In" />
            )}
          </div>
        </div>

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

      {isOpen && (
        <div
          className="site-nav-mobile"
        >
          <MobileItem to="/vault" label="Vault" onClick={closeMobileMenu} />
          <MobileItem to="/games" label="Games" onClick={closeMobileMenu} />
          <MobileItem to="/about" label="About" onClick={closeMobileMenu} />
          <MobileItem to="/submit" label="Submit a Werd" onClick={closeMobileMenu} />

          <div className="site-nav-mobile-auth">
            {user ? (
              <button
                onClick={handleSignOut}
                className="site-nav-mobile-link site-nav-mobile-auth-button"
              >
                Sign Out
              </button>
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
