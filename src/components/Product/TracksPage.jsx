import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Compass,
  Mountain,
  Clock,
  MapPin,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Eye,
  X,
  Search,
  SlidersHorizontal,
  Flame,
  Sparkles,
  Phone,
  HelpCircle,
} from "lucide-react";
import { UTTARAKHAND_TRACKS } from "../Backend/BackenData";
import bannerImg from "../../assets/places/banner.webp";

const formatINR = (price) => `₹${price.toLocaleString("en-IN")}`;

export default function TracksPage() {
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState(null);

  const filteredTracks = UTTARAKHAND_TRACKS.filter((track) => {
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      track.difficulty.toLowerCase().includes(selectedDifficulty.toLowerCase());

    const matchesSearch =
      searchQuery === "" ||
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDifficulty && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-slate-50 pt-20">
      {/* Hero Banner */}
      <div
        className="relative w-full h-[50vh] sm:h-[60vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[0.5px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-200 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-emerald-300" />
            <span>Devbhoomi High Trails & Expeditions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading leading-tight tracking-tight drop-shadow-md">
            Uttarakhand Trekking Tracks
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Scale sky-scraping 15,000+ ft summits, walk ancient pilgrim trails, and explore emerald glacial tarns with NIM-certified mountain expedition leaders.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1440px] 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Quick Highlights Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <div className="text-center p-2">
            <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-heading">
              15,500 ft
            </span>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Highest Glacial Altitude
            </p>
          </div>
          <div className="text-center p-2 border-l border-slate-100">
            <span className="text-2xl sm:text-3xl font-black text-teal-600 font-heading">
              100% NIM
            </span>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Certified Mountain Leaders
            </p>
          </div>
          <div className="text-center p-2 border-l-0 md:border-l border-slate-100">
            <span className="text-2xl sm:text-3xl font-black text-amber-600 font-heading">
              4-Season
            </span>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              High-Altitude Geodesic Tents
            </p>
          </div>
          <div className="text-center p-2 border-l border-slate-100">
            <span className="text-2xl sm:text-3xl font-black text-sky-600 font-heading">
              Zero
            </span>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Hidden Fees & Free Rescheduling
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by track name, region, or peak..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
            />
          </div>

          {/* Difficulty Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 md:pb-0">
            {[
              { id: "all", label: "All Levels" },
              { id: "easy", label: "Easy to Moderate" },
              { id: "moderate", label: "Moderate" },
              { id: "difficult", label: "Difficult / Strenuous" },
            ].map((diff) => (
              <button
                key={diff.id}
                onClick={() => setSelectedDifficulty(diff.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedDifficulty === diff.id
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTracks.map((track) => {
            const discountPercent =
              track.originalPrice && track.originalPrice > track.price
                ? Math.round(
                    ((track.originalPrice - track.price) / track.originalPrice) * 100
                  )
                : null;

            return (
              <div
                key={track.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
              >
                {/* Top Accent Gradient Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500" />

                {/* Track Photo */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 tracking-wider uppercase">
                      {track.badge}
                    </span>

                    <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white text-xs font-bold">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      <span>{track.durationDays} Days</span>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold z-10">
                    <div className="inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
                      <Mountain className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{track.altitudeFt}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
                      <Compass className="w-3.5 h-3.5 text-amber-400" />
                      <span>{track.difficulty}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <div className="flex items-center gap-1 text-slate-600 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{track.region}</span>
                      </div>
                      <div className="flex items-center gap-1 font-bold text-slate-800">
                        <span className="text-amber-500">★</span>
                        <span>{track.rating}</span>
                        <span className="text-slate-400 font-normal">
                          ({track.reviews})
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                      {track.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {track.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-1.5 my-3.5">
                      {track.tags?.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-2">
                    <div className="flex items-center justify-between mb-3.5">
                      <div>
                        <span className="text-[11px] text-slate-400 block uppercase font-semibold">
                          Starting from
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl font-black text-slate-900">
                            {formatINR(track.price)}
                          </span>
                          {track.originalPrice && (
                            <span className="text-xs text-slate-400 line-through">
                              {formatINR(track.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>

                      {discountPercent && (
                        <span className="px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                          {discountPercent}% OFF
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedTrack(track)}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-semibold text-xs transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Trail Details</span>
                      </button>
                      <button
                        onClick={() => navigate(`/booking/${track.id}`)}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-sm shadow-emerald-600/30 transition-all active:scale-95 cursor-pointer"
                      >
                        <span>Book Track</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Essential Himalayan Trekking Safety Guide */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              Safety & Mountain Etiquette
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading mt-3">
              How HimTrip Ensures 100% Trail Safety
            </h3>
            <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
              Every Himalayan track is led by certified mountaineers trained at the Nehru Institute of Mountaineering (NIM) and the Himalayan Mountaineering Institute (HMI).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-bold text-sm text-white">Medical Monitoring Twice Daily</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Routine SpO2 pulse-oximeter checkups and mountain sickness monitoring every morning and evening.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Mountain className="w-5 h-5 text-teal-400 mb-2" />
                <h4 className="font-bold text-sm text-white">Oxygen & High-Altitude First Aid</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Dedicated portable medical oxygen cylinders and full trauma first aid kits accompany every single batch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedTrack && (
        <TrackDetailModal
          track={selectedTrack}
          onClose={() => setSelectedTrack(null)}
          onBook={() => {
            const trackId = selectedTrack.id;
            setSelectedTrack(null);
            navigate(`/booking/${trackId}`);
          }}
        />
      )}
    </div>
  );
}

// Reuse TrackDetailModal from TracksSection
function TrackDetailModal({ track, onClose, onBook }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-xs animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 my-auto flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0 bg-slate-900">
          <img
            src={track.image}
            alt={track.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/20" />

          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              {track.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/20">
              {track.region}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading leading-tight">
              {track.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-200 font-normal line-clamp-1">
              {track.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 sm:p-4 bg-slate-50 border-b border-slate-200 text-xs shrink-0">
          <div className="flex items-center gap-2">
            <Mountain className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold uppercase">
                Peak Altitude
              </span>
              <span className="font-bold text-slate-800">{track.altitudeFt}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold uppercase">
                Duration
              </span>
              <span className="font-bold text-slate-800">
                {track.durationDays}D / {track.durationNights}N
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-sky-600 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold uppercase">
                Difficulty
              </span>
              <span className="font-bold text-slate-800">{track.difficulty}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold uppercase">
                Start Point
              </span>
              <span className="font-bold text-slate-800 truncate block">
                {track.startPoint}
              </span>
            </div>
          </div>
        </div>

        <div className="flex border-b border-slate-200 px-4 sm:px-6 shrink-0 bg-white gap-2 sm:gap-6 text-xs sm:text-sm font-semibold overflow-x-auto scrollbar-none">
          {[
            { id: "overview", label: "Overview" },
            { id: "itinerary", label: "Day-by-Day Route" },
            { id: "inclusions", label: "What's Included" },
            { id: "gear", label: "Gear Checklist" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? "border-emerald-600 text-emerald-700 font-bold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 text-slate-700 text-sm">
          {activeTab === "overview" && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  Trail Overview
                </h4>
                <p className="leading-relaxed text-slate-600">{track.overview}</p>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4">
                <h5 className="font-bold text-emerald-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-700" />
                  <span>Best Season to Trek</span>
                </h5>
                <p className="text-emerald-800 text-sm font-medium">
                  {track.bestSeason}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Key Trail Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {track.tags?.map((tag, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "itinerary" && (
            <div className="space-y-4">
              <div className="border-l-2 border-emerald-500/40 ml-2 space-y-6">
                {track.itinerary?.map((item) => (
                  <div key={item.day} className="relative pl-6">
                    <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-xs" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                      Day {item.day}
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 mt-0.5">
                      {item.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "inclusions" && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                What's Included in Your Expedition
              </h4>
              <div className="space-y-2.5">
                {track.inclusions?.map((inc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      {inc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "gear" && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                Essential Packing Checklist
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {track.packingList?.map((gear, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{gear}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-[11px] text-slate-400 block uppercase font-semibold">
              All Inclusive Per Person
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900">
                {formatINR(track.price)}
              </span>
              {track.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  {formatINR(track.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              <span>Ask Guide</span>
            </a>

            <button
              onClick={onBook}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-emerald-600/30 transition-all active:scale-95 cursor-pointer"
            >
              <span>Book This Track</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
