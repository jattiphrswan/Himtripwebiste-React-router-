import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Compass,
  Calendar,
  Search,
  Flame,
  ChevronDown,
  Check,
  Sparkles
} from "lucide-react";

const DESTINATIONS = [
  { id: "Anywhere in Uttarakhand", name: "Anywhere in Uttarakhand", region: "All Regions", icon: "🏔️" },
  { id: "Rishikesh", name: "Rishikesh", region: "Yoga & River Rafting", icon: "🚣" },
  { id: "Kedarnath", name: "Kedarnath & Badrinath", region: "Sacred Char Dham", icon: "🛕" },
  { id: "Nainital", name: "Nainital & Bhimtal", region: "Kumaon Lake District", icon: "🌊" },
  { id: "Auli", name: "Auli & Joshimath", region: "Snow Slopes & Skiing", icon: "❄️" },
  { id: "Govindghat", name: "Valley of Flowers", region: "UNESCO Alpine Valley", icon: "🌸" },
  { id: "Chopta", name: "Chopta & Tungnath", region: "Mini Switzerland & Summit", icon: "🌲" },
  { id: "Almora", name: "Almora & Kumaon", region: "Heritage Pine Hills", icon: "⛰️" },
  { id: "Mussoorie", name: "Mussoorie & Dehradun", region: "Queen of the Hills", icon: "🌄" },
];

const ADVENTURES = [
  { id: "", name: "All Experiences", desc: "Browse all adventures", icon: "✨" },
  { id: "Trekking", name: "Trekking & Hiking", desc: "Kedarkantha, Valley of Flowers, Har Ki Dun", icon: "🥾" },
  { id: "Adventure Sports", name: "River Rafting & Aquatic", desc: "Grade III/IV Ganges rapids in Rishikesh", icon: "🚣" },
  { id: "Pilgrimage", name: "Pilgrimage & Spirituality", desc: "Char Dham Yatra & Ganga Aarti", icon: "🛕" },
  { id: "Winter Sports", name: "Winter Snow Sports", desc: "Auli ski slopes & snow expeditions", icon: "❄️" },
  { id: "Family", name: "Family Sightseeing", desc: "Comfortable lake & hill station tours", icon: "👨‍👩‍👧‍👦" },
  { id: "Kumaon", name: "Kumaon Hills Explorer", desc: "Traditional culture & ancient temples", icon: "🌲" },
];

const DURATIONS = [
  { value: "15", label: "Any Duration", desc: "1 to 15+ Days" },
  { value: "3", label: "Weekend (1 - 3 Days)", desc: "Short mountain escapes" },
  { value: "7", label: "Classic (4 - 7 Days)", desc: "Comprehensive regional tours" },
  { value: "12", label: "Expedition (8+ Days)", desc: "Deep Himalayan circuits" },
];

const QUICK_TRENDING = [
  { label: "Kedarnath Yatra", dest: "Kedarnath", adv: "Pilgrimage" },
  { label: "Rishikesh Rafting", dest: "Rishikesh", adv: "Adventure Sports" },
  { label: "Valley of Flowers", dest: "Govindghat", adv: "Trekking" },
  { label: "Auli Snow", dest: "Auli", adv: "Winter Sports" },
  { label: "Chopta Camping", dest: "Chopta", adv: "Trekking" },
];

