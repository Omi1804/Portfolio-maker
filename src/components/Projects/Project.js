import React from 'react';
import './Project.css';

function Project() {
  const projectList = [
    {
    title: "Decentralized GoogleDrive",
    tools: "Blockchain, ReactJS",
    description: "Securely store images and videos in our decentralized Google Drive using Pinata and IPFS.",
    link: "https://dcgoogledrive.netlify.app"
    },
    {
    title: "Quizzes",
    tools: "ReactJS",
    description: "Engaging ReactJS website offering interactive quizzes across various categories to test and track knowledge.",
    link: "https://reactquizzes.netlify.app"
    },
    {
    title: "Gym Helper",
    tools: "ReactJS",
    description: "Get assistance with workout routines, instructional videos, and fitness tips for your gym exercises.",
    link: "https://gymexercisereactjs.netlify.app"
    },
    {
    title: "YouTube Clone",
    tools: "ReactJS",
    description: "Experience a YouTube-like interface to search, watch, and interact with videos.",
    link: "https://utubeclone2.netlify.app"
    },
    {
    title: "Lottery System Dapp",
    tools: "Blockchain, ReactJS",
    description: "Participate in a transparent and secure lottery system built with Solidity, ReactJS, and Ether.js.",
    link: "https://lotterysystemdaap.netlify.app"
    },
    {
    title: "LandRegistry",
    tools: "Blockchain, ReactJS",
    description: "Explore a decentralized LandRegistry Dapp for secure land purchasing using blockchain technology.",
    link: "https://dlandregistry.netlify.app"
    },
    {
    title: "AI Summarizer",
    tools: "ReactJS",
    description: "Expertly summarize lengthy articles for quick insights and time-saving.",
    link: "https://shortcontent.netlify.app"
    },
    {
    title: "Funding SmartContract",
    tools: "Blockchain, ReactJS",
    description: "Smart contract for secure crowdfunding campaigns on the blockchain.",
    link: "https://github.com/SrivastavaPragya/lottery-smart-contracts"
    },
    {
    title: "Restaurant Site",
    tools: "ReactJS",
    description: "Discover a captivating ReactJS site showcasing menus for breakfast, lunch, dinner, and snacks.",
    link: "https://restuarantreact.netlify.app"
    },
    {
    title: "Weather Tracker",
    tools: "ReactJS",
    description: "Track real-time temperature and comprehensive weather information with our Weather Tracker site.",
    link: "https://weathertrackreact.netlify.app"
    },
    {
    title: "ToDoList",
    tools: "ReactJS",
    description: "Effortlessly manage your pending tasks with our convenient ToDoList and stay organized.",
    link: "https://graceful-muffin-0b92e7.netlify.app"
    },
    {
    title: "CafeDapp",
    tools: "Blockchain, ReactJS",
    description: "Buy coffee securely using our decentralized Ether.js project and send ethers with ease.",
    link: "https://cafepayingdaap.netlify.app"
    },
    {
    title: "Blockchain Creation",
    tools: "Blockchain, JS",
    description: "Create your own blockchain using JavaScript and build secure decentralized applications.",
    link: "https://github.com/SrivastavaPragya/blockchain-creation-with-javascript"
    },
    {
    title: "Lottery",
    tools: "Blockchain, ReactJS",
    description: "Smart contract for a secure and transparent lottery system on the blockchain.",
    link: "https://github.com/SrivastavaPragya/lottery-smart-contracts"
    },
    {
    title: "Auction Smart Contract",
    tools: "Blockchain",
    description: "Smart contract for a decentralized auction system ensuring fairness and transparency.",
    link: "https://github.com/SrivastavaPragya/Auction.sols"
    },
    {
    title: "Snake Game",
    tools: "ReactJS",
    description: "Relive your childhood memories with the classic Snake Game, now playable on the web.",
    link: "https://github.com/SrivastavaPragya/EventOrganization.sol"
    },
    {
    title: "CV Scanner",
    tools: "ReactJS",
    description: "Scan and analyze interviewer CVs effortlessly with our interactive HTML, CSS, and JavaScript website.",
    link: "https://github.com/SrivastavaPragya/Cv-Scanner"
    },
    {
    title: "Crypto Currency Tracker",
    tools: "Blockchain, ReactJS",
    description: "Track real-time prices of your favorite cryptocurrencies with our responsive HTML, CSS, and JavaScript website.",
    link: "https://github.com/SrivastavaPragya/Cryptocurrency-tracker"
    },
    {
    title: "Book Your Show App",
    tools: "ReactJS, Three.JS",
    description: "A ReactJS app with show listing, summary, and ticket booking screens using API data and local storage.",
    link: "https://showdisplay.netlify.app"
    }
    ];
  
  return (
    <div className="project-container">
      <h1 className="New">My Projects</h1>
      <div className="project-grid">
        {projectList.map((project, index) => {
          return (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" key={index}>
              <div className="project-front">
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>
              <div className="project-back">
                <span className='project-tools'>{project.tools}</span>
                <p className="project-description">{project.description}</p>
                <button className="project-link-button"><a href={project.link} target="_blank" rel="noopener noreferrer">View project</a></button>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
