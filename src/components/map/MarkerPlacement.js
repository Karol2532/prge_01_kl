import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { workerIcon } from "./Icon";

// function MarkerPlacement() {
//   const [position, setPosition] = useState(null);
//   return (
//     <div>
//       <Marker icon={workerIcon} position={[52, 21]}>
//         <Popup>aaa</Popup>
//       </Marker>
//     </div>
//   );
// }

function MarkerPlacement({ points }) {
  return (
    <>
      {points.map((point, index) => (
        <Marker key={index} icon={workerIcon} position={[point.lat, point.lng]}>
          <Popup>
            <h1>Dane pracownika</h1>
            <strong>Imię:</strong> {point.name}
            <br />
            <strong>Nazwisko:</strong> {point.lastname}
            <br />
            <strong>Miasto:</strong> {point.city}
          </Popup>
        </Marker>
      ))}
    </>
  );
}
export default MarkerPlacement;
