import React from "react";
import "./index.scss";

interface SocialLinksProps {
  socialLinks: {
    link: string;
    img: string;
  }[];
}

export const SocialLinks = ({ socialLinks }: SocialLinksProps) => {
  return (
    <div className={"social-links"}>
      {socialLinks.map((media) => (
        <a key={media.link} className={"social-link"} href={media.link}>
          <img src={media.img} alt={"Social Link"} />
        </a>
      ))}
    </div>
  );
};
