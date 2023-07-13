import React from "react";

function InputFileUrl({ inputURLHandler }) {
  return (
    <>
      <input
        onChange={inputURLHandler}
        type="url"
        placeholder="please enter a video URL"
      />
    </>
  );
}

export default InputFileUrl;
