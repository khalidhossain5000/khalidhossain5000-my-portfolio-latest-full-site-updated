'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from './projects-data';
import Title from '../../shared/Title/Title';

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};



const defaultRevealVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-[130px] "
        animate={shouldReduceMotion ? undefined : { opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary/20 blur-[110px]"
        animate={shouldReduceMotion ? undefined : { opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      <div className="custom-max-width relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
          initial={shouldReduceMotion ? undefined : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.4 }}
          variants={headingVariants}
        >
       
           <p className="text-primary font-medium font-secondary tracking-[0.2em] uppercase mb-2 text-center">
            Projects log
          </p>
          <h1
               className={`font-special text-4xl sm:text-5xl xl:text-6xl  font-bold text-foreground leading-[1.15] mb-2 text-center mr-1`}
            
             >
              Featured <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-brand)" }}>Projects</span>
               
             </h1>


             
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 "
          initial={shouldReduceMotion ? undefined : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;