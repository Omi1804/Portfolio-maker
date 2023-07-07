import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

import './Skills.css';

function Skills() {
  const skillsList = [
    {
      title: "FrontEnd Development",
      description: "I have a strong command over HTML, CSS, and JavaScript, and I excel in utilizing these languages to develop dynamic and interactive web applications. I possess extensive experience in working with ReactJS, leveraging its powerful features to build modern and efficient user interfaces.",
    },
    {
      title: "Blockchain Developer",
      description: "I possess advanced skills in programming languages like Solidity, JavaScript, and C++, and I have hands-on experience working with renowned blockchain frameworks including Ethereum and Hyperledger. My expertise in these languages and frameworks enables me to develop robust and secure decentralized applications and smart contracts.",
    },
    {
      title: "Blockchain Tools",
      description: "I possess extensive experience utilizing a diverse range of blockchain tools, including Truffle, Hyperledger, Ether.js, and Web3.js. These powerful tools have played a pivotal role in my development journey, enabling me to create robust and scalable blockchain solutions with utmost efficiency.",
    },

    {
      title: "Data Structures & Algo",
      description: "I have a strong grasp of Data Structures and Algorithms (DSA), enabling me to design and implement efficient software solutions. With extensive experience in various applications, I prioritize smooth functionality and optimal user experience.",
    },
  ];

  const experienceList = [
    {
      title: "Web Developer and Designer",
      company: "OasysInfo Byte",
      description: "As a web developer at OasysInfo Byte, I designed and developed user-friendly websites, utilized frameworks, and collaborated with cross-functional teams."
    },
    {
      title: "BlockChain Developer And Consultant",
      company: "Knit Finance",
      description: "As a blockchain developer and consultant at KNIT Finance, I created smart contracts, advised on blockchain solutions, and ensured secure and efficient decentralized systems."
    }
  ]

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
        <ProgressBar className='progressBar' completed={90} bgColor="#FF002E" baseBgColor="#1A1A1A" labelColor="#2F2F2F"/>
        <ProgressBar className='progressBar' completed={80} bgColor="#FF002E" baseBgColor="#1A1A1A" labelColor="#2F2F2F"/>
        <ProgressBar className='progressBar' completed={80} bgColor="#FF002E" baseBgColor="#1A1A1A" labelColor="#2F2F2F"/>
        <ProgressBar className='progressBar' completed={85} bgColor="#FF002E" baseBgColor="#1A1A1A" labelColor="#2F2F2F"/>
      </div>

        <h1 className='Experience-heading'>My Experience</h1>
        <div className="experience-gird">
        {experienceList.map((experience, index) => {
          return (
            <div className="experience-card" key={index}>
              <div className="experience-content">
                <h3 className="experience-title">{experience.title}</h3>
                <h3 className="experience-company">{experience.company}</h3>
                <p className="experience-description">{experience.description}</p>
              </div>
            </div>
          );
        })}

        </div>


    </div>
  );
}

export default Skills;
