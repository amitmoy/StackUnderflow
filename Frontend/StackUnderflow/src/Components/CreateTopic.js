import { useState } from "react";

export default function CreateTopic(){
    const [topicValues, setTopicValues] = useState({
        title: "",
        content: "",
        tags: []
    });

    function submit(event){
        event.preventDefault();
        console.log(topicValues)
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

    return(
        <div className="createTopic--main-div">
                <div>
                    <h2 className="createTopic--header">Ask a question</h2>
                </div>
            <div className="createTopic--form-div">


                <form className="createTopic--grid-container">
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
                    <input 
                    name="tags" 
                    type="text" 
                    className="createTopic--grid-item-2 createTopic--tags"
                    value={topicValues.tags}
                    onChange={handleFormsChanges}
                    />

                    <button 
                    name="submit" 
                    className="createTopic--submit"
                    onClick={submit}>Submit</button>
                </form>
            </div>
        </div>
    );
}