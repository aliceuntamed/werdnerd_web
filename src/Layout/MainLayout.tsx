import React from "react";
import Navigation from "../components/Navigation/Navigation";
import { Footer } from "../components/layout/Footer";
import ChromeTransition from "../components/ui/ChromeTransition";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <ChromeTransition>
        <main>{children}</main>
      </ChromeTransition>
      <Footer />
    </>
  );
}
