import React, { useEffect, useState } from "react";
import SliderItem from "./slider-item";
import "../styles/slider.css";
import direita from "../assets/icons/seta_direita.svg";
import esquerda from "../assets/icons/seta_esquerda.svg";

export default function SliderComponent() {
  const [balls, setBalls] = useState<any>();
  const [quant, setQuant] = useState<any>();
  const [atual, setAtual] = useState(0);
  useEffect(() => {
    setBalls(document.querySelector(".slider"));
    setQuant(document.querySelectorAll(".slider .slider-item"));
    setAtual(0);
  }, []);

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
      <div className="seletor">
        {quant.map(() => {
          return <p>Teste</p>;
        })}
      </div>
    </div>
  );
}
