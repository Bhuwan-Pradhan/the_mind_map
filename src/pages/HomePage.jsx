import NavBar from "../components/NavBar";
import React, { useEffect, useState } from "react";
import CaseContainerHome from "../components/CaseContainerHome"
import { useSelector } from "react-redux";
import { getUserCase } from "../services/caseApi";


export default function HomePage() {
    const { token } = useSelector((state) => state.auth);
    const [caseData, setCaseData] = useState();
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
    }, []);
    return (
        <div>
            <NavBar />
            <div className="AddCaseBtnCntr">
                <a href="/addCase" className="addCase" >Add Case</a>
            </div>
            {caseData?.data.map((element) => (
                <CaseContainerHome id={element} name={element.name} description={element.description} place={element.place} image={element.image} time={element.
                    createdAt} />
            ))}
        </div>
    );
}