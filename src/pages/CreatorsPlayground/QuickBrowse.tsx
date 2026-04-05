import { WerdCard } from "../../components/werd/WerdCard";

const sampleWerds = [
  {
    werd_id: "1",
    werd: "Eccedentesiast",
    pronunciation: "ek-si-den-tee-see-ast",
    part_of_speech: "noun",
    definition: "Someone who hides pain behind a smile.",
    tags: ["psychological", "emotional"],
  },
  {
    werd_id: "2",
    werd: "Monachopsis",
    pronunciation: "mon-ak-op-sis",
    part_of_speech: "noun",
    definition: "The subtle feeling of being out of place.",
    tags: ["emotional", "existential"],
  },
  {
    werd_id: "3",
    werd: "Petrichor",
    pronunciation: "PET-ri-kor",
    part_of_speech: "noun",
    definition: "The pleasant, earthy smell after rain.",
    tags: ["sensory", "nature"],
  },
  {
    werd_id: "4",
    werd: "Vellichor",
    pronunciation: "VEL-i-kor",
    part_of_speech: "noun",
    definition: "The strange wistfulness of used bookstores.",
    tags: ["neologism", "poetic", "literary"],
  },
  {
    werd_id: "5",
    werd: "Limerence",
    pronunciation: "LIM-er-ence",
    part_of_speech: "noun",
    definition: "The state of being infatuated with another person.",
    tags: ["psychological", "modern", "romantic"],
  },
  {
    werd_id: "6",
    werd: "Sonorous",
    pronunciation: "SON-uh-rus",
    part_of_speech: "adjective",
    definition: "An imposingly deep and full sound.",
    tags: ["auditory", "descriptive"],
  },
];

export function QuickBrowse() {
  return (
    <section className="px-6 py-20 bg-bg-main text-text-primary">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <h2 className="font-heading text-4xl bg-chrome-horizontal bg-clip-text text-transparent tracking-tight">
          QuickBrowse
        </h2>

        <p className="text-text-muted text-lg">
          A fast peek into the Werd Vault.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleWerds.map((item, i) => (
            <WerdCard
              key={i}
              {...item}
              isFavorite={false}
              onToggleFavorite={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
