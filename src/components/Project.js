import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function Project() {
  const projectList = [
    {
      title: "AI Summarizer",
      description: "This summarizes lengthy articles",
      link: "https://shortcontent.netlify.app/"
    },
    {
      title: "Restuarant site",
      description: "This site is made by using Reacjs .This site shows menu of a restuarant .You can view different dishes for dinner ,breakfast ,lucnch and snacks",
      link: "https://restuarantreact.netlify.app"
    },
    {
      title: "weatherTrack",
      description: "Weather Track site helps to track the current temp and other info regarding the weather",
      link: "https://weathertrackreact.netlify.app"
    },
    {
      title: "ToDoList",
      description: "keep a note of your pending works.",
      link: "https://graceful-muffin-0b92e7.netlify.app"
    },
    {
      title: "cafeDapp",
      description: "this is a decentralized blockchain ether.js project which will allow u to send ethers on buying coffe from a cafe",
      link: "https://cafepayingdaap.netlify.app"
    },
    {
      title: "LandRegistry",
      description: "This is a decentralized LandRegistry Daap project to buy Land",
      link: "https://dlandregistry.netlify.app"
    },
    {
      title: "BlockChain Creation",
      description: "This project contain a blockchain created by using javasacript",
      link: "https://github.com/SrivastavaPragya/blockchain-creation-with-javascript"
    },
    {
      title: "Lottery",
      description: "This is a smart contract for lottery System",
      link: "https://github.com/SrivastavaPragya/lottery-smart-contracts"
    },
    {
      title: "CrowdFunding Smart contract",
      description: "This is a smart contract for crowd funding system System",
      link: "https://github.com/SrivastavaPragya/lottery-smart-contracts"
    },
    {
      title: "Auction Smart contract",
      description: "This is a smart contract for Auction System",
      link: "https://github.com/SrivastavaPragya/Auction.sols"
    },
    {
      title: "Snake game",
      description: "This is a snake game which reminds you of your childhood",
      link: "https://github.com/SrivastavaPragya/EventOrganization.sol"
    },
    {
      title: "CV SCANNER",
      description: "This is a html css and js website which allows you to scan the cv of the interviewer" ,
      link: "https://github.com/SrivastavaPragya/Cv-Scanner"
    },
     {
      title: "crypto currency tracker",
      description: "This is a html css and js website which allows you to trach the price of your favourite crypto currency" ,
      link: "https://github.com/SrivastavaPragya/Cryptocurrency-tracker"
    },
    {
      title: "Lottery System Dapp",
      description: "This is a  lottery system Dapp made by using solidity reactjs and ether.js" ,
      link: "https://lotterysystemdaap.netlify.app"
    },
    {
      title: "Decentrakized google drive",
      description: "This is a decentralized google drive where u stor ur images and vidos on pinata through ipfs" ,
      link: "dcgoogledrive.netlify.app"
    },
    {
      title: "Book Your show app",
      description: "This is a reactjs project consisting of threee screen .It lists all the shows fetched from an api and shows the the summary of particular show separately on aother screen. U can also book tickets for these shows and the data will be stored in local storage " ,
      link: "https://showdisplay.netlify.app/"
    },
   
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
