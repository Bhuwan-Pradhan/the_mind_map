import React from 'react';
import "../css/componentsCss/ClueCard.css"


const Card = () => {
  return (
      <div className="ClueCardContainer" onClick={() => alert('Card Clicked!')}>
        <div className="ClueCardHeader">
          <h2 className="ClueCardTitle">Card Title humba humba jumba jumba dumba dumba</h2>
          <p className="ClueDate">Date: March 12, 2024</p>
        </div>
        <img
          className="ClueImage"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card"
        />
        <div className="ClueDescription">
          This is a sample description for the card. You can replace this with your own content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, eos dignissimos! Reiciendis suscipit possimus rerum voluptatibus corporis ea praesentium architecto aperiam obcaecati nulla, cupiditate deserunt sed nesciunt, asperiores explicabo itaque.
        </div>
      </div>
  );
};

export default Card;
