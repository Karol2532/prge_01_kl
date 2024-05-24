import React, { useEffect } from "react";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import axios from "axios";

function Map() {
  useEffect(() => {
    console.log("aaa");
    const getData = () => {
      axios
        .get(
          // "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Agranice_wojewodztw_db&maxFeatures=50&outputFormat=application%2Fjson"
          "https://jsonplaceholder.typicode.com/posts/1"
        )
        .then((dane) => {
          console.log(dane);
        });
    };
    getData();
  }, []);

  return (
    <div>
      <MapContainer center={[52.232222, 21.0]} zoom={6}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="GoogleSatelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenTopoMap">
            <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Granice wojewodztw db">
            <WMSTileLayer
              layers="granice_wojewodztw_db"
              url="http://127.0.0.1:8080/geoserver/prge/wms"
            />
          </LayersControl.BaseLayer>
          {/* <LayersControl.Overlay name="Granice wojewodztwa db_wfs">
            <GeoJSON
              data={}
            />
          </LayersControl.BaseLayer> */}
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;
