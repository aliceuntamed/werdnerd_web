# Routes

Routing is centralized in `src/routes.ts` and rendered by `src/App.tsx` inside React Router.

```tsx
export const ROUTES = {
  HOME: "/",
  VAULT: "/vault",
  WERD_DETAIL: "/werd/:slug",
  ABOUT: "/about",
  CREATORS: "/playground",
  SUBMIT: "/submit",
  SUBMIT_LEGACY: "/submit-werd",
  GAMES: "/games",
  CREATORS_LEGACY: "/creators-playground",
  BOGGLE: "/games/boggle",
  WORDLE: "/games/wordle",
  WORDSEARCH: "/games/wordsearch",
  TRIVIA: "/games/trivia",
  HANGMAN: "/games/hangman",
  BRAINTEASERS: "/games/brainteasers",
  CODENAMES: "/games/codenames",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  RESET_PASSWORD: "/auth/reset-password",
  SETTINGS: "/settings",
} as const;
```

Key route mapping:

- `/` -> `src/pages/Home/HomePage.tsx`
- `/vault` -> `src/pages/WerdVault/WerdVaultPage.tsx`
- `/werd/:slug` -> `src/pages/WerdVault/WerdDetailPage.tsx`
- `/about` -> `src/pages/About/AboutPage.tsx`
- `/playground` -> `src/pages/CreatorsPlayground/CreatorsPlaygroundPage.tsx`
- `/submit` and `/submit-werd` -> `src/pages/SubmitWerd/SubmitWerdPage.tsx`
- `/games` -> `src/pages/Games/GamesPage.tsx`
- auth routes -> `src/pages/Auth/*`

All routes share the global `Navigation` and `Footer` from `src/App.tsx`.

## Submit Werd Summary

`/submit` currently renders a simple dark gradient page with:

- H1 "Submit a Word"
- short intro paragraph
- `SubmitWerdForm`
- form fields: word, definition, pronunciation, part of speech, tag chips, status messages, submit button

Blueprint intent adds:

- tag selection
- recent community gems
- typed submission payload/form flow
- "What Makes a Good Vault Word?" guidance with rare/obscure, poetically precise, phonically satisfying, emotionally resonant criteria
