import React from "react";
import { jobExperiences } from "./constants";


const ProfessionalExperience = () => {
    return (
        <>
        <h2>Some professional experiences:</h2>
        {jobExperiences.map((job, index) => (
            <p key={index}>
                {job.company} - {job.title} from {job.duration}
            </p>
        ))}
        </>
    )
}

export default ProfessionalExperience 
