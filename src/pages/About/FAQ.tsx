import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "So... what exactly is WerdNerd?",
    answer:
      "Part word vault, part language playground, part beautifully unnecessary detour. WerdNerd is a growing collection of rare, poetic, peculiar, and criminally underused werds worth knowing.",
  },
  {
    question: "Do I need an offensively large vocabulary to be here?",
    answer:
      "Nope. You only need to enjoy finding a werd that makes your brain stop for half a second and go, wait... there’s a werd for that?",
  },
  {
    question: "Where are you finding these werds?",
    answer:
      "Dictionaries, old books, etymology trails, forgotten corners of the internet, and the occasional lexical rabbit hole that absolutely should have taken five minutes.",
  },
  {
    question: "I found a werd the Vault missed. Is there a procedure?",
    answer:
      "Very official. Very rigorous. Send it in. Strange, beautiful, absurdly specific, or just satisfying to say, I want to see it.",
  },
  {
    question: "Is this useful, or are we just collecting syllables?",
    answer:
      "Both can be true. Some werds are useful. Some are tiny verbal artifacts you carry around until the exact right moment. WerdNerd respects both categories.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="about-faq" aria-labelledby="about-faq-title">
      <div className="about-faq__inner">
        <header className="about-faq__header">
          <p className="about-faq__label">The usual interrogation</p>
          <h2 id="about-faq-title">Questions, answered.</h2>
          <p>Mostly reasonable questions. Mildly over-worded answers.</p>
        </header>

        <div className="about-faq__list">
          {defaultFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `about-faq-question-${index}`;
            const answerId = `about-faq-answer-${index}`;

            return (
              <article className="about-faq__item" key={faq.question}>
                <button
                  id={questionId}
                  className="about-faq__question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggle(index)}
                >
                  <span>{faq.question}</span>
                  <span className="about-faq__question-icon" aria-hidden="true">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <div
                  id={answerId}
                  className="about-faq__answer"
                  data-open={isOpen}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                >
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
