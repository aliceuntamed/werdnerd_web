import { useLayoutEffect, useRef, type ReactNode } from 'react';
import './Auth.css';

export default function AuthLayout({ title, description, children, focusTitle = false }: { title: string; description: string; children: ReactNode; focusTitle?: boolean }) {
  const heading = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    if (!focusTitle) return;
    // Replacing a tall form can leave the viewport near the footer. Announce the result and show it.
    heading.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [focusTitle]);
  return (
    <main className="account-page">
      <section className="account-file" aria-labelledby="account-title">
        <div className="account-file__edge" aria-hidden="true" />
        <p className="account-eyebrow">WerdNerd / personal archive</p>
        <h1 id="account-title" ref={heading} tabIndex={-1}>{title}</h1>
        <p className="account-intro">{description}</p>
        {children}
      </section>
    </main>
  );
}
