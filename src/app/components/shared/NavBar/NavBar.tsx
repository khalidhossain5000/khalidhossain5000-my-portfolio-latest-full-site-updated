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

  //
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
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
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="group flex items-center gap-3 select-none focus:outline-none"
              >
                {/* Sleek Icon/Image Wrapper */}
                <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-background-surface border border-border transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[var(--glow-soft)]">
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
                <span className="font-special text-2xl md:text-3xl font-bold tracking-wide text-foreground transition-colors duration-300 group-hover:text-foreground/90">
                  KH
                </span>
              </Link>
            </div>

            {/* Middle: Nav Items (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-secondary text-foreground-muted hover:text-primary transition-colors duration-200 text-sm font-medium tracking-wider uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right: CTA Button (Desktop) */}
            <div className="hidden md:flex items-center">
              <Link
                href="#resume"
                className="px-6 py-2.5 rounded-full border border-primary text-primary font-primary text-sm font-semibold hover:bg-primary hover:text-background transition-all duration-300"
                style={{ boxShadow: "var(--glow-soft)" }}
              >
                Resume
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
      />
    </>
  );
};

export default NavBar;
