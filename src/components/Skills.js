

import React from 'react';
import { Link } from 'react-router-dom';

import './Skills.css';

function Skills() {
  const skillsList = [
    {
      title: "Front-end Development",
      description: "I am proficient in HTML, CSS, and JavaScript and have experience working with ReactJs.",
    },
    {
      title: "Blockchain developer",
      description: "I am proficient in programming languages such as Solidity, JavaScript and C++, and have worked with various blockchain frameworks such as Ethereum, Hyperledger",
    },
    {
        title: "BLOCKCHAIN TOOLS",
        description: "I have also experience in various blockchain tools like truffle ,Hyperledger,ether.js,we3.js",
      },

    {
      title: "Data Structure and alogrithms",
      description: "I understand the importance of Data Structures and Algorithms (DSA) in building efficient and optimized software solutions. I have extensive experience in designing and implementing data structures and algorithms for various software applications, ensuring that they run smoothly and provide the best user experience.",
    },
  ];

  return (
    <div className="skills-container">
      <h1 className='Newww'>My Skills</h1>
      <div className="skills-grid">
        {skillsList.map((skill, index) => {
          return (
            <div className="skill-card" key={index}>
              <div className="skill-content">
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
