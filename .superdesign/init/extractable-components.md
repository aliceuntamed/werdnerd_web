# Extractable Components

## Navigation

- Source: `src/components/Navigation/Navigation.tsx`
- Category: layout
- Description: Absolute top navigation with WerdNerd brand, primary links, auth action, mobile menu, and chrome underline.
- Extractable props: activeItem (string, default: "submit"), isOpen (boolean, default: false), isLoggedIn (boolean, default: false)
- Hardcoded: brand text, nav labels, spark glyph, SVG menu icons, CSS classes.

## Footer

- Source: `src/components/layout/Footer.tsx`
- Category: layout
- Description: Global WerdNerd footer with newsletter, directory, social buttons, and badges.
- Extractable props: none for current drafts.
- Hardcoded: all link labels, newsletter copy, social icons, badges, CSS classes.

## Button

- Source: `src/components/ui/Button.tsx`
- Category: basic
- Description: Rounded chrome-text button.
- Extractable props: disabled (boolean, default: false)
- Hardcoded: all styling classes.

## Tag

- Source: `src/components/ui/Tag.tsx`
- Category: basic
- Description: Gradient chrome pill used for categories/tags.
- Extractable props: active (boolean, default: false), label (string, default: "rare")
- Hardcoded: gradient palette and sizing classes.
