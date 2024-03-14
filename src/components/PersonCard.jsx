import React from 'react';
import "../css/componentsCss/PersonCard.css"


const PersonCard = () => {
    return (
        <div class="PersonCard">
            <div class="PersonCardOuter">
                <div class="content">
                    <img src="https://preview.redd.it/under-what-circumstances-would-you-want-to-see-tony-stark-v0-x8aaxbjh8r6a1.jpg?auto=webp&s=b498ffbb7bcd8ecba1c178cfa6afef59b4038d50" />
                    <h3>Person Name</h3>
                </div>
            </div>
            <div class="PersonCardInner">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                </div>
            </div>
        </div>
    );
};

export default PersonCard;