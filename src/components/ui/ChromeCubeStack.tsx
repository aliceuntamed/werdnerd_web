import React, { useState, useRef } from "react";

interface ChromeCubeStackProps {
  className?: string;
  scale?: number; // default 1
}

export const ChromeCubeStack: React.FC<ChromeCubeStackProps> = ({
  className = "",
  scale = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [light, setLight] = useState(0.5); // 0–1 brightness factor

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const intensity = x / rect.width; // 0 → left, 1 → right

    // clamp + soften
    setLight(0.4 + intensity * 0.4);
  };

  const handleMouseLeave = () => {
    setLight(0.5); // reset to neutral
  };

  // Chrome palette
  const chromeFace = "rgb(185,185,200)";
  const chromeSide = "rgb(130,170,255)";
  const chromeTop = "rgb(165,130,255)";
  const chromeGlow = "rgba(165,130,255,0.8)";

  // Utility to generate cube columns
  const renderColumn = (x: number) => (
    <div
      className="absolute flex flex-col gap-[30px]"
      style={{
        transform: `translate(calc(-70px * ${x}), 0px)`,
      }}
    >
      {[3, 2, 1].map((i) => (
        <span
          key={i}
          className="relative block w-[50px] h-[50px] transition-all duration-500"
          style={{
            background: chromeFace,
            filter: `brightness(${light})`,
            zIndex: i,
          }}
        >
          {/* Left bevel */}
          <span
            className="absolute left-[-40px] top-0 h-full w-[40px] transition-all duration-500"
            style={{
              background: chromeSide,
              transformOrigin: "right",
              transform: "skewY(45deg)",
              filter: `brightness(${light - 0.1})`,
            }}
          />

          {/* Top bevel */}
          <span
            className="absolute left-0 top-[-40px] w-full h-[40px] transition-all duration-500"
            style={{
              background: chromeTop,
              transformOrigin: "bottom",
              transform: "skewX(45deg)",
              filter: `brightness(${light + 0.1})`,
            }}
          />

          {/* Hover glow */}
          <span
            className="absolute inset-0 transition-all duration-0 pointer-events-none"
            style={{
              boxShadow: `0 0 0px transparent`,
            }}
          />

          <style>{`
            span:hover {
              background: ${chromeGlow};
              filter: brightness(1.2);
            }
            span:hover::before,
            span:hover::after {
              background: ${chromeGlow};
              filter: brightness(1.2);
            }
          `}</style>
        </span>
      ))}
    </div>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${className}`}
      style={{
        transform: `scale(${scale}) skewY(-20deg)`,
      }}
    >
      {/* Cube stack container */}
      <div className="relative" style={{ top: "-80px" }}>
        {/* Cube 1 */}
        <div className="relative z-[2]">
          {renderColumn(-1)}
          {renderColumn(0)}
          {renderColumn(1)}
        </div>

        {/* Cube 2 */}
        <div
          className="relative z-[1]"
          style={{ transform: "translate(-60px, -60px)" }}
        >
          {renderColumn(-1)}
          {renderColumn(0)}
          {renderColumn(1)}
        </div>

        {/* Cube 3 */}
        <div
          className="relative z-[3]"
          style={{ transform: "translate(60px, 60px)" }}
        >
          {renderColumn(-1)}
          {renderColumn(0)}
          {renderColumn(1)}
        </div>
      </div>
    </div>
  );
};
