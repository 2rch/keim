import React from "react";
import "./index.scss";

interface PictureLinkProps {
  img: string;
  link: string;
  placeholder: string;
}

export const PictureLink = ({ img, link, placeholder }: PictureLinkProps) => {
  return (
    <a href={link}>
      <img
        className={"picture-link"}
        src={img}
        alt={"Sidemenu Picture"}
        placeholder={placeholder}
      />
    </a>
  );
};
