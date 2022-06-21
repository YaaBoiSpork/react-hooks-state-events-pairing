import React, { useState}from "react";
import Button from "./Button";
import Comment from "./Comment";

function CommentList ({ video:{comments} }) {
    const [showComments, setShowComments] = useState(true)

    function handleHideComments() {
        setShowComments(showComments => !showComments)
    }
    
    return(
        <div>
            <Button onHideComments={handleHideComments} text={ showComments ? "Hide Comments" : "Show Comments"}/>
            {showComments && <div>
                <h2>{ comments.length } Comments</h2>
                 {comments.map(comment => 
                    <Comment key={comment.id} user={comment.user} comment={comment.comment}/>)}
            </div>}
        </div>
    )
}

export default CommentList