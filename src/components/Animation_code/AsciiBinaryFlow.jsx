import { useEffect, useRef } from "react";

const AsciiBinaryFlow = () => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas) return;

    const width = 55;
    const height = 55;

    let grid = [];
    let time = 0;
    let animationFrameId;

    const handleMouseMove = (event) => {
      const bounds = wrapper?.getBoundingClientRect();
      if (!bounds) return;

      mouseRef.current = {
        x: (event.clientX - bounds.left) / bounds.width,
        y: (event.clientY - bounds.top) / bounds.height,
        active:
          event.clientX >= bounds.left &&
          event.clientX <= bounds.right &&
          event.clientY >= bounds.top &&
          event.clientY <= bounds.bottom,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { ...mouseRef.current, active: false };
    };

    window.addEventListener("mousemove", handleMouseMove);
    wrapper?.addEventListener("mouseleave", handleMouseLeave);

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
      const isMouseActive = mouseRef.current.active;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {

          const mdx = x - mouseX;
          const mdy = y - mouseY;
          const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
          const mouseForce = isMouseActive ? Math.exp(-mouseDist * 0.15) : 0;
          const ripple = isMouseActive
            ? Math.sin(mouseDist * 1.05 - time * 0.18) * mouseForce
            : 0;

          if (isMouseActive && mouseDist < 4.2) {
            grid[y][x] = mouseDist < 1.35 ? "@" : mouseDist < 2.75 ? "#" : "+";
            continue;
          }

          if (isMouseActive && Math.abs(mouseDist - 8.25) < 1.15) {
            grid[y][x] = ripple > 0 ? "*" : ".";
            continue;
          }

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

            const erosion = time * 0.006 + mouseForce * 12 + Math.max(0, ripple) * 8;

            if (innerDist > erosion) {
              grid[y][x] = "1";
            } else {
              grid[y][x] = mouseForce > 0.3 ? "#" : Math.random() > 0.6 ? "1" : "0";
            }

          } else {
            const dx = x - width / 2;
            const dy = y - height / 2;

            const angle = Math.atan2(dy, dx);
            const dist = Math.sqrt(dx * dx + dy * dy);

            const wave =
              Math.sin(dist * 0.2 - t + angle * 1.5 + mouseForce * 5);

            const flow =
              Math.sin(x * 0.08 + y * 0.04 + t * 0.4 + mouseForce * 4);

            const value = wave + flow + mouseForce * 2.2 + ripple * 2;

            if (mouseForce > 0.42 && ripple > 0.25) {
              grid[y][x] = "+";
            } else if (mouseForce > 0.3 && ripple < -0.15) {
              grid[y][x] = ".";
            } else if (value > 0.5) {
              grid[y][x] = "0";
            } else if (value < -0.5) {
              grid[y][x] = "~";
            }
          }
        }
      }

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
      wrapper?.removeEventListener("mouseleave", handleMouseLeave);
      canvas.textContent = "";
      grid = [];
      time = 0;
    };
  }, []);

  return (
    <div className="ascii-wrapper" ref={wrapperRef}>
      <div className="ascii-inner">
        <div ref={canvasRef} className="ascii-canvas" />
      </div>
    </div>
  );
};

export default AsciiBinaryFlow;
