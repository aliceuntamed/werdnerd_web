# WerdNerd Project Blueprint

> Owner-maintained product and design guidance.
>
> This document defines what WerdNerd is intended to become. It is a source of truth for product direction, required features, visual identity, and future priorities.
>
> ## Agent Rules
>
> - Read this document before making product, feature, or visual-design decisions.
> - Do not edit, reorganize, shorten, or mark items complete in this file unless Stephanie explicitly asks you to edit the blueprint.
> - Current code is the source of truth for implementation reality.
> - This blueprint is the source of truth for product and design intent.
> - Verify implementation status against the current codebase before acting on any backlog item.
> - If current code conflicts with this blueprint, flag the mismatch instead of silently preserving or overwriting it.
> - Do not rebuild an existing feature merely because it appears in the required-feature sections below.

---

## 1. Product Identity

WerdNerd is a dark, cinematic digital curiosity cabinet for rare, poetic, peculiar, and delightfully underused words.

The experience should feel playful, tactile, curious, and a little strange without becoming visually chaotic or difficult to use.

Core product ideas:

- a living WerdVault of unusual words
- discovery through tags, chance encounters, and curated collections
- word games and linguistic play
- community word submissions
- fun facts, etymology, pronunciation, and other language rabbit holes
- a strong creator-led personality rather than a generic dictionary-product voice

### Must Retain

- `Loader.tsx`
- `LoadingScreen.tsx`
- Fun Facts as a WerdNerd content feature

---

## 2. Visual Direction

### Core Aesthetic

- dark cinematic minimalism
- chrome-cinematic atmosphere throughout the experience
- minimalist rainbow-chrome accents, borders, divider lines, and highlights
- elevated cards and containers with shadow-defined depth, thin borders, and subtle surface contrast
- glass effects may be used selectively, but full glassmorphism is not the default card treatment
- most cards should feel flat enough to remain readable while still appearing elevated from the page
- colorful effects should feel embedded in a dark environment rather than turning the full interface bright or pastel

### Motion and Atmosphere

Motion is an important part of WerdNerd's identity and may be used more boldly than in a typical minimal interface.

Prioritize cinematic, environmental motion such as:

- parallax scrolling
- sticky or layered background environments behind scrolling sections
- slow atmospheric background movement
- subtle light sweeps and shimmer highlights
- chrome reflections or moving shine
- depth shifts between foreground and background layers
- soft tilt or perspective response where interaction benefits from it
- route or section transitions
- occasional twinkling, drifting, or shooting-star effects in ChromeSky-style environments

Motion should create atmosphere, depth, discovery, or interaction feedback. Avoid adding several unrelated animations to the same element simply for decoration.

Respect `prefers-reduced-motion` for non-essential motion.

### Surface Guidance

Default elevated surface direction:

- dark or near-black surface
- subtle contrast from the page background
- thin border or chrome-edge treatment
- soft shadow creating separation and depth
- optional localized glow or shimmer for emphasis

Reserve translucent glass surfaces for moments where layering, depth, or a visible moving background makes the transparency meaningful.

### Color Tokens

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

Rainbow chrome is primarily an accent, edge, reflection, highlight, or focal treatment rather than the default fill for large surfaces.

### Typography

- **Poppins**: body copy, UI, navigation, and default headings
- **Kalnia**: hero and theatrical display headings
- **Milonga**: editorial accents and peculiar callouts
- **Lancelot**: rare storybook or editorial accents; use sparingly

Typography should preserve clear hierarchy and legibility before decorative character.

---

## 3. Global Page Shell

### Navigation

Required on all primary pages.

- left aligned: WerdNerd name or icon
- right aligned: primary page links followed by the auth link or signed-in action
- responsive mobile navigation

### Footer

Required on all primary pages.

#### Row 1

##### Column 1

- `WerdNerd`
- `Curating the curious, the obscure, and the delightfully polysyllabic.`
- `Stay Curious`
- `Get a daily dose of linguistic levity sent to your inbox.`
- newsletter form with email input and submit button

