import React, { useState, useEffect, useRef } from "react";

const ASCII_WAVE = ["0", "^", "*", "~", "-"]; // Wave characters
const WAVE_LENGTH = 15; // Kitne characters ka wave
const CURSOR_COLOR = "#000000"; // Black

const ASCIICursorWave = () => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [wave, setWave] = useState(Array(WAVE_LENGTH).fill({ x: pos.x, y: pos.y }));

  const posRef = useRef(pos);

  useEffect(() => { posRef.current = pos; }, [pos]);

  // Track mouse
  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Animate wave smoothly
  useEffect(() => {
    let frame;
    const animate = () => {
      setWave(prev => {
        return prev.map((p, i) => {
          if (i === 0) {
            // First element follows mouse directly
            return {
              x: p.x + (posRef.current.x - p.x) * 0.2,
              y: p.y + (posRef.current.y - p.y) * 0.2,
            };
          } else {
            // Other elements follow previous one
            return {
              x: p.x + (prev[i - 1].x - p.x) * 0.2,
              y: p.y + (prev[i - 1].y - p.y) * 0.2,
            };
          }
        });
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999 }}>
      {wave.map((p, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            color: CURSOR_COLOR,
            fontSize: `${18 + i * 1.2}px`, // Bigger font size for visibility
            transform: "translate(-50%, -50%)",
            userSelect: "none",
            opacity: 1 - i / WAVE_LENGTH, // Tail fades
          }}
        >
          {ASCII_WAVE[i % ASCII_WAVE.length]}
        </span>
      ))}
    </div>
  );
};

export default ASCIICursorWave;