export default function SearchForm() {
  const [where, setWhere] = useState("Anywhere in Uttarakhand");
  const [adventure, setAdventure] = useState("");
  const [duration, setDuration] = useState("15");
  const [openDropdown, setOpenDropdown] = useState(null); // 'where' | 'adv' | 'dur' | null

  const formRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setOpenDropdown(null);
    const query = new URLSearchParams();
    if (where && where !== "Anywhere in Uttarakhand") {
      query.append("where", where);
    }
    if (adventure) {
      query.append("adventure", adventure);
    }
    if (duration && duration !== "15") {
      query.append("duration", duration);
    }
    navigate(`/tours?${query.toString()}`);
  };

  const handleQuickSelect = (item) => {
    setWhere(item.dest);
    setAdventure(item.adv);
    const query = new URLSearchParams();
    if (item.dest) query.append("where", item.dest);
    if (item.adv) query.append("adventure", item.adv);
    navigate(`/tours?${query.toString()}`);
  };

  const selectedDestObj = DESTINATIONS.find((d) => d.id === where) || DESTINATIONS[0];
  const selectedAdvObj = ADVENTURES.find((a) => a.id === adventure) || ADVENTURES[0];
  const selectedDurObj = DURATIONS.find((d) => d.value === duration) || DURATIONS[0];

  return (
    <div ref={formRef} className="w-full max-w-5xl mx-auto relative px-2">
      {/* Search Bar Container */}
      <div className="bg-white rounded-2xl sm:rounded-full p-2.5 sm:p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-white/90 transition-all duration-300 relative z-30">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 lg:gap-0">
          
          {/* Compartment 1: Where To */}
          <div
            onClick={() => setOpenDropdown(openDropdown === "where" ? null : "where")}
            className={`flex-1 flex items-center gap-3.5 px-4 py-3 rounded-xl sm:rounded-full transition-all cursor-pointer select-none ${
              openDropdown === "where"
                ? "bg-orange-50 ring-2 ring-orange-500/30"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="w-11 h-11 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 shadow-sm">
              <MapPin className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-orange-600">
                Where To?
              </span>
              <div className="flex items-center justify-between gap-1">
                <span className="block font-bold text-gray-900 text-sm sm:text-base truncate">
                  {selectedDestObj.name}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                    openDropdown === "where" ? "rotate-180 text-orange-600" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-10 bg-gray-200 mx-1"></div>

          {/* Compartment 2: Experience */}
          <div
            onClick={() => setOpenDropdown(openDropdown === "adv" ? null : "adv")}
            className={`flex-1 flex items-center gap-3.5 px-4 py-3 rounded-xl sm:rounded-full transition-all cursor-pointer select-none ${
              openDropdown === "adv"
                ? "bg-teal-50 ring-2 ring-teal-500/30"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="w-11 h-11 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 shadow-sm">
              <Compass className="w-5 h-5 text-teal-600" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-teal-700">
                Experience
              </span>
              <div className="flex items-center justify-between gap-1">
                <span className="block font-bold text-gray-900 text-sm sm:text-base truncate">
                  {selectedAdvObj.name}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                    openDropdown === "adv" ? "rotate-180 text-teal-600" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-10 bg-gray-200 mx-1"></div>

          {/* Compartment 3: Duration */}
          <div
            onClick={() => setOpenDropdown(openDropdown === "dur" ? null : "dur")}
            className={`flex-1 flex items-center gap-3.5 px-4 py-3 rounded-xl sm:rounded-full transition-all cursor-pointer select-none ${
              openDropdown === "dur"
                ? "bg-blue-50 ring-2 ring-blue-500/30"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-blue-700">
                Duration
              </span>
              <div className="flex items-center justify-between gap-1">
                <span className="block font-bold text-gray-900 text-sm sm:text-base truncate">
                  {selectedDurObj.label}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                    openDropdown === "dur" ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="pt-2 lg:pt-0 lg:pl-2 shrink-0">
            <button
              type="button"
              onClick={handleSearch}
              className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold rounded-xl sm:rounded-full shadow-lg shadow-orange-600/30 transition-all duration-300 transform hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2.5 group"
            >
              <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-base tracking-wide font-heading">Find Tours</span>
            </button>
          </div>
        </div>

        {/* --- Custom Dropdown 1: Destinations --- */}
        {openDropdown === "where" && (
          <div className="absolute top-[105%] left-0 sm:left-4 w-full sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-fadeIn max-h-80 overflow-y-auto">
            <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1">
              Popular Uttarakhand Destinations
            </div>
            {DESTINATIONS.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setWhere(item.id);
                  setOpenDropdown(null);
                }}
                className={`p-2.5 rounded-xl transition flex items-center justify-between cursor-pointer ${
                  where === item.id ? "bg-orange-50 text-orange-900 font-bold" : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <span className="block text-sm font-bold text-gray-900 truncate">
                      {item.name}
                    </span>
                    <span className="block text-xs text-gray-500 truncate">
                      {item.region}
                    </span>
                  </div>
                </div>
                {where === item.id && <Check className="w-4 h-4 text-orange-600 shrink-0" />}
              </div>
            ))}
          </div>
        )}

        {/* --- Custom Dropdown 2: Experience --- */}
        {openDropdown === "adv" && (
          <div className="absolute top-[105%] left-0 sm:left-1/4 w-full sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-fadeIn max-h-80 overflow-y-auto">
            <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1">
              Select Adventure Style
            </div>
            {ADVENTURES.map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  setAdventure(item.id);
                  setOpenDropdown(null);
                }}
                className={`p-2.5 rounded-xl transition flex items-center justify-between cursor-pointer ${
                  adventure === item.id ? "bg-teal-50 text-teal-900 font-bold" : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <span className="block text-sm font-bold text-gray-900 truncate">
                      {item.name}
                    </span>
                    <span className="block text-xs text-gray-500 truncate">
                      {item.desc}
                    </span>
                  </div>
                </div>
                {adventure === item.id && <Check className="w-4 h-4 text-teal-600 shrink-0" />}
              </div>
            ))}
          </div>
        )}

        {/* --- Custom Dropdown 3: Duration --- */}
        {openDropdown === "dur" && (
          <div className="absolute top-[105%] left-0 sm:left-1/2 w-full sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-fadeIn max-h-80 overflow-y-auto">
            <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1">
              Trip Length
            </div>
            {DURATIONS.map((item) => (
              <div
                key={item.value}
                onClick={() => {
                  setDuration(item.value);
                  setOpenDropdown(null);
                }}
                className={`p-2.5 rounded-xl transition flex items-center justify-between cursor-pointer ${
                  duration === item.value ? "bg-blue-50 text-blue-900 font-bold" : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <div className="min-w-0">
                  <span className="block text-sm font-bold text-gray-900">
                    {item.label}
                  </span>
                  <span className="block text-xs text-gray-500">
                    {item.desc}
                  </span>
                </div>
                {duration === item.value && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Popular Trending Tags Underneath */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
        <span className="font-extrabold text-white flex items-center gap-1.5 px-2 py-1 drop-shadow-md">
          <Flame className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse" />
          <span>Popular Searches:</span>
        </span>
        {QUICK_TRENDING.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => handleQuickSelect(item)}
            className="px-3.5 py-1.5 bg-white/20 hover:bg-orange-600 text-white font-semibold rounded-full backdrop-blur-md border border-white/40 hover:border-orange-500 transition-all duration-200 transform hover:scale-105 shadow-sm"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
