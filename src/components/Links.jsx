import React from "react";
import style from "./Links.module.css";
import {v4 as uuidv4} from "uuid";
export const Links = () => {
  const links = ["Services", "Projects", "About"];
  return (
    <div className={style.linksDiv}>
      {links.map((link,index) => (
        <div key={uuidv4()}>{link}</div>
      ))}
    </div>
  );
};
