import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="about-contact" aria-labelledby="contact-title">
      <div className="about-contact__inner">
        <div className="about-contact__copy">
          <div className="about-contact__lead-ins" aria-label="Reasons to get in touch">
            <span>Questions?</span>
            <span>Comments?</span>
            <span>Suggestions?</span>
          </div>

          <h2 id="contact-title">Send it.</h2>

          <p>
            Found a werd I missed? Spotted something weird? Have feedback, a
            theory, or a suspiciously specific language fact? I&rsquo;m listening.
          </p>
        </div>

        <form className="about-form about-contact__form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name..."
            />
          </label>

          <label>
            <span>Email</span>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Tell me something unusual..."
              required
            />
          </label>

          <button className="about-button about-button--primary" type="submit">
            <Send size={18} aria-hidden="true" />
            Send Message
          </button>

          {submitted && (
            <p className="about-contact__status" role="status">
              Received. The note has entered the vault.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
