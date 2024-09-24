import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

interface BuildingCardProps {
  title: string;
  img: string;
  link?: string | null;
}

export const BuildingCard = ({
  title,
  img,
  link = null,
}: BuildingCardProps) => {
  const titleElement = link ? <Link to={link}>{title}</Link> : title;
  return (
    <div className={"build-card"}>
      <img className={"build-card-image"} src={img} alt={"Building Image"} />
      <div className={"build-card-title"}>{titleElement}</div>
    </div>
  );
};
