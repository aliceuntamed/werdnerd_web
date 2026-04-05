import { BoggleTile } from "./BoggleTile";

interface BoggleBoardProps {
  board: string[][];
  selected: number[];
  onSelect: (i: number) => void;
}

export function BoggleBoard({ board, selected, onSelect }: BoggleBoardProps) {
  const flat = board.flat();

  return (
    <div
      className="
        grid grid-cols-4 gap-4
        mx-auto
        relative
      "
    >
      {flat.map((letter, i) => (
        <BoggleTile
          key={i}
          letter={letter}
          selected={selected.includes(i)}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}
