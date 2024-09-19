import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

interface SideMenuButtonProps {
  title: string;
  link: string;
  additionalClass?: string;
}

export const SideMenuButton = ({
  title,
  link,
  additionalClass,
}: SideMenuButtonProps) => {
  const { t } = useTranslation();
  const currentLink = window.location.pathname;
  const styleClass = `header-button ${additionalClass ?? ""} ${
    currentLink === link && "selected"
  }`;
  return (
    <a className={`side-menu-button ${styleClass}`} href={link}>
      <div className={"side-menu-button-text"}>{t(title)}</div>
    </a>
  );
};
