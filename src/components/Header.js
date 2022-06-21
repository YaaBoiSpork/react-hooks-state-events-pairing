import React from "react";

function Header({ video }) {
    return (
        <>
            <iframe
            width="919"
            height="525"
            src={ video.embedUrl }
            frameBorder="0"
            allowFullScreen
            title={ video.title }
            />
            <h1>{ video.title }</h1>
            <p>{ video.views } views | Uploaded { video.createdAt }</p>
        </>
    )
}

export default Header