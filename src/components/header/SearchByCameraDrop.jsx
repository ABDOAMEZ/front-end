import React, { useRef } from "react";
import { MdImageSearch } from "react-icons/md";

export default function SearchByPhoto(props) {
    const fileInputRef = useRef(null);

    
    // Function to trigger file input
    const handleUploadClick = () => {
      fileInputRef.current.click();
      console.log(fileInputRef.current)
    
  }

  const searchCamerDropHide = () => {
    document.querySelector(`#${props.id}`).classList.remove("down");
    console.log(document.querySelector(`#${props.id}`))
  }

  return (
    <div onMouseLeave={searchCamerDropHide} id={props.id} className="search-container">
      <div className="search-box">
        {/* Search Icon */}
        <MdImageSearch className="icon" />

        {/* Title */}
        <h2 className="search-title">SEARCH BY PHOTO</h2>

        {/* Subtitle */}
        <div className="upload-container">
      <p className="upload-text">
        Drag and drop a photo or{" "}
        <button type="button" className="upload-btn" onClick={handleUploadClick}>
          Upload photo
        </button>
      </p>

      {/* Hidden file input */}
      <input type="file" accept="image/*" capture="environment" ref={fileInputRef} className="file-input" />
    </div>
      </div>
    </div>
  );
}
