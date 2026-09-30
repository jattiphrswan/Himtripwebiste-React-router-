import React, { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import himImage from "../../assets/places/kedarnath.png";
import toursData from "../Backend/BackenData";
import {
  MapPin,
  Clock,
  Star,
  Heart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Eye,
  X,
  Compass,
  CheckCircle2,
  Tag,
  Flame,
  SlidersHorizontal,
  RotateCcw,
  Filter,
  ChevronDown,
  Check,
  Search,
  Calendar,
} from "lucide-react";

const initialTours = toursData;

// Price formatter
const formatINR = (price) =>
  price !== null && price !== undefined
    ? `₹${price.toLocaleString("en-IN")}`
    : null;

// Tour highlights generator
const getTourHighlights = (tour) => {
  const category = (tour.category || "").toLowerCase();
  const style = (tour.style || "").toLowerCase();

  if (category.includes("pilgrim") || style.includes("pilgrim")) {
    return ["VIP Darshan Assist", "Sattvic Meals & Stay", "Priest Guided"];
  }
  if (category.includes("trek") || style.includes("trek")) {
    return ["Certified Mountain Guide", "Warm Tents & Gear", "Medical Oxygen"];
  }
  if (category.includes("adventure") || style.includes("sports")) {
    return ["Grade III/IV Rapids", "Certified IRF Captains", "Riverside Camp"];
  }
  return ["Private Mountain Cab", "Lakeview / Valley Stay", "Family Friendly"];
};

// --- Upgraded Wild & Compact Tour Card Component ---
const TourCard = ({ tour, isLiked, onToggleWishlist, onQuickView }) => {
  const discountPercent =
    tour.originalPrice && tour.originalPrice > tour.price
      ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
      : null;

  const highlights = getTourHighlights(tour);

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_6px_25px_-6px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(234,88,12,0.22)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
      {/* Top Accent Gradient Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500" />

      {/* Image Container with Balanced Panoramic Height */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 shrink-0">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80";
          }}
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 pointer-events-none" />

        {/* Top Left Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-10">
          <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 tracking-wider uppercase shadow-xs">
            {tour.category || tour.style}
          </span>

          {tour.onSale && (
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-rose-500 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md">
              <Tag className="w-3 h-3" />
              <span>{discountPercent ? `${discountPercent}% OFF` : "OFFER"}</span>
            </span>
          )}
        </div>

        {/* Top Right Actions */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <button
            onClick={() => onQuickView(tour)}
            title="Quick View"
            className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/80 flex items-center justify-center border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={(e) => onToggleWishlist(e, tour.id)}
            title={isLiked ? "Saved to favorites" : "Save to favorites"}
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md text-slate-700 hover:text-rose-500 flex items-center justify-center shadow-md transition-all active:scale-90 cursor-pointer"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isLiked ? "fill-rose-500 text-rose-500" : "text-slate-700"
              }`}
            />
          </button>
        </div>

        {/* Bottom Image Info Strip */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold z-10">
          <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px]">{tour.duration}D / {tour.duration - 1 || 1}N</span>
          </div>

          <div className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-amber-300 font-bold shadow-xs">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-white">{tour.rating}</span>
            <span className="text-[10px] text-slate-300 font-normal">
              ({tour.reviews})
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Section - Compact & Balanced */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Destination */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 mb-1.5 uppercase tracking-wide">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-orange-500" />
            <span className="truncate">{tour.destination}</span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-1 font-heading mb-2 group-hover:text-orange-600 transition-colors">
            {tour.title}
          </h3>

          {/* Feature Highlights Pills */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {highlights.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100/90 px-2.5 py-0.5 rounded-lg border border-slate-200/50"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Section */}
        <div className="pt-3 border-t border-slate-100 mt-auto">
          <div className="flex items-end justify-between mb-3">
            <div>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Starting From
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-heading">
                  {formatINR(tour.price)}
                </span>
                {tour.originalPrice && tour.originalPrice > tour.price && (
                  <span className="text-xs text-slate-400 line-through">
                    {formatINR(tour.originalPrice)}
                  </span>
                )}
              </div>
              <span className="block text-[10px] text-emerald-700 font-semibold mt-0.5">
                All Taxes & Permits Included
              </span>
            </div>

            <div className="text-right">
              <span className="inline-block text-[11px] font-bold text-orange-700 bg-orange-50 border border-orange-200/80 px-2 py-0.5 rounded-lg">
                {tour.style}
              </span>
            </div>
          </div>

          {/* Dual Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onQuickView(tour)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span className="truncate">Quick View</span>
            </button>

            <Link
              to={`/booking/${tour.id}`}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-amber-600 shadow-md shadow-orange-500/25 transition-all duration-200 active:scale-95"
            >
              <span className="truncate">Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Quick View Modal Component ---
const QuickViewModal = ({ tour, onClose, onToggleWishlist, isLiked }) => {
  if (!tour) return null;

  const discountPercent =
    tour.originalPrice && tour.originalPrice > tour.price
      ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
      : null;

  const highlights = getTourHighlights(tour);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider">
                {tour.category || tour.style}
              </span>
              {discountPercent && (
                <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-bold uppercase tracking-wider">
                  {discountPercent}% OFF
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              {tour.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{tour.destination}</span>
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
            <div>
              <span className="block text-[11px] font-bold text-slate-400 uppercase">Duration</span>
              <span className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                {tour.duration} Days
              </span>
            </div>
            <div>
              <span className="block text-[11px] font-bold text-slate-400 uppercase">Style</span>
              <span className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                {tour.style}
              </span>
            </div>
            <div>
              <span className="block text-[11px] font-bold text-slate-400 uppercase">Rating</span>
              <span className="text-sm sm:text-base font-bold text-amber-600 font-heading flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {tour.rating} ({tour.reviews})
              </span>
            </div>
          </div>

          {/* Included In This Expedition */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 font-heading">
              Key Highlights & Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                <span>NIM / IMF Mountain Certified Captain</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>24/7 Mountain SOS & Concierge</span>
              </div>
            </div>
          </div>

          {/* Price & Booking Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-500">Price per traveler:</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900 font-heading">
                  {formatINR(tour.price)}
                </span>
                {tour.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    {formatINR(tour.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={(e) => onToggleWishlist(e, tour.id)}
                className="p-3 rounded-xl border border-slate-300 hover:border-rose-400 text-slate-700 hover:text-rose-500 transition-colors cursor-pointer"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isLiked ? "fill-rose-500 text-rose-500" : ""
                  }`}
                />
              </button>

              <Link
                to={`/booking/${tour.id}`}
                onClick={onClose}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all active:scale-95"
              >
                <span>Proceed to Booking</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main TourSearchResults Component ---
