import React, { useState } from "react";
import { MediaIconSvg } from "./Svglist.jsx";
import { MyModal } from "./MyModal.jsx";

export function CreateModal() {
  const [phase, setPhase] = useState("CreateNewPost");

  return (
    <MyModal>
      <div className="create-container">
        <div className="create-title">Create new post</div>
        <MediaIconSvg label={"create-modal-media"} type={"media-icon"} />
        Drag photos and videos here
        <button className="Select from computer" title="Select from computer">
          Select from computer
        </button>
      </div>
    </MyModal>
  );
}
