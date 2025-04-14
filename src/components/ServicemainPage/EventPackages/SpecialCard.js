import "./SpecialCardStyles.css"
import React from "react";
import Packages from "./SpecialPackages";

const data = [
    {
        title: "BOOGIE BASH EVENT",
        singleline: "DJ service for 6 to 7 hours",
        paraOne: "Entertainment with a professional DJ ensuring a lively event. Live music mixing and creative song transitions to keep the energy up.",
        paraTwo: "Full room uplighting, intelligent dance floor lighting, and a DJ facade for a stylish setup. Song request link for guests, with expert mixing by the DJ.",
        show: "Top-notch DJ equipment covering all event spaces. Planning meeting included to personalize your event.",
        tag: "Starting At $ 1195.00",
    },
    {
        title: "EXTREME EXCITEMENT",
        singleline: "DJ service for 6 to 7 hours",
        paraOne: "Entertainment with a professional veteran DJ for a lively event. Live music mixing and creative song transitions to maintain energy.",
        paraTwo: "Professional emcee service for announcements and event flow. Full room uplighting, intelligent dance floor lighting, and illuminated DJ facade for a sleek setup.",
        show: "Customized requests page for song requests, ensuring an amazing dance party. Top-notch DJ equipment for all event spaces, plus two planning meetings for personalization.",
        tag: "Starting At $ 1595.00",
    },
    {
        title: "A NIGHT TO REMEMBER",
        singleline: "DJ service for 6 to 7 hours",
        paraOne: "Entertainment with a skilled DJ and professional emcee. Dynamic music mixing and customized song requests for a vibrant atmosphere.",
        paraTwo: "Enhanced lighting with intelligent dance floor lighting and illuminated DJ facade. Comprehensive event support includes audio needs and detailed planning.",
        show: "Top-tier DJ equipment covers all event spaces with separate sound systems. Three planning meetings ensure a personalized timeline and smooth event flow.",
        tag: "Starting At $ 1895.00",
    },
]

const SpecialCard = () => {
  return (
    <div className="specialcard-container">
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

export default SpecialCard;
