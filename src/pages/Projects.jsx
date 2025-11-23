import React, { useState, useEffect } from "react";
import PS5 from "../components/PS5";
import Laptop from "../components/Laptop";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Load projects from JSON
    fetch('/src/assets/info/project.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error loading projects:', err));
  }, []);

  const bookColors = [
    'bg-red-600',
    'bg-blue-600',
    'bg-green-600',
    'bg-purple-600',
    'bg-yellow-600',
    'bg-pink-600',
    'bg-indigo-600',
    'bg-orange-600'
  ];

  return (
    <section className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
      
      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-black/30"></div>

      {/* ROOM container */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-end md:items-end justify-between gap-8 md:gap-16 px-4 md:px-12">

        {/* LEFT — Bookshelf with Projects */}
        <div className="w-full md:w-2/3 mb-8 md:mb-16">
          <h1 className="font-arcade text-4xl md:text-5xl mb-8 text-center md:text-left">
            MY PROJECTS
          </h1>

          {/* Bookshelf */}
          <div className="relative">
            {/* Shelf wood */}
            <div className="bg-amber-900 h-4 w-full rounded-t-sm shadow-lg mb-1"></div>
            
            {/* Books Container */}
            <div className="bg-amber-950/50 p-6 rounded-b-lg border-4 border-amber-900/50 min-h-[300px]">
              <div className="flex flex-wrap gap-2 items-end">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedProject(project)}
                    className={`
                      ${bookColors[index % bookColors.length]}
                      w-16 h-64 rounded-sm cursor-pointer
                      transform hover:scale-105 hover:-translate-y-4
                      transition-all duration-300
                      shadow-[4px_4px_0px_rgba(0,0,0,0.5)]
                      relative group
                      flex items-end justify-center
                      border-r-4 border-black/30
                    `}
                  >
                    {/* Book spine text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="transform -rotate-90 text-white font-bold text-xs whitespace-nowrap px-2 text-shadow">
                        {project.title}
                      </p>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs bg-black/80 px-2 py-1 rounded whitespace-nowrap">
                        Click to open
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom shelf wood */}
            <div className="bg-amber-900 h-3 w-full rounded-b-sm shadow-lg mt-1"></div>
          </div>
        </div>

        {/* RIGHT — PS5 Character */}
        <div className="flex-shrink-0">
          <div className="scale-[2] sm:scale-[2.5] md:scale-[3.5] lg:scale-[4]">
            <Laptop/>
          </div>
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-4 border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-900 p-6 border-b-2 border-gray-700 flex justify-between items-center">
              <h2 className="font-arcade text-2xl md:text-3xl text-cyan-400">
                {selectedProject.title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-white hover:text-red-500 text-3xl leading-none transition-colors"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              {selectedProject.img && (
                <img 
                  src={selectedProject.img} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6 border-2 border-gray-700"
                />
              )}

              {/* Project Description */}
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Links (if available) */}
              {(selectedProject.github || selectedProject.live) && (
                <div className="flex gap-4 mt-6">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
                    >
                      GitHub →
                    </a>
                  )}
                  {selectedProject.live && (
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;