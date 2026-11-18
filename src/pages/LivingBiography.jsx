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
const initialFragments = [profile.tagline, "This biography is not fixed. Its edges decide how much can be remembered."];

function makeFragment() {
  const seed = seeds[Math.floor(Math.random() * seeds.length)];
  const opening = openings[Math.floor(Math.random() * openings.length)];
  const bridge = bridges[Math.floor(Math.random() * bridges.length)];
  const variants = [
    `${opening} ${seed}.`,
    `${seed.charAt(0).toUpperCase()}${seed.slice(1)}; ${bridge}, the work keeps changing shape.`,
    `${opening} ${seed}, following curiosity wherever it becomes concrete.`,
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

function getCapacity(width, height) {
  return Math.max(0, Math.min(30, Math.floor((width * height) / 34000)));
}

export default function LivingBiography() {
  const [fragments, setFragments] = useState(initialFragments);
  const [frame, setFrame] = useState({ width: 620, height: 520 });
  const [pulse, setPulse] = useState("idle");
  const previous = useRef(null);

  const resizeBiography = useCallback((clientX, clientY) => {
    const width = Math.max(42, Math.min(window.innerWidth - 22, clientX - 22));
    const height = Math.max(42, Math.min(window.innerHeight - 108, clientY - 64));
    const next = { width, height };
    const prior = previous.current;
    previous.current = next;
    setFrame(next);
    if (!prior) return;

    const horizontalShrank = width < prior.width - 5;
    const verticalShrank = height < prior.height - 5;
    const horizontalGrew = width > prior.width + 5;
    const verticalGrew = height > prior.height + 5;
    const capacity = getCapacity(width, height);

    setFragments((current) => {
      if (horizontalShrank || verticalShrank) {
        setPulse("erase");
        return current.slice(0, Math.min(current.length, capacity));
      }

      if (horizontalGrew || verticalGrew) {
        setPulse("write");
        const additions = Math.max(0, capacity - current.length);
        return [...current, ...Array.from({ length: additions }, makeFragment)];
      }

      return current;
    });
  }, []);

  useEffect(() => {
    const idle = window.setTimeout(() => setPulse("idle"), 220);
    return () => window.clearTimeout(idle);
  }, [frame]);

  const wordCount = useMemo(
    () => fragments.reduce((total, fragment) => total + fragment.split(/\s+/).length, 0),
    [fragments]
  );

  return (
    <main
      className={`living-bio living-bio--${pulse}`}
      onPointerMove={(event) => resizeBiography(event.clientX, event.clientY)}
    >
      <div className="living-bio__noise" aria-hidden="true" />
      <header className="living-bio__meta">
        <span>an unstable biography</span>
        <span>{Math.round(frame.width)} × {Math.round(frame.height)} / {String(wordCount).padStart(3, "0")} words</span>
      </header>

      <section
        className="living-bio__frame"
        style={{ "--frame-width": `${frame.width}px`, "--frame-height": `${frame.height}px` }}
        aria-live="polite"
      >
        <div className="living-bio__copy">
          <h1>{profile.name}</h1>
          {fragments.map((fragment, index) => <p key={`${fragment}-${index}`}>{fragment}</p>)}
        </div>
        <span className="living-bio__corner" aria-hidden="true" />
      </section>

      <footer className="living-bio__instructions">
        <span>shrink to forget</span>
        <span className="living-bio__status">{pulse === "write" ? "generating" : pulse === "erase" ? "deleting" : "the cursor sets the margin"}</span>
        <span>expand to generate</span>
      </footer>
    </main>
  );
}
