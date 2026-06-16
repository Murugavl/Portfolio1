import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../constants";

const cardVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const ProjectCard = ({ project, index }) => (
  <motion.article
    custom={index}
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    className="card flex flex-col overflow-hidden group"
    aria-label={project.title}
  >
    {/* Image */}
    <div
      className="relative overflow-hidden"
      style={{ aspectRatio: "16/9", background: "var(--surface-2)" }}
    >
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
        style={{ background: "rgba(11,14,20,0.7)" }}
      >
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-3 py-2"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt size={11} />
            Live Demo
          </a>
        )}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline text-xs px-3 py-2"
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub size={13} />
          Code
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5">
      <h3
        className="font-display text-base font-semibold mb-2"
        style={{ color: "var(--text)" }}
      >
        {project.title}
      </h3>
      <p
        className="text-sm leading-relaxed flex-1 mb-4"
        style={{ color: "var(--text-muted)" }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Footer links */}
      <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono transition-colors duration-200"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <FaGithub size={14} />
          Source
        </a>
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            aria-label={`View ${project.title} live demo`}
          >
            <FaExternalLinkAlt size={12} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow"># 04 — Projects</p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Things I've Built
          </h2>
          <p
            className="text-base mb-12 max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            End-to-end ML pipelines, deployed web apps, and desktop tools — all
            with source code.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
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

export default Projects;
