import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";

interface HeaderButtonProps {
  title: string;
  link: string;
  additionalClass?: string;
}

export const HeaderButton = (props: HeaderButtonProps) => {
  const { t } = useTranslation();
  return (
    <a
      className={`header-button ${props.additionalClass ?? ""}`}
      href={props.link}
    >
      <div className={"header-button-text"}>{t(props.title)}</div>
    </a>
  );
};
