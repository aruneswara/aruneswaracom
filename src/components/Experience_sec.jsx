import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import WaterAscii from "./Animation_code/WaterAscii";


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
                                <div className="Experience_sec_card">
                                    <p>2022 - Present</p>
                                    <h3>Senior Backend Engineer</h3>
                                    <p>TechCorp</p>
                                    <h4>Leading backend development for distributed systems serving millions of users.</h4>
                                </div>

                                <div className="Experience_sec_card">
                                    <p>2020 - 2022</p>
                                    <h3>Software Engineer</h3>
                                    <p>StartupXYZ</p>
                                    <h4>Built scalable APIs and microservices architecture from the ground up.</h4>
                                </div>
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
