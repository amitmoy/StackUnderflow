export default function AnswerCount(props){
    const count = props.answers
    return(
        <div className="answer-counter">
            <p className="answer--text">{`${count} answers`}</p>
        </div>
    );
}