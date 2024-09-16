import card1 from "../../../shared/assets/home/card1.png";
import card2 from "../../../shared/assets/home/card2.jpg";
import card3 from "../../../shared/assets/home/card3.jpg";
import card4 from "../../../shared/assets/home/card4.jpg";
import card5 from "../../../shared/assets/home/card5.jpg";
import card6 from "../../../shared/assets/home/card6.jpg";
import card7 from "../../../shared/assets/home/card7.jpg";
import card8 from "../../../shared/assets/home/card8.jpg";

export interface HomePageCardContent {
  title: string;
  testArray: string[];
  linkArray: HomePageCardLink[];
  img: string;
}

export interface HomePageCardLink {
  title: string;
  link: string;
}

export const homePageCardContent = (t: (prompt: string) => string) => [
  {
    title: t("home.card1.title"),
    textArray: [t("home.card1.text1"), t("home.card1.text2")],
    linkArray: [
      {
        title: t("home.card1.link1"),
        link: "http://www.ortodox.donbass.com/anons/p2009/sobor_gorl.htm",
      },
      {
        title: t("home.card1.link2"),
        link: "/objects?id=1",
      },
    ],
    img: card1,
  },
  {
    title: t("home.card2.title"),
    textArray: [t("home.card2.text1"), t("home.card2.text2")],
    linkArray: [
      {
        title: t("home.card2.link1"),
        link: "http://ru.wikipedia.org/wiki/%D0%94%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C",
      },
      {
        title: t("home.card2.link2"),
        link: "/objects?id=2",
      },
    ],
    img: card2,
  },
  {
    title: t("home.card3.title"),
    textArray: [t("home.card3.text1"), t("home.card3.text2")],
    linkArray: [
      {
        title: t("home.card3.link1"),
        link: "http://www.udp.ua/ru/contacts",
      },
      {
        title: t("home.card3.link2"),
        link: "/objects?id=3",
      },
    ],
    img: card3,
  },
  {
    title: t("home.card4.title"),
    textArray: [t("home.card4.text1"), t("home.card4.text2")],
    linkArray: [
      {
        title: t("home.card4.link1"),
        link: "http://primetour.ua/ru/company/articles/Blagotvoritelnyie-uchrezhdeniya-Zaytsevyih.html",
      },
      {
        title: t("home.card4.link2"),
        link: "/objects?id=4",
      },
    ],
    img: card4,
  },
  {
    title: t("home.card5.title"),
    textArray: [t("home.card5.text1"), t("home.card5.text2")],
    linkArray: [
      {
        title: t("home.card5.link1"),
        link: "http://old.pochaev.org.ua/?p=film/zagaec",
      },
      {
        title: t("home.card5.link2"),
        link: "/objects?id=5",
      },
    ],
    img: card5,
  },
  {
    title: t("home.card6.title"),
    textArray: [t("home.card6.text1"), t("home.card6.text2")],
    linkArray: [
      {
        title: t("home.card6.link1"),
        link: "http://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BC_%D0%98%D0%BA%D1%81%D0%BA%D1%8E%D0%BB%D1%8C-%D0%93%D0%B8%D0%BB%D1%8C%D0%B4%D0%B5%D0%BD%D0%B1%D0%B0%D0%BD%D0%B4%D0%B0",
      },
      {
        title: t("home.card6.link2"),
        link: "/objects?id=6",
      },
    ],
    img: card6,
  },
  {
    title: t("home.card7.title"),
    textArray: [t("home.card7.text1"), t("home.card7.text2")],
    linkArray: [
      {
        title: t("home.card7.link1"),
        link: "http://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D0%BE%D0%BD%D0%BD%D0%B0_%D0%9C%D0%B0%D0%B3%D0%B4%D0%B5%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%B0%D0%B2%D0%B0",
      },
      {
        title: t("home.card7.link2"),
        link: "/objects?id=7",
      },
    ],
    img: card7,
  },
  {
    title: t("home.card8.title"),
    textArray: [t("home.card8.text1")],
    linkArray: [
      {
        title: t("home.card8.link1"),
        link: "/objects?id=8",
      },
    ],
    img: card8,
  },
];
