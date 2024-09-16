import React from "react";
import { HomePageCardLink } from "../config";

export const homePageCardContentGenerator = (
  textArray: string[],
  linkArray: HomePageCardLink[],
) => {
  const maxLength =
    textArray.length > linkArray.length ? textArray.length : linkArray.length;
  const content = [];
  for (let i = 0; i < maxLength; i++) {
    if (i < textArray.length) {
      content.push(`${textArray[i]}`);
    }
    if (i < linkArray.length) {
      content.push(` <a href=${linkArray[i].link}> ${linkArray[i].title} </a>`);
    }
  }
  return (
    <div
      className={"home-page-card-content-text"}
      dangerouslySetInnerHTML={{ __html: content.join(" ") }}
    />
  );
};
