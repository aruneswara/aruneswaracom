import React, { useEffect, useRef } from "react";

const Artwork33 = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // 🔥 Retina scaling (VERY IMPORTANT FOR SMOOTHNESS)
    const dpr = window.devicePixelRatio || 1;
    const width = 800;
    const height = 600;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.scale(dpr, dpr);

    let time = 0;

    const particles = [];
    const TWO_PI = Math.PI * 2;

    // mouse
    let mouseX = width / 2;
    let mouseY = height / 2;

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    // helpers
    const random = (min, max) => Math.random() * (max - min) + min;

    const map = (value, a, b, c, d) => {
      return c + (d - c) * ((value - a) / (b - a));
    };

    const dist3D = (x1, y1, z1, x2, y2, z2) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dz = z2 - z1;
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };

    // ⭐ HELIX PARTICLE
    class HelixParticle {
      constructor(i) {
        this.phase = (i / 60) * TWO_PI * 3;
        this.baseRadius = random(90, 110);
        this.yOffset = random(-300, 300);
        this.ySpeed = random(0.3, 0.6) * (Math.random() > 0.5 ? 1 : -1);
        this.rotationSpeed = random(0.004, 0.006);
        this.size = random(3, 5);
        this.opacity = random(130, 190);
      }

      update(breath) {

        // ⭐ breathing radius
        const radius = this.baseRadius + breath * 12;

        this.phase += this.rotationSpeed;
        this.yOffset += this.ySpeed;

        if (this.yOffset > 350) this.yOffset = -350;
        if (this.yOffset < -350) this.yOffset = 350;

        // mouse influence
        const mouseForceX = map(mouseX, 0, width, -80, 80);
        const mouseForceY = map(mouseY, 0, height, -50, 50);

        const x =
          width / 2 +
          Math.cos(this.phase) * radius +
          mouseForceX * 0.15;

        const y =
          height / 2 +
          this.yOffset +
          mouseForceY * 0.1;

        const z = Math.sin(this.phase) * radius;

        return { x, y, z, size: this.size, opacity: this.opacity };
      }
    }

    // create particles
    for (let i = 0; i < 60; i++) {
      particles.push(new HelixParticle(i));
    }

    const animate = () => {
      ctx.fillStyle = "#FFF9EF";
      ctx.fillRect(0, 0, width, height);

      time += 0.02;

      // ⭐ breathing wave
      const breath = Math.sin(time * 0.8);

      const points = particles.map((p) => p.update(breath));

      points.sort((a, b) => a.z - b.z);

      // draw connections
      ctx.lineWidth = 1;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {

          const d = dist3D(
            points[i].x,
            points[i].y,
            points[i].z,
            points[j].x,
            points[j].y,
            points[j].z
          );

          if (d < 120) {
            const opacity = map(d, 0, 120, 0.25, 0.05);

            ctx.strokeStyle = `rgba(0,0,0,${opacity})`;

            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // draw nodes
      for (const p of points) {
        const scale = map(p.z, -120, 120, 0.6, 1.4);

        ctx.fillStyle = `rgba(0,0,0,${p.opacity / 255})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, (p.size * scale) / 2, 0, TWO_PI);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="artwork-wrapper">
      <canvas ref={canvasRef} className="artwork-canvas" />
    </div>
  );
};

export default Artwork33;









