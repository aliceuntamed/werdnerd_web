import { BoggleTile } from "./BoggleTile";
export function BoggleBoard({ board, selected, onSelect }) {
    const flat = board.flat();
    return (<div className="
        grid grid-cols-4 gap-4
        mx-auto
        relative
      ">
      {flat.map((letter, i) => (<BoggleTile key={i} letter={letter} selected={selected.includes(i)} onClick={() => onSelect(i)}/>))}
    </div>);
}
