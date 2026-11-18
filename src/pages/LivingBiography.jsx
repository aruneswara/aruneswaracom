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
const initialText = `${profile.tagline} This biography is not fixed. Its lower edge decides how much can be remembered.`;

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

function makeWords(minimum) {
  const generated = [];
  while (generated.length < minimum) generated.push(...makeFragment().split(/\s+/));
  return generated;
}

function getCapacity(height) {
  return Math.max(0, Math.min(220, Math.floor(height * 0.34)));
}

export default function LivingBiography() {
  const [words, setWords] = useState(initialText.split(/\s+/));
  const [frameHeight, setFrameHeight] = useState(520);
  const [pulse, setPulse] = useState("idle");
  const previous = useRef(null);

  const resizeBiography = useCallback((clientY) => {
    const height = Math.max(42, Math.min(window.innerHeight - 108, clientY - 64));
    const prior = previous.current;
    previous.current = height;
    setFrameHeight(height);
    if (!prior) return;

    const capacity = getCapacity(height);

    setWords((current) => {
      if (height < prior - 2) {
        setPulse("erase");
        return current.slice(0, Math.min(current.length, capacity));
      }

      if (height > prior + 2) {
        setPulse("write");
        const additions = Math.max(0, capacity - current.length);
        return [...current, ...makeWords(additions).slice(0, additions)];
      }

      return current;
    });
  }, []);

  useEffect(() => {
    const idle = window.setTimeout(() => setPulse("idle"), 220);
    return () => window.clearTimeout(idle);
  }, [frameHeight]);

  const wordCount = useMemo(() => words.length, [words]);

  return (
    <main
      className={`living-bio living-bio--${pulse}`}
      onPointerMove={(event) => resizeBiography(event.clientY)}
    >
      <div className="living-bio__noise" aria-hidden="true" />
      <header className="living-bio__meta">
        <span>an unstable biography</span>
        <span>{Math.round(frameHeight)} px / {String(wordCount).padStart(3, "0")} words</span>
      </header>

      <section
        className="living-bio__frame"
        style={{ "--frame-height": `${frameHeight}px` }}
        aria-live="polite"
      >
        <div className="living-bio__copy">
          <h1>{profile.name}</h1>
          <p className="living-bio__stream">
            {words.map((word, index) => (
              <span key={`${index}-${word}`} className={index >= words.length - 5 ? "is-new" : ""}>{word} </span>
            ))}
          </p>
        </div>
        <span className="living-bio__corner" aria-hidden="true" />
      </section>

      <footer className="living-bio__instructions">
        <span>move up to forget</span>
        <span className="living-bio__status">{pulse === "write" ? "generating" : pulse === "erase" ? "deleting" : "the cursor sets the lower edge"}</span>
        <span>move down to generate</span>
      </footer>
    </main>
  );
}
