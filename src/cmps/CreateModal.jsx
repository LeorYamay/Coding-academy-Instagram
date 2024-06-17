import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { EmojiSVG, LeftArrowSVG, MediaIconSvg } from "./Svglist.jsx";
import { MyModal } from "./MyModal.jsx";
import { MyDropZone } from "./MyDropZone.jsx";
import { StopCreating } from "../store/system.actions.js";

export function CreateModal() {
  const [phase, setPhase] = useState("AddMedia");
  const [mediaFiles, setMediaFiles] = useState([]);
  const [discard, SetDiscard] = useState(false);

  const CreateComponents = {
    AddMedia: AddMedia,
    NewPost: NewPost,
  };

  const CreateComponent = CreateComponents[phase];
  return (
    <>
      <MyModal
        closeAction={() => {
          if (mediaFiles.length > 0) {
            SetDiscard(true);
          } else {
            StopCreating();
          }
        }}
      >
        {CreateComponent ? (
          <CreateComponent
            mediaFiles={mediaFiles}
            setPhase={setPhase}
            setMediaFiles={setMediaFiles}
          />
        ) : (
          <></>
        )}
      </MyModal>
      {discard && (
        <DiscardModal
          mediaFiles={mediaFiles}
          cancelDiscard={() => {
            SetDiscard(false);
          }}
        />
      )}
    </>
  );
}

function DiscardModal({ mediaFiles, cancelDiscard }) {
  const navigate = useNavigate();
  const onClose = () => {
    navigate(-1);
  };
  return (
    <MyModal closeAction={cancelDiscard}>
      <div className="discard-main">
        <p className="discard-question">Discard post?</p>
        {/* ed4956 */}
        <p className="discard-statement">
          If you leave, your edits won't be saved.
        </p>
      </div>
      <div className="discard-buttons-container">
        <button
          className="discard-button discard-main-button"
          onClick={() => {
            StopCreating();
          }}
        >
          Discard
        </button>
        <button
          className="discard-button discard-cancel-button"
          onClick={cancelDiscard}
        >
          Cancel
        </button>
      </div>
    </MyModal>
  );
}
function AddMedia({ mediaFiles, setPhase, setMediaFiles }) {
  const [unsupportedFile, setUnsupportedFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    handleFilesDrop(files);
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFilesDrop = ([...files]) => {
    const supportedTypes = ["image/jpeg", "image/png", "video/mp4"];
    const unsupported = files.find(
      (file) => !supportedTypes.includes(file.type)
    );

    if (unsupported) {
      console.error(`Some files are unsupported example file ${file.name}`);
      setUnsupportedFile(unsupported);
    } else {
      setPhase("NewPost");
      setMediaFiles(files);
      console.log("All files are supported:", files);
    }
  };
  return (
    <div className="create-container">
      <div className="create-title">
        {unsupportedFile ? "File couldn't be uploaded" : "Create new post"}
      </div>
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <MyDropZone
        onFilesDrop={handleFilesDrop}
        type={"create-media-instructions"}
        active={true}
      >
        <MediaIconSvg label={"create-modal-media"} type={"media-icon"} />
        <p>
          {unsupportedFile
            ? `This file is not supported`
            : "Drag photos and videos here"}
        </p>
        <p>
          {unsupportedFile
            ? `${unsupportedFile.name} could not be uploaded.`
            : ""}
        </p>
        <button
          className="create-from-computer"
          title="Select from computer"
          onClick={handleButtonClick}
        >
          {unsupportedFile ? "Select other files" : "Select from computer"}
        </button>
      </MyDropZone>
    </div>
  );
}

function NewPost({ mediaFiles }) {
  const [text, setText] = useState("");

  const loggedInUser = useSelector((storeState) => storeState.userModule.user);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const emojis = ["😊", "😄", "😍", "😎", "🤩"];
  const addEmojiToText = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setText((prevText) => prevText + randomEmoji);
  };
  // const [text, setText] = use;
  return (
    <div className="create-details">
      <div className="create-title">
        <button className="back-button">
          <LeftArrowSVG label={"back"} type={"back-arrow"} />
        </button>
        Create new post
        <button className="Share-button">Share</button>
      </div>
      <div className="create-story-container">
        {mediaFiles.length > 0 && (
          <div className="media-preview-container">
            <div className="media-preview">
              {mediaFiles[0].type.startsWith("image/") ? (
                <img src={URL.createObjectURL(mediaFiles[0])} alt="Preview" />
              ) : (
                <video controls>
                  <source
                    src={URL.createObjectURL(mediaFiles[0])}
                    type={mediaFiles[0].type}
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        )}
        <div className="story-input-text">
          <div className="user-info">
            <div className="square-container">
              <div className="circle-container">
                <img
                  src={loggedInUser.imgUrl}
                  alt="User"
                  className="user-img circle-image"
                />
              </div>
            </div>
            <span className="username">{loggedInUser.username}</span>
          </div>
          <div className="caption-section">
            <textarea
              class="caption"
              placeholder="Write a caption..."
              value={text}
              onChange={handleChange}
              maxLength={2200}
            />
            <div className="text-control-section">
              <div className="emoji-button" onClick={addEmojiToText}>
                <EmojiSVG label="emoji" type="emoji" />
              </div>
              <span class="character-count">{`${
                text ? text.length : "0"
              }/2200`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
