import React from "react";

interface ChromeSkyProps {
  density?: "low" | "medium" | "high";
  className?: string;
}

export const ChromeSky: React.FC<ChromeSkyProps> = ({
  density = "medium",
  className = "",
}) => {
  // Star counts per layer based on density
  const densityMap = {
    low: { layer1: 60, layer2: 40, layer3: 25 },
    medium: { layer1: 120, layer2: 80, layer3: 40 },
    high: { layer1: 200, layer2: 140, layer3: 80 },
  };

  const { layer1, layer2, layer3 } = densityMap[density];

  // Chrome palette
  const chromeColors = [
    "180,180,190", // chrome silver
    "120,170,255", // ice blue
    "160,120,255", // soft violet
  ];

  // Generate random star positions
  const generateStars = (count: number) =>
    Array.from({ length: count }).map(() => {
      const x = Math.random() * 2000;
      const y = Math.random() * 2000;
      const color =
        chromeColors[Math.floor(Math.random() * chromeColors.length)];
      return `${x}px ${y}px rgb(${color})`;
    });

  const stars1 = generateStars(layer1).join(", ");
  const stars2 = generateStars(layer2).join(", ");
  const stars3 = generateStars(layer3).join(", ");

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-[#0b0d12] to-[#050507]" />

      {/* Parallax star layers */}
      <div
        className="absolute inset-0 animate-[skyMove_120s_linear_infinite]"
        style={{
          background: "transparent",
          boxShadow: stars1,
        }}
      />

      <div
        className="absolute inset-0 animate-[skyMove_180s_linear_infinite]"
        style={{
          background: "transparent",
          boxShadow: stars2,
        }}
      />

      <div
        className="absolute inset-0 animate-[skyMove_240s_linear_infinite]"
        style={{
          background: "transparent",
          boxShadow: stars3,
        }}
      />

      {/* Keyframes */}
      <style>{`
        @keyframes skyMove {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
    </div>
  );
};
