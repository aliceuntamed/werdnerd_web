import { Link } from "react-router-dom";
import { Flipwords } from "@/components/ui/Flipwords";

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/50 text-xs tracking-[0.25em] uppercase font-body">
          A Logophile's Lexicon
        </div>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]"
          style={{
            fontFamily: "Quicksand, system-ui, sans-serif",
            fontWeight: 700,
          }}
        >
          <span className="chrome-gradient-text">Discover</span>
          <br />
          <span style={{ color: "rgba(255,255,255,0.95)" }}>
            the world's most{" "}
          </span>
          <span
            className="inline-flex items-baseline"
            style={{ color: "#9bbcff" }}
          >
            <Flipwords
              werds={["unusual", "curious", "obscure", "poetic", "intriguing"]}
              duration={3200}
              className="text-[#9bbcff]"
            />
          </span>
          <br />
          <span style={{ color: "rgba(255,255,255,0.95)" }}>words.</span>
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1.1rem",
            maxWidth: "30rem",
            lineHeight: 1.7,
          }}
        >
          Rare, poetic, and peculiar vocabulary curated for those who believe
          language is the greatest art form.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
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

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="14"
            height="22"
            rx="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="8" r="2" fill="currentColor">
            <animate
              attributeName="cy"
              from="8"
              to="14"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}
