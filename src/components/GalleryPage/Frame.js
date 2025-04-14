import "./Frame.css";
import { Link } from "react-router-dom";
import wedding2 from "../../assets/images/wedding2.jpg";
import party from "../../assets/images/party.jpg";
import school from "../../assets/images/school.jpg";
import coming from "../../assets/images/coming.jpg";
import corporate from "../../assets/images/corporate.com";
import privatep from "../../assets/images/privatep.jpg";

import React from "react";

const Frame = () => {
  return (
    <div className="frame_container">
      <div className="card_container">

        <article className="card_article">
          <img src={wedding2} alt="client1" className="card_img" />
          <div className="card_data">
            <span className="card_description"></span>
            <h2 className="card_title">WEDDING EVENT</h2>
            <Link to="/gallerygrid" className="card_button">
              Read More
            </Link>
          </div>
        </article>

        <article className="card_article">
          <img src={party} alt="client1" className="card_img" />
          <div className="card_data">
            <span className="card_description"></span>
            <h2 className="card_title">PARTIES</h2>
            <Link to="/gallerygrid" className="card_button">
              Read More
            </Link>
          </div>
        </article>

        <article className="card_article">
          <img src={corporate} alt="client1" className="card_img" />
          <div className="card_data">
            <span className="card_description"></span>
            <h2 className="card_title">CORPORATE EVENT</h2>
            <Link to="/gallerygrid" className="card_button">
              Read More
            </Link>
          </div>
        </article>
      </div>

      <div className="card_container">

        <article className="card_article">
          <img src={privatep} alt="client1" className="card_img" />
          <div className="card_data">
            <span className="card_description"></span>
            <h2 className="card_title">PRIVATE EVENT</h2>
            <Link to="/gallerygrid" className="card_button">
              Read More
            </Link>
          </div>
        </article>

        <article className="card_article">
          <img src={school} alt="client1" className="card_img" />
          <div className="card_data">
            <span className="card_description"></span>
            <h2 className="card_title">SCHOOL EVENT</h2>
            <Link to="/gallerygrid" className="card_button">
              Read More
            </Link>
          </div>
        </article>

        <article className="card_article">
          <img src={coming} alt="client1" className="card_img" />
          <div className="card_data">
            <span className="card_description"></span>
            <h2 className="card_title">COMING OF AGE CELEBRATION</h2>
            <Link to="/gallerygrid" className="card_button">
              Read More
            </Link>
          </div>
        </article>

      </div>
    </div>
  );
};

export default Frame;
