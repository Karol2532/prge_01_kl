import React, { useEffect, useState } from "react";
import "./Map.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

// import MarkerPlacement from "./MarkerPlacement";

function Map() {
  const [workers, setWorkers] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      layer.bindPopup(`
      <h1>Dane pracownika</h1>
      <strong>Imię:</strong> ${feature.properties.name}<br>
      <strong>Nazwisko:</strong> ${feature.properties.lastname}<br>
      <strong>Miasto:</strong> ${feature.properties.city}
      `);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aworkers&maxFeatures=50&outputFormat=application%2Fjson"
        );
        setWorkers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const [workplaces, setWorkplaces] = useState(null);

  const makePopup2 = (feature, layer) => {
    if (feature.properties) {
      layer.bindPopup(`
      <h1>Dane oddziału</h1>
      <strong>Nazwa:</strong> ${feature.properties.name}<br>
      <strong>Miasto:</strong> ${feature.properties.city}<br>
      <strong>Kraj:</strong> ${feature.properties.country}
      `);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aworkplaces&maxFeatures=50&outputFormat=application%2Fjson"
        );
        setWorkplaces(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="map">
      <MapContainer center={[52.27, 19.24]} zoom={6}>
        <LayersControl>
          <LayersControl.BaseLayer name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google">
            <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Satelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Pracownicy firmy">
            {workers ? (
              <GeoJSON data={workers} onEachFeature={makePopup} />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Oddziały firmy">
            {workplaces ? (
              <GeoJSON data={workplaces} onEachFeature={makePopup2} />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
          {/* <MarkerPlacement /> */}
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;
