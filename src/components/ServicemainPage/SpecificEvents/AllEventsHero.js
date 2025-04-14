import "./AllEventHeroStyles.css";
import React from 'react';
import AllEvent from "../../../assets/images/allevents.jpeg";
import { useTypewriter, Cursor} from 'react-simple-typewriter';

const AllEventsHero = () => {

  const [text] = useTypewriter({
      words: ['CORPORATE..', 'PARTY..', 'COMING OF AGE CELEBRATION..', 'SPECIAL..', 'WEDDING..', 'SCHOOL..'],
      loop: true,
      typeSpeed: 120,
      deleteSpeed: 80,
  });

  return (
    <div className="allevent-hero">
      <div className="allevent-mask">
        <img className="allevent-img" src={AllEvent} alt="AllEventImg"/>
      </div>
      <div className="common-content">
        
        <span>{text}</span>
        <span style={{color: "#20B9C3"}}>
          <Cursor/>
        </span>
        <p>EVENT</p>
        
      </div>
    </div>
  )
}

export default AllEventsHero;
