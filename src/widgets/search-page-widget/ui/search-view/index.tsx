import React, { ReactNode } from "react";
import { searchByString } from "../../lib";
import { Trans, useTranslation } from "react-i18next";
import "./index.scss";
import { routes } from "../../../../app/router";
import { Link } from "react-router-dom";

interface SearchViewProps {
  search: string;
}

export const SearchView = ({ search }: SearchViewProps) => {
  const { t, i18n } = useTranslation();
  const translationJSON = i18n.getDataByLanguage(i18n.language) ?? {};
  const searchResult = searchByString(
    search,
    translationJSON?.translation ?? {},
  );
  const resultElements = searchResult.map((translation) => {
    const translationParts = translation.split(".");
    const translationHeader = translationParts.shift();
    const title = `${translationHeader}.title`;
    const foundTranslationArray: string[] = t(translation).split(search);
    const content: ReactNode[] = [];
    foundTranslationArray.map((element, index) => {
      content.push(element);
      if (index != foundTranslationArray.length - 1) {
        content.push(`<span>${search}</span>`);
      }
    });
    if (
      i18n.exists(title) &&
      routes.find((route) => route.path === `/${translationHeader}`)
    ) {
      return (
        <div key={translation} className={"search-view-element"}>
          <div className={"search-view-element-header"}>
            <Link to={`/${translationHeader}`}>
              {
                <Trans
                  i18nKey={title}
                  components={{ b: <b />, span: <span /> }}
                />
              }
            </Link>
          </div>
          <div
            className={"search-view-element-content"}
            dangerouslySetInnerHTML={{ __html: content.join(" ") }}
          />
        </div>
      );
    }
  });
  return (
    <div className={"search-view"}>
      {resultElements.length ? (
        <div className={"search-view-result"}>{resultElements}</div>
      ) : (
        <div className={"search-view-failed"}>
          <div className={"search-view-failed-title"}>
            {t("search.nothing-found.title")}
          </div>
          <div className={"search-view-failed-description"}>
            {t("search.nothing-found.description", { search: search })}
          </div>
        </div>
      )}
    </div>
  );
};
