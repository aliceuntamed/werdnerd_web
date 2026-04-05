import React from "react";
import { Heart } from "lucide-react";

interface FavoriteButtonProps {
  size?: number;
  label?: string;
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  size = 30,
  label = "favorite",
  className = "",
}) => {
  return (
    <button
      className={`
        relative flex items-center justify-center
        w-[50px] h-[50px] rounded-xl
        bg-transparent border-none cursor-pointer
        group
        ${className}
      `}
    >
      {/* Icon */}
      <Heart
        size={size}
        className="
          text-white transition-transform duration-200
          group-hover:scale-110
          group-hover:text-purple-300
        "
        strokeWidth={1.75}
      />

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
