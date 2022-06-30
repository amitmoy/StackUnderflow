export default function Likes(props){
    return(
        <div className="likes">
            <div className="like">
                <button className="likes--button" 
                onClick={props.onLikeClick}>{`${props.likes.length} likes`}</button>
            </div>
            <div className="dislike">
                <button className="likes--button"
                onClick={props.onDislikeClick}>{`${props.dislikes.length} dislikes`}</button>
            </div>
        </div>
    );
}