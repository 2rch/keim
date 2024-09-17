import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/home-page";
import { HistoryPage } from "../../pages/history-page";
import { AdvantagesPage } from "../../pages/advantages-page";
import { BuildingsPage } from "../../pages/buildings-page";
import { ServicePage } from "../../pages/service-page";

export const Routing = () => {
  return (
    <Routes>
      <Route path={"/history"} element={<HistoryPage />} />
      <Route path={"/advantages"} element={<AdvantagesPage />} />
      <Route path={"/buildings"} element={<BuildingsPage />} />
      <Route path={"/service"} element={<ServicePage />} />
      <Route path={"*"} element={<HomePage />} />
    </Routes>
  );
};
