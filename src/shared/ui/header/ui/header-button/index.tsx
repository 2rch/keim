import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import clsx from "clsx";

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
  const styleClass = clsx(
    "header-button",
    additionalClass,
    currentLink === link && "selected",
  );
  return (
    <Link className={styleClass} to={link}>
      <div className={"header-button-text"}>{t(title)}</div>
    </Link>
  );
};
