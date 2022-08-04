import { useEffect, useState } from "react";
import Topic from "./Topic";
import { useParams } from "react-router-dom";
import API from "../api";
import Answer from "./Answer";
import { approveAnswer, disapproveAnswer, getTopic } from "../Services/TopicService";

export default function TopicPage(){
    const { topicId } = useParams();
    const [ topic, setTopic ] = useState({answers:[], tags:[], likes:[], dislikes:[]});

    const fetchTopic = () => getTopic(topicId, res => setTopic(res.data))

    useEffect(() => {
         fetchTopic();
    }, [topicId]);

    function onApproveClick(id){
        let newAnswer = topic.answers.find(ans => ans.id === id);
        const index = newAnswer.approves.indexOf('test');

        if(index !== -1){
            disapprove(id, 'test')  
        } else {
            approve(id, 'test')
        }
    }

    async function approve(id, user){
        const approveData = {
            answerId: id,
            userName: user
        }
        approveAnswer(approveData, () => fetchTopic())
    }

    async function disapprove(id, user){
        const disapproveData = {
            answerId: id,
            userName: user
        }
        disapproveAnswer(disapproveData, () => fetchTopic())
    }

    

    return(
        <div className="topic-page--div">
            <Topic topic = {topic}/>
            {topic.answers.map(e => <Answer answer={e} onApproveClick={() => onApproveClick(e.id)} key={e.id}/>)}

        </div>
    );
}