import React from "react";
import clsx from "clsx";
import { Header } from "../../header";
import { Footer } from "../../footer";
import "./index.scss";
import { SideMenu } from "../../side-menu";

interface PageLayoutProps {
  className: string;
  children: React.ReactNode;
}
export const PageLayout = (props: PageLayoutProps) => {
  const { className, children } = props;
  return (
    <>
      <main className={clsx("main", className)}>
        <div className={"page-wrapper"}>
          <Header />
          <div className={"content-wrapper"}>
            <SideMenu />
            <div className={"page-content"}>{children}</div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};
