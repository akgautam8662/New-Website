import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import MYPIC from '../assets/Image/MYPIC.jpg';

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-gray-100 m-5 md:m-10 rounded-lg shadow-lg">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
        <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
          <img
            src={MYPIC}
            alt="Ashish Kumar Gautam"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Me
        </h1>
        <p className="text-md md:text-lg text-gray-600 leading-relaxed">
          Hello! I am Ashish Kumar Gautam, a Frontend Developer and Graphic Designer passionate about creating engaging and user-friendly web experiences. My goal is to continuously learn, improve, and deliver impactful digital solutions.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          {/* Social Media Icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-400 transition duration-300"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-pink-500 transition duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
