# WerdNerd Style Guide

A focused visual system for consistent, fast decisions.

## 1) Brand Vibe

Moody minimalism with colorful weirdness.

- Dark, calm foundations
- Bold, expressive accents
- Clear typography hierarchy
- Playful but readable interactions

## 2) Design Tokens

### Colors

- `bg-main`: `#0B0B0D`
- `bg-elevated`: `#111113`
- `bg-subtle`: `#1A1A1D`
- `text-primary`: `#F5F5F7`
- `text-muted`: `#CFCFD3`
- `border-subtle`: `rgba(255,255,255,0.06)`

Accent set:

- `accent-pink`: `#FF6EC7`
- `accent-blue`: `#6ECFFF`
- `accent-gold`: `#FFD86E`
- `accent-green`: `#6EFFC7`
- `accent-purple`: `#C76EFF`

Primary accent gradient:

```css
linear-gradient(90deg, #FF6EC7, #6ECFFF, #FFD86E, #6EFFC7, #C76EFF)
```

Rule: gradient is for emphasis (headings/buttons/highlights), not full-page backgrounds.

## 3) Typography

Headings:

- Preferred: `Space Grotesk` (or equivalent expressive sans)
- Weight: `600-800`
- Tight line-height, slightly reduced letter-spacing on large titles

Body:

- Preferred: `Poppins`
- Weight: `400-500`
- Line-height around `1.6`

## 4) Spacing, Radius, Shadow

- Spacing rhythm: `4, 8, 12, 16, 24, 32`
- Card radius: `8px`
- Pill radius: `9999px`
- Elevated shadow: `0 18px 45px rgba(0,0,0,0.6)`

## 5) Component Rules

### Cards

- Dark elevated surface
- Subtle 1px border
- Mild radius
- Hover: tiny lift/scale (`~1.02`) + subtle glow

### Buttons

- Dark base surface
- Gradient or bright accent text/border
- Smooth `200-300ms` transitions
- Hover should brighten slightly, not explode

### Sections

- One strong focal point per section
- Keep copy concise
- Preserve generous breathing room

## 6) Motion Rules

- Use motion to signal feedback and hierarchy.
- Avoid constant motion or distracting loops.
- Default easing: `ease-in-out`, duration `200-300ms`.

## 7) Content Tone (UI Copy)

- Confident
- Playful
- Slightly mysterious
- Brief and punchy
- Avoid over-explaining

## 8) Do / Do Not

Do:

- Keep contrast high.
- Let typography carry personality.
- Use color intentionally.

Do not:

- Overuse gradients.
- Fill screens with competing accents.
- Sacrifice readability for style.

---

If a design choice is unclear: choose the cleaner, calmer option first, then add one bold accent moment.
