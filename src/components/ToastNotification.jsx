import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ToastNotification = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-4 py-3 rounded-lg shadow-2xl border"
          style={{
            background: "var(--surface-2)",
            borderColor: "var(--blue)",
            boxShadow: "0 10px 30px -10px rgba(91, 168, 255, 0.25), 0 1px 1px 0 rgba(91, 168, 255, 0.05)",
          }}
          role="status"
          aria-live="polite"
        >
          <FaCheckCircle className="text-sm" style={{ color: "var(--blue)" }} />
          <span className="text-sm font-sans font-medium" style={{ color: "var(--text)" }}>
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastNotification;
