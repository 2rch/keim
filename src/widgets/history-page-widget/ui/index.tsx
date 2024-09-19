import React from "react";
import { useTranslation } from "react-i18next";
import { historyText } from "../config";
import "./index.scss";
import { PageTitle } from "../../../shared/ui/page-title";

export const HistoryPageWidget = () => {
  const { t } = useTranslation();
  const config = historyText;
  return (
    <div className={"history-page"}>
      <PageTitle title={t(config.title)} />
      {config.paragraphs.map((paragraph) => (
        <p key={paragraph} className={"history-page-paragraph"}>
          {t(paragraph)}
        </p>
      ))}
    </div>
  );
};
