import { Tag } from "../../components/ui/Tag";

interface WerdVaultTagCloudProps {
  tags: string[];
  activeTag?: string | null;
  onSelect: (tag: string) => void;
}

export function WerdVaultTagCloud({
  tags,
  activeTag,
  onSelect,
}: WerdVaultTagCloudProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag: string, i: number) => (
        <Tag
          key={tag}
          label={tag}
          index={i}
          onClick={() => onSelect(tag)}
          className={`
            cursor-pointer
            ${activeTag === tag ? "ring-2 ring-white/40" : ""}
          `}
        />
      ))}
    </div>
  );
}
