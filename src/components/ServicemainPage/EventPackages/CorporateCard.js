import "./CorporateCardStyles.css"
import React from "react";
import Packages from "./CorporatePackages";

const data = [
    {
        title: "SILVER",
        singleline: "DJ service for up to 7 hours",
        paraOne: "Enjoy dynamic entertainment provided by a professional DJ. Creative song transitions and live music mixing to keep the energy high and the dance floor packed.",
        paraTwo: "DJ will handle all necessary announcements and emceeing. Full room uplighting to enhance decor and intelligent dance floor lighting to maintain high energy.",
        show: " A stylish and functional DJ facade for a sleek look and organized setup, hiding wires and equipment. Includes professional DJ equipment, separate sound systems, additional speakers, wireless mics, and one planning meeting to personalize your event.",
        tag: "Starting At $ 1195.00",
    },
    {
        title: "GOLD",
        singleline: "DJ service for up to 7 hours",
        paraOne: "Professional DJ services, including live music mixing and creative song transitions to keep the dance floor energetic. DJ will handle all necessary announcements and emcee duties.",
        paraTwo: "Full event support, including planning and audio setup. Includes full room uplighting, intelligent dance floor lighting, and an illuminated DJ facade for a stylish and organized setup.",
        show: "Custom music requests with expertise to create a personalized dance party experience. Professional DJ equipment for ceremony, cocktails, and reception. High-quality DJ equipment for all event spaces, two planning meetings to ensure a tailored event.",
        tag: "Starting At $ 1695.00",
    },
    {
        title: "PLATINUM",
        singleline: "DJ service for up to 7 hours",
        paraOne: "Professional DJ services providing extensive event coverage. Expert DJ for unique music mixing and a Professional Emcee to ensure a lively, engaging event.",
        paraTwo: "Live Music Mixing, an exciting layer to your event. Includes audio planning, professional DJ equipment, and separate sound systems for different event spaces.",
        show: "Full room uplighting, intelligent dance floor lighting, and an illuminated DJ facade for a polished look. 3 planning meetings, customized music requests, itinerary assistance, and enhanced event introductions.",
        tag: "Starting At $ 2195.00",
    },
]

const CorporateCard = () => {
  return (
    
    <div className="corporatecard-container">
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

export default CorporateCard;
