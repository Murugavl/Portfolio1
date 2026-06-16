/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14",
        surface: "#121622",
        "surface-2": "#1B2030",
        "surface-3": "#232A3E",
        "mv-text": "#E8EAF0",
        "mv-muted": "#8A93A6",
        "mv-blue": "#5BA8FF",
        "mv-gold": "#F4C95D",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      animation: {
        "blink": "blink 1s step-end infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 12px rgba(91,168,255,0.2)" },
          "50%": { boxShadow: "0 0 24px rgba(91,168,255,0.4)" },
        },
      },
      backgroundImage: {
        "radial-ink": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(91,168,255,0.08), transparent)",
      },
    },
  },
  plugins: [],
};
