import React, { useState, useEffect } from "react";
import Laptop from "../components/Laptop";
import CatSleep from "../components/CatSleep";
import experienceData from "../assets/info/experience.json";


const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experienceData)
  }, []);

  return (
    <section id="experience" className="w-full min-h-screen bg-gray-700 text-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
      
      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-black/40"></div>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* LEFT — Character Scene */}
            <div className="w-full lg:w-2/5 xl:w-1/3 flex justify-center items-center h-full min-h-[60vh]">

            <div className="relative">
              {/* Laptop */}
              <div className="transform scale-[2.5] sm:scale-[3] md:scale-[3.5] lg:scale-[3.5]">
                <Laptop />
              </div>

              {/* Cat beside laptop */}
              <div className="absolute -right-12 sm:-right-16 md:-right-20 lg:-right-20 bottom-0 transform scale-75 sm:scale-90 md:scale-100 lg:scale-100 lg:bottom-[-5px]">
                <CatSleep />
              </div>
            </div>
          </div>

          {/* RIGHT — Experience Content */}
          <div className="w-full lg:w-3/5 xl:w-2/3 flex flex-col justify-center">
            <h1 className="font-arcade text-4xl md:text-5xl lg:text-6xl mb-12 text-center lg:text-left">
              EXPERIENCE
            </h1>

            {/* Experience Card */}
            {experiences.length > 0 ? (
              <div className="space-y-10">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="
                      bg-gray-800/80 
                      backdrop-blur 
                      rounded-2xl 
                      p-8 
                      border border-gray-600
                      shadow-xl
                      transition-all 
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-2xl
                      hover:border-indigo-400
                      hover:bg-gray-700
                    "
                  >
                    {/* Company & Role */}
                    <div className="mb-4">
                      <h2 className="font-bold text-2xl md:text-3xl text-indigo-300 mb-2">
                        {exp.role}
                      </h2>
                      <h3 className="text-xl md:text-2xl text-gray-300 mb-3">
                        {exp.company}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                           {exp.duration}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-2">
                             {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>

                    {/* Technologies/Skills */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-indigo-300 font-semibold mb-3 text-sm uppercase tracking-wider">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="
                                bg-gray-700 
                                text-gray-300 
                                px-3 py-1 
                                rounded-full 
                                text-sm 
                                transition-all
                                hover:bg-indigo-400 
                                hover:text-white
                              "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-indigo-300 font-semibold mb-3 text-sm uppercase tracking-wider">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li 
                              key={i}
                              className="text-gray-300 flex items-start gap-3"
                            >
                              <span className="text-indigo-400 mt-1">▹</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-800 rounded-xl p-12 border-2 border-gray-700 text-center">
                <p className="text-gray-400 text-lg">Loading experience...</p>
              </div>
            )}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Experience;
