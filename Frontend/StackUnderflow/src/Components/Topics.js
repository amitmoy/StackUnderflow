import { topicsData } from "../exampleTopicsData";
import { useEffect, useState } from "react";
import Topic from "./Topic"
import API from "../api";
import { useNavigate } from "react-router-dom";
import { getAllTopics } from "../Services/TopicService";

export default function Topics(){
    const [topics, setTopics] = useState([])
    const navigate = useNavigate();

    function updateTopic(updatedTopic){
        setTopics((prevTopics) => {
            return prevTopics.map(t => t.id === updatedTopic.id? updatedTopic: t)
        })
    }
    
    useEffect(() => {
        getAllTopics(res => setTopics(res.data));
    }, []);

    function goToTopicPage(id) {
        navigate('/topic/'+id);
    } 

    return(
        <div className="topics--div">
            <div>
                <h2 className="topics--header">Questions</h2>
            </div>

            {topics.map(e => <Topic 
            topic={e} 
            key={e.id} 
            updateTopic={updateTopic}
            onClickAction={() => goToTopicPage(e.id)} />)}
        </div>
    );
}