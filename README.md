werdnerd_web
Lexicon for Logophiles

# WerdNerd

A chrome‑cinematic playground for words, puzzles, curiosity, and linguistic delight.  
WerdNerd blends expressive UI, playful mechanics, and a modular TypeScript architecture to create a unified, tactile experience across:

- Word Vault (tag‑driven archive of weird + wonderful words)
- Games (Boggle, Wordle, Word Search, Trivia, Hangman, Codenames)
- About Page (mission, vision, values, contact, and FAQs)
- Fun Facts & Brain Teasers
- Creator's Playground (Typography & Color Palette)
- User Interaction(Submit Word, Spin the Wheel)

Built with:

- React + Vite
- TypeScript
- Supabase
- TailwindCSS
- Vercel

---

## 🚀 Features

### **Word Vault**

- Fully typed Werd schema
- Tag cloud filtering
- Chrome‑accented WerdCards
- Supabase‑backed data pipeline

### **Games**

- Modular game engine
- Cinematic chrome artifacts
- Lazy‑loaded routes
- Unified aesthetic across all puzzles

### **Submit Word**

- Fully typed insert pipeline
- Validation + Supabase integration

### **Navigation**

- Responsive
- Chrome‑cinematic
- Mobile‑first
- Clean, production‑safe structure

---

## 🧩 Tech Stack

| Layer      | Technology                           |
| ---------- | ------------------------------------ |
| Frontend   | React, TypeScript, Vite              |
| Styling    | TailwindCSS, custom chrome gradients |
| Backend    | Supabase (Postgres + Auth + Storage) |
| Deployment | Vercel                               |
| CI/CD      | GitHub Actions                       |

---

## 🛠️ Development

```bash
npm install
npm run dev
```

Environment variables required:
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

## 📦 Build

```
npm run build
```

## 🧪 CI Pipeline

• Build-only workflow
• Supabase env vars injected via GitHub Secrets
• No linting or bundle analysis (optional to re-enable later)

## 🤝 Contributing

See CONTRIBUTING.md for full guidelines.

## 📜 License

MIT
