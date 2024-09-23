import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

interface PictureLinkProps {
  img: string;
  link: string;
  placeholder: string;
}

export const PictureLink = ({ img, link, placeholder }: PictureLinkProps) => {
  return (
    <Link to={link}>
      <img
        className={"picture-link"}
        src={img}
        alt={"Sidemenu Picture"}
        placeholder={placeholder}
      />
    </Link>
  );
};
