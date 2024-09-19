import React from "react";
import { useTranslation } from "react-i18next";
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

export const PaintSystemWidget = () => {
  const { t } = useTranslation();
  return (
    <div className={"paint-system-widget"}>
      <div className={"paint-system-widget-title"}>
        {t("paint-system.title")}
      </div>
      <div className={"paint-system-widget-article-title"}>
        {articleTitles.map((article) => (
          <p key={article}>{t(article)}</p>
        ))}
      </div>
      <div className={"paint-system-widget-paragraph"}>
        Найперша силікатна фарба <b>KEIM</b> була винайдена та запатентована ще
        у 1878 році. Всі наступні роки, аж до наших днів, продовжується розвиток
        і вдосконалення унікальних силікатних технологій, спрямованих на
        розробку та виробництво нових надійних та економічних систем фарбування,
        здатних задовольнити постійно зростаючі запити світового будівельного
        ринку.
      </div>
      <div className={"paint-system-widget-paragraph"}>
        У процесі роботи виникла необхідність створення та просування історичних
        вапняних фарб. У результаті, на сьогоднішній день виробнича програма
        фірми <b>KEIMFARBEN GmbH & Co KG</b> насичена найрізноманітнішими
        системами фарбування і технологіями їх застосування.
      </div>
      <ImageGallery srcList={imagesList1} />
      <ListGenerator listNumber={firstListId} />
      <ImageGallery srcList={imagesList2} height={"155px"} />
      <ListGenerator listNumber={secondListId} />
      <ListGenerator listNumber={thirdListId} />
      <div className={"paint-system-widget-paragraph"}>
        Всі без винятку фарби та фарбувальні системи <b>ТМ KEIM</b> відповідають
        найвищим вимогам сучасного будівельного ринку, є надійними, екологічними
        та довговічними. Крім того, фірма <b>KEIMFARBEN GmbH & Co KG</b> з
        моменту свого створення і до сьогодні займає лідируючу позицію у світі
        серед творців та виробників високоякісних силікатних фарб.
      </div>
    </div>
  );
};
