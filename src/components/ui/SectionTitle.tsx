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
