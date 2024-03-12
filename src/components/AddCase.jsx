import "../css/componentsCss/AddCase.css"

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';


export default function AddCase() {
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
        <div className="AddCaseOuter">
        <form>
            <div className="container">
                    <label>
                        <div className="Title">Enter Case Name *</div>
                        <input
                            required
                            type="text"
                            name="CaseName"
                            placeholder="Enter case name"
                        // value={CaseName}
                        // onChange={handleOnChange}
                        />
                    </label>

                    <label>
                        <div className="Title">Enter Case Description *</div>
                        <input
                            required
                            type="text"
                            name="CaseDescription"
                            placeholder="Enter case description"
                        // value={CaseDescription}
                        // onChange={handleOnChange}
                        />
                    </label>

                    <div id="upload-container">
                        <label>Upload Image:</label>
                        <div {...getRootProps()} id="dropzone">
                            <input {...getInputProps()} />
                            <p>Drag & drop an image here, or click to select one</p>
                        </div>
                        {image && (
                            <div>
                                <p>Image Preview:</p>
                                <img src={image} alt="Preview" id="preview" />
                            </div>
                        )}
                    </div>
                    {/* <button type="submit">Submit</button> */}
            </div>
        </form>
        </div>
    );
};
