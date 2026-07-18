import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-margin-note" aria-hidden="true">
        <span>
          NO.
          <br />
          0007
        </span>
        <i />
        <span>
          AD VERBA
          <br />
          PER LUDUM
        </span>
      </div>

      <div className="home-hero-copy">
        <p className="home-eyebrow">Verba volant · scripta manent</p>

        <h1 className="home-hero-title">
          A curiosity
          <br />
          cabinet for
          <br />
          <em>words worth</em>
          <br />
          keeping.
        </h1>

        <p className="home-hero-subcopy">
          Rare, poetic, and peculiar vocabulary collected for people who know a
          good werd can derail a perfectly productive afternoon.
        </p>

        <Link to="/vault" className="home-primary-button">
          <span aria-hidden="true">✦</span>
          Enter the WerdVault
          <ArrowUpRight className="home-icon" />
        </Link>
      </div>

      <div className="home-hero-art" aria-hidden="true">
        <img src="/chrome-letter-still-life-hero.png" alt="" />
      </div>

      <p className="home-hero-foot">VERBA VOLANT, SCRIPTA MANENT.</p>
    </section>
  );
}
