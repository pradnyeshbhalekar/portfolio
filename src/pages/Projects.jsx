import React, { useState, useEffect } from "react";
import Laptop from "../components/Laptop";
import CatSleep from "../components/CatSleep";

// JSON data
import projectData from "../assets/info/project.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="w-full min-h-screen bg-gray-800 text-white flex items-center justify-center px-4 sm:px-6 py-16 relative overflow-hidden">

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/30"></div>

      {/* ROOM container */}
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          
          {/* LEFT — Projects List / Grid */}
          <div className="w-full lg:w-3/5 xl:w-2/3">
            <h1 className="font-arcade text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 text-center lg:text-left">
              MY PROJECTS
            </h1>

            {/* Projects Grid (mobile: 1 col, tablet+: 2 cols) */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:bottom-2">
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className="
                    bg-gray-800/90 
                    rounded-xl 
                    overflow-hidden 
                    cursor-pointer 
                    border border-gray-700 
                    shadow-lg
                    transition-all 
                    duration-300 
                    hover:-translate-y-2
                    hover:shadow-xl
                    hover:border-indigo-400
                    hover:bg-gray-700
                    group
                  "
                >

                  {/* Project Image */}
                  {project.img && (
                    <div className="h-40 sm:h-48 overflow-hidden bg-gray-700">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold text-lg sm:text-xl mb-1.5 sm:mb-2 text-indigo-300 group-hover:text-indigo-200">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-3">
                      {project.description}
                    </p>

                    <div className="text-[11px] sm:text-xs text-gray-500 group-hover:text-indigo-300 transition-colors">
                      Tap to view details →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Laptop + Cat (desktop only) */}
          <div className="hidden lg:flex w-full lg:w-2/5 xl:w-1/3 relative justify-center lg:justify-end items-center lg:sticky lg:top-[50%] md:ml-[-10%]">
            <div className="relative">

              {/* Laptop */}
              <div className="transform scale-[2.8] md:scale-[3.2] lg:scale-[3.5]">
                <Laptop />
              </div>

              {/* Cat */}
              <div className="absolute -right-16 md:-right-20 lg:-right-20 bottom-0 transform scale-90 md:scale-100 lg:scale-100 lg:bottom-[-5px]">
                <CatSleep />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Modal - Compact Design */}
{selectedProject && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-auto"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="bg-gray-900 rounded-xl max-w-3xl w-full border-2 border-gray-700 shadow-2xl my-4"
      onClick={(e) => e.stopPropagation()}
    >
      
      {/* Header with close button */}
      <div className="relative bg-gray-800 p-4 sm:p-5 rounded-t-xl border-b-2 border-gray-700">
        <h2 className="font-arcade text-xl sm:text-2xl md:text-3xl text-indigo-300 pr-10">
          {selectedProject.title}
        </h2>
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 text-white hover:text-red-500 text-3xl leading-none transition-colors"
        >
          ×
        </button>
      </div>

      {/* Content - Two Column Layout */}
      <div className="p-5 sm:p-6">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Left Column - Image */}
          <div className="flex flex-col justify-center">
            {selectedProject.img && (
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg border-2 border-gray-700"
              />
            )}
          </div>

          {/* Right Column - Details */}
          <div className="flex flex-col justify-between">
            
            {/* Description */}
            <div className="mb-4">
              <h3 className="text-indigo-300 font-semibold text-sm font-arcade uppercase tracking-wide mb-2">About</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Tech Stack */}
            {selectedProject.techstack?.length > 0 && (
              <div className="mb-4">
                <h3 className="text-indigo-300 font-semibold text-sm uppercase font-arcade tracking-wide mb-2">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techstack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-xs font-medium border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {(selectedProject.github || selectedProject.live) && (
              <div className="grid grid-cols-2 gap-3 pt-2">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2.5 rounded-lg transition-all font-semibold text-sm text-center"
                  >
                    GitHub
                  </a>
                )}

                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-lg transition-all font-semibold text-sm text-center"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  </div>
)}


    </section>
  );
};

export default Projects;