interface GameCardProps {
  title: string;
  description: string;
}

export default function GameCard({ title, description }: GameCardProps) {
  return (
    <div className="relative p-[2px] rounded-xl bg-gradient-to-br from-[#e5e7eb] via-[#9bbcff] to-[#c084fc] transition-all duration-300 hover:shadow-[0_0_30px_2px_rgba(155,188,255,0.35)] cursor-pointer">
      <div className="rounded-xl bg-black/60 backdrop-blur-sm p-6 h-full">
        <h3 className="font-heading text-2xl text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
}
