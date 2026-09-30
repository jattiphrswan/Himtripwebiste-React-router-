import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  CheckCircle,
  Tag,
  Flame,
} from "lucide-react";
import toursData from "../Backend/BackenData";

const formatINR = (price) =>
  price ? `₹${price.toLocaleString("en-IN")}` : "";

// Category icon/label helper
const CATEGORIES = [
  { id: "all", label: "All Tours", emoji: "✨" },
  { id: "Pilgrimage", label: "Pilgrimage", emoji: "🛕" },
  { id: "Trekking", label: "Trekking", emoji: "🥾" },
  { id: "Adventure", label: "Adventure", emoji: "🌊" },
  { id: "Family", label: "Family Trips", emoji: "👨‍👩‍👧" },
];

// Highlight perks generator based on tour category/style
const getTourHighlights = (tour) => {
  const category = (tour.category || "").toLowerCase();
  const style = (tour.style || "").toLowerCase();

  if (category.includes("pilgrim") || style.includes("pilgrim")) {
    return ["VIP Darshan Pass", "Stay & Sattvic Meals", "Local Pandit Guide"];
  }
  if (category.includes("trek") || style.includes("trek")) {
    return ["Certified Trek Leader", "Tents & Warm Gear", "Safety & First Aid"];
  }
  if (category.includes("adventure") || style.includes("sports")) {
    return ["Pro Safety Gear", "Grade III/IV Rapids", "Campfire & Riverside"];
  }
  return ["Private Sightseeing Cab", "Premium Lakeview Stay", "Family Friendly"];
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [wishlist, setWishlist] = useState({});
  const [quickViewTour, setQuickViewTour] = useState(null);
  const [showAllTours, setShowAllTours] = useState(false);

  // Toggle favorite
  const toggleWishlist = (e, tourId) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [tourId]: !prev[tourId],
    }));
  };

  // Filter tours
  const filteredTours = toursData.filter((tour) => {
    if (activeCategory === "all") return true;
    return (
      tour.category?.toLowerCase() === activeCategory.toLowerCase() ||
      tour.style?.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  // Showcase first 4 if 'all' and not expanded, or all filtered
  const displayTours =
    activeCategory === "all" && !showAllTours
      ? filteredTours.slice(0, 4)
      : filteredTours;

  return (
    <section className="relative w-full py-4 sm:py-6">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-orange-200/25 via-amber-100/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 shadow-xs mb-3">
            <Flame className="w-4 h-4 text-orange-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-orange-700 font-heading">
              Trending Expeditions
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Popular Himalayan{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Tours & Treks
            </span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Handpicked journeys crafted by local mountain experts. Sacred darshans, thrilling rapids, and serene hill escapes.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-7 max-w-3xl">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? toursData.length
                  : toursData.filter(
                      (t) =>
                        t.category?.toLowerCase() === cat.id.toLowerCase() ||
                        t.style?.toLowerCase() === cat.id.toLowerCase()
                    ).length;

              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setShowAllTours(false);
                  }}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-orange-600 text-white shadow-md shadow-orange-500/25 scale-[1.02]"
                      : "bg-white text-slate-700 hover:bg-orange-50/70 border border-slate-200/80 hover:border-orange-200 shadow-xs"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ml-1 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {displayTours.map((tour, index) => {
            const isLiked = !!wishlist[tour.id];
            const discountPercent =
              tour.originalPrice && tour.originalPrice > tour.price
                ? Math.round(
                    ((tour.originalPrice - tour.price) / tour.originalPrice) * 100
                  )
                : null;
            const highlights = getTourHighlights(tour);

            return (
              <div
                key={tour.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_40px_-12px_rgba(234,88,12,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Section */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35 pointer-events-none" />

                  {/* Top Left Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-10">
                    {/* Category Tag */}
                    <span className="bg-black/50 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20 tracking-wide uppercase">
                      {tour.category || tour.style}
                    </span>

                    {/* Sale / Discount Badge */}
                    {tour.onSale && (
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-rose-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                        <Tag className="w-3 h-3" />
                        {discountPercent ? `${discountPercent}% OFF` : "ON SALE"}
                      </span>
                    )}
                  </div>

                  {/* Top Right Wishlist & Quick View */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                    <button
                      onClick={() => setQuickViewTour(tour)}
                      title="Quick View"
                      className="w-8 h-8 rounded-full bg-black/45 backdrop-blur-md text-white/90 hover:text-white hover:bg-black/70 flex items-center justify-center border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-xs"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      onClick={(e) => toggleWishlist(e, tour.id)}
                      title={isLiked ? "Saved to favorites" : "Save to favorites"}
                      className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-700 hover:text-rose-500 flex items-center justify-center shadow-md transition-all active:scale-90 cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isLiked
                            ? "fill-rose-500 text-rose-500"
                            : "text-slate-600 hover:text-rose-500"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Bottom Over-Image Info */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium z-10">
                    {/* Duration */}
                    <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      <span>{tour.duration} Days</span>
                    </div>

                    {/* Rating */}
                    <div className="inline-flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-white">{tour.rating}</span>
                      <span className="text-white/70 text-[10px]">({tour.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Destination */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-600 mb-1.5 uppercase tracking-wide">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-orange-500" />
                      <span className="truncate">{tour.destination}</span>
                    </div>

                    {/* Title */}
                    <Link
                      to={`/booking/${tour.id}`}
                      className="block group-hover:text-orange-600 transition-colors"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2 font-heading mb-2.5">
                        {tour.title}
                      </h3>
                    </Link>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {highlights.slice(0, 2).map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded-md"
                        >
                          <CheckCircle className="w-2.5 h-2.5 text-emerald-600" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA Section */}
                  <div className="pt-3 border-t border-slate-100 mt-auto">
                    <div className="flex items-end justify-between mb-3">
                      <div>
                        <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                          Starting From
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                            {formatINR(tour.price)}
                          </span>
                          {tour.originalPrice && (
                            <span className="text-xs text-slate-400 line-through">
                              {formatINR(tour.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium pb-1">
                        / person
                      </span>
                    </div>

                    {/* Action Button */}
                    <Link
                      to={`/booking/${tour.id}`}
                      className="group/btn relative w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-orange-600 via-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-md shadow-orange-600/20 hover:shadow-orange-600/35 transition-all duration-200 active:scale-[0.98]"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand / Show More in place if 'all' is selected */}
        {activeCategory === "all" && filteredTours.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllTours(!showAllTours)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-orange-200 bg-orange-50/80 hover:bg-orange-100 text-orange-700 text-xs sm:text-sm font-bold transition-all shadow-xs hover:shadow-sm cursor-pointer"
            >
              <span>
                {showAllTours
                  ? "Show Fewer Tours"
                  : `Show All ${filteredTours.length} Popular Tours`}
              </span>
              <ArrowRight
                className={`w-4 h-4 transition-transform ${
                  showAllTours ? "-rotate-90" : "rotate-90"
                }`}
              />
            </button>
          </div>
        )}

        {/* Bottom Trust Row & View All Button */}
        <div className="mt-12 pt-8 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                100% Verified Guides
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 shrink-0 fill-amber-500" />
              <span className="text-xs font-semibold text-slate-700">
                4.8★ Rated Experiences
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                Instant Confirmation
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-blue-500 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                Personalized Itineraries
              </span>
            </div>
          </div>

          {/* View All Button */}
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-orange-600 text-white text-sm font-bold shadow-lg shadow-slate-900/10 hover:shadow-orange-600/25 transition-all duration-300 group shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span>Explore All {toursData.length}+ Tours</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setQuickViewTour(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-72 w-full bg-slate-900">
              <img
                src={quickViewTour.image}
                alt={quickViewTour.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  {quickViewTour.category || quickViewTour.style}
                </span>
                <h3 className="text-2xl font-bold font-heading">
                  {quickViewTour.title}
                </h3>
                <p className="flex items-center gap-1.5 text-xs text-slate-200 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>{quickViewTour.destination}</span>
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-3 p-3 bg-slate-50 rounded-2xl mb-6 text-center">
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Duration</span>
                  <span className="text-sm font-bold text-slate-800">
                    {quickViewTour.duration} Days / {quickViewTour.duration - 1} Nights
                  </span>
                </div>
                <div className="border-x border-slate-200">
                  <span className="block text-xs text-slate-500 font-medium">Rating</span>
                  <span className="text-sm font-bold text-amber-600 flex items-center justify-center gap-1">
                    ★ {quickViewTour.rating} ({quickViewTour.reviews})
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Tour Style</span>
                  <span className="text-sm font-bold text-slate-800">
                    {quickViewTour.style || "Scenic"}
                  </span>
                </div>
              </div>

              {/* Inclusions */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Trip Inclusions & Perks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {getTourHighlights(quickViewTour).map((perk, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-50/50 border border-orange-100 text-xs font-semibold text-slate-700"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-50/50 border border-orange-100 text-xs font-semibold text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>24/7 Roadside Assistance</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div>
                  <span className="block text-xs text-slate-400">Total Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-orange-600 font-heading">
                      {formatINR(quickViewTour.price)}
                    </span>
                    {quickViewTour.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        {formatINR(quickViewTour.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuickViewTour(null)}
                    className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    Close
                  </button>
                  <Link
                    to={`/booking/${quickViewTour.id}`}
                    onClick={() => setQuickViewTour(null)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-orange-600/30 transition-all"
                  >
                    <span>Proceed to Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
