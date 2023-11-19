"use client";

import { X } from "lucide-react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "300",
    height: "250",
  };
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevstate) => !prevstate);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="float-right m-2 p-1 bg-color-dark text-color-primary rounded-full"
          onClick={handleVideoPlayer}
        >
          <X />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert('No Trailer Video')}
        />
      </div>
    );
  };

  const ViewPlayer = () => {
    return (
      <button
        className="flex p-4 rounded-lg bg-color-accent shadow-xl hover:underline"
        onClick={handleVideoPlayer}
      >
        View Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ViewPlayer />;
};

export default VideoPlayer;
