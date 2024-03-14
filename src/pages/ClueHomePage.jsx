import "../css/CaseHomePage.css"
import NavBar from "../components/NavBar";

import ClueCard from "../components/ClueCard";

export default function ClueHomePage(){
    return(
        <div>
            <NavBar/>
        <div className="OuterContainer">
        <a href="/addClue" className="AddClue" >Add Clue</a>
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
