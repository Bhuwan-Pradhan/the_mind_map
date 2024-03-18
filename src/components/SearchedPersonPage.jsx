import "../css/CaseHomePage.css"
import NavBar from "../components/NavBar";
import PersonCard from "../components/PersonCard";
import { useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function SearchedPersonPage() {
    const location = useLocation();
    const { id,date } = location.state;
    const [personData, setPersonData] = useState();

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/case/searchPerson?date=${date}`);
            setPersonData(response?.data);
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
                {personData?.data.length === 0 ? (<h1>No Person found</h1>) : personData?.data.map((element) => (
                    <PersonCard caseId={id} id={element} name={element.name} description={element.description} profession={element.profession} image={element.image} time={element.
                        createdAt} />
                ))}
            </div>
        </div>
    );
}