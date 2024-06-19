import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { workerIcon } from "./Icon";

function MarkerPlacement() {
  const [position, setPosition] = useState(null);
  return (
    <div>
      <Marker icon={workerIcon} position={[52, 21]}>
        <Popup>aaa</Popup>
      </Marker>
    </div>
  );
}
//
export default MarkerPlacement;
