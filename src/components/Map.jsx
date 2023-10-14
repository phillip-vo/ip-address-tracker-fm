import React, { useContext, useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { AppContext } from "../context/AppContext";
import { isEmpty } from "../utils/utils";
import { Icon } from "leaflet";

const SetMapOnSearch = () => {
  const { data } = useContext(AppContext);
  const map = useMap();
  if (!isEmpty(data)) {
    map.setView([data.location.lat, data.location.lng], map.getZoom());
  }
  return null;
};

const LocationMarker = () => {
  const { data } = useContext(AppContext);
  const [position, setPosition] = useState(null);
  const locationIcon = new Icon({
    iconUrl: "images/icon-location.svg",
    iconSize: [40, 50],
  });

  useEffect(() => {
    if (!isEmpty(data)) {
      setPosition([data.location.lat, data.location.lng]);
    }
  }, [data]);

  return position === null ? null : (
    <Marker position={position} icon={locationIcon} />
  );
};

const Map = () => {
  const [lat, setLat] = useState(34.04915);
  const [lng, setLng] = useState(-118.09462);

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={14}
      zoomControl={false}
      scrollWheelZoom={false}
      className="w-screen h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      <SetMapOnSearch />
    </MapContainer>
  );
};

export default Map;
