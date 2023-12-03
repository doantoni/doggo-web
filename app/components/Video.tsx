"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
}

const Video = (props: Props) => {
  const [isPlayMode, setIsPlayMode] = useState(false);

  const height = "h-[650px]";

  if (isPlayMode)
    return (
      <video
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsPlayMode(false);
        }}
        className={`w-full ${height}`}
        controls
      >
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );

  return (
    <div
      className={`relative w-screen ${height} overflow-hidden bg-cover bg-[50%] bg-no-repeat`}
    >
      <Image
        className="w-screen h-full object-cover"
        width={1440}
        height={681}
        src={"/video-placeholder.png"}
        alt="video"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray bg-fixed opacity-60"></div>
      <Image
        onClick={() => setIsPlayMode(true)}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        width={150}
        height={150}
        src={"/play.svg"}
        alt="play"
      />
    </div>
  );
};

export default Video;
