import React from "react";
import "./index.scss";

interface ArticleTitleProps {
  title: string;
  additionalClass?: string;
}

export const ArticleTitle = ({
  title,
  additionalClass = "",
}: ArticleTitleProps) => {
  return <div className={`article-title ${additionalClass}`}>{title}</div>;
};
