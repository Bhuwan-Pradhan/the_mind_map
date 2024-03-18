import NavBar from "../components/NavBar";
import React, { useEffect, useState } from "react";
import CaseContainerHome from "../components/CaseContainerHome"
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function SearchedCasePage() {
    const location = useLocation();
    const { date } = location.state;
    const [caseData, setCaseData] = useState();

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/case/searchCase?date=${date}`);
            setCaseData(response?.data);
        } catch (error) {
            console.error('Error searching for case:', error);
        }
    };


    useEffect(() => {
        handleSearch();
    }, []);
    return (
        <div>
            <NavBar />
            {caseData?.data.length === 0 ? (<h1>No case found</h1>) : caseData?.data.map((element) => (
                <div>
                    <CaseContainerHome id={element} name={element.name} description={element.description} place={element.place} image={element.image} time={element.
                        createdAt} />
                </div>

            ))}
        </div>
    );
}