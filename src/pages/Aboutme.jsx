import React from "react";
import PS5 from "../components/PS5";

import kendrick from '../assets/frames/kendrick.png'
import blonde from '../assets/frames/blonde.png'
import starboy from '../assets/frames/starboy.png'
const AboutMe = () => {

  return (
    <section className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
      
      {/* Floor */}
      <div className="absolute bottom-0 left-0  right-0 h-24 bg-black/30"></div>

      {/* ROOM container */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-between gap-12 relative z-10">

        {/* LEFT SIDE — Frames and Character */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start ">
          {/* Wall Frames */}
          <div className="flex gap-6 md:mb-12  ">

            {/* Frame 1 - Kendrick */}
            <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-amber-900 p-3 rounded shadow-2xl border-[2px] border-amber-950">
                <img 
                  src={kendrick}
                  alt="Album artwork"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover"
                />
              </div>
            </div>

            {/* Frame 2 - Blonde */}
            <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-amber-900 p-3 rounded shadow-2xl border-[2px] border-amber-950">
                <img 
                  src={blonde}
                  alt="Album artwork"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover"
                />
              </div>
            </div>
            {/* Frame 3 - Starboy */}
            <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-amber-900 p-3 rounded shadow-2xl border-[2px] border-amber-950">
                <img 
                  src={starboy}
                  alt="Album artwork"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover"
                />
              </div>
            </div>
          </div>

          {/* PS5 Gaming Character */}
          <div className="w-full flex  md:justify-center lg:justify-center justify-center mt-8">
  <div className="scale-[2.5] md:scale-[3.5] lg:scale-[4]">
    <PS5 />
  </div>
</div>



        </div>

        {/* RIGHT SIDE — About Me Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="font-arcade text-4xl md:text-5xl mb-6">
            ABOUT ME
          </h1>
          
          <p className="text-base md:text-lg leading-relaxed mb-8">
            Hello! I'm <span className="font-bold">Pradnyesh Bhalekar</span>.  
            I'm a passionate developer who loves crafting immersive interfaces, smooth animations, and unique digital experiences.  
            This portfolio reflects my creative style — fun, animated, and full of personality.
          </p>

          {/* Contact Links */}
          <div className="flex gap-6 mt-4">
            <a 
              href="mailto:pradnyeshbhalekar78@gmail.com" 
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm md:text-base">Email</span>
            </a>

            <a 
              href="/path-to-your-resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">Resume</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;