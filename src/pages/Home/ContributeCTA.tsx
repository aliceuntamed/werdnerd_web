import { Link } from "react-router-dom";
import { Feather, Send } from "lucide-react";

export default function ContributeCTA() {
  return (
    <div className="contribute-card">
      <div className="contribute-line" />
      <div className="contribute-glow" />

      <div className="contribute-layout">
        <div className="contribute-icon">
          <Feather className="home-icon" />
        </div>

        <div>
          <p className="home-eyebrow">Contribute</p>
          <h2 className="home-section-title">
            Found a word that makes your brain tingle?
          </h2>
          <p className="home-section-copy contribute-copy">
            Share it with the WerdNerd community!
          </p>

          <Link to="/submit" className="home-primary-button contribute-button">
            <Send className="home-icon" />
            Submit a Werd
          </Link>
        </div>
      </div>
    </div>
  );
}
