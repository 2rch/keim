import React from "react";
import "./index.scss";
import clsx from "clsx";

interface ArticleParagraphProps {
  children: React.ReactNode;
  additionalClass?: string;
}

export const ArticleParagraph = ({
  additionalClass,
  children,
}: ArticleParagraphProps) => {
  return (
    <div className={clsx("article-paragraph", additionalClass)}>{children}</div>
  );
};
