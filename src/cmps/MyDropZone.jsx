import { useState } from "react";

export function MyDropZone({ children, onFilesDrop, type, active }) {
  if (active) {
    const [isDragging, setIsDragging] = useState(false);
    const handleDragOver = (event) => {
      event.preventDefault();
    };

    const handleDragEnter = () => {
      setIsDragging(true);
    };

    const handleDragLeave = () => {
      setIsDragging(false);
    };
    const handleDrop = (event) => {
      event.preventDefault();
      setIsDragging(false);

      const files = event.dataTransfer.files;
      if (onFilesDrop) {
        onFilesDrop(files);
      }
    };
  }
  return (
    <div
      className={`${type} drop-zone ${isDragging ? "dragging" : ""}`}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
}
