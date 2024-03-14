import "../css/CaseHomePage.css"
import NavBar from "../components/NavBar";
import CaseContainerHome from "../components/CaseContainerHome"
import ClueCard from "../components/ClueCard";
import PersonCard from "../components/PersonCard";

export default function CaseHomePage(){
    return(
        <div className="OuterContainer">
            <ClueCard />
            <ClueCard />
            <ClueCard />
            <ClueCard />
            <ClueCard />
        </div>
    );
}