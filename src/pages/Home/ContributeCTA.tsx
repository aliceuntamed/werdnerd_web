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
            Found a word with excellent troublemaker energy?
          </h2>
          <p className="home-section-copy contribute-copy">
            Send it in. The vault gets better when other word obsessives bring
            their best oddities to the table.
          </p>

          <Link to="/submit" className="home-primary-button contribute-button">
            <Send className="home-icon" />
            Submit a Word
          </Link>
        </div>
      </div>
    </div>
  );
}
