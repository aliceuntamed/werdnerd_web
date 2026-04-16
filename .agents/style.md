1. Style guide
   Colors
   Base

- bg-main: #0B0B0D
- bg-elevated: #111113
- bg-subtle: #1A1A1D
- text-primary: #F5F5F7
- text-muted: #CFCFD3
- border-subtle: rgba(255,255,255,0.06)
  Accents (rainbow chrome)
- accent-pink: #FF6EC7
- accent-blue: #6ECFFF
- accent-gold: #FFD86E
- accent-green: #6EFFC7
- accent-purple: #C76EFF
  Gradients
- chrome-horizontal:
  const chromeGradient = 'linear-gradient(90deg,#FF6EC7,#6ECFFF,#FFD86E,#6EFFC7,#C76EFF)';


Use gradients on text, buttons, and key highlights—not backgrounds.

Typography
Headings

- Display font: something like "Space Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- Weights: 600–800
- Style: tight line-height, slightly negative letter-spacing for big titles
  Body
- "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- Weights: 400–500
- Line-height: 1.6

Spacing & Radius

- Spacing scale: 4, 8, 12, 16, 24, 32
- Border radius: 0.5rem (8px) for cards, 9999px for pills/buttons
- Shadows: subtle, e.g. 0 18px 45px rgba(0,0,0,0.6)

Core components (visual rules)
werd card

- Background: bg-elevated
- Border: border-subtle
- Radius: 0.5rem
- Padding: 1.25rem–1.5rem
- werd: heading font, large, optional gradient text
- Definition: Poppins, muted text
- Hover: slight scale, subtle glow, maybe gradient on werd only
  Primary button
- Background: bg-elevated
- Text: chrome gradient
- Shape: pill
- Hover: slightly brighter gradient, soft shadow

2. Tailwind config extension
   In tailwind.config.cjs or tailwind.config.ts:
   /** @type {import('tailwindcss').Config} \*/
   module.exports = {
   content: ['./index.html', './src/**/\*.{ts,tsx,js,jsx}'],
   theme: {
   extend: {
   colors: {
   bg: {
   main: '#0B0B0D',
   elevated: '#111113',
   subtle: '#1A1A1D',
   },
   text: {
   primary: '#F5F5F7',
   muted: '#CFCFD3',
   },
   border: {
   subtle: 'rgba(255,255,255,0.06)',
   },
   accent: {
   pink: '#FF6EC7',
   blue: '#6ECFFF',
   gold: '#FFD86E',
   green: '#6EFFC7',
   purple: '#C76EFF',
   },
   },
   fontFamily: {
   heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
   body: ['"Poppins"', 'system-ui', 'sans-serif'],
   },
   boxShadow: {
   'soft-elevated': '0 18px 45px rgba(0,0,0,0.6)',
   },
   borderRadius: {
   card: '0.5rem',
   },
   backgroundImage: {
   'chrome-horizontal':
   'linear-gradient(90deg,#FF6EC7,#6ECFFF,#FFD86E,#6EFFC7,#C76EFF)',
   },
   },
   },
   plugins: [],
   };



3. Useful Tailwind utility patterns
Page background
<div class="min-h-screen bg-bg-main text-text-primary font-body">


werd card

<div
  class="bg-bg-elevated border border-border-subtle rounded-card p-5 shadow-soft-elevated transition-transform transition-shadow duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg"
>
  <h2 class="font-heading text-2xl mb-2 bg-chrome-horizontal bg-clip-text text-transparent">
    Eccedentesiast
  </h2>
  <p class="text-text-muted text-sm">
    Someone who hides pain behind a smile.
  </p>
</div>


Primary button
<button
class="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-bg-elevated border border-border-subtle text-sm font-medium text-text-primary hover:bg-bg-subtle transition-colors"

>   <span class="bg-chrome-horizontal bg-clip-text text-transparent">

    Spin the Vault

  </span>
</button>



4. theme.ts design tokens
   In src/theme.ts:
   export const theme = {
   colors: {
   bg: {
   main: '#0B0B0D',
   elevated: '#111113',
   subtle: '#1A1A1D',
   },
   text: {
   primary: '#F5F5F7',
   muted: '#CFCFD3',
   },
   border: {
   subtle: 'rgba(255,255,255,0.06)',
   },
   accent: {
   pink: '#FF6EC7',
   blue: '#6ECFFF',
   gold: '#FFD86E',
   green: '#6EFFC7',
   purple: '#C76EFF',
   },
   gradients: {
   chromeHorizontal:
   'linear-gradient(90deg,#FF6EC7,#6ECFFF,#FFD86E,#6EFFC7,#C76EFF)',
   },
   },
   typography: {
   heading: '"Space Grotesk", system-ui, sans-serif',
   body: '"Poppins", system-ui, sans-serif',
   },
   radius: {
   card: '0.5rem',
   pill: '9999px',
   },
   shadow: {
   softElevated: '0 18px 45px rgba(0,0,0,0.6)',
   },
   spacing: {
   xs: '0.25rem',
   sm: '0.5rem',
   md: '0.75rem',
   lg: '1rem',
   xl: '1.5rem',
   '2xl': '2rem',
   },
   };

