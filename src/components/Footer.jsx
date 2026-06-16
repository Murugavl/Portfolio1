import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: "var(--border)" }}
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center gap-3 text-center">
        {/* Attribution and Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
          <span>© {year} Murugavel V</span>
          <span className="hidden sm:inline" style={{ color: "var(--border)" }}>·</span>
          <span className="flex items-center gap-1 justify-center">
            Built with{" "}
            <FaHeart
              size={10}
              style={{ color: "var(--gold)", display: "inline" }}
              aria-label="love"
            />{" "}
            in Python-land
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
