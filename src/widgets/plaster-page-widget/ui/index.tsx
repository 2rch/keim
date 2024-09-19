import React from "react";
import { PageTitle } from "../../../shared/ui/page-title";
import { useTranslation } from "react-i18next";
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
        Після розробки в 1878 році першої у світі виключно силікатної фарби{" "}
        <b>KEIM</b>, постало питання подальшого розвитку та збільшення переліку
        вироблених фірмою високоякісних, екологічних та надійних будівельних
        матеріалів різного призначення.
      </ArticleParagraph>
      <ArticleParagraph>
        У зв&apos;язку з цим, логічною та обґрунтованою стала поява в актуальній
        виробничій програмі досить великої кількості штукатурних систем та
        шпаклювальних матеріалів, покликаних органічно доповнити та розширити
        асортиментний ряд фірми <b>KEIMFARBEN GmbH & Co KG</b>, а також посилити
        її позиції на світовому будівельному ринку.
      </ArticleParagraph>
      <ImageGallery srcList={imageList} height={"150px"} />
      <ListGenerator listNumber={firstListId} />
      <ListGenerator listNumber={secondListId} />
      <ArticleParagraph>
        Висока якість штукатурних продуктів <b>KEIM</b> вже давно відома у
        всьому світі. Розроблені спеціально під вапняні та силікатні фарбувальні
        системи власного виробництва, штукатурки та шпаклівки <b>KEIM</b> з
        успіхом застосовуються у багатьох галузях будівництва, реставрації та
        ремонту споруд різного призначення.
      </ArticleParagraph>
    </div>
  );
};
