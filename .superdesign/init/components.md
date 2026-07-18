# Shared UI Components

Framework: React + TypeScript + Vite. Component style: Tailwind 4 utilities, shadcn/tailwind imports, custom CSS variables.

## `src/components/ui/Button.tsx`

Shared rounded chrome-text button primitive.

```tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-bg-elevated border border-border-subtle text-sm font-medium text-text-primary hover:bg-bg-subtle transition-colors"
    >
      <span className="bg-chrome-horizontal bg-clip-text text-transparent">
        {children}
      </span>
    </button>
  );
}
```

## `src/components/ui/Tag.tsx`

Chrome gradient pill/tag used for werd categories and selectable metadata.

```tsx
interface TagProps {
  label: string;
  index?: number;
  onClick?: () => void;
  className?: string;
  active?: boolean;
  size?: "sm" | "md";
}

const chromeGradients = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)",
  "linear-gradient(135deg, #e0e0e0, #757575)",
  "linear-gradient(135deg, #bdc3c7, #2c3e50)",
];

export function Tag({ label, index = 0, onClick, className = "", active = false, size = "md" }: TagProps) {
  const gradient = chromeGradients[index % chromeGradients.length];
  const sizeClasses = size === "sm" ? "px-2.5 py-0.5 text-[10px]" : "px-3 py-1 text-xs";
  const baseClasses = `
    inline-flex items-center justify-center rounded-full font-heading text-white
    border border-white/10 shadow-sm transition-all duration-200 hover:opacity-90
    ${sizeClasses} ${active ? "ring-2 ring-white/40 scale-[1.05]" : ""}
  `;
  const style = {
    background: gradient,
    boxShadow: active ? "0 0 12px rgba(255,255,255,0.25)" : "0 0 4px rgba(0,0,0,0.25)",
  };

  if (onClick) {
    return (
      <button type="button" onClick={onClick} aria-pressed={active} className={`${baseClasses} cursor-pointer ${className}`} style={style}>
        {label}
      </button>
    );
  }

  return <span className={`${baseClasses} ${className}`} style={style}>{label}</span>;
}
```

## `src/components/ui/GradientCard.tsx`

Small black card with vivid chrome frame and glow.

```tsx
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
    <div className={`relative w-[190px] h-[254px] cursor-pointer rounded-lg p-3 flex flex-col justify-end gap-3 bg-black overflow-hidden ${className}`}>
      <div className="absolute inset-0 -left-[5px] m-auto w-[200px] h-[264px] rounded-[10px] bg-gradient-to-br from-[#e81cff] to-[#40c9ff] transition-transform duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] -z-10" />
      <div className="absolute inset-0 -z-[1] bg-gradient-to-br from-[#fc00ff] to-[#00dbde] scale-[0.95] blur-[20px] transition-all duration-300 group-hover:blur-[30px]" />
      <p className="text-[20px] font-bold capitalize">{title}</p>
      <p className="text-[14px]">{subtitle}</p>
      <p className="text-[14px] font-semibold text-[#e81cff]">{accent}</p>
    </div>
  );
};
```

## `src/components/ui/SectionTitle.tsx`

Chrome gradient section heading.

```tsx
import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="font-heading text-4xl mb-6 bg-chrome-horizontal bg-clip-text text-transparent tracking-tight">
      {children}
    </h2>
  );
}
```

## `src/lib/utils.ts`

Class merge utility used by UI primitives.

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
