import React, { useState} from "react";
import '../styles/information.css'

export default function GeneralInfo( { generalInfo, setGeneralInfo }) {
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
        const { name, value } = e.target;
        setGeneralInfo( {...generalInfo, [name]: value} );
    };

    function handleEdit() {
        setIsEditing(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    return (
        <div className="general-inputs">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div className="input-div">
                    Name
                    <input 
                        type="text"
                        name="name"
                        value={generalInfo.name}
                        onChange={handleChange}
                        // placeholder="Full Name"
                        required
                    />
                    </div>
                    <div className="input-div">
                    Email
                    <input
                        type="email"
                        name="email"
                        value={generalInfo.email}
                        onChange={handleChange}
                        // placeholder="Email"
                        required
                    />
                    </div>
                    <div className="input-div">
                    Phone number
                    <input
                        type="tel"
                        name="phoneNo"
                        value={generalInfo.phoneNo}
                        onChange={handleChange}
                        // palceholder="12345678"
                    />
                    </div>
                    <button type="submit">Submit information</button>
                </form>
            ) : (
                <div className="submittedInfo">
                    <p>Name: {generalInfo.name}</p>
                    <p>Email: {generalInfo.email}</p>
                    <p>Phone no: {generalInfo.phoneNo}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
};