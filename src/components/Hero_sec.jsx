import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import AsciiEarth from "./Animation_code/AsciiEarth";

const Hero_sec = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const titleEl = titleRef.current;
    const imgEl = imgRef.current;
    const sectionEl = sectionRef.current;

    if (!titleEl || !imgEl || !sectionEl) return;

    // Set initial position using GSAP
    gsap.set(titleEl, { opacity: 0, y: 50 });
    gsap.set(imgEl, { opacity: 0, x: 100 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section in view → animate in
            gsap.to(titleEl, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
            gsap.to(imgEl, { opacity: 1, x: 0, duration: 1, ease: "power2.out" });
          } else {
            // Section leaving → animate out
            // Decide direction based on scroll
            const direction = entry.boundingClientRect.top < 0 ? -50 : 50;

            gsap.to(titleEl, { opacity: 0, y: direction, duration: 1, ease: "power2.in" });
            gsap.to(imgEl, { opacity: 0, x: 100, duration: 1, ease: "power2.in" });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="Hero_sec panel">
      <div className="container">
        <div className="main_hero_sec">
          <div className="hero_sec_title" ref={titleRef}>
            <h2>Arun</h2>
            <h2>Eswara</h2>
            <p>OpenAI · San Francisco · UT Austin CSB</p>
            <div className="hero_sec_btn_box">
              <Link to="/blogs"><button>Read Blog →</button></Link>
              <a href="https://www.linkedin.com/in/aruneswara" target="_blank" rel="noreferrer">
                <button>LinkedIn ↗</button>
              </a>
            </div>
          </div>

          <div className="hero_sec_img_box" ref={imgRef}>
            <AsciiEarth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_sec;
