import React from "react";
import "./index.scss";

interface HeaderVideoProps {
  sourceList: {
    src: string;
    type: string;
  }[];
}

const HeaderVideoS = ({ sourceList }: HeaderVideoProps) => {
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
      {sourceList.map((video) => (
        <source key={video.src} src={video.src} type={video.type} />
      ))}
      bgvideo
    </video>
  );
};

export const HeaderVideo = React.memo(HeaderVideoS);
