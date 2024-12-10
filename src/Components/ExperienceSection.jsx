import React from 'react';
import Logo from '../assets/Image/VallabhiLogo.png'

const ExperienceSection = () => {
  return (
    <section className="p-8">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Experience details */}
          <div className="flex items-center space-x-4 mb-4">
            {/* Logo */}
            <img
              src={Logo}
              alt="Logo"
              className="w-20 h-12"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
              Front-End Web Developer || Graphic Designer Intern</h3>
              <p className="text-gray-500">Vallabhi Group of Companies (Vallabhi IT Services)</p>
              <p className="text-gray-500">Date: September 2024 - Present</p>
              <p className="text-gray-500">Location: Lucknow, Uttar Pradesh, India</p>
            </div>
          </div>
          {/* <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Mauris et egestas arcu. Donec vulputate ipsum eu ante
            hendrerit volutpat.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
