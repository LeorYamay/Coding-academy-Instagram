// import { useParams } from 'react-router-dom'
// import { useState } from 'react'
import { useLocation, useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";

import { demoStoryService } from "../services/demoData/demoStory.service";
import { demoUserService } from "../services/demoData/demoUser.service";
import { userService } from "../services/user.service.local";
import { utilService } from "../services/util.service";

import { CommentCmp } from "./Comment";
import {
  CommentSvg,
  EmojiSVG,
  HeartSvg,
  SaveSvg,
  ShareSvg,
  ThreeDotsSVG,
} from "./Svglist";
import { storyService } from "../services/story.service.local";
import { updateStory } from "../store/story.actions";
import { AddCommentToPreview } from "./AddCommentToPreview";
import { Tag, Tags } from "./Tag";

export function StoryPreview({ story, index }) {
  const navigate = useNavigate();
  const location = useLocation();
  const loggedInUser = useSelector((storeState) => storeState.userModule.user);

  const createdDateFormated = utilService.formatDate(story.createdAt);

  const hasLikes = story.likedBy.length > 0;
  const firstLikedbyUser =
    story.likedBy.length > 0 ? story.likedBy[0].username : "";
  const firstLikedBy = (
    <span
      className="story-liked-by story-bold-link"
      onClick={() => navigate("/" + firstLikedbyUser)}
    >
      {firstLikedbyUser}
    </span>
  );
  const andOthers = (
    <>
      {story.likedBy.length > 1 && (
        <>
          and <span className="story-others story-bold-link">others</span>{" "}
        </>
      )}
    </>
  );
  const likeSection = (
    <div className="likes-section">
      Liked by {firstLikedBy} {andOthers}
    </div>
  );
  const likedByLoggedInUser = story.likedBy.some(
    (likeUser) => likeUser._id === loggedInUser._id
  );
  const likeToggle = () => {
    if (likedByLoggedInUser) {
      story.likedBy = story.likedBy.filter(
        (likeUser) => likeUser._id != loggedInUser._id
      );
    } else {
      story.likedBy.push(userService.getMiniUser(loggedInUser));
    }
    updateStory(story);
  };

  const hasComments = story.comments.length > 0;
  const viewNCommentText = (
    <div
      className="story-preview-comments"
      onClick={() => {
        story.comments.length > 1
          ? navigate(`/p/${story._id}`, {
              state: { backgroundLocation: location },
            })
          : null;
      }}
    >
      {" "}
      {/*add onClick to show story modal */}
      View {(story.comments.length === 1 ? "" : "all ") +
        story.comments.length}{" "}
      comment{story.comments.length === 1 ? "" : "s"}
    </div>
  );

  return (
    <div className="story-preview" key={index}>
      <div className="story-info">
        <div className="square-container">
          <div className="circle-container">
            <img
              src={story.by.imgUrl}
              alt="User"
              className="user-img circle-image"
              onClick={() => navigate("/" + story.by.username)}
            />
          </div>
        </div>
        <div className="story-info-text">
          <span
            className="username story-bold-link"
            onClick={() => navigate("/" + story.by.username)}
          >
            {story.by.username}
          </span>
          {/* <span className=''>{"•" + createdDateFormated + "•follow"}</span> */}
          <span className="">{"• " + createdDateFormated}</span>
          {story.loc.name && (
            <div className="story-location">{story.loc.name}</div>
          )}
        </div>
        <div className="story-info-button">
          <ThreeDotsSVG label="more options" type="more-button" />
        </div>
      </div>
      <img
        src={story.imgUrl}
        alt="Post"
        className="story-image"
        onClick={() => {
          navigate(`/p/${story._id}`, {
            state: { backgroundLocation: location },
          });
        }}
      />
      <div className="actions-section">
        <div className="action-button" onClick={() => likeToggle()}>
          <HeartSvg
            label={(likedByLoggedInUser ? "un" : "") + "like"}
            type="like-button"
            full={likedByLoggedInUser ? "pink" : likedByLoggedInUser}
          />
        </div>
        <div
          className="action-button"
          onClick={() => {
            navigate(`/p/${story._id}`, {
              state: { backgroundLocation: location },
            });
          }}
        >
          <CommentSvg label="comment" type="comment-button" />
        </div>
        <div className="action-button">
          <ShareSvg label="share" type="share-button" />
        </div>
        <div className="action-button">
          <SaveSvg label="save" type="save-button" />
        </div>
      </div>
      {hasLikes && likeSection}
      <div className="story-text">
        <span
          className="story-username username story-bold-link"
          onClick={() => navigate("/" + story.by.username)}
        >
          {story.by.username}{" "}
        </span>
        <span className="story-comment-text">
          {" "}
          {story.txt }  <br/> {<Tags tags={story.tags} />}{" "}
        </span>
      </div>
      {hasComments && viewNCommentText}
      <AddCommentToPreview story={story} loggedInUser={loggedInUser} />
    </div>
  );
}
