import React from "react";
import { PageTitle } from "../../../shared/ui/page-title";
import { useTranslation } from "react-i18next";
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
        Найперша силікатна фарба <b>KEIM</b> була винайдена та запатентована ще
        у 1878 році. Перші результати її застосування можна побачити і в наші
        дні, приблизно через 125 років експлуатації без будь-яких ремонтів та
        оновлень. У наступні роки було розроблено і введено у виробничу програму
        чимало інших гідних фарбувальних систем, але всі вони призначалися
        виключно для нанесення на мінеральні основи.
      </ArticleParagraph>
      <ArticleParagraph>
        І ось зовсім недавно асортиментний ряд фірми{" "}
        <b>KEIMFARBEN GmbH & Co KG</b> поповнився інноваційною системою захисту
        деревини <b>KEIM Lignosil®</b>. Це{" "}
        <span className={"additional-page-widget-accent"}>
          {" "}
          перша в світі силікатна фарба для деревини
        </span>{" "}
        та ряд супутніх продуктів, призначених для ремонту та обробки зовнішніх
        та внутрішніх поверхонь у галузі дерев&apos;яного домобудівництва.
      </ArticleParagraph>
      <ImageGallery srcList={imageList} />
      <ListGenerator listNumber={firstListId} />
      <ListGenerator listNumber={secondListId} />
      <ArticleParagraph>
        На сьогоднішній день фірма <b>KEIMFARBEN GmbH & Co KG</b> є єдиним
        виробником силікатних систем фарбування для деревини у світі. А це
        означає, що наші клієнти отримають найнадійніший, екологічно чистий та
        довговічний захист для своїх дерев&apos;яних будинків.
      </ArticleParagraph>
    </div>
  );
};
