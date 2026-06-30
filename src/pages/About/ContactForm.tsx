import { FormEvent, useState } from "react";
import { Mail, MessageSquareText, Send } from "lucide-react";

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
          <p className="about-hero__kicker">Contact</p>
          <h2 id="contact-title">Send a strange little signal.</h2>
          <p>
            Questions, favorite words, odd discoveries, suspiciously beautiful
            etymologies: drop them here.
          </p>

          <div className="about-contact__prompts" aria-label="Good reasons to write">
            <span>
              <Mail size={18} aria-hidden="true" />
              word suggestions
            </span>
            <span>
              <MessageSquareText size={18} aria-hidden="true" />
              feedback and ideas
            </span>
          </div>
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
              Got it. Your note is staged.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
