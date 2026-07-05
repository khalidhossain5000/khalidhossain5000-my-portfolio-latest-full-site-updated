"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Terminal, Code2, Palette, Trophy } from "lucide-react";
import Title from "../../shared/Title/Title";

const About: React.FC = () => {
  // Container stagger animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  // Upward fade-in for layout blocks
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Card hover interactions
  const cardHover: Variants = {
    hover: {
      y: -6,
      borderColor: "var(--primary)",
      boxShadow: "var(--glow-primary)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      
      {/* Top Section Border Light Ray */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

      {/* Enhanced Multi-Layer Ambient Glow System */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Top Left Deep Primary Spot */}
        <motion.div
          className="absolute -top-20 -left-20 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-[130px]"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Right Middle Accent Glow */}
        <motion.div
          className="absolute top-1/4 -right-20 w-[32rem] h-[32rem] bg-accent/10 rounded-full blur-[140px]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bottom Left Secondary Aura */}
        <motion.div
          className="absolute -bottom-10 left-10 w-[28rem] h-[28rem] bg-secondary/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Center Subtly Pulsing Core Overlay */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-primary/5 rounded-full blur-[160px]"
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium font-secondary tracking-[0.2em] uppercase mb-2">
            My Story
          </p>
       
          <Title mainText="About" highlightText="Me"/>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full shadow-(--glow-primary)" />
        </motion.div>

        {/* Content Layout Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Left Column: Streamlined, Highly Professional Programming Journey */}
          <motion.div className="lg:col-span-7 space-y-5" variants={fadeInUp}>
            <div className="flex items-center gap-2.5 text-primary font-semibold font-secondary tracking-wide uppercase text-sm ">
              <Terminal className="h-4 w-4 hidden sm:block" />
              <span>The Codebase Evolution</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-special leading-snug">
              Turning complex structural concepts into fluid, functional, and striking web ecosystems.
            </h3>
            
            <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
              Hello! I&apos;m <span className="text-foreground font-semibold">Khalid Hossain</span>—a full‑stack web developer specialized in building sleek, high-performance digital experiences. Driven by an initial curiosity for UI styling, I mastered <span className="text-primary font-medium">Tailwind CSS</span> to build responsive layouts, which quickly sparked my transition into complex component-driven layouts inside <span className="text-foreground font-semibold">React</span> and <span className="text-foreground font-semibold">Next.js</span>.
            </p>

            <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
              To master the full application cycle, I extended my focus to server architectures with <span className="text-primary font-medium">Node.js, Express, and MongoDB</span>. Successfully mapping data channels directly to polished modular frontends fueled my passion for complete system ownership.
            </p>

            <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
              Today, my focus centers on robust software design. I leverage <span className="text-foreground font-semibold">TypeScript</span> for structural safety, handle strict relational data with raw <span className="text-foreground font-semibold">SQL & PostgreSQL</span>, and utilize <span className="text-primary font-medium">Prisma ORM</span> to deploy type-safe, optimized data pipelines.
            </p>

            <p className="text-foreground-muted text-base sm:text-lg leading-relaxed font-medium italic border-l-2 border-primary/40 pl-4 bg-primary/5 py-2 pr-2 rounded-r-lg">
              I believe great systems are engineered by people who aren&apos;t just writing features, but are genuinely committed to continuous improvement—one clean commit at a time.
            </p>
          </motion.div>

          {/* Right Column: Balanced Preference Cards */}
          <motion.div className="lg:col-span-5 grid grid-cols-1 gap-5" variants={fadeInUp}>
            
            {/* Card 1: Work I Enjoy */}
            <motion.div 
              className="p-5 bg-surface-1/40 backdrop-blur-md border border-[#65e24b]  border-border-strong rounded-xl flex gap-4 transition-colors duration-300 hover:bg-surface-1/80 shadow-sm"
              variants={cardHover}
              whileHover="hover"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit hidden sm:block">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-md font-bold text-foreground mb-1 font-secondary">
                  The Work I Love Doing
                </h4>
                <p className="text-foreground-muted text-sm sm:text-base leading-relaxed">
                  I thrive at the intersection of clean system layers and smooth user interaction. Designing REST APIs, setting type-safe interfaces, or refactoring messy legacy modules into highly reusable logic is my sweet spot.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Creative Pursuits */}
            <motion.div 
              className="p-5 bg-surface-1/40 backdrop-blur-md border border-[#65e24b]  border-border-strong rounded-xl flex gap-4 transition-colors duration-300 hover:bg-surface-1/80 shadow-sm"
              variants={cardHover}
              whileHover="hover"
            >
              <div className="p-3 bg-accent/10 text-accent rounded-xl h-fit hidden sm:block">
                <Palette className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-md font-bold text-foreground mb-1 font-secondary">
                  Creative Pursuits
                </h4>
                <p className="text-foreground-muted text-sm sm:text-base leading-relaxed">
                  Outside of raw terminal screens, I maintain an active engagement with sketching and design aesthetics. This creative eye plays a massive role in maintaining layout symmetry, balance, and fine UI transitions.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Keeping Active */}
            <motion.div 
              className="p-5 bg-surface-1/40 backdrop-blur-md border border-[#65e24b] border-border-strong rounded-xl flex gap-4 transition-colors duration-300 hover:bg-surface-1/80 shadow-sm"
              variants={cardHover}
              whileHover="hover"
            >
              <div className="p-3 bg-secondary/10 text-secondary rounded-xl h-fit hidden sm:block">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-md font-bold text-foreground mb-1 font-secondary">
                  Keeping Active
                </h4>
                <p className="text-foreground-muted text-sm sm:text-base leading-relaxed">
                  To reset my mental focus, I disconnect from web platforms to play high-energy competitive sports. Staying physically active strengthens my focus, clarity, and adaptive split-second problem solving.
                </p>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;