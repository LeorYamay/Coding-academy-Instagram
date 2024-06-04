import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoryView } from "../pages/StoryView";
import Modal from 'react-modal';

export function ViewModal() {
  const navigate = useNavigate();
//   let { id } = useParams();

  function closeModal() {
    navigate(-1);
  }

  return (
    <Modal isOpen={true} onRequestClose={closeModal} contentLabel="Story Modal">
      <StoryView />
    </Modal>
  );
}
