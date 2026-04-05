export default function GamesHero() {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(150,170,255,0.15),_rgba(10,10,10,0.95))]" />

      {/* Chrome diamond */}
      <div className="absolute w-[300px] h-[300px] rotate-45 rounded-xl bg-gradient-to-br from-[#e5e7eb]/20 to-[#7aa2ff]/20 border border-white/10 shadow-[0_0_40px_rgba(155,188,255,0.15)]" />

      {/* Title */}
      <h1 className="relative font-heading text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#e5e7eb] via-[#9bbcff] to-[#c084fc] drop-shadow-[0_0_20px_rgba(155,188,255,0.25)]">
        Games
      </h1>
    </section>
  );
}
