import React from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Moving Text Strip */}
      <div className="border-t border-b border-white/10 py-10 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap text-[clamp(2rem,6vw,4rem)] font-extrabold tracking-tight"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-12 text-white/80">
              LET’S BUILD SOMETHING COOL ✦
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Thanks for stopping by ✨
        </motion.h2>

        <p className="mt-6 text-white/60 max-w-xl mx-auto">
          Designed & built by Girish with passion for motion, design,
          and meaningful digital experiences.
        </p>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-8">
          {[
            {
              icon: <FiInstagram />,
              link: "https://instagram.com/yourusername",
            },
            {
              icon: <FiLinkedin />,
              link: "http://www.linkedin.com/in/girish-soodi-310b1b311 ",
            },
            {
              icon: <FiGithub />,
              link: "https://github.com/GirishSoodi",
            },
            {
              icon: <FiMail />,
              link: "mailto:soodisoumya@gmail.com",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.15 }}
              className="text-2xl text-white/70 hover:text-white transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-16 text-sm text-white/40">
          © {new Date().getFullYear()} Girish. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
