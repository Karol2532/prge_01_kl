import L from "leaflet";
import worker from "./workerpin.png";
import workplace from "./workplacepin.png";

const workerPin = L.icon({
  iconUrl: worker,
  iconSize: [40, 54],
  iconAnchor: [32, 54],
});

const workerPinHover = L.icon({
  iconUrl: worker,
  iconSize: [50, 64],
  iconAnchor: [32, 64],
});

const workplacePin = L.icon({
  iconUrl: workplace,
  iconSize: [40, 54],
  iconAnchor: [32, 54],
});

const workplacePinHover = L.icon({
  iconUrl: workplace,
  iconSize: [50, 64],
  iconAnchor: [32, 64],
});

const pointToLayer = (feature, latlng, icon, headers) => {
  const popupContent = (feature.properties, headers);

  const marker = L.marker(latlng, { icon }).bindPopup(popupContent);

  marker.on("mouseover", () => {
    if (feature.properties.type === "worker") {
      marker.setIcon(workerPinHover);
    } else if (feature.properties.type === "workplace") {
      marker.setIcon(workplacePinHover);
    }
  });

  marker.on("mouseout", () => {
    marker.setIcon(icon);
  });

  return marker;
};

export {
  workerPin,
  workerPinHover,
  workplacePin,
  workplacePinHover,
  pointToLayer,
};
