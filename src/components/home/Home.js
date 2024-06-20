import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import computerIcon from "./komputer2.jpg";

function Home() {
  return (
    <div className="home">
      <Link to="services/about">
        <button className="home_top_about">O serwerze</button>
      </Link>
      <div className="home_content">
        <img className="icon" src={computerIcon} alt="komputer" />
        <div className="home_right">
          <div className="home_right_title">InterSpecialist Serwer</div>
          <div className="home_right_subtitle">
            Kompleksowe usługi i rozwiązania informatyczne
          </div>
          <Link to="services">
            <button className="home_right_button">START</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
