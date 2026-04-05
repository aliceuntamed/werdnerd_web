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
