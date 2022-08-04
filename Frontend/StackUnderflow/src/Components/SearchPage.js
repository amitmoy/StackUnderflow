import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Topic from "./Topic"
import API from "../api";
import { getTopicsBySearch } from "../Services/TopicService";

export default function SearchPage(){
    const {searchKey} = useParams();
    const [topics, setTopics] = useState([]);

    function updateTopic(updatedTopic){
        setTopics((prevTopics) => {
            return prevTopics.map(t => t.id === updatedTopic.id? updatedTopic: t)
        })
    }

    useEffect(() => {
        getTopicsBySearch(searchKey, (res) => setTopics(res.data))
    }, [searchKey]);

    return(
        <div>
            { topics.map(e => <Topic topic={e} key={e.id} updateTopic={updateTopic} />)}
        </div>
    );
}