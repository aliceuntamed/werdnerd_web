# todo checklist

## new (2026-05-18)

- [ ] fix Loader.tsx and LoadingScreen.tsx

## older

## Build

- [ ] a settings page
  - [ ] dark mode component switch
- [ ] a 404 page
- [ ] login / signup module
  - [ ] user profile page
  - [ ] A user preferences schema stored in Supabase
  - [ ] Add an is_admin Flag
- [ ] A “Back to Top” floating button

- [ ] Wordle
- [ ] Word Search
- [ ] Hangman
- [ ] codenames
- [ ] trivia

- [ ] A Werd detail page or module
- [ ] a WerdVault sidebar\*
- [ ] a tag explorer page
  - [ ] A TagSelector type - For your chrome‑cinematic tag picker.
  - [ ] Tag.tsx component
  - [ ] WerdTagList and WerdTagCloud
  - [ ] a WerdVault tag cloud

- [ ] Add Werd Submission page
- [ ] add category selection to Submit a Werd
- [ ] recent community gems

- [ ] A search bar
  - [ ] a WerdVault fuzzy search + filter system
- [ ] WOTD logic

- [ ] A fully typed Supabase client - So your queries get full TS inference.
- [ ] build favorites sytem
  - [ ] a favorites table schema
- [ ] Randomizer powered by database
- [ ] wire
  - [ ] WOTD to Supabase
  - [ ] Spin the Vault to random DB entries
  - [ ] Curated Picks to curated flag in `werds`
  - [ ] Fun Facts to random funfact query
  - [ ] categories into Curated Picks or Quick Browse
- [ ] build a leaderboard for your games
  - [ ] Leaderboard → insert/update user scores
- [ ] create the SQL for inserting your first categories
- [ ] write the Supabase queries for fetching categories
- [ ] Make WOTD dynamic
  - [ ] We’ll pull a random word from Supabase:
    - [ ] werds table
    - [ ] word_of_the_day table (optional)
      - [ ] or a serverless function that rotates daily
- [ ] Make the search bar functional
  - [ ] You can wire it to:
    - [ ] filter words on the Word Vault page
    - [ ] navigate to the Word Index page
    - [ ] query Supabase for matching words

### Types and functions

- [ ] A Database type that matches your entire schema - (Generated from Supabase)
- [ ] A SubmitWerdPayload type - For your form.
- [ ] Funfacts API
  - [ ] fetch random fun facts from funfacts
- [ ] Fetch real words
- [ ] fetch curated picks from werds
- [ ] a toggleFavorite() helper
- [ ] create a global WerdContext so you don’t pass props down manually
- [ ] typed update/delete functions are the next step.
- [ ] hooks like
  - [ ] useWerds()
  - [ ] useFavorites()
  - [ ] useFunFacts()
  - [ ] useCategories()
- [ ] server actions for adding words
  - [ ] useWerds()
  - [ ] useRandomWerd()
  - [ ] useWOTD()
  - [ ] useSubmitWerd()
  - [ ] useLeaderboard()
- [ ] Showing words from the same category

## Write

- [ ] taglines
- [ ] Write the About hero text

## Enhancements

- [ ] (Optional) build **multiple variants**
- [ ] Smooth scroll to sections
- [ ] search bar glow on focus
- [ ] A thin silver border
- [ ] A soft glow on hover
- [ ] A micro‑arrow that animates right

### Theme

- [ ] map your chrome gradients to Tailwind utilities
- [ ] add custom animations to tailwind.config.js
- [ ] create reusable Tailwind classes for shimmer, glow, chrome edges
- [ ] unify your theme.ts → Tailwind → globals.css pipeline
- [ ] Create your global layout (Navigation + Outlet + Footer)
- [ ] a components.css for shared UI patterns
- [ ] a layout.css for page structure
- [ ] a chrome-effects.css dedicated to your aesthetic
- [ ] or a SpinTheVault.css that isolates all vault animations
- [ ] create your design tokens (colors, fonts, spacing)
- [ ] Tailwind theme
  - [ ] Create Tailwind classes for your theme (so you can drop them right into your code)
