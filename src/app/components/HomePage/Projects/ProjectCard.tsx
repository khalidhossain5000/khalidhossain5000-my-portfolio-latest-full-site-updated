'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { Project } from './projects-data';

interface ProjectCardProps {
  project: Project;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = (): void => {
    if (imageRef.current) {
      imageRef.current.style.objectPosition = 'center bottom';
    }
  };

  const handleMouseLeave = (): void => {
    if (imageRef.current) {
      imageRef.current.style.objectPosition = 'center top';
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[var(--surface-2)] to-background shadow-2xl shadow-black/30 transition-all duration-300 hover:border-primary/40 hover:from-[var(--surface-3)] hover:shadow-[var(--glow-soft)]"
    >
      {/* Image — hover pans top to bottom, like a scrolling screenshot */}
      <div
        className="relative h-48 flex-shrink-0 cursor-pointer overflow-hidden rounded-t-2xl md:h-56"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          ref={imageRef}
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          style={{ objectFit: 'cover', objectPosition: 'center top', transition: 'object-position 3s linear' }}
        />
        <span className="absolute left-4 top-4 z-10 rounded-full border border-[var(--border-strong)] bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-primary backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-center text-lg font-bold text-foreground sm:text-left sm:text-xl">
          {project.name}
        </h3>
        <p className="mt-3 text-center text-sm text-foreground-muted sm:text-left">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-[var(--foreground-dim)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 text-center sm:text-left">
          <Link
            href={`/projects/${project.id}`}
            className="inline-block w-full rounded-full border border-primary px-5 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-background sm:w-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;