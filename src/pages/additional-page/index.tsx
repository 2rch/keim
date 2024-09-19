import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { AdditionalPageWidget } from "../../widgets/additional-page-widget";

export const AdditionalPage = () => {
  return (
    <PageLayout className={"additional-page"}>
      <AdditionalPageWidget />
    </PageLayout>
  );
};
