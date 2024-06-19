import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import workericon from "./workers.png";
import workplaceicon from "./workplaces.png";
import locationicon from "./location.png";

function Services() {
  return (
    <div className="services">
      <div className="services_bottom">
        <Link to="workerlist" className="services_option">
          <div className="services_icon">
            <img className="worker3icon" src={workericon} alt="pracownicy" />
          </div>
          <div className="services_label">Pracownicy</div>
        </Link>
        <Link to="workplacelist" className="services_option">
          <div className="services_icon">
            <img
              className="workplace3icon"
              src={workplaceicon}
              alt="miejsca pracy"
            />
          </div>
          <div className="services_label">Oddziały</div>
        </Link>
        <Link to="map" className="services_option">
          <div className="services_icon">
            <img
              className="location3icon"
              src={locationicon}
              alt="lokalizacja"
            />
          </div>
          <div className="services_label">Lokalizacja</div>
        </Link>
      </div>
    </div>
  );
}

export default Services;
