"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, type Variants } from "framer-motion";
import Title from "../../shared/Title/Title";

// Import your custom skill images
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

type SkillItem = {
  name: string;
  image: StaticImageData;
  note: string;
};

type SkillCategory = {
  title: string;
  description: string;
  accent: string;
  items: SkillItem[];
};

const skillGroups: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern UI systems with responsive layouts, polished visuals, and fluid interaction.",
    accent: "from-primary via-secondary to-accent",
    items: [
      { name: "HTML5", image: html, note: "Structure" },
      { name: "CSS3", image: css, note: "Styling" },
      { name: "JavaScript", image: jsLogo, note: "Logic" },
      { name: "TypeScript", image: tsLogo, note: "Typed" },
      { name: "React", image: react, note: "UI" },
      { name: "Next.js", image: nextjs, note: "Framework" },
      { name: "Tailwind", image: tailwind, note: "Design" },
      { name: "Framer Motion", image: framermotion, note: "Animation" },
    ],
  },
  {
    title: "Backend & Auth",
    description: "Secure server logic, auth flows, and clean API architecture for real products.",
    accent: "from-accent via-sky-400 to-primary",
    items: [
      { name: "Node.js", image: node, note: "Runtime" },
      { name: "Express", image: express, note: "Server" },
      { name: "JWT", image: jwt, note: "Security" },
      { name: "Prisma", image: prisma, note: "ORM" },
      { name: "Postman", image: postman, note: "Testing" },
    ],
  },
  {
    title: "Database & Deploy",
    description: "Reliable data storage, cloud hosting, and seamless deployment workflows.",
    accent: "from-secondary via-emerald-400 to-primary",
    items: [
      { name: "MongoDB", image: mongodb, note: "NoSQL" },
      { name: "PostgreSQL", image: postgres, note: "SQL" },
      { name: "SQL", image: sql, note: "Queries" },
      { name: "Firebase", image: firebase, note: "Realtime" },
      { name: "Vercel", image: vercel, note: "Deploy" },
      { name: "Netlify", image: netlify, note: "Hosting" },
      { name: "GitHub", image: github, note: "Collab" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-10 top-8 h-[24rem] w-[24rem] rounded-full bg-primary/15 blur-[130px]"
          animate={{ scale: [1, 1.12, 1], x: [0, 20, 0], y: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent/12 blur-[140px]"
          animate={{ scale: [1, 1.08, 1], x: [0, -18, 0], y: [0, 24, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 h-[22rem] w-[22rem] rounded-full bg-secondary/10 blur-[130px]"
          animate={{ scale: [1, 1.15, 1], x: [0, 16, 0], y: [0, -16, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-2 font-secondary text-sm font-semibold uppercase tracking-[0.32em] text-primary">
            My Toolkit
          </p>
          <Title mainText="My" highlightText="Skills" />
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary shadow-(--glow-primary)" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-foreground-muted sm:text-lg">
            A focused stack of tools I use to build fast, responsive, and professionally polished web experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01, boxShadow: "0 0 34px rgba(103, 230, 76, 0.16)" }}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-surface-1/85 to-background/80 p-6 shadow-[0_0_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${group.accent}`} />
              <div
                className="absolute inset-0 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at top left, rgba(103, 230, 76, 0.13), transparent 45%)" }}
              />

              <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/80">
                      0{index + 1}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                    Focused
                  </span>
                </div>

                <p className="mb-6 text-sm leading-7 text-foreground-muted">{group.description}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 p-3 transition-colors duration-300 hover:border-primary/30 hover:bg-primary/8"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-surface-2/80 p-2">
                        <Image
                          src={item.image}
                          alt={`${item.name} logo`}
                          width={36}
                          height={36}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-foreground-muted">{item.note}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;