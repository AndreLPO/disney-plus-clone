import React from "react";
import "../styles/menu.css";
type MenuItemProps = {
  path: string;
  texto: string;
};

export default function MenuItem(props: MenuItemProps) {
  return (
    <div className="menuitem">
      <img src={props.path} alt="Icone do menu" />
      <p>{props.texto}</p>
    </div>
  );
}
