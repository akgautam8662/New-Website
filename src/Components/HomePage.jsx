import React from 'react';
import HomeImg from '../assets/HomePic.jpg';
import main1 from '../assets/Image/1.png';
import main2 from '../assets/Image/2.png';
import main3 from '../assets/Image/3.png';

import { FaLinkedinIn } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <header className="text-center px-4 sm:px-6 md:px-10 relative mt-9">
        <p className="text-base sm:text-lg">👋 My Name is Ashish Kumar Gautam</p>

        <h1
          className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mt-4 sm:mt-4 relative z-0 px-0 sm:px-0 lg:px-0"
          style={{ fontFamily: 'MyCustomFont' }}
        >
         Frontend Developer
        </h1>

        <h1 
          className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-[#1a1c1b]  mt-4 sm:mt-6"
          style={{ fontFamily: 'MyCustomFont' }}
        >
          &Graphic &nbsp;Designer
        </h1>


        <div className="relative mt-6 sm:mt-8">
          {/* Image */}
          <img
            src={main3}
            alt="MainPic"
            className="w-11/12 sm:w-2/3 md:max-w-md mx-auto sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-16 transition-all duration-500 grayscale hover:grayscale-0"
            style={{ top: '-44px' }}
          />

          {/* Buttons Positioned Above Image */}
          <div className="mt-0 sm:absolute sm:top-72 left-1/2 transform sm:-translate-x-1/2 z-20 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#1a1c1b] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base">
              You need a designer
            </button>
            <button className="border-2 border-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base">
              You need a photographer
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
