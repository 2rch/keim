import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { CreativeDesignPageWidget } from "../../widgets/creative-design-page-widget";

export const CreativeDesignPage = () => {
  return (
    <PageLayout className={"creative-design-page"}>
      <CreativeDesignPageWidget />
    </PageLayout>
  );
};
