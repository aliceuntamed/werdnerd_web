import { Link } from "react-router-dom";
import { BookOpen, LogIn } from "lucide-react";
import { Flipwords } from "../../components/ui/Flipwords";
import { ROUTES } from "../../routes";

const taglineWerds = ["HOARDING", "HUNTING", "SAVORING", "SHARING"];

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="home-hero-shell">
        <div className="home-hero-copy">
          <h1 className="home-hero-title">
            <span>werd</span>
            <span>nerd.</span>
          </h1>

          <div className="home-hero-tagline">
            <span>WORDS WORTH</span>
            {" "}
            <Flipwords werds={taglineWerds} duration={2200} className="home-hero-flipword" />
          </div>

          <p className="home-hero-subcopy">
            A velvet-rope vault for strange little words, blue-card curiosities,
            and definitions that refuse to sit still.
          </p>

          <div className="home-hero-actions">
            <Link to="/vault" className="home-primary-button">
              <BookOpen className="home-icon" />
              Explore The Vault
            </Link>

            <Link to={ROUTES.LOGIN} className="home-secondary-button">
              <LogIn className="home-icon" />
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
