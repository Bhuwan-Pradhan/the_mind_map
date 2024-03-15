import "../css/componentsCss/AddCase.css"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { newPerson } from "../services/caseApi";

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
        profession: "",
    });

    const { name, description, profession } = formData;

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
        formData.append("profession", profession);
        formData.append("displayFile", file);
        console.log(formData);
        console.log(file);

        dispatch(newPerson(id,formData, token, navigate));

        //Reset
        setFormData({
            name: "",
            description: "",
            profession: "",
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
                            <div className="Title">Enter Clue Description *</div>

                            <textarea
                                className="CaseDescriptionBox"
                                name="description"
                                placeholder="Enter case description"
                                value={description}
                                onChange={handleOnChange}
                            >
                            </textarea>

                        </label>
                        <label>
                            <div className="Title">Enter Profession *</div>

                            <input
                                required
                                type="text"
                                name="profession"
                                placeholder="Enter  Profession"
                                value={profession}
                                onChange={handleOnChange}
                            />

                        </label>
                    </div>


                    <div id="upload-container">
                        <label>Upload Image:</label>
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