import React, { useState } from "react";
import { MediaIconSvg } from "./Svglist.jsx";
import { MyModal } from "./MyModal.jsx";
import { MyDropZone } from "./MyDropZone.jsx";

export function CreateModal() {
  const [phase, setPhase] = useState("CreateNewPost");
  const [unsupportedFile, setUnsupportedFile] = useState(null);

  const handleFilesDrop = (files) => {
    const supportedTypes = ['image/jpeg', 'image/png', 'video/mp4', 'video/quicktime'];

    const unsupported = files.find((file) => !supportedTypes.includes(file.type));

    if (unsupported) {
      setPhase('FileUploadError');
      setUnsupportedFile(unsupported);
    } else {
      console.log('All files are supported:', files);
      // Proceed with uploading files
    }

  };
  return (
    <MyModal>
      <div className="create-container">
        <div className="create-title">{unsupported?"File couldn't be uploaded":"Create new post"}</div>
        <MyDropZone
          onFilesDrop={handleFilesDrop}
          type={"create-media-instructions"}
          active ={true}
        >
          <MediaIconSvg label={"create-modal-media"} type={"media-icon"} />
          {unsupported?`This file is not supported`:"Drag photos and videos here"}
          <button className="create-from-computer" title="Select from computer">
            Select from computer
          </button>
        </MyDropZone>
      </div>
    </MyModal>
  );
}
