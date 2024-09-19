import React from "react";
import { useTranslation } from "react-i18next";
import { buildingsList } from "../config";
import { BuildingCard } from "./building-card";
import "./index.scss";
import { PageTitle } from "../../../shared/ui/page-title";

export const BuildingsPageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"build-page-widget"}>
      <PageTitle title={t("buildings.title")} />
      <div className={"build-page-widget-content"}>
        {buildingsList.map(({ title, img, link = null }) => (
          <BuildingCard key={title} title={t(title)} img={img} link={link} />
        ))}
      </div>
    </div>
  );
};