You can import this in components when you need inline styles or to keep non-Tailwind bits consistent.

    ______________________

🎨 THE CORE VIBE: “Moody Minimalism With Pops of Weird”
Think of it like:

- a dark gallery
- with bold, colorful werd‑art pieces
- each werd is a little creature with personality
- the UI stays out of the way
- the typography does the talking

🌑 1. Color Palette (Dark, Moody, Chrome‑Accented)
Base Backgrounds

- #0B0B0D — near‑black with a hint of blue
- #111113 — charcoal neutral
- #1A1A1D — soft dark gray

  Primary Text

- #F5F5F7 — soft white
- #CFCFD3 — muted gray for secondary text
  Accent Colors
  for headings, buttons, highlights:
- Chrome Pink: #FF6EC7
- Chrome Blue: #6ECFFF
- Chrome Gold: #FFD86E
- Chrome Green: #6EFFC7
- Chrome Purple: #C76EFF
  Gradient Style
  linear-gradient(90deg,
  #FF6EC7,
  #6ECFFF,
  #FFD86E,
  #6EFFC7,
  #C76EFF
  )

But used only on:

- headings
- buttons
- hover states
- special werds

🔤 2. Typography (Bold, Fun, Readable)
Headings (your personality):

- Clash Display (bold, geometric, modern)
- Satoshi Black (minimalist but punchy)
  Pick one for all headings.
  Body Text:
- Poppins Regular / Medium

Use:

- Heading font for the werd
- Poppins for definition
- Slight letter‑spacing for mood

🧩 3. Layout Style (Minimalist, Spacious, Intentional)
Spacing

- Lots of breathing room
- 2–3 consistent spacing units
- No clutter
- colorful 1-3px borders
  Cards
- Dark background (#111113)
- Soft rounded corners (6–10px)
- Thin 1px border in rgba(255,255,255,0.05)
- Subtle shadow for depth
- Chrome gradient on hover for the werd only
  Sections
- Full‑width dark panels
- Big, bold section titles
- Minimal text
- One focal point per section

✨ 4. Interaction Style (Moody + Delightful)
Hover Effects

- subtle scale (1.02)
- chrome gradient text reveal
- soft glow (0 0 12px rgba(255,255,255,0.1))
  Buttons
- dark rectangle button with slightly rounded corners
- chrome gradient text
- chrome gradient or vibrant single colored borders
- hover: gradient becomes slightly brighter
- hover: color change
  Transitions
- slow, smooth (200–300ms)
- ease‑in‑out
- nothing bouncy or chaotic

🗣️ 5. Tone of Voice (Quirky, Bold, Minimal werds)

“An intriguing dive into a werd carnival for weirdos.”

The tone should be:

- confident
- playful
- a little mysterious
- short sentences
- no over‑explaining

Werd Nerd theme guide
A moody, minimalist playground of strange vocabulary, lit by bold chrome gradients and expressive typography. Clean layouts, dark backgrounds, and quirky-but-readable headings create a dramatic, intriguing atmosphere — a werd carnival for weirdos who love language.

Example text:

- "Curating the curious, the obscure, and the delightfully polysyllabic. Your daily dose of linguistic levity." (footer)
- "Confessions of a Logophile: Welcome to my digital sanctuary of oddities.
  I'm the creator of WerdNerd, a project born from a lifelong obsession with the "mumpsimus" and "floccinaucinihilipilification" of the English language.
  While others collect stamps or vintage coins, I collect syllables. I believe every "mellifluous" sound and "petrichor" scent deserves a place to be celebrated. This site is my personal cabinet of linguistic curiosities, shared with fellow nerds who find joy in the "tintinnabulation" of a well-placed werd." (about)
- "A curated vault for the logophile, the quirky, and the unusual." (werdvault)
- "The Curious Collection:
  Handpicked gems for the discerning werd-nerd." (curated)
- "Spin the Vault
  Feeling lucky? Let the slots decide your next favorite werd."
- "Contribute a werd
  Found a werd that makes your brain tingle? Share it with the WerdNerd community."
  "Recent Community Gems:
  Suggest a werd"
- "Visual Lexicon
  Where art meets etymology. Vivid previews of our full gallery."
