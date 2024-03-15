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
        <form className="AddClueForm">
            <div className="ClueContainer">
                <div className="ClueWriteContainer">
                    <label>
                        <div className="ClueFormInputTitle">Enter Clue</div>
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
                        <div className="ClueFormInputTitle">Enter Clue Description</div>
                        <textarea
                            className="ClueDescriptionBox"
                            name="ClueDescription"
                            placeholder="Enter clue description">
                        </textarea>
                    </label>

                    <label>
                        <div className="ClueFormInputTitle">Category</div>
                        <select>
                            <option value="PhysicalEvidence">Physical Evidence</option>
                            <option value="WitnessStatment">Witness Statment</option>
                            <option value="SurveillanceFootage">Surveillance Footage</option>
                            <option value="ForensicAnalysis">Forensic Analysis</option>
                            <option value="Observation">Observation</option>
                        </select>
                    </label>
                </div>    
                    <div id="ClueUploadContainer">
                        <label className="ClueFormInputTitle">Upload Image:</label>
                        <div {...getRootProps()} id="ClueDropzone">
                            <input {...getInputProps()} />
                            <p>Drag & drop an image here, or click to select one</p>
                            {image && (
                            <div>
                                <p>Image Preview:</p>
                                <img src={image} alt="Preview" id="ClueImgPreview" />
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