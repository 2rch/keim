import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { RockRestorationPageWidget } from "../../widgets/rock-restoration-page-widget";

export const RockRestorationPage = () => {
  return (
    <PageLayout className={"rock-restoration-page"}>
      <RockRestorationPageWidget />
    </PageLayout>
  );
};
