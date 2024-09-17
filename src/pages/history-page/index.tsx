import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { HistoryPageWidget } from "../../widgets/history-page-widget/ui";

export const HistoryPage = () => {
  return (
    <PageLayout className={"history-page"}>
      <HistoryPageWidget />
    </PageLayout>
  );
};