- [ ] Build a theme.ts file for your project
- [ ] Build a full style guide - (colors, fonts, spacing, components)
- [ ] Redesign your header, footer, cards, buttons

### GamesPage

- [ ] refine the GamesPage animations (hover parallax, soft tilt, etc.)

### CubeStack

- [ ] Scroll‑triggered fade‑in - CubeStack fades in as you scroll into the hero.
- [ ] Chrome reflection under the CubeStack - A subtle mirrored reflection on the floor plane.
- [ ] Parallax drift on scroll - The CubeStack shifts slightly as you scroll, giving it depth.
- [ ] Add a “chrome reflection” under the cubes

### ChromeSky

- [ ] ChromeSky + ColorOrbit hybrid
- [ ] ChromeSky with twinkling stars
- [ ] ChromeSky with shooting stars
- [ ] ChromeSky with slow rotation
- [ ] ChromeSky with blur layers

### WerdCard

- [ ] A subtle inner shadow to make the card feel inset
- [ ] A subtle chrome gradient text
- [ ] A hover reveal that shows 2–3 related words
- [ ] A flip animation that reveals synonyms on the back
- [ ] Add chrome borders or a subtle glass reflection
- [ ] Add a hover “flip” animation for meanings
- [ ] Make the grid animate in with a staggered fade
- [ ] Add a subtle chrome reflection to the card header
- [ ] Make the grid stagger in with a premium motion curve
- [ ] WOTD Card
  - [ ] A slightly thicker chrome accent bar for WOTD only (3px → 4px)
- [ ] Curated Picks Card
  - [ ] Redesign the Curated Picks card silhouette

### SpinTheVault

- [ ] a metallic gradient overlay
- [ ] a reflective streak
- [ ] a subtle shine that moves with the animation

### Settings

- [ ] A chrome‑cosmic background for the Settings page
- [ ] A token‑driven theme panel (light/dark/chrome modes)

### Layout

- [ ] add route transitions (fade, slide, chrome shimmer)
  - [ ] integrate this with Framer Motion
  - [ ] add per‑page transition styles
    - [ ] fade‑in
    - [ ] slide‑up
    - [ ] parallax scroll
    - [ ] subtle video overlay shimmer
    - [ ] shimmer highlight
    - [ ] Chrome Curtain — a vertical chrome wipe
    - [ ] Chrome Iris — circular expansion with chrome edges
    - [ ] Chrome Ripple — metallic ripple from the nav link you clicked
    - [ ] Chrome Beam — thin laser‑like chrome line sweeping across
    - [ ] Chrome Warp — distortion shimmer like heat haze
- [ ] add scroll‑to‑top on route change

## Files

- [ ] integrate PageWrapper into MainLayout
  - [ ] build a ProtectedRoute wrapper for future features
- [ ] Set up React Router
  - [ ] verifying the /palette-playground route
  - [ ] A dedicated route for individual WerdCards - (/werd/:slug)
  - [ ] A dedicated route for the werd of the Day
- [ ] clean up your Vite config
- [ ] SEO metadata //(using react-helmet-async)
- [ ] a prettier.config.js
- [ ] a .eslintignore
- [ ] a .prettierignore
- [ ] VS Code settings for auto‑format on save
- [ ] a script in package.json like "lint": "eslint . --ext .ts,.tsx"

## Tasks

- [ ] “Start dev server + open browser”
- [ ] “Run lint + fix”
- [ ] “Build + preview”
- [ ] “Auto‑format the entire project”
- [ ] “Generate TypeScript types from Supabase”

## Help

- [ ] help you wire up Supabase Auth cleanly
- [ ] fetch favorites on mount
- [ ] refresh favorites after toggle
- [ ] optimize your build for Vercel

# Routine Checks / Confirm pre-deploy

- [ ] update your entire werds.ts file so it’s clean and error‑free
- [ ] update your WOTD table schema
- [ ] update your navigation - ensure everything loads correctly
