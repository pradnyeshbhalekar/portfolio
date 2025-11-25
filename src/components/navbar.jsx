import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="font-arcade text-2xl text-indigo-300 tracking-wider cursor-pointer select-none"
          onClick={() => setOpen(false)}
        >
          PRADNYESH
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-indigo-400"
            className="font-arcade text-md text-gray-300 hover:text-indigo-300 cursor-pointer select-none"
          >
            ABOUT
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-indigo-400"
            className="font-arcade text-md text-gray-300 hover:text-indigo-300 cursor-pointer select-none"
          >
            PROJECTS
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-indigo-400"
            className="font-arcade text-md text-gray-300 hover:text-indigo-300 cursor-pointer select-none"
          >
            EXPERIENCE
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden text-gray-300"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown (no background) */}
      {open && (
        <div className="md:hidden py-3 px-4 flex flex-col gap-4">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="font-arcade text-gray-300 text-lg hover:text-indigo-300 cursor-pointer select-none"
            onClick={() => setOpen(false)}
          >
            ABOUT
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="font-arcade text-gray-300 text-lg hover:text-indigo-300 cursor-pointer select-none"
            onClick={() => setOpen(false)}
          >
            PROJECTS
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-80}
            className="font-arcade text-gray-300 text-lg hover:text-indigo-300 cursor-pointer select-none"
            onClick={() => setOpen(false)}
          >
            EXPERIENCE
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
