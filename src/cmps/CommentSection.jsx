import React from "react";
import { CommentCmp } from "./Comment.jsx";
import { useNavigate } from "react-router";

export function CommentSection({ storyText, storyBy, comments }) {
  const navigate = useNavigate();
  return (
    <div className="comment-section">
      <div className="comment story-text">
        <div className="square-container">
          <div className="circle-container">
            <img
              src={storyBy.imgUrl}
              alt="User"
              className="user-img circle-image"
              onClick={() => navigate("/" + storyBy.username)}
            />
          </div>
        </div>
        <span
          className="username"
          onClick={() => navigate("/" + storyBy.username)}
        >
          {storyBy.fullname}{" "}
        </span>
        <span className="comment-text"> {storyText} </span>
      </div>
      {comments.map((comment) => (
        <CommentCmp key={comment._id} comment={comment} />
      ))}
    </div>
  );
}
