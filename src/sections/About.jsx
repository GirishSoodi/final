import { motion } from "framer-motion";
import React from "react";
import profileImg from "../assets/boy.jpg";

export default function About() {

  const stats = [
    {label : "Experience", value: "1+ Years" },
    {label : "Speciality", value: "Full Stack" },
    {label : "Focus", value: "Performance & UX" },
  ];
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative w-[160px] h-[160px] md:w-[160px] md:h-[160px]
            rounded-xl overflow-hidden shadow-xl
            bg-gradient-to-br from-[#1cd8d2]/20 via-[#00bf8f]/20 to-[#302b63]/20
            border border-[#1cd8d2]/25"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]">
              Girish Soodi
            </h2>

            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer
            </p>

            <p className="mt-4 text-white/70 leading-relaxed text-base sm:text-lg max-w-2xl">
              I'm a passionate full-stack developer focused on building modern,
              scalable, and visually engaging web applications using React,
              Node.js, and cutting-edge frontend technologies.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {stats.map((item, i) => (
                <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i , duration: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}>
                  <div className="text-sm text-gray-400">
                    {item.label}
                  </div>
                  <div className="text-base font-smibold">{item.value}</div>

                </motion.div>
              ))}

            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white-200 transition">Get in Touch</a>
            </div>
          </div>
        </motion.div>
        <motion.div className="text-center md:text-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            About Me
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg">
            With a strong foundation in both frontend and backend technologies, I specialize in creating seamless user experiences and robust server-side solutions. My expertise includes React, Next.js, Node.js, Express, and databases like MongoDB and PostgreSQL. I am dedicated to writing clean, efficient code and continuously learning to stay updated with the latest industry trends.

          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            I'm passionate about solving complex problems and turning ideas into reality through code. My journey in web development started with a curiosity for how things work, and it has evolved into a career where I get to build innovative solutions every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
