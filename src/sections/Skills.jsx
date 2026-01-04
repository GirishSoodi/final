import { motion } from "framer-motion";

export function Skills() {
  const skills = ["AI / ML", "React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Framer Motion"];

  return (
    <section id="skills" className="py-40 bg-black text-white overflow-hidden">
      <motion.h2
        className="text-center text-4xl font-bold mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: [0, -1600] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <div key={i} className="px-10 py-4 rounded-full border border-white/20 text-lg bg-white/5 backdrop-blur-md">
            {skill}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
