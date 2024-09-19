import React from "react";
import "./index.scss";

interface ImageGalleryProps {
  srcList: string[];
  height?: string;
}

export const ImageGallery = ({
  srcList,
  height = "255px",
}: ImageGalleryProps) => {
  return (
    <div className={"image-gallery"}>
      {srcList.map((src) => (
        <img key={src} src={src} alt={"Gallery Image"} height={height} />
      ))}
    </div>
  );
};
