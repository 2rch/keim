import React from "react";
import { withProviders } from "./providers";
import { Routing } from "./router";
import "./index.scss";
import { PageLayout } from "../shared/ui/page-layout";

function App() {
  return (
    <div className="App">
      <PageLayout className={""}>
        <Routing />
      </PageLayout>
    </div>
  );
}

export default withProviders(App);
