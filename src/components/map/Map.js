import React, { useEffect, useState } from "react";
import "./Map.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

function Map() {
  const [wojewodztwa, setWojewodztwa] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      layer.bindPopup(`
      <h1>Dane województwa</h1>
      <strong>Nazwa:</strong> ${feature.properties.JPT_NAZWA_}<br>
      <strong>Powierzchnia:</strong> ${feature.properties.JPT_POWIER}
      `);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Apoligony&maxFeatures=50&outputFormat=application%2Fjson"
        );
        setWojewodztwa(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="map">
      <MapContainer center={[52.2322222, 21.0]} zoom={10}>
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
          <LayersControl.BaseLayer name="Granice województw DB">
            <WMSTileLayer
              layers="granice_wojewodztw"
              url="http://127.0.0.1:8080/geoserver/prge/wms"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Granice województw DB WFS">
            {wojewodztwa ? (
              <GeoJSON data={wojewodztwa} onEachFeature={makePopup} />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;
