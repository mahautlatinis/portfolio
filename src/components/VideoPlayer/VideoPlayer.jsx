import React from "react";

export default function VideoPlayer() {
  return (
    <>
      <video
        class="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
        controls
      >
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
