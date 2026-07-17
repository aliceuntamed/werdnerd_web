# WerdNerd Design System for Submit Werd Exploration

WerdNerd is a dark, cinematic digital curiosity cabinet for rare, poetic, peculiar, and delightfully underused words. The page should feel tactile, curious, creator-led, and a little strange without becoming hard to read.

## Product Requirements for Submit Werd

- Add Werd submission page.
- Tag selection.
- Recent community gems.
- Typed submission payload/form flow.
- Include guidance section: "What Makes a Good Vault Word?" with the copy "Here is what we are looking for:" and four criteria:
  - Rare or obscure: Words that most people have never encountered in the wild.
  - Poetically precise: Words that describe something that feels indescribable.
  - Phonically satisfying: Words that are genuinely delightful to say out loud.
  - Emotionally resonant: Words that unlock something true about human experience.

## Visual Identity

- Dark cinematic minimalism.
- Chrome-cinematic atmosphere with rainbow chrome used as edges, divider lines, reflections, glints, and focal highlights.
- Elevated dark cards: near-black surfaces, thin chrome-dust borders, soft shadows, localized glow.
- Glass effects only when layering over environmental motion/backgrounds.
- Weird WerdNerd vibe: curiosity cabinet, archival drawers, specimen tags, marginalia, strange little linguistic artifacts.
- Preserve clarity. No chaotic neon soup; chrome is the spice, not the stew.

## Tokens

```css
--color-ink-black: #0b1117;
--color-deep-werd-teal: #225560;
--color-vault-teal: #306657;
--color-bone-paper: #efefed;
--color-electric-blue: #00c8ff;
--color-acid-fern: #b7ff2a;
--color-bruised-orchid: #7a35ff;
--color-chrome-dust: #aeb9c4;
--color-hot-spectrum: #ff2f92;
--color-spectrum-gold: #ffd400;
--color-spectrum-cyan: #00f0ff;
--color-spectrum-violet: #8b35ff;
--chrome-gradient: linear-gradient(115deg, #303943 0%, #f7fbff 13%, #77838e 24%, #00e5ff 36%, #2f6bff 47%, #8b35ff 58%, #ff2f92 70%, #ffd400 82%, #b7ff2a 91%, #dce5ec 100%);
--chrome-gradient-soft: linear-gradient(115deg, #59636d 0%, #f7fbff 22%, #00d7ff 39%, #7440ff 56%, #ff3d8f 72%, #f4d63b 86%, #aeb9c4 100%);
```

## Typography

- Poppins for body, UI, labels, navigation.
- Kalnia for theatrical page hero moments.
- Milonga for peculiar editorial labels or pull quotes.
- Lancelot only as a rare storybook accent.
- Keep letter spacing at 0 unless matching existing nav micro-labels.

## Layout Principles

- Use full-width dark page bands and constrained inner content.
- Keep the first viewport immediately recognizable as Submit a Werd.
- Favor split or asymmetric layouts for desktop when it helps guide the form flow.
- Mobile should stack cleanly: hero, guidance, form, recent gems.
- Use stable dimensions for form controls, tag chips, cards, and status panels to avoid layout shift.

## Motion and Atmosphere

- Slow atmospheric background movement, parallax depth, subtle light sweeps, chrome shimmer, and small glints are appropriate.
- Avoid multiple unrelated animations on the same element.
- Include reduced-motion fallback assumptions.

## Current Page Baseline

The current page is a simple centered column on a black-to-near-black gradient with chrome-text heading, intro copy, and a form. The redesign directions may add blueprint-required guidance and recent gems while preserving the existing global navigation and footer style.
