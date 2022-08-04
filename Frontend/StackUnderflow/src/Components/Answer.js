export default function Answer(props){
    const { answer, onApproveClick } = props; 
    


    return(
        <div className="answer">
            <p className="answer-content">{answer.content + "saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\nsadddddddfdsgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggdddd\nsadsadsadsa"}</p>
            <div className="answer-approve-button">
                <button onClick={onApproveClick}>TESTST</button>
                <p>{answer.approves.length}</p>
            </div>
        </div>
    );
}