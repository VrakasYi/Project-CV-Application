import React, {useState} from "react";
import '../styles/information.css'

export default function PracticalExp({ practicalExp, setPracticalExp }) {
    const [isEditing, setIsEditing] = useState(true);
    const [newExp, setNewExp] = useState({ company: "", position: "", tenure: ""});

    function handleChange(e) {
        const { name, value } = e.target;
        setNewExp( {...newExp, [name]: value} );
    };

    function handleEdit(index) {
        setNewExp(practicalExp[index]);
        setIsEditing(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitting new experience:", newExp);  // Debug log

        setPracticalExp([...practicalExp, newExp]);
        // if (isEditing) {
        //     // Update existing experience
        //     const updatedExp = practicalExp.map((exp, index) =>
        //         index === practicalExp.indexOf(newExp) ? newExp : exp
        //     );
        //     setPracticalExp(updatedExp);
        // } else {
        //     // Add new experience
        //     setPracticalExp([...practicalExp, newExp]);
        // }
        setNewExp({ company: "", position: "", tenure: ""});
        setIsEditing(false);
    };

    function handleMoreExp() {
        setIsEditing(true);
    };

    function handleDelete(index) {
        console.log("Deleting experience at index:", index);  // Debug log
        setPracticalExp(practicalExp.filter((_, i) => i !== index));
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
                <div className="subPractical">
                    {practicalExp.map((exp, index) => (
                        <div key={index} className="submittedInfo">
                            <p>Company: {exp.company}</p>
                            <p>Position: {exp.position}</p>
                            <p>Duration: {exp.tenure}</p>
                            <div className="buttons">
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        </div> 
                    ))}
                        <button onClick={handleMoreExp}>Add more experience</button>
                </div>
            )}
        </div>
    );
};