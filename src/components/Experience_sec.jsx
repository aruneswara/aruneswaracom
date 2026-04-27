import { useEffect, useRef } from "react";
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
                                    <p>2025 - Present</p>
                                    <h3>OpenAI</h3>
                                    <p>San Francisco, California</p>
                                    <h4>Building at OpenAI from San Francisco.</h4>
                                </div>

                                <div className="Experience_sec_card">
                                    <p>2022 - 2025</p>
                                    <h3>Google</h3>
                                    <p>Software Engineering + Research Engineering</p>
                                    <h4>Built ML/log analysis tooling for YouTube API abuse detection, Android network pipeline work, C/C++ MCU firmware, and BLE support libraries.</h4>
                                </div>

                                <div className="Experience_sec_card">
                                    <p>2023</p>
                                    <h3>McKinsey</h3>
                                    <p>Business Analyst Intern</p>
                                    <h4>Modeled Fortune 100/Fortune 500 operating questions and researched sales funnels.</h4>
                                </div>

                                <div className="Experience_sec_card">
                                    <p>2021</p>
                                    <h3>NSA</h3>
                                    <p>Cybersecurity</p>
                                    <h4>Worked on zero-trust architecture, distributed firewall automation, and log monitoring.</h4>
                                </div>

                                <div className="Experience_sec_card">
                                    <p>2020 - 2024</p>
                                    <h3>University of Texas at Austin</h3>
                                    <p>Computer Science Honors + Business Honors</p>
                                    <h4>BS in Computer Science Honors and BBA in Business Honors via Texas CSB, with a 3.93 GPA and activities across ACM, TUIT, HBA, and CSBA.</h4>
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
