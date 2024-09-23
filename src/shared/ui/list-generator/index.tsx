import React from "react";
import { Trans, useTranslation } from "react-i18next";
import "./index.scss";

interface ListGeneratorProps {
  listNumber: number;
}

export const ListGenerator = ({ listNumber }: ListGeneratorProps) => {
  const { t } = useTranslation();
  switch (listNumber) {
    case 1:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("paint-system.article-title3")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"paint-system.list1.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list1.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list1.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list1.paragraph4"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list1.paragraph5"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list1.paragraph6"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list1.paragraph7"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list1.paragraph8"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list1.paragraph9"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list1.paragraph10"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list1.paragraph11"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("paint-system.article-title4")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"paint-system.list2.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list2.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list2.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list2.paragraph4"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list2.paragraph5"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list2.paragraph6"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list2.paragraph7"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list2.paragraph8"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"paint-system.list2.paragraph9"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("paint-system.article-title5")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"paint-system.list3.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 4:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("concrete-repair.article-title3")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"concrete-repair.list1.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 5:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("concrete-repair.article-title4")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"concrete-repair.list2.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list2.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list2.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list2.paragraph4"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list2.paragraph5"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list2.paragraph6"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list2.paragraph7"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 6:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("concrete-repair.article-title5")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"concrete-repair.list3.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list3.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list3.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list3.paragraph4"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list3.paragraph5"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list3.paragraph6"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list3.paragraph7"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list3.paragraph8"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list3.paragraph9"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list3.paragraph10"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"concrete-repair.list3.paragraph11"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 7:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("plaster.article-title3")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph4"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph5"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph6"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph7"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph8"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph9"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph10"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph11"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph12"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph13"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph14"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph15"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph16"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list1.paragraph17"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 8:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("plaster.article-title4")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"plaster.list2.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list2.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list2.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list2.paragraph4"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"plaster.list2.paragraph5"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 9:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("rock-restoration.article-title3")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"rock-restoration.list1.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"rock-restoration.list1.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"rock-restoration.list1.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 10:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("rock-restoration.article-title4")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"rock-restoration.list2.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"rock-restoration.list2.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"rock-restoration.list2.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"rock-restoration.list2.paragraph4"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"rock-restoration.list2.paragraph5"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 11:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("rock-restoration.article-title5")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"rock-restoration.list3.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"rock-restoration.list3.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"rock-restoration.list3.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 12:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("creative-design.article-title4")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"creative-design.list1.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list1.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list1.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list1.paragraph4"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list1.paragraph5"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list1.paragraph6"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 13:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("creative-design.article-title5")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"creative-design.list2.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list2.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list2.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list2.paragraph4"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list2.paragraph5"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list2.paragraph6"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list2.paragraph7"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list2.paragraph8"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 14:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("creative-design.article-title6")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"creative-design.list3.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list3.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list3.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 15:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("creative-design.article-title3")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"creative-design.list4.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list4.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list4.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"creative-design.list4.paragraph4"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 16:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("additional.article-title3")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"additional.list1.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"additional.list1.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"additional.list1.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"additional.list1.paragraph4"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"additional.list1.paragraph5"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"additional.list1.paragraph6"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"additional.list1.paragraph7"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"additional.list1.paragraph8"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    case 17:
      return (
        <>
          <div className={"list-generator-title"}>
            {t("additional.article-title4")}
          </div>
          <div className={"list-generator-content"}>
            <p>
              <Trans
                i18nKey={"additional.list2.paragraph1"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"additional.list2.paragraph2"}
                components={{ b: <b /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey={"additional.list2.paragraph3"}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </>
      );
    default:
      return <></>;
  }
};

// Example case
/*case n:
       return (
         <>
           <div className={"list-generator-title"}>
             {t("concrete-repair.article-title3")}
           </div>
           <div className={"list-generator-content"}>
             <p></p>
           </div>
         </>
       );*/
