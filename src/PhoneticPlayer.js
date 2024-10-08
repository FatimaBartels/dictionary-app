import React from "react";
import "./Phonetic.css";

export default function PhoneticPlayer(props) {
  function handleClick() {
    const audioElement = new window.Audio(props.audio);
    audioElement.play();
  }

  return (
    <div className="button">
      <button
        data-playing="false"
        role="switch"
        aria-checked="false"
        onClick={handleClick}
      >
        <i className="icon fas fa-volume-up"></i>
      </button>
    </div>
  );
}
