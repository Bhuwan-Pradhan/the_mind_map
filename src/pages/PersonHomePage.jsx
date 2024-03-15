import "../css/CaseHomePage.css"
import NavBar from "../components/NavBar";

import PersonCard from "../components/PersonCard";

export default function PersonHomePage(){
    return(
        <div>
            <NavBar/>
        <div className="ShowPersonContainer">
        <a href="/addPerson" className="AddPerson" >Add Person</a>
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