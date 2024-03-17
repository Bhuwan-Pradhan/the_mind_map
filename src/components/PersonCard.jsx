import React from 'react';
import "../css/componentsCss/PersonCard.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePerson } from '../services/caseApi';

const PersonCard = (props) => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
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
                <div class="OutContent">
                    <img src={props.image} />
                    <div className="ShowPrsnDetails">
                        <h3>{props.name}</h3>
                        <p>{props.profession}</p>
                        <p>Time: {indianTimeString}</p>
                    </div>
                </div>
            </div>
            <div class="PersonCardInner">
                <div class="InContent">
                    <p>{props.description}</p>
                </div>
                <button onClick={() => navigate("/updatePerson", { state: { caseId: props.caseId, id: props.id, uName: props.name, uImage: props.image, uProfession: props.profession, uDescription: props.description } })}>update</button>
                <button onClick={() => { dispatch(deletePerson(token, props.id._id, props.caseId._id)) }}>delete</button>
            </div>

        </div>
    );
};

export default PersonCard;