import React from 'react';
import "../css/componentsCss/ClueCard.css"


const ClueCard = (props) => {
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
    <div class="ClueCardDiv">
    <h3 className="ClueTitle">{props.name}</h3>
    <figure className="ClueImage">
      <img src={props.image}/>
      <figcaption>{props.name}</figcaption>
    </figure>
    <p class="ClueDescription">
      {PaymentResponse.description}</p>
    <p class="ClueCategory">{props.category}</p>
    <p class="ClueDate">{indianTimeString}</p>
  </div>
  );
};

export default ClueCard;