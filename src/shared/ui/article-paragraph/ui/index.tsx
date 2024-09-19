import React from "react";
import "./index.scss";

interface ArticleParagraphProps {
  children: React.ReactNode;
  additionalClass?: string;
}

export const ArticleParagraph = ({
  additionalClass,
  children,
}: ArticleParagraphProps) => {
  return (
    <div className={`article-paragraph ${additionalClass}`}>{children}</div>
  );
};
