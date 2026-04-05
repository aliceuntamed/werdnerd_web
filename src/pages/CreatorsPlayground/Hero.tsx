export function Hero() {
  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center px-6 py-20 bg-bg-main text-text-primary">
      <div className="max-w-3xl text-center flex flex-col gap-6">
        <h1 className="font-heading text-4xl md:text-5xl bg-chrome-horizontal bg-clip-text text-transparent tracking-tight">
          Werd Nerd
        </h1>

        <p className="text-text-muted text-lg md:text-xl">
          A playground of color, contrast, and quirky typography.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="rounded-full px-5 py-2 bg-bg-elevated border border-border-subtle hover:bg-bg-subtle transition-colors">
            <span className="bg-chrome-horizontal bg-clip-text text-transparent">
              Explore Palettes
            </span>
          </button>

          <button className="rounded-full px-5 py-2 border border-border-subtle hover:bg-bg-subtle transition-colors">
            <span className="text-text-muted hover:text-text-primary transition-colors">
              QuickBrowse
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
