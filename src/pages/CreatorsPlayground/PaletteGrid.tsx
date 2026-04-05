const palettes = [
  {
    hex: "#CEFF1A",
    score: "WCAG 14.2:1",
    label: "Electric Lime on Charcoal",
  },
  {
    hex: "#FF4D80",
    score: "WCAG 7.4:1",
    label: "Vivid Pink on Slate",
  },
  {
    hex: "#91B7C7",
    score: "WCAG 9.1:1",
    label: "Muted Cyan on Onyx",
  },
  {
    hex: "#DD99BB",
    score: "WCAG 8.8:1",
    label: "Soft Orchid on Midnight",
  },
  {
    hex: "#F7F7FA",
    score: "WCAG 21:1",
    label: "Pure Frost on Dark",
  },
  {
    hex: "outline",
    score: "WCAG 12.5:1",
    label: "Accent Strokes on Void",
    outline: true,
  },
];

export function PaletteGrid() {
  return (
    <section className="px-6 py-20 bg-bg-main text-text-primary">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <h2 className="font-heading text-4xl bg-chrome-horizontal bg-clip-text text-transparent tracking-tight">
          Palette Playground
        </h2>

        <p className="text-text-muted text-lg">
          High‑contrast color pairs curated for deep dark backgrounds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {palettes.map((p, i) => (
            <div
              key={i}
              className="bg-bg-elevated border border-border-subtle rounded-card p-4 flex flex-col gap-3 shadow-soft-elevated"
            >
              <div
                className={`h-24 w-full rounded-card ${
                  p.outline ? "border border-accent-pink bg-bg-subtle" : ""
                }`}
                style={!p.outline ? { background: p.hex } : {}}
              ></div>

              <span className="font-mono text-sm text-text-primary">
                {p.hex}
              </span>
              <span className="text-sm text-text-muted">{p.score}</span>
              <p className="text-sm text-text-muted">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
