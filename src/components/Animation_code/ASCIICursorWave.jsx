import { useEffect, useRef, useState } from "react";

const TRAIL_CHARS = ["+", ".", "'", ".", ","];
const TRAIL_LENGTH = 12;
const CURSOR_COLOR = "#1f2a24";

const getInitialPosition = () => {
  if (typeof window === "undefined") {
    return { x: 0, y: 0 };
  }

  return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
};

const ASCIICursorWave = () => {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [trail, setTrail] = useState(() =>
    Array.from({ length: TRAIL_LENGTH }, () => getInitialPosition())
  );

  const targetRef = useRef(getInitialPosition());

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updatePointerMode = () => setIsFinePointer(media.matches);

    updatePointerMode();
    media.addEventListener("change", updatePointerMode);

    return () => media.removeEventListener("change", updatePointerMode);
  }, []);

  useEffect(() => {
    const handleMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return undefined;

    let frameId;

    const animate = () => {
      setTrail((previous) =>
        previous.map((point, index) => {
          const leader = index === 0 ? targetRef.current : previous[index - 1];
          const ease = index === 0 ? 0.42 : 0.28;

          return {
            x: point.x + (leader.x - point.x) * ease,
            y: point.y + (leader.y - point.y) * ease,
          };
        })
      );

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <div className="ascii-cursor" aria-hidden="true">
      {trail.map((point, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            left: point.x,
            top: point.y,
            color: CURSOR_COLOR,
            fontSize: index === 0 ? "16px" : `${12 - index * 0.35}px`,
            opacity: Math.max(0, 0.82 - index * 0.07),
            transform: `translate(-50%, -50%) rotate(${index * 14}deg)`,
          }}
        >
          {TRAIL_CHARS[index % TRAIL_CHARS.length]}
        </span>
      ))}
    </div>
  );
};

export default ASCIICursorWave;
