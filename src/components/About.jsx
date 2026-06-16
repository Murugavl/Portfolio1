import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ABOUT } from "../constants";

const KURAL_API_KEY = import.meta.env.VITE_KURAL_API;

const sectionVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const hobbyEmoji = {
  "Watching series / movies": "🎬",
  "Reading books": "📚",
};

const About = () => {
  const [kural, setKural] = useState({ line1: "", line2: "", number: "" });
  const [kuralLoading, setKuralLoading] = useState(true);

  useEffect(() => {
    const fetchRandomKural = async () => {
      const randomNum = Math.floor(Math.random() * 1330) + 1;
      try {
        const res = await fetch(
          `https://getthirukkural.appspot.com/api/3.0/kural/${randomNum}?appid=${KURAL_API_KEY}`
        );
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        setKural({
          line1: data.line1 || "",
          line2: data.line2 || "",
          number: randomNum,
        });
      } catch {
        // Fallback to the fixed Kural from constants
        setKural({
          line1: "முறைகோடி மன்னவன் செய்யின்",
          line2: "உறைகோடி ஒல்லாது வானம் பெயல்.",
          number: 559,
        });
      } finally {
        setKuralLoading(false);
      }
    };

    fetchRandomKural();
  }, []);

  return (
    <section id="about" className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Eyebrow */}
          <p className="section-eyebrow"># 01 — About</p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold mb-10 tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Bio column */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p
              className="text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              {ABOUT.bio}
            </p>

            {/* Hobbies */}
            <p
              className="font-mono text-sm mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              // Beyond the code
            </p>
            <ul className="flex flex-wrap gap-3">
              {ABOUT.hobbies.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <span role="img" aria-hidden="true">
                    {hobbyEmoji[h] || "✨"}
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kural quote column */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
          >
            <div className="kural-card">
              {kuralLoading ? (
                <div className="flex flex-col gap-3">
                  <div
                    className="h-5 rounded animate-pulse"
                    style={{ background: "var(--surface-2)", width: "85%" }}
                  />
                  <div
                    className="h-5 rounded animate-pulse"
                    style={{ background: "var(--surface-2)", width: "70%" }}
                  />
                  <div
                    className="h-3 rounded animate-pulse mt-2"
                    style={{ background: "var(--surface-2)", width: "45%" }}
                  />
                </div>
              ) : (
                <>
                  {/* Tamil text */}
                  <p
                    className="font-display text-lg sm:text-xl font-medium leading-relaxed mb-1"
                    style={{ color: "var(--text)", fontStyle: "italic" }}
                    lang="ta"
                  >
                    {kural.line1}
                  </p>
                  <p
                    className="font-display text-lg sm:text-xl font-medium leading-relaxed mb-4"
                    style={{ color: "var(--text)", fontStyle: "italic" }}
                    lang="ta"
                  >
                    {kural.line2}
                  </p>

                  {/* Attribution */}
                  <p
                    className="font-mono text-xs mb-5"
                    style={{ color: "var(--blue)" }}
                  >
                    — Thiruvalluvar · Thirukkural · Kural {kural.number}
                  </p>

                  {/* Gloss note */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    A verse from Thirukkural — a timeless Tamil classic of ethics
                    and wisdom by Thiruvalluvar, used here as a daily reminder
                    that integrity in small things shows up in the big ones.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10">
        <div className="section-divider" />
      </div>
    </section>
  );
};

export default About;
