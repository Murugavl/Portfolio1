import { useEffect, useState, useRef } from "react";
import { TERMINAL_LINES } from "../constants";

const TYPING_SPEED = 40; // ms per character (prompt lines)
const OUTPUT_DELAY = 180; // ms before output appears
const LINE_PAUSE = 300; // ms between lines
const LOOP_PAUSE = 2800; // ms before restarting

const TerminalPanel = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [typingLine, setTypingLine] = useState("");
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState("typing"); // "typing" | "output" | "pause" | "done" | "loop-pause"
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    // If reduced motion, just show everything at once
    if (prefersReducedMotion.current) {
      setDisplayedLines(TERMINAL_LINES);
      setPhase("done");
      return;
    }

    if (phase === "done" || currentLineIdx >= TERMINAL_LINES.length) {
      // Wait then loop
      setPhase("loop-pause");
      const t = setTimeout(() => {
        setDisplayedLines([]);
        setTypingLine("");
        setCurrentLineIdx(0);
        setCharIdx(0);
        setPhase("typing");
      }, LOOP_PAUSE);
      return () => clearTimeout(t);
    }

    const line = TERMINAL_LINES[currentLineIdx];

    if (line.output !== undefined) {
      // Output line — show after delay
      setPhase("output");
      const t = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLineIdx((i) => i + 1);
        setPhase("typing");
      }, OUTPUT_DELAY);
      return () => clearTimeout(t);
    }

    // Prompt+text line — type character by character
    const fullText = (line.prompt || "") + (line.text || "");
    if (charIdx < fullText.length) {
      const t = setTimeout(() => {
        setTypingLine(fullText.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(t);
    } else {
      // Line finished — commit it
      const t = setTimeout(() => {
        setDisplayedLines((prev) => [
          ...prev,
          { ...line, _typed: fullText },
        ]);
        setTypingLine("");
        setCharIdx(0);
        setCurrentLineIdx((i) => i + 1);
      }, LINE_PAUSE);
      return () => clearTimeout(t);
    }
  }, [currentLineIdx, charIdx, phase]);

  const renderLine = (line, idx) => {
    if (line.output !== undefined) {
      return (
        <div key={idx} className="terminal-output-line">
          <span className="terminal-string">{line.output}</span>
        </div>
      );
    }
    // Typed prompt line
    const displayText = line._typed || (line.prompt || "") + (line.text || "");
    const promptLen = (line.prompt || "").length;
    return (
      <div key={idx} className="terminal-input-line">
        <span className="terminal-prompt">{displayText.slice(0, promptLen)}</span>
        <span>{displayText.slice(promptLen)}</span>
      </div>
    );
  };

  const currentLine = TERMINAL_LINES[currentLineIdx];
  const isTypingPromptLine =
    currentLine && currentLine.output === undefined && typingLine.length > 0;
  const promptLen = currentLine ? (currentLine.prompt || "").length : 0;

  return (
    <div className="terminal-window w-full max-w-md" role="img" aria-label="Animated Python terminal showing Murugavel's developer profile">
      {/* Chrome */}
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: "#ff5f57" }} />
        <div className="terminal-dot" style={{ background: "#febc2e" }} />
        <div className="terminal-dot" style={{ background: "#28c840" }} />
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: "0.7rem",
            color: "#8a93a6",
          }}
        >
          python3
        </span>
      </div>

      {/* Body */}
      <div className="terminal-body">
        {displayedLines.map((line, idx) => renderLine(line, idx))}

        {/* Currently typing line */}
        {isTypingPromptLine && (
          <div className="terminal-input-line">
            <span className="terminal-prompt">
              {typingLine.slice(0, promptLen)}
            </span>
            <span>{typingLine.slice(promptLen)}</span>
            <span className="terminal-cursor" aria-hidden="true" />
          </div>
        )}

        {/* Idle cursor when not typing */}
        {!isTypingPromptLine && phase !== "output" && (
          <div className="terminal-input-line">
            <span className="terminal-prompt">{">>> "}</span>
            <span className="terminal-cursor" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalPanel;
