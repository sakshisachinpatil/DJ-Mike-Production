import "./WeddingCardStyles.css"
import React from "react";
import Packages from "./WeddingPackages";

const data = [
    {
        title: "EMERALD",
        singleline: "DJ service for 6 to 7 hours",
        paraOne: "Reception entertainment with a skilled veteran DJ. Live music mixing and creative song transitions to maintain energy.",
        paraTwo: "Professional emcee service ensures a smooth flow of events. Event support covers audio needs and detailed planning for the wedding ceremony.",
        show: "Full room uplighting and intelligent dance floor lighting enhance venue ambiance. DJ facade adds a stylish touch while hiding equipment for a clean setup.",
        tag: "Starting At $ 1095.00",
    },
    {
        title: "SAPPHIRE",
        singleline: "DJ service for 6 to 7 hours",
        paraOne: "Reception entertainment with a seasoned DJ ensuring a lively atmosphere. Live music mixing and creative song transitions to maintain high energy.",
        paraTwo: "Professional emcee service for smooth event coordination and announcements. Event support includes audio and detailed planning for the wedding ceremony.",
        show: "Full room uplighting and intelligent dance floor lighting enhance venue ambiance. Illuminated DJ facade adds style and functionality to the setup, keeping wires and equipment organized.",
        tag: "Starting At $ 1595.00",
    },
    {
        title: "DIAMOND",
        singleline: "DJ service for 6 to 7 hours",
        paraOne: "Reception entertainment with an experienced DJ creating a memorable atmosphere. Live music mixing adds excitement and enhances the event experience.",
        paraTwo: "Professional emcee ensures smooth event flow and engagement. Event support covers audio needs and detailed planning for the wedding ceremony.",
        show: "Full room uplighting and intelligent dance floor lighting enhance venue ambiance. Illuminated DJ facade combines style with practicality for a clean setup.",
        tag: "Starting At $ 2295.00",
    },
]

const WeddingCard = () => {
  return (
    <div className="weddingcard-container">
        {
            data.map((item, index) => {
                return (
                    <Packages key={index} item={item}/>
                ) 
            })
        }
    </div>
  )
}

export default WeddingCard;
