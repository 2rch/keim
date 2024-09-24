import React from "react";
import clsx from "clsx";
import { Header } from "../../header";
import { Footer } from "../../footer";
import "./index.scss";
import { SideMenu } from "../../side-menu";
import { useTranslation } from "react-i18next";

interface PageLayoutProps {
  className: string;
  children: React.ReactNode;
}
export const PageLayout = (props: PageLayoutProps) => {
  const { t, i18n } = useTranslation();
  const { className, children } = props;
  const currentLink = location.pathname.substring(1);
  document.title = i18n.exists(`${currentLink}.title`)
    ? t(`${currentLink}.title`)
    : t("home.title");
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
