import React from "react";
import { advantagesList } from "../config";
import { useTranslation } from "react-i18next";
import "./index.scss";

export const AdvantagesPageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"adv-page-widget"}>
      <div className={"adv-page-title"}>{t("advantages.title")}</div>
      {advantagesList.map((listItem) => (
        <div key={listItem.title} className={"list-element"}>
          <div className={"list-element-title"}>{t(listItem.title)}</div>
          <div className={"list-element-description"}>
            {t(listItem.description)}
          </div>
        </div>
      ))}
    </div>
  );
};
