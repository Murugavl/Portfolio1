import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";
import { CERTIFICATIONS } from "../constants";

const cardVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const CertCard = ({ cert, index }) => (
  <motion.a
    custom={index}
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="card flex flex-col overflow-hidden group cursor-pointer"
    aria-label={`${cert.name} by ${cert.provider}`}
    title={`View certificate: ${cert.name}`}
  >
    {/* Image / Placeholder */}
    <div
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        aspectRatio: "16/9",
        background: cert.image ? "var(--surface-2)" : "var(--surface-2)",
      }}
    >
      {cert.image ? (
        <img
          src={cert.image}
          alt={`${cert.name} certificate`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        /* Placeholder when no image is provided */
        <div className="flex flex-col items-center gap-3 p-6 text-center">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(91,168,255,0.1)", color: "var(--blue)" }}
          >
            <FaCertificate size={26} />
          </div>
          <p
            className="font-mono text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            certificate preview
          </p>
        </div>
      )}

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(11,14,20,0.65)" }}
      >
        <div
          className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg"
          style={{
            background: "var(--blue)",
            color: "var(--ink)",
            fontWeight: 600,
          }}
        >
          <FaExternalLinkAlt size={11} />
          View Certificate
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col gap-1.5">
      <p
        className="font-mono text-xs"
        style={{ color: "var(--blue)" }}
      >
        {cert.provider}
      </p>
      <h3
        className="font-display text-sm font-semibold leading-snug"
        style={{ color: "var(--text)" }}
      >
        {cert.name}
      </h3>
      <div
        className="flex items-center gap-1.5 mt-1 text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        <FaExternalLinkAlt size={10} />
        <span className="font-mono">View certificate →</span>
      </div>
    </div>
  </motion.a>
);

const Certifications = () => {
  return (
    <section id="certifications" className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow"># 05 — Certifications</p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Credentials
          </h2>
          <p
            className="text-base mb-10 max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Courses and certifications that back the skills — click any card to
            view the certificate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, index) => (
            <CertCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10">
        <div className="section-divider" />
      </div>
    </section>
  );
};

export default Certifications;
