import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaDesktop } from "react-icons/fa";

const cardVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const ProjectCard = ({ project, index, onPreviewClick }) => {
  const hasLiveDemo = Boolean(project.liveDemo && project.liveDemo.trim() !== "");

  return (
    <motion.article
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{
        y: -6,
        scale: 1.02,
        borderColor: "rgba(91, 168, 255, 0.4)",
        boxShadow: "0 20px 40px -15px rgba(91, 168, 255, 0.15), 0 0 0 1px rgba(91, 168, 255, 0.1)"
      }}
      className="flex flex-col rounded-xl border overflow-hidden transition-all duration-300 group"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
      aria-label={project.title}
    >
      {/* Image Container */}
      <div
        className="relative overflow-hidden shrink-0 cursor-pointer"
        style={{ aspectRatio: "16/9", background: "var(--surface-2)" }}
        onClick={() => onPreviewClick(project)}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
        />
        {/* Subtle Overlay Hint */}
        <div 
          className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 bg-[#0b0e14]/90 text-white shadow-lg border border-slate-700/50"
          >
            <FaDesktop className="text-[11px]" style={{ color: "var(--blue)" }} />
            Showcase Sandbox
          </motion.span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-5 space-y-4">
        <div className="space-y-2">
          <h3
            className="font-display text-base font-bold text-white tracking-tight"
          >
            {project.title}
          </h3>
          <p
            className="text-xs leading-relaxed line-clamp-3"
            style={{ color: "var(--text-muted)" }}
          >
            {project.description}
          </p>
        </div>

        {/* Tech Stack Badges (first 4) */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.techStack.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-0.5 rounded text-[10px] font-mono select-none"
              style={{
                background: "rgba(91, 168, 255, 0.05)",
                color: "var(--blue)",
                border: "1px solid rgba(91, 168, 255, 0.12)"
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] font-mono text-slate-500 self-center pl-0.5">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Card Footer Actions */}
        <div 
          className="flex items-center gap-2 pt-4 border-t" 
          style={{ borderColor: "var(--border)" }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onPreviewClick(project)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer"
            style={{
              background: "var(--blue)",
              color: "var(--ink)"
            }}
          >
            {hasLiveDemo ? "Live Preview" : "Sandbox"}
          </motion.button>
          
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg text-xs font-medium border transition-colors hover:text-white"
            style={{
              borderColor: "var(--border-hover)",
              background: "transparent",
              color: "var(--text)"
            }}
            title="View Code on GitHub"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <FaGithub className="text-sm" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
