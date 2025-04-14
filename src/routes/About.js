import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutusSection from '../components/AboutUsPage/AboutusSection';
import AboutCard from '../components/AboutUsPage/AboutCard';
import {Link} from "react-router-dom";
import TestimonialSlide from '../components/AboutUsPage/TestimonialSlide';
import AboutusText from '../components/AboutUsPage/AboutusText';

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutusSection/>
      <AboutCard/>

      <Link to="/contact">
      <button className="btn" style={{display:"block", margin:"auto"}}>CONTACT US TODAY !!</button>
      </Link>

      <AboutusText/>
      <TestimonialSlide/>
      <Footer/>
    </div>
  )
}

export default About;
