import React from "react";
import PS5 from "../components/PS5";
import NowPlayingVinyl from "../components/NowPlayingVinyl";

import { Mail, FileText, Github, Linkedin } from "lucide-react";

import kendrick from "../assets/frames/kendrick.png";
import blonde from "../assets/frames/blonde.png";
import starboy from "../assets/frames/starboy.png";
import NowPlayingWidget from "../components/NowPlayingWidget";
import CatIdle from "../components/CatIdle";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-16 relative overflow-hidden"
    >
      {/* Floor gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-black/30" />

      {/* Container */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-between gap-12 relative z-10">
        {/* LEFT — Frames + Character */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          {/* Frames */}
          <div className="flex gap-6 md:mb-12">
            {[kendrick, blonde, starboy].map((img, i) => (
              <div
                key={i}
                className="transform hover:rotate-0 transition duration-300"
                style={{ rotate: `${i === 1 ? -2 : i === 2 ? -1 : 1}deg` }}
              >
                <div className="bg-amber-900 p-3 rounded shadow-2xl border-2 border-amber-950">
                  <img
                    src={img}
                    alt="album frame"
                    className="w-24 h-24 md:w-32 md:h-32 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* PS5 + Cat SIDE BY SIDE (no overlap) */}
          <div className="w-full flex justify-center mt-8">
            <div className="flex items-end gap-10">
              {/* PS5 Character */}
              <div className="scale-[2.5] md:scale-[3.5] lg:scale-[4]">
                <PS5 />
              </div>

              {/* Cat chilling on side */}
                <div className="absolute  translate-y-28 left-24 scale-[1] md:scale-[1.4] opacity-95">
      <CatIdle />
    </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Text + Contact */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Heading */}
          <div className="flex items-center gap-4 mt-4">
            <h1 className="font-arcade text-4xl md:text-5xl leading-none">
              ABOUT ME
            </h1>
          </div>

          <p className="text-base md:text-lg leading-relaxed mb-8 mt-6">
            Hello! I&apos;m <span className="font-bold">Pradnyesh Bhalekar</span>.
            <br />
            I build applications using React, React Native, Firebase, JavaScript,
            and backend tools like Node & Flask.
            <br />
            I like taking ideas from scratch and turning them into clean, usable
            products through consistent iteration.
          </p>

          {/* Contact Icons */}
          <div className="flex gap-6 mt-2">
            {[
              {
                href: "mailto:pradnyeshbhalekar78@gmail.com",
                label: "Email",
                Icon: Mail,
              },
              {
                href: "/resume.pdf",
                label: "Resume",
                Icon: FileText,
              },
              {
                href: "https://github.com/pradnyeshbhalekar",
                label: "GitHub",
                Icon: Github,
              },
              {
                href: "https://www.linkedin.com/in/pradnyesh-bhalekar-40788a284/",
                label: "LinkedIn",
                Icon: Linkedin,
              },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-cyan-400 hover:text-cyan-300 transition"
              >
                <Icon size={28} />
                <span
                  className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
                  bg-black text-white text-xs px-2 py-1 rounded-md pointer-events-none
                  transition-all duration-200 whitespace-nowrap"
                >
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Now Playing Vinyl */}
          <div className="mt-6 flex justify-center opacity-90">
            <div className="scale-75 origin-center">
              <NowPlayingWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
