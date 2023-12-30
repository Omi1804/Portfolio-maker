import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import "./Skills.css";

function Skills() {
  const skillsList = [
    {
      title: "FrontEnd Development",
      description:
        "I am adept in front-end development with a firm command of HTML, CSS, and JavaScript, specializing in creating dynamic and interactive web experiences. My proficiency in ReactJS is a cornerstone of my skill set, enabling me to construct modern, responsive user interfaces that are both efficient and engaging. By integrating the capabilities of React with my deep understanding of web fundamentals, I deliver seamless and sophisticated applications.",
    },

    {
      title: "BackEnd Development",
      description:
        "I am well-versed in backend technologies, with a solid grasp on Express.js for building APIs, MongoDB for document-oriented databases, Node.js for server-side scripting, and SQL for relational database management. My expertise extends to deploying scalable applications on AWS, ensuring robustness and high availability. These tools form the backbone of my development toolkit, allowing me to engineer comprehensive and efficient backend solutions.",
    },
    {
      title: "Blockchain Researcher and Developer",
      description:
        "I'm a blockchain researcher and developer specializing in scalability and efficiency. I integrate ZK-EVM with the Lightning Network and explore sidechains for scaling and interoperability. With advanced programming skills in Solidity, JavaScript, and C++, I develop secure decentralized applications and smart contracts to advance blockchain technology for real-world use.",
    },

    {
      title: "Data Structures & Algo",
      description:
        "I have a strong grasp of Data Structures and Algorithms (DSA), enabling me to design and implement efficient software solutions. With extensive experience in various applications, I prioritize smooth functionality and optimal user experience.",
    },
  ];

  const experienceList = [
    {
      title: "Web Developer and Designer",
      company: "OasisInfo Byte",
      description:
        "As a web developer at OasisInfo Byte, I designed and developed user-friendly websites, utilized frameworks, and collaborated with cross-functional teams.",
    },
    {
      title: " Blockchain Researcher and Developer",
      company: "Knit Finance",
      description:
        "As a Blockchain Researcher specializing in scalability and integration, I have undertaken in-depth research and analysis in the field of blockchain technology. My focus has been on exploring topics such as Bitcoin scalability, ZK-EVM integration with the Lightning Network, and sidechains.",
    },
  ];

  return (
    <div className="skills-container">
      <h1 className="Newww">My Skills</h1>
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
        <ProgressBar
          className="progressBar"
          completed={90}
          bgColor="#FF002E"
          baseBgColor="#1A1A1A"
          labelColor="#2F2F2F"
        />
        <ProgressBar
          className="progressBar"
          completed={80}
          bgColor="#FF002E"
          baseBgColor="#1A1A1A"
          labelColor="#2F2F2F"
        />
        <ProgressBar
          className="progressBar"
          completed={80}
          bgColor="#FF002E"
          baseBgColor="#1A1A1A"
          labelColor="#2F2F2F"
        />
        <ProgressBar
          className="progressBar"
          completed={85}
          bgColor="#FF002E"
          baseBgColor="#1A1A1A"
          labelColor="#2F2F2F"
        />
      </div>

      <h1 className="Experience-heading">My Experience</h1>
      <div className="experience-gird">
        {experienceList.map((experience, index) => {
          return (
            <div className="experience-card" key={index}>
              <div className="experience-content">
                <h3 className="experience-title">{experience.title}</h3>
                <h3 className="experience-company">{experience.company}</h3>
                <p className="experience-description">
                  {experience.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
