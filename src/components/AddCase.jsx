import "../css/componentsCss/AddCase.css"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { newCase } from "../services/caseApi";

export default function AddCase() {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState('');
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        place: "",
    });

    const { name, description, place } = formData;

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
        formData.append("name", name);
        formData.append("description", description);
        formData.append("place", place);
        formData.append("displayFile", file);
        console.log(formData);
        console.log(file);

        dispatch(newCase(formData, token, navigate));

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
                            <div className="CaseFormInputTitle">Enter Case Name *</div>
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Enter case name"
                                value={name}
                                onChange={handleOnChange}
                            />
                        </label>

                        <label>
                            <div className="CaseFormInputTitle">Enter Case Description *</div>

                            <textarea
                                className="CaseDescriptionBox"
                                name="description"
                                placeholder="Enter case description"
                                value={description}
                                onChange={handleOnChange}
                            >
                            </textarea>

                            {/* </div> */}
                        </label>
                        <label>
                            <div className="CaseFormInputTitle">Enter Place *</div>

                            <input
                                required
                                type="text"
                                name="place"
                                placeholder="Enter place of incident"
                                value={place}
                                onChange={handleOnChange}
                            />

                            {/* </div> */}
                        </label>
                    </div>


                    <div id="CaseUploadContainer">
                        <label className="CaseFormInputTitle">Upload Image:</label>
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
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};