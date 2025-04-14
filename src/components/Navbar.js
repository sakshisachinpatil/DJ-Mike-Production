import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef } from "react";
import LogoImg from "../assets/images/Djmike.png";

const Navbar = () => {

    const [menu, setMenu] = useState(null);
    const menuRef = useRef();
    const handleSetActivePage = (page) => {
      if (menu !== page) {
        setMenu(page);
      }
    };

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 1){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img className="logo-img" src={LogoImg} alt="LogoImg"/>
      </Link>
      <ul ref={menuRef} className={click ? "nav-menu active" : "nav-menu"}>
        <li onClick={() => handleSetActivePage("/")}>
            <Link to="/" >HOME
            </Link>{menu === "/"?<hr/>:<></>}
        </li>
        <li onClick={() => handleSetActivePage("about")}>
            <Link to="/about">ABOUT
            </Link>{menu === "about"?<hr/>:<></>}
        </li>
        <li onClick={() => handleSetActivePage("servicemainpage")}>
            <Link to="/servicemainpage">SERVICES
            </Link>{menu === "servicemainpage"?<hr/>:<></>}
        </li>
        <li onClick={() => handleSetActivePage("gallery")}>
            <Link to="/gallery">GALLERY
            </Link>{menu === "gallery"?<hr/>:<></>}
        </li>
        <li onClick={() => handleSetActivePage("contact")}>
            <Link to="/contact">CONTACT
            </Link>{menu === "contact"?<hr/>:<></>}
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{color:"#fff"}}/>) : (<FaBars size={30} style={{color:"#fff"}}/>)}
      </div>
    </div>
  )
}

export default Navbar
