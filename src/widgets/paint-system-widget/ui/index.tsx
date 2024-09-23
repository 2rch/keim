import React from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  articleTitles,
  firstListId,
  imagesList1,
  imagesList2,
  secondListId,
  thirdListId,
} from "../config";
import { ImageGallery } from "../../../shared/ui/image-gallery";
import { ListGenerator } from "../../../shared/ui/list-generator";
import "./index.scss";
import { PageTitle } from "../../../shared/ui/page-title";
import { ArticleTitle } from "../../../shared/ui/article-title";
import { ArticleParagraph } from "../../../shared/ui/article-paragraph";

export const PaintSystemWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"paint-system-widget"}>
      <PageTitle title={t("paint-system.title")} />
      {articleTitles.map((article) => (
        <ArticleTitle key={article} title={t(article)} />
      ))}
      <ArticleParagraph>
        <Trans i18nKey={"paint-system.paragraph1"} components={{ b: <b /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={"paint-system.paragraph2"} components={{ b: <b /> }} />
      </ArticleParagraph>
      <ImageGallery srcList={imagesList1} />
      <ListGenerator listNumber={firstListId} />
      <ImageGallery srcList={imagesList2} height={"155px"} />
      <ListGenerator listNumber={secondListId} />
      <ListGenerator listNumber={thirdListId} />
      <ArticleParagraph>
        <Trans i18nKey={"paint-system.paragraph3"} components={{ b: <b /> }} />
      </ArticleParagraph>
    </div>
  );
};
