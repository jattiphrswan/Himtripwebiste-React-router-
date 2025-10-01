import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import toursData from "../Backend/BackenData"; // Your backend data

const SearchForm = () => {
  const [where, setWhere] = useState("");
  const [adventure, setAdventure] = useState("");
  const [locations, setLocations] = useState([]);
  const [adventures, setAdventures] = useState([]);
  const navigate = useNavigate();

  // Load unique locations & adventures from backend
  useEffect(() => {
    const uniqueLocations = [...new Set(toursData.map((tour) => tour.destination))];
    const uniqueAdventures = [...new Set(toursData.map((tour) => tour.adventure))];
    setLocations(uniqueLocations);
    setAdventures(uniqueAdventures);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams();
    if (where) query.append("where", where);
    if (adventure) query.append("adventure", adventure);
    navigate(`/tours?${query.toString()}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-20">
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center p-4 space-y-2 sm:space-y-0 sm:space-x-3
                   bg-white/30 backdrop-blur-sm rounded-xl shadow-lg border border-white/40
                   animate-fadeIn"
      >
        {/* Location */}
        <div className="flex-1 w-full">
          <select
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 backdrop-blur-sm transition transform hover:scale-105 duration-300"
          >
            <option value="">Select Location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Adventure Type */}
        <div className="flex-1 w-full">
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
          className="w-full sm:w-auto flex justify-center items-center bg-[#C2410C] hover:bg-[#00BF63] text-white font-semibold px-6 py-2 rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <span className="hidden sm:inline">Search</span>
          <FaSearch className="sm:hidden text-lg" />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
