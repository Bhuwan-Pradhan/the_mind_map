import "../css/componentsCss/AddCase.css"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { newClue } from "../services/caseApi";

export default function AddClue(props) {
    const location = useLocation();
    const { id } = location.state;
    const [image, setImage] = useState(null);
    const { token } = useSelector((state) => state.auth);
    const [file, setFile] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
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
        formData.append("caseId", id._id);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("displayFile", file);
        console.log(formData);
        console.log(file);

        dispatch(newClue(id,formData, token, navigate));

        //Reset
        setFormData({
            name: "",
            description: "",
            category: "",
        });
    };

    return (
        <div className="AddCaseOuter">
            <form onSubmit={handleOnSubmit}>
                <div className="container">
                    <div className="writecontainer">
                        <label>
                            <div className="Title">Enter Clue Name *</div>
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Enter clue name"
                                value={name}
                                onChange={handleOnChange}
                            />
                        </label>

                    <label>
                        <div className="Title">Enter Clue Description</div>
                        <textarea
                            className="ClueDescriptionBox"
                            name="CaseDescription"
                            placeholder="Enter case description">
                        </textarea>
                    </label>

                    <label>
                        <div className="Title">Category</div>
                        <select>
                            <option value="PhysicalEvidence">Physical Evidence</option>
                            <option value="WitnessStatment">Witness Statment</option>
                            <option value="SurveillanceFootage">Surveillance Footage</option>
                            <option value="ForensicAnalysis">Forensic Analysis</option>
                            <option value="Observation">Observation</option>
                        </select>
                    </label>
                </div>    
                    <div id="upload-container">
                        <label className="Title">Upload Image:</label>
                        <div {...getRootProps()} id="dropzone">
                            <input {...getInputProps()} />
                            <p>Drag & drop an image here, or click to select one</p>
                            {image && (
                            <div>
                                <p>Image Preview:</p>
                                <img src={image} alt="Preview" id="preview" />
                            </div>
                        )}
                        </div>
                        
                    </div>
            <button type="submit">Submit</button>
            </div>
        </form>
        </div>
    );
};