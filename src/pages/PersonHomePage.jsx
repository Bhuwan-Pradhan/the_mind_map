import "../css/CaseHomePage.css"
import NavBar from "../components/NavBar";

import PersonCard from "../components/PersonCard";
import { useLocation, useNavigate } from "react-router-dom";
export default function PersonHomePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;
    return (
        <div>
            <NavBar />
            <div className="OuterContainer">
                <button className="AddClue"
                    onClick={() => navigate("/addPerson", { state: { id: id } })}
                >
                    Add Person
                </button>
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
            </div>
        </div>
    );
}