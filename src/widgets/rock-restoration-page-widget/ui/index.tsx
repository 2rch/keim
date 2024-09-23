import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { PageTitle } from "../../../shared/ui/page-title";
import { ArticleTitle } from "../../../shared/ui/article-title";
import { ArticleParagraph } from "../../../shared/ui/article-paragraph";
import { ListGenerator } from "../../../shared/ui/list-generator";
import { firstListId, imageList, secondListId, thirdListId } from "../config";
import { ImageGallery } from "../../../shared/ui/image-gallery";
import "./index.scss";

export const RockRestorationPageWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"rock-restoration-page-widget"}>
      <PageTitle title={t("rock-restoration.title")} />
      <ArticleTitle title={t("rock-restoration.article-title1")} />
      <ArticleTitle title={t("rock-restoration.article-title2")} />
      <ArticleParagraph>
        <Trans
          i18nKey={"rock-restoration.paragraph1"}
          components={{ b: <b /> }}
        />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans
          i18nKey={"rock-restoration.paragraph2"}
          components={{ b: <b /> }}
        />
      </ArticleParagraph>
      <ListGenerator listNumber={firstListId} />
      <ImageGallery srcList={imageList} />
      <ListGenerator listNumber={secondListId} />
      <ListGenerator listNumber={thirdListId} />
      <ArticleParagraph>
        <Trans
          i18nKey={"rock-restoration.paragraph3"}
          components={{ b: <b /> }}
        />
      </ArticleParagraph>
    </div>
  );
};