export default function TourSearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialWhere = searchParams.get("where") || "Anywhere in Uttarakhand";
  const initialAdv = searchParams.get("adventure");
  const initialDuration = parseInt(searchParams.get("duration")) || 15;
  const initialQuery = searchParams.get("q") || "";

  const [filters, setFilters] = useState({
    search: initialQuery,
    destination: initialWhere,
    styles: initialAdv ? [initialAdv] : [],
    duration: initialDuration,
    maxBudget: 0,
    sort: "Relevance",
  });

  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState({});
  const [quickViewTour, setQuickViewTour] = useState(null);
  const [viewMode, setViewMode] = useState("wide");

  useEffect(() => {
    const where = searchParams.get("where");
    const adv = searchParams.get("adventure");
    const dur = searchParams.get("duration");
    const q = searchParams.get("q");

    if (where || adv || dur || q) {
      setFilters((prev) => ({
        ...prev,
        destination: where || prev.destination,
        styles: adv ? [adv] : prev.styles,
        duration: dur ? parseInt(dur) : prev.duration,
        search: q || prev.search,
      }));
    }
  }, [searchParams]);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleStyleToggle = (style) => {
    setFilters((prev) => ({
      ...prev,
      styles: prev.styles.includes(style)
        ? prev.styles.filter((s) => s !== style)
        : [...prev.styles, style],
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      search: "",
      destination: "Anywhere in Uttarakhand",
      styles: [],
      duration: 15,
      maxBudget: 0,
      sort: "Relevance",
    });
  };

  const handleToggleWishlist = (e, tourId) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [tourId]: !prev[tourId],
    }));
  };

  const destinationsList = [
    "Anywhere in Uttarakhand",
    "Kedarnath",
    "Rishikesh",
    "Nainital",
    "Auli",
    "Dehradun",
    "Almora",
    "Mussoorie",
  ];

  const styleOptions = [
    { label: "Pilgrimage", icon: "🛕" },
    { label: "Trekking", icon: "🥾" },
    { label: "Adventure Sports", icon: "🌊" },
    { label: "Family", icon: "👨‍👩‍👧" },
    { label: "Winter Sports", icon: "❄️" },
    { label: "Sightseeing", icon: "🏔️" },
  ];

  // Filtering & Sorting
  const filteredAndSortedTours = useMemo(() => {
    let results = initialTours.filter((tour) => {
      // Search text
      if (filters.search.trim()) {
        const query = filters.search.toLowerCase();
        const matchesTitle = tour.title.toLowerCase().includes(query);
        const matchesDest = tour.destination.toLowerCase().includes(query);
        const matchesStyle = (tour.style || "").toLowerCase().includes(query);
        const matchesCat = (tour.category || "").toLowerCase().includes(query);
        if (!matchesTitle && !matchesDest && !matchesStyle && !matchesCat) {
          return false;
        }
      }

      // Tour style
      const meetsStyle =
        filters.styles.length === 0 || filters.styles.includes(tour.style);

      // Budget
      const meetsBudget =
        filters.maxBudget === 0 || tour.price <= filters.maxBudget;

      // Destination
      const meetsDestination =
        filters.destination === "Anywhere in Uttarakhand" ||
        tour.destination.toLowerCase().includes(filters.destination.toLowerCase());

      // Duration
      const meetsDuration = tour.duration <= filters.duration;

      return meetsStyle && meetsBudget && meetsDestination && meetsDuration;
    });

    switch (filters.sort) {
      case "Price (Low to High)":
        results.sort((a, b) => a.price - b.price);
        break;
      case "Price (High to Low)":
        results.sort((a, b) => b.price - a.price);
        break;
      case "Duration (Shortest)":
        results.sort((a, b) => a.duration - b.duration);
        break;
      case "Reviews":
        results.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return results;
  }, [filters]);

  const activeFiltersCount =
    (filters.search ? 1 : 0) +
    (filters.destination !== "Anywhere in Uttarakhand" ? 1 : 0) +
    filters.styles.length +
    (filters.duration < 15 ? 1 : 0) +
    (filters.maxBudget > 0 ? 1 : 0);

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans pb-16">
      {/* 1. Dramatic Hero Header Banner */}
      <div className="relative w-full overflow-hidden bg-slate-950 text-white pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: `url(${himImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/30 backdrop-blur-md border border-orange-400/40 text-orange-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 animate-fadeUp">
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>Discover Devbhoomi Uttarakhand</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-heading animate-fadeUp">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              Himalayan Escape
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed animate-fadeUp">
            Explore handcrafted temple yatras, high-altitude alpine treks, river rafting camps, and serene valley retreats.
          </p>

          {/* Integrated Live Search Input Bar */}
          <div className="max-w-2xl mx-auto pt-3 animate-fadeUp">
            <div className="relative flex items-center bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/90 p-1.5 focus-within:ring-2 focus-within:ring-orange-500">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Search by circuit, temple or trek (e.g. Kedarnath, Auli, Rafting, Valley of Flowers)..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full px-3 py-2.5 bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none"
              />
              {filters.search && (
                <button
                  onClick={() => handleFilterChange("search", "")}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer mr-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Result Counter Pill */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-white font-medium shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Found {filteredAndSortedTours.length} Verified Uttarakhand Expeditions</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Container: Sidebar + Tours Grid - Full Page Container Width */}
      <div className="w-full max-w-[1680px] 2xl:max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start w-full">
          {/* Mobile Filter Toggle Drawer Overlay */}
          {showFilters && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-xs"
              onClick={() => setShowFilters(false)}
            />
          )}

          {/* Left Sidebar Filter Panel (Compact & Sticky on Desktop) */}
          <aside
            className={`fixed inset-y-0 left-0 z-50 w-80 max-w-full bg-white p-6 shadow-2xl transition-transform duration-300 overflow-y-auto lg:static lg:z-10 lg:w-72 xl:w-76 2xl:w-80 shrink-0 lg:p-6 lg:rounded-3xl lg:border lg:border-slate-200/90 lg:shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:sticky lg:top-24 ${
              showFilters ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2 text-slate-900 font-bold font-heading">
                <SlidersHorizontal className="w-5 h-5 text-orange-600" />
                <span className="text-lg">Filter Expeditions</span>
              </div>

              <div className="flex items-center gap-2">
                {activeFiltersCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 lg:hidden"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Destination Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-heading">
                  Destination (Town / Region)
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500 pointer-events-none" />
                  <select
                    value={filters.destination}
                    onChange={(e) => handleFilterChange("destination", e.target.value)}
                    className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition-colors cursor-pointer appearance-none"
                  >
                    {destinationsList.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Tour Style Filter (Chips) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 font-heading">
                  Expedition Style
                </label>
                <div className="space-y-2">
                  {styleOptions.map((item) => {
                    const isChecked = filters.styles.includes(item.label);
                    const count = initialTours.filter(
                      (t) => t.style === item.label
                    ).length;

                    return (
                      <label
                        key={item.label}
                        onClick={() => handleStyleToggle(item.label)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all duration-200 select-none ${
                          isChecked
                            ? "bg-orange-50/80 border-orange-300 text-orange-900 shadow-xs"
                            : "bg-slate-50/60 border-slate-200/80 text-slate-700 hover:bg-slate-100/70"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                              isChecked
                                ? "bg-orange-600 border-orange-600 text-white"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{item.icon}</span>
                          <span className="font-semibold">{item.label}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-bold">
                          {count}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Duration Slider Filter */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider font-heading">
                    Max Duration
                  </label>
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                    Up to {filters.duration} Days
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="15"
                  value={filters.duration}
                  onChange={(e) =>
                    handleFilterChange("duration", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1">
                  <span>2 Days (Weekend)</span>
                  <span>15+ Days</span>
                </div>
              </div>

              {/* Budget Filter */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider font-heading">
                    Budget Limit
                  </label>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    {filters.maxBudget === 0
                      ? "Any Budget"
                      : `Under ${formatINR(filters.maxBudget)}`}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                  <button
                    onClick={() => handleFilterChange("maxBudget", 0)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-colors cursor-pointer border ${
                      filters.maxBudget === 0
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    Any
                  </button>
                  <button
                    onClick={() => handleFilterChange("maxBudget", 15000)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-colors cursor-pointer border ${
                      filters.maxBudget === 15000
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    &lt; ₹15k
                  </button>
                  <button
                    onClick={() => handleFilterChange("maxBudget", 30000)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-colors cursor-pointer border ${
                      filters.maxBudget === 30000
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    &lt; ₹30k
                  </button>
                </div>
              </div>

              {/* Reset All Button */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>Clear All Filters</span>
                </button>
              )}
            </div>
          </aside>

          {/* Main Tours Grid & Top Bar */}
          <main className="flex-1 min-w-0 w-full space-y-6">
            {/* Top Control Bar: Mobile trigger, result count & sort */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Mobile Filter Button */}
              <div className="flex items-center justify-between w-full sm:w-auto gap-3">
                <button
                  onClick={() => setShowFilters(true)}
                  className="inline-flex lg:hidden items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 font-bold text-xs cursor-pointer"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filter Tours ({activeFiltersCount})</span>
                </button>

                <p className="text-xs sm:text-sm font-semibold text-slate-700">
                  Showing <span className="font-bold text-orange-600">{filteredAndSortedTours.length}</span> of {initialTours.length} tours
                </p>
              </div>

              {/* View Layout Toggle & Sort */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
                {/* 4 Cards vs 3 Cards View Toggle */}
                <div className="hidden sm:inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
                  <button
                    onClick={() => setViewMode("wide")}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      viewMode === "wide"
                        ? "bg-white text-orange-600 font-bold shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Wild Wide (4 Col)
                  </button>
                  <button
                    onClick={() => setViewMode("compact")}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      viewMode === "compact"
                        ? "bg-white text-orange-600 font-bold shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Panoramic (3 Col)
                  </button>
                </div>

                {/* Sort By Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                    Sort:
                  </span>
                  <div className="relative">
                    <select
                      value={filters.sort}
                      onChange={(e) => handleFilterChange("sort", e.target.value)}
                      className="pl-3 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-orange-500 cursor-pointer appearance-none"
                    >
                      <option>Relevance</option>
                      <option>Price (Low to High)</option>
                      <option>Price (High to Low)</option>
                      <option>Duration (Shortest)</option>
                      <option>Reviews</option>
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Active Filters Pills Strip */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 animate-fadeIn">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Active:
                </span>

                {filters.destination !== "Anywhere in Uttarakhand" && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                    <span>Location: {filters.destination}</span>
                    <button
                      onClick={() => handleFilterChange("destination", "Anywhere in Uttarakhand")}
                      className="hover:text-orange-900 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {filters.styles.map((style) => (
                  <span
                    key={style}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full"
                  >
                    <span>{style}</span>
                    <button
                      onClick={() => handleStyleToggle(style)}
                      className="hover:text-orange-900 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}

                {filters.duration < 15 && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                    <span>&le; {filters.duration} Days</span>
                    <button
                      onClick={() => handleFilterChange("duration", 15)}
                      className="hover:text-orange-900 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {filters.maxBudget > 0 && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                    <span>&le; {formatINR(filters.maxBudget)}</span>
                    <button
                      onClick={() => handleFilterChange("maxBudget", 0)}
                      className="hover:text-orange-900 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                <button
                  onClick={handleResetFilters}
                  className="text-xs font-bold text-slate-500 hover:text-orange-600 underline ml-2 cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Tour Cards Grid - 4 Columns on Widescreen, 3 Columns on Standard */}
            <div
              className={`grid gap-6 ${
                viewMode === "wide"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 min-[1400px]:grid-cols-4 2xl:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              {filteredAndSortedTours.length > 0 ? (
                filteredAndSortedTours.map((tour) => (
                  <TourCard
                    key={tour.id}
                    tour={tour}
                    isLiked={!!wishlist[tour.id]}
                    onToggleWishlist={handleToggleWishlist}
                    onQuickView={(t) => setQuickViewTour(t)}
                  />
                ))
              ) : (
                /* Empty State */
                <div className="col-span-full text-center p-12 sm:p-16 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto shadow-inner">
                    <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "10s" }} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    No Himalayan Expeditions Match These Filters
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                    Try broadening your duration, relaxing the budget limit, or clearing specific styles to see more tours.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Filters</span>
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewTour && (
        <QuickViewModal
          tour={quickViewTour}
          onClose={() => setQuickViewTour(null)}
          onToggleWishlist={handleToggleWishlist}
          isLiked={!!wishlist[quickViewTour.id]}
        />
      )}
    </div>
  );
}
