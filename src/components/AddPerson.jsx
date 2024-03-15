import "../css/componentsCss/AddPerson.css"

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';


export default function AddPerson() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [image, setImage] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImage(URL.createObjectURL(file));
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop,
    });

    return (
        <div className="AddPersonOuter">
        <form className="AddPersonForm">
            <div className="PersonContainer">
                <div  className="PersonWriteContainer">
                <label>
                        <div className="PersonFormInputTitle">Enter Full Name </div>
                        <input
                            required
                            type="text"
                            name="PersonName"
                            placeholder="Enter full name"
                        // value={PersonName}
                        // onChange={handleOnChange}
                        />
                    </label>

                    <label>
                        <div className="PersonFormInputTitle">Enter occupation / role</div>
                        <input
                            required
                            type="text"
                            name="PersonOccupation"
                            placeholder="Enter occupation/role"
                        // value={ClueDescription}
                        // onChange={handleOnChange}
                        />
                    </label>

                    <label>
                        <div className="PersonFormInputTitle">Enter Details of Interaction</div>
                        <textarea
                            className="PersonDescriptionBox"
                            name="PersonDescription"
                            placeholder="Enter case description">
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
            </div>
                    <button type="submit">Submit</button>
        </form>
        </div>
    );
};