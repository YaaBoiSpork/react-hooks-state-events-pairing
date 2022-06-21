import React from "react";

function Button({ text, emoji, onHideComments, onHandleVotes }) {
    return(
        <button className={ text } onClick={ onHideComments || onHandleVotes }>{ text } { emoji }</button>
    )
}

export default Button