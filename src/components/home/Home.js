import React from "react";
import "./Home.css";
import plan_wat from "./plan_wat.jpg";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_top">
        <div className="home_top_about">O projekcie</div>
      </div>

      <div className="home_bottom">
        <div className="home_left">
          <img className="plan_wat" src={plan_wat} alt="logo" />
        </div>

        <div className="home_right">
          <div className="home_right_title">GEOPORTAL</div>

          <div className="home_right_subtitle">
            Strona internetowa z interaktywna mapa
          </div>

          <button className="home_right_button">START</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
