import React, { useState } from "react";
import Header from "./Header.js";
import Button from "./Button.js";
import CommentList from "./CommentList.js";
import video from "../data/video.js";

function App() {
  const [upvotes, setUpvotes] = useState(9210)
  const [downvotes, setDownvotes] = useState(185)

  function handleUpvotes() {
    setUpvotes(upvotes => upvotes + 1)
  }

  function handleDownvotes() {
    setDownvotes(downvotes => downvotes + 1)
  }


  return (
    <div className="App">
      <Header video={ video }/>
      <Button text={ upvotes } emoji="👍" onHandleVotes={handleUpvotes}/>
      <Button text={ downvotes } emoji="👎" onHandleVotes={handleDownvotes}/>
      <CommentList video={video}/>
    </div>
  );
}

export default App;