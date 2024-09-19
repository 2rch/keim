import React from "react";
import { PlasterPageWidget } from "../../widgets/plaster-page-widget/ui";
import { PageLayout } from "../../shared/ui/page-layout";

export const PlasterPage = () => {
  return (
    <PageLayout className={"plaster-page"}>
      <PlasterPageWidget />
    </PageLayout>
  );
};
