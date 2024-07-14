import React, { useState} from "react";

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

                    <input 
                        type="text"
                        name="name"
                        value={generalInfo.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={generalInfo.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="tel"
                        name="phoneNo"
                        value={generalInfo.phoneNo}
                        onChange={handleChange}
                        palceholder="Phone number"
                    />
                    <button type="submit">Submit information</button>
                </form>
            ) : (
                <div className="submittedGeneralInfo">
                    <p>Name: {generalInfo.name}</p>
                    <p>Email: {generalInfo.email}</p>
                    <p>Phone no: {generalInfo.phoneNo}</p>
                    <button onClick={handleEdit}></button>
                </div>
            )};
        </div>
    );
};