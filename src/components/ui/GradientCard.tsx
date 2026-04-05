import React from "react";

interface GradientCardProps {
  title?: string;
  subtitle?: string;
  accent?: string;
  className?: string;
}

export const GradientCard: React.FC<GradientCardProps> = ({
  title = "Popular this month",
  subtitle = "Powered By",
  accent = "Uiverse",
  className = "",
}) => {
  return (
    <div
      className={`
        relative w-[190px] h-[254px] cursor-pointer rounded-lg p-3 flex flex-col justify-end gap-3
        bg-black overflow-hidden
        ${className}
      `}
    >
      {/* Outer chrome gradient frame */}
      <div
        className="
          absolute inset-0 -left-[5px] m-auto w-[200px] h-[264px] rounded-[10px]
          bg-gradient-to-br from-[#e81cff] to-[#40c9ff]
          transition-transform duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
          -z-10
        "
      />

      {/* Glow layer */}
      <div
        className="
          absolute inset-0 -z-[1]
          bg-gradient-to-br from-[#fc00ff] to-[#00dbde]
          scale-[0.95] blur-[20px]
          transition-all duration-300
          group-hover:blur-[30px]
        "
      />

      <p className="text-[20px] font-bold capitalize">{title}</p>
      <p className="text-[14px]">{subtitle}</p>
      <p className="text-[14px] font-semibold text-[#e81cff]">{accent}</p>
    </div>
  );
};
