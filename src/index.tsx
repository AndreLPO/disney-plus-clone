import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import reportWebVitals from "./reportWebVitals";
import Estudios from "./components/estudios";
import AppBarComponent from "./components/appbar";
import Footer from "./components/footer";
import SliderComponent from "./components/slider";

ReactDOM.render(
  <React.StrictMode>
    <AppBarComponent />
    <SliderComponent />
    <Estudios />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
