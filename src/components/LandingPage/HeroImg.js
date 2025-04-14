import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../../assets/images/headphones.jpeg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>MUSIC IS NOT WHAT WE DO</p>
        <p>IT IS WHO WE ARE</p>
      </div>
    </div>
  )
}

export default HeroImg;
