import React, { useState, useEffect } from "react";
import Laptop from "../components/Laptop";
import CatSleep from "../components/CatSleep";
import experienceData from "../assets/info/experience.json";
import { useInView } from "../hooks/useInView";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [sectionRef, sectionInView] = useInView({ threshold: 0.02 });
  const v = sectionInView ? "anim-visible" : "";

  useEffect(() => {
    setExperiences(experienceData);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full min-h-screen bg-gray-900 text-white px-4 md:px-6 py-10 md:py-16 relative overflow-hidden"
    >
      {/* subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      {/* Floor - Fixed at the bottom of the section (desktop only, it cuts through the cards on phones) */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-24 bg-black/40 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-12">

          {/* LEFT — Sticky & Vertically Centered Character Scene */}
          <div className={`w-full lg:w-2/5 xl:w-1/3 lg:h-screen lg:sticky lg:top-20 flex items-center justify-center py-2 sm:py-6 lg:py-0 anim-fade-left delay-100 ${v}`}>
            <div className="relative flex items-end">
              {/* Laptop */}
              <div className="relative transform scale-[1.4] sm:scale-[2.2] md:scale-[2.8] lg:scale-[3]">
                <Laptop />

                {/* Cat on the desk — inside the scaled scene so it keeps the same size and spot at every breakpoint */}
                <div className="hidden sm:block absolute left-[56px] top-[38px] w-max origin-top-left scale-[0.3]">
                  <CatSleep />
                </div>
              </div>

              {/* Phones: the scene is too small for a Skills-sized cat on the desk, so it naps on the floor beside it */}
              <div className="sm:hidden ml-[20px] translate-y-[26px]">
                <CatSleep width={88} height={72} />
              </div>
            </div>
          </div>

          {/* RIGHT — Experience Content */}
          <div className="w-full lg:w-3/5 xl:w-2/3 lg:py-24">
            <h1 className={`font-arcade text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-16 text-center lg:text-left anim-fade-left delay-200 ${v}`}>
              EXPERIENCE
            </h1>

            {experiences.length > 0 ? (
              <div className="relative border-l-2 border-indigo-500/30 ml-2 md:ml-6 pl-5 md:pl-10 space-y-5 md:space-y-8 pb-2 md:pb-20">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative anim-fade-right ${v}`}
                    style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                  >
                    {/* Timeline Dot — centered on the 2px line: -(padding-left + 7px) */}
                    <div className="absolute -left-[27px] md:-left-[47px] top-5 md:top-8 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />

                    <div
                      className="
                        bg-gray-800/60
                        backdrop-blur-sm
                        rounded-xl
                        p-4 md:p-6
                        border border-gray-600/50
                        shadow-xl
                        transition-all
                        duration-300
                        hover:border-indigo-400/50
                        hover:bg-gray-800/90
                        hover:shadow-indigo-500/10
                      "
                    >
                      {/* Company, Role & Duration */}
                      <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-2 md:gap-4 mb-3">
                        <div>
                          <h2 className="font-bold text-base sm:text-lg md:text-xl leading-snug text-indigo-300">
                            {exp.role}
                          </h2>
                          <h3 className="text-sm sm:text-base md:text-lg text-gray-300 font-medium">
                            {exp.company}
                          </h3>
                        </div>
                        <div className="flex flex-col items-start md:items-end shrink-0">
                          <span className="inline-block bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-[11px] md:text-xs px-2 py-0.5 rounded-md whitespace-nowrap">
                            {exp.duration}
                          </span>
                          {exp.location && (
                            <span className="mt-1 text-gray-400 text-xs uppercase tracking-widest">
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-[13px] md:text-sm leading-relaxed mb-3 md:mb-4 last:mb-0">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="text-gray-400 text-[13px] md:text-sm leading-relaxed flex items-start gap-2.5">
                              <span className="mt-[0.55em] w-1.5 h-1.5 shrink-0 bg-indigo-400" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech Stack */}
                      {exp.techstack && exp.techstack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-700">
                          {exp.techstack.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md text-[11px] md:text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-800/50 rounded-xl p-12 border border-gray-700 text-center">
                <p className="text-gray-400 text-lg animate-pulse">Loading experience...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;