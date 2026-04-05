interface BoggleTileProps {
  letter: string;
  selected: boolean;
  onClick: () => void;
}

export function BoggleTile({ letter, selected, onClick }: BoggleTileProps) {
  return (
    <button
      onClick={onClick}
      className={`
          w-16 h-16 rounded-xl flex items-center justify-center
          font-heading text-2xl text-white
          bg-[#0b0b0d]
          border border-white/20
          bg-gradient-to-br from-white/10 to-white/5
          shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),_0_6px_14px_rgba(0,0,0,0.7)]
          transition
          active:translate-y-[1px]
          ${selected ? "ring-2 ring-[#9bbcff]" : ""}
        `}
      style={{
        transform: "translateZ(0)",
      }}
    >
      {letter}
    </button>
  );
}
