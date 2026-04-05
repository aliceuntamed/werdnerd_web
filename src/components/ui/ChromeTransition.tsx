import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

export default function ChromeTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<
    "fadeOut" | "shimmer" | "fadeIn"
  >("fadeIn");

  useEffect(() => {
    // Start fade out
    setTransitionStage("fadeOut");

    const timeout1 = setTimeout(() => {
      // Trigger shimmer
      setTransitionStage("shimmer");
    }, 200);

    const timeout2 = setTimeout(() => {
      // Swap content + fade in
      setDisplayChildren(children);
      setTransitionStage("fadeIn");
    }, 600);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [location.pathname, children]);

  return (
    <div className="relative overflow-hidden">
      {/* Page content */}
      <div
        className={clsx(
          "transition-opacity duration-300",
          transitionStage === "fadeOut" && "opacity-0",
          transitionStage === "fadeIn" && "opacity-100",
          transitionStage === "shimmer" && "opacity-0",
        )}
      >
        {displayChildren}
      </div>

      {/* Chrome shimmer bar */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 translate-x-[-120%] opacity-0",
          "bg-gradient-to-r from-[#e5e7eb]/0 via-[#9bbcff]/60 to-[#c084fc]/0",
          "h-full w-[200%]",
          "transition-all duration-500",
          <div className="absolute inset-0 blur-3xl bg-[#9bbcff]/20" />,
          transitionStage === "shimmer" && "translate-x-[-10%] opacity-100",
        )}
      />
    </div>
  );
}
