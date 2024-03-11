import React from "react";
import iconPlay from "../utils/iconPlay.svg";
import iconInfo from "../utils/iconInfo.svg";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-left pt-48 pl-12 absolute">
      <h1 className="text-6xl text-white font-bold pb-4">{title}</h1>
      <p className="w-[370px] text-white pb-4 text-md">{overview}</p>
      <div className="flex gap-4">
        <button className=" bg-white h-[45px] px-6 rounded-md font-semibold text-md">
          <div className="flex gap-2">
            <img src={iconPlay} alt="alternate" />
            <span>Play</span>
          </div>
        </button>
        <button className=" bg-[#6d6d6e] h-[45px] px-6 text-white font-semibold text-md rounded-md">
          <div className="flex gap-2">
            <img src={iconInfo} alt="alternate" />
            <span>More Info</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
