import { Tag } from "./Tag";

interface WerdVaultTagCloudProps {
  tags: string[];
  activeTag?: string | null;
  onSelect?: (tag: string) => void;
  className?: string;
  size?: "sm" | "md";
  gap?: string; // e.g. "gap-2" or "gap-4"
}

export function WerdVaultTagCloud({
  tags,
  activeTag = null,
  onSelect,
  className = "",
  size = "md",
  gap = "gap-3",
}: WerdVaultTagCloudProps) {
  return (
    <div className={`flex flex-wrap ${gap} ${className}`}>
      {tags.map((tag, i) => (
        <Tag
          key={tag}
          label={tag}
          index={i}
          size={size}
          active={activeTag === tag}
          onClick={() => onSelect?.(tag)}
          className="cursor-pointer transition-all"
        />
      ))}
    </div>
  );
}
