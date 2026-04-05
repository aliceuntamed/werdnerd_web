interface WerdDefinitionProps {
  word: string;
  pronunciation?: string;
  definition: string;
}

export function WerdDefinition({
  word,
  pronunciation,
  definition,
}: WerdDefinitionProps) {
  return (
    <div className="space-y-4">
      {/* Word */}
      <h2 className="font-heading text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#e5e7eb] via-[#9bbcff] to-[#c084fc] drop-shadow-[0_0_15px_rgba(155,188,255,0.25)]">
        {word}
      </h2>

      {/* Pronunciation */}
      {pronunciation && (
        <p className="font-body text-white/60 italic text-lg">
          /{pronunciation}/
        </p>
      )}

      {/* Definition */}
      <p className="font-body text-white/80 leading-relaxed">{definition}</p>
    </div>
  );
}
