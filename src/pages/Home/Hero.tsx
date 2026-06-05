import { Link } from "react-router-dom";
import { BookOpen, Feather } from "lucide-react";
import { Flipwords } from "../../components/ui/Flipwords";

const taglineWerds = ["HOARDING", "HUNTING", "SAVORING", "SHARING"];

export default function Hero() {
  return (
    <section className="home-hero">
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

          <div className="home-hero-actions">
            <Link to="/vault" className="home-primary-button">
              <BookOpen className="home-icon" />
              Explore The Vault
            </Link>

            <Link to="/submit" className="home-secondary-button">
              <Feather className="home-icon" />
              Submit a Werd
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
