import React from 'react';
import { FaFileDownload } from 'react-icons/fa'; // Import the icon
import MainImg from '../assets/Image/bg_pic.png'; // Ensure the correct path to your image

const Homepage = () => {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${MainImg})` }}
    >
      {/* Overlay to darken background image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 flex items-end justify-center w-full h-full">
        <div className="text-center text-white px-4 mb-8">
          {/* Paragraph */}
          <p className="text-xl mb-4">👋 My Name is Ashish Kumar Gautam</p>

          {/* First Heading with custom style */}
          <h1
            className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mt-4 sm:mt-4 relative z-0"
            style={{ fontFamily: 'MyCustomFont' }}
          >
            Frontend Developer
          </h1>

          {/* Second Heading with custom style */}
          <h1
            className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-[#1a1c1b] mt-4 sm:mt-6"
            style={{ fontFamily: 'MyCustomFont' }}
          >
            & Graphic &nbsp;Designer
          </h1>

          {/* Buttons */}
          <div className="space-x-4 mt-6 flex justify-center">
            <a
              href="tel:+918579808662" 
              className="inline-block px-2 py-3 sm:px-8 sm:py-4 bg-white text-[#333] font-light sm:font-normal rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#f8f8f8]"
            >
              You need a designer
            </a>
            <a
              href="#"
              className="inline-flex items-center  px-2 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-light sm:font-normal rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Download CV
              <FaFileDownload className="ml-3" /> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
