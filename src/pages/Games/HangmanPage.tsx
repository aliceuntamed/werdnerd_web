export default function HangmanPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,200,255,0.10),_rgba(10,10,10,0.95))]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1
          className="
              font-heading text-5xl mb-6
              drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
            "
          style={{
            background:
              "linearlinear-gradient(135deg, #e5e7eb, #9bbcff, #c084fc)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Hangman
        </h1>

        <div
          className="
              mt-16 mx-auto w-80 p-8 rounded-2xl
              bg-[#0b0b0d] border border-white/20
              bg-gradient-to-br from-white/10 to-white/5
              shadow-[inset_0_2px_3px_rgba(255,255,255,0.25),_0_10px_20px_rgba(0,0,0,0.7)]
              text-white/70 font-heading text-xl
            "
        >
          Coming Soon
        </div>
      </div>
    </div>
  );
}
