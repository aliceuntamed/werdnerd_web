import { Link } from "react-router-dom";
import { Flipwords } from "../../components/ui/Flipwords";

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/50 text-xs tracking-[0.25em] uppercase font-body">
          A Logophile's Lexicon
        </div>

        <h1
          className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] font-bold"
          style={{
            fontFamily: "Quicksand, system-ui, sans-serif",
          }}
        >
          <span className="chrome-gradient-text">Discover</span>
          <br />

          <span className="text-white/95">the world's most </span>

          <span className="inline-flex items-baseline text-[#9bbcff]">
            <Flipwords
              werds={["unusual", "curious", "obscure", "poetic", "intriguing"]}
              duration={3200}
              className="text-[#9bbcff] text-[1.25em] md:text-[1.35em] lg:text-[1.45em] font-bold"
            />
          </span>

          <br />

          <span className="text-white/95">words.</span>
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "1.1rem",
            maxWidth: "30rem",
            lineHeight: 1.7,
          }}
        >
          Rare, poetic, and peculiar vocabulary curated for those who believe
          language is the greatest art form.
        </p>

        {/* BUTTONS — increased spacing */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
          <Link
            to="/vault"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #e5e7eb, #9bbcff, #c084fc)",
              color: "#0a0a0a",
              fontFamily: "Quicksand, system-ui, sans-serif",
              fontWeight: 700,
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              boxShadow: "0 4px 20px rgba(155,188,255,0.25)",
              transition: "opacity 0.2s",
            }}
          >
            Explore the Vault
          </Link>

          <Link
            to="/submit-werd"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontFamily: "Quicksand, system-ui, sans-serif",
              fontWeight: 600,
            }}
          >
            Submit a Word
          </Link>
        </div>
      </div>

      {/* Scroll indicator removed */}
    </div>
  );
}
