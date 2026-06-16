import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      className="overflow-x-hidden antialiased"
      style={{ background: "var(--ink)", color: "var(--text)" }}
    >
      {/* Fixed background ambient layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% -5%, rgba(91,168,255,0.05) 0%, transparent 70%)",
        }}
      />

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
