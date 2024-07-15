import React, {useState} from "react";
import GeneralInfo from "./general-info";
import EducationalInfo from "./educational-info";
import PracticalExp from "./practical-exp";


export default function CV() {
    const [generalInfo, setGeneralInfo] = useState( { name: "", email: "", phoneNo: "" } );
    const [educationalInfo, setEducationalInfo] = useState( { school: "", grade: "", date: "" } );
    const [practicalExp, setPracticalExp] = useState( { company: "", position: "", responsibilities: "",  tenure: ""} )

    return (
        <div className="cv">
            <h1>CV Generator</h1>
            <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
            <EducationalInfo educationalInfo={educationalInfo} setEducationalInfo={setEducationalInfo} />
            <PracticalExp practicalExp={practicalExp} setPracticalExp={setPracticalExp} />
        </div>
    );
};