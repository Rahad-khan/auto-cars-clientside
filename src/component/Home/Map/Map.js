import React from 'react';
// import "leaflet/dist/leaflet.css";
import './Map.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const Map = () => {
    const position = [24.84731780267392, 89.37368994626706];
    return (
      <div className='my-10'>
          <h1 className='text-3xl md:text-5xl text-center font-semibold mb-8'>OUR <span className='text-red-600'>LOCATION</span></h1>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
};

export default Map;