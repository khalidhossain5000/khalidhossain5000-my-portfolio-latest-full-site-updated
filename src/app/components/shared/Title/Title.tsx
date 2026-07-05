import React from "react";
import { motion, Variants } from "framer-motion";

interface TitleProps {
  /** The primary text of the heading */
  mainText: string;
  /** Optional text to emphasize with your brand's primary accent color */
  highlightText?: string;
  /** Optional extra Tailwind classes for layout tweaking */
  className?: string;
  /** Optional custom Framer Motion variants to override the default animation */
  variants?: Variants;
}

// Fallback default animation if no parent orchestrates the variant states
const defaultRevealVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Title: React.FC<TitleProps> = ({
  mainText,
  highlightText,
  className = "",
  variants = defaultRevealVariant,
}) => {
  return (
    <motion.h1
      className={`font-special text-4xl sm:text-5xl xl:text-6xl  font-bold text-foreground leading-[1.15] mb-2 ${className}`}
      variants={variants}
    >
      {mainText}{" "}
      {highlightText && (
        <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-brand)" }}>{highlightText}</span>
      )}
    </motion.h1>
  );
};

export default Title;