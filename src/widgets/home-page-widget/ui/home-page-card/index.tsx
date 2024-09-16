import React, { ReactNode } from "react";
import "./index.scss";

interface HomePageCardProps {
  title: string;
  content: ReactNode;
  img: string;
}

export const HomePageCard = ({ title, content, img }: HomePageCardProps) => {
  return (
    <div className={"home-page-card"}>
      <div className={"home-page-card-title"}>{title}</div>
      <div className={"home-page-card-content"}>
        {content}
        <img
          className={"home-page-card-content-image"}
          src={img}
          alt={"Building Image"}
        />
      </div>
    </div>
  );
};
