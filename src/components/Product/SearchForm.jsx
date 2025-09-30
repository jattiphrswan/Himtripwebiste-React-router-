import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const locations = [
  { name: "Almora", lat: 29.5978, lng: 79.6591 },
  { name: "Nainital", lat: 29.3919, lng: 79.4542 },
  { name: "Rishikesh", lat: 30.0869, lng: 78.2676 },
  { name: "Mussoorie", lat: 30.4595, lng: 78.0666 },
  { name: "Dehradun", lat: 30.3165, lng: 78.0322 },
  { name: "Haridwar", lat: 29.9457, lng: 78.1642 },
  { name: "Kedarnath", lat: 30.7346, lng: 79.0661 },
  { name: "Badrinath", lat: 30.7433, lng: 79.493 },
  { name: "Auli", lat: 30.5446, lng: 79.5833 },
  { name: "Jim Corbett", lat: 29.5300, lng: 78.7746 },
];

const adventures = ["Trekking", "Camping", "Rafting", "Sightseeing", "Skiing", "Paragliding"];

const SearchForm = () => {
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [adventure, setAdventure] = useState("");

  const selectedLocation = locations.find((loc) => loc.name === where);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ where, when, adventure });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center p-4 sm:p-2 space-y-2 sm:space-y-0 sm:space-x-3
                   bg-white/30 backdrop-blur-sm rounded-xl shadow-lg border border-white/40
                   animate-fadeIn"
      >
        {/* Where */}
        <div className="flex-1 relative">
          <select
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 backdrop-blur-sm transition transform hover:scale-105 duration-300"
          >
            <option value="">Where?</option>
            {locations.map((loc) => (
              <option key={loc.name} value={loc.name}>
                {loc.name}
              </option>
            ))}
          </select>

          {/* Map in the background */}
          {selectedLocation && (
            <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden -z-10">
              <MapContainer
                center={[selectedLocation.lat, selectedLocation.lng]}
                zoom={10}
                scrollWheelZoom={false}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                <Marker
                  position={[selectedLocation.lat, selectedLocation.lng]}
                  icon={L.icon({
                    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })}
                >
                  <Popup>{selectedLocation.name}</Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>

        {/* When */}
        <div className="flex-1">
          <input
            type="date"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 backdrop-blur-sm transition transform hover:scale-105 duration-300"
          />
        </div>

        {/* Adventure Type */}
        <div className="flex-1">
          <select
            value={adventure}
            onChange={(e) => setAdventure(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 backdrop-blur-sm transition transform hover:scale-105 duration-300"
          >
            <option value="">Adventure Type</option>
            {adventures.map((adv) => (
              <option key={adv} value={adv}>
                {adv}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="mt-2 sm:mt-0 w-full sm:w-auto bg-[#C2410C] hover:bg-[#00BF63] text-white font-semibold px-6 py-2 rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          Search
        </button>
      </form>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default SearchForm;
