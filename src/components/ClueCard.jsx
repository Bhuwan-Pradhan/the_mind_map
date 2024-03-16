import React from 'react';
import "../css/componentsCss/ClueCard.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faPenToSquare } from '@fortawesome/free-solid-svg-icons'


const ClueCard = () => {
  return (
    <div class="ClueCardDiv">
      <div className="ClueTitle">
        Found Fingerprints
      </div>
      <div>
        <figure className="ClueImage">
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <figcaption>A random photo</figcaption>
        </figure>
      </div>
      <div className="ClueDescription" >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo officia unde aperiam veniam consectetur, maxime quo tenetur optio delectus cumque sequi debitis laboriosam facere hic? Dignissimos error excepturi recusandae minus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, iste facere dolore, quo illo esse perspiciatis ex, est voluptates numquam earum labore tempora vero harum! Culpa consectetur minus ullam eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil tempora blanditiis assumenda iusto corporis, distinctio obcaecati consequuntur ipsam vitae tenetur optio doloribus quo enim sit. Magni facilis quas fugit maxime quia repellendus, iusto tempore dolore. Nostrum, eum. Recusandae inventore quisquam dolores repellendus fuga obcaecati aspernatur? Suscipit nihil iure tempora eos voluptatum magnam similique, reiciendis fuga blanditiis corporis ipsa necessitatibus eaque repellendus ipsum sequi fugiat eligendi omnis? Eveniet modi corrupti aut perspiciatis est, necessitatibus eius porro, laborum omnis molestias fugiat similique quia sunt tempora neque. Nesciunt adipisci culpa ullam animi consectetur!
      </div>
      <div class="ClueCategory">Forensics</div>
      <div class="ClueDate">March 12, 2023</div>
      {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
    </div>
  );
};

export default ClueCard;