import React from "react";
import { homePageCardContent } from "../config";
import { useTranslation } from "react-i18next";
import { HomePageCard } from "./home-page-card";
import { homePageCardContentGenerator } from "../lib";

export const HomePageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"home-page-widget"}>
      {homePageCardContent(t).map(({ title, textArray, linkArray, img }) => (
        <HomePageCard
          key={title}
          title={title}
          content={homePageCardContentGenerator(textArray, linkArray)}
          img={img}
        />
      ))}
    </div>
  );
};
