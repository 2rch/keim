import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { ListGenerator } from "../../../shared/ui/list-generator";
import { firstListId, imageList, secondListId, thirdListId } from "../config";
import { ImageGallery } from "../../../shared/ui/image-gallery";
import { PageTitle } from "../../../shared/ui/page-title";
import { ArticleTitle } from "../../../shared/ui/article-title";
import { ArticleParagraph } from "../../../shared/ui/article-paragraph";
import "./index.scss";

export const ConcreteRepairWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"concrete-repair-widget"}>
      <PageTitle title={t("concrete-repair.title")} />
      <ArticleTitle title={t("concrete-repair.article-title1")} />
      <ArticleTitle title={t("concrete-repair.article-title2")} />
      <ArticleParagraph>
        <Trans
          i18nKey={"concrete-repair.paragraph1"}
          components={{ b: <b /> }}
        />
      </ArticleParagraph>
      <ListGenerator listNumber={firstListId} />
      <ListGenerator listNumber={secondListId} />
      <ImageGallery srcList={imageList} height={"316px"} />
      <ListGenerator listNumber={thirdListId} />
      <ArticleParagraph>
        <Trans
          i18nKey={"concrete-repair.paragraph2"}
          components={{ b: <b /> }}
        />
      </ArticleParagraph>
    </div>
  );
};
