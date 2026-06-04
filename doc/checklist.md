# todo checklist

## new (2026-05-18)

- [ ] fix Loader.tsx and LoadingScreen.tsx

## older

## Build

- [ ] a 404 page
- [ ] fun facts
- [ ] favorites system

- [ ] A “Back to Top” floating button

### Optional Enhancements

- (Optional) build **multiple variants**
- Smooth scroll to sections

## Supabase integration

- A fully typed Supabase client - So your queries get full TS inference.
- create the SQL for inserting your first categories
- write the Supabase queries for fetching categories
- A Database type that matches your entire schema - (Generated from Supabase)
- create a global WerdContext so you don’t pass props down manually
- typed update/delete functions are the next step.
  - hooks like
    - useWerds()
    - useFavorites()
    - useFunFacts()
    - useCategories()
    - server actions for adding words
      - useWerds()
      - useRandomWerd()
      - useWOTD()
      - useSubmitWerd()
      - useLeaderboard()
  - Showing words from the same category

## component specific

### Header

- redesign logo
- login signup spacing

### Homepage

- login / signup module
  - A user preferences schema stored in Supabase
  - Add an is_admin Flag
  - profile page
    - favorites
      - refresh favorites after toggle
      - fetch favorites on mount
      - a toggleFavorite() helper
    - a settings page
      - dark mode component switch
        - A token‑driven theme panel (light/dark/chrome modes)
  - help you wire up Supabase Auth cleanly
- WOTD
  - WOTD Card
    - A slightly thicker chrome accent bar for WOTD only (3px → 4px)
  - WOTD logic
  - wire WOTD to Supabase
  - Make WOTD dynamic
    - We'll pull a random word from Supabase:
      - werds table
      - word_of_the_day table (optional)
      - or a serverless function that rotates daily
- Spin the Vault
  - a metallic gradient overlay
  - a subtle shine that moves with the animation
  - wire Spin the Vault to random DB entries
  - add a SpinTheVault.css that isolates all vault animations
- Curated Picks
  - Curated Picks Card
  - wire Curated Picks to curated flag in `werds`
- Quick Browse
  - wire Quick Browse to categories

### Werd Vault

- ChromeSky background
  - ChromeSky with twinkling stars
  - ChromeSky with shooting stars
- WerdCard grid
- A hover reveal that shows 2–3 related tags\*
- A flip animation that reveals synonyms on the back\*
- Add chrome borders
- A Werd detail page or module
- a tag explorer page
  - A TagSelector type - For your chrome‑cinematic tag picker.
  - Tag.tsx component
  - WerdTagList and WerdTagCloud
  - a WerdVault tag cloud
- A search bar
  - a WerdVault fuzzy search + filter system
  - Make the search bar functional
    - You can wire it to:
      - filter words on the Word Vault page
      - navigate to the Word Index page
      - query Supabase for matching words
    - search bar glow on hover

### Submit Werd

- Add Werd Submission page
- add category selection to Submit a Werd
- recent community gems
- A SubmitWerdPayload type - For your form.

### Games

- Wordle
- Word Search
- Hangman
- codenames
- trivia
- Games Page
  - refine the GamesPage animations (hover parallax, soft tilt, etc.)
- build a leaderboard
  - Leaderboard → insert/update user scores

### Fun Facts

- wire Fun Facts to random funfact query
- Funfacts API
  - fetch random fun facts from funfacts

### Tailwind theme

- Create Tailwind classes for your theme (so you can drop them right into your code)
  - create reusable Tailwind classes for shimmer, glow, chrome edges
- map your chrome gradients to Tailwind utilities
- add custom animations to tailwind.config.js
- unify your theme.ts → Tailwind → globals.css pipeline
- Create your global layout (Navigation + Outlet + Footer)
- a components.css for shared UI patterns
- a layout.css for page structure
- a chrome-effects.css dedicated to your aesthetic
- create your design tokens (colors, fonts, spacing)
- Build a theme.ts file for your project
- Build a full style guide - (colors, fonts, spacing, components)
- Redesign your header, footer, cards, buttons

### Routes

- add route transitions (fade, slide, chrome shimmer)
  - add per‑page transition styles
    - fade‑in
    - slide‑up
    - parallax scroll
    - subtle video overlay shimmer
    - shimmer highlight
    - Chrome Curtain — a vertical chrome wipe
    - Chrome Iris — circular expansion with chrome edges
    - Chrome Ripple — metallic ripple from the nav link you clicked
    - Chrome Beam — thin laser‑like chrome line sweeping across
    - Chrome Warp — distortion shimmer like heat haze
- integrate PageWrapper into MainLayout
- build a ProtectedRoute wrapper for future features
- Set up React Router
  - A dedicated route for individual WerdCards - (/werd/:slug)
  - A dedicated route for the werd of the Day

### Files

- clean up your Vite config
- SEO metadata //(using react-helmet-async)
- a prettier.config.js
- a .eslintignore
- a .prettierignore
- VS Code settings for auto‑format on save
- a script in package.json like "lint": "eslint . --ext .ts,.tsx"

### Tasks

- [ ] “Start dev server + open browser”
- [ ] “Run lint + fix”
- [ ] “Build + preview”
- [ ] “Auto‑format the entire project”
- [ ] “Generate TypeScript types from Supabase”
- [ ] optimize your build for Vercel

## Routine Checks / Confirm pre-deploy

- [ ] update your WOTD table schema
- [ ] update your navigation - ensure everything loads correctly
