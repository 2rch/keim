import React from "react";
import { headerVideoSources, leftHeaderButtons } from "../config";
import { HeaderButton } from "./header-button";
import { HeaderLogo } from "./header-logo";
import "./index.scss";
import { HeaderVideo } from "./header-video";

export const Header = () => {
  return (
    <div>
      <HeaderVideo sourceList={headerVideoSources} />
      <header className={"header"}>
        <HeaderLogo />
        <div className={"header-nav"}>
          {leftHeaderButtons.map((button, i) => (
            <HeaderButton key={i} {...button} />
          ))}
        </div>
      </header>
    </div>
  );
};
