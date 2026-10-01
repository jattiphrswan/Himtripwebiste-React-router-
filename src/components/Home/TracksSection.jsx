import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Phone,
} from "lucide-react";
import { UTTARAKHAND_TRACKS } from "../Backend/BackenData";

const TRACK_CATEGORIES = [
  { id: "all", label: "All Mountain Tracks" },
  { id: "Summit Climbs", label: "Summit Climbs" },
  { id: "Glacial Alpine Tarns", label: "Glacial Lakes" },
  { id: "Velvet Bugyals (Meadows)", label: "Alpine Meadows (Bugyals)" },
  { id: "Historic Ridge Passes", label: "Historic Ridge Passes" },
  { id: "Sanctuary Wilderness", label: "Sanctuary Expeditions" },
];

const formatINR = (price) => `₹${price.toLocaleString("en-IN")}`;

// Helper for difficulty badge styling using theme colors (Orange/Amber/Rose)
const getDifficultyBadge = (difficulty) => {
  const d = (difficulty || "").toLowerCase();
  if (d.includes("difficult") || d.includes("challenging") || d.includes("strenuous")) {
    return "bg-rose-50 text-rose-700 border-rose-200";
  }
  if (d.includes("easy")) {
    return "bg-amber-50 text-amber-700 border-amber-200";
  }
  return "bg-orange-50 text-orange-700 border-orange-200";
};

export default function TracksSection() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTrack, setSelectedTrack] = useState(null);
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredTracks =
    activeCategory === "all"
      ? UTTARAKHAND_TRACKS
      : UTTARAKHAND_TRACKS.filter((t) => t.category === activeCategory);

  return (
    <section className="relative w-full py-8 sm:py-14" id="tracks">
      {/* Background Decorative Warm Theme Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[650px] h-[350px] bg-gradient-to-r from-orange-100/40 via-amber-100/30 to-orange-50/20 blur-3xl rounded-full" />
      </div>

      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-6">
          <div>
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 shadow-xs mb-3">
              <Compass className="w-4 h-4 text-orange-600 animate-spin-slow" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-orange-800 font-heading">
                Himalayan Trails & Mountain Tracks
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
              Uttarakhand{" "}
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent">
                Trekking Tracks
              </span>
            </h2>

            <p className="mt-2.5 text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Step into ancient shepherd routes, emerald glacial tarns, and sky-touching 15,000+ ft summits led by NIM & IMF certified mountain leaders.
            </p>
          </div>

          {/* Slider Navigation Arrows Only (Slider is fine, option toggle removed) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollSlider("left")}
              aria-label="Previous Track"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 text-slate-700 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollSlider("right")}
              aria-label="Next Track"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 text-slate-700 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none pb-4 mb-3">
          {TRACK_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-sm shadow-orange-600/30"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-orange-200 hover:text-orange-700 hover:bg-orange-50/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tracks Horizontal Slider Container */}
        <div className="relative group">
          <div
            ref={sliderRef}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scrollbar-none pb-6 pt-2 px-1 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredTracks.map((track) => (
              <div
                key={track.id}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[370px]"
              >
                <TrackCard
                  track={track}
                  onOpenModal={() => setSelectedTrack(track)}
                  onBook={() => navigate(`/booking/${track.id}`)}
                />
              </div>
            ))}
          </div>

          {/* Floating Next/Prev Arrow for Desktop */}
          <button
            onClick={() => scrollSlider("right")}
            aria-label="Scroll next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 shadow-lg flex items-center justify-center hover:bg-orange-50 hover:text-orange-600 transition-all opacity-0 group-hover:opacity-100 z-10 hidden sm:flex cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Track Detail Modal */}
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
    </section>
  );
}

