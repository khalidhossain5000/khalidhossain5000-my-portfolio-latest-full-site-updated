"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../assets/logo/kk-lgos-removebg-preview.png";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(103,230,76,0.16),_transparent_55%),#080b05] px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-2xl rounded-3xl border border-border/70 bg-background/70 p-8 text-center shadow-[0_0_45px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-10"
      >
        <div className="mb-6 flex justify-center">
          <div className="rounded-full border border-primary/25 bg-background-surface/80 p-4 shadow-[var(--glow-soft)]">
            <Image
              src={logo}
              alt="Khalid logo"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          404 Error
        </p>
        <h1 className="font-special text-3xl font-bold text-foreground sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-foreground-muted sm:text-lg">
          The page you are looking for might have been moved, deleted, or never
          existed. Let’s get you back to the portfolio home.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:scale-[1.02]"
          >
            Go home
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-border/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground-muted transition-all duration-300 hover:border-primary/40 hover:text-primary"
          >
            Contact me
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
