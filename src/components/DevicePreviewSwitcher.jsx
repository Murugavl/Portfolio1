import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const DevicePreviewSwitcher = ({ currentDevice, onDeviceChange }) => {
  const devices = [
    { id: "desktop", label: "Desktop", icon: FaDesktop },
    { id: "tablet", label: "Tablet", icon: FaTabletAlt },
    { id: "mobile", label: "Mobile", icon: FaMobileAlt },
  ];

  return (
    <div className="flex items-center justify-center">
      <div 
        className="flex items-center p-1 border rounded-lg"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)"
        }}
      >
        {devices.map((device) => {
          const Icon = device.icon;
          const isActive = currentDevice === device.id;

          return (
            <button
              key={device.id}
              onClick={() => onDeviceChange(device.id)}
              className="relative flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-colors focus:outline-none"
              style={{
                color: isActive ? "var(--ink)" : "var(--text-muted)"
              }}
            >
              {/* Highlight backdrop */}
              {isActive && (
                <motion.div
                  layoutId="activeDeviceIndicator"
                  className="absolute inset-0 rounded-md -z-10"
                  style={{
                    background: "var(--blue)"
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="text-sm" />
              <span className="hidden sm:inline">{device.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DevicePreviewSwitcher;
