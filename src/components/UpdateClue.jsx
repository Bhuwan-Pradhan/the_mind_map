import "../css/componentsCss/AddCase.css"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateClue } from "../services/caseApi";

export default function UpdateClue() {
    
    const location = useLocation();
    const {caseId, id, uName, uCategory, uImage, uDescription } = location.state;
    const [image, setImage] = useState(uImage);
    const [file, setFile] = useState('');
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: uName,
        description: uDescription,
        category: uCategory,
    });

    const { name, description, category } = formData;

    // Handle input fields, when some value changes
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const onDrop = (acceptedFiles) => {
        const tempFile = acceptedFiles[0];
        setFile(tempFile);
        setImage(URL.createObjectURL(tempFile));
    };


    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop,
    });

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("clueId", id._id);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("displayFile", file);

        dispatch(updateClue(caseId,formData, token, navigate));

        //Reset
        setFormData({
            name: "",
            description: "",
            place: "",
        });
    };

    return (
        <div className="AddCaseOuter">
            <form className="AddCaseForm" onSubmit={handleOnSubmit}>
                <div className="CaseContainer">
                    <div className="CaseWriteContainer">
                        <label>
                            <div className="CaseFormInputTitle">Update Case Name *</div>
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Enter updated name"
                                value={name}
                                onChange={handleOnChange}
                            />
                        </label>

                        <label>
                            <div className="CaseFormInputTitle">Update Case Description *</div>

                            <textarea
                                className="CaseDescriptionBox"
                                name="description"
                                placeholder="Enter updated description"
                                value={description}
                                onChange={handleOnChange}
                            >
                            </textarea>

                            {/* </div> */}
                        </label>
                        <label>
                            <div className="ClueFormInputTitle">Select Category</div>
                            <select name="category" value={category} onChange={handleOnChange}>
                                <option value="Select">Select</option>
                                <option value="PhysicalEvidence">Physical Evidence</option>
                                <option value="WitnessStatment">Witness Statment</option>
                                <option value="SurveillanceFootage">Surveillance Footage</option>
                                <option value="ForensicAnalysis">Forensic Analysis</option>
                                <option value="Observation">Observation</option>
                            </select>
                        </label>
                    </div>


                    <div id="CaseUploadContainer">
                        <label className="CaseFormInputTitle">Update Image:</label>
                        <div {...getRootProps()} id="CaseDropzone">
                            <input {...getInputProps()} />
                            <p>Drag & drop an image here, or click to select one</p>
                            {image && (
                                <div>
                                    <p>Image Preview:</p>
                                    <img src={image} alt="Preview" id="CaseImgPreview" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="CaseContainerButton">
                        <button type="submit">Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
};