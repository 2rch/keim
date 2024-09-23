import React from "react";
import { PageTitle } from "../../../shared/ui/page-title";
import { Trans, useTranslation } from "react-i18next";
import { ArticleTitle } from "../../../shared/ui/article-title";
import { ArticleParagraph } from "../../../shared/ui/article-paragraph";
import { ImageGallery } from "../../../shared/ui/image-gallery";
import { firstListId, imageList, secondListId } from "../config";
import { ListGenerator } from "../../../shared/ui/list-generator";
import "./index.scss";

export const PlasterPageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"plaster-page-widget"}>
      <PageTitle title={t("plaster.title")} />
      <ArticleTitle title={t("plaster.article-title1")} />
      <ArticleTitle title={t("plaster.article-title2")} />
      <ArticleParagraph>
        <Trans i18nKey={"plaster.paragraph1"} components={{ b: <b /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={"plaster.paragraph2"} components={{ b: <b /> }} />
      </ArticleParagraph>
      <ImageGallery srcList={imageList} height={"150px"} />
      <ListGenerator listNumber={firstListId} />
      <ListGenerator listNumber={secondListId} />
      <ArticleParagraph>
        <Trans i18nKey={"plaster.paragraph3"} components={{ b: <b /> }} />
      </ArticleParagraph>
    </div>
  );
};
