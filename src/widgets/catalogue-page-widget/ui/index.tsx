import React from "react";
import { useTranslation } from "react-i18next";
import { PageTitle } from "../../../shared/ui/page-title";
import { pdfList } from "../config";
import "./index.scss";
export const CataloguePageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"catalogue-page-widget"}>
      <PageTitle title={t("catalogue.title")} />
      {pdfList.map((file) => (
        <div key={file} className={"catalogue-page-widget-element"}>
          <a href={`/pdf/${file}`} rel={"noreferrer"} target={"_blank"}>
            {file}
          </a>
        </div>
      ))}
    </div>
  );
};
