import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const experiences = [
  {
    title: "Cubiccode Digital Media LLP",
    role: "Intern – Web Development",
    date: "April 2025 – May 2025",
    location: "Belagavi, 590009",
    points: [
      "Hands-on experience with Laravel framework",
      "Worked on frontend & backend modules",
      "Designed responsive UI layouts",
    ],
  },
  {
    title: "Ultimez Technology Pvt. Ltd",
    role: "Software Intern",
    date: "July 2025 – Aug 2025",
    location: "Hubballi",
    points: [
      "Developed meeting recording web application",
      "Integrated Whisper speech-to-text",
      "AI summarization using LLMs",
      "Extracted action items",
      "Exported to Notion & Google Docs",
    ],
  },
  {
    title: "Pantech.ai (Warriors Way)",
    role: "Full Stack Intern",
    date: "June 2024 – Sept 2024",
    location: "Online",
    points: [
      "Frontend: HTML, CSS, JS, React",
      "Backend: Node.js, Express",
      "MongoDB integration",
      "REST API development",
      "Git & GitHub collaboration",
    ],
  },
  {
    title: "Angadi Institute of Technology",
    role: "B.E. Computer Science",
    date: "Dec 2022 – Present",
    location: "Belagavi",
    points: ["CGPA: 8.66"],
  },
  {
    title: "Konnur Science P.U College",
    role: "Pre-University (Science)",
    date: "Dec 2020 – May 2022",
    location: "Yallatti",
    points: ["Grade: 89.9%"],
  },
  {
    title: "K.J. Somaiya English Medium School",
    role: "10th Grade",
    date: "Jun 2019 – May 2020",
    location: "Sameerwadi",
    points: ["Grade: 79.6%"],
  },
];

export default function Experience() {
  const containerRef = useRef(null);

  // For the animated drawing line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        className="text-center text-4xl md:text-5xl font-extrabold mb-32"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience & Education
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        {/* The Animated Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2 hidden md:block" />
        <motion.div
          style={{ scaleY }}
          className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-emerald-400 to-indigo-500 -translate-x-1/2 origin-top hidden md:block"
        />

        <div className="space-y-24 md:space-y-12">
          {experiences.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex flex-col md:flex-row w-full items-center ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Center Dot (Hidden on mobile if preferred, or centered) */}
      <div className="absolute left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] -translate-x-1/2 z-10 hidden md:block" />

      {/* Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-[45%]"
      >
        <div className="relative group bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/[0.08] hover:border-cyan-500/50 transition-all duration-500">
          {/* Subtle Glow Effect on Hover */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <span className="text-cyan-400 text-sm font-bold tracking-widest">
            {item.date}
          </span>
          
          <h3 className="text-2xl font-bold mt-2 text-white">
            {item.title}
          </h3>
          
          <p className="text-emerald-400 font-medium mb-1">
            {item.role}
          </p>
          
          <p className="text-white/40 text-xs mb-6 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {item.location}
          </p>

          <ul className="space-y-3">
            {item.points.map((point, i) => (
              <li key={i} className="text-white/70 text-sm leading-relaxed flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}