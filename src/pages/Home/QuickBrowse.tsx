import { Tag } from "../../components/ui/Tag";

interface QuickBrowseProps {
  tags: string[];
  onSelect: (tag: string) => void;
}

export default function QuickBrowse({ tags, onSelect }: QuickBrowseProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag: string, i: number) => (
        <Tag
          key={tag}
          label={tag}
          index={i}
          onClick={() => onSelect(tag)}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
}
