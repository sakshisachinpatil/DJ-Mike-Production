import "./Form.css";
import React from "react";

const Form = () => {
  return (
    <div className="hero_main">
        <div className="text">
            <span>WE WOULD LOVE TO HEAR FROM YOU</span>
        </div>
        <div className="contact-container">
          
              <form className="contact-form">
                <label className="contact-title">CONTACT US</label>
                <label className="label-text">First Name</label>
                <input type="text" placeholder="Jane"></input>
                <label className="label-text">Last Name</label>
                <input type="text" placeholder="Smitherton"></input>
                <label className="label-text">Email</label>
                <input type="email" placeholder="email@janesfakedomain.net"></input>
                <label className="label-text">Message</label>
                <textarea rows="6" placeholder="Type your message here"/>
                <button className="contact-btn">Submit</button>
              </form>
              <div className="hero_r">
                <span className="get">Get in touch with DJMP</span>
                <span className="reach">Ways To Reach Us</span>
                <span className="contact-content">
                    Make your event unforgettable with our top DJs. They expertly read
                    the room and tailor music to create the perfect atmosphere. Don’t
                    wait, book now for a memorable celebration and ensure your event is
                    a resounding success!
                </span>
              </div>
          
        </div>
    </div>
    
  )
}

export default Form;
