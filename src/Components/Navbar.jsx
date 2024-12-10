import React, { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon
import { HiMenuAlt4, HiX } from 'react-icons/hi'; // Hamburger & Close icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Left Side - Name */}
        <div className="flex items-center">
          <div className="text-3xl font-bold">
            <span className={`${isScrolled ? 'text-black' : 'text-white'}`}>
              akgautam
            </span>
            <span className="text-orange-500">.</span>
          </div>
        </div>

        {/* Centered Menu for Desktop */}
        <div className="hidden md:flex space-x-8 justify-center flex-1">
          {['Home', 'About', 'Design', 'Project', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`${
                isScrolled ? 'text-black' : 'text-white'
              } hover:text-orange-500 transition-all duration-300 transform hover:scale-125 text-xl font-semibold`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side - LinkedIn Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/akgautam8662/"
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
      <div
        className={`md:hidden ${
          isOpen ? 'block bg-white' : 'hidden'
        } p-4 transition-all duration-300`}
      >
        {['Home', 'About', 'Design', 'Project', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block py-2 text-black"
          >
            {item}
          </a>
        ))}
        <a
          href="https://www.linkedin.com/in/akgautam8662/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0077B5] text-white px-4 py-2 rounded-md hover:bg-[#005682] flex items-center gap-2"
        >
          <FaLinkedin className="text-white" />
          akgautam8662
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
