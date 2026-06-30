import { type CSSProperties, useId } from "react";

interface LoaderProps {
  color1?: string;
  color2?: string;
  size?: number;
  speed?: number;
  className?: string;
  label?: string;
}

export default function Loader({
  color1 = "#00CFFF",
  color2 = "#3A6BFF",
  size = 120,
  speed = 3,
  className = "",
  label = "Loading",
}: LoaderProps) {
  const instanceId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const eyesId = `loader-eyes-${instanceId}`;
  const gradientId = `loader-grad-${instanceId}`;
  const maskId = `loader-mask-${instanceId}`;
  const loaderStyle = {
    width: size,
    height: size,
    "--loader-speed": `${speed}s`,
  } as CSSProperties;

  return (
    <div
      className={`flex items-center justify-center w-full h-full ${className}`}
      role="img"
      aria-label={label}
    >
      <style>{`
              .werd-loader__eye1,
              .werd-loader__eye2,
              .werd-loader__mouth1,
              .werd-loader__mouth2 {
                  animation-duration: var(--loader-speed);
                  animation-iteration-count: infinite;
                  animation-timing-function: ease-in-out;
              }
  
              .werd-loader__eye1,
              .werd-loader__eye2 {
                  transform-origin: 64px 64px;
                  animation-name: werd-loader-eye1;
              }
  
              .werd-loader__eye2 { animation-name: werd-loader-eye2; }
  
              .werd-loader__mouth1 { animation-name: werd-loader-mouth1; }
  
              .werd-loader__mouth2 {
                  animation-name: werd-loader-mouth2;
                  visibility: hidden;
              }
  
              @keyframes werd-loader-eye1 {
                  from { transform: rotate(-260deg) translate(0,-56px); }
                  44%,68% {
                      transform: rotate(-40deg) translate(0,-56px) scale(1);
                  }
                  to {
                      transform: rotate(225deg) translate(0,-56px) scale(0.35);
                  }
              }
  
              @keyframes werd-loader-eye2 {
                  from { transform: rotate(-260deg) translate(0,-56px); }
                  44%,56% {
                      transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1);
                  }
                  59% {
                      transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1,0);
                  }
                  62%,68% {
                      transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1);
                  }
                  to {
                      transform: rotate(150deg) translate(0,-56px) scale(0.4);
                  }
              }
  
              @keyframes werd-loader-mouth1 {
                  from {
                      stroke-dasharray: 0 351.86;
                      stroke-dashoffset: 0;
                  }
                  25% {
                      stroke-dasharray: 175.93 351.86;
                      stroke-dashoffset: 0;
                  }
                  50% {
                      stroke-dashoffset: -175.93;
                      visibility: visible;
                  }
                  72%,to { visibility: hidden; }
              }
  
              @keyframes werd-loader-mouth2 {
                  from {
                      visibility: hidden;
                  }
                  50% {
                      visibility: visible;
                      stroke-dashoffset: 0;
                  }
                  to {
                      stroke-dashoffset: -351.86;
                  }
              }

              @media (prefers-reduced-motion: reduce) {
                  .werd-loader__eye1,
                  .werd-loader__eye2,
                  .werd-loader__mouth1,
                  .werd-loader__mouth2 {
                      animation: none;
                  }

                  .werd-loader__eye1 {
                      transform: rotate(-40deg) translate(0,-56px);
                  }

                  .werd-loader__eye2 {
                      transform: rotate(40deg) translate(0,-56px) rotate(-40deg);
                  }
              }
              `}</style>

      <svg
        viewBox="0 0 128 128"
        className="werd-loader"
        style={loaderStyle}
        aria-hidden="true"
      >
        <defs>
          <clipPath id={eyesId}>
            <circle
              transform="rotate(-40,64,64) translate(0,-56)"
              r="8"
              cx="64"
              cy="64"
              className="werd-loader__eye1"
            />
            <circle
              transform="rotate(40,64,64) translate(0,-56)"
              r="8"
              cx="64"
              cy="64"
              className="werd-loader__eye2"
            />
          </clipPath>

          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>

          <mask id={maskId}>
            <rect width="128" height="128" fill={`url(#${gradientId})`} />
          </mask>
        </defs>

        <g
          strokeDasharray="175.93 351.86"
          strokeWidth="12"
          strokeLinecap="round"
        >
          <g>
            <rect
              clipPath={`url(#${eyesId})`}
              width="128"
              height="64"
              fill={color1}
            />
            <g stroke={color1} fill="none">
              <circle
                transform="rotate(180,64,64)"
                r="56"
                cx="64"
                cy="64"
                className="werd-loader__mouth1"
              />
              <circle
                transform="rotate(0,64,64)"
                r="56"
                cx="64"
                cy="64"
                className="werd-loader__mouth2"
              />
            </g>
          </g>

          <g mask={`url(#${maskId})`}>
            <rect
              clipPath={`url(#${eyesId})`}
              width="128"
              height="64"
              fill={color2}
            />
            <g stroke={color2} fill="none">
              <circle
                transform="rotate(180,64,64)"
                r="56"
                cx="64"
                cy="64"
                className="werd-loader__mouth1"
              />
              <circle
                transform="rotate(0,64,64)"
                r="56"
                cx="64"
                cy="64"
                className="werd-loader__mouth2"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
