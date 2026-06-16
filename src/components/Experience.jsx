import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const sectionVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="section-eyebrow"># 03 — Experience</p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold mb-12 tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Where I've Worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "var(--border)" }}
          />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative sm:pl-10 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[3px] hidden sm:block"
                style={{ background: "var(--blue)" }}
              />

              <div className="card p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className="font-display text-lg font-semibold mb-1"
                      style={{ color: "var(--text)" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="font-mono text-sm"
                      style={{ color: "var(--blue)" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="font-mono text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: "var(--surface-2)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--blue)" }}
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10">
        <div className="section-divider" />
      </div>
    </section>
  );
};

export default Experience;
