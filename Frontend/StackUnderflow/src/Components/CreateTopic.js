import { useRef, useState } from "react";
import API from "../api";
import TagInput from "./TagInput";
import { useNavigate } from "react-router-dom"
import { createTopic } from "../Services/TopicService";

export default function CreateTopic(){
    const [topicValues, setTopicValues] = useState({
        title: "",
        content: "",
        tags: []
    });

    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([]);

    function submit(event){
        event.preventDefault();
    }

    function submitClicked(event){
        const contentValue = topicValues.content
        const titleValue = topicValues.title
        setErrors([])
        const newErrors = []

        if(!contentValue.replace(/\s+/g, "")){
            newErrors.push("* Content cannot be empty")
        }

        if(!titleValue.replace(/\s+/g, "")){
            newErrors.push("* Title cannot be empty")
        }

        if(newErrors.length != 0){
            setErrors(newErrors)
            return;
        }

        createTopic(topicValues ,() => navigate('/topics'))
    }


    function handleFormsChanges(event){
        let formName = event.target.name;
        let formValue = event.target.value;

        setTopicValues((prevVal) => {
            return(
                {
                    ...prevVal,
                    [formName]: formValue
                }
            );
        });
    }

    function setTagsFunc(newTags){
        setTopicValues((prevVal) => {
            return(
                {
                    ...prevVal,
                    tags: newTags
                }
            );
        });
    }




    return(
        <div className="createTopic--main-div">
                <div>
                    <h2 className="createTopic--header">Ask a question</h2>
                </div>
            <div className="createTopic--form-div">


                <form className="createTopic--grid-container" onSubmit={submit}>
                    <h5 className="createTopic--grid-item-1 createTopic--title-text">
                        Title
                    </h5>
                    <input 
                    name="title"
                    type="text" 
                    className="createTopic--grid-item-2 createTopic--title"
                    value={topicValues.title}
                    onChange={handleFormsChanges}
                    />

                    <h5 
                    className="createTopic--grid-item-1 createTopic--content-text">
                        Content
                    </h5>
                    <textarea 
                    name="content" 
                    type="text" 
                    className="createTopic--grid-item-2 createTopic--content"
                    value={topicValues.content}
                    onChange={handleFormsChanges}
                    />

                    <h5 
                    className="createTopic--grid-item-1 createTopic--tags-text"
                    >Tags</h5>
                    <TagInput tags={topicValues.tags} setTagsFunc={setTagsFunc}/>
                </form>
                
                <button 
                    name="submit" 
                    className="createTopic--submit"
                    onClick={submitClicked}>Submit</button>


                    {errors.map(err => (
                        <p className="createTopic--error">{err}</p>

                    ))}
            </div>
        </div>
    );
}