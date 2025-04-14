import React, { useRef, useState } from 'react';
import "./EventNavbarStyles.css";
import { Link } from "react-router-dom";

export const handleSetActivePage = (page, setMenu, menu) => {
  if (menu !== page) {
    setMenu(page);
  }
};

const EventNavbar = () => {
  const [menu, setMenu] = useState(null);
  const menuRef = useRef();

  return (
    <div className="eventnav-container">
      <ul ref={menuRef} className="event-menu">
        <li onClick={() => handleSetActivePage("corporateevent", setMenu, menu)}>
          <Link to="/corporateevent">CORPORATE EVENT BOOKING</Link>{menu === "corporateevent" ? <hr /> : <></>}
        </li>
        <li onClick={() => handleSetActivePage("partyevent", setMenu, menu)}>
          <Link to="/partyevent">PARTY EVENT BOOKING</Link>{menu === "partyevent" ? <hr /> : <></>}
        </li>
        <li onClick={() => handleSetActivePage("comingofageevent", setMenu, menu)}>
          <Link to="/comingofageevent">COMING OF AGE CELEBRATION</Link>{menu === "comingofageevent" ? <hr /> : <></>}
        </li>
        <li onClick={() => handleSetActivePage("specialevent", setMenu, menu)}>
          <Link to="/specialevent">SPECIAL EVENT BOOKING</Link>{menu === "specialevent" ? <hr /> : <></>}
        </li>
        <li onClick={() => handleSetActivePage("weddingevent", setMenu, menu)}>
          <Link to="/weddingevent">WEDDING EVENT BOOKING</Link>{menu === "weddingevent" ? <hr /> : <></>}
        </li>
        <li onClick={() => handleSetActivePage("schoolevent", setMenu, menu)}>
          <Link to="/schoolevent">SCHOOL EVENT BOOKING</Link>{menu === "schoolevent" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  )
}

export default EventNavbar;