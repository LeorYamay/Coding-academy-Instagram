import React from "react";
import { CommentCmp } from "./Comment.jsx";
import { useNavigate } from "react-router";
import { Tag, Tags } from "./Tag.jsx";

export function CommentSection({ storyText, storyBy, comments, tags }) {
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
        <span className="comment-text">
          {" "}
          {storyText + "\n"}
          {<Tags tags={tags} />}{" "}
        </span>
      </div>
      {comments &&
        comments.map((comment) => (
          <CommentCmp key={comment._id} comment={comment} />
        ))}
    </div>
  );
}
