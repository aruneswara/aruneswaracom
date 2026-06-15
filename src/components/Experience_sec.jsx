import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import WaterAscii from "./Animation_code/WaterAscii";
import profile from "../data/profile";


const Experience_sec = () => {
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
        <>

            <section ref={sectionRef} id="experience" className="Experience_sec panel">
                <div className="container">
                    <div className="main_Experience_sec">
                        <div className="Experience_sec_title"  ref={titleRef}>
                            <h2>Experience</h2>
                            <div className="Experience_sec_box">
                                {profile.experience.map((item) => (
                                    <div className="Experience_sec_card" key={`${item.company}-${item.period}`}>
                                        <p>{item.period}</p>
                                        <h3>{item.company}</h3>
                                        <p>{item.role}{item.location ? ` · ${item.location}` : ""}</p>
                                        <ul>
                                            {item.bullets.map((bullet) => (
                                                <li key={bullet}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="Experience_sec_img_box" ref={imgRef}>
                            <WaterAscii />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experience_sec;
