const experiments = [
  {
    werd: "Sonder",
    desc: "The realization that each random passerby is living a life as vivid and complex as your own.",
    badge: "Gradient Fill",
    style: "bg-chrome-horizontal bg-clip-text text-transparent",
  },
  {
    werd: "Petrichor",
    desc: "The pleasant, earthy smell after rain.",
    badge: "Serif Contrast",
    style: "italic text-accent-purple",
  },
  {
    werd: "Mellifluous",
    desc: "Sweet or musical; pleasant to hear.",
    style: "text-accent-green tracking-tight",
  },
  {
    werd: "Limerence",
    desc: "State of being infatuated with another person.",
    style: "uppercase border border-accent-blue px-2 py-1 inline-block",
  },
  {
    werd: "Ephemeral",
    desc: "Lasting for a very short time.",
    badge: "Glow Effect",
    style: "font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]",
  },
];

export function TypographyExperiments() {
  return (
    <section className="px-6 py-20 bg-bg-main text-text-primary">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <h2 className="font-heading text-4xl bg-chrome-horizontal bg-clip-text text-transparent tracking-tight">
          Typography Experiments
        </h2>

        <p className="text-text-muted text-lg">
          Oversized headings, quirky ligatures, and vivid gradients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {experiments.map((item, i) => (
            <div
              key={i}
              className="bg-bg-elevated border border-border-subtle rounded-card p-6 shadow-soft-elevated flex flex-col gap-3"
            >
              <h3 className={`font-heading text-3xl ${item.style}`}>
                {item.werd}
              </h3>

              <p className="text-text-muted text-sm">{item.desc}</p>

              {item.badge && (
                <span className="text-xs px-2 py-1 rounded-full bg-bg-subtle border border-border-subtle w-fit">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
