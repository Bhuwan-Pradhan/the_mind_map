import "../css/componentsCss/AddPerson.css"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { newPerson } from "../services/caseApi";

export default function AddPerson(props) {
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

        dispatch(newPerson(id, formData, token, navigate));

        //Reset
        setFormData({
            name: "",
            description: "",
            profession: "",
        });
    };

    return (
        <div className="AddPersonOuter">
            <form onSubmit={handleOnSubmit}>
                <div className="PersonContainer">
                    <div className="PersonWriteContainer">
                        <label>
                            <div className="PersonFormInputTitle">Enter Clue Name *</div>
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Enter name of Person"
                                value={name}
                                onChange={handleOnChange}
                            />
                        </label>

                        <label>
                            <div className="PersonFormInputTitle">Enter occupation / role</div>
                            <input
                                required
                                type="text"
                                name="profession"
                                placeholder="Enter occupation/role"
                                value={profession}
                                onChange={handleOnChange}
                            />
                        </label>

                        <label>
                            <div className="PersonFormInputTitle">Enter Details of Interaction</div>
                            <textarea
                                className="CaseDescriptionBox"
                                name="description"
                                placeholder="Enter information gathered"
                                value={description}
                                onChange={handleOnChange}>
                            </textarea>
                        </label>
                    </div>


                    <div id="PersonUploadContainer">
                        <label className="PersonFormInputTitle">Upload Image:</label>
                        <div {...getRootProps()} id="PersonDropzone">
                            <input {...getInputProps()} />
                            <p>Drag & drop an image here, or click to select one</p>
                            {image && (
                                <div>
                                    <p>Image Preview:</p>
                                    <img src={image} alt="Preview" id="PersonImgPreview" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="PersonContainerButton">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};