import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);
    return (<header className="
      fixed top-0 left-0 w-full h-16 z-50
      bg-black/70 backdrop-blur-md
      border-b border-white/10
      shadow-[0_4px_20px_rgba(0,0,0,0.4)]
      flex items-center
    ">
      <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" className="text-white">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>
          </svg>
          <span className="font-heading text-xl text-white">WerdNerd</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavItem to="/" label="Home"/>
          <NavItem to="/vault" label="Vault"/>
          <NavItem to="/about" label="About"/>
          <NavItem to="/submit-werd" label="Submit Word"/>
          <NavItem to="/games" label="Games"/>
          <NavItem to="/creators-playground" label="Palette Playground"/>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white" aria-label="Toggle navigation">
          {isOpen ? (<svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6"/>
            </svg>) : (<svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>)}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (<div className="
          absolute top-16 left-0 w-full
          bg-black/80 backdrop-blur-xl
          border-b border-white/10
          flex flex-col gap-6 px-6 py-6 md:hidden
        ">
          <MobileItem to="/" label="Home"/>
          <MobileItem to="/vault" label="Vault"/>
          <MobileItem to="/about" label="About"/>
          <MobileItem to="/submit-werd" label="Submit Word"/>
          <MobileItem to="/games" label="Games"/>
          <MobileItem to="/creators-playground" label="Palette Playground"/>
        </div>)}
    </header>);
}
/* --- Subcomponents for clean code --- */
function NavItem({ to, label }) {
    return (<Link to={to} className="
        text-white hover:text-white/80 transition
        font-body tracking-wide
      ">
      {label}
    </Link>);
}
function MobileItem({ to, label }) {
    return (<Link to={to} className="
        text-white text-lg
        hover:text-white/80 transition
        font-body tracking-wide
      ">
      {label}
    </Link>);
}
