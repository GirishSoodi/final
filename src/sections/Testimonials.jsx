import { motion } from "framer-motion";

import img1 from "../assets/photo1.JPG";
import img2 from "../assets/photo2.PNG";
import img3 from "../assets/photo3.png";
import img4 from "../assets/img1.JPG";
import img5 from "../assets/img2.JPG";
import h from "../assets/h.jpg";
import s from "../assets/s.webp";
import c from "../assets/c.webp";
import ps from "../assets/ps.webp";

const photos = [img1, img2, img3, img4, img5, h, s, c, ps];

const playlists = [
  {
    title: "Deep Focus",
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd",
  },
  {
    title: "Coding Mode",
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS",
  },
  {
    title: "Chill Vibes",
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6",
  },
  {
    title: "Late Night Work",
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7gIoKXt0gmx",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-32"
    >
      {/* Title */}
      <motion.h2
        className="text-center text-4xl md:text-5xl font-extrabold mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Vibes & Inspiration
      </motion.h2>

      {/* Seamless Floating Image Marquee */}
      <div className="relative w-full overflow-hidden mb-32">
        <motion.div
          className="flex flex-nowrap gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...photos, ...photos].map((img, i) => (
            <div
              key={i}
              className="relative w-[240px] h-[320px] flex-shrink-0
              rounded-2xl overflow-hidden
              bg-white/5 border border-white/10
              shadow-2xl backdrop-blur-md"
            >
              <img
                src={img}
                alt="playlist visual"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Spotify Playlists */}
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-xl md:text-2xl font-semibold text-center mb-12 text-white/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What I Listen To While Building 🚀
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {playlists.map((playlist, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden
              border border-white/10 shadow-xl bg-black"
            >
              <div className="px-4 py-3 text-sm text-white/70 font-medium">
                {playlist.title}
              </div>

              <iframe
                src={playlist.url}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
