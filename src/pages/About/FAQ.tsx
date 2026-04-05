import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What is WerdNerd?",
    answer:
      "WerdNerd is a curated playground of rare, obscure, and delightfully odd vocabulary—built for the logophilic and the curious.",
  },
  {
    question: "What does WerdNerd offer?",
    answer:
      "Daily rare werds, curated picks, fun facts, etymology tidbits, and a vault of linguistic curiosities.",
  },
  {
    question: "Who is WerdNerd for?",
    answer:
      "Anyone who loves language—writers, readers, poets, nerds, and anyone who enjoys a well‑placed, unusual werd.",
  },
  {
    question: "How can I participate in the community forum?",
    answer:
      "You can submit werds, join discussions, contribute definitions, and help shape the growing WerdNerd lexicon.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-bg-main text-text-primary font-body px-6 py-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <header className="flex flex-col gap-3">
          <h2 className="font-heading text-4xl bg-chrome-horizontal bg-clip-text text-transparent tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted max-w-xl">
            Everything you ever wanted to know about WerdNerd (and maybe a few
            things you didn’t).
          </p>
        </header>

        {/* FAQ List */}
        <div className="flex flex-col divide-y divide-border-subtle border border-border-subtle rounded-card overflow-hidden">
          {defaultFaqs.map((faq, i) => (
            <div key={i} className="bg-bg-elevated">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-bg-subtle transition-colors"
              >
                <span className="font-heading text-lg">{faq.question}</span>

                <span className="text-accent-pink text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6">
          <button className="rounded-full px-5 py-2 bg-bg-elevated border border-border-subtle text-sm font-medium hover:bg-bg-subtle transition-colors">
            <span className="bg-chrome-horizontal bg-clip-text text-transparent">
              Contact
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
