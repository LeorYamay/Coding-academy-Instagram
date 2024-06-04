import { store } from "../store/store";

import { useState } from "react";
import { EmojiSVG } from "./Svglist";
import { userService } from "../services/user.service.local";
import { utilService } from "../services/util.service";
import {  updateStory } from "../store/story.actions";
// import { ADD_COMMENT_TO_STORY } from '../store/story.reducer'

export function AddComment({ loggedInUser, story }) {
  const [commentTxt, setCommentTxt] = useState("");
  const handleInputChange = (event) => {
    setCommentTxt(event.target.value);
  };
  const emojis = ["😊", "😄", "😍", "😎", "🤩"];
  const addEmojiToComment = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setCommentTxt((prevComment) => prevComment + randomEmoji);
  };

  const postComment = () => {
    // store.dispatch({type:ADD_COMMENT_TO_STORY,storyId:storyId,txt:comment,loggedInUserId:loggedInUserId})
    const comment = {
      _id: utilService.makeId(),
      txt: commentTxt,
      by: userService.getMiniUser(loggedInUser),
      likedBy: [],
      createdAt: Date.now(),
    };
    story.comments.push(comment);
    updateStory(story);
    setCommentTxt("");
  };
  return (
    <div className="story-add-comment">
      <input
        type="text"
        className="add-comment-input"
        placeholder="Add a comment..."
        value={commentTxt}
        onChange={handleInputChange}
      />
      <div className="story-comment-buttons">
        {commentTxt && (
          <button className="post-button" onClick={() => postComment()}>
            Post
          </button>
        )}
        <div className="story-emoji-button" onClick={addEmojiToComment}>
          <EmojiSVG label="emoji" type="story-comment-emoji" />
        </div>
      </div>
    </div>
  );
}
