
import { useNavigate } from "react-router-dom";
import "../css/componentsCss/CaseContainerHome.css";
export default function CaseContainerHome(props) {
    const navigate = useNavigate();
    const utcTimeString = props.time;
    const utcTime = new Date(utcTimeString);

    // Get the UTC time in milliseconds
    const utcMilliseconds = utcTime.getTime();

    // Indian Standard Time (IST) is UTC + 5 hours and 30 minutes
    const ISTOffset = 5.5 * 60 * 60 * 1000;

    // Calculate the Indian time by adding the offset
    const indianTimeMilliseconds = utcMilliseconds + ISTOffset;

    // Create a new Date object for Indian time
    const indianTime = new Date(indianTimeMilliseconds);

    // Format the Indian time as a string
    const indianTimeString = indianTime.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    console.log(props.id);
    return (
        <>
            <a href="/addCase" className="addCase" >Add Case</a>
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
                                </div>
                            </div>
                        </div>

                        <div class="inside-page">
                            <div class="inside-page__container">
                                <h3 class="inside-page__heading inside-page__heading--city">
                                    {props.name}
                                </h3>
                                <p class="inside-page__text">
                                    {props.description}
                                </p>
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
                </section>
            </div>
        </>
    );
}
