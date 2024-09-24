import React from "react";
import "./index.scss";
import clsx from "clsx";

interface PageTitleProps {
  title: string;
  additionalClass?: string;
}

export const PageTitle = ({ title, additionalClass = "" }: PageTitleProps) => {
  return <div className={clsx("page-title", additionalClass)}>{title}</div>;
};
