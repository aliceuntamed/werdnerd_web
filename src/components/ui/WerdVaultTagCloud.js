import { jsx as _jsx } from "react/jsx-runtime";
// src/components/WerdVaultTagCloud.tsx
import { Tag } from "./Tag";
export function WerdVaultTagCloud({
  tags,
  activeTag = null,
  onSelect,
  className = "",
}) {
  return _jsx("div", {
    className: `flex flex-wrap gap-3 ${className}`,
    children: tags.map((tag, i) =>
      _jsx(
        Tag,
        {
          label: tag,
          index: i,
          onClick: () => onSelect?.(tag),
          className: `
            cursor-pointer transition-all
            ${activeTag === tag ? "ring-2 ring-white/40" : ""}
          `,
        },
        tag,
      ),
    ),
  });
}
