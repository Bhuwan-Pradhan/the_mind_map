import React from 'react';
import "../css/componentsCss/ClueCard.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faPenToSquare } from '@fortawesome/free-solid-svg-icons'


const ClueCard = (props) => {
  return (
    <div class="ClueCardDiv">
      <div className="ClueTitle">
        {props.name}
      </div>
      <div>
        <figure className="ClueImage">
          <img src={props.image} />
          {/* <figcaption>{props.name}</figcaption> */}
        </figure>
      </div>
      <div className="ClueDescription" >
        {props.description}
      </div>
      <div className="ClueDetailsDisplay">
        <div class="ClueCategory">{props.category}</div>
        <div class="ClueDate">March 12, 2023</div>
      </div>
      {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
    </div>
  );
};

export default ClueCard;