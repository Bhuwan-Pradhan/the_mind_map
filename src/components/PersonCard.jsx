import React from 'react';
import "../css/componentsCss/PersonCard.css"


const PersonCard = (props) => {
    const utcTimeString = props.time;
    const utcTime = new Date(utcTimeString);

    // Get the UTC time in milliseconds
    const utcMilliseconds = utcTime.getTime();
    
    
    // Calculate the Indian time by adding the offset
    const indianTimeMilliseconds = utcMilliseconds;
    
    // Create a new Date object for Indian time
    const indianTime = new Date(indianTimeMilliseconds);
    
    // Format the Indian time as a string
    const options = {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    
    const indianTimeString = indianTime.toLocaleString("en-IN", options);
    
    return (
        <div class="PersonCard">
            <div class="PersonCardOuter">
                <div class="content">
                    <img src={props.image} />
                    <h3>{props.name}</h3>
                    <h3>{props.profession}</h3>
                    <h3>time: {indianTimeString}</h3>
                </div>
            </div>
            <div class="PersonCardInner">
                <div class="content">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PersonCard;