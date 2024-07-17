import React, {useState} from "react";
import '../styles/input-div.css'

export default function practicalExp({ practicalExp, setPracticalExp }) {
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
        const { name, value } = e.target;
        setPracticalExp( {...practicalExp, [name]: value} );
    };

    function handleEdit() {
        setIsEditing(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    };

    function handleMoreExp() {
        
    };

    return (
        <div className="educational-inputs">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div className="input-div">
                    Company
                    <input
                        type="text"
                        name="company"
                        value={practicalExp.company}
                        onChange={handleChange}
                        // placeholder="Company name"
                    />
                    </div>
                    <div className="input-div">
                    Position
                    <input
                        type="text"
                        name="position"
                        value={practicalExp.position}
                        onChange={handleChange}
                        // placeholder="Position"
                    />
                    </div>
                    <div className="input-div">
                    Duration
                    <input
                        type="text"
                        name="tenure"
                        value={practicalExp.tenure}
                        onChange={handleChange}
                        // placeholder="Duration"
                    />
                    </div>
                    <button type="submit">Submit experience</button>
                </form>
                
            ) : (
                <div className="submittedPracticalExP">
                    <p>Company: {practicalExp.company}</p>
                    <p>Posituion: {practicalExp.position}</p>
                    <p>Duration: {practicalExp.tenure}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleMoreExp}>Add more experience</button>
                </div> 
            )}
        </div>
    );
};