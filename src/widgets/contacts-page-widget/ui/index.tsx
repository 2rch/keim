import React from "react";
import { useTranslation } from "react-i18next";
import { ContactsBlock } from "./contacts-block";
import { mapEmbedLink, mapLink } from "../config";
import "./index.scss";

export const ContactsPageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"contacts-page-widget"}>
      <div className={"contacts-page-widget-title"}>{t("contacts.title")}</div>
      <div className={"contacts-page-widget-topic"}>
        Придбати продукцію <b>Keim®</b> в Україні Ви можете у компанії-партнера
        виробника <b>Keimfarben</b> GmbH за адресою:
      </div>
      <ContactsBlock />
      <div className={"contacts-page-widget-map"}>
        <iframe src={mapEmbedLink} width="650" height="400" />
      </div>
      <div className={"contacts-page-widget-map-link"}>
        <a href={mapLink}>{t("contacts.map-link")}</a>
      </div>
    </div>
  );
};
