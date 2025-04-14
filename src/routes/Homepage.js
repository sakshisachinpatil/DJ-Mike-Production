import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/LandingPage/HeroImg';
import Footer from '../components/Footer';
import {IoLogoYoutube} from "react-icons/io";
import ParaTwo from '../components/LandingPage/ParaTwo';
import { Link } from "react-router-dom";
import ClientRow from '../components/LandingPage/ClientRow';
import ParaOne from '../components/LandingPage/ParaOne';

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>

      <div className="journey" style={{textAlign:"center", marginTop:"1rem", fontSize:"2rem"}}>
        <p>See Our
          <Link to="https://youtu.be/xL9Kev9w2iY?si=O2KRRDA99lk5idlz">
            <IoLogoYoutube size={35} style={{color:"white", margin:"0 15px"}}
                onMouseOver={({target})=>target.style.color="red"}
                onMouseOut={({target})=>target.style.color="white"}
            />
          </Link>
          Journey</p>
      </div>

      <ParaOne/>
      <ParaTwo/>
      <ClientRow/>
      <Footer/>
    </div>
  )
}

export default Homepage;
