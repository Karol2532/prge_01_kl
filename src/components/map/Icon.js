import L, { tooltip } from "leaflet";
import worker from "./worker.jpg";

const leafIcon = L.Icon.extend({
  Option: {
    iconSize: [10, 10],
    iconAnchor: [50, 0],
    tooltipAnchor: [0, 0],
  },
});

export const workerIcon = new leafIcon({ iconUrl: worker });
