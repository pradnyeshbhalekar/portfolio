import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Laptop from "../components/Laptop";
import CatSleep from "../components/CatSleep";
import projectData from "../assets/info/project.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const nextProject = useCallback(() => {
    setActiveIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
    setShowDetails(false);
  }, [projects.length]);

  const prevProject = () => {
    setActiveIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
    setShowDetails(false);
  };

  useEffect(() => {
    if (isPaused || projects.length === 0) return;
    const interval = setInterval(() => {
      nextProject();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextProject, projects.length]);

  if (projects.length === 0) return null;

  const activeProject = projects[activeIndex];

  return (
    <section className="w-full min-h-screen bg-[#111827] text-white px-2 sm:px-6 py-16 sm:py-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16">

          {/* LEFT */}
          <div className="w-full lg:w-[65%] xl:w-2/3 flex flex-col pt-6 sm:pt-10">
            <h1 className="font-arcade text-3xl sm:text-4xl md:text-5xl text-indigo-400 mb-6 sm:mb-8 text-center lg:text-left">
              PROJECTS
            </h1>

            {/* MAIN DISPLAY */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => setShowDetails(!showDetails)}
              className="relative group rounded-2xl sm:rounded-[2rem] overflow-hidden border border-gray-800/50 bg-[#0d1117] transition-all duration-500 cursor-pointer aspect-[16/9]"
            >
              {/* IMAGE */}
              <div className="absolute inset-0">
                <img
                  src={activeProject.img}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />

                {/* STRONGER OVERLAY */}
                <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${showDetails
                    ? "bg-gradient-to-t from-black via-[#111827]/95 to-transparent"
                    : "bg-gradient-to-t from-black/80 via-transparent to-transparent"
                  }`} />
              </div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end sm:justify-center px-4 sm:px-6 md:px-14 pb-6 sm:pb-0 z-20">

                <h2 className={`font-arcade text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-all duration-500 ${showDetails
                    ? "text-xl sm:text-2xl md:text-4xl mb-2"
                    : "text-xl sm:text-3xl md:text-6xl"
                  }`}>
                  {activeProject.title}
                </h2>

                <div className={`transition-all duration-700 overflow-hidden ${showDetails
                    ? "max-h-[500px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                  }`}>
                  <p className="text-gray-200 text-xs sm:text-sm md:text-lg mb-4 leading-relaxed max-w-full sm:max-w-2xl">
                    {activeProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeProject.techstack?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] sm:text-xs bg-indigo-500/20 text-indigo-200 border border-indigo-400/20 rounded-full font-arcade tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* FIXED BUTTONS */}
                  <div className="flex gap-3">
                    {activeProject.live && (
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg"
                      >
                        LIVE
                      </a>
                    )}
                    {activeProject.github && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-black/60 hover:bg-black/80 text-white rounded-lg text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/10"
                      >
                        CODE
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevProject();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 hover:bg-indigo-600"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextProject();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 hover:bg-indigo-600"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="mt-5 flex gap-2 overflow-x-auto no-scrollbar pb-3">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setShowDetails(false);
                  }}
                  className={`flex-shrink-0 w-20 aspect-video rounded-lg overflow-hidden border ${activeIndex === index
                      ? "border-indigo-500 scale-105"
                      : "border-transparent opacity-50"
                    }`}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/3 flex items-center justify-center mt-10 lg:mt-0">
            <div className="relative">
              <div className="transform scale-[1.8] sm:scale-[2.2] md:scale-[2.8] lg:scale-[3]">
                <Laptop />
              </div>
              <div className="absolute -right-8 sm:-right-12 bottom-0">
                <CatSleep />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;