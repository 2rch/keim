import React from "react";
import { useTranslation } from "react-i18next";
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
        Створення <b>Вільгельмом КАЙМОМ</b> першої силікатної фарби в 1878
        збіглося за часом з масовим промисловим використанням, на ті часи
        нового, будівельного матеріалу - залізобетон. Ринок, що стрімко
        розвивається, досить швидко оцінив технологічні переваги і широкий
        спектр застосування залізобетону і вивів його в ряд основних сучасних
        будівельних матеріалів. Колосальне, за своїм обсягом, застосування
        бетону не могло залишити фахівців <b>KEIMFARBEN GmbH & Co KG</b>{" "}
        байдужими, і їх природною реакцією на це стала поява систем інноваційних
        та високоякісних продуктів <b>KEIM Сonсretal®</b> та{" "}
        <b>KEIM Porosil®</b>, спрямованих на ремонт та захист бетонних
        будівельних елементів та .
      </ArticleParagraph>
      <ListGenerator listNumber={firstListId} />
      <ListGenerator listNumber={secondListId} />
      <ImageGallery srcList={imageList} height={"316px"} />
      <ListGenerator listNumber={thirdListId} />
      <ArticleParagraph>
        Традиційно висока якість та широкий спектр представлених продуктів,
        призначених для ремонту та захисту бетону, дозволяють фірмі{" "}
        <b>KEIMFARBEN GmbH & Co KG</b> залишатися беззаперечним лідером на ринку
        високотехнологічних виключно мінеральних захисних фарбувальних систем.
      </ArticleParagraph>
    </div>
  );
};
