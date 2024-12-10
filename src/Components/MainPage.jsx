import React from "react";

const MainPage = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://source.unsplash.com/random/1920x1080')`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-8">
        {/* Text and Buttons */}
        <div className="text-white max-w-md">
        <p className="text-base sm:text-lg">👋 My Name is Ashish Kumar Gautam</p>
        <h1
          className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mt-4 sm:mt-4 relative z-0"
          style={{ fontFamily: 'MyCustomFont' }}
        >
          Frontend Developer
        </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8">
            Discover endless possibilities with our solutions
          </h2>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md text-lg">
              Learn More
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-md text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
