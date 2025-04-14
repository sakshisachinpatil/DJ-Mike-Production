import "./AboutusSectionStyles.css";
import React from 'react';
import Aboutheroimg from "../../assets/images/aboutushero.jpeg";


const HeroImgAbout = () => {
  return (
    <div className="aboutus-masking">
        <div className="about-section-hero">
            <div className="about-left-section">
                <img className="about-left-img" src={Aboutheroimg} alt="Aboutheroimg"/>
            </div>

            <div className="about-right-section">
                <p className="who-we-are">WHO WE ARE</p>
                <p className="aboutus-content">Looking for top-notch entertainment for your event? Choose DJ Mike Production! With 35+ years of experience, we excel in weddings, birthdays, corporate functions, and more. <br/>Our professional team customizes music to your taste from a selection of over 900,000 songs, ensuring everyone has a fantastic time. Trust us for unforgettable celebrations!</p>
            </div>
        </div>
    </div>
  )
}

export default HeroImgAbout;