##### Column 2

###### Row 1: Directory

**Lexicon**

- The Vault
- Etymology Explorer
- Phonetic Fun
- Daily Fun Fact

**Community**

- Submit a Werd
- Nerd Forum
- Tournaments
- Get in Touch

**Legalese**

- Privacy Policy
- Terms of Service
- Cookie Settings
- Accessibility

###### Row 2: Socials

- Facebook
- Instagram
- GitHub
- Pinterest
- TikTok
- LinkedIn
- WhatsApp

#### Row 2

Centered footer copy:

- `© 2026 WerdNerd. Built with TypeScript and curiosity.`
- retain a playful fictional WerdNerd certification or curation badge, but do not imply a real institutional affiliation or credential
- `100% Organically Curated`

---

## 4. Page Blueprints

### HomePage

Required sections:

1. Hero
2. WOTD
3. Spin the Vault
4. Curated Picks
5. Quick Browse
6. Large Contribute CTA

#### WOTD

- prominently feature a deterministic or editorial Word of the Day
- provide a path to the word's full detail experience

#### Spin the Vault

- random WerdVault discovery powered by database entries
- metallic or chrome-gradient treatment
- subtle moving shine tied to the interaction or result animation
- isolate complex vault-specific animations when doing so improves maintainability

#### Curated Picks

Title direction:

- `The Curious Collection`
- `A curated vault for the logophile, the quirky, and the unusual.`

Requirements:

- six curated Werd cards
- powered by the curated flag in `werds`

#### Quick Browse

Purpose: browse the Vault by instinct or mood.

- tag-based discovery
- maintain the `Pick a shelf by mood` direction
- selecting a tag navigates into the corresponding Vault shelf/filter

Do not add a separate six-card random Vault Preview unless the product direction is intentionally revisited later.

#### Contribute CTA

- large visual CTA leading to Submit a Werd

---

### WerdVault

Required:

- Hero
- functional search bar
- search-bar glow or chrome emphasis on hover/focus
- Werd detail page or detail module
- tag cloud or equivalent tag browser
- show Werds sharing the same tag
- Werd card browsing experience
- dedicated Werd route: `/werd/:slug`

Werd card interaction idea:

- flip animation revealing synonyms on the reverse side

Search and tag filtering should work coherently together where both are active.

---

### About

#### About Section

Heading directions:

- `Meet the nerd`
- `Meet the nerd behind the werds`
- `The Mind Behind WerdNerd`

Feature heading:

- `Confessions of a Logophile`

Creator copy:

> Hi, I’m Stephanie, the human behind WerdNerd. 👽 I’m a designer with a soft spot for life’s peculiarities, especially the strange little wonders hiding in the English language. I built this digital lexicon to be part word vault, part curiosity cabinet, and part excuse to collect and share my favorite oddities.
>
> WerdNerd is a personal passion project born from a lifelong love of words that sparkle, charm, confuse, amuse, and make you pause, grin, and immediately want to tell someone else. If you have a favorite strange, beautiful, or criminally underused word, send it my way. The vault always has room for one more odd little gem.

Badges:

- `Vibrant Spirit`
  - `Infusing color into the dusty corners of grammar.`
- `Curious Mind`
  - `Always hunting for the rarest etymologies.`

Actions:

- `Explore the Vault`
- `Say Hello`

Quote:

> “I have no special talents. I am only passionately curious.” — Albert Einstein

#### Contact Section

- `Have a question or suggestion?`
- `Questions, favorite words, odd discoveries, suspiciously beautiful etymologies: drop them here.`
- `Send it.`
- contact form

---

### SubmitWerd

Required:

- Add Werd submission page
- tag selection
- recent community gems
- typed submission payload and form flow

#### What Makes a Good Vault Word?

`Here is what we are looking for:`

**Rare or obscure**

