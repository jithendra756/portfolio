'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I believe in a solution-oriented development approach,
                    ensuring that every project I work on is efficient,
                    scalable, and tailored to real-world needs.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Jithendra.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a Java Full Stack Developer passionate
                                about building reliable architectures,
                                optimizing performance, and delivering
                                end-to-end solutions that work in the real
                                world.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                My approach as a Java Full Stack Developer
                                centers on building scalable, high-performance
                                applications that align with both technical
                                requirements and business goals. By emphasizing
                                clean architecture, optimized backend systems,
                                and seamless integrations, I aim to deliver
                                solutions that are reliable, efficient, and
                                impactful.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
