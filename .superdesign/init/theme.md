# Theme

## Package / framework

React 18 + TypeScript + Vite + Tailwind 4 + shadcn/tailwind CSS imports.

## Core tokens from `src/index.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Kalnia:wdth,wght@100..125,100..700&family=Lancelot&family=Milonga&display=swap");
@import "@fontsource-variable/geist";
@import "@fontsource/poppins/latin-300.css";
@import "@fontsource/poppins/latin-400.css";
@import "@fontsource/poppins/latin-500.css";
@import "@fontsource/poppins/latin-600.css";
@import "@fontsource/poppins/latin-700.css";
@import "@fontsource/poppins/latin-800.css";

:root {
  --color-ink-black: #0b1117;
  --color-deep-werd-teal: #225560;
  --color-vault-teal: #306657;
  --color-bone-paper: #efefed;
  --color-electric-blue: #00c8ff;
  --color-acid-fern: #b7ff2a;
  --color-bruised-orchid: #7a35ff;
  --color-chrome-dust: #aeb9c4;
  --color-hot-spectrum: #ff2f92;
  --color-spectrum-gold: #ffd400;
  --color-spectrum-cyan: #00f0ff;
  --color-spectrum-violet: #8b35ff;
  --chrome-gradient: linear-gradient(115deg, #303943 0%, #f7fbff 13%, #77838e 24%, #00e5ff 36%, #2f6bff 47%, #8b35ff 58%, #ff2f92 70%, #ffd400 82%, #b7ff2a 91%, #dce5ec 100%);
  --chrome-gradient-soft: linear-gradient(115deg, #59636d 0%, #f7fbff 22%, #00d7ff 39%, #7440ff 56%, #ff3d8f 72%, #f4d63b 86%, #aeb9c4 100%);
  --background: #0b1117;
  --foreground: #efefed;
  --border: rgba(182, 189, 194, 0.16);
  --ring: #00c8ff;
  --input: rgba(182, 189, 194, 0.2);
  --primary: #00c8ff;
  --primary-foreground: #0b1117;
  --secondary: #306657;
  --secondary-foreground: #efefed;
  --accent: #b7ff2a;
  --accent-foreground: #0b1117;
  --muted: #225560;
  --muted-foreground: #b6bdc2;
  --card: #111a21;
  --card-foreground: #efefed;
  --radius: 0.625rem;
}

html,
body {
  margin: 0;
  background-color: #0b1117;
  color: #efefed;
  font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

h1, h2, h3, h4 {
  font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: white;
  line-height: 1.25;
}

p {
  font-family: "Poppins", system-ui, -apple-system, sans-serif;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
}

.chrome-gradient-text {
  background: var(--chrome-gradient);
  background-size: 180% 180%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.chrome-glow {
  box-shadow: 0 0 18px rgba(0, 229, 255, 0.2), 0 0 36px rgba(139, 53, 255, 0.14), 0 0 54px rgba(255, 47, 146, 0.08);
}

.chrome-border {
  border: 1px solid rgba(255, 255, 255, 0.15);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

.glass {
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

## Blueprint design guidance

- Dark cinematic minimalism, digital curiosity cabinet.
- Use rainbow chrome as accent, edge, reflection, highlight, or focal treatment, not broad surface fill.
- Elevated dark cards with thin borders, subtle surface contrast, and shadow-defined depth.
- Selective glass only when layering/depth makes it meaningful.
- Motion should be environmental: parallax, slow atmospheric drift, shimmer, chrome reflections, depth shifts.
- Respect reduced-motion preferences.
- Typography: Poppins for UI/body; Kalnia for theatrical hero headings; Milonga and Lancelot as sparse editorial accents.
