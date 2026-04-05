interface LoaderProps {
  color1?: string;
  color2?: string;
  size?: number;
  speed?: number;
  className?: string;
}

export default function Loader({
  color1 = "#00CFFF",
  color2 = "#3A6BFF",
  size = 120,
  speed = 3,
  className = "",
}: LoaderProps) {
  return (
    <div
      className={`flex items-center justify-center w-full h-full ${className}`}
    >
      <style>{`
              .loader {
                  width: ${size}px;
                  height: ${size}px;
              }
  
              .loader__eye1,
              .loader__eye2,
              .loader__mouth1,
              .loader__mouth2 {
                  animation-duration: ${speed}s;
                  animation-iteration-count: infinite;
                  animation-timing-function: ease-in-out;
              }
  
              .loader__eye1,
              .loader__eye2 {
                  transform-origin: 64px 64px;
                  animation-name: eye1;
              }
  
              .loader__eye2 { animation-name: eye2; }
  
              .loader__mouth1 { animation-name: mouth1; }
  
              .loader__mouth2 {
                  animation-name: mouth2;
                  visibility: hidden;
              }
  
              @keyframes eye1 {
                  from { transform: rotate(-260deg) translate(0,-56px); }
                  50%,60% {
                      transform: rotate(-40deg) translate(0,-56px) scale(1);
                  }
                  to {
                      transform: rotate(225deg) translate(0,-56px) scale(0.35);
                  }
              }
  
              @keyframes eye2 {
                  from { transform: rotate(-260deg) translate(0,-56px); }
                  50% {
                      transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1);
                  }
                  52.5% {
                      transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1,0);
                  }
                  55%,70% {
                      transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1);
                  }
                  to {
                      transform: rotate(150deg) translate(0,-56px) scale(0.4);
                  }
              }
  
              @keyframes mouth1 {
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
                  75%,to { visibility: hidden; }
              }
  
              @keyframes mouth2 {
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
              `}</style>

      <svg viewBox="0 0 128 128" className="loader">
        <defs>
          <clipPath id="loader-eyes">
            <circle
              transform="rotate(-40,64,64) translate(0,-56)"
              r="8"
              cx="64"
              cy="64"
              className="loader__eye1"
            />
            <circle
              transform="rotate(40,64,64) translate(0,-56)"
              r="8"
              cx="64"
              cy="64"
              className="loader__eye2"
            />
          </clipPath>

          <linearGradient id="loader-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>

          <mask id="loader-mask">
            <rect width="128" height="128" fill="url(#loader-grad)" />
          </mask>
        </defs>

        <g
          strokeDasharray="175.93 351.86"
          strokeWidth="12"
          strokeLinecap="round"
        >
          <g>
            <rect
              clipPath="url(#loader-eyes)"
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
                className="loader__mouth1"
              />
              <circle
                transform="rotate(0,64,64)"
                r="56"
                cx="64"
                cy="64"
                className="loader__mouth2"
              />
            </g>
          </g>

          <g mask="url(#loader-mask)">
            <rect
              clipPath="url(#loader-eyes)"
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
                className="loader__mouth1"
              />
              <circle
                transform="rotate(0,64,64)"
                r="56"
                cx="64"
                cy="64"
                className="loader__mouth2"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
