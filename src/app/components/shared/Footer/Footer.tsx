"use client";

import { FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const sloganWords = [
  { text: "Create", color: "var(--primary)" },
  { text: "code", color: "var(--secondary)" },
  { text: "connect", color: "var(--accent)" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-background pt-12 pb-6 px-4 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(103,230,76,0.08),transparent_70%)] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
        }}
        className="relative container mx-auto flex flex-col items-center text-center gap-8"
      >
       

        {/* Animated colorful slogan */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          className="text-lg md:text-xl font-secondary font-medium"
        >
          <span className="inline-flex flex-wrap justify-center gap-x-1 gap-y-0">
            {sloganWords.map(({ text, color }, i) => (
              <motion.span
                key={text}
                initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
                style={{ color }}
                className="inline-block text-xl lg:text-2xl"
              >
                {text}
                {i < sloganWords.length - 1 && (
                  <span className="mx-1 text-foreground-muted">·</span>
                )}
              </motion.span>
            ))}
          </span>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          className="flex gap-4"
        >
          <a
            href="https://github.com/khalidhossain5000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-2 border border-border text-foreground-muted hover:text-primary hover:border-primary transition-all duration-200 hover:shadow-[0_0_15px_rgba(103,230,76,0.2)]"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-khalid-hossain-s"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-2 border border-border text-foreground-muted hover:text-primary hover:border-primary transition-all duration-200 hover:shadow-[0_0_15px_rgba(103,230,76,0.2)]"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-2 border border-border text-foreground-muted hover:text-primary hover:border-primary transition-all duration-200 hover:shadow-[0_0_15px_rgba(103,230,76,0.2)]"
          >
            <FaTwitter size={18} />
          </a>
        </motion.div>

        {/* Back to top */}
        <motion.button
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors group"
        >
          <FiArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
          Back to top
        </motion.button>
      </motion.div>

      {/* Copyright – always centered */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="relative container mx-auto mt-8 pt-5 border-t border-border text-center text-xs md:text-sm text-foreground-dim font-secondary"
      >
        <p>&copy; {new Date().getFullYear()} Md Khalid Hossain. All rights reserved.</p>
        {/* <p className="mt-1">
          Built with <span className="text-primary">❤</span> using Next.js & Tailwind
        </p> */}
      </motion.div>
    </footer>
  );
};

export default Footer;