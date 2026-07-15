import { AboutCreator } from "./AboutCreator";
import { ContactForm } from "./ContactForm";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main className="about-page-shell">
      <AboutCreator />
      <ContactForm />
    </main>
  );
}
