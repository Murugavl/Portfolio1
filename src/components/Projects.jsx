import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";
import ProjectPreviewModal from "./ProjectPreviewModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenPreview = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleClosePreview = () => {
    setIsModalOpen(false);
  };

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
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              onPreviewClick={handleOpenPreview}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10">
        <div className="section-divider" />
      </div>

      {/* Showcase Modal */}
      <ProjectPreviewModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleClosePreview}
      />
    </section>
  );
};

export default Projects;
