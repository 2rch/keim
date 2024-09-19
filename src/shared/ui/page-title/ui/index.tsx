import React from "react";
import "./index.scss";

interface PageTitleProps {
  title: string;
  additionalClass?: string;
}

export const PageTitle = ({ title, additionalClass = "" }: PageTitleProps) => {
  return <div className={`page-title ${additionalClass}`}>{title}</div>;
};
