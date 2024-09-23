import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface HeaderButtonProps {
  title: string;
  link: string;
  additionalClass?: string;
}

export const HeaderButton = ({
  title,
  link,
  additionalClass,
}: HeaderButtonProps) => {
  const { t } = useTranslation();
  const currentLink = window.location.pathname;
  const styleClass = `header-button ${additionalClass ?? ""} ${
    currentLink === link && "selected"
  }`;
  return (
    <Link className={styleClass} to={link}>
      <div className={"header-button-text"}>{t(title)}</div>
    </Link>
  );
};