Words that most people have never encountered in the wild.

**Poetically precise**

Words that describe something that feels indescribable.

**Phonically satisfying**

Words that are genuinely delightful to say out loud.

**Emotionally resonant**

Words that unlock something true about human experience.

---

### GamesPage

Required games:

- Boggle
  - custom WerdNerd game name
- Wordle
  - custom WerdNerd game name
- Word Search
  - custom WerdNerd game name
- Hangman
  - custom WerdNerd game name
- Codenames
  - custom WerdNerd game name
- Trivia
  - custom WerdNerd game name
- Brain Teasers
  - custom WerdNerd game name

Games should share a recognizable WerdNerd visual universe while retaining game-specific mechanics and personality.

---

### Creator's Playground

Purpose: creator-facing and contribution-oriented tools that fit WerdNerd's current product scope.

Tools:

- **Collaborate**
  - contribute discoveries or ideas to the collection
- **Feedback**
  - help improve the WerdNerd experience

Public API access is a future possibility and is not a current Playground requirement.

---

### Auth and User Features

Required product direction:

- login and signup
- settings
- profile page
- favorites

Settings direction:

- dark-mode or theme control
- retain the existing visual toggle direction based on `public/on-off-switch.png` where appropriate

Future theme direction may include token-driven light, dark, and chrome modes.

---

## 5. Content and Discovery Features

Required or intended content systems:

- WOTD
- Fun Facts
- Werd tags
- tag cloud and tag browsing
- fuzzy search and filtering
- favorites
- curated Werds
- random Werd discovery
- related Werds by shared tags

Potential future discovery areas:

- Etymology Explorer
- Phonetic Fun
- Daily Fun Fact destination

---

## 6. Implementation Backlog

> This section is for known work that is not currently complete. Agents must verify the current code before implementing any item.

### Vault and Discovery

- [ ] Implement functional Vault search
  - read the `search` query parameter
  - filter matching Werds
  - connect the visible search bar
  - support search and tag filtering coherently
- [ ] Add fuzzy search and filter behavior where useful
- [ ] Add dedicated Werd detail route at `/werd/:slug`
- [ ] Add a dedicated Word of the Day route or detail destination
- [ ] Add related-Werd discovery based on shared tags
- [ ] Add Werd-card synonym flip interaction

### Data and Supabase

- [ ] Generate a `Database` type from the actual Supabase schema
- [ ] Apply generated database typing to the Supabase client
- [ ] Continue consolidating Supabase access through typed query and mutation helpers
- [ ] Add typed update and delete helpers when editing/admin flows require them
- [ ] Build a typed Submit Werd mutation and `SubmitWerdPayload`
- [ ] Add submission validation and duplicate detection
- [ ] Review and enforce appropriate RLS policies for submissions, favorites, profiles, and user-owned data

### Hooks

Add feature hooks when the related feature needs a reusable data or state boundary:

- [ ] `useFavorites()`
- [ ] `useFunFacts()`
- [ ] `useRandomWerd()`
- [ ] `useWOTD()`
- [ ] `useSubmitWerd()`
- [ ] `useLeaderboard()`

Do not create hooks solely to mirror every query function. Prefer a hook when it manages reusable loading, error, derived-state, or mutation behavior.

### Fun Facts

- [ ] Build or finalize the Fun Facts section
- [ ] Wire Fun Facts to a random or curated `funfacts` query
- [ ] Define the intended Daily Fun Fact destination

### Favorites and Profiles

- [ ] Build the profile page
- [ ] Complete favorites behavior
  - fetch favorites for the signed-in user
  - toggle favorite state
  - refresh or optimistically reconcile state after toggle
- [ ] Add a typed favorites helper or hook
- [ ] Define and implement the minimum user/profile schema actually required by the UI

### Auth and Access

