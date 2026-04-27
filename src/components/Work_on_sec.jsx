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
                                    <h3>Backend Systems</h3>
                                    <h4>Scalable APIs and services that handle production traffic</h4>
                                </div>

                                <div className="work_on_card">
                                    <p>02</p>
                                    <h3>Infrastructure</h3>
                                    <h4>Systems that are maintainable, observable, and resilient</h4>
                                </div>


                                <div className="work_on_card">
                                    <p>03</p>
                                    <h3>Engineering Quality</h3>
                                    <h4>Clean code, comprehensive tests, clear documentation</h4>
                                </div>

                                <div className="work_on_card">
                                    <p>04</p>
                                    <h3>API Design</h3>
                                    <h4>RESTful interfaces that are intuitive and well-documented</h4>
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
