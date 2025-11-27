import React from "react";
import PS5 from "../components/PS5";

import { Mail, FileText, Github, Linkedin } from "lucide-react";

import kendrick from '../assets/frames/kendrick.png'
import blonde from '../assets/frames/blonde.png'
import starboy from '../assets/frames/starboy.png'

const AboutMe = () => {
  return (
    <section 
      id="about" 
      className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-16 relative overflow-hidden"
    >
      {/* floor gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-black/30"></div>

      {/* container */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-between gap-12 relative z-10">

        {/* LEFT — Frames + Character */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">

          {/* Frames */}
          <div className="flex gap-6 md:mb-12">
            
            <div className="transform rotate-1 hover:rotate-0 transition duration-300">
              <div className="bg-amber-900 p-3 rounded shadow-2xl border-2 border-amber-950">
                <img src={kendrick} className="w-24 h-24 md:w-32 md:h-32 object-cover"/>
              </div>
            </div>

            <div className="transform -rotate-2 hover:rotate-0 transition duration-300">
              <div className="bg-amber-900 p-3 rounded shadow-2xl border-2 border-amber-950">
                <img src={blonde} className="w-24 h-24 md:w-32 md:h-32 object-cover"/>
              </div>
            </div>

            <div className="transform -rotate-1 hover:rotate-0 transition duration-300">
              <div className="bg-amber-900 p-3 rounded shadow-2xl border-2 border-amber-950">
                <img src={starboy} className="w-24 h-24 md:w-32 md:h-32 object-cover"/>
              </div>
            </div>

          </div>

          {/* PS5 Gaming Character */}
          <div className="w-full flex justify-center mt-8">
            <div className="scale-[2.5] md:scale-[3.5] lg:scale-[4]">
              <PS5 />
            </div>
          </div>

        </div>

        {/* RIGHT — Text + Contact */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <h1 className="font-arcade text-4xl md:text-5xl mt-4">ABOUT ME</h1>

          <p className="text-base md:text-lg leading-relaxed mb-8">
            Hello! I'm <span className="font-bold">Pradnyesh Bhalekar</span>.  
            I build applications using React, React Native, Firebase, JavaScript and backend tools like Node & Flask.  
            I like taking ideas from scratch and turning them into clean, usable products through consistent iteration.
          </p>

          {/* CONTACT ICONS WITH TOOLTIPS */}
          <div className="flex gap-6 mt-2">

            {/* Email */}
            <a 
              href="mailto:pradnyeshbhalekar78@gmail.com"
              className="relative group text-cyan-400 hover:text-cyan-300 transition"
            >
              <Mail size={28}/>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                bg-black text-white text-xs px-2 py-1 rounded-md pointer-events-none
                transition-all duration-200 whitespace-nowrap">
                Email
              </span>
            </a>

            {/* Resume */}
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-cyan-400 hover:text-cyan-300 transition"
            >
              <FileText size={28}/>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                bg-black text-white text-xs px-2 py-1 rounded-md pointer-events-none
                transition-all duration-200 whitespace-nowrap">
                Resume
              </span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/pradnyeshbhalekar"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-cyan-400 hover:text-cyan-300 transition"
            >
              <Github size={28}/>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                bg-black text-white text-xs px-2 py-1 rounded-md pointer-events-none
                transition-all duration-200 whitespace-nowrap">
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/pradnyesh-bhalekar-40788a284/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-cyan-400 hover:text-cyan-300 transition"
            >
              <Linkedin size={28}/>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                bg-black text-white text-xs px-2 py-1 rounded-md pointer-events-none
                transition-all duration-200 whitespace-nowrap">
                LinkedIn
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;
