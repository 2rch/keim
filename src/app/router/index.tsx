import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/home-page";
import { HistoryPage } from "../../pages/history-page";

export const Routing = () => {
  return (
    <Routes>
      <Route path={"/history"} element={<HistoryPage />} />
      <Route path={"*"} element={<HomePage />} />
    </Routes>
  );
};
