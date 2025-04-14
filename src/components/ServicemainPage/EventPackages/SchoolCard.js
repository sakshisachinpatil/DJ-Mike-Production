import "./SchoolCardStyles.css"
import React from "react";
import Packages from "./SchoolPackages";

const data = [
    {
        title: "SILVER",
        singleline: "DJ service for 6 to 7 hours",
        paraOne: "Entertainment with a skilled veteran DJ ensuring a lively atmosphere. Live music mixing and creative song transitions to maintain high energy. ",
        paraTwo: "Professional emcee service for seamless event coordination and engagement. Event support covers audio needs and meticulous planning.",
        show: "Full room uplighting and intelligent dance floor lighting enhance venue ambiance. DJ facade adds style and practicality, keeping the setup clean and organized.",
        tag: "Starting At $ 1195.00",
    },
    {
        title: "GOLD",
        singleline: "DJ service for 6 to 7 hours",
        paraOne: "Entertainment with an experienced DJ. Live music mixing and creative transitions for a lively dance floor.",
        paraTwo: "Professional emcee service ensures smooth event flow. Comprehensive event support covers audio and planning needs.",
        show: "Full room uplighting and intelligent dance floor lighting enhance ambiance. Illuminated DJ facade and customized music requests for a stylish and personalized event experience.",
        tag: "Starting At $ 1695.00",
    },
    {
        title: "PLATINUM",
        singleline: "DJ service for 6 to 7 hours",
        paraOne: "Entertainment with an expert DJ for a memorable experience. Live music mixing adds excitement and enhances the atmosphere.",
        paraTwo: "Professional emcee service ensures a smooth and engaging event flow. Comprehensive event support covers audio needs and detailed planning.",
        show: "Full room uplighting and intelligent dance floor lighting for ambiance and energy. Illuminated DJ facade and customized requests page for a stylish setup and personalized music experience.",
        tag: "Starting At $ 2195.00",
    },
]

const SchoolCard = () => {
  return (
    
    <div className="schoolcard-container">
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

export default SchoolCard;
