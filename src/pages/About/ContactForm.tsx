export function ContactForm() {
  return (
    <section className="w-full bg-bg-main text-text-primary font-body px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT SIDE — Contact Info */}
        <div className="flex flex-col gap-8">
          <header className="flex flex-col gap-2">
            <span className="text-text-muted text-sm">
              Drop us a message and we’ll get back to you!
            </span>

            <h2 className="font-heading text-4xl bg-chrome-horizontal bg-clip-text text-transparent tracking-tight">
              Contact Us
            </h2>

            <span className="text-text-muted text-base">
              Have a question or suggestion?
            </span>
          </header>

          <div className="flex flex-col gap-4 text-text-muted">
            <div className="flex items-center gap-3">
              <span className="text-accent-blue">✉</span>
              <span>Your Email</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-accent-green">☎</span>
              <span>Your Phone Number</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-accent-gold">⌖</span>
              <span>789 Test St, Bucharest</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Form */}
        <form className="flex flex-col gap-6 bg-bg-elevated border border-border-subtle rounded-card p-6 shadow-soft-elevated">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-name" className="text-sm">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Name"
              className="bg-bg-subtle border border-border-subtle rounded-card px-3 py-2 text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-email" className="text-sm">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="Email"
              required
              className="bg-bg-subtle border border-border-subtle rounded-card px-3 py-2 text-sm"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-message" className="text-sm">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Enter your message"
              className="bg-bg-subtle border border-border-subtle rounded-card px-3 py-2 text-sm"
            ></textarea>
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-sm text-text-muted">
            <input
              type="checkbox"
              defaultChecked
              className="accent-accent-pink"
            />
            I accept the Terms
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="rounded-full px-5 py-2 bg-bg-elevated border border-border-subtle text-sm font-medium hover:bg-bg-subtle transition-colors"
          >
            <span className="bg-chrome-horizontal bg-clip-text text-transparent">
              Submit
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
