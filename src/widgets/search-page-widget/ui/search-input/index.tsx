import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

interface SearchInputProps {
  value: string;
  setValue: (newValue: string) => void;
}

export const SearchInput = ({ value, setValue }: SearchInputProps) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const { t } = useTranslation();
  return (
    <div className={"search-input"}>
      <label className={"search-input-label"}>{t("search.criteria")}</label>
      <input
        className={"search-input-prompt"}
        type={"text"}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};
