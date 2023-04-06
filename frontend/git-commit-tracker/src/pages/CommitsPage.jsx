import React, { useEffect, useState } from "react";
import { List } from "../shared/list/List";
import axios from 'axios';

const CommitsPage = () => {
    
    const url = 'http://localhost:3006/';
    const [commits, setCommits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCommits = async () => {
        try {
            const res = await axios.get(url);
            const data = res?.data;
            const commits = data;
            setCommits(commits);
            setIsLoading(false);
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    useEffect(()=> {
        getCommits();
    }, [])

    return(<>
        <h1> Commit list </h1>
       { isLoading ? <div> Loading commits... </div> : <List commits={commits}></List> }
        </>)
}

export default CommitsPage;