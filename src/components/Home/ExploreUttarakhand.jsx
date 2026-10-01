import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  Compass,
  ArrowRight,
  Heart,
  Star,
  CheckCircle2,
} from "lucide-react";
import { UTTARAKHAND_DESTINATIONS } from "../Backend/BackenData";

const VIBE_CATEGORIES = [
  { id: "all", label: "All Destinations", emoji: "✨" },
  { id: "Spiritual & Sacred", label: "Spiritual & Sacred", emoji: "🛕" },
  { id: "High-Altitude Treks", label: "Treks & Summits", emoji: "🥾" },
  { id: "White Water & Adventure", label: "Rapids & Adventure", emoji: "🚣" },
  { id: "Snow & Winter Slopes", label: "Snow & Slopes", emoji: "❄️" },
  { id: "Lakes & Hill Stations", label: "Lakes & Hills", emoji: "🌊" },
  { id: "Camping & Stargazing", label: "Camping & Stars", emoji: "⛺" },
];

export default function ExploreUttarakhand() {
  const navigate = useNavigate();
  const [activeVibe, setActiveVibe] = useState("all");
  const exploreScrollRef = useRef(null);
  const vibeScrollRef = useRef(null);

  // Scroll helper for sliders
  const scrollContainer = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Filter destinations for the Quick Trip Planner based on active vibe
  const filteredPlannerDests =
    activeVibe === "all"
      ? UTTARAKHAND_DESTINATIONS
      : UTTARAKHAND_DESTINATIONS.filter((item) =>
          item.vibes.includes(activeVibe)
        );

  const handleDestinationClick = (destName) => {
    navigate(`/tours?where=${encodeURIComponent(destName)}`);
  };

  return (
    <section className="relative w-full py-6 sm:py-10">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-orange-100/40 blur-3xl rounded-full" />
      </div>

      <div className="w-full space-y-14">
        {/* ======================================================== */}
        {/* SECTION 1: EXPLORE UTTARAKHAND (Matching "Explore India") */}
        {/* ======================================================== */}
        <div>
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Devbhoomi Highlights</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Explore Uttarakhand
              </h2>
              <p className="mt-1 text-slate-600 text-sm sm:text-base font-normal">
                These popular destinations have a lot to offer
              </p>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollContainer(exploreScrollRef, "left")}
                aria-label="Previous Destinations"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollContainer(exploreScrollRef, "right")}
                aria-label="Next Destinations"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Destination Cards Slider Container */}
          <div className="relative group">
            <div
              ref={exploreScrollRef}
              className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto scrollbar-none pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {UTTARAKHAND_DESTINATIONS.map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => handleDestinationClick(dest.name)}
                  className="snap-start shrink-0 w-[220px] sm:w-[250px] md:w-[270px] cursor-pointer group/card flex flex-col text-left transition-transform duration-300"
                >
                  {/* Card Image Container */}
                  <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/80 mb-3">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />

                    {/* Badge */}
                    {dest.badge && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                        {dest.badge}
                      </span>
                    )}

                    {/* Region Tag */}
                    <div className="absolute bottom-2.5 left-2.5 text-white/90 text-xs font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span className="truncate">{dest.region}</span>
                    </div>
                  </div>

                  {/* Destination Details Below Image */}
                  <div className="px-0.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover/card:text-orange-600 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                      {dest.properties}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Right Scroll Arrow Button (Booking.com style) */}
            <button
              onClick={() => scrollContainer(exploreScrollRef, "right")}
              aria-label="Scroll next"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 shadow-lg flex items-center justify-center hover:bg-orange-50 hover:text-orange-600 transition-all opacity-0 group-hover:opacity-100 z-10 hidden sm:flex cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 2: QUICK AND EASY TRIP PLANNER (From Screenshot) */}
        {/* ======================================================== */}
        <div className="pt-2">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Quick and easy trip planner
              </h2>
              <p className="mt-1 text-slate-600 text-sm sm:text-base font-normal">
                Pick a vibe and explore the top destinations in Uttarakhand
              </p>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollContainer(vibeScrollRef, "left")}
                aria-label="Previous Vibe Destinations"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollContainer(vibeScrollRef, "right")}
                aria-label="Next Vibe Destinations"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Vibe Filter Pills (Booking.com style) */}
          <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none pb-4 pt-1">
            {VIBE_CATEGORIES.map((vibe) => {
              const isActive = activeVibe === vibe.id;
              return (
                <button
                  key={vibe.id}
                  onClick={() => setActiveVibe(vibe.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-orange-50 border-2 border-orange-600 text-orange-800 shadow-xs"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-orange-200 hover:bg-orange-50/50"
                  }`}
                >
                  <span>{vibe.emoji}</span>
                  <span>{vibe.label}</span>
                </button>
              );
            })}
          </div>

          {/* Vibe Destination Cards Slider */}
          <div className="relative group mt-3">
            <div
              ref={vibeScrollRef}
              className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto scrollbar-none pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filteredPlannerDests.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleDestinationClick(item.name)}
                  className="snap-start shrink-0 w-[210px] sm:w-[240px] md:w-[260px] cursor-pointer group/card flex flex-col text-left transition-transform duration-300"
                >
                  {/* Card Thumbnail Image */}
                  <div className="relative h-40 sm:h-48 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/80 mb-2.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50" />

                    {/* Category Tag on Card */}
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      {item.vibes[0]}
                    </span>
                  </div>

                  {/* Destination Info */}
                  <div className="px-0.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover/card:text-orange-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{item.distance}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Right Scroll Arrow Button */}
            <button
              onClick={() => scrollContainer(vibeScrollRef, "right")}
              aria-label="Scroll next"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 shadow-lg flex items-center justify-center hover:bg-orange-50 hover:text-orange-600 transition-all opacity-0 group-hover:opacity-100 z-10 hidden sm:flex cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
