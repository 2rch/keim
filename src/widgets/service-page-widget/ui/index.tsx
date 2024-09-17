import React from "react";
import { useTranslation } from "react-i18next";
import { ServiceList } from "./service-list";
import "./index.scss";

export const ServicePageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"service-page-widget"}>
      <div className={"service-page-widget-title"}>{t("service.title")}</div>
      <div className={"service-page-widget-text"}>
        Сервіс офіційного представника <b>Keimfarben GmbH</b> в Україні включає:
      </div>
      <ServiceList />
      <div className={"service-page-widget-text"}>
        Запрошуємо до співпраці Партнерів для просування та розширення ринків
        збуту продукції <b>Keim®</b> у регіонах України.
      </div>
      <div className={"service-page-widget-text"}>
        Майбутні <b>Торгові агенти (Freelance sales agent)</b> та{" "}
        <b>Дилери (Dealers)</b> – до Ваших послуг індивідуальні рішення з
        урахуванням особливостей регіонального ринку збуту!
      </div>
      <div className={"service-page-widget-text"}>
        Для врегулювання конфліктних ситуацій, а також компенсації збитків{" "}
        <b>у результаті діяльності попереднього представника Keim®</b>{" "}
        виробника Keimfarben GmbH в Україні – <b>до березня 2013 року</b>,
        просимо Вас звертатися{" "}
        <a href={"mailto:keim@keim.com.ua."}>keim@keim.com.ua.</a>
      </div>
      <div className={"service-page-widget-text"}>
        Ми сподіваємося, і докладемо всіх зусиль для того, щоб Ваша довіра до{" "}
        <b>Keim®</b> була відновлена, а співпраця з <b>Keimfarben GmbH</b> була
        успішною та плідною!
      </div>
    </div>
  );
};
