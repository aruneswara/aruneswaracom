import { useEffect, useRef, useState } from "react";

import Hero_sec from "../components/Hero_sec";
import Experience_sec from "../components/Experience_sec";
import Credentials_sec from "../components/Credentials_sec";
import Projects_sec from "../components/Projects_sec";
import Get_in_touch_sec from "../components/Get_in_touch_sec";
import Sidebar from "../components/Sidebar";

const sections = ["home", "experience", "education", "projects", "contact"];

const Landing = () => {
  const [activeSection, setActiveSection] = useState(0);
  const pageRef = useRef(null);

  useEffect(() => {
    const pageEl = pageRef.current;
    if (!pageEl) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          const index = sections.indexOf(visibleEntry.target.id);
          if (index >= 0) setActiveSection(index);
        }
      },
      {
        root: pageEl,
        threshold: [0.45, 0.6, 0.75],
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="Main_page">
      <Sidebar activeSection={activeSection} />

      <div className="Page_layout" ref={pageRef}>
        <div className="section">
          <Hero_sec />
        </div>

        <div className="section">
          <Experience_sec />
        </div>

        <div className="section resume-section">
          <Credentials_sec />
        </div>

        <div className="section resume-section">
          <Projects_sec />
        </div>

        <div className="section">
          <Get_in_touch_sec />
        </div>
      </div>
    </div>
  );
};

export default Landing;
