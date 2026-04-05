import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface FavoriteToggleProps {
  /** Controlled state: parent passes true/false */
  isFavorite?: boolean;

  /** Callback when toggled */
  onToggle?: (newValue: boolean) => void;

  /** Icon size */
  size?: number;

  /** Optional label on hover */
  label?: string;

  /** Additional styling */
  className?: string;
}

export const FavoriteToggle: React.FC<FavoriteToggleProps> = ({
  isFavorite,
  onToggle,
  size = 28,
  label = "favorite",
  className = "",
}) => {
  // If controlled: internal state mirrors parent
  // If uncontrolled: internal state manages itself
  const [internalFav, setInternalFav] = useState<boolean>(isFavorite ?? false);

  // Sync internal state when parent updates controlled value
  useEffect(() => {
    if (typeof isFavorite === "boolean") {
      setInternalFav(isFavorite);
    }
  }, [isFavorite]);

  const handleToggle = () => {
    // Update internal state (for uncontrolled mode)
    setInternalFav(!internalFav);

    // Notify parent (for controlled mode)
    if (onToggle) {
      onToggle(!internalFav);
    }
  };

  return (
    <button
      onClick={handleToggle}
      aria-pressed={internalFav}
      className={`
        relative flex items-center justify-center
        w-[50px] h-[50px] rounded-xl
        bg-transparent cursor-pointer border-none
        group transition-all
        ${className}
      `}
    >
      {/* Outline (off) */}
      {!internalFav && (
        <Heart
          size={size}
          strokeWidth={1.75}
          className="
            text-white transition-all duration-200
            group-hover:scale-110
            group-hover:text-purple-300
          "
        />
      )}

      {/* Filled (on) */}
      {internalFav && (
        <Heart
          size={size}
          strokeWidth={1.75}
          className="
            text-purple-300 fill-purple-300
            transition-all duration-200 scale-110
          "
        />
      )}

      {/* Hover label */}
      <span
        className="
          absolute top-[115%] text-sm text-white opacity-0 invisible
          transition-all duration-200
          group-hover:opacity-100 group-hover:visible group-hover:top-[105%]
        "
      >
        {label}
      </span>
    </button>
  );
};
