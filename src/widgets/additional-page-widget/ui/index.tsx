import React from "react";
import { PageTitle } from "../../../shared/ui/page-title";
import { Trans, useTranslation } from "react-i18next";
import { ArticleTitle } from "../../../shared/ui/article-title";
import { ArticleParagraph } from "../../../shared/ui/article-paragraph";
import "./index.scss";
import { ImageGallery } from "../../../shared/ui/image-gallery";
import { firstListId, imageList, secondListId } from "../config";
import { ListGenerator } from "../../../shared/ui/list-generator";

export const AdditionalPageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"additional-page-widget"}>
      <PageTitle title={t("additional.title")} />
      <ArticleTitle title={t("additional.article-title1")} />
      <ArticleTitle title={t("additional.article-title2")} />
      <ArticleParagraph>
        <Trans i18nKey={"additional.paragraph1"} components={{ b: <b /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans
          i18nKey={"additional.paragraph2"}
          components={{ b: <b />, span: <span /> }}
        />
      </ArticleParagraph>
      <ImageGallery srcList={imageList} />
      <ListGenerator listNumber={firstListId} />
      <ListGenerator listNumber={secondListId} />
      <ArticleParagraph>
        <Trans i18nKey={"additional.paragraph3"} components={{ b: <b /> }} />
      </ArticleParagraph>
    </div>
  );
};
