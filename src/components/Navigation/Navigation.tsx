import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ROUTES } from "../../routes";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut, loading } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  const [signOutError, setSignOutError] = useState<string | null>(null);
  const signingOutRef = useRef(false);
  const accountMenu = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => setIsOpen(false);

  const handleSignOut = async () => {
    if (signingOutRef.current) return;
    signingOutRef.current = true;
    setSigningOut(true);
    setSignOutError(null);
    try {
      const { error } = await signOut();
      if (error) throw error;
      closeMobileMenu();
      if (accountMenu.current) accountMenu.current.open = false;
    } catch {
      setSignOutError('Sign out failed. Check your connection and try again.');
    } finally {
      signingOutRef.current = false;
      setSigningOut(false);
    }
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
            {loading ? <span className="site-nav-link">Account…</span> : user ? (
              <details className="site-nav-account" ref={accountMenu} onKeyDown={event => { if (event.key === 'Escape' && accountMenu.current) { accountMenu.current.open = false; accountMenu.current.querySelector('summary')?.focus(); } }}>
                <summary className="site-nav-link">Account</summary>
                <div className="site-nav-account-menu" onClick={() => { if (accountMenu.current) accountMenu.current.open = false; }}>
                  <Link to={ROUTES.PROFILE}>Profile</Link>
                  <Link to={ROUTES.SETTINGS}>Settings</Link>
              <button
                onClick={handleSignOut}
                disabled={signingOut}
                className="site-nav-auth-button"
              >
                {signingOut ? 'Signing out…' : 'Sign Out'}
              </button>
                </div>
              </details>
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
          aria-controls="site-nav-mobile"
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
          className="site-nav-mobile" id="site-nav-mobile"
        >
          <MobileItem to="/vault" label="Vault" onClick={closeMobileMenu} />
          <MobileItem to="/games" label="Games" onClick={closeMobileMenu} />
          <MobileItem to="/about" label="About" onClick={closeMobileMenu} />
          <MobileItem to="/submit" label="Submit a Werd" onClick={closeMobileMenu} />

          <div className="site-nav-mobile-auth">
            {loading ? <span>Checking account…</span> : user ? (
              <>
              <MobileItem to={ROUTES.PROFILE} label="Profile" onClick={closeMobileMenu} />
              <MobileItem to={ROUTES.SETTINGS} label="Settings" onClick={closeMobileMenu} />
              <button
                onClick={handleSignOut}
                disabled={signingOut}
                className="site-nav-mobile-link site-nav-mobile-auth-button"
              >
                {signingOut ? 'Signing out…' : 'Sign Out'}
              </button>
              </>
            ) : (
              <MobileItem to={ROUTES.LOGIN} label="Log In" onClick={closeMobileMenu} />
            )}
          </div>
        </div>
      )}
      {signOutError && <p className="site-nav-error" role="alert">{signOutError}</p>}
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
