# WerdNerd Project Memory

This file is the repo-local memory layer for WerdNerd.

Its job is to preserve durable decisions, important context, recurring gotchas, and active direction across Codex sessions without forcing Stephanie to re-explain the project every time.

## How agents should use this file

### At the start of a task

1. Read `AGENTS.md` and the instruction files it points to.
2. Read the relevant sections of this file before making product, design, architecture, naming, or workflow decisions.
3. If a persistent memory provider/tool is available (for example Empirical), search it using the repository name plus the feature/topic being worked on.
4. Treat current source code as truth for what exists now.
5. Treat `.agents/PROJECT_BLUEPRINT.md` as truth for intended product direction.
6. Treat this file as continuity context: decisions, preferences, discoveries, and gotchas that should survive between sessions.

### At the end of a task

Update this file only when something durable changed or was learned.

Good things to remember:
- a design or product decision Stephanie explicitly made
- a technical decision that future work should respect
- a recurring bug, trap, or non-obvious implementation detail
- a naming/content rule
- a feature that is intentionally postponed, rejected, or superseded
- a dependency or setup fact that is likely to matter again

Do **not** record:
- routine file edits
- temporary debugging observations
- huge session summaries
- guesses or unconfirmed ideas
- secrets, credentials, tokens, or private personal information

Keep entries short. Prefer updating an existing bullet over adding another nearly identical one.

If a persistent memory provider is available, save the same durable decision there when useful. Repo-local memory remains the fallback source that every coding agent can read.

---

## Product identity

- WerdNerd is a visual-first personal lexicon / vocabulary discovery site built around rare, poetic, peculiar, delightful, and memorable language.
- The experience should feel more like a curated curiosity cabinet than a conventional dictionary.
- Preserve personality and discovery. Do not sand the project down into generic SaaS UI.

## Brand and visual direction

- Core visual direction: dark, chrome-cinematic, layered, atmospheric, curiosity-cabinet energy.
- Rainbow chrome is an accent/reflection/focal treatment, not a large pastel gradient wash.
- Avoid drifting into soft pastel styling unless Stephanie explicitly requests it.
- Motion, depth, environmental scrolling, parallax, and cinematic backgrounds are welcome when they improve atmosphere without hurting usability.
- Legibility and hierarchy beat decoration.

## Language and naming

- Use **Werd / Werds** for branded WerdNerd domain concepts such as Vault entries, specimens, submissions, and collections.
- Use ordinary **word / words** for linguistic terms, quotations, definitions, games such as Word Search, and natural prose where the branded spelling would feel forced.
- Avoid mechanically replacing every occurrence of `word` with `werd`.
- The site has historically overused the word **curious**. Prefer fresher wording instead of repeating it by default.

## UX / collaboration preferences

- Stephanie is a visual designer who is learning coding and benefits from plain-English explanations of implementation choices.
- Prefer visual-first, practical changes over abstract architecture discussions.
- Make small, inspectable changes instead of giant rewrites.
- When several implementation paths are valid, recommend one rather than dumping an unranked menu of options.
- Proactively point out a better approach when there is a meaningful reason, but do not derail a small task into a redesign.

## Technical continuity

- Frontend: React + Vite + TypeScript.
- Styling/UI includes Tailwind-style utilities and reusable UI components.
- Supabase is the default backend path.
- Routing is centralized in `src/routes.ts` and rendered from `src/App.tsx`.
- Page components live in `src/pages/`.
- Shared components live in `src/components/`; reusable primitives live under `src/components/ui/`.
- Supabase helpers/client setup live in `src/utils/supabase/`.
- Domain types live in `src/types/`.
- Prefer existing local state and feature hooks before introducing a global-state library.

## Current design/content decisions worth preserving

- The Vault uses tags as the primary classification system unless Stephanie explicitly changes that taxonomy decision.
- WerdNerd should not visually drift back toward pastel peekaboo accents; chrome/rainbow accenting is the intended direction.
- Games should remain visually related to WerdNerd while being allowed their own playful presentation.
- The Games hero direction uses Poppins; other game-name typography can be lighter/thinner while staying compatible with that family/direction.
- Navigation should include a Home route on non-Home pages where practical.
- Footer spacing should visually pair the two text groups rather than treating them as unrelated blocks.

## Known active direction / backlog context

These are context clues, not proof that a task is still undone. Always check the current code before changing anything.

- Reduce repeated use of “curious” in site copy.
- Continue branded `Werd` usage carefully rather than globally replacing normal `word` usage.
- Vault: improve tag presentation, hide `untagged` from normal category presentation, and keep the interface clean rather than exposing implementation leftovers.
- About page: environmental/long-form background imagery should move naturally with page sections rather than feeling pinned awkwardly.
- Submit a Werd: typography and guidance presentation are areas of active visual refinement.
- Games: naming, typography, and actual game implementations remain an active product area.

## Memory hygiene

When this file starts getting long:

1. Merge duplicates.
2. Remove completed temporary context that no longer changes future decisions.
3. Keep decisions and lessons, not a chronological diary.
4. Never delete an owner decision merely because the implementation changed; update it to explain what superseded it.

Last major memory-system setup: 2026-09-08.
