# WerdNerd Design System for Games Exploration

WerdNerd is a dark, cinematic digital curiosity cabinet for rare, poetic, peculiar, and delightfully underused words. The Games page should feel like it belongs to the same universe as the Vault and Submit pages, but it can be more kinetic, playful, and strange.

## Product Requirements for Games

- Games page must include the required game set: Boggle, Wordle, Word Search, Hangman, Codenames, Trivia, Brain Teasers.
- Designs may explore custom WerdNerd game names, but should keep the underlying game identity legible.
- Each game should retain a distinct mechanical personality instead of becoming seven identical cards.
- The page should function as a hub: scan games quickly, understand what is playable/coming soon, and choose a game.

## Visual Direction

- Preserve WerdNerd's dark cinematic curiosity-cabinet identity.
- Let this page stand out more than informational pages: games can be more interactive, dimensional, and energetic.
- Explore "inverted" approaches as a serious option: bone-paper/light-chrome panels against dark void, x-ray/inverse tiles, negative-space board surfaces, or a luminous underside while retaining dark global shell/nav.
- Use rainbow chrome as accents, reflections, tile edges, active states, scoreboard rails, magnetic glints, and focal highlights. Avoid coating every large surface in full rainbow.
- Cards/artifacts should feel tactile: game boards, tokens, specimen trays, arcade cabinet controls, puzzle plates, score strips, and movable game pieces.
- Keep readability high. Weird is welcome; muddy is not.

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

- Poppins for body, UI, labels, and navigation.
- Kalnia for theatrical display headings.
- Milonga for peculiar editorial labels and game lore snippets.
- Lancelot only as a rare storybook accent.

## Current Games Page Baseline

The current page renders a centered "Games" title, a small chrome accent bar, and a responsive grid of seven clickable artifacts. Each artifact has a distinct mini form: Boggle tiles, Wordle strip, Word Search grid, Trivia coin, Hangman glyph panel, Brain Teasers interlocking tiles, and Codenames overlapping cards. The route uses the global Navigation and Footer.

## Exploration Goals

- Direction 1 should keep the most recognizable WerdNerd dark/chrome vibe but make the game hub more dimensional and curated.
- Direction 2 should push an inverted/inverse concept while still feeling like WerdNerd.
- Direction 3 should be the boldest: a unique games-specific world with stronger motion, board-game/arcade/lab energy, and more unusual composition.
