import { useEffect, useRef } from "react";
import AsciiBinaryFlow from "./Animation_code/AsciiBinaryFlow";
import { gsap } from "gsap";
const Work_on_sec = () => {

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

            <section  id="work" ref={sectionRef} className="Work_on">
                <div className="container">
                    <div className="main_work_on">
                        <div className="work_on_title" ref={titleRef}>
                            <h2>What I Work On</h2>
                            <div className="work_on_list_box">
                                <div className="work_on_card">
                                    <p>01</p>
                                    <h3>AI Product Systems</h3>
                                    <h4>Model-facing product and engineering systems shaped by work at OpenAI</h4>
                                </div>

                                <div className="work_on_card">
                                    <p>02</p>
                                    <h3>Applied ML & Tooling</h3>
                                    <h4>YouTube abuse detection, network analysis tools, and workflow automation</h4>
                                </div>


                                <div className="work_on_card">
                                    <p>03</p>
                                    <h3>Research Engineering</h3>
                                    <h4>C/C++ MCU firmware, BLE/Android libraries, and sensor research support</h4>
                                </div>

                                <div className="work_on_card">
                                    <p>04</p>
                                    <h3>Projects & Writing</h3>
                                    <h4>Ribbon, Ortho, BioProtect, LyricLearner, and essays on aruneswara.com</h4>
                                </div>

                            </div>
                        </div>
                        <div className="work_on_img" ref={imgRef}>
                            <AsciiBinaryFlow />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work_on_sec;
