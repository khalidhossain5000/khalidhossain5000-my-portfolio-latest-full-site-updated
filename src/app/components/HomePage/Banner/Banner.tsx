"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; 
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight } from "lucide-react";
import profileImg from "../../../../assets/profile/profile-pic.png";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Banner: React.FC = () => {

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  // Explicitly typed as Variants)
  const childVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    float: {
      y: [-8, 8, -8],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 lg:py-12 overflow-hidden bg-linear-to-b from-background via-surface-1 to-background container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      {/* bg animation */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-100 h-100 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[20rem] h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          {/* left side content section */}
          <motion.div
            className="w-full lg:w-[60%] text-center lg:text-left pt-8 lg:pt-0"
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
          >
            <motion.p
              className="text-primary font-medium font-secondary tracking-[0.2em] uppercase mb-3"
              variants={childVariant}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="font-special text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.15] mb-2"
              variants={childVariant}
            >
              Md. Khalid{" "}
              <span className="text-primary block sm:inline">Hossain</span>
            </motion.h1>

            {/* Designation type animation */}
            <motion.div
              className="font-secondary font-semibold xl:font-bold text-foreground-muted mt-2 min-h-14 lg:min-h-16 flex items-center justify-center lg:justify-start"
              variants={childVariant}
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Web Developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "FrontEnd Developer",
                  2000,
                  "BackEnd Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Next Js Developer",
                  2000,
                  "React Js Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text glowing-cursor text-xl sm:text-2xl lg:text-3xl xl:text-4xl "
                style={{ backgroundImage: "var(--gradient-brand)" }}
                cursor={false}
              />
            </motion.div>

            <motion.p
              className="max-w-xl mx-auto lg:mx-0 text-foreground-muted text-base sm:text-lg leading-relaxed mt-4 xl:max-w-2xl"
              variants={childVariant}
            >
              Focused on building optimized, data-driven digital solutions with
              modern frameworks. Expertly leveraging React and Next.js for fluid
              user experiences, paired with structured relational databases and
              secure backend architectures using Node.js, Express.js,
              PostgreSQL, and Prisma.
            </motion.p>

            {/* Social Icons Section */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4 pt-6 lg:pt-9"
              variants={childVariant}
            >
              {/* GitHub */}
              <motion.a
                href="https://github.com/khalidhossain5000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-1 border-2 border-border-strong text-foreground-muted rounded-xl transition-colors duration-300 flex items-center justify-center hover:text-primary hover:border-primary"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: "var(--glow-primary)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="h-5 w-5" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/md-khalid-hossain-s"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-1 border-2 border-border-strong text-foreground-muted rounded-xl transition-colors duration-300 flex items-center justify-center hover:text-primary hover:border-primary"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: "var(--glow-primary)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn className="h-5 w-5" />
              </motion.a>

              {/* Twitter / X */}
              {/* <motion.a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-1 border-2 border-border-strong text-foreground-muted rounded-xl transition-colors duration-300 flex items-center justify-center hover:text-primary hover:border-primary"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: "var(--glow-primary)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaXTwitter className="h-5 w-5" />
              </motion.a> */}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6"
              variants={childVariant}
            >
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-background font-secondary font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-(--glow-primary) hover:shadow-lg hover:-translate-y-1"
              >
                <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-border-strong text-foreground font-secondary font-bold rounded-xl hover:border-primary hover:text-primary bg-surface-1 transition-all duration-300 hover:-translate-y-1"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* right side image section */}
          <motion.div
            className="w-full lg:w-[40%] flex justify-center"
            initial="hidden"
            animate={["visible", "float"]}
            variants={imageVariants}
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-90 lg:w-90 lg:h-110 xl:w-100 xl:h-120">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-primary/20 bg-surface-2 shadow-(--glow-soft)"></div>

              <motion.div
                className="absolute -inset-2 rounded-2xl bg-linear-to-br from-primary/30 via-secondary/10 to-accent/10 blur-xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* image container */}
              <motion.div
                className="absolute inset-0 w-full h-full rounded-2xl border-2 border-primary/40 bg-surface-3 overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03, borderColor: "var(--primary)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={profileImg}
                  alt="Md. Khalid Hossain - Professional portrait"
                  fill
                  className="object-cover object-center drop-shadow-2xl saturate-150 contrast-120 transition duration-500"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 400px"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;