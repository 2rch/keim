import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { AdvantagesPageWidget } from "../../widgets/advantages-page-widget";

export const AdvantagesPage = () => {
  return (
    <PageLayout className={"advantages-page"}>
      <AdvantagesPageWidget />
    </PageLayout>
  );
};
