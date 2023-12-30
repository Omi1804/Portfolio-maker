import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <img src="/img2.jpeg" alt="" className="home_img" />

      <div className="home_content">
        <div className="name">Pragya Srivastava</div>

        <p className="data">
          I am a{" "}
          <span className="animation">
            <span>F</span>
            <span>U</span>
            <span>L</span>
            <span>L</span>
            <span>S</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
          </span>{" "}
          <span className="animation">
            <span>D</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>L</span>
            <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
          </span>
        </p>
        <p className="data">
          With expertise in the MERN stack, adept in crafting responsive web
          applications and fluent in technologies like MongoDB, Express, React,
          and Node.js. I excel in both frontend and backend paradigms, striving
          to deliver efficient and scalable software solutions. Feel free to
          check out my portfolio, and I'm open to opportunities for
          collaboration.
        </p>
        <img src="/blockchain.png" alt="" className="background_img" />
        <img src="/blockchain.png" alt="" className="background_img_2" />
      </div>
    </div>
  );
}

export default Home;
