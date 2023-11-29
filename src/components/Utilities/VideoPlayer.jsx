"use client";

import { PlayCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevstate) => !prevstate);
  };

  const Player = () => {
    return (
      <div className="z-10 fixed top-0 left-0 w-full h-full bg-color-dark/50">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            className="fixed -right-3 -top-3 bg-color-dark text-color-primary rounded-full"
            onClick={handleVideoPlayer}
          >
            <XCircle />
          </button>
          <YouTube
            videoId={youtubeId}
            onReady={(event) => event.target.playVideo()}
            onError={() => alert("No Trailer Video")}
          />
        </div>
      </div>
    );
  };

  const ViewPlayer = () => {
    return (
      <button
        className="relative w-full h-full bg-color-accent/50"
        onClick={handleVideoPlayer}
      >
        <Image
          src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
          alt="Trailer Video"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-color-primary bg-color-dark/80 rounded-lg border-2 border-color-primary p-1">
          <div className="flex items-center gap-2">
            <PlayCircle /> Play
          </div>
        </div>
      </button>
    );
  };

  return (
    <>
      {!isOpen && <Player />}
      <ViewPlayer />
    </>
  );
};

export default VideoPlayer;
