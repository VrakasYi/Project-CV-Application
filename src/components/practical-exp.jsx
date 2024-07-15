import React, {useState} from "react";

export default function practicalExp({ practicalExp, setPracticalExp }) {
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
        const { name, value} = e.target;
        setPracticalExp( {...practicalExp, [name]: value} );
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
                    <input
                        type="text"
                        name="company"
                        value={practicalExp.company}
                        onChange={handleChange}
                        placeholder="Company name"
                    />
                    <input
                        type="text"
                        name="position"
                        value={practicalExp.position}
                        onChange={handleChange}
                        placeholder="Position"
                    />
                    <input
                        type="text"
                        name="tenure"
                        value={practicalExp.tenure}
                        onChange={handleChange}
                        placeholder="Duration"
                    />
                    <button type="submit"></button>
                </form>
                
            ) : (
                <div className="submittedPracticalExP">
                    <p>Company: {practicalExp.company}</p>
                    <p>Posituion: {practicalExp.position}</p>
                    <p>Duration: {practicalExp.tenure}</p>
                    <button onClick={handleEdit}></button>
                </div> 
            )};
        </div>
    );
};