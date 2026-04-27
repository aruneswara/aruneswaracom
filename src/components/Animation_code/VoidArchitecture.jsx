import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const VoidArchitecture = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(dpr, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0xFFF9EF);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    const directionalLight = new THREE.DirectionalLight(0x808080, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(ambientLight, directionalLight);

    // Material
    const material = new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.6 });

    // Mouse tracking for rotation
    let mouse = { x: 0, y: 0 };
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      mouse.y = (e.clientY - rect.top) / rect.height - 0.5;
    });

    // Helper function to create wheel
    const createWheel = () => {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const spokes = 30;
      const radius = 8;
      const hubRadius = 1;

      for (let i = 0; i < spokes; i++) {
        const angle = (i / spokes) * Math.PI * 2;
        const nextAngle = ((i + 1) / spokes) * Math.PI * 2;

        // Hub circle
        vertices.push(
          Math.cos(angle) * hubRadius, 0, Math.sin(angle) * hubRadius,
          Math.cos(nextAngle) * hubRadius, 0, Math.sin(nextAngle) * hubRadius
        );

        // Spokes
        vertices.push(
          Math.cos(angle) * hubRadius, 0, Math.sin(angle) * hubRadius,
          Math.cos(angle) * radius, 0, Math.sin(angle) * radius
        );
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      return new THREE.LineSegments(geometry, material);
    };

    // Helper function to create vessel
    const createVessel = () => {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const layers = 20;
      const pointsPerLayer = 16;

      for (let i = 0; i <= layers; i++) {
        const y = i - layers / 2;
        const radius = 3 * Math.sin(Math.PI * (i / layers));

        for (let j = 0; j < pointsPerLayer; j++) {
          const angle1 = (j / pointsPerLayer) * Math.PI * 2;
          const angle2 = ((j + 1) / pointsPerLayer) * Math.PI * 2;

          vertices.push(
            Math.cos(angle1) * radius, y, Math.sin(angle1) * radius,
            Math.cos(angle2) * radius, y, Math.sin(angle2) * radius
          );

          if (i < layers) {
            vertices.push(
              Math.cos(angle1) * radius, y, Math.sin(angle1) * radius,
              Math.cos(angle1) * radius, y + 1, Math.sin(angle1) * radius
            );
          }
        }
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      return new THREE.LineSegments(geometry, material);
    };

    // Helper function to create room
    const createRoom = () => {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const size = 6;
      const height = 8;

      const basePoints = [
        [-size, 0, -size],
        [size, 0, -size],
        [size, 0, size],
        [-size, 0, size],
        [-size, height, -size],
        [size, height, -size],
        [size, height, size],
        [-size, height, size]
      ];

      for (let i = 0; i < 4; i++) {
        vertices.push(
          ...basePoints[i], ...basePoints[(i + 1) % 4],
          ...basePoints[i + 4], ...basePoints[((i + 1) % 4) + 4],
          ...basePoints[i], ...basePoints[i + 4]
        );
      }

      const doorWidth = 2, doorHeight = 4;
      vertices.push(
        -doorWidth / 2, 0, -size,
        -doorWidth / 2, doorHeight, -size,
        doorWidth / 2, 0, -size,
        doorWidth / 2, doorHeight, -size,
        -doorWidth / 2, doorHeight, -size,
        doorWidth / 2, doorHeight, -size
      );

      const windowSize = 1.5, windowHeight = 5;
      const addWindow = (x, z) => {
        vertices.push(
          x - windowSize, windowHeight - windowSize, z,
          x + windowSize, windowHeight - windowSize, z,
          x + windowSize, windowHeight + windowSize, z,
          x - windowSize, windowHeight + windowSize, z,
          x - windowSize, windowHeight - windowSize, z
        );
      };
      addWindow(-size, 0);
      addWindow(size, 0);

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      return new THREE.LineSegments(geometry, material);
    };

    // Create objects
    const wheel = createWheel();
    const vessel = createVessel();
    const room = createRoom();

    wheel.position.set(-12, 0, 0);
    vessel.position.set(12, 0, 0);
    room.position.set(0, -4, 0);

    scene.add(wheel, vessel, room);

    camera.position.set(15, 15, 25);
    camera.lookAt(0, 0, 0);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate based on mouse
      const rotateX = mouse.y * 0.5;
      const rotateY = mouse.x * 1.5;

      wheel.rotation.x = rotateX;
      wheel.rotation.y += 0.002 + rotateY * 0.05;

      vessel.rotation.x = rotateX;
      vessel.rotation.y += 0.001 + rotateY * 0.03;

      room.rotation.x = rotateX;
      room.rotation.y += 0.0005 + rotateY * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
          else o.material.dispose();
        }
      });
    };
  }, []);

  return <div className="void-container" ref={mountRef}></div>;
};

export default VoidArchitecture;
