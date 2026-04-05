import { Tag } from "../ui/Tag";

export function WerdTagList({ tags }: { tags: string[] }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag, i) => (
        <Tag key={tag} label={tag} index={i} />
      ))}
    </div>
  );
}
