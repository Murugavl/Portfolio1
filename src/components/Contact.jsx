import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { CONTACT, SOCIAL_LINKS } from "../constants";

// All EmailJS credentials are loaded from .env
const EMAILJS_PUBLIC_KEY   = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID   = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const sectionVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const socialLinks = [
  { href: SOCIAL_LINKS.github, icon: <FaGithub size={18} />, label: "GitHub" },
  { href: SOCIAL_LINKS.linkedin, icon: <FaLinkedin size={18} />, label: "LinkedIn" },
  { href: SOCIAL_LINKS.leetcode, icon: <SiLeetcode size={17} />, label: "LeetCode" },
  { href: SOCIAL_LINKS.geeksforgeeks, icon: <SiGeeksforgeeks size={17} />, label: "GeeksforGeeks" },
  { href: SOCIAL_LINKS.codechef, icon: <SiCodechef size={17} />, label: "CodeChef" },
];

// Toast notification component
const Toast = ({ status, onClose }) => {
  if (!status || status === "idle" || status === "sending") return null;

  const isSuccess = status === "sent";

  return (
    <AnimatePresence>
      <motion.div
        key={status}
        initial={{ opacity: 0, y: -16, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="flex items-start gap-3 px-5 py-4 rounded-xl text-sm"
        style={{
          background: isSuccess
            ? "rgba(34, 197, 94, 0.1)"
            : "rgba(239, 68, 68, 0.1)",
          border: `1px solid ${isSuccess ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
          color: "var(--text)",
        }}
        role="alert"
        aria-live="polite"
      >
        {isSuccess ? (
          <FaCheckCircle size={16} style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }} />
        ) : (
          <FaExclamationCircle size={16} style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }} />
        )}
        <div className="flex-1">
          <p className="font-semibold mb-0.5">
            {isSuccess ? "Message sent!" : "Something went wrong"}
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            {isSuccess
              ? "Thanks for reaching out — I'll get back to you soon."
              : `Please email me directly at ${CONTACT.email}`}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close notification"
          style={{ color: "var(--text-muted)", flexShrink: 0 }}
          className="ml-2 text-lg leading-none hover:opacity-70 transition-opacity"
        >
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent" | "error"

  const handleChange = (e) => {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          name: formState.name,          // Fallback variable names for standard EmailJS templates
          from_email: formState.email,
          email: formState.email,        // Fallback variable names for standard EmailJS templates
          subject: formState.subject,
          message: formState.message,
          to_email: CONTACT.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="section-eyebrow"># 06 — Contact</p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Get In Touch
          </h2>
          <p
            className="text-base mb-10 max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            {CONTACT.blurb}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — direct links */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-5"
          >
            {/* Email */}
            <div className="card p-5 flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(91,168,255,0.1)", color: "var(--blue)" }}
              >
                <FaEnvelope size={17} />
              </div>
              <div>
                <p className="font-mono text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-sans text-sm font-medium transition-colors duration-200"
                  style={{ color: "var(--text)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="card p-5">
              <p className="font-mono text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                Location
              </p>
              <p className="text-sm" style={{ color: "var(--text)" }}>
                📍 {CONTACT.location}
              </p>
            </div>

            {/* Social icons */}
            <div>
              <p className="font-mono text-xs mb-4" style={{ color: "var(--text-muted)" }}>
                // Find me on
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    aria-label={label}
                    title={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="card p-6 sm:p-8 flex flex-col gap-5"
              noValidate
            >
              {/* Toast */}
              <Toast status={status} onClose={() => setStatus("idle")} />

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="font-mono text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className="w-full rounded-lg px-4 py-3 text-sm font-sans outline-none transition-all duration-200"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    opacity: status === "sending" ? 0.6 : 1,
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="font-mono text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className="w-full rounded-lg px-4 py-3 text-sm font-sans outline-none transition-all duration-200"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    opacity: status === "sending" ? 0.6 : 1,
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-subject"
                  className="font-mono text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What is this about?"
                  value={formState.subject}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className="w-full rounded-lg px-4 py-3 text-sm font-sans outline-none transition-all duration-200"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    opacity: status === "sending" ? 0.6 : 1,
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  value={formState.message}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className="w-full rounded-lg px-4 py-3 text-sm font-sans outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    opacity: status === "sending" ? 0.6 : 1,
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary self-start"
                style={{ opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? (
                  <>
                    <span
                      className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                      aria-hidden="true"
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <FaPaperPlane size={13} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
