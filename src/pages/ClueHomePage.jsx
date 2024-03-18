import "../css/CaseHomePage.css"
import NavBar from "../components/NavBar";
import ClueCard from "../components/ClueCard";
import { useLocation, useNavigate } from "react-router-dom";
import { getCaseClue } from "../services/caseApi";
import { useEffect, useState } from "react";
import axios from "axios";


export default function ClueHomePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;
    const [date, setDate] = useState('');
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
    }, [clueData]);
    return (
        <div>
            <NavBar />
            <div className="OuterContainer">
                <button className="AddClue"
                    onClick={() => navigate("/addClue", { state: { id: id } })}
                >
                    Add Clue
                </button>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button onClick={()=>{navigate("/searchClue", { state: { id:id, date: date } })}}>Search</button>
                {clueData?.data.length === 0 ? (<h1>No clue found</h1>) : clueData?.data.map((element) => (
    <ClueCard
        key={element._id} // Assuming _id is the unique identifier for each clue
        caseId={id}
        id={element._id}
        name={element.name}
        description={element.description}
        category={element.category}
        image={element.image}
        time={element.createdAt}
    />
))}
            </div>
        </div>
    );
}
