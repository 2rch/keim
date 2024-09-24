import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { ContactsBlock } from "./contacts-block";
import { mapEmbedLink, mapLink } from "../config";
import "./index.scss";
import { PageTitle } from "../../../shared/ui/page-title";

export const ContactsPageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"contacts-page-widget"}>
      <PageTitle title={t("contacts.title")} />
      <div className={"contacts-page-widget-topic"}>
        <Trans i18nKey={"contacts.paragraph1"} components={{ b: <b /> }} />
      </div>
      <ContactsBlock />
      <div className={"contacts-page-widget-map"}>
        <iframe className={"contacts-page-widget-map"} src={mapEmbedLink} />
      </div>
      <div className={"contacts-page-widget-map-link"}>
        <a href={mapLink}>{t("contacts.map-link")}</a>
      </div>
    </div>
  );
};
