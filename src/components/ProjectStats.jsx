import React from "react";
import { motion } from "framer-motion";

const ProjectStats = ({ project }) => {
  // Extract stats and map them into display pairs
  const statsList = [
    { label: "Deployment", value: project.deploymentPlatform },
    { label: "Frontend Stack", value: project.frontend },
    { label: "Backend Stack", value: project.backend },
    { label: "Database", value: project.database },
    { label: "Cloud Storage", value: project.cloudStorage },
    { label: "Authentication", value: project.authentication },
    { label: "Responsive", value: project.liveDemo ? "Yes" : "Adaptive" },
    { label: "API Protocol", value: project.api },
    { label: "Architecture", value: project.architecture },
  ];

  // Filter out empty/None values if preferred, but user requested showing them, let's display non-empty ones nicely
  const activeStats = statsList.filter(
    (stat) => stat.value && stat.value !== "" && stat.value !== "None"
  );

  if (activeStats.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {activeStats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.04 }}
          whileHover={{
            borderColor: "rgba(91, 168, 255, 0.3)",
            boxShadow: "0 4px 12px rgba(91, 168, 255, 0.05)",
            y: -1
          }}
          className="p-3 border rounded-lg flex flex-col justify-between h-[72px]"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)"
          }}
        >
          <span className="text-[10px] uppercase font-mono tracking-wider font-semibold" style={{ color: "var(--text-muted)" }}>
            {stat.label}
          </span>
          <span className="text-xs sm:text-sm font-semibold truncate pt-1" style={{ color: "var(--text)" }}>
            {stat.value}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectStats;
