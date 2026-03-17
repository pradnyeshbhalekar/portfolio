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
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setShowDetails(false);
  }, [projects.length]);

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
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
    <section id="projects" className="w-full min-h-screen bg-[#111827] text-white px-6 py-20 relative overflow-hidden">
      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-black/20 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

          {/* LEFT — JioHotstar Slideshow */}
          <div className="w-full lg:w-3/5 xl:w-2/3 flex flex-col pt-10">
            <h1 className="font-arcade text-4xl md:text-5xl text-indigo-400 mb-8 text-center lg:text-left drop-shadow-[0_0_15px_rgba(129,140,248,0.3)]">
              PROJECTS
            </h1>

            {/* Main Feature Area */}
            <div 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => setShowDetails(!showDetails)}
              className="relative group rounded-[2rem] overflow-hidden border border-gray-800/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0d1117] aspect-[16/9] md:aspect-[21/9] transition-all duration-500 cursor-pointer"
            >
              {/* Main Image */}
              <div key={activeIndex} className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                <img 
                  src={activeProject.img} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-1000"
                />
                {/* Gradient Overlays */}
                <div className={`absolute inset-0 transition-all duration-700 ${showDetails ? "bg-[#111827]/90" : "bg-gradient-to-r from-[#111827] via-[#111827]/40 to-transparent opacity-80"}`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14 w-full md:w-5/6 z-10 pointer-events-none">
                <div key={`title-${activeIndex}`} className="animate-in fade-in slide-in-from-left duration-700">
                  <h2 className={`font-arcade text-white tracking-wider transition-all duration-500 ${showDetails ? "text-2xl md:text-4xl mb-4" : "text-3xl md:text-6xl"}`}>
                    {activeProject.title}
                  </h2>
                </div>
                
                <div className={`transition-all duration-700 overflow-hidden ${showDetails ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  <p className="text-gray-300 text-sm md:text-lg mb-6 leading-relaxed max-w-2xl">
                    {activeProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeProject.techstack?.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-500/10 backdrop-blur-md text-[10px] md:text-xs text-indigo-300 border border-indigo-500/20 rounded-full font-arcade uppercase tracking-tighter">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pointer-events-auto">
                    {activeProject.live && (
                      <a href={activeProject.live} target="_blank" rel="noopener noreferrer" 
                         className="px-6 py-2 md:px-8 md:py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs md:text-sm font-bold transition-all shadow-lg shadow-indigo-600/20">
                        LIVE DEMO
                      </a>
                    )}
                    {activeProject.github && (
                      <a href={activeProject.github} target="_blank" rel="noopener noreferrer"
                         className="px-6 py-2 md:px-8 md:py-3 bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-md text-white rounded-xl text-xs md:text-sm font-bold border border-gray-700 transition-all">
                        SOURCE CODE
                      </a>
                    )}
                  </div>
                </div>

                {!showDetails && (
                  <div className="mt-4 animate-pulse flex items-center gap-2 text-indigo-400 text-[10px] md:text-xs font-arcade">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    CLICK TO VIEW DETAILS
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              <button onClick={(e) => { e.stopPropagation(); prevProject(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/20 hover:bg-indigo-600/40 backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 pointer-events-auto">
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); nextProject(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/20 hover:bg-indigo-600/40 backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 pointer-events-auto">
                <ChevronRight size={24} className="text-white" />
              </button>
            </div>

            {/* Thumbnail Navigation Bar */}
            <div className="mt-8 flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start pb-6">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => { setActiveIndex(index); setShowDetails(false); }}
                  className={`relative flex-shrink-0 w-20 md:w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-500 transform hover:translate-y-[-2px] ${
                    activeIndex === index 
                    ? "border-indigo-500 scale-110 shadow-[0_0_15px_rgba(99,102,241,0.4)]" 
                    : "border-transparent opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
                  }`}
                >
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? "bg-indigo-500/5" : "bg-black/40"}`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Sticky Character Area */}
          <div className="w-full lg:w-2/5 xl:w-1/3 flex items-center justify-center lg:sticky lg:top-32 h-fit lg:h-[70vh]">
            <div className="relative">
              <div className="transform scale-[2.2] md:scale-[2.8] lg:scale-[3] transition-transform duration-500">
                <Laptop />
              </div>
              <div className="absolute -right-12 bottom-0 transform scale-90 lg:scale-100">
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