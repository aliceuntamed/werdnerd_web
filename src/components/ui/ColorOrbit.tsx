import React from "react";

interface ColorOrbitProps {
  size?: number;
  height?: number;
  colors?: string[];
  speed?: number;
  className?: string;
}

export const ColorOrbit: React.FC<ColorOrbitProps> = ({
  size = 100,
  height = 150,
  speed = 20,
  colors = [
    "180, 180, 190", // chrome silver
    "120, 170, 255", // ice blue
    "90, 130, 255", // electric blue
    "120, 100, 255", // violet blue
    "160, 120, 255", // soft violet
    "190, 140, 255", // chrome purple
    "110, 110, 160", // deep chrome
    "100, 140, 200", // steel blue
    "150, 180, 230", // mist blue
    "220, 220, 240", // soft chrome white
  ],
  className = "",
}) => {
  const quantity = colors.length;
  const translateZ = size + height;

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
    >
      <div
        className="absolute top-1/4 left-1/2"
        style={{
          width: `${size}px`,
          height: `${height}px`,
          transformStyle: "preserve-3d",
          transform: `perspective(1000px)`,
          animation: `orbit-rotate ${speed}s linear infinite`,
          marginLeft: `-${size / 2}px`,
        }}
      >
        {colors.map((rgb, index) => (
          <div
            key={index}
            className="absolute inset-0 rounded-xl border-2 overflow-hidden"
            style={{
              borderColor: `rgba(${rgb})`,
              transform: `
                rotateY(${(360 / quantity) * index}deg)
                translateZ(${translateZ}px)
              `,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `radial-gradient(circle,
                  rgba(${rgb}, 0.15) 0%,
                  rgba(${rgb}, 0.45) 70%,
                  rgba(${rgb}, 0.75) 100%
                )`,
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes orbit-rotate {
          from {
            transform: perspective(1000px) rotateX(-15deg) rotateY(0deg);
          }
          to {
            transform: perspective(1000px) rotateX(-15deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};
