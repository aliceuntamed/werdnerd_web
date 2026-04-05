import { useState } from "react";

export function RemixModal() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-6 py-20 bg-bg-main text-text-primary">
      <div className="max-w-xl mx-auto text-center flex flex-col gap-4">
        <h2 className="font-heading text-4xl bg-chrome-horizontal bg-clip-text text-transparent tracking-tight">
          Share Your Remix
        </h2>

        <p className="text-text-muted text-lg">
          Prompting visitors to remix a palette or submit their own werd
          styling.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="rounded-full px-5 py-2 bg-bg-elevated border border-border-subtle hover:bg-bg-subtle transition-colors"
        >
          <span className="bg-chrome-horizontal bg-clip-text text-transparent">
            Remix Now
          </span>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-bg-elevated border border-border-subtle rounded-card p-8 w-full max-w-md shadow-soft-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-heading text-2xl mb-2 bg-chrome-horizontal bg-clip-text text-transparent">
              Submit Your Werd
            </h3>

            <form className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm">The Werd</label>
                <input
                  className="bg-bg-subtle border border-border-subtle rounded-card px-3 py-2 text-sm"
                  placeholder="e.g. Petrichor"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm">Accent Hex</label>
                <input
                  className="bg-bg-subtle border border-border-subtle rounded-card px-3 py-2 text-sm"
                  placeholder="#CEFF1A"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm">Definition</label>
                <textarea
                  className="bg-bg-subtle border border-border-subtle rounded-card px-3 py-2 text-sm"
                  placeholder="What does it mean?"
                  rows={4}
                ></textarea>
              </div>

              <div className="flex gap-4 mt-2">
                <button
                  type="submit"
                  className="rounded-full px-5 py-2 bg-bg-elevated border border-border-subtle hover:bg-bg-subtle transition-colors"
                >
                  <span className="bg-chrome-horizontal bg-clip-text text-transparent">
                    Upload Remix
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-text-muted hover:text-text-primary text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
