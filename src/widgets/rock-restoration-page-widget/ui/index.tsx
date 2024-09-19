import React from "react";
import { useTranslation } from "react-i18next";
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
        Розробка в 1878 році першої у світі виключно силікатної фарби спричинила
        розвиток низки технічно обґрунтованих і принципово нових напрямків,
        здатних забезпечити просування та лідерство торгової марки <b>KEIM</b>{" "}
        не тільки як виробника високоякісних фарбувальних систем, але і як
        надійного постачальника широкого спектру товарів та послуг в області
        оздоблення, ремонту та реставрації фасадів будь-якого типу.
      </ArticleParagraph>
      <ArticleParagraph>
        Один із цих напрямків був покликаний вирішувати питання пов&apos;язані з
        реставрацією натурального каменю історичних фасадів та пам&apos;яток
        архітектури. Асортиментний ряд <b>KEIMFARBEN GmbH & Co KG</b> серйозно
        доповнився новими продуктами та системами, а партнери отримали
        можливість застосування високотехнологічних якісних матеріалів під час
        реставрації історичних будівель та споруд.
      </ArticleParagraph>
      <ListGenerator listNumber={firstListId} />
      <ImageGallery srcList={imageList} />
      <ListGenerator listNumber={secondListId} />
      <ListGenerator listNumber={thirdListId} />
      <ArticleParagraph>
        Високотехнологічні реставраційні матеріали <b>KEIM</b> застосовуються в
        усьому світі і давно вже стали синонімами таких як «якість»,
        «надійність» і «ефективність».
      </ArticleParagraph>
    </div>
  );
};
