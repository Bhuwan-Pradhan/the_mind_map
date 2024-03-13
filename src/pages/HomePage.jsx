import NavBar from "../components/NavBar";
import CaseContainerHome from "../components/CaseContainerHome"
import AddCase from "../components/AddCase";
import AddClue from "../components/AddClue";
import AddPerson from "../components/AddPerson";
export default function HomePage(){
    return(
        <div>
            <NavBar />
            <CaseContainerHome/>
        </div>
    );
}