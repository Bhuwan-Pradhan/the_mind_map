import "../css/CaseHomePage.css"
import NavBar from "../components/NavBar";
import CaseContainerHome from "../components/CaseContainerHome"
import ClueCard from "../components/ClueCard";
import PersonCard from "../components/PersonCard";

export default function CaseHomePage() {
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
            </div>
        </div>

    );
}