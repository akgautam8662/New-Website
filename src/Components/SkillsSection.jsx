import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";  
import { FaWordpressSimple } from "react-icons/fa";
import { FaWix } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";

const SkillCard = ({ skill, icon }) => {
  return (
    <div className="w-32 h-32 bg-gray-800 text-white flex flex-col items-center justify-center rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="text-3xl mb-2">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-lg font-semibold">{skill}</h3>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { skill: "HTML5", icon: <FaHtml5 /> },
    { skill: "CSS3", icon: <FaCss3Alt /> },
    { skill: "Tailwind CSS", icon: <RiTailwindCssLine /> }, 
    { skill: "JavaScript", icon: <FaJsSquare /> },
    { skill: "ReactJS", icon: <FaReact /> },
    { skill: "Bootstrap", icon: <FaBootstrap /> },
    { skill: "WordPress", icon: <FaWordpressSimple /> },
    { skill: "Wix", icon: <FaWix /> },
    { skill: "Python", icon: <FaPython /> },
    { skill: "Figma", icon:  <FaFigma /> },
    { skill: "Canva", icon: <SiCanva /> },
    { skill: "Photoshop", icon: <SiAdobephotoshop /> },
    { skill: "Premiere Pro", icon: <SiAdobepremierepro /> },
  ];

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill.skill} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
