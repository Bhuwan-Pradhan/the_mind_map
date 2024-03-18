
import { useNavigate } from "react-router-dom";
import "../css/componentsCss/CaseContainerHome.css";
import { deleteCase } from "../services/caseApi";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {faTrashCan } from '@fortawesome/free-regular-svg-icons';


export default function CaseContainerHome(props) {
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
        <>

            <div id="OuterCaseContainer">

                <section class="card-section">
                    <div class="card">
                        <div class="flip-card">
                            <div class="flip-card__container">
                                <div class="card-front">
                                    <div class="card-front__tp card-front__tp--city">

                                        <h2 class="card-front__heading">
                                            {props.name}
                                        </h2>
                                    </div>

                                    <div class="card-front__bt">
                                        <p class="card-front__text-view card-front__text-view--city">
                                            <span className="caseDate">time: {indianTimeString}</span>
                                            <span className="casePlace">place: {props.place}</span>
                                            <span className="view__case">View Case</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="card-back">
                                    <img class="img__container" src={props.image} alt="" />
                                    <div className="CaseEDButtons">
                                        <button onClick={() => navigate("/updateCase", { state: { id: props.id, uName: props.name, uImage: props.image, uPlace: props.place, uDescription: props.description } })}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                        <button onClick={() => { dispatch(deleteCase(token, props.id._id)) }}><FontAwesomeIcon icon={faTrashCan} /></button>
                                        <button onClick={() => navigate("/timeline", { state: { id: props.id} })}>TimeLine</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="inside-page">
                            <div class="inside-page__container">
                                <h3 class="inside-page__heading inside-page__heading--city">
                                    {props.name}
                                </h3>
                                <div className="CaseDescriptionCntr">
                                    <p class="inside-page__text">
                                        {props.description}
                                    </p>
                                </div>
                                <div className="CluePrsnBtnCntr">
                                    <button className="inside-page__btn inside-page__btn--city"
                                        onClick={() => navigate("/clue", { state: { id: props.id } })}
                                    >
                                        Clue Book
                                    </button>

                                    <button className="inside-page__btn inside-page__btn--city"
                                        onClick={() => navigate("/person", { state: { id: props.id } })}
                                    >
                                        People Tracker
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
