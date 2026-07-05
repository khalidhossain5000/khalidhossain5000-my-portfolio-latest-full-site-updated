"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";

// Import custom skill images
import jsLogo from "../../../../assets/skillsLogo/JavaScript.png";
import tsLogo from "../../../../assets/skillsLogo/ts-logo-256.png";
import html from "../../../../assets/skillsLogo/HTML5.png";
import css from "../../../../assets/skillsLogo/CSS3.png";
import jwt from "../../../../assets/skillsLogo/jwt-flower.webp";
import tailwind from "../../../../assets/skillsLogo/Tailwind.png";
import node from "../../../../assets/skillsLogo/Node.png";
import express from "../../../../assets/skillsLogo/Express.png";
import mongodb from "../../../../assets/skillsLogo/MongoDB.png";
import postgres from "../../../../assets/skillsLogo/postgres.png";
import sql from "../../../../assets/skillsLogo/sql-raw.png";
import firebase from "../../../../assets/skillsLogo/Firebase.png";
import react from "../../../../assets/skillsLogo/React.png";
import vercel from "../../../../assets/skillsLogo/vercel.png";
import netlify from "../../../../assets/skillsLogo/netlify.png";
import nextjs from "../../../../assets/skillsLogo/Next-js_Symbol_1.png";
import postman from "../../../../assets/skillsLogo/Postman.png";
import prisma from "../../../../assets/skillsLogo/prisma.webp";
import github from "../../../../assets/skillsLogo/GitHub.png";
import framermotion from "../../../../assets/skillsLogo/framer-motion.png";
import Title from "../../shared/Title/Title";

interface SkillItem {
  name: string;
  logo: StaticImageData;
}

interface SkillCategory {
  categoryName: string;
  skills: SkillItem[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      categoryName: "Frontend Development",
      skills: [
        { name: "HTML5", logo: html },
        { name: "CSS3", logo: css },
        { name: "JavaScript", logo: jsLogo },
        { name: "TypeScript", logo: tsLogo },
        { name: "React", logo: react },
        { name: "Next.js", logo: nextjs },
        { name: "Tailwind CSS", logo: tailwind },
        { name: "Framer Motion", logo: framermotion },
      ],
    },
    {
      categoryName: "Backend & API",
      skills: [
        { name: "Node.js", logo: node },
        { name: "Express.js", logo: express },
        { name: "JWT", logo: jwt },
        { name: "Postman", logo: postman },
      ],
    },
    {
      categoryName: "Database & ORM",
      skills: [
        { name: "MongoDB", logo: mongodb },
        { name: "PostgreSQL", logo: postgres },
        { name: "SQL", logo: sql },
        { name: "Prisma", logo: prisma },
      ],
    },
    {
      categoryName: "DevOps & Tools",
      skills: [
        { name: "Firebase", logo: firebase },
        { name: "Git & GitHub", logo: github },
        { name: "Vercel", logo: vercel },
        { name: "Netlify", logo: netlify },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.05 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section className="relative w-full py-20 overflow-hidden bg-background">

      {/* =========================
          🌌 ENHANCED BACKGROUND GLOW SYSTEM
      ========================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-surface to-background opacity-90" />

        {/* Neon green orb */}
        <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-primary/15 blur-[120px] rounded-full animate-pulse" />

        {/* Cyan accent orb */}
        <div className="absolute bottom-[-120px] right-[-100px] w-[420px] h-[420px] bg-accent/10 blur-[130px] rounded-full animate-pulse" />

        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="mx-auto custom-max-width px-6 relative z-10">

        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-primary font-medium font-secondary tracking-[0.2em] uppercase mb-2 text-center">
            Tools & Arsenal
          </p>
          <Title mainText="My" highlightText="Skills" className="text-center" />
        </div>

        {/* Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              variants={categoryVariants}
              className="
                relative p-6 md:p-8 rounded-2xl
                border border-border
                bg-background-surface/70
                backdrop-blur-xl
                group
                transition-all duration-300
              "
              style={{
                boxShadow:
                  "0 0 40px rgba(103, 230, 76, 0.05), inset 0 0 40px rgba(16, 25, 13, 0.5)",
              }}
            >
              {/* Soft hover glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl" />

              {/* Category Title */}
              <h3 className="text-lg md:text-xl font-secondary font-semibold text-foreground mb-6 border-b border-border pb-3 flex items-center justify-between relative z-10">
                <span>{cat.categoryName}</span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(103,230,76,0.8)]" />
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative z-10">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={cardVariants}
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                      boxShadow:
                        "0 0 25px rgba(103, 230, 76, 0.25), 0 0 60px rgba(56, 189, 248, 0.08)",
                    }}
                    className="
                      relative flex flex-col items-center justify-center
                      p-4 rounded-xl border border-border
                      bg-surface-1/70 backdrop-blur-md
                      transition-all duration-300
                      overflow-hidden
                    "
                  >
                    {/* Inner glow line */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 transition duration-500" />

                    <div className="relative w-12 h-12 flex items-center justify-center mb-3">
                      <Image
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain max-h-12 max-w-12 transition-transform duration-300 hover:scale-110 relative z-10"
                        priority={catIdx === 0}
                      />
                    </div>

                    <span className="text-xs md:text-sm font-medium font-secondary text-foreground-muted text-center tracking-wide relative z-10 group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;