# Page Dependency Trees

## `/submit` Submit Werd

Entry: `src/pages/SubmitWerd/SubmitWerdPage.tsx`

Dependencies:

- `src/pages/SubmitWerd/SubmitWerdPage.tsx`
  - `src/pages/SubmitWerd/SubmitWerdForm.tsx`
    - `src/utils/supabase/client.ts`
    - `src/utils/supabase/queries.ts`
- global shell from `src/App.tsx`
  - `src/components/Navigation/Navigation.tsx`
    - `src/components/Navigation/Navigation.css`
    - `src/contexts/AuthContext.tsx`
    - `src/routes.ts`
  - `src/components/layout/Footer.tsx`
    - `src/routes.ts`
  - `src/components/layout/ErrorBoundary.tsx`
  - `src/components/ui/LoadingScreen.tsx`
- styling:
  - `src/index.css`

Actual render branch:

- The page always renders a `main` element with full width/min-height dark vertical gradient and top/bottom padding.
- Inside is a centered `max-w-3xl` column.
- Header: chrome gradient H1 "Submit a werd".
- Paragraph: "Add a new entry to the archive. Every submission helps expand the vault."
- Form is a vertical stack.
- Tag chips only render if fetched tags are available.

## `/` Home

Entry: `src/pages/Home/HomePage.tsx`

Dependencies include `Hero`, `WOTD`, `SpinTheVault`, `CuratedPicks`, `QuickBrowse`, `ContributeCTA`, `home.css`, global shell.

## `/vault` Werd Vault

Entry: `src/pages/WerdVault/WerdVaultPage.tsx`

Dependencies include `VaultHero`, `SearchBar`, werd cards/tag cloud, `WerdVault.css`, global shell.

## `/about` About

Entry: `src/pages/About/AboutPage.tsx`

Dependencies include `AboutCreator`, `FAQ`, `ContactForm`, `AboutPage.css`, `AboutPageRefinements.css`, global shell.