// --- Track Card Component (Only Theme Colors) ---
function TrackCard({ track, onOpenModal, onBook }) {
  const discountPercent =
    track.originalPrice && track.originalPrice > track.price
      ? Math.round(((track.originalPrice - track.price) / track.originalPrice) * 100)
      : null;

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-8px_rgba(234,88,12,0.22)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
      {/* Top Accent Gradient Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />

      {/* Image Container */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100 shrink-0">
        <img
          src={track.image}
          alt={track.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 tracking-wider uppercase shadow-xs">
            {track.badge || "Himalayan Track"}
          </span>

          <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white text-xs font-bold shadow-xs">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>{track.durationDays} Days</span>
          </div>
        </div>

        {/* Bottom Over-Image Stats */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold z-10">
          <div className="inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
            <Mountain className="w-3.5 h-3.5 text-amber-400" />
            <span>{track.altitudeFt}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
            <Compass className="w-3.5 h-3.5 text-orange-400" />
            <span>{track.difficulty}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Region & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <div className="flex items-center gap-1 text-slate-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
              <span className="truncate">{track.region}</span>
            </div>
            <div className="flex items-center gap-1 font-bold text-slate-800">
              <span className="text-amber-500">★</span>
              <span>{track.rating}</span>
              <span className="text-slate-400 font-normal">({track.reviews})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1">
            {track.title}
          </h3>

          {/* Subtitle */}
          <p className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {track.subtitle}
          </p>

          {/* Tag Chips */}
          <div className="flex flex-wrap gap-1.5 my-3">
            {track.tags?.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-orange-50/70 border border-orange-200/50 text-orange-800 text-[11px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer / Price & Actions */}
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
              <span className="px-2 py-1 rounded-lg bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onOpenModal}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-orange-300 hover:bg-orange-50 text-slate-700 hover:text-orange-700 font-semibold text-xs transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Trail Details</span>
            </button>
            <button
              onClick={onBook}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-bold text-xs shadow-sm shadow-orange-500/25 transition-all active:scale-95 cursor-pointer"
            >
              <span>Book Track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Interactive Track Detail Modal (Theme Colors) ---
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
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0 bg-slate-900">
          <img
            src={track.image}
            alt={track.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/20" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              {track.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/20">
              {track.region}
            </span>
          </div>

          {/* Bottom Title Area */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading leading-tight">
              {track.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-200 font-normal line-clamp-1">
              {track.subtitle}
            </p>
          </div>
        </div>

        {/* Quick Stats Grid Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 sm:p-4 bg-slate-50 border-b border-slate-200 text-xs shrink-0">
          <div className="flex items-center gap-2">
            <Mountain className="w-4 h-4 text-orange-600 shrink-0" />
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
            <Compass className="w-4 h-4 text-orange-500 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold uppercase">
                Difficulty
              </span>
              <span className="font-bold text-slate-800">{track.difficulty}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
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

        {/* Modal Navigation Tabs */}
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
                  ? "border-orange-600 text-orange-700 font-bold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Tab Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 text-slate-700 text-sm">
          {activeTab === "overview" && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  Trail Overview
                </h4>
                <p className="leading-relaxed text-slate-600">
                  {track.overview}
                </p>
              </div>

              <div className="bg-orange-50/70 border border-orange-200 rounded-2xl p-4">
                <h5 className="font-bold text-orange-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-orange-700" />
                  <span>Best Season to Trek</span>
                </h5>
                <p className="text-orange-800 text-sm font-medium">
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
                      <Sparkles className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "itinerary" && (
            <div className="space-y-4">
              <div className="border-l-2 border-orange-500/40 ml-2 space-y-6">
                {track.itinerary?.map((item) => (
                  <div key={item.day} className="relative pl-6">
                    <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-orange-600 border-2 border-white shadow-xs" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-700 block">
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
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
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
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>{gear}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Direct Booking CTA */}
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
              <span className="text-xs font-bold text-orange-600">
                (Taxes & Permits Included)
              </span>
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
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/25 transition-all active:scale-95 cursor-pointer"
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
