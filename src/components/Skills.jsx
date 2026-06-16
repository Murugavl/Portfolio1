import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const sectionVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const PyLine = ({ varName, items }) => (
  <div className="py-block mb-4">
    <span className="py-var">{varName}</span>
    <span className="py-op">{" "}</span>
    <span className="py-op">{"="}</span>
    <span className="py-op">{" "}</span>
    <span className="py-bracket">{"["}</span>
    <div className="flex flex-wrap gap-x-0 pl-4 mt-1">
      {items.map((item, i) => (
        <span key={item}>
          <span className="py-str">&quot;{item}&quot;</span>
          {i < items.length - 1 && <span className="py-comma">,{" "}</span>}
        </span>
      ))}
    </div>
    <span className="py-bracket">{"]"}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="section-eyebrow"># 02 — Skills</p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--text)" }}
          >
            What I Work With
          </h2>
          <p
            className="text-base mb-12 max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Fluent in Python across the full ML lifecycle — from notebook to
            deployed web app.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          {/* Comment */}
          <p className="font-mono text-sm mb-4" style={{ color: "var(--text-muted)" }}>
            # skills.py
          </p>

          <PyLine varName="languages" items={SKILLS.languages} />
          <PyLine varName="frameworks" items={SKILLS.frameworks} />
          <PyLine varName="tools" items={SKILLS.tools} />
        </motion.div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10">
        <div className="section-divider" />
      </div>
    </section>
  );
};

export default Skills;
