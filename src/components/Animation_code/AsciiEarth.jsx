import { useEffect, useMemo, useRef, useState } from "react";

const COLS = 68;
const ROWS = 34;
const OCEAN_CHARS = " .,:;~";
const LAND_CHARS = "+*x#@";
const SPACE = " ";

const normalize = ({ x, y, z }) => {
  const length = Math.sqrt(x * x + y * y + z * z) || 1;
  return { x: x / length, y: y / length, z: z / length };
};

const getTerrain = (lat, lon) => {
  const bands =
    Math.sin(lon * 1.85 + Math.sin(lat * 3.5) * 1.2) +
    Math.sin(lon * 3.4 - lat * 1.6) * 0.7 +
    Math.cos(lon * 5.8 + lat * 4.2) * 0.45 +
    Math.sin(lon * 9.2 + Math.cos(lat * 2.8)) * 0.22;

  return bands + Math.cos(lat * 2.2) * 0.35;
};

const pickChar = (chars, value) => {
  const index = Math.max(0, Math.min(chars.length - 1, Math.floor(value * chars.length)));
  return chars[index];
};

const AsciiEarth = () => {
  const wrapRef = useRef(null);
  const pointerRef = useRef({ x: 0.68, y: 0.38, active: false });
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    let frameId;
    let lastFrame = 0;
    const frameInterval = 1000 / 18;

    const tick = (time) => {
      frameId = requestAnimationFrame(tick);

      if (time - lastFrame > frameInterval) {
        lastFrame = time;
        setFrame((value) => value + 1);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const updatePointer = (event) => {
      const bounds = wrapRef.current?.getBoundingClientRect();
      if (!bounds) return;

      pointerRef.current = {
        x: (event.clientX - bounds.left) / bounds.width,
        y: (event.clientY - bounds.top) / bounds.height,
        active:
          event.clientX >= bounds.left &&
          event.clientX <= bounds.right &&
          event.clientY >= bounds.top &&
          event.clientY <= bounds.bottom,
      };
    };

    window.addEventListener("mousemove", updatePointer);
    return () => window.removeEventListener("mousemove", updatePointer);
  }, []);

  const art = useMemo(() => {
    const pointer = pointerRef.current;
    const rotation = frame * 0.035 + (pointer.x - 0.5) * 0.95;
    const tilt = (pointer.y - 0.5) * -0.48;
    const light = normalize({
      x: -0.38 + (pointer.x - 0.5) * 1.35,
      y: -0.24 + (pointer.y - 0.5) * 0.85,
      z: 0.92,
    });

    const rows = [];

    for (let y = 0; y < ROWS; y += 1) {
      let row = "";
      const ny = (y / (ROWS - 1)) * 2 - 1;

      for (let x = 0; x < COLS; x += 1) {
        const nx = ((x / (COLS - 1)) * 2 - 1) * 1.18;
        const radius = nx * nx + ny * ny;

        if (radius > 1) {
          row += SPACE;
          continue;
        }

        const z = Math.sqrt(1 - radius);
        const cosRot = Math.cos(rotation);
        const sinRot = Math.sin(rotation);
        const cosTilt = Math.cos(tilt);
        const sinTilt = Math.sin(tilt);

        const rx = nx * cosRot + z * sinRot;
        const rz = z * cosRot - nx * sinRot;
        const ry = ny * cosTilt - rz * sinTilt;
        const tz = rz * cosTilt + ny * sinTilt;
        const lat = Math.asin(Math.max(-1, Math.min(1, ry)));
        const lon = Math.atan2(tz, rx);

        const terrain = getTerrain(lat, lon);
        const isLand = terrain > 0.45 + Math.abs(lat) * 0.18;
        const shade = Math.max(0, rx * light.x + ry * light.y + tz * light.z);
        const rim = Math.max(0, 1 - Math.sqrt(radius)) * 0.32;

        const cursorX = pointer.x * COLS;
        const cursorY = pointer.y * ROWS;
        const cursorDistance = Math.hypot(x - cursorX, y - cursorY);
        const cursorGlow = pointer.active ? Math.exp(-cursorDistance * 0.2) : 0;
        const pulse = pointer.active
          ? Math.max(0, Math.sin(frame * 0.35 - cursorDistance * 0.65))
          : 0;

        const value = Math.min(0.98, shade * 0.82 + rim + cursorGlow * 0.55 + pulse * cursorGlow * 0.28);
        const chars = isLand ? LAND_CHARS : OCEAN_CHARS;

        row += cursorGlow > 0.72 && pulse > 0.35 ? "@" : pickChar(chars, value);
      }

      rows.push(row);
    }

    return rows.join("\n");
  }, [frame]);

  return (
    <div className="ascii-earth" ref={wrapRef} aria-label="Reactive ASCII Earth">
      <pre className="ascii-earth__canvas">{art}</pre>
    </div>
  );
};

export default AsciiEarth;
