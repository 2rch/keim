import React from "react";
import mainLogo from "../../../../assets/header/img.png";
import "./index.scss";
import { Link } from "react-router-dom";

export const HeaderLogo = () => (
  <Link to={"/"}>
    <img className={"header-logo"} src={mainLogo} alt={"LUX"} />
  </Link>
);
