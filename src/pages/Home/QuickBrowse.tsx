import { Tag } from "../../components/ui/Tag";

interface QuickBrowseProps {
  tags: string[];
  onSelect: (tag: string) => void;
}

export default function QuickBrowse({ tags, onSelect }: QuickBrowseProps) {
  return (
    <section className="quick-browse" aria-labelledby="quick-browse-title">
      <div className="quick-browse__header">
        <p className="home-eyebrow">Quick browse</p>
        <h2 id="quick-browse-title" className="home-section-title">
          Pick a shelf by mood.
        </h2>
        <p className="home-section-copy">
          Tap a tag and jump straight into that corner of the vault.
        </p>
      </div>

      <div className="quick-browse__tags">
        {tags.map((tag: string, i: number) => (
          <Tag
            key={tag}
            label={tag}
            index={i}
            onClick={() => onSelect(tag)}
            className="quick-browse__tag"
          />
        ))}
      </div>
    </section>
  );
}
