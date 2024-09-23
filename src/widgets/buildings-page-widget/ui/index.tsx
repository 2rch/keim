import React from "react";
import { useTranslation } from "react-i18next";
import { buildingsList } from "../config";
import { BuildingCard } from "./building-card";
import "./index.scss";
import { PageTitle } from "../../../shared/ui/page-title";
import { useSearchParams } from "react-router-dom";
import { BuildingView } from "./building-view";

export const BuildingsPageWidget = () => {
  const { t } = useTranslation();
  const [query] = useSearchParams();
  const buildingId = query.get("id");
  return (
    <div className={"build-page-widget"}>
      {!buildingId && <PageTitle title={t("buildings.title")} />}
      <div className={"build-page-widget-content"}>
        {buildingId ? (
          <BuildingView id={Number(buildingId)} />
        ) : (
          buildingsList.map(({ title, img, link = null }) => (
            <BuildingCard key={title} title={t(title)} img={img} link={link} />
          ))
        )}
      </div>
    </div>
  );
};
