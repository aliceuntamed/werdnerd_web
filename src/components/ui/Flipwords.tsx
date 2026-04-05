"use client";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export const Flipwords = ({
  werds,
  duration = 3000,
  className,
}: {
  werds: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentwerd, setCurrentwerd] = useState(werds[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const werd = werds[werds.indexOf(currentwerd) + 1] || werds[0];
    setCurrentwerd(werd);
    setIsAnimating(true);
  }, [currentwerd, werds]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.4,
          },
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
          className,
        )}
        key={currentwerd}
      >
        {currentwerd.split(" ").map((werd, werdIndex) => (
          <motion.span
            key={werd + werdIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: werdIndex * 0.3,
              duration: 0.4,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            className="inline-block whitespace-nowrap"
          >
            {werd.split("").map((letter, letterIndex) => (
              <motion.span
                key={werd + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: werdIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 140,
                  damping: 14,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
