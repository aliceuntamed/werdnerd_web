# WerdNerd Game Engine

A modular, type‑safe, chrome‑cinematic engine for word‑based games.

This document describes the core concepts, data structures, and extension patterns for building and maintaining games in WerdNerd (Boggle, Wordle, Word Search, Trivia, Hangman, Brain Teasers, Codenames, etc.).

---

## 🎮 Design Goals

- **Modular:** Each game is an artifact plugged into a shared engine.
- **Typed:** All game state, actions, and configs are fully typed.
- **Composable:** Shared primitives (timers, scoring, boards, prompts).
- **Thematic:** Chrome‑cinematic UI, consistent motion and feedback.
- **Extensible:** Adding a new game should feel like adding a new “mode,” not a new universe.

---

## 🧩 Core Concepts

### **GameId**

```ts
export type GameId =
  | "boggle"
  | "wordle"
  | "word-search"
  | "trivia"
  | "hangman"
  | "brain-teasers"
  | "codenames";
```

GameConfig
Each game declares a config that the engine can understand.

ts
export interface GameConfig<TState, TAction> {
id: GameId;
name: string;
description: string;
icon?: React.ReactNode;

// Initial state for a new session
createInitialState: () => TState;

// Pure reducer: state + action → new state
reducer: (state: TState, action: TAction) => TState;

// Optional scoring function
computeScore?: (state: TState) => number;

// Optional end condition
isComplete?: (state: TState) => boolean;
}
GameRegistry
All games are registered in a central registry.

ts
export const gameRegistry: Record<GameId, GameConfig<any, any>> = {
boggle: boggleConfig,
wordle: wordleConfig,
"word-search": wordSearchConfig,
trivia: triviaConfig,
hangman: hangmanConfig,
"brain-teasers": brainTeasersConfig,
codenames: codenamesConfig,
};
This lets you:

Render a Games Gallery from config only.

Route to /games/:id and load the correct game.

Keep UI + logic decoupled.

🧠 Engine Hook
A generic hook to run any game by GameId.

ts
export function useGameEngine<TState, TAction>(
config: GameConfig<TState, TAction>
) {
const [state, dispatch] = React.useReducer(config.reducer, config.createInitialState());

const score = config.computeScore ? config.computeScore(state) : null;
const complete = config.isComplete ? config.isComplete(state) : false;

return {
state,
dispatch,
score,
complete,
config,
};
}
Usage in a game page:

tsx
const config = gameRegistry["boggle"];
const { state, dispatch, score, complete } = useGameEngine(config);
🎲 Example: Boggle Config
ts
interface BoggleState {
grid: string[][];
foundWords: string[];
submittedWords: string[];
startTime: number | null;
endTime: number | null;
}

type BoggleAction =
| { type: "START" }
| { type: "SUBMIT_WORD"; word: string }
| { type: "END" }
| { type: "RESET" };

export const boggleConfig: GameConfig<BoggleState, BoggleAction> = {
id: "boggle",
name: "Boggle",
description: "Find as many words as you can in a 4×4 chrome grid.",

createInitialState: () => ({
grid: generateBoggleGrid(4),
foundWords: [],
submittedWords: [],
startTime: null,
endTime: null,
}),

reducer: (state, action) => {
switch (action.type) {
case "START":
return { ...state, startTime: Date.now(), endTime: null };
case "SUBMIT_WORD":
if (state.submittedWords.includes(action.word)) return state;
return {
...state,
submittedWords: [...state.submittedWords, action.word],
foundWords: [...state.foundWords, action.word],
};
case "END":
return { ...state, endTime: Date.now() };
case "RESET":
return boggleConfig.createInitialState();
default:
return state;
}
},

computeScore: (state) =>
state.foundWords.reduce((total, word) => total + scoreBoggleWord(word), 0),

isComplete: (state) => state.endTime !== null,
};
🧱 Shared Primitives
Timer
ts
export interface TimerState {
durationMs: number;
startedAt: number | null;
endedAt: number | null;
}
Can be reused across Boggle, Trivia, etc.

Scoring
Each game defines its own scoring function, but the engine can expose a common shape:

ts
export interface GameScore {
raw: number;
max?: number;
breakdown?: Record<string, number>;
}
🎨 UI Layer
The engine is logic‑only.
UI is built with:

GameShell: chrome frame, title, meta, controls.

GameBoard: grid / layout.

GameHUD: score, timer, status.

GameActions: buttons, inputs.

Example:

tsx
<GameShell config={config}>
<GameHUD score={score} complete={complete} />
<BoggleBoard grid={state.grid} />
<BoggleControls dispatch={dispatch} />
</GameShell>
➕ Adding a New Game
Define GameId entry.

Create TState and TAction types.

Implement GameConfig<TState, TAction>.

Register in gameRegistry.

Create UI components using useGameEngine(config).

Add route /games/:id and artifact card in Games Gallery.

🗺️ Philosophy
The engine should feel like:

A switchboard for game logic.

A gallery rail for chrome artifacts.

A typed contract between logic and UI.

Games are just different ways of playing with words inside the same cinematic universe.
