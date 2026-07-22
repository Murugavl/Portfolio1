import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCopy, 
  FaRedo, 
  FaExpand, 
  FaCompress, 
  FaTimes, 
  FaExclamationTriangle,
  FaArrowRight
} from "react-icons/fa";
import DevicePreviewSwitcher from "./DevicePreviewSwitcher";
import ProjectStats from "./ProjectStats";
import TechnologyBadges from "./TechnologyBadges";
import SkeletonLoader from "./SkeletonLoader";
import ToastNotification from "./ToastNotification";

const ProjectPreviewModal = ({ project, isOpen, onClose }) => {
  const [device, setDevice] = useState("desktop");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const iframeRef = useRef(null);
  const modalRef = useRef(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to exit fullscreen or close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, onClose]);

  // Focus trapping logic for accessibility
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleTab);
    firstElement.focus();
    return () => window.removeEventListener("keydown", handleTab);
  }, [isOpen, project]);

  const hasLiveDemo = Boolean(project?.liveDemo && project.liveDemo.trim() !== "");

  // Load monitor and connection timeout handling
  useEffect(() => {
    if (!isOpen || !project) return;
    
    setIsLoading(true);
    setHasError(false);

    // If the project doesn't have a live demo, trigger error/no-preview fallback immediately
    if (!hasLiveDemo) {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    // Set connection timeout (e.g. 6 seconds) to detect load issues or unreachable servers
    const timer = setTimeout(() => {
      if (isLoading) {
        setHasError(true);
        setIsLoading(false);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [isOpen, project, iframeKey, hasLiveDemo]);

  if (!isOpen || !project) return null;

  const handleCopyLink = () => {
    const link = hasLiveDemo ? project.liveDemo : project.github;
    navigator.clipboard.writeText(link).then(() => {
      setToastMessage(hasLiveDemo ? "Live demo URL copied successfully." : "GitHub repository URL copied successfully.");
      setShowToast(true);
    }).catch(() => {
      setToastMessage("Failed to copy link.");
      setShowToast(true);
    });
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setHasError(false);
    setIframeKey((prev) => prev + 1);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    if (!hasLiveDemo) return;
    // Double check if URL actually loaded by testing server connectivity
    fetch(project.liveDemo, { mode: "no-cors" })
      .then(() => {
        setHasError(false);
      })
      .catch(() => {
        // If fetch fails in no-cors, server is down or blocked connection
        setHasError(true);
      });
  };

  // Compute device container widths
  const getDeviceWidth = () => {
    if (device === "mobile") return "390px";
    if (device === "tablet") return "768px";
    return "100%";
  };

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-0 sm:p-4">
          {/* Darkened/blurred backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0b0e14]/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className={`relative flex flex-col w-full bg-[#121622] border overflow-hidden shadow-2xl transition-all duration-300
              ${isFullscreen 
                ? "w-screen h-screen max-w-none max-h-none rounded-none border-none" 
                : "max-w-[1500px] h-full sm:h-[92vh] rounded-none sm:rounded-xl"
              }`}
            style={{ borderColor: "var(--border)" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Sticky Header */}
            <header 
              className="sticky top-0 z-30 flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 md:px-6 border-b shrink-0 bg-[#121622]/90 backdrop-blur"
              style={{ borderColor: "var(--border)" }}
            >
              <div>
                <h2 
                  id="modal-title" 
                  className="text-lg sm:text-xl font-bold font-display tracking-tight text-white mb-2"
                >
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded text-[10px] font-mono"
                      style={{
                        background: "rgba(91, 168, 255, 0.08)",
                        color: "var(--blue)",
                        border: "1px solid rgba(91, 168, 255, 0.15)"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span 
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-500"
                    >
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors bg-[#1b2030] hover:bg-[#232a3e]"
                  style={{ borderColor: "var(--border)", color: "var(--text)" }}
                  title="View GitHub Repository"
                  aria-label="View source code on GitHub"
                >
                  <FaGithub className="text-sm" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>

                {hasLiveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors bg-[#1b2030] hover:bg-[#232a3e]"
                    style={{ borderColor: "var(--border)", color: "var(--text)" }}
                    title="Open Live Demo in New Tab"
                    aria-label="Open project demo in a new browser tab"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span className="hidden sm:inline">Live Demo</span>
                  </a>
                )}

                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors bg-[#1b2030] hover:bg-[#232a3e]"
                  style={{ borderColor: "var(--border)", color: "var(--text)" }}
                  title={hasLiveDemo ? "Copy Live Demo Link" : "Copy GitHub Repository Link"}
                  aria-label="Copy link to clipboard"
                >
                  <FaCopy className="text-xs" />
                  <span className="hidden sm:inline">Copy Link</span>
                </button>

                {hasLiveDemo && (
                  <button
                    onClick={handleRefresh}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors bg-[#1b2030] hover:bg-[#232a3e]"
                    style={{ borderColor: "var(--border)", color: "var(--text)" }}
                    title="Refresh Preview"
                    aria-label="Refresh frame demo"
                  >
                    <FaRedo className="text-xs" />
                    <span className="hidden sm:inline">Refresh</span>
                  </button>
                )}

                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors bg-[#1b2030] hover:bg-[#232a3e]"
                  style={{ borderColor: "var(--border)", color: "var(--text)" }}
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Mode"}
                  aria-label={isFullscreen ? "Exit fullscreen view" : "Enter fullscreen view"}
                >
                  {isFullscreen ? <FaCompress className="text-xs" /> : <FaExpand className="text-xs" />}
                  <span className="hidden sm:inline">{isFullscreen ? "Normal" : "Fullscreen"}</span>
                </button>

                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-8 h-8 rounded-md transition-colors bg-red-950/20 hover:bg-red-500 hover:text-white border border-red-900/30 text-red-400"
                  title="Close Showcase"
                  aria-label="Close modal popup"
                >
                  <FaTimes className="text-base" />
                </button>
              </div>
            </header>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-8">
              {/* Project Info Section */}
              <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Side: Text Cards */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Overview Card */}
                  <div 
                    className="p-5 border rounded-xl space-y-3"
                    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  >
                    <h3 className="text-sm font-semibold tracking-wide uppercase font-mono" style={{ color: "var(--blue)" }}>
                      Project Overview & Purpose
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                      {project.overview}
                    </p>
                    <div className="pt-2 border-t border-dashed" style={{ borderColor: "rgba(91, 168, 255, 0.1)" }}>
                      <h4 className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
                        Problem Solved
                      </h4>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {project.problemSolved}
                      </p>
                    </div>
                  </div>

                  {/* Features & Challenges Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Features Card */}
                    <div 
                      className="p-5 border rounded-xl space-y-3"
                      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                    >
                      <h3 className="text-sm font-semibold tracking-wide uppercase font-mono" style={{ color: "var(--blue)" }}>
                        Key Features
                      </h3>
                      <ul className="space-y-1.5">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-2 text-xs leading-relaxed" style={{ color: "var(--text)" }}>
                            <span className="text-[10px] mt-1 text-slate-400 select-none">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges Card */}
                    <div 
                      className="p-5 border rounded-xl space-y-3"
                      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                    >
                      <h3 className="text-sm font-semibold tracking-wide uppercase font-mono" style={{ color: "var(--blue)" }}>
                        Challenges & Solutions
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text)" }}>
                        {project.challenges}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Stats & Tech Stack */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Tech Stack Badges Card */}
                  <div 
                    className="p-5 border rounded-xl space-y-3"
                    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  >
                    <h3 className="text-sm font-semibold tracking-wide uppercase font-mono" style={{ color: "var(--blue)" }}>
                      Technologies Used
                    </h3>
                    <TechnologyBadges techs={project.techStack} />
                  </div>

                  {/* Project Metadata Stats Card */}
                  <div 
                    className="p-5 border rounded-xl space-y-3"
                    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  >
                    <h3 className="text-sm font-semibold tracking-wide uppercase font-mono" style={{ color: "var(--blue)" }}>
                      Project Specifications
                    </h3>
                    <ProjectStats project={project} />
                  </div>
                </div>
              </section>

              {/* Live Preview / Iframe Frame Section (Only for projects with a Live Demo URL) */}
              {hasLiveDemo && (
                <>
                  <div className="h-[1px] bg-gradient-to-r" style={{ backgroundImage: "linear-gradient(to right, var(--border), transparent)" }} />

                  <section className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <h3 className="text-lg font-bold font-display tracking-tight text-white">
                        Simulated Live Preview
                      </h3>
                      <DevicePreviewSwitcher 
                        currentDevice={device} 
                        onDeviceChange={(dev) => setDevice(dev)} 
                      />
                    </div>

                    {/* Simulator Frame Wrapper */}
                    <div className="flex justify-center w-full">
                      <div 
                        className="relative border rounded-xl shadow-2xl overflow-hidden bg-[#0b0e14] transition-all duration-300 ease-in-out"
                        style={{ 
                          width: getDeviceWidth(),
                          height: "75vh",
                          borderColor: "var(--border)",
                          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
                        }}
                      >
                        {/* Embedded Iframe */}
                        {!hasError && (
                          <iframe
                            key={iframeKey}
                            ref={iframeRef}
                            src={project.liveDemo}
                            title={`${project.title} live demo sandbox`}
                            onLoad={handleIframeLoad}
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin allow-forms"
                            className={`w-full h-full border-none transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
                          />
                        )}

                        {/* Loading Experience */}
                        {isLoading && <SkeletonLoader />}

                        {/* Fallback Screen (Only shown if iframe fails to load or connection times out) */}
                        {hasError && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#0d1117] overflow-y-auto">
                            <div 
                              className="flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-amber-500/10 border border-amber-500/30 text-amber-400 animate-bounce"
                            >
                              <FaExclamationTriangle className="text-xl" />
                            </div>
                            <h4 className="text-base font-bold text-white mb-2">
                              Interactive Preview Unavailable
                            </h4>
                            <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
                              This project has strict cross-origin policies (X-Frame-Options/CSP) or the server took too long to connect, preventing secure in-portfolio embedding.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-3">
                              <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-xs px-4 py-2 flex items-center gap-2"
                              >
                                Open Live Demo
                                <FaArrowRight size={10} />
                              </a>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline text-xs px-4 py-2 flex items-center gap-2"
                              >
                                <FaGithub size={13} />
                                GitHub Repository
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Copy notification toast */}
      <ToastNotification 
        message={toastMessage} 
        show={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </>
  );
};

export default ProjectPreviewModal;
