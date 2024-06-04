import { useNavigate } from "react-router";
import { utilService } from "../services/util.service";
import { HeartSvg } from "./Svglist";

export function CommentCmp({ comment }) {
  const navigate = useNavigate();
  return (
    <div className="comment">
      <div className="square-container">
        <div className="circle-container">
          <img
            src={comment.by.imgUrl}
            alt="User"
            className="user-img circle-image"
            onClick={() => navigate("/" + comment.by.username)}
          />
        </div>
      </div>
      <div className="text-container">
        <div className="comment-row">
          <span
            className="username"
            onClick={() => navigate("/" + comment.by.username)}
          >
            {comment.by.username}{" "}
          </span>
          <span className="created-at">
            {utilService.formatDate(comment.createdAt)}
          </span>
        </div>
        <span className="comment-text"> {comment.txt} </span>
      </div>
      {/* {likedBy && likedBy.length > 0 && (
                <div className="likes">
                    <span>{likedBy.length}</span>
                </div>
            )} */}
      <HeartSvg label="like" type="like-button-icon" />
    </div>
  );
}
