import { useState } from "react";
import { Link } from "react-router-dom";

export function AboutCreator() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-bg-main text-text-primary font-body px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT SIDE — Featured Image + Quote */}
        <div className="flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-card shadow-soft-elevated">
            <img
              src="https://images.pexels.com/photos/9572404/pexels-photo-9572404.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Creative workspace with typewriter and books"
              className="w-full h-80 object-cover opacity-90"
            />

            {/* Badge Overlay */}
            <div className="absolute bottom-4 left-4 bg-bg-elevated/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border-subtle flex items-center gap-2">
              <span className="text-accent-pink">✦</span>
              <span className="text-sm">Lexicographer at Heart</span>
            </div>
          </div>

          {/* Quote Card */}
          <div className="bg-bg-elevated border border-border-subtle rounded-card p-6 shadow-soft-elevated">
            <p className="font-heading text-xl bg-chrome-horizontal bg-clip-text text-transparent">
              “werds are the only jewels I can afford to wear.”
            </p>
            <span className="text-text-muted text-sm block mt-2">
              — The Nerd Behind the Werd
            </span>
          </div>
        </div>

        {/* RIGHT SIDE — Content */}
        <div className="flex flex-col gap-8">
          <header>
            <span className="text-accent-purple font-heading text-sm tracking-wide uppercase">
              The Mind Behind WerdNerd
            </span>
            <h2 className="font-heading text-4xl mt-2 bg-chrome-horizontal bg-clip-text text-transparent tracking-tight">
              Confessions of a Logophile
            </h2>
          </header>

          <div className="flex flex-col gap-4 text-text-muted leading-relaxed">
            <p>
              Welcome to my digital sanctuary of oddities. I’m the creator of
              WerdNerd, a project born from a lifelong obsession with the
              “mumpsimus” and “floccinaucinihilipilification” of the English
              language.
            </p>
            <p>
              While others collect stamps or vintage coins, I collect syllables.
              I believe every “mellifluous” sound and “petrichor” scent deserves
              a place to be celebrated. This site is my personal cabinet of
              linguistic curiosities, shared with fellow nerds who find joy in
              the “tintinnabulation” of a well‑placed werd.
            </p>
          </div>

          {/* Traits */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center">
                <span className="text-accent-gold">✹</span>
              </div>
              <div>
                <strong className="block">Curious Mind</strong>
                <span className="text-text-muted text-sm">
                  Always hunting for the rarest etymologies.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center">
                <span className="text-accent-blue">✦</span>
              </div>
              <div>
                <strong className="block">Vibrant Spirit</strong>
                <span className="text-text-muted text-sm">
                  Infusing color into the dusty corners of grammar.
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4">
            <Link
              to="/"
              className="rounded-full px-5 py-2 bg-bg-elevated border border-border-subtle text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              <span className="bg-chrome-horizontal bg-clip-text text-transparent">
                Explore the Vault
              </span>
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="rounded-full px-5 py-2 border border-border-subtle text-sm hover:bg-bg-subtle transition-colors"
            >
              Say Hello
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
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
              Send a Message
            </h3>
            <p className="text-text-muted mb-6">
              Got a favorite “werd” you want to share? I’m all ears.
            </p>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  className="bg-bg-subtle border border-border-subtle rounded-card px-3 py-2 text-sm"
                  placeholder="Your name..."
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  className="bg-bg-subtle border border-border-subtle rounded-card px-3 py-2 text-sm"
                  placeholder="you@email.com"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm">Message</label>
                <textarea
                  className="bg-bg-subtle border border-border-subtle rounded-card px-3 py-2 text-sm"
                  placeholder="Tell me something unusual..."
                  rows={4}
                ></textarea>
              </div>

              <div className="flex gap-4 mt-2">
                <button
                  type="submit"
                  className="rounded-full px-5 py-2 bg-bg-elevated border border-border-subtle text-sm hover:bg-bg-subtle transition-colors"
                >
                  <span className="bg-chrome-horizontal bg-clip-text text-transparent">
                    Send Werd
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
