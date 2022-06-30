import { useState } from "react";
import Header from "./Components/Header";
import Topic from "./Components/Topic";
import { topicsData } from "./exampleTopicsData";



export default function Page(){
    const [topics, setTopics] = useState(topicsData)

    function updateTopic(updatedTopic){
        console.log('clicked')
        setTopics((prevTopics) => {
            return prevTopics.map(t => t.id === updatedTopic.id? updatedTopic: t)
        })
    }

    return (
        <div>
            <Header/>
            {topics.map(e => <Topic topic={e} key={e.id} updateTopic={updateTopic} />)}
        </div>
    );
}