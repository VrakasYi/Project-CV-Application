import React, {useState} from "react";
import '../styles/input-div.css'

export default function practicalExp({ practicalExp, setPracticalExp }) {
    const [isEditing, setIsEditing] = useState(true);
    const [newExp, setNewExp] = useState({ company: "", position: "", tenure: ""});

    function handleChange(e) {
        const { name, value } = e.target;
        setNewExp( {...newExp, [name]: value} );
    };

    function handleEdit() {
        setIsEditing(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setPracticalExp([...practicalExp, newExp]);
        setNewExp({ company: "", position: "", tenure: ""});
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
                        value={newExp.company}
                        onChange={handleChange}
                        // placeholder="Company name"
                    />
                    </div>
                    <div className="input-div">
                    Position
                    <input
                        type="text"
                        name="position"
                        value={newExp.position}
                        onChange={handleChange}
                        // placeholder="Position"
                    />
                    </div>
                    <div className="input-div">
                    Duration
                    <input
                        type="text"
                        name="tenure"
                        value={newExp.tenure}
                        onChange={handleChange}
                        // placeholder="Duration"
                    />
                    </div>
                    <button type="submit">Submit experience</button>
                </form>
                
            ) : (
                <div>
                    {practicalExp.map((exp, index) => {
                        <div key={index} className="submittedPracticalExP">
                            <p>Company: {exp.company}</p>
                            <p>Posituion: {exp.position}</p>
                            <p>Duration: {exp.tenure}</p>
                            <button onClick={handleEdit(index)}>Edit</button>
                            <button onclick={handleDelete(index)}>Delete</button>
                        </div> 
                    })}
                        <button onClick={handleMoreExp}>Add more experience</button>
                </div>
            )}
        </div>
    );
};