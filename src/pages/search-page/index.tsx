import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { SearchPageWidget } from "../../widgets/search-page-widget/ui";

export const SearchPage = () => {
  return (
    <PageLayout className={"search-page"}>
      <SearchPageWidget />
    </PageLayout>
  );
};