- [ ] Review the existing Supabase Auth flow for production readiness and consistent WerdNerd styling
- [ ] Build `ProtectedRoute` only when a real protected page requires it
- [ ] Add an admin role or `is_admin` field only when an admin workflow is being implemented

### Games

- [ ] Create custom WerdNerd names for the required games
- [ ] Continue refining GamesPage and game-specific animation/feedback states
- [ ] Build leaderboard functionality where it meaningfully improves replayability
  - insert or update user scores
  - define score rules per supported game

### Layout and Design System

- [ ] Consolidate current design tokens and shared styling into a clear CSS-based system
  - `src/styles/theme.css` for color, typography, radius, shadow, and shared theme tokens
  - `src/styles/chrome-effects.css` for shimmer, glow, chrome edges, hover light, parallax helpers, and soft tilt effects
  - `src/styles/layout.css` for reusable page, container, and section structure where shared layout patterns justify it
- [ ] Move current token definitions out of `src/index.css` only as part of the design-system consolidation
- [ ] Map core WerdNerd colors, fonts, and reusable animation tokens into Tailwind 4 theme utilities where useful
- [ ] Add route or page transitions
- [ ] Continue expanding parallax and cinematic environmental motion intentionally across major pages
- [ ] Maintain reduced-motion fallbacks for non-essential animation

Do not create `theme.ts` unless JavaScript or TypeScript code develops a concrete need to consume shared theme values.

### Footer and Global Navigation

- [ ] Update the footer to match the blueprint's complete social list
  - Facebook
  - Instagram
  - GitHub
  - Pinterest
  - TikTok
  - LinkedIn
  - WhatsApp
- [ ] Replace placeholder footer links with real routes, sections, actions, or intentionally disabled future destinations
- [ ] Keep navigation aligned with `src/routes.ts`

### Tooling and Project Hygiene

- [ ] Add and configure Prettier if project-wide formatting automation is desired
  - `prettier.config.js`
  - `.prettierignore`
  - VS Code format-on-save settings
- [ ] Review ESLint flat-config ignore patterns in the ESLint configuration
- [ ] Clean up Vite configuration only where current configuration is redundant or incorrect
- [ ] Add SEO metadata using an approach compatible with the current React/Vite architecture
- [ ] Add a 404 page and catch-all route
- [ ] Review Vercel build and deployment configuration for actual production issues before optimizing

Do not add `.eslintignore`; ESLint flat configuration should own ignore patterns.

---

## 7. Future Ideas and Optional Bets

These ideas are not current implementation requirements.

### Interaction Ideas

- Back to Top floating button
- additional route and section transitions
- experimental ChromeSky environments
  - twinkling stars
  - shooting stars
  - slow atmospheric drift

### Theme and Preferences

- user preferences stored in Supabase when cross-device persistence is genuinely needed
- token-driven theme panel
  - dark mode
  - light mode
  - chrome mode

### Community

- Nerd Forum
- Tournaments
- richer collaboration workflows

### Public API

Potential future read-focused WerdNerd API access for:

- Werds
- tags
- random Werds
- curated content

Do not build public API infrastructure until there is a concrete use case.

### WOTD History

A dedicated WOTD table may be introduced later for:

- scheduled editorial picks
- Word of the Day history
- repeat prevention
- featured-date analytics

Until those needs exist, deterministic daily selection is acceptable.

---

## 8. Working Principles

When making WerdNerd decisions:

1. Preserve the dark cinematic curiosity-cabinet identity.
2. Favor atmosphere and tactile discovery without sacrificing clarity.
3. Use rainbow chrome as a striking accent rather than coating every surface.
4. Let major pages have cinematic environmental motion, especially parallax and layered depth.
5. Keep cards readable, elevated, and shadow-defined by default.
6. Use tags as the primary Werd classification system.
7. Verify code reality before implementing backlog work.
8. Avoid duplicate architecture and speculative abstractions.
9. Build the smallest useful version of a feature, then make it strange and beautiful.
10. Keep future Stephanie's codebase understandable.
