import React from "react";
import videoMP4 from "../../../../assets/header/keim.mp4";
import videoWEBM from "../../../../assets/header/keim.webm";
import "./index.scss";

export const HeaderVideo = () => {
  return (
    <video
      className={"header-video"}
      id={"video_background"}
      preload={"auto"}
      autoPlay={true}
      muted={true}
      controlsList={"nodownload"}
      controls={false}
      loop={true}
    >
      <source src={videoMP4} type={"video/mp4"} />
      <source src={videoWEBM} type={"video/webm"} />
      bgvideo
    </video>
  );
};
