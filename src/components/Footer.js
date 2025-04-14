import "./FooterStyles.css";
import React from 'react';
import {FaMapLocationDot, FaTwitch, FaXTwitter} from "react-icons/fa6";
import {FaFacebookSquare, FaInstagram, FaPhoneAlt, FaYoutube} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {CgWebsite} from "react-icons/cg";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">  
            <div className="left">
                <h4>ABOUT</h4>
                <p>DJ Mike Production brings over 35 years of experience to your special event. From weddings and anniversaries to corporate functions and private parties, we ensure your celebration is a unique reflection of your styles</p>
                <div className="social">
                    <Link to="https://www.facebook.com/djmp20">
                            <FaFacebookSquare size={30} 
                                style={{color:"white", marginRight:"1rem"}}
                                onMouseOver={({target})=>target.style.color="#20B9C3"}
                                onMouseOut={({target})=>target.style.color="white"}
                            />                    
                    </Link>
                    <Link to="https://www.twitch.tv/djmikeprod">
                            <FaTwitch size={30} 
                                style={{color:"white", marginRight:"1rem"}}
                                onMouseOver={({target})=>target.style.color="#20B9C3"}
                                onMouseOut={({target})=>target.style.color="white"}
                            />
                    </Link>
                    <Link to="https://x.com/JMike71">
                            <FaXTwitter size={30} 
                                style={{color:"white", marginRight:"1rem"}}
                                onMouseOver={({target})=>target.style.color="#20B9C3"}
                                onMouseOut={({target})=>target.style.color="white"}
                            />
                    </Link>
                    <Link to="https://www.instagram.com/dj_mike_production/">
                            <FaInstagram size={30} 
                                style={{color:"white", marginRight:"1rem"}}
                                onMouseOver={({target})=>target.style.color="#20B9C3"}
                                onMouseOut={({target})=>target.style.color="white"}
                            />
                    </Link>
                    <Link to="https://youtu.be/xL9Kev9w2iY?si=O2KRRDA99lk5idlz">
                            <FaYoutube size={30} 
                                style={{color:"white", marginRight:"1rem"}}
                                onMouseOver={({target})=>target.style.color="#20B9C3"}
                                onMouseOut={({target})=>target.style.color="white"}
                            />
                    </Link>
                </div>
            </div>
            <div className="right">
            <span className="bar"></span>
                <h4>CONTACT US</h4>
                <div className="location">
                    <FaMapLocationDot size={20} style={{color:"white", marginRight:"1rem", cursor:"pointer"}}/>
                    <div>
                        <p>345 Dharma heights. Kolhapur, MH</p>
                        <p>41316001</p>
                    </div>
                </div>
                <div className="email">
                    <h4 style={{cursor:"pointer"}}><MdEmail size={20} style={{color:"white", marginRight:"1rem"}}/>DJMIKEPRODUCTION.COM</h4>
                </div>
                <div className="phone">
                    <h4 style={{cursor:"pointer"}}><FaPhoneAlt size={20} style={{color:"white", marginRight:"1rem"}}/>469.824.9860</h4>
                </div>
                <div className="website">
                    <h4 style={{cursor:"pointer"}}><CgWebsite size={20} style={{color:"white", marginRight:"1rem"}}/>info@djmikeproduction.com</h4>
                </div>
            </div> 
      </div>
      <div className="footer-bottom">
            <p>© Copyright 2003 - 2024 | All Rights Reserved | Powered by DJ Mike Production</p>
      </div>
    </div>
  )
}

export default Footer;
