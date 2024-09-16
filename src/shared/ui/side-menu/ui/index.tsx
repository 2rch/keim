import React, { useState } from "react";
import { lastMenuItem, menuItems, menuPicture } from "../config";
import { SideMenuButton } from "./side-menu-button";
import "./index.scss";
import { SearchPrompt } from "./search-prompt";
import { useNavigate } from "react-router-dom";
import { PictureLink } from "./picture-link";
import { useTranslation } from "react-i18next";

export const SideMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const handleSearch = () => {
    navigate(`/search?prompt=${search}`);
  };
  return (
    <div className={"side-menu"}>
      <SearchPrompt
        value={search}
        onChange={setSearch}
        onEnter={handleSearch}
      />
      {menuItems.map((item) => (
        <SideMenuButton key={item.title} {...item} />
      ))}
      <PictureLink
        img={menuPicture.img}
        link={menuPicture.link}
        placeholder={t(menuPicture.placeholder)}
      />
      <SideMenuButton key={lastMenuItem.title} {...lastMenuItem} />
    </div>
  );
};
