import { WerdTagList } from "./WerdTagList";
import type { Werd } from "../../types/werd";
import { FavoriteToggle } from "../../components/ui/FavoriteToggle";

interface WerdCardProps extends Werd {
  isFavorite?: boolean;
  onToggleFavorite?: () => void;

  // Visibility controls
  showFavorite?: boolean;
  showPronunciation?: boolean;
  showPartOfSpeech?: boolean;
  showDefinition?: boolean;
  showTags?: boolean;
  showLanguage?: boolean;
  showSource?: boolean;
}

export function WerdCard({
  werd,
  pronunciation,
  part_of_speech,
  definition,
  tags,
  language,
  source,
  isFavorite,
  onToggleFavorite,

  showFavorite = false,
  showPronunciation = false,
  showPartOfSpeech = false,
  showDefinition = true,
  showTags = true,
  showLanguage = false,
  showSource = false,
}: WerdCardProps) {
  return (
    <div
      className="
        relative rounded-xl p-6 
        bg-[#0b0b0d] 
        border border-white/10 
        shadow-[0_4px_12px_rgba(0,0,0,0.4)]
        hover:shadow-[0_6px_18px_rgba(0,0,0,0.55)]
        transition-shadow
      "
    >
      {/* Chrome accent + favorite */}
      <div className="flex items-center justify-between mb-4">
        <div
          className="
            h-[3px] w-1/2 rounded-full 
            bg-gradient-to-r from-[#e5e7eb] via-[#9bbcff] to-[#c084fc]
            opacity-70
          "
        />

        {showFavorite && (
          <FavoriteToggle isFavorite={isFavorite} onToggle={onToggleFavorite} />
        )}
      </div>

      {/* Werd */}
      <h2 className="font-heading text-2xl text-white tracking-tight">
        {werd}
      </h2>

      {/* Pronunciation */}
      {showPronunciation && pronunciation && (
        <p className="font-body text-white/50 italic text-sm mt-1">
          /{pronunciation}/
        </p>
      )}

      {/* Part of speech */}
      {showPartOfSpeech && part_of_speech && (
        <p className="font-body text-white/40 text-sm mt-1">{part_of_speech}</p>
      )}

      {/* Language */}
      {showLanguage && language && (
        <p className="font-body text-white/40 text-sm mt-1">{language}</p>
      )}

      {/* Tags */}
      {showTags && tags && (
        <WerdTagList
          tags={
            Array.isArray(tags)
              ? (tags as string[])
              : (tags as string).split(",")
          }
        />
      )}

      {/* Definition */}
      {showDefinition && (
        <p className="font-body text-white/80 mt-4 leading-relaxed">
          {definition}
        </p>
      )}

      {/* Source */}
      {showSource && source && (
        <p className="font-body text-white/40 text-xs mt-4">Source: {source}</p>
      )}
    </div>
  );
}
