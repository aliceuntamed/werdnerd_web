// src/routes.ts

import HomePage from "./pages/Home/HomePage";
import WerdVaultPage from "./pages/WerdVault/WerdVaultPage";
import AboutPage from "./pages/About/AboutPage";
import CreatorsPlaygroundPage from "./pages/CreatorsPlayground/CreatorsPlaygroundPage";
import SubmitWerdPage from "./pages/SubmitWerd/SubmitWerdPage";

// Games
import GamesPage from "./pages/Games/GamesPage";
import BogglePage from "./pages/Games/BogglePage";
import WordlePage from "./pages/Games/WordlePage";
import WordSearchPage from "./pages/Games/WordSearchPage";
import TriviaPage from "./pages/Games/TriviaPage";
import HangmanPage from "./pages/Games/HangmanPage";
import BrainTeasersPage from "./pages/Games/BrainTeasersPage";
import CodenamesPage from "./pages/Games/CodenamesPage";

// Optional: Builder.io pages
import SettingsPage from "./pages/Settings/SettingsPage"; // if applicable

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

  // Builder.io or future pages
  SETTINGS: "/settings",
} as const;

// ---------------------------------------------
// 2. Route → Component registry
// ---------------------------------------------
export const ROUTE_COMPONENTS = {
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

  // Builder.io
  [ROUTES.SETTINGS]: SettingsPage,
};
