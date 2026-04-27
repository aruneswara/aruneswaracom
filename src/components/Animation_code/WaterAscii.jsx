import { useState, useEffect, useRef, useMemo, useCallback } from "react";

const WATER_CHARACTERS = "~≈#0</>◟*◝";
const WATER_ROWS = 25;
const WATER_COLS = 52;
const WATER_CENTER = { x: 0.5, y: 0.5 };
const TWO_PI = Math.PI * 2;

/* Custom hook for animation frame */
const useAnimationFrame = (callback, isRunning = true) => {
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);

  const animate = useCallback(
    (time) => {
      if (previousTimeRef.current !== null) {
        const deltaTime = time - previousTimeRef.current;
        callback(deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [callback]
  );

  useEffect(() => {
    if (isRunning) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = null;
    };
  }, [animate, isRunning]);
};

const WaterAscii = () => {
  const [frame, setFrame] = useState(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  /* Mouse tracking */
  useEffect(() => {
    const move = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
      // Force re-render on mouse move for instant response
      setFrame((f) => f + 0.01);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const updateAnimation = useCallback((deltaTime) => {
    setFrame((f) => f + deltaTime * 0.01);
  }, []);

  useAnimationFrame(updateAnimation);

  const generateAscii = useCallback(() => {
    const output = [];
    const f1 = frame / 6.7;
    const f2 = frame / 8.3;
    const f3 = frame / 13.3;

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    for (let y = 0; y < WATER_ROWS; y++) {
      let row = "";
      let opacity = 1;

      for (let x = 0; x < WATER_COLS; x++) {
        const nx = x / WATER_COLS;
        const ny = y / WATER_ROWS;

        const dx = nx - WATER_CENTER.x;
        const dy = ny - WATER_CENTER.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const mdx = nx - mx;
        const mdy = ny - my;
        const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
        const mouseForce = Math.exp(-mouseDist * 12);

        const wave =
          Math.sin(x / 3 + y / 5 + f1 + dist * 10) +
          Math.cos(x / 4 - y / 3 - f2) +
          Math.sin(f3 + nx * TWO_PI) +
          Math.sin(mouseDist * 25 - frame * 0.3) * mouseForce * 2;

        const index =
          Math.floor(
            Math.abs((wave + 2) * (WATER_CHARACTERS.length / 4) + dist * 5 + mouseForce * 6)
          ) % WATER_CHARACTERS.length;

        const op = Math.max(
          0.25,
          Math.min(0.9, 1 - dist + mouseForce * 0.8)
        );
        opacity = (opacity + op) / 2;

        row += WATER_CHARACTERS[index];
      }

      output.push({ text: row, opacity });
    }

    return output;
  }, [frame]);

  const ascii = useMemo(() => generateAscii(), [generateAscii]);

  return (
    <div className="water-container">
      <div className="water-inner">
        <pre className="water-pre">
          {ascii.map((row, i) => (
            <div
              key={i}
              className="water-row"
              style={{ opacity: row.opacity }}
            >
              {row.text}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default WaterAscii;
