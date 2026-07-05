"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  activeSection: string;
  onNavClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  activeSection,
  onNavClick,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Slide Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background-elevated border-l border-border-strong z-50 p-6 flex flex-col md:hidden shadow-2xl"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-10">
              <button
                onClick={onClose}
                className="text-foreground-muted hover:text-primary transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-6 grow">
              {navLinks.map((link, index) => {
                const isActive =
                  activeSection === link.href.replace("#", "") ||
                  (link.href === "#home" && activeSection === "home");

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={(event) => {
                        onNavClick(event, link.href);
                        onClose();
                      }}
                      className={`block font-special text-2xl transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-auto pb-8">
              <Link
                href="#resume"
                onClick={onClose}
                className="flex justify-center w-full py-3.5 rounded-lg bg-primary text-background font-primary font-bold text-lg tracking-wide hover:bg-primary-dark transition-colors"
                style={{ boxShadow: "var(--glow-primary)" }}
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
