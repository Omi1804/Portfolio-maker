import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">

      <img src="/img.jpg" alt="" className='home_img' />

      <div className="home_content">
          <div className='name'>Om Nigam</div>

        <p className="data">I am a <span className="animation">
          <span>B</span>
          <span>L</span>
          <span>O</span>
          <span>C</span>
          <span>K</span>
          <span>C</span>
          <span>H</span>
          <span>A</span>
          <span>I</span>
          <span>N</span>
        </span>  and <span className="animation">

            <span>F</span>
            <span>R</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>-</span>
            <span>E</span>
            <span>N</span>
            <span>D</span>
            <span> </span>
            <span>D</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>L</span>
            <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
          </span></p>
        <p className="data">As a skilled developer with experience in decentralized applications and smart contracts on Ethereum and Binance Smart Chain, I bring a strong background in React, JavaScript, and Solidity. I thrive on projects that merge my expertise in blockchain and front-end development. Feel free to browse my portfolio and reach out with any inquiries or opportunities for collaboration.</p>
        <img src="/blockchain.png" alt="" className='background_img' />
        <img src="/blockchain.png" alt="" className='background_img_2' />
      </div>

    </div>
  );
}

export default Home;