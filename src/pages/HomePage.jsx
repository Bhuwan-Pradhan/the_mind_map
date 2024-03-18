import NavBar from "../components/NavBar";
import React, { useEffect, useState } from "react";
import CaseContainerHome from "../components/CaseContainerHome"
import { useSelector } from "react-redux";
import { getUserCase } from "../services/caseApi";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);
    const [caseData, setCaseData] = useState();
    const [date, setDate] = useState('');
    const getAllData = async () => {
        try {
            const getCase = await getUserCase(token);
            setCaseData(getCase);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllData();
    }, [caseData]);
    return (
        <div>
            <NavBar />
            <div className="AddCaseBtnCntr">
                <a href="/addCase" className="addCase" >Add Case</a>
            </div>
            <div className="searchSection">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button onClick={() => { navigate("/searchCase", { state: { date: date } }) }}>Search</button>
            </div>
            {caseData?.data.length === 0 ? (<h1>No case found</h1>) : caseData?.data.map((element) => (
                <div>
                    <CaseContainerHome id={element} name={element.name} description={element.description} place={element.place} image={element.image} time={element.
                        createdAt} />
                </div>

            ))}
        </div>
    );
}