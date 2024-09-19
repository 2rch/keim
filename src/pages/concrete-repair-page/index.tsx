import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { ConcreteRepairWidget } from "../../widgets/concrete-repair-widget/ui";

export const ConcreteRepairPage = () => {
  return (
    <PageLayout className={"concrete-repair-page"}>
      <ConcreteRepairWidget />
    </PageLayout>
  );
};
