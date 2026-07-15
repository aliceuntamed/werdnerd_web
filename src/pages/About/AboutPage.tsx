import { AboutCreator } from "./AboutCreator";
import { ContactForm } from "./ContactForm";
import { FAQ } from "./FAQ";
import "./AboutPage.css";
import "./AboutPageRefinements.css";

export default function AboutPage() {
  return (
    <main className="about-page-shell">
      <AboutCreator />
      <ContactForm />
      <FAQ />
    </main>
  );
}
