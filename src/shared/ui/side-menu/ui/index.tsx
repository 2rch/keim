import React, { useState } from "react";
import { menuItems } from "../config";
import { SideMenuButton } from "./side-menu-button";
import "./index.scss";
import { SearchPrompt } from "./search-prompt";
import { useNavigate } from "react-router-dom";

export const SideMenu = () => {
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
    </div>
  );
};
