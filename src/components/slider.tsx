import React from "react";
import SliderItem from "./slider-item";
import "../styles/slider.css";
import direita from "../assets/icons/seta_direita.svg";
import esquerda from "../assets/icons/seta_esquerda.svg";

export default function SliderComponent() {
  return (
    <div className="visivel">
      <div className="fundo-seta">
        <img src={esquerda} alt="Seta de navegação" className="seta esquerda" />
        <img src={direita} alt="Seta de navegação" className="seta direita" />
      </div>
      <div className="slider" id="slide">
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </div>
    </div>
  );
}
