interface TagProps {
  label: string;
  index?: number;
  onClick?: () => void;
  className?: string;
  active?: boolean;
  size?: "sm" | "md";
}

const chromeGradients = [
  "linear-gradient(135deg, #667eea, #764ba2)", // violet chrome
  "linear-gradient(135deg, #f093fb, #f5576c)", // pink chrome
  "linear-gradient(135deg, #4facfe, #00f2fe)", // blue chrome
  "linear-gradient(135deg, #43e97b, #38f9d7)", // green chrome
  "linear-gradient(135deg, #fa709a, #fee140)", // sunrise chrome
  "linear-gradient(135deg, #e0e0e0, #757575)", // silver chrome
  "linear-gradient(135deg, #bdc3c7, #2c3e50)", // metallic chrome
];

export function Tag({
  label,
  index = 0,
  onClick,
  className = "",
  active = false,
  size = "md",
}: TagProps) {
  const gradient = chromeGradients[index % chromeGradients.length];

  const sizeClasses =
    size === "sm" ? "px-2.5 py-0.5 text-[10px]" : "px-3 py-1 text-xs";

  const baseClasses = `
    inline-flex items-center justify-center
    rounded-full font-heading text-white
    border border-white/10 shadow-sm
    transition-all duration-200
    hover:opacity-90
    ${sizeClasses}
    ${active ? "ring-2 ring-white/40 scale-[1.05]" : ""}
  `;

  const style = {
    background: gradient,
    boxShadow: active
      ? "0 0 12px rgba(255,255,255,0.25)"
      : "0 0 4px rgba(0,0,0,0.25)",
  };

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={`${baseClasses} cursor-pointer ${className}`}
        style={style}
      >
        {label}
      </button>
    );
  }

  return (
    <span className={`${baseClasses} ${className}`} style={style}>
      {label}
    </span>
  );
}
