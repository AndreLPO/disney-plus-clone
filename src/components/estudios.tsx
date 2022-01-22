import React from "react";
import disney from "../assets/img/disney.png";
import marvel from "../assets/img/marvel.png";
import national from "../assets/img/national.png";
import pixar from "../assets/img/pixar.png";
import starwars from "../assets/img/starwars.png";
import disneyVideo from "../assets/videos/disney.mp4";
import marvelVideo from "../assets/videos/marvel.mp4";
import nationalVideo from "../assets/videos/national.mp4";
import pixarVideo from "../assets/videos/pixar.mp4";
import starwarsVideo from "../assets/videos/starwars.mp4";
import "../styles/estudios.css";
export default function Estudios() {
  return (
    <div className="carroussel">
      <div className="item disney">
        <img src={disney} alt="Logo Disney" />
        <video height={130} loop={true} playsInline autoPlay={true}>
          <source src={disneyVideo} />
        </video>
      </div>

      <div className="item pixar">
        <img src={pixar} alt="Logo Pixar" />
        <video height={130} loop={true} playsInline autoPlay={true}>
          <source src={pixarVideo} />
        </video>
      </div>

      <div className="item marvel">
        <img src={marvel} alt="Logo Marvel" />
        <video height={130} loop={true} playsInline autoPlay={true}>
          <source src={marvelVideo} />
        </video>
      </div>

      <div className="item starwars">
        <img src={starwars} alt="Logo Star Wars" />
        <video height={130} loop={true} playsInline autoPlay={true}>
          <source src={starwarsVideo} />
        </video>
      </div>

      <div className="item national">
        <img src={national} alt="Logo National Geographic" />
        <video height={130} loop={true} playsInline autoPlay={true}>
          <source src={nationalVideo} />
        </video>
      </div>
    </div>
  );
}
