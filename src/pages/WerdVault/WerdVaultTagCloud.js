import { Tag } from "../../components/ui/Tag";
export function WerdVaultTagCloud({ tags, activeTag, onSelect, }) {
    return (<div className="flex flex-wrap gap-3">
      {tags.map((tag, i) => (<Tag key={tag} label={tag} index={i} onClick={() => onSelect(tag)} className={`
            cursor-pointer
            ${activeTag === tag ? "ring-2 ring-white/40" : ""}
          `}/>))}
    </div>);
}
