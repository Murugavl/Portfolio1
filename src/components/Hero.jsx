import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import TerminalPanel from "./TerminalPanel";
import { HERO, SOCIAL_LINKS } from "../constants";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
});

const socialLinks = [
  { href: SOCIAL_LINKS.github, icon: <FaGithub size={18} />, label: "GitHub" },
  { href: SOCIAL_LINKS.linkedin, icon: <FaLinkedin size={18} />, label: "LinkedIn" },
  { href: SOCIAL_LINKS.leetcode, icon: <SiLeetcode size={17} />, label: "LeetCode" },
  { href: SOCIAL_LINKS.geeksforgeeks, icon: <SiGeeksforgeeks size={17} />, label: "GeeksforGeeks" },
  { href: SOCIAL_LINKS.codechef, icon: <SiCodechef size={17} />, label: "CodeChef" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center pt-24 pb-10 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Ambient glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 60% 40%, rgba(91,168,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12">

          {/* ── LEFT: Text ───────────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
              className="section-eyebrow mb-5"
            >
              {HERO.eyebrow}
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5"
              style={{ color: "var(--text)" }}
            >
              {HERO.name}
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="font-display text-xl sm:text-2xl font-medium mb-6"
              style={{
                background: "linear-gradient(90deg, var(--blue) 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {HERO.role}
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg max-w-[520px] mb-10 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {HERO.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href={HERO.ctaPrimary.href} className="btn-primary">
                {HERO.ctaPrimary.label}
                <FaArrowRight size={13} />
              </a>
              <a
                href={HERO.ctaSecondary.href}
                className="btn-outline"
                download
              >
                <FaDownload size={13} />
                {HERO.ctaSecondary.label}
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2.5"
            >
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
            </motion.div>
          </div>

          {/* ── RIGHT: Terminal ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-shrink-0 w-full lg:w-auto lg:max-w-[460px]"
          >
            <TerminalPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
