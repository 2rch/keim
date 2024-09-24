import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/home-page";
import { HistoryPage } from "../../pages/history-page";
import { AdvantagesPage } from "../../pages/advantages-page";
import { BuildingsPage } from "../../pages/buildings-page";
import { ServicePage } from "../../pages/service-page";
import { ContactsPage } from "../../pages/contacts-page";
import { PaintSystemPage } from "../../pages/paint-system-page";
import { ConcreteRepairPage } from "../../pages/concrete-repair-page";
import { PlasterPage } from "../../pages/plaster-page";
import { RockRestorationPage } from "../../pages/rock-restoration-page";
import { CreativeDesignPage } from "../../pages/creative-design-page";
import { AdditionalPage } from "../../pages/additional-page";
import { CataloguePage } from "../../pages/catalogue-page";
import { SearchPage } from "../../pages/search-page";
import { useTranslation } from "react-i18next";

export const routes = [
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "/advantages",
    element: <AdvantagesPage />,
  },
  {
    path: "/buildings",
    element: <BuildingsPage />,
  },
  {
    path: "/service",
    element: <ServicePage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
  {
    path: "/paint-system",
    element: <PaintSystemPage />,
  },
  {
    path: "concrete-repair",
    element: <ConcreteRepairPage />,
  },
  {
    path: "/plaster",
    element: <PlasterPage />,
  },
  {
    path: "/rock-restoration",
    element: <RockRestorationPage />,
  },
  {
    path: "/creative-design",
    element: <CreativeDesignPage />,
  },
  {
    path: "/additional",
    element: <AdditionalPage />,
  },
  {
    path: "/catalogue",
    element: <CataloguePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
];

export const Routing = () => {
  const { t, i18n } = useTranslation();
  const currentLink = location.pathname.substring(1);
  document.title = i18n.exists(`${currentLink}.title`)
    ? t(`${currentLink}.title`)
    : t("home.title");
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};
