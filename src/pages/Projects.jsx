import React, { useState, useEffect } from "react";
import Laptop from "../components/Laptop";
import CatSleep from "../components/CatSleep";

// JSON data
import projectData from "../assets/info/project.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Load all project images from src/assets/projects
  const images = import.meta.glob("../assets/projects/*", { eager: true });

  useEffect(() => {
    const resolvedProjects = projectData.map((p) => ({
      ...p,
      img: images[`../assets/projects/${p.img}`]?.default
    }));

    setProjects(resolvedProjects);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gray-800 text-white flex items-center justify-center px-6 py-16 relative overflow-hidden">

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/30"></div>

      {/* ROOM container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT — Projects Grid */}
          <div className="w-full lg:w-3/5 xl:w-2/3">
            <h1 className="font-arcade text-4xl md:text-5xl lg:text-6xl mb-8 text-center lg:text-left">
              MY PROJECTS
            </h1>

            {/* Projects Grid */}
            <div className="relative grid grid-cols-2 gap-4 md:gap-6 lg:bottom-8">
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
                    <div className="h-48 overflow-hidden bg-gray-700">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-2 text-indigo-300 group-hover:text-indigo-200">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                      {project.description}
                    </p>

                    <div className="text-xs text-gray-500 group-hover:text-indigo-300 transition-colors">
                      Click to view details →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Laptop + Cat */}
          <div className="w-full lg:w-2/5 xl:w-1/3 relative flex justify-center lg:justify-end items-center lg:sticky lg:top-[50%] mt-8 lg:mt-0 md:-translate-x-32">
            <div className="relative">

              {/* Laptop */}
              <div className="transform scale-[2.5] sm:scale-[3] md:scale-[3.5] lg:scale-[3.5]">
                <Laptop />
              </div>

              {/* Cat */}
              <div className="absolute -right-12 sm:-right-16 md:-right-20 lg:-right-20 bottom-0 transform scale-75 sm:scale-90 md:scale-100 lg:scale-100 lg:bottom-[-5px]">
                <CatSleep />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-4 border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gray-900 p-6 border-b-2 border-gray-700 flex justify-between items-center">
              <h2 className="font-arcade text-2xl md:text-3xl text-indigo-300">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white hover:text-red-500 text-3xl leading-none transition-colors"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {selectedProject.img && (
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="
                    w-full 
                    h-64 object-cover

                    md:h-auto md:max-h-[70vh]
                    md:object-contain

                    rounded-lg mb-6 border-2 border-gray-700
                  "
                />
              )}

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Links */}
              {(selectedProject.github || selectedProject.live) && (
                <div className="flex gap-4">
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
                      className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
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
