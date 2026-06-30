import React from "react";
import { useState, useEffect } from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import JobPostCardCard from "./JobPostCard";

//425c87a5

// const MOVIE_API_URL = 'http://www.omdbapi.com?apikey=425c87a5';

const url = 'http://localhost:8080/posts';


const App = () => {

    const [posts, setPosts] = useState([]);
    const [searchJobs, setSearchJobs] = useState('');

    const fetchAllJobs = async (searchJobText) => {
        const response = await fetch(`${url}/${searchJobText}`)
        const data = await response.json();
        setPosts(data);
        console.log(data);
    }
    useEffect(() => {
        fetchAllJobs('');
    }, []);
    return (
        <div className="app">
            <h1>Job Listing App</h1>

            <div className="search">
                <input placeholder="Search a job" 
                value={searchJobs}
                onChange={(event) => {
                    setSearchJobs(event.target.value);
                    fetchAllJobs(event.target.value);
                }} />
                <img src={SearchIcon} 
                alt="Search"
                onClick={() => fetchAllJobs(searchJobs)} />
            </div>

            {
                posts.length > 0 ? (
                <div className="container">
                    {posts.map(post => {
                        return <JobPostCardCard job={post} />
                    })}
                </div>
                ) : (
                    <div className="empty">
                        <h3>No Jobs Found</h3>
                    </div> 
                )     
                
            }
            

        </div>
    );
}

export default App;