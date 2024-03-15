import "../css/CaseHomePage.css"
import NavBar from "../components/NavBar";
import ClueCard from "../components/ClueCard";
import { useLocation, useNavigate } from "react-router-dom";

export default function ClueHomePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;

    return (
        <div>
            <NavBar />
            <div className="OuterContainer">
                <button className="AddClue"
                    onClick={() => navigate("/addClue", { state: { id: id } })}
                >
                    Add Clue
                </button>
                <ClueCard />
                <ClueCard />
                <ClueCard />
                <ClueCard />
                <ClueCard />
                <ClueCard />
                <ClueCard />
                <ClueCard />
                <ClueCard />
                <ClueCard />
            </div>
        </div>
    );
}
