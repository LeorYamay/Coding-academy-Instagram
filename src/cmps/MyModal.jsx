import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { XSVG } from "./Svglist.jsx";

export function MyModal({children}) {
  const navigate = useNavigate();

  function closeModal() {
    navigate(-1);
  }

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <button onClick={closeModal} className="modal-close-button">
        <XSVG label={"Exit Modal"} type={"exit-button-modal"} />
      </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
