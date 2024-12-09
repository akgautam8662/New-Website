import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';  // LinkedIn icon
import { HiMenuAlt4, HiX } from 'react-icons/hi'; // Hamburger & Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-300 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side - Name */}
        <div className="flex items-center">
          <div className="text-3xl font-bold">
            <span className="text-black">akgautam</span>
            <span className="text-orange-500">.</span>
          </div>
        </div>

        {/* Centered Menu for Desktop */}
        <div className="hidden md:flex space-x-8 justify-center flex-1">
  <a
    href="#home"
    className="text-black hover:text-orange-500 transition-all duration-300 transform hover:scale-125 text-xl font-semibold"
  >
    Home
  </a>
  <a
    href="#about"
    className="text-black hover:text-orange-500 transition-all duration-300 transform hover:scale-125 text-xl font-semibold"
  >
    About
  </a>
  <a
    href="#design"
    className="text-black hover:text-orange-500 transition-all duration-300 transform hover:scale-125 text-xl font-semibold"
  >
    Design
  </a>
  <a
    href="#projects"
    className="text-black hover:text-orange-500 transition-all duration-300 transform hover:scale-125 text-xl font-semibold"
  >
    Project
  </a>
  <a
    href="#contact"
    className="text-black hover:text-orange-500 transition-all duration-300 transform hover:scale-125 text-xl font-semibold"
  >
    Contact
  </a>
</div>


        {/* Right Side - LinkedIn Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0077B5] text-white px-8 py-2 rounded-lg hover:bg-[#005682] flex items-center gap-2 text-xl font-medium"
          >
            <FaLinkedin className="text-white" />
            <span>akgautam8662</span>
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX className="text-3xl" /> : <HiMenuAlt4 className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-300 p-4`}>
        <a href="#home" className="block py-2 text-black">Home</a>
        <a href="#about" className="block py-2 text-black">About</a>
        <a href="#design" className="block py-2 text-black">Design</a>
        <a href="#projects" className="block py-2 text-black">Project</a>
        <a href="#contact" className="block py-2 text-black">Contact</a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0077B5] text-white px-4 py-2 rounded-md hover:bg-[#005682] flex items-center gap-2 "
        >
          <FaLinkedin className="text-white" />
          akgautam8662
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
