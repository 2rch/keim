import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { CataloguePageWidget } from "../../widgets/catalogue-page-widget/ui";

export const CataloguePage = () => {
  return (
    <PageLayout className={"catalogue-page"}>
      <CataloguePageWidget />
    </PageLayout>
  );
};
