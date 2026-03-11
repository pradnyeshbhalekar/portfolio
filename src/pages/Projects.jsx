import React, { useState, useEffect } from "react";
import Laptop from "../components/Laptop";
import CatSleep from "../components/CatSleep";
import projectData from "../assets/info/project.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="projects" className="w-full min-h-screen bg-[#111827] text-white px-6 py-20 relative overflow-hidden">

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-black/20 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">

          {/* LEFT — Projects Grid */}
          <div className="w-full lg:w-3/5 xl:w-2/3 lg:py-10">
            <h1 className="font-arcade text-4xl md:text-6xl text-indigo-400 mb-12 text-center lg:text-left">
              PROJECTS
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-32">
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-[#1a2233] rounded-xl overflow-hidden border border-gray-800 hover:border-indigo-500 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center text-xs font-arcade text-indigo-500 opacity-0 group-hover:opacity-100 transition-all">
                      OPEN FILE →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Sticky Character */}
          <div className="w-full lg:w-2/5 xl:w-1/3 lg:h-screen lg:sticky lg:top-32 flex items-center justify-center">
            <div className="relative">
              <div className="transform scale-[2.5] md:scale-[3] lg:scale-[3.2]">
                <Laptop />
              </div>
              <div className="absolute -right-12 bottom-0 transform scale-90 lg:scale-100">
                <CatSleep />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal - Kept the sleek side-by-side design */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="bg-[#111827] border border-gray-700 w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl flex flex-col md:flex-row shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="w-full md:w-1/2 bg-black">
              <img src={selectedProject.img} className="w-full h-full object-cover" alt="Project" />
            </div>
            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
              <h2 className="text-2xl font-arcade text-indigo-400 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.techstack?.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-800 text-xs text-indigo-300 border border-indigo-500/20 rounded">{tech}</span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {selectedProject.live && <a href={selectedProject.live} target="_blank" className="text-center py-3 bg-indigo-600 rounded-lg text-sm font-bold">LIVE</a>}
                {selectedProject.github && <a href={selectedProject.github} target="_blank" className="text-center py-3 bg-gray-800 rounded-lg text-sm font-bold border border-gray-700">CODE</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;