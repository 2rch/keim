import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { ServicePageWidget } from "../../widgets/service-page-widget/ui";

export const ServicePage = () => {
  return (
    <PageLayout className={"service-page"}>
      <ServicePageWidget />
    </PageLayout>
  );
};
