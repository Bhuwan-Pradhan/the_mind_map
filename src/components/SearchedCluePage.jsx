import "../css/CaseHomePage.css";
import NavBar from "./NavBar";
import ClueCard from "./ClueCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function SearchedCluePage() {
    const location = useLocation();
    const { id, date } = location.state;
    const [clueData, setClueData] = useState();


    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/case/searchClue?date=${date}`);
            setClueData(response?.data);
        } catch (error) {
            console.error('Error searching for clues:', error);
        }
    };


    useEffect(() => {
        handleSearch();
    }, []);
    return (
        <div>
            <NavBar />
            <div className="OuterContainer">
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
