import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";

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
    <a className={styleClass} href={link}>
      <div className={"header-button-text"}>{t(title)}</div>
    </a>
  );
};
