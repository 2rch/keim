import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { PaintSystemWidget } from "../../widgets/paint-system-widget/ui";

export const PaintSystemPage = () => {
  return (
    <PageLayout className={"paint-system-page"}>
      <PaintSystemWidget />
    </PageLayout>
  );
};
