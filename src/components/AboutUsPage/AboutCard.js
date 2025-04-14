import "./AboutCardStyles.css"
import React from 'react';
import Image1 from "../../assets/images/experienceddj.jpeg";
import Image2 from "../../assets/images/musicforall.jpeg";
import Image3 from "../../assets/images/professionaldj.jpeg";


const AboutCard = () => {
  return (
    <div className="aboutcard-container">
        <div className="about-card">
            <img src={Image2} alt="music"/>
            <h2 className="card-title">MUSIC FOR ALL</h2>
            <div className="card-details">
                <p>Bored of the same tunes? We've got you covered! Explore a massive library of over 900,000 songs. Tell us what you like, or even what you dislike! Break free from your musical rut and discover fresh sounds. Dive in and find your new favorites!</p>
            </div>
        </div>
        <div className="about-card">
            <img src={Image1} alt="experienced"/>
            <h2 className="card-title">EXPERIENCED DJ's</h2>
            <div className="card-details">
                <p>With over 35 years of experience, DJs have a deep understanding of what makes an event unforgettable. They can curate the perfect music selection and create the right atmosphere, ensuring everyone enjoys the occasion.  In short, DJs are the experts at sound tracking any event for success.</p>
            </div>
        </div>
        <div className="about-card">
            <img src={Image3} alt="professional"/>
            <h2 className="card-title">PROFESSIONAL DJ's</h2>
            <div className="card-details">
                <p>Spotting great service can be tricky, but professionalism is a key giveaway. We stand out by providing exceptional, memorable experiences. Our commitment to top-notch customer service and meticulousness guarantees your satisfaction. Let us transform your experience into something unforgettable.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutCard;
