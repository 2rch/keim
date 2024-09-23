import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { PageTitle } from "../../../shared/ui/page-title";
import { ArticleTitle } from "../../../shared/ui/article-title";
import { ArticleParagraph } from "../../../shared/ui/article-paragraph";
import { ImageGallery } from "../../../shared/ui/image-gallery";
import {
  firstImageList,
  firstListId,
  fourthListId,
  secondImageList,
  secondListId,
  thirdImageList,
  thirdListId,
} from "../config";
import { ListGenerator } from "../../../shared/ui/list-generator";
import "./index.scss";

export const CreativeDesignPageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"creative-design-page-widget"}>
      <PageTitle title={t("creative-design.title")} />
      <ArticleTitle title={t("creative-design.article-title1")} />
      <ArticleTitle title={t("creative-design.article-title2")} />
      <ArticleParagraph>
        <Trans
          i18nKey={"creative-design.paragraph1"}
          components={{ b: <b /> }}
        />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans
          i18nKey={"creative-design.paragraph2"}
          components={{ b: <b /> }}
        />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans
          i18nKey={"creative-design.paragraph3"}
          components={{ b: <b /> }}
        />
      </ArticleParagraph>
      <ImageGallery srcList={firstImageList} />
      <ListGenerator listNumber={firstListId} />
      <ImageGallery srcList={secondImageList} height={"190px"} />
      <ListGenerator listNumber={secondListId} />
      <ListGenerator listNumber={thirdListId} />
      <ImageGallery srcList={thirdImageList} />
      <ListGenerator listNumber={fourthListId} />
      <ArticleParagraph>
        <Trans
          i18nKey={"creative-design.paragraph4"}
          components={{ b: <b /> }}
        />
      </ArticleParagraph>
    </div>
  );
};
