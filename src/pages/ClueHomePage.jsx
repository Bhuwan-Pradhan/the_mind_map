import "../css/CaseHomePage.css"
import NavBar from "../components/NavBar";
import ClueCard from "../components/ClueCard";
import { useLocation, useNavigate } from "react-router-dom";
import { getCaseClue } from "../services/caseApi";
import { useEffect, useState } from "react";


export default function ClueHomePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;
    const [clueData, setClueData] = useState();
    const getAllData = async () => {
        try {
            const getClue = await getCaseClue(id._id);

            setClueData(getClue);
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
                    onClick={() => navigate("/addClue", { state: { id: id } })}
                >
                    Add Clue
                </button>
                {clueData?.data.map((element) => (
                    <ClueCard id={element} name={element.name} description={element.description} category={element.category} image={element.image} time={element.
                        createdAt} />
                ))}
            </div>
        </div>
    );
}
