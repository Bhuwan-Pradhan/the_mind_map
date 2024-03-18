import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../css/TimeLine.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import TLLeft from "../components/TLLeft";
import TLRight from "../components/TLRight";
export default function TimeLine() {
    const location = useLocation();
    const { id } = location.state;
    const [caseData, setCaseData] = useState();
    const getAll = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/case/getTimeline?caseId=${id._id}`);
            setCaseData(response?.data);
        } catch (error) {
            console.error('Error searching for case:', error);
        }
    };

    const utcTimeString = id.createdAt;
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

    useEffect(() => {
        getAll();
    }, []);
    return (
        <div className="TLOuterContainer">
            <div className="TLCaseDetails">
                <h2 className="TLCaseTitle">{id.name}</h2>
                <h4>{id.place}</h4>

                <h4>{indianTimeString}</h4>
            </div>
            <div class="MainTimeLine">
                {caseData?.data.length === 0 ? (<h1 style={{ "marginTop": "20px" }}>No clue or Person found</h1>) : caseData?.data.map((element, index) => (
                    <div key={index}>
                        {index % 2 === 0 ? (
                            <TLLeft data={element} /> // Render clue component for even index
                        ) : (
                            <TLRight data={element} /> // Render person component for odd index
                        )}
                    </div>

                ))}


            </div>
        </div>
    );
}