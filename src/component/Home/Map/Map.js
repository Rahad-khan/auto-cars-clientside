import React from 'react';
// import "leaflet/dist/leaflet.css";
import './Map.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
    const position = [24.84731780267392, 89.37368994626706];
    return (
      <div className="my-10" id="location">
        <div className='h-1/2'>
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-10">
            <span className="border-b-2 pb-2 border-red-400">
              Our <span className="text-red-800">Location</span>
            </span>
          </h1>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
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
      </div>
    );
};

export default Map;