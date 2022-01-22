import React from "react";
import MenuItem from "./menuitem";
import home from "../assets/icons/home.svg";
import add from "../assets/icons/add.svg";
import movie from "../assets/icons/movie.svg";
import search from "../assets/icons/search.svg";
import serie from "../assets/icons/serie.svg";
import star from "../assets/icons/star.svg";
import "../styles/appbar.css";
export default function AppBarComponent() {
  return (
    <div className="appbar">
      <MenuItem texto="INÍCIO" path={home} />
      <MenuItem texto="PESQUISA" path={search} />
      <MenuItem texto="MINHA LISTA" path={add} />
      <MenuItem texto="ORIGINAIS" path={star} />
      <MenuItem texto="FILMES" path={movie} />
      <MenuItem texto="SÉRIES" path={serie} />
    </div>
  );
}
