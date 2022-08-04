import { useState } from "react";
import Tag from './Tag'

export default function TagInput(props){
    const {tags, setTagsFunc } = props;

    function handleKeyDown(event){
        const key = event.key;
        if(key !== 'Enter' && key !== 'Backspace') return

        const value = event.target.value

        if(key === 'Enter'){
            if(!value.trim() || tags.includes(value)) return
            setTagsFunc([...tags, value])
            event.target.value = ''
        } else {
            if(!value.trim()){
                setTagsFunc(tags.slice(0,-1))
            }
        }     
    }

    return(
        <div className="tagInput--main-div">
            <div className="tagInput--tags">
                { tags.map((tag) => (
                    <div className="tagInput--tag-div">
                        <Tag tag={tag}></Tag>
                    </div>
                ))}
            
            </div>

            <input type="text" onKeyDown={handleKeyDown} className="tagInput--input" placeholder="Enter tags..."></input>
        </div>

    );
}