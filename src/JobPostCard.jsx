import React from "react";

const JobPostCard = ({job}) => {
    return (
        <div className="jobpost">
            <div>
                <p>Description : {job.desc}</p>
            </div>
            <div>
                <img src={'https://cdn1.vectorstock.com/i/1000x1000/37/10/we-are-hiring-poster-flyer-design-vector-43473710.jpg'} alt={job.profile} />
            </div>
            <div>
                <span>Technologies : {job.techs.join(", ")}</span>
                <h3>Role : {job.profile}</h3>
                <p>Experience : {job.exp}</p>
            </div>
        </div>
    );
};

export default JobPostCard;