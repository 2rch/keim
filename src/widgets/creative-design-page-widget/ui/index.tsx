import React from "react";
import { useTranslation } from "react-i18next";
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
        Фантазія людини не знає меж. Яскраві, неординарні особистості завжди
        прагнули самовираження та індивідуальності практично у всіх сферах своєї
        діяльності. Середовище – не виняток.
      </ArticleParagraph>
      <ArticleParagraph>
        На сьогоднішній день креативне оформлення фасадів та інтер&apos;єрів
        набуло дуже широкого поширення як за кордоном, так і в Україні. Фірма{" "}
        <b>KEIMFARBEN GmbH & Co KG</b>, що володіє найпередовішими технологіями
        з виробництва та застосування найкращих у світі силікатних будівельних
        матеріалів, не могла залишитися осторонь цього процесу.
      </ArticleParagraph>
      <ArticleParagraph>
        В результаті виник окремий напрямок виключно ексклюзивних, високоякісних
        дизайнерських матеріалів для креативного оформлення на базі силікатів та
        вапна.
      </ArticleParagraph>
      <ImageGallery srcList={firstImageList} />
      <ListGenerator listNumber={firstListId} />
      <ImageGallery srcList={secondImageList} height={"190px"} />
      <ListGenerator listNumber={secondListId} />
      <ListGenerator listNumber={thirdListId} />
      <ImageGallery srcList={thirdImageList} />
      <ListGenerator listNumber={fourthListId} />
      <ArticleParagraph>
        Висока якість, довговічність і багатогранність ексклюзивних систем{" "}
        <b>KEIM</b> здатні дуже яскраво і неординарно підкреслити
        індивідуальність і самобутність найсміливіших, креативних і талановитих
        дизайнерських ідей.
      </ArticleParagraph>
    </div>
  );
};
