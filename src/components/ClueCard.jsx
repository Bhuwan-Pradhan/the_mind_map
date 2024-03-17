import React from 'react';
import "../css/componentsCss/ClueCard.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faPenToSquare } from '@fortawesome/free-solid-svg-icons'


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
      <div className="ClueTitle">{props.name}</div>
      <div className="ClueImage">
        <img src={props.image} />
      </div>
      <div class="ClueDescription">
        {props.description}</div>
      <div class="ClueCategory">{props.category}</div>
      <div class="ClueDate">{indianTimeString}</div>
    </div>
  );
};

export default ClueCard;