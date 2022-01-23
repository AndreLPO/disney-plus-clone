import React from "react";
import SliderItem from "./slider-item";
import "../styles/slider.css";

export default function SliderComponent() {
  return (
    <div className="slider">
      <SliderItem />
      <SliderItem />
      <SliderItem />
      <SliderItem />
      <SliderItem />
      <SliderItem />
    </div>
  );
}
