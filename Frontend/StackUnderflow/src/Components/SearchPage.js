import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Topic from "./Topic"
import API from "../api";

export default function SearchPage(){
    const {searchKey} = useParams();
    const [topics, setTopics] = useState([]);

    function updateTopic(updatedTopic){
        setTopics((prevTopics) => {
            return prevTopics.map(t => t.id === updatedTopic.id? updatedTopic: t)
        })
    }

    function mapTopicsFromServer(topicsFromServer){
        const topics = topicsFromServer.map(t =>
            ({
                ...t,
                answers: 3
            })
        )

        setTopics(topics)
    }

    useEffect(() => {
        async function getRequest(){
            await API.get('api/v1/topic/search/'+searchKey)
            .then(res => mapTopicsFromServer(res.data))
            .catch(err => console.log('error when fetching topics: ' + err));
         }

         getRequest();
    }, [searchKey]);

    return(
        <div>
            { topics.map(e => <Topic topic={e} key={e.id} updateTopic={updateTopic} />)}
        </div>
    );
}