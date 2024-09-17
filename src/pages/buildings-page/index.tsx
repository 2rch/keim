import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { BuildingsPageWidget } from "../../widgets/buildings-page-widget";

export const BuildingsPage = () => {
  return (
    <PageLayout className={"buildings-page"}>
      <BuildingsPageWidget />
    </PageLayout>
  );
};
