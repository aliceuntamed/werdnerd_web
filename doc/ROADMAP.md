# WerdNerd Roadmap

A chrome‑cinematic journey toward a unified, expressive, modular word‑play universe.

This roadmap outlines the planned evolution of WerdNerd across UI, architecture, games, data pipelines, and creator tools.  
It is intentionally modular so each milestone can be completed independently or in parallel.

---

# 🌟 Phase 1 — Foundation & Stability (Now → Near Future)

## ✅ 1. Navigation System (Complete)

- Responsive, chrome‑cinematic navigation
- Mobile menu with blur + border
- Clean structure (no nested <nav>)
- All pages included

## 🔧 2. CI/CD Stabilization

- Cleaned GitHub Actions workflow
- Build-only CI with Supabase secrets
- Remove failing lint/analyze jobs
- Disable bot-triggered preview deploys

## 🧹 3. Repository Cleanup

- Remove unused branches
- Close stale PRs
- Disable noisy Dependabot updates
- Add README, CONTRIBUTING, SECURITY, PR templates, Issue templates

---

# 🌈 Phase 2 — WerdVault Expansion

## 🧩 4. WerdVault Core Enhancements

- WerdCard polish (chrome accents, micro‑interactions)
- Tag cloud animations
- Sorting options (A–Z, newest, random)
- Search bar with fuzzy matching

## 🗃️ 5. Supabase Data Model Upgrades

- Add `created_at` and `updated_at`
- Add `submitted_by` (optional)
- Add `favorite_count`
- Add moderation flags (optional)

## 🧠 6. Word of the Day (WOTD)

- Daily random selection
- Supabase table for history
- UI component on Home page
- “Surprise Me” button

---

# 🎮 Phase 3 — Games Universe

## 🎲 7. Boggle (Complete foundation)

- 4×4 chrome tiles
- Word validation
- Scoring
- Timer mode (optional)

## 🟩 8. Wordle

- Chrome tile animations
- Keyboard component
- Daily + unlimited modes

## 🔍 9. Word Search

- Grid generator
- Word placement algorithm
- Highlight interactions

## ❓ 10. Trivia

- Supabase-backed question bank
- Categories + difficulty
- Timer + scoring

## 🪢 11. Hangman

- Chrome gallows animation
- Word categories
- Hint system

## 🧠 12. Brain Teasers

- Riddles
- Lateral thinking puzzles
- Logic mini-games

## 🕵️ 13. Codenames

- Grid generator
- Team assignment
- Clue-giving UI

---

# 🎨 Phase 4 — Aesthetic & UX Enhancements

## ✨ 14. Chrome‑Cinematic UI System

- Global gradients + reflections
- Unified shadows + depth
- Component-level chrome tokens
- Motion guidelines

## 🎛️ 15. Palette Playground

- Interactive color editor
- Save/export palettes
- Apply palette to UI theme

## 🧩 16. Component Library

- Buttons
- Cards
- Panels
- Inputs
- Chrome dividers
- Tag components

---

# 🧰 Phase 5 — Creator Tools & Admin

## 📝 17. Submit Word Enhancements

- Validation
- Preview card
- Auto-tag suggestions
- Duplicate detection

## 🛡️ 18. Moderation Tools

- Approve/reject submissions
- Flag inappropriate content
- Edit existing words

## 📊 19. Analytics Dashboard

- Word popularity
- Tag frequency
- Game usage stats
- WOTD performance

---

# 🚀 Phase 6 — Future Vision

## 🌐 20. Public API

- `/api/words`
- `/api/random`
- `/api/tags`

## 📱 21. Mobile App (React Native)

- WerdVault
- Games
- WOTD widget

## 🧬 22. AI‑Assisted Features (Optional)

- Word suggestions
- Tag generation
- Fun fact generation

---

# 🗺️ Roadmap Philosophy

WerdNerd grows through:

- Modular systems
- Typed pipelines
- Chrome‑cinematic UI
- Playful interactions
- Clear, expressive architecture

This roadmap is a living document — updated as the project evolves.
