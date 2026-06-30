import { useState } from "react";
import { Heart } from "lucide-react";

interface FavoriteToggleProps {
  isFavorite?: boolean;
  onToggle?: (newValue: boolean) => void;
  size?: number;
  label?: string;
  className?: string;
}

export function FavoriteToggle({
  isFavorite,
  onToggle,
  size = 28,
  label = "favorite",
  className = "",
}: FavoriteToggleProps) {
  const [internalFav, setInternalFav] = useState<boolean>(isFavorite ?? false);
  const favorite = isFavorite ?? internalFav;

  function handleToggle() {
    const nextValue = !favorite;

    if (isFavorite === undefined) {
      setInternalFav(nextValue);
    }

    onToggle?.(nextValue);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={favorite}
      aria-label={label}
      className={`
        relative flex h-[50px] w-[50px] items-center justify-center
        rounded-xl border-none bg-transparent
        transition-all group
        ${className}
      `}
    >
      {!favorite && (
        <Heart
          size={size}
          strokeWidth={1.75}
          className="
            text-white transition-all duration-200
            group-hover:scale-110 group-hover:text-purple-300
          "
        />
      )}

      {favorite && (
        <Heart
          size={size}
          strokeWidth={1.75}
          className="
            scale-110 fill-purple-300 text-purple-300
            transition-all duration-200
          "
        />
      )}

      <span
        className="
          invisible absolute top-[115%] text-sm text-white opacity-0
          transition-all duration-200
          group-hover:visible group-hover:top-[105%] group-hover:opacity-100
        "
      >
        {label}
      </span>
    </button>
  );
}
