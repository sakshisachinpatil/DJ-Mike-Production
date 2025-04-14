import React, { useState } from 'react';
import "./ServicesButtonStyles.css";
import { Link } from "react-router-dom";
import { handleSetActivePage } from '../ServicemainPage/SpecificEvents/EventNavbar';

const ServicesButton = () => {
  const [menu, setMenu] = useState(null);

  return (
    <div className="service-button-container">
      <div className="box"> </div>
      
      <div className="button-grid">
        <Link to="/corporateevent">
          <button className="event-button" onClick={() => handleSetActivePage("corporateevent", setMenu, menu)}>CORPORATE EVENT BOOKING</button>
        </Link>
        <Link to="/partyevent">
          <button className="event-button" onClick={() => handleSetActivePage("partyevent", setMenu, menu)}>PARTY EVENT BOOKING</button>
        </Link>
        <Link to="/comingofageevent">
          <button className="event-button" onClick={() => handleSetActivePage("comingofageevent", setMenu, menu)}>COMING OF AGE CELEBRATION</button>
        </Link>
        <Link to="/specialevent">
          <button className="event-button" onClick={() => handleSetActivePage("specialevent", setMenu, menu)}>SPECIAL EVENT BOOKING</button>
        </Link>
        <Link to="/weddingevent">
          <button className="event-button" onClick={() => handleSetActivePage("weddingevent", setMenu, menu)}>WEDDING EVENT BOOKING</button>
        </Link>
        <Link to="/schoolevent">
          <button className="event-button" onClick={() => handleSetActivePage("schoolevent", setMenu, menu)}>SCHOOL EVENT BOOKING</button>
        </Link>
      </div>
    </div>
  )
}

export default ServicesButton;
