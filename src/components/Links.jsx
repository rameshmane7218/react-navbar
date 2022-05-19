import React from "react";
import style from "./Links.module.css";
export const Links = () => {
  const links = ["Services", "Projects", "About"];
  return (
    <div className={style.linksDiv}>
      {links.map((link,index) => (
        <div key={index}>{link}</div>
      ))}
    </div>
  );
};
