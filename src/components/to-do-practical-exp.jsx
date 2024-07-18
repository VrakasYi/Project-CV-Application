import React, {useState} from "react";
import '../styles/input-div.css';

export default function PracticalExp({ practicalExp, setPracticalExp }) {
    const [isEditing, setIsEditing] = useState(true);
    const [currentExp, setCurrentExp] = useState({ company: "", position: "", tenure: "" });

    function handleChange(e) {
        const { name, value } = e.target;
        setCurrentExp({ ...currentExp, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setPracticalExp([...practicalExp, currentExp]);
        setCurrentExp({ company: "", position: "", tenure: "" });
        setIsEditing(false);
    }

    function handleEdit(index) {
        setCurrentExp(practicalExp[index]);
        setIsEditing(true);
    }

    function handleDelete(index) {
        setPracticalExp(practicalExp.filter((_, i) => i !== index));
    }

    function handleAddMore() {
        setIsEditing(true);
        setCurrentExp({ company: "", position: "", tenure: "" });
    }

    return (
        <div className="practical-experience-inputs">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div className="input-div">
                        Company
                        <input
                            type="text"
                            name="company"
                            value={currentExp.company}
                            onChange={handleChange}
                            placeholder="Company name"
                        />
                    </div>
                    <div className="input-div">
                        Position
                        <input
                            type="text"
                            name="position"
                            value={currentExp.position}
                            onChange={handleChange}
                            placeholder="Position"
                        />
                    </div>
                    <div className="input-div">
                        Duration
                        <input
                            type="text"
                            name="tenure"
                            value={currentExp.tenure}
                            onChange={handleChange}
                            placeholder="Duration"
                        />
                    </div>
                    <button type="submit">Submit Experience</button>
                </form>
            ) : (
                <div>
                    {practicalExp.map((exp, index) => (
                        <div key={index} className="submittedPracticalExp">
                            <p>Company: {exp.company}</p>
                            <p>Position: {exp.position}</p>
                            <p>Duration: {exp.tenure}</p>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    ))}
                    <button onClick={handleAddMore}>Add More Experience</button>
                </div>
            )}
        </div>
    );
}
