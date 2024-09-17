import React from "react";
import { useTranslation } from "react-i18next";
import { historyText } from "../config";
import "./index.scss";

export const HistoryPageWidget = () => {
  const { t } = useTranslation();
  const config = historyText;
  return (
    <div className={"history-page"}>
      <div className={"history-page-title"}>{t(config.title)}</div>
      {config.paragraphs.map((paragraph) => (
        <p key={paragraph} className={"history-page-paragraph"}>
          {t(paragraph)}
        </p>
      ))}
    </div>
  );
};
