# Project Checklist

## Must Include / Retain

- [ ] Loader.tsx and LoadingScreen.tsx
- [ ] fun facts section

### Vibe / Style / Features

- chrome cinematic vibe/scheme throughout
- dark backgrounds, minimalist rainbow-chrome accents/borders
- glass morphism & shadows as main container / card style
- rainbow chrome thin line borders & divider lines 
- parallax scroll 
- shimmer highlight

#### Colors
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

#### Fonts

Poppins - body/headings
Kalnia - theatrical headings
Milonga - editorial accents
Lancelot - editorial accents (use less often)

### Page Must-Haves

#### Navigation

- on all pages
- L aligned - werdnerd (name or icon)
- R aligned - Page Links followed by Auth Link (Login)

#### Footer

- on all pages
  - Row 1 
    - Column 1
      - 'werdnerd'
      - 'Curating the curious, the obscure, and the delightfully polysyllabic.'
      - 'Stay Curious'
      - 'Get a daily dose of linguistic levity sent to your inbox.'
      - Newsletter form/inout email + send btn
    - Column 2
      - Row 1
        - Column 1
          - Lexicon
            - The Vault
            - Etymology Explorer
            - Phonetic Fun
            - Daily Fun Fact
        - Column 2
          - Community
          - Submit a Werd
          - Nerd Forum
          - Tournaments
          - Get in Touch
        - Column 3
          - Legalese
            - Privacy Policy
            - Terms of Service
            - Cookie Settings
            - Accessibility
      - Row 2
        - Socials
          - Facebook
          - Instagram
          - GitHub
          - Pinterest
          - TikTok
  - Row 2
    - centered
    - © 2026 WerdNerd. Built with Typescript and curiosity.
    - Oxford Certified Quirky | 100% Organically Curated
  
#### HomePage

- Hero
- WOTD
- Spin the Vault
  - a metallic gradient overlay*
  - a subtle shine that moves with the animation*
  - wire Spin the Vault to random DB entries
  - add a SpinTheVault.css that isolates all vault animations*
- QuickBrowse
  - vault preview: Grid of 6 Cards randomly picked from the vault
- CuratedPicks
  - “The Curious Collection”
    - “A curated vault for the logophile, the quirky, and the unusual.”
  - Grid of 3 Curated Picks Cards
- Large ContributeCTA

#### WerdVault

- Hero
- search bar
  - search bar glow on hover*
- A Werd detail page or module
- a WerdVault tag cloud page/module
  - Show words from the same category
- WerdCard grid
  - A flip animation that reveals synonyms on the back*

#### About

- About Section
  - "Meet the nerd" / " Meet the nerd behind the werds" / The Mind behind werdnerd"
  - "Confessions of a Logophile"
    - "Hi, I’m Stephanie, the human behind WerdNerd. 👽 I’m a designer with a soft spot for life’s peculiarities, especially the strange little wonders hiding in the English language. I built this digital lexicon to be part word vault, part curiosity cabinet, and part excuse to collect and share my favorite oddities. | WerdNerd is a personal passion project born from a lifelong love of words that sparkle, charm, confuse, amuse, and make you pause, grin, and immediately want to tell someone else. If you have a favorite strange, beautiful, or criminally underused word, send it my way. The vault always has room for one more odd little gem."
  - 'Vibrant Spirit' badge
    - "Infusing color into the dusty corners of grammar."
  - 'Curious Mind' badge
    - "Always hunting for the rarest etymologies."
  - 'Explore the Vault' btn
  - 'Say Hello' btn
  - '“I have no special talents. I am only passionately curious.” -Albert Einstein'
- Contact section
  - "Have a question or suggestion?"
    - "Questions, favorite words, odd discoveries, suspiciously beautiful etymologies: drop them here."
    - "Send it."
  - Contact Form

#### SubmitWerd

- Add Werd Submission page
- add category selection to Submit a Werd
- recent community gems
- A SubmitWerdPayload type & form.
- "What makes a good vault word?"
  - "Here is what we are looking for:"
    - "Rare or obscure
      - Words that most people have never encountered in the wild.
    - Poetically precise
      - Words that describe something that feels indescribable.
    - Phonically satisfying
      - Words that are genuinely delightful to say out loud.
    - Emotionally resonant
      - Words that unlock something true about human experience."

