import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { ContactsPageWidget } from "../../widgets/contacts-page-widget";

export const ContactsPage = () => {
  return (
    <PageLayout className={"contacts-page"}>
      <ContactsPageWidget />
    </PageLayout>
  );
};
