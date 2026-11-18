import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { profile } from "../data/profile";
import "./LivingBiography.css";

const seeds = [
  "builds tools where models meet people",
  "moves between software, research, and strategy",
  "works on ChatGPT and Codex in San Francisco",
  "once taught sensors to speak faster",
  "has followed signals from muscles, networks, and language",
  "likes systems that feel simpler than they are",
  "studied computer science and business at UT Austin",
  "made an exoskeleton listen to neuromuscular signals",
  "has worked from zero-trust networks to generative interfaces",
  "keeps returning to the space between an idea and a useful thing",
  "thinks a cursor can be an instrument, not just a pointer",
  "builds across code, products, and the occasional strange experiment",
];

const openings = ["Arun", "He", "A software engineer", "A curious builder", "Somewhere in San Francisco, Arun"];
const bridges = ["also", "meanwhile", "sometimes", "in another version of the story", "more recently"];

function makeFragment(index) {
  const seed = seeds[Math.floor(Math.random() * seeds.length)];
  const opening = openings[Math.floor(Math.random() * openings.length)];
  const bridge = bridges[Math.floor(Math.random() * bridges.length)];
  const variants = [
    `${opening} ${seed}.`,
    `${seed.charAt(0).toUpperCase()}${seed.slice(1)}; ${bridge}, the work keeps changing shape.`,
    `${opening} ${seed}, following curiosity wherever it becomes concrete.`,
  ];
  return { id: `${Date.now()}-${index}-${Math.random()}`, text: variants[Math.floor(Math.random() * variants.length)] };
}

const initialFragments = [
  { id: "intro-1", text: profile.tagline },
  { id: "intro-2", text: "This biography is not fixed. Move through it and the story changes." },
];

export default function LivingBiography() {
  const [fragments, setFragments] = useState(initialFragments);
  const [titleVisible, setTitleVisible] = useState(true);
  const [pulse, setPulse] = useState("idle");
  const lastPoint = useRef(null);
  const distance = useRef(0);
  const sequence = useRef(0);
  const restoreTimer = useRef(null);

  const addText = useCallback(() => {
    setFragments((current) => [...current.slice(-15), makeFragment(sequence.current++)]);
    setPulse("write");
  }, []);

  const removeText = useCallback(() => {
    setFragments((current) => {
      if (current.length > 0) return current.slice(0, -1);
      setTitleVisible(false);
      window.clearTimeout(restoreTimer.current);
      restoreTimer.current = window.setTimeout(() => setTitleVisible(true), 900);
      return current;
    });
    setPulse("erase");
  }, []);

  const handleMovement = useCallback((clientX, clientY) => {
    const previous = lastPoint.current;
    lastPoint.current = { x: clientX, y: clientY };
    if (!previous) return;

    const dx = clientX - previous.x;
    const dy = clientY - previous.y;
    distance.current += Math.hypot(dx, dy);
    if (distance.current < 68) return;
    distance.current = 0;

    if (Math.abs(dx) >= Math.abs(dy)) {
      if (dx > 0) addText();
      else removeText();
    } else if (dy < 0) {
      addText();
    } else {
      removeText();
    }
  }, [addText, removeText]);

  useEffect(() => {
    const idle = window.setTimeout(() => setPulse("idle"), 260);
    return () => window.clearTimeout(idle);
  }, [fragments, titleVisible]);

  useEffect(() => () => window.clearTimeout(restoreTimer.current), []);

  const wordCount = useMemo(
    () => fragments.reduce((total, fragment) => total + fragment.text.split(/\s+/).length, 0),
    [fragments]
  );

  return (
    <main
      className={`living-bio living-bio--${pulse}`}
      onMouseMove={(event) => handleMovement(event.clientX, event.clientY)}
      onTouchMove={(event) => {
        const touch = event.touches[0];
        if (touch) handleMovement(touch.clientX, touch.clientY);
      }}
    >
      <div className="living-bio__noise" aria-hidden="true" />
      <header className="living-bio__meta">
        <span>an unstable biography</span>
        <span>{String(wordCount).padStart(3, "0")} words</span>
      </header>

      <section className="living-bio__canvas" aria-live="polite">
        <h1 className={titleVisible ? "" : "is-erased"}>{profile.name}</h1>
        <div className="living-bio__fragments">
          {fragments.map((fragment, index) => (
            <p key={fragment.id} style={{ "--delay": `${Math.min(index, 8) * 22}ms` }}>
              {fragment.text}
            </p>
          ))}
          {fragments.length === 0 && <p className="living-bio__ghost">keep erasing</p>}
        </div>
      </section>

      <footer className="living-bio__instructions">
        <span>← erase</span>
        <span className="living-bio__status">{pulse === "write" ? "writing" : pulse === "erase" ? "forgetting" : "move the cursor"}</span>
        <span>generate →</span>
      </footer>
    </main>
  );
}
