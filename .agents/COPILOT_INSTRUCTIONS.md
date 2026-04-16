# Copilot instructions for werd nerd

Short, actionable guidance to help AI coding agents be productive in this repo.

- Project type: React + TypeScript app built with Vite (local dev: `npm run dev`, build: `npm run build`, preview: `npm run preview`).
- Key config: `tsconfig.json` sets `baseUrl: ./src` and `strict: true`. Keep imports consistent with the existing file layout.

Big picture

- Multi-page React app (no router wired up yet). UI is organized into small presentational components under `src/components/` and domain modules under `src/modules/`.
- Domain modules follow the pattern: `src/modules/<domain>/` containing UI components and a `use<Domain>.ts` hook that encapsulates data fetching/state (e.g. `src/modules/assets/useAssets.ts`). When adding features, prefer placing domain logic in a `use*` hook and UI in the module folder.
- Shared utilities live in `src/lib/` (e.g. `api.ts`, `imageUtils.ts`, `fileUtils.ts`). `api.ts` is currently a stub — the app uses mock data from `src/data/mockAssets.ts` and `src/data/mockTags.ts`.

Conventions and patterns (concrete)

- File naming: React components use PascalCase (`Button.tsx`, `MainLayout.tsx`). Hooks use camelCase starting with "use" (`useModal.ts`, `useLocalStorage.ts`). Types are under `src/types/`.
- Module structure example: `src/modules/assets/` contains `AssetCard.tsx`, `AssetList.tsx`, `AssetDetail.tsx`, and `useAssets.ts`. Follow this when adding new domains: UI pieces + a `use*` hook.
- Styling: global CSS lives in `src/styles/` (`globals.css`, `theme.css`, `variables.css`). Prefer adding small module- or component-level styles in these files rather than creating a new global file unless necessary.
- Imports: project often uses relative imports (see `src/main.tsx`, `src/App.tsx`) but `baseUrl` allows absolute imports from `src/` (e.g. `import X from "layouts/MainLayout"`). Match surrounding file style when editing.

Build / dev / debug

- Start dev server: `npm run dev` (uses Vite). Build: `npm run build`. Preview production build: `npm run preview`.
- TypeScript is strict; ensure new code type-checks. Run `tsc --noEmit` or rely on the IDE/CI.

What to change where (common tasks)

- Add a new domain: create `src/modules/<domain>/` with UI components and `use<Domain>.ts`. Add types in `src/types/` if needed.
- Add mocked data: put it in `src/data/` (follow `mockAssets.ts` structure). If you add a real API client, put endpoints in `src/lib/api.ts` and keep `use*` hooks responsible for platform-specific wiring.
- Wiring pages: `src/App.tsx` currently renders `MainLayout`. There is no client-side router configured — if you add routing, update `App.tsx` and `MainLayout.tsx` together.

Integration points / TODOs discovered

- `src/lib/api.ts` is empty — expected integration point for server communication.
- Several `use*.ts` hooks exist as stubs (e.g. `useAssets.ts`) — these are the intended places for data logic.

Examples

- Import using the repo style:
  - Relative: `import MainLayout from "./layouts/MainLayout"`
  - Absolute (allowed by tsconfig): `import MainLayout from "layouts/MainLayout"`
- Add a hook shape (example in `src/hooks/`):
  - `function useSomething() { const [state, setState] = useState(...); return { state, actions }; }`

Notes for AI contributors

- Do not introduce a new global state manager unless the change clearly needs it — follow existing localized `use*` hook pattern.
- Keep component responsibilities small: UI in `components/`, domain composition in `modules/`.
- Preserve TypeScript strictness and preferred file naming.
