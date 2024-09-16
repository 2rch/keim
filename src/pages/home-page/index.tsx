import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { HomePageWidget } from "../../widgets/home-page-widget";

export const HomePage = () => {
  return (
    <PageLayout className={"home-page"}>
      <HomePageWidget />
    </PageLayout>
  );
};
