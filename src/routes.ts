// src/routes.ts
import { lazy, type ComponentType } from "react";

// ---------------------------------------------
// 1. Route path constants
// ---------------------------------------------
export const ROUTES = {
  HOME: "/",
  VAULT: "/vault",
  ABOUT: "/about",
  CREATORS: "/playground",
  SUBMIT: "/submit",
  SUBMIT_LEGACY: "/submit-werd",
  GAMES: "/games",
  CREATORS_LEGACY: "/creators-playground",

  // Individual games
  BOGGLE: "/games/boggle",
  WORDLE: "/games/wordle",
  WORDSEARCH: "/games/wordsearch",
  TRIVIA: "/games/trivia",
  HANGMAN: "/games/hangman",
  BRAINTEASERS: "/games/brainteasers",
  CODENAMES: "/games/codenames",

  // Utility/future pages
  SETTINGS: "/settings",
} as const;

type RouteComponent = ComponentType<Record<string, never>>;

// Lazy-loaded route components
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const WerdVaultPage = lazy(() => import("./pages/WerdVault/WerdVaultPage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const CreatorsPlaygroundPage = lazy(
  () => import("./pages/CreatorsPlayground/CreatorsPlaygroundPage"),
);
const SubmitWerdPage = lazy(() => import("./pages/SubmitWerd/SubmitWerdPage"));
const GamesPage = lazy(() => import("./pages/Games/GamesPage"));
const BogglePage = lazy(() => import("./pages/Games/BogglePage"));
const WordlePage = lazy(() => import("./pages/Games/WordlePage"));
const WordSearchPage = lazy(() => import("./pages/Games/WordSearchPage"));
const TriviaPage = lazy(() => import("./pages/Games/TriviaPage"));
const HangmanPage = lazy(() => import("./pages/Games/HangmanPage"));
const BrainTeasersPage = lazy(() => import("./pages/Games/BrainTeasersPage"));
const CodenamesPage = lazy(() => import("./pages/Games/CodenamesPage"));
const SettingsPage = lazy(() => import("./pages/Settings/SettingsPage"));

// ---------------------------------------------
// 2. Route -> Component registry
// ---------------------------------------------
export const ROUTE_COMPONENTS: Record<string, RouteComponent> = {
  [ROUTES.HOME]: HomePage,
  [ROUTES.VAULT]: WerdVaultPage,
  [ROUTES.ABOUT]: AboutPage,
  [ROUTES.CREATORS]: CreatorsPlaygroundPage,
  [ROUTES.SUBMIT]: SubmitWerdPage,
  [ROUTES.SUBMIT_LEGACY]: SubmitWerdPage,
  [ROUTES.CREATORS_LEGACY]: CreatorsPlaygroundPage,

  // Games
  [ROUTES.GAMES]: GamesPage,
  [ROUTES.BOGGLE]: BogglePage,
  [ROUTES.WORDLE]: WordlePage,
  [ROUTES.WORDSEARCH]: WordSearchPage,
  [ROUTES.TRIVIA]: TriviaPage,
  [ROUTES.HANGMAN]: HangmanPage,
  [ROUTES.BRAINTEASERS]: BrainTeasersPage,
  [ROUTES.CODENAMES]: CodenamesPage,

  [ROUTES.SETTINGS]: SettingsPage,
};
