import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

interface SearchPromptProps {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
}

export const SearchPrompt = ({
  value,
  onChange,
  onEnter,
}: SearchPromptProps) => {
  const { t } = useTranslation();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };
  return (
    <input
      className={"side-menu-search"}
      type={"text"}
      placeholder={t("sidemenu.search-placeholder")}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};
