import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { SOCIAL_LINKS, RESUME_LINK } from "../constants";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b"
            : "border-b border-transparent"
        }`}
        style={{
          background: isScrolled
            ? "rgba(11,14,20,0.85)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderColor: isScrolled ? "var(--border)" : "transparent",
        }}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="font-display text-xl font-bold tracking-tight"
            style={{ color: "var(--blue)" }}
            aria-label="Murugavel V — home"
          >
            MV
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </div>

          {/* Résumé + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href={RESUME_LINK}
              download
              className="nav-resume hidden sm:inline-flex"
              aria-label="Download Résumé"
            >
              Résumé ↓
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col gap-[5px] p-1"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="block w-6 h-0.5 transition-all duration-200"
                style={{
                  background: "var(--text-muted)",
                  transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none",
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-200"
                style={{
                  background: "var(--text-muted)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-200"
                style={{
                  background: "var(--text-muted)",
                  transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div
            className="md:hidden border-t flex flex-col px-6 py-6 gap-5"
            style={{
              background: "rgba(11,14,20,0.96)",
              borderColor: "var(--border)",
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="nav-link text-base"
              >
                {label}
              </a>
            ))}
            <a href={RESUME_LINK} download className="nav-resume self-start mt-2">
              Résumé ↓
            </a>
            {/* Social icons in mobile menu */}
            <div className="flex items-center gap-2 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
              {[
                { href: SOCIAL_LINKS.github, icon: <FaGithub size={16} />, label: "GitHub" },
                { href: SOCIAL_LINKS.linkedin, icon: <FaLinkedin size={16} />, label: "LinkedIn" },
                { href: SOCIAL_LINKS.leetcode, icon: <SiLeetcode size={15} />, label: "LeetCode" },
                { href: SOCIAL_LINKS.geeksforgeeks, icon: <SiGeeksforgeeks size={15} />, label: "GfG" },
                { href: SOCIAL_LINKS.codechef, icon: <SiCodechef size={15} />, label: "CodeChef" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
