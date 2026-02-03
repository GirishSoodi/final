import React, { useRef } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

import img1 from "../assets/photo1.JPG";
import img2 from "../assets/photo2.PNG";
import img3 from "../assets/photo3.png";
import h from "../assets/h.jpg";
import c from "../assets/c.webp";
import s from "../assets/s.webp";
import ps from "../assets/ps.webp";

export default function Contact() {
  const constraintsRef = useRef(null);

  return (
    <section
      id="contact"
      ref={constraintsRef}
      className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-32 flex items-center justify-center"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[420px] h-[420px]
        bg-gradient-to-r from-[#1cd8d2]/30 via-[#00bf8f]/30 to-[#302b63]/30 blur-[160px]" />
      </div>

      {/* Center Text */}
      <motion.div
        className="relative z-10 text-center max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold">
          Let’s Connect
        </h2>

        <p className="mt-4 text-white/70">
          Drag things around. Play with the space.
          <br />
          Music, visuals & conversations ✨
        </p>

        <motion.a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10 px-10 py-4 rounded-full
          bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
          text-black font-semibold shadow-2xl"
        >
          Connect on Instagram
        </motion.a>
      </motion.div>

      {/* Floating Images */}
      <motion.img
        src={img1}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute z-10 top-32 left-20 w-40 h-52 rounded-2xl object-cover shadow-2xl cursor-grab"
      />

      <motion.img
        src={img2}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        animate={{ y: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute z-10 bottom-40 left-1/4 w-36 h-48 rounded-2xl object-cover shadow-2xl cursor-grab"
      />

      <motion.img
        src={img3}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute z-10 top-40 right-24 w-44 h-56 rounded-2xl object-cover shadow-2xl cursor-grab"
      />

      <motion.img
        src={h}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute z-10 top-40 right-24 w-44 h-56 rounded-2xl object-cover shadow-2xl cursor-grab"
      />

      <motion.img
        src={s}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute z-10 top-40 right-24 w-44 h-56 rounded-2xl object-cover shadow-2xl cursor-grab"
      />

      <motion.img
        src={ps}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute z-10 top-40 right-24 w-44 h-56 rounded-2xl object-cover shadow-2xl cursor-grab"
      />

      <motion.img
        src={c}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute z-10 top-40 right-24 w-44 h-56 rounded-2xl object-cover shadow-2xl cursor-grab"
      />

      {/* Draggable Spotify */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        whileHover={{ scale: 1.02 }}
        className="absolute z-10 bottom-20 right-20 w-[320px]
        rounded-2xl overflow-hidden border border-white/10
        shadow-2xl bg-black cursor-grab"
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"
          width="100%"
          height="380"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        whileHover={{ scale: 1.02 }}
        className="absolute z-10 bottom-20 right-20 w-[320px]
        rounded-2xl overflow-hidden border border-white/10
        shadow-2xl bg-black cursor-grab"
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS"
          width="100%"
          height="380"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        whileHover={{ scale: 1.02 }}
        className="absolute z-10 bottom-20 right-20 w-[320px]
        rounded-2xl overflow-hidden border border-white/10
        shadow-2xl bg-black cursor-grab"
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6"
          width="100%"
          height="380"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </motion.div>

      {/* 🔹 Draggable Social Icons */}
      <motion.a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        drag
        dragConstraints={constraintsRef}
        className="absolute z-10 top-24 right-1/3 w-14 h-14 rounded-full
        bg-white/5 border border-white/10 backdrop-blur-md
        flex items-center justify-center text-2xl
        shadow-xl cursor-grab"
      >
        <FiInstagram />
      </motion.a>

      <motion.a
        href="http://www.linkedin.com/in/girish-soodi-310b1b311 "
        target="_blank"
        rel="noopener noreferrer"
        drag
        dragConstraints={constraintsRef}
        className="absolute z-10 bottom-32 left-20 w-14 h-14 rounded-full
        bg-white/5 border border-white/10 backdrop-blur-md
        flex items-center justify-center text-2xl
        shadow-xl cursor-grab"
      >
        <FiLinkedin />
      </motion.a>

      <motion.a
        href="mailto : soodisoumya@gmail.com"
        drag
        dragConstraints={constraintsRef}
        className="absolute z-10 top-1/2 right-10 w-14 h-14 rounded-full
        bg-white/5 border border-white/10 backdrop-blur-md
        flex items-center justify-center text-2xl
        shadow-xl cursor-grab"
      >
        <FiMail />
      </motion.a>
    </section>
  );
}
