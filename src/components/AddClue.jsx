import "../css/componentsCss/AddClue.css"

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';


export default function AddClue() {
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
        <div className="AddClueOuter">
        <form>
            <div className="container">
                    <label>
                        <div className="Title">Enter Clue</div>
                        <input
                            required
                            type="text"
                            name="ClueName"
                            placeholder="Enter clue"
                        // value={ClueName}
                        // onChange={handleOnChange}
                        />
                    </label>

                    <label>
                        <div className="Title">Enter Clue Description</div>
                        <input
                            required
                            type="text"
                            name="ClueDescription"
                            placeholder="Enter clue description"
                        // value={ClueDescription}
                        // onChange={handleOnChange}
                        />
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
