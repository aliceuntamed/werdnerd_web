import React from "react";

declare module "lucide-react" {
  export interface LucideIconProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export const Heart: React.FC<LucideIconProps>;
  export const Feather: React.FC<LucideIconProps>;
  export const Shuffle: React.FC<LucideIconProps>;
}
