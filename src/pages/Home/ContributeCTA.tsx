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
          <p className="home-eyebrow">A note from the collector</p>
          <h2 className="home-section-title">
            “Part werd vault, part curiosity cabinet, and part excuse to collect
            favorite oddities.”
          </h2>
          <p className="home-section-copy contribute-copy">
            Found a werd that makes your brain tingle? Share it with the
            WerdNerd community.
          </p>

          <Link to="/submit" className="home-primary-button contribute-button">
            <Send className="home-icon" />
            Bring me a good werd
          </Link>
        </div>
      </div>
    </div>
  );
}
