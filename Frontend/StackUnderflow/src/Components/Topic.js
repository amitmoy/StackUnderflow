import AnswerCount from "./AnswerCounter";
import Tag from "./Tag"
import Likes from "./Likes"

export default function Topic(props){
    //console.log(props.topic)
    const {title, content, date, answers, likes, dislikes, tags} = props.topic
    const updateTopic = props.updateTopic
    const onClickAction = props.onClickAction;

    let clickableClass = "";
    let onClickToSet;

    if(typeof onClickAction == 'undefined'){
        onClickToSet = () => {}
    } else {
        onClickToSet = onClickAction;
        clickableClass = " clickable"
    }


    function likeTopic(){
        updateTopic(
            {...props.topic,
                likes: [...likes, "new"]
            }
        )
    }

    function dislikeTopic(){
        updateTopic(
            {...props.topic,
                dislikes: [...dislikes, "new"]
            }
        )
    }

    return(
        <div className="topic">
            <div className={"topic--header " + clickableClass} onClick={onClickToSet}>
                <div className="topic--header--left">
                    <h2 className="topic--title">{title}</h2>
                    <p className="topic--date">{`${new Date(date).toString()}`}</p>
                </div>
                <div className="topic--header--right">
                    <AnswerCount answers={answers.length}/>
                </div>
            </div>
            <div className="topic--content">
                <p className="topic--content--text">{content}</p>
            </div>
            <div className="topic--bottom">
                <div className="topic--tags">
                    {tags.map(t => <Tag tag={t} key={t}/>)}
                </div>
                <div className="topic--likes">
                    <Likes 
                    likes={likes} 
                    onLikeClick={likeTopic} 
                    dislikes={dislikes}
                    onDislikeClick={dislikeTopic}/>
                </div>
            </div>
        </div>
    );
}