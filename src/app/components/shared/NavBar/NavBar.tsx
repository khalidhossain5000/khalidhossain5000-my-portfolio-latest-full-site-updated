/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import logo from "../../../../assets/logo/kk-lgos-removebg-preview.png";
import Image from "next/image";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "about", "skills", "projects", "contact"];
      const offset = 140;

      const current = sections.reduce(
        (closest, id) => {
          const element = document.getElementById(id);
          if (!element) return closest;

          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - offset);

          if (distance < closest.distance) {
            return { id, distance };
          }

          return closest;
        },
        { id: "home", distance: Number.POSITIVE_INFINITY },
      );

      setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(targetId);
    }

    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <div className="shrink-0">
              <Link
                href="/"
                className="group flex items-center gap-3 select-none focus:outline-none"
              >
                {/* Sleek Icon/Image Wrapper */}
                <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-background-surface border border-border transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-(--glow-soft)">
                  <Image
                    src={logo}
                    alt="Khalid Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Typography */}
                <span className="font-special text-2xl md:text-3xl font-bold tracking-wide text-foreground transition-colors duration-300 group-hover:text-foreground/90 mr-1">
                  Khalid   <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-brand)" }}>Hossain</span>
                </span>
              </Link>
            </div>

            {/* Middle: Nav Items (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.href.replace("#", "") ||
                  (link.href === "#home" && activeSection === "home");

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(event) => handleScrollToSection(event, link.href)}
                    className={`relative font-secondary text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-foreground-muted hover:text-primary"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 h-0.5 w-full -translate-x-1/2 rounded-full bg-primary shadow-(--glow-primary)" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: CTA Button (Desktop) */}
            <div className="hidden md:flex items-center">
              <Link
                href="#contact"
                className="px-6 py-2.5 rounded-full border border-primary text-primary font-primary text-sm font-semibold hover:bg-primary hover:text-background transition-all duration-300"
                style={{ boxShadow: "var(--glow-soft)" }}
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-foreground hover:text-primary transition-colors focus:outline-none"
              >
                <Menu size={30} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        onNavClick={handleScrollToSection}
      />
    </>
  );
};

export default NavBar;
