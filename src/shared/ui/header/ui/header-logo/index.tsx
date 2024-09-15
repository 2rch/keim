import React from "react";
import mainLogo from "../../../../assets/header/img.png";
import "./index.scss";

export const HeaderLogo = () => (
  <a href={"/"}>
    <img className={"header-logo"} src={mainLogo} alt={"LUX"} />
  </a>
);
