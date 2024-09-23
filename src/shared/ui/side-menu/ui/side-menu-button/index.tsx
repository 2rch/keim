import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";
import { Link } from "react-router-dom";

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
    <Link className={`side-menu-button ${styleClass}`} to={link}>
      <div className={"side-menu-button-text"}>{t(title)}</div>
    </Link>
  );
};
