import React from "react";
import "./index.scss";
import clsx from "clsx";

interface ArticleTitleProps {
  title: string;
  additionalClass?: string;
}

export const ArticleTitle = ({
  title,
  additionalClass = "",
}: ArticleTitleProps) => {
  return <div className={clsx("article-title", additionalClass)}>{title}</div>;
};