#### GamesPage

- [ ] Boggle
  - [ ] custom werdnerd game name
- [ ] Wordle
  - [ ] custom werdnerd game name
- [ ] Word Search
  - [ ] custom werdnerd game name
- [ ] Hangman
  - [ ] custom werdnerd game name
- [ ] codenames
  - [ ] custom werdnerd game name
- [ ] trivia
  - [ ] custom werdnerd game name

#### Creator's Playground

- Tools
  - API Access
    - Integrate WerdNerd into your projects.
  - Collaborate
    - Join our linguistic research team.
  - Feedback
    - Help us improve the WerdNerd hub.

#### Auth

- [ ] login / signup module
- [ ] settings module / page
  - [ ] dark mode component switch - public\on-off-switch.png
- [ ] profile page
  - [ ] favorites

## Ideas 

- [ ] A “Back to Top” floating button
- [ ] add smooth scroll to sections
- [ ] build **multiple variants**
- [ ] a 404 page

## Code Still Waiting to be Written

- hooks
  - useWerds()
  - useFavorites()
  - useFunFacts()
  - useCategories()
  - useWerds()
  - useRandomWerd()
  - useWOTD()
  - useSubmitWerd()
  - useLeaderboard()

- [ ] fully typed Supabase client
- [ ] create the SQL for inserting categories
- [ ] write Supabase queries for fetching categories
- [ ] A Database type to match entire schema - (Generated from Supabase)
- [ ] create a global WerdContext
- [ ] typed update/delete functions
- [ ] update WOTD table schema
- [ ] update navigation - ensure everything loads correctly
- [ ] server actions for adding words
- [ ] integrate PageWrapper into MainLayout
- [ ] build a ProtectedRoute wrapper for future features
- [ ] Set up React Router
- [ ] dedicated route for individual WerdCards - (/werd/:slug)
- [ ] dedicated route for the werd of the Day
- [ ] wire Curated Picks to curated flag in `werds`
- [ ] wire Quick Browse to categories


- clean up Vite config
- SEO metadata //(using react-helmet-async)
- a prettier.config.js
- a .eslintignore
- a .prettierignore
- VS Code settings for auto‑format on save
- a script in package.json like "lint": "eslint . --ext .ts,.tsx"
- [ ] “Auto‑format the entire project”
- [ ] “Generate TypeScript types from Supabase”
- [ ] optimize build for Vercel

- [ ] build a leaderboard
  - [ ] Leaderboard → insert/update user scores
  - [ ] wire Fun Facts to random funfact query
  - [ ] refine the GamesPage animations

- [ ] A user preferences schema stored in Supabase
  - [ ] A token‑driven theme panel (light/dark/chrome modes)
- [ ] wire up Supabase Auth cleanly
  - [ ] Add an is_admin Flag
- [ ] Favorites
  - [ ] refresh favorites after toggle
  - [ ] fetch favorites on mount
  - [ ] a toggleFavorite() helper
- [ ] fuzzy search + filter system
  - [ ] Make the search bar functional
    - You can wire it to:
      - filter words on the Word Vault page
      - navigate to the Word Index page
      - query Supabase for matching words
  - A TagSelector type - For your chrome‑cinematic tag picker.
  - Tag.tsx component
  - WerdTagList and WerdTagCloud

- [ ] Build a theme.ts
- [ ] add route transitions
- [ ] Create global layout (Navigation + Outlet + Footer)
- [ ] components.css for shared UI patterns
- [ ] layout.css for page structure
- [ ] chrome-effects.css dedicated to project aesthetics
  - [ ] shimmer
  - [ ] glow
  - [ ] chrome edges
  - [ ] hover
  - [ ] parallax
  - [ ] soft tilt
- [ ] map chrome gradients to Tailwind utilities
- [ ] add custom animations to tailwind.config.js
- [ ] unify theme.ts → Tailwind → globals.css pipeline
- [ ] Create Tailwind classes for theme

## Design / Style Ideas

- ChromeSky background
  - ChromeSky with twinkling stars
  - ChromeSky with shooting stars