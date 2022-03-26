import React from "react";

import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { MapContainer, TileLayer } from "react-leaflet";

import mapMarkerImg from "../images/map-marker.svg";

import "leaflet/dist/leaflet.css";
import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Campina Grande</strong>
          <span>Paraíba</span>
        </footer>
      </aside>

      <MapContainer
        center={[-7.2219196, -35.9043105]}
        zoom={15}
        style={{ width: "100%", heigth: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        ></TileLayer>
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
