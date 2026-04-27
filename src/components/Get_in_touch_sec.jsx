import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Get_in_touch_sec = () => {
    const sectionRef = useRef(null);

    useEffect(() => {

        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const cards = sectionEl.querySelectorAll(".animate-card");

        // initial state
        gsap.set(cards, { opacity: 0, y: 50 });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        gsap.to(cards, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            stagger: 0.2, // cards ek ke baad ek ayenge 🔥
                            ease: "power2.out"
                        });

                    } else {

                        const direction = entry.boundingClientRect.top < 0 ? -50 : 50;

                        gsap.to(cards, {
                            opacity: 0,
                            y: direction,
                            duration: 0.6,
                            ease: "power2.in"
                        });
                    }
                });
            },
            { threshold: 0.4 }
        );

        observer.observe(sectionEl);

        return () => observer.disconnect();

    }, []);

    return (
        <section ref={sectionRef} id="contact" className="Get_in_touch_sec panel">
            <div className="container">
                <div className="main_get_in_touch_sec">

                    <div className="get_in_touch_heading">
                        <h2>Get in Touch</h2>
                    </div>

                    <div className="get_in_touch_sec_box">

                        <div className="get_in_touch_sec_card animate-card">
                            <p>Email</p>
                            <a href="">arun@example.com</a>
                        </div>

                        <div className="get_in_touch_sec_card animate-card">
                            <p>GitHub</p>
                            <a href="">github.com/aruneswara</a>
                        </div>

                        <div className="get_in_touch_sec_card animate-card">
                            <p>LinkedIn</p>
                            <a href="">linkedin.com/in/aruneswara</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Get_in_touch_sec;
