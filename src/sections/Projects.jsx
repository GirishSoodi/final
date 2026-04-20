import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

// Desktop images
import img1 from "../assets/Screenshot 2026-04-17 201219.png";
import img2 from "../assets/Screenshot 2026-03-06 125521.png";
import img3 from "../assets/Screenshot 2026-04-17 204050.png";

// Mobile images
import photo2 from "../assets/Screenshot 2026-04-20 130416.png";
import photo3 from "../assets/Screenshot 2026-04-20 131818.png";

/* ---------- Mobile Detection ---------- */
const useIsMobile = (query = "(max-width: 638px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

/* ---------- Projects ---------- */
export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "Intelligent Traffic",
        bgcolor: "#50C878",
        image: img2,
        link: "https://github.com/GirishSoodi/traffic",
      },
      {
        title: "AI Resume Builder",
        bgcolor: "#16a34a",
        image: isMobile ? photo2 : img1,
        link: "https://resume-builder-frontend-bqa9.onrender.com",
      },
      {
        title: "E-Commerce Store",
        bgcolor: "#f97316",
        image: isMobile ? photo3 : img3, // ✅ fixed typo
        link: "https://ecommerce-frontend-qb0s.onrender.com",
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        background: activeProject.bgcolor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold z-10 text-center mb-6">
          My Work
        </h2>

        <div className="relative w-full flex-1 flex items-center justify-center">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500
              ${
                activeIndex === idx
                  ? "opacity-100 z-20"
                  : "opacity-0 z-0"
              }`}
              style={{ width: "85%", maxWidth: "1200px" }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center text-[clamp(2rem,6vw,5rem)] italic font-semibold mb-6"
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              {/* 🔥 Clickable Image */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full overflow-hidden bg-black/20 shadow-2xl rounded-xl
                h-[62vh] sm:h-[66vh] transform hover:scale-105 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{
                    filter:
                      "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
