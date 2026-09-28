import React from "react";
import skillsData from "../assets/info/skills.json";
import CatPlaying from "./CatPlaying";

const CATEGORY_COLORS = {
  "Programming Languages":      { dot: "bg-blue-400",   tag: "bg-blue-500/10 text-blue-200 border-blue-500/20" },
  "Technologies & Frameworks":  { dot: "bg-indigo-400", tag: "bg-indigo-500/10 text-indigo-200 border-indigo-500/20" },
  "Libraries & Databases":      { dot: "bg-violet-400", tag: "bg-violet-500/10 text-violet-200 border-violet-500/20" },
  "Tools & Platforms":          { dot: "bg-cyan-400",   tag: "bg-cyan-500/10 text-cyan-200 border-cyan-500/20" },
  "Additional Skills":          { dot: "bg-teal-400",   tag: "bg-teal-500/10 text-teal-200 border-teal-500/20" },
};

export default function SkillsTicker() {
  return (
    <section id="skills" className="w-full bg-gray-900 text-white px-6 py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-start justify-between mb-12">
          <div>
            <h2 className="font-arcade text-3xl md:text-4xl text-white mb-2 tracking-widest">SKILLS</h2>
            <p className="text-gray-400 text-sm">Things I work with</p>
          </div>

          <div className="md:hidden pointer-events-none -mt-2 -mr-2">
            <CatPlaying fps={8} loop width={150} height={150} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillsData.map((cat, i) => {
            const color = CATEGORY_COLORS[cat.category] ?? { dot: "bg-gray-400", tag: "bg-gray-500/10 text-gray-200 border-gray-500/20" };
            return (
              <div
                key={i}
                className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-6 hover:border-gray-600/80 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${color.dot}`} />
                  <h3 className="text-gray-300 text-sm font-semibold tracking-wide">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1 rounded-full border text-xs font-medium ${color.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="hidden md:flex items-center justify-center pointer-events-none">
            <CatPlaying fps={8} loop width={220} height={220} />
          </div>
        </div>
      </div>
    </section>
  );
}
