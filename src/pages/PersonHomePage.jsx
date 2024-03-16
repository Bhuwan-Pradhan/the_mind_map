import "../css/CaseHomePage.css"
import NavBar from "../components/NavBar";
import PersonCard from "../components/PersonCard";
import { useLocation, useNavigate } from "react-router-dom";
import { getCasePerson } from "../services/caseApi";
import { useEffect, useState } from "react";


export default function PersonHomePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;
    const [personData, setPersonData] = useState();
    const getAllData = async () => {
        try {
            const getPerson = await getCasePerson(id._id);

            setPersonData(getPerson);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllData();
    }, []);
    return (
        <div>
            <NavBar />
            <div className="OuterContainer">
                <button className="AddClue"
                    onClick={() => navigate("/addPerson", { state: { id: id } })}
                >
                    Add Person
                </button>
                {personData?.data.map((element) => (
                    <PersonCard id={element} name={element.name} description={element.description} profession={element.profession} image={element.image} time={element.
                        createdAt} />
                ))}
            </div>
        </div>
    );
}