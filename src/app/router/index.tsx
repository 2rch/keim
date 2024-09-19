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

export const Routing = () => {
  return (
    <Routes>
      <Route path={"/history"} element={<HistoryPage />} />
      <Route path={"/advantages"} element={<AdvantagesPage />} />
      <Route path={"/buildings"} element={<BuildingsPage />} />
      <Route path={"/service"} element={<ServicePage />} />
      <Route path={"/contacts"} element={<ContactsPage />} />
      <Route path={"/paint-system"} element={<PaintSystemPage />} />
      <Route path={"/concrete-repair"} element={<ConcreteRepairPage />} />
      <Route path={"/plaster"} element={<PlasterPage />} />
      <Route path={"/rock-restoration"} element={<RockRestorationPage />} />
      <Route path={"*"} element={<HomePage />} />
    </Routes>
  );
};
