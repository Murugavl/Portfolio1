import React from "react";
import { motion } from "framer-motion";

const TechnologyBadges = ({ techs }) => {
  if (!techs || !Array.isArray(techs)) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <motion.span
          key={tech}
          whileHover={{
            scale: 1.08,
            y: -2,
            boxShadow: "0 4px 12px rgba(91, 168, 255, 0.2)",
            borderColor: "var(--blue)",
            color: "var(--text)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="cursor-default select-none border rounded-md px-2.5 py-1 text-xs font-mono font-medium transition-colors"
          style={{
            background: "rgba(91, 168, 255, 0.05)",
            borderColor: "rgba(91, 168, 255, 0.2)",
            color: "var(--blue)"
          }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
};

export default TechnologyBadges;
