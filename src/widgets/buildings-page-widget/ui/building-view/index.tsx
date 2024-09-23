import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { buildingViewConfig } from "../../config";
import { ArticleParagraph } from "../../../../shared/ui/article-paragraph";
import { PageTitle } from "../../../../shared/ui/page-title";
import "./index.scss";

interface BuildingViewProps {
  id: number;
}

export const BuildingView = ({ id }: BuildingViewProps) => {
  const { t } = useTranslation();
  const currentBuilding = buildingViewConfig.find(
    (building) => building.id === id,
  );
  return (
    <div className={"building-view"}>
      <PageTitle title={t(currentBuilding?.title ?? "buildings.title")} />
      {!currentBuilding ? (
        <div className={"building-not-found"}>{t("buildings.not-found")}</div>
      ) : (
        <>
          {currentBuilding.paragraphs.map((paragraph) => (
            <ArticleParagraph key={paragraph}>
              {
                <Trans
                  i18nKey={paragraph}
                  components={{ b: <b />, a: <a /> }}
                />
              }
            </ArticleParagraph>
          ))}
          {currentBuilding.images.map((image) => (
            <img
              className={"building-view-image"}
              key={image}
              src={image}
              alt={"Building Image"}
            />
          ))}
          {currentBuilding?.video && (
            <iframe
              className={"building-view-video"}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_EF4lRoBmCc"
              title={currentBuilding.title}
            />
          )}
        </>
      )}
    </div>
  );
};
