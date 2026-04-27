import { useState, useEffect, useRef } from "react";

const AsciiBlob = () => {
  const [frame, setFrame] = useState(60);

  const densityRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 }); // center by default

  const simpleChars = "0~/<>";
  const width = 60;
  const height = 30;

  // 🎯 Mouse Move Tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🎞 Animation Loop
  useEffect(() => {
    let animationFrameId;
    let lastFrameTime = 0;
    const targetFPS = 10;
    const frameInterval = 1000 / targetFPS;

    const animate = (time) => {
      animationFrameId = requestAnimationFrame(animate);

      if (time - lastFrameTime >= frameInterval) {
        lastFrameTime = time;

        setFrame((prev) => {
          densityRef.current = 27.5 + 22.5 * Math.sin(prev * 0.002);
          return prev + 1;
        });
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const generateArt = () => {
    const canvas = [];
    const density = densityRef.current;

    const mouseX = mouseRef.current.x * width;
    const mouseY = mouseRef.current.y * height;

    for (let y = 0; y < height; y++) {
      let row = "";

      for (let x = 0; x < width; x++) {
        const cx = width / 2;
        const cy = height / 2;

        const dx = (x - cx) / cx;
        const dy = (y - cy) / cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // 🐭 Mouse influence
        const mdx = x - mouseX;
        const mdy = y - mouseY;
        const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
        const mouseForce = Math.exp(-mouseDist * 0.15);

        let value =
          Math.sin(dist * 3 - frame * 0.002) +
          Math.cos(x * 0.1 - y * 0.1 + frame * 0.0008) * 0.3 +
          mouseForce * 1.2;

        value = (value + 1) / 2;
        value *= density / 100;

        const index = Math.floor(value * simpleChars.length);
        let char =
          simpleChars[
            Math.min(Math.max(index, 0), simpleChars.length - 1)
          ];

        if (density < 30 && Math.random() > density / 30) {
          char = " ";
        }

        row += char;
      }

      canvas.push(row);
    }

    return canvas.join("\n");
  };

  return (
    <div className="ascii-container">
      <pre className="ascii-canvas">{generateArt()}</pre>
    </div>
  );
};

export default AsciiBlob;
