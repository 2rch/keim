import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={"footer"}>
      <div className={"footer-text"}>
        <p>{t("footer.title", { currentYear: new Date().getFullYear() })}</p>
        <p>{t("footer.rights")}</p>
      </div>
    </footer>
  );
};
