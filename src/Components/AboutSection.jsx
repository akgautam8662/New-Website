import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import MYPIC from '../assets/Image/MYPIC.jpg';

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-gray-100 m-5 md:m-10 rounded-lg shadow-lg">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 md:pl-24"> {/* Added padding-left */}
        <div className="w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
          <img
            src={MYPIC}
            alt="Ashish Kumar Gautam"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 md:text-left space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Me
        </h1>
        <p className="text-md md:text-lg text-gray-600 leading-relaxed">
          Hello! I am Ashish Kumar Gautam, a passionate Frontend Developer and Graphic Designer. I specialize in creating engaging, user-friendly web experiences that deliver impactful digital solutions. My objective is to continuously learn, develop, and grow. I believe in the power of constant learning and improvement, and I am always ready to take on new challenges to enhance both my skills and expertise.
        </p>
        <p className="text-md md:text-lg text-gray-600 leading-relaxed">
          With efficient problem-solving abilities, I thrive in dynamic, competitive environments, seeking opportunities that allow for both organizational success and personal growth. My goal is to not only contribute to innovative projects but also evolve as a professional who embraces every opportunity to learn and make a meaningful impact.
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
