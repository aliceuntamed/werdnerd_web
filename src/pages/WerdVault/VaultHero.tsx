export default function VaultHero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,200,255,0.25),_rgba(20,20,20,0.9))]" />

      <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5" />
      <div className="absolute w-[650px] h-[650px] rounded-full border border-white/5 opacity-40" />
      <div className="absolute w-[800px] h-[800px] rounded-full border border-white/5 opacity-20" />

      <h1 className="relative font-heading text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#e5e7eb] via-[#9bbcff] to-[#c084fc] drop-shadow-[0_0_20px_rgba(155,188,255,0.25)]">
        The Word Vault
      </h1>

      <p className="absolute bottom-10 text-white/60 text-lg">
        Explore the archive.
      </p>
    </section>
  );
}
