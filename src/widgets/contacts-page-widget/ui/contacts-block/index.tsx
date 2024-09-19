import React from "react";
import { address, contactBlock } from "../../config";
import "./index.scss";

export const ContactsBlock = () => {
  return (
    <div className={"contacts-block"}>
      <p>{address}</p>
      {contactBlock.map((element) => (
        <p key={element.value}>
          <a href={`${element.type}:${element.value}`}>{element.view}</a>
        </p>
      ))}
    </div>
  );
};
