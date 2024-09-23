import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { ServiceList } from "./service-list";
import "./index.scss";
import { PageTitle } from "../../../shared/ui/page-title";

export const ServicePageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"service-page-widget"}>
      <PageTitle title={t("service.title")} />
      <div className={"service-page-widget-text"}>
        <Trans i18nKey={"service.paragraph1"} components={{ b: <b /> }} />
      </div>
      <ServiceList />
      <div className={"service-page-widget-text"}>
        <Trans i18nKey={"service.paragraph2"} components={{ b: <b /> }} />
      </div>
      <div className={"service-page-widget-text"}>
        <Trans i18nKey={"service.paragraph3"} components={{ b: <b /> }} />
      </div>
      <div className={"service-page-widget-text"}>
        <Trans i18nKey={"service.paragraph4"} components={{ b: <b /> }} />
        <a href={"mailto:keim@keim.com.ua."}>keim@keim.com.ua.</a>
      </div>
      <div className={"service-page-widget-text"}>
        <Trans i18nKey={"service.paragraph5"} components={{ b: <b /> }} />
      </div>
    </div>
  );
};
