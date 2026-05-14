# WerdNerd Roadmap

Last updated: May 13, 2026

This roadmap is staged for solo-builder execution: ship useful slices quickly, then polish.

## Guiding Principles

- Small, shippable increments
- Clear visual identity
- Strong UX basics before advanced features
- Architecture that future-you can maintain

## Phase 1: Foundation and Stability

Status: In progress

1. Navigation and route consistency
- Keep navigation aligned with `src/routes.ts`
- Preserve legacy redirects/paths only where needed

2. CI and build reliability
- Keep build and lint checks healthy
- Reduce noisy automation that does not add signal

3. Repo hygiene
- Keep docs current with code reality
- Remove stale branches/files when safe

## Phase 2: WerdVault Depth

Status: In progress

4. Vault browsing upgrades
- Better filtering and sorting
- Improved search quality (fuzzy matching as needed)
- Strong empty/loading/error states

5. Submission pipeline improvements
- Better validation and duplicate detection
- Improve moderation-ready metadata

6. Word of the Day maturity
- Reliable daily selection logic
- Optional history tracking
- Better homepage integration

## Phase 3: Games Expansion

Status: In progress

7. Solidify shipped game foundations
- Boggle
- Wordle
- Word Search
- Trivia
- Hangman
- Brain Teasers
- Codenames

8. Improve replayability and quality
- Scoring, balancing, polish passes
- Better feedback states and UX clarity
- Optional leaderboards where meaningful

## Phase 4: Design System and UX Polish

Status: Planned

9. Design system consolidation
- Harden token usage across pages/components
- Standardize spacing, typography, and motion rules

10. Interaction polish
- Keep animations intentional and lightweight
- Improve perceived performance and visual hierarchy

## Phase 5: Creator and Admin Tools

Status: Planned

11. Creator tooling
- Richer submit/edit workflows
- Better author feedback and previews

12. Moderation workflows
- Approve/reject paths
- Flagging and edit tools

13. Insights dashboard
- Popularity and usage metrics
- Feature-level behavior insights

## Phase 6: Future Bets

Status: Optional / exploratory

14. Public API surface
- Read-focused endpoints for words/tags/random

15. Mobile experiences
- Evaluate React Native path after web core is stable

16. AI-assisted features
- Suggest tags/related words
- Assist content curation workflows

## Operating Rule for This Roadmap

When roadmap text conflicts with current code, ship based on code reality and update the roadmap in the same session.
