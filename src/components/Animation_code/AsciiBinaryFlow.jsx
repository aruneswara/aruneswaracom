import React, { useEffect, useRef } from "react";

const AsciiBinaryFlow = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = 55;
    const height = 55;

    let grid = [];
    let time = 0;
    let animationFrameId;

    // 🐭 Mouse Tracker
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    function initGrid() {
      grid = new Array(height)
        .fill(null)
        .map(() => new Array(width).fill(" "));
    }

    function render() {
      let output = "";
      for (let y = 0; y < height; y++) {
        output += grid[y].join("") + "\n";
      }
      canvas.textContent = output;
    }

    function update() {
      initGrid();

      const blockSize = 26;
      const blockX = Math.floor(width / 2 - blockSize / 2);
      const blockY = Math.floor(height / 2 - blockSize / 2);

      const t = time * 0.005;

      const mouseX = mouseRef.current.x * width;
      const mouseY = mouseRef.current.y * height;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {

          // 🐭 Mouse influence
          const mdx = x - mouseX;
          const mdy = y - mouseY;
          const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
          const mouseForce = Math.exp(-mouseDist * 0.18);

          if (
            x >= blockX &&
            x < blockX + blockSize &&
            y >= blockY &&
            y < blockY + blockSize
          ) {
            const innerDist = Math.min(
              x - blockX,
              blockX + blockSize - x,
              y - blockY,
              blockY + blockSize - y
            );

            const erosion = time * 0.006 + mouseForce * 6;

            if (innerDist > erosion) {
              grid[y][x] = "1";
            } else {
              grid[y][x] = Math.random() > 0.6 ? "1" : "0";
            }

          } else {
            const dx = x - width / 2;
            const dy = y - height / 2;

            const angle = Math.atan2(dy, dx);
            const dist = Math.sqrt(dx * dx + dy * dy);

            const wave =
              Math.sin(dist * 0.2 - t + angle * 1.5 + mouseForce * 3);

            const flow =
              Math.sin(x * 0.08 + y * 0.04 + t * 0.4 + mouseForce * 2);

            const value = wave + flow + mouseForce * 1.2;

            if (value > 0.5) {
              grid[y][x] = "0";
            } else if (value < -0.5) {
              grid[y][x] = "~";
            }
          }
        }
      }

      // cracks (slightly mouse-biased)
      for (let i = 0; i < 2; i++) {
        let cx = blockX + Math.floor(Math.random() * blockSize);
        let cy = blockY + Math.floor(Math.random() * blockSize);
        const length = Math.floor(Math.random() * 8) + 4;

        for (let j = 0; j < length; j++) {
          if (cx >= 0 && cx < width && cy >= 0 && cy < height) {
            grid[cy][cx] = "0";
          }
          cx += Math.floor(Math.random() * 3) - 1;
          cy += Math.floor(Math.random() * 3) - 1;
        }
      }

      time++;
    }

    function animate() {
      update();
      render();
      animationFrameId = requestAnimationFrame(animate);
    }

    initGrid();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.textContent = "";
      grid = [];
      time = 0;
    };
  }, []);

  return (
    <div className="ascii-wrapper">
      <div className="ascii-inner">
        <div ref={canvasRef} className="ascii-canvas" />
      </div>
    </div>
  );
};

export default AsciiBinaryFlow;
