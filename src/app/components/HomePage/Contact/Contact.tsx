"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaSpinner } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoMdMailUnread } from "react-icons/io";
import { motion } from "framer-motion";

const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://my-portfolio-server-neon.vercel.app/form-message",
        data
      );
      if (response) {
        toast.success("Message Sent Successfully!", {
          className: "w-[300px] h-[100px] text-xl font-bold",
          removeDelay: 1000,
          iconTheme: {
            primary: "#c4cfd2",
            secondary: "#14ff3d",
          },
          style: {
            border: "1px solid var(--accent)",
            color: "black",
            backgroundImage: "linear-gradient(to bottom right, var(--primary), var(--secondary))",
          },
        });
        form.reset();
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="px-3 lg:px-3 xl:px-0 border-t border-border flex flex-col lg:flex-row gap-3 md:gap-6 container mx-auto py-24 md:py-32 xl:py-36"
    >
      {/* Left side - contact info */}
      <div className="cnts flex-1 w-full">
        <motion.h6
          variants={itemVariants}
          className="text-center lg:text-left mb-3 text-sm md:text-xl text-primary font-primary"
        >
          CONTACT ME
        </motion.h6>
        <motion.h1
          variants={itemVariants}
          className="text-center lg:text-left font-primary text-2xl md:text-4xl lg:text-5xl text-foreground font-bold"
        >
          Got a Project? Let&apos;s Chat!
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 md:mt-12 text-center lg:text-left font-secondary text-foreground-muted text-[17px] md:text-xl"
        >
          Whether you have a question, project idea, or want to connect — I&apos;m
          always open to meaningful conversations.
        </motion.p>

        {/* Location */}
        <motion.div variants={itemVariants} className="flex items-center flex-col md:flex-row gap-6 mt-12">
          <span className="inline-flex items-center justify-center md:p-4 lg:p-5 p-3 md:rounded-xl rounded-md bg-gradient-to-br from-primary/30 to-background-elevated shadow-lg text-foreground text-2xl transition duration-300 hover:from-primary/20 hover:to-surface-3 hover:text-primary">
            <GrLocation />
          </span>
          <div>
            <h6 className="text-center md:text-left text-sm mb-2 text-primary font-primary">
              LOCATION
            </h6>
            <h1 className="text-center md:text-left font-primary text-xl md:text-2xl text-foreground font-bold">
              Jashore, Khulna, Bangladesh.
            </h1>
          </div>
        </motion.div>

        {/* Phone / WhatsApp */}
        <motion.div variants={itemVariants} className="flex items-center flex-col md:flex-row gap-6 mt-12">
          <span className="inline-flex items-center justify-center md:p-4 lg:p-5 p-3 md:rounded-xl rounded-md bg-gradient-to-br from-primary/30 to-background-elevated shadow-lg text-foreground text-2xl transition duration-300 hover:from-primary/20 hover:to-surface-3 hover:text-primary">
            <FaPhoneAlt />
          </span>
          <div>
            <h6 className="text-center md:text-left text-sm mb-2 text-primary font-primary">
              WHATSAPP
            </h6>
            <h1 className="text-center md:text-left font-primary text-xl md:text-2xl text-foreground font-bold">
              +8801904240740
            </h1>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants} className="flex items-center flex-col md:flex-row gap-6 mt-12">
          <span className="inline-flex items-center justify-center md:p-4 lg:p-5 p-3 md:rounded-xl rounded-md bg-gradient-to-br from-primary/30 to-background-elevated shadow-lg text-foreground text-2xl transition duration-300 hover:from-primary/20 hover:to-surface-3 hover:text-primary">
            <IoMdMailUnread />
          </span>
          <div>
            <h6 className="text-center md:text-left text-sm mb-2 text-primary font-primary">
              E-Mail
            </h6>
            <h1 className="text-center md:text-left font-primary md:text-xl lg:text-2xl text-foreground font-bold">
              mdkhalidhossain5000@gmail.com
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Right side - form */}
      <motion.div
        variants={itemVariants}
        className="mt-6 md:mt-0 flex-1 p-5 md:p-8 bg-gradient-to-br from-surface-3 to-background/90 shadow-[0_0_15px_rgba(103,230,76,0.1)] hover:shadow-[0_0_25px_rgba(103,230,76,0.25)] transition-shadow duration-300"
      >
        <form onSubmit={handleFormMessage}>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <p className="text-foreground-muted font-primary mb-3 md:mb-4 uppercase">
                Enter Your Name
              </p>
              <input
                style={{
                  boxShadow:
                    "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
                }}
                className="w-full bg-background-surface rounded-md h-14 border-2 border-background-surface px-4 focus:border-primary focus:outline-none text-foreground placeholder:text-foreground-dim"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="flex-1">
              <p className="text-foreground-muted font-primary mb-3 md:mb-4 uppercase">
                Subject
              </p>
              <input
                style={{
                  boxShadow:
                    "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
                }}
                className="w-full bg-background-surface rounded-md h-14 border-2 border-background-surface px-4 focus:border-primary focus:outline-none text-foreground placeholder:text-foreground-dim"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
          </div>

          <p className="text-foreground-muted font-primary mb-3 md:mb-4 uppercase mt-6">
            Your Email <span className="text-red-600">*</span>
          </p>
          <input
            style={{
              boxShadow:
                "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
            }}
            className="w-full bg-background-surface rounded-md h-14 border-2 border-background-surface px-4 focus:border-primary focus:outline-none text-foreground placeholder:text-foreground-dim"
            type="email"
            placeholder="Your Email"
            required
            name="email"
          />

          <p className="pt-3 text-foreground-muted font-primary mb-3 md:mb-4 uppercase">
            Your Message <span className="text-red-600">*</span>
          </p>
          <textarea
            style={{
              boxShadow:
                "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
            }}
            className="my-2 w-full bg-background-surface rounded-md border-2 border-background-surface px-4 focus:border-primary focus:outline-none text-foreground placeholder:text-foreground-dim"
            name="message"
            rows={6}
            placeholder="Message"
            required
          />

          <div className="mt-6 md:mt-9 lg:mt-12">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full my-2 md:my-0 text-sm text-background bg-primary py-3 px-5 sm:py-3 sm:px-5 rounded-full lg:text-xl font-bold cursor-pointer transition duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;