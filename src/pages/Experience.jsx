import React, { useState, useEffect } from "react";
import Laptop from "../components/Laptop";
import CatSleep from "../components/CatSleep";
import experienceData from "../assets/info/experience.json";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experienceData);
  }, []);

  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-gray-700 text-white px-6 py-16 relative overflow-hidden"
    >
      {/* Floor - Fixed at the bottom of the section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-black/40 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* LEFT — Sticky & Vertically Centered Character Scene */}
          <div className="w-full lg:w-2/5 xl:w-1/3 lg:h-screen lg:sticky lg:top-20 flex items-center justify-center py-10 lg:py-0">
            <div className="relative">
              {/* Laptop */}
              <div className="transform scale-[2.2] sm:scale-[2.8] md:scale-[3.2] lg:scale-[3]">
                <Laptop />
              </div>

              {/* Cat beside laptop */}
              <div className="absolute -right-12 sm:-right-16 md:-right-20 lg:-right-16 bottom-0 transform scale-75 lg:scale-90">
                <CatSleep />
              </div>
            </div>
          </div>

          {/* RIGHT — Experience Content */}
          <div className="w-full lg:w-3/5 xl:w-2/3 lg:py-24">
            <h1 className="font-arcade text-4xl md:text-5xl lg:text-6xl mb-16 text-center lg:text-left">
              EXPERIENCE
            </h1>

            {experiences.length > 0 ? (
              <div className="relative border-l-2 border-indigo-500/30 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12 pb-20">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />

                    <div
                      className="
                        bg-gray-800/60 
                        backdrop-blur-sm 
                        rounded-2xl 
                        p-6 md:p-8 
                        border border-gray-600/50
                        shadow-xl
                        transition-all 
                        duration-300
                        hover:border-indigo-400/50
                        hover:bg-gray-800/90
                        hover:shadow-indigo-500/10
                      "
                    >
                      {/* Company & Role */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <div>
                          <h2 className="font-bold text-2xl text-indigo-300">
                            {exp.role}
                          </h2>
                          <h3 className="text-xl text-gray-300 font-medium">
                            {exp.company}
                          </h3>
                        </div>
                        <div className="text-right flex flex-col items-start md:items-end">
                          <span className="text-indigo-400 font-mono text-sm md:text-base">
                            {exp.duration}
                          </span>
                          {exp.location && (
                            <span className="text-gray-400 text-xs md:text-sm uppercase tracking-widest">
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 opacity-90">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <ul className="space-y-3 mb-6">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="text-gray-300 text-sm md:text-base flex items-start gap-3">
                              <span className="text-indigo-500 mt-1">➤</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-md text-xs font-medium"
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