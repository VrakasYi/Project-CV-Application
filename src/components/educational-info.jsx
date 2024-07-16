import React, { useState } from "react";
import '../styles/info.css'

export default function EducationalInfo( { educationalInfo, setEducationalInfo } ) {
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
        const { name, value } = e.target;
        setEducationalInfo( {...educationalInfo, [name]: value} );
    };

    function handleEdit() {
        setIsEditing(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="educational-inputs">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div className="input-div">
                    School
                    <input
                        type="text"
                        name="school"
                        value={educationalInfo.school}
                        onChange={handleChange}
                        // placeholder="Name of school attended"
                    />
                    </div>
                    <div className="input-div">
                    Final grade
                    <input
                        type="text" 
                        name="grade"
                        value={educationalInfo.grade}
                        onChange={handleChange}
                        // placeholder="Grade achieved"
                    />
                    </div>
                    <div className="input-div">
                    Year of graduation
                    <input
                        typeof="date"
                        name="date"
                        value={educationalInfo.date}
                        onChange={handleChange}
                        // placeholder="Date"
                    />
                    </div>
                    <button type="submit">Submit education</button>    
                </form>
            ) : (
                <div className="submittedEducationalInfo">
                    <p>School: {educationalInfo.school}</p>
                    <p>Grade: {educationalInfo.grade}</p>
                    <p>Date of graduation: {educationalInfo.date}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
};