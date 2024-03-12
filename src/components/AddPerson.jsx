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
        <form>
            <div className="container">
                    <label>
                        <div className="Title">Enter Full Name </div>
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
                        <div className="Title">Enter occupation / role</div>
                        <input
                            required
                            type="text"
                            name="ClueDescription"
                            placeholder="Enter occupation/role"
                        // value={ClueDescription}
                        // onChange={handleOnChange}
                        />
                    </label>

                    <label>
                        <div className="Title">Enter Details of Interaction</div>
                        <input
                            required
                            type="text"
                            name="PersonDescription"
                            placeholder="Enter Details"
                        // value={ClueDescription}
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
