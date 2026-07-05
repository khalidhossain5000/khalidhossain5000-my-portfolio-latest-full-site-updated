'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  FiExternalLink,
  FiGithub,
  FiAlertCircle,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi';
import { Project } from '../HomePage/Projects/projects-data';

/* ------------------------------------------------------------------ */
/* Variants – explicitly typed to prevent TypeScript inference errors*/
/* ------------------------------------------------------------------ */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Correctly recognized with Variants type definition
    },
  },
};


function DetailSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={itemVariants}
      className="rounded-2xl border border-border bg-gradient-to-br from-[var(--surface-2)] to-background p-6 shadow-md pt-12 lg:pt-22"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl text-primary">{icon}</span>
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}


const ProjectDetailView = ({ project }: { project: Project }) => {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="mx-auto max-w-6xl py-22 px-4 "
    >
      {/* ---------- Hero / Header ---------- */}
      <motion.div
        variants={itemVariants}
        className="relative mb-12 overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/30"
      >
        <Image
          src={project.image}
          alt={project.name}
          width={1200}
          height={600}
          className="h-full w-full object-cover sm:h-80 md:h-96 lg:h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <span className="mb-2 inline-block rounded-full border border-primary/50 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
            {project.category}
          </span>
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            {project.name}
          </h1>
        </div>
      </motion.div>

      {/* ---------- Brief Description ---------- */}
      <motion.p
        variants={itemVariants}
        className="mb-12 text-lg leading-relaxed text-foreground-muted sm:text-xl"
      >
        {project.detailedDescription}
      </motion.p>

      {/* ---------- Tech Stack ---------- */}
      <DetailSection icon={<FiZap />} title="Technology Stack">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-[var(--foreground-dim)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </DetailSection>

      {/* ---------- Challenges ---------- */}
      <div className="mt-8">
        <DetailSection icon={<FiAlertCircle />} title="Challenges Faced">
          <ul className="list-disc space-y-2 pl-5 text-foreground-muted">
            {project.challenges.map((ch, i) => (
              <li key={i} className="leading-relaxed">
                {ch}
              </li>
            ))}
          </ul>
        </DetailSection>
      </div>

      {/* ---------- Improvements ---------- */}
      <div className="mt-8">
        <DetailSection icon={<FiTrendingUp />} title="Potential Improvements">
          <ul className="list-disc space-y-2 pl-5 text-foreground-muted">
            {project.improvements.map((imp, i) => (
              <li key={i} className="leading-relaxed">
                {imp}
              </li>
            ))}
          </ul>
        </DetailSection>
      </div>

      {/* ---------- Future Plans ---------- */}
      <div className="mt-8">
        <DetailSection icon={<FiZap />} title="Future Plans">
          <ul className="list-disc space-y-2 pl-5 text-foreground-muted">
            {project.futurePlans.map((plan, i) => (
              <li key={i} className="leading-relaxed">
                {plan}
              </li>
            ))}
          </ul>
        </DetailSection>
      </div>

      {/* ---------- Links ---------- */}
      <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
        {project.links.live && (
          <Link
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-background transition-transform hover:scale-105 hover:shadow-[var(--glow-primary)] w-full lg:w-auto text-center"
          >
            <FiExternalLink />
            Live Site
          </Link>
        )}
        {project.links.clientRepo && (
          <Link
            href={project.links.clientRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 font-bold text-primary transition-all hover:bg-primary hover:text-background text-center w-full lg:w-auto mx-auto"
          >
            <FiGithub />
            Github Repository
          </Link>
        )}
      </motion.div>
    </motion.main>
  );
};

export default ProjectDetailView;