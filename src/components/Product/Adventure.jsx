import React, { useState } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/adventurs/adventuresbanner.jpeg";
import { ADVENTURE_STYLES } from "../Backend/BackenData";
import Products from "./product";
import BrowserCollections from "./BrowserCollections";
import {
  MapPin,
  Clock,
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
  CheckCircle,
  Flame,
  Award,
  Mountain,
  Phone,
} from "lucide-react";

// --- Upgraded Luxury Adventure Style Card ---
const StyleCard = ({ style }) => (
  <Link
    to={`/adventure-styles/${style.id}`}
    className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_6px_25px_-6px_rgba(0,0,0,0.07)] hover:shadow-[0_24px_50px_-10px_rgba(234,88,12,0.22)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
  >
    {/* Top Accent Gradient Line */}
    <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500" />

    {/* Panoramic Image Container */}
    <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-100">
      <img
        src={style.imageUrl}
        alt={style.title}
        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80";
        }}
      />

      {/* Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />

      {/* Top Floating Badges */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
        <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 tracking-wider uppercase shadow-sm">
          {style.badge || "Expedition"}
        </span>

        <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white text-xs font-bold shadow-sm">
          <Clock className="w-3.5 h-3.5 text-amber-300" />
          <span>{style.stats?.duration || "Multi-Day"}</span>
        </div>
      </div>

      {/* Bottom Over-Image Stats */}
      <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-semibold z-10">
        {style.stats?.difficulty && (
          <div className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
            <Compass className="w-3.5 h-3.5 text-orange-400" />
            <span>{style.stats.difficulty}</span>
          </div>
        )}

        {style.stats?.altitude && (
          <div className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{style.stats.altitude}</span>
          </div>
        )}
      </div>
    </div>

    {/* Card Body */}
    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
      <div>
        {/* Destinations Highlight */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 mb-2 uppercase tracking-wide">
          <MapPin className="w-4 h-4 shrink-0 text-orange-500" />
          <span className="truncate" title={style.example}>
            {style.example}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug line-clamp-1 font-heading mb-2.5 group-hover:text-orange-600 transition-colors">
          {style.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {style.description}
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-100/90 px-2.5 py-1 rounded-lg border border-slate-200/50">
            <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>Certified Leaders</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-100/90 px-2.5 py-1 rounded-lg border border-slate-200/50">
            <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>Safety Gear Included</span>
          </span>
        </div>
      </div>

      {/* CTA Action */}
      <div className="pt-4 border-t border-slate-100 mt-auto">
        <div className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 group-hover:from-orange-700 group-hover:to-amber-600 shadow-md shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all duration-200">
          <span>View Adventure Guide</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </div>
  </Link>
);

// --- Main AdventureStylesPage Component ---
export default function AdventureStylesPage() {
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredStyles =
    selectedTag === "all"
      ? ADVENTURE_STYLES
      : ADVENTURE_STYLES.filter((s) =>
          s.badge?.toLowerCase().includes(selectedTag.toLowerCase()) ||
          s.title?.toLowerCase().includes(selectedTag.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      {/* 1. Dramatic Hero Header Banner */}
      <div className="relative w-full overflow-hidden bg-slate-950 text-white pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        {/* Ambient Top Glow Blob */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-5">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600/30 backdrop-blur-md border border-orange-400/40 text-orange-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 animate-fadeUp">
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>Adventures & Expeditions • Devbhoomi Uttarakhand</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight font-heading animate-fadeUp">
            Find Your True{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              Himalayan Calling
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md animate-fadeUp"
            style={{ animationDelay: "0.2s" }}
          >
            Dive deep into the heart of Devbhoomi with expeditions tailored to every kind of explorer — from sacred temple yatras to high-altitude pass crossings and white-water rapids.
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 pt-3 animate-fadeUp"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all duration-200 active:scale-95"
            >
              <span>View All 50+ Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm border border-white/20 hover:border-white/40 transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Talk to an Expedition Leader</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Adventure Experiences Section */}
      <section className="max-w-[1440px] 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold tracking-wide uppercase font-heading mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>All 8 Handcrafted Adventure Styles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Our Most Popular{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Uttarakhand Experiences
            </span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Every style is fully guided by licensed local mountaineers, certified equipment, dedicated safety protocols, and deep cultural immersion.
          </p>

          {/* Quick Filter Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All 8 Styles" },
              { id: "trek", label: "Trekking & Hiking" },
              { id: "river", label: "River Rafting" },
              { id: "wildlife", label: "Wildlife Safari" },
              { id: "sacred", label: "Pilgrimage" },
              { id: "culture", label: "Heritage" },
              { id: "yoga", label: "Yoga Retreats" },
            ].map((tag) => {
              const isActive = selectedTag === tag.id;
              return (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-orange-600 text-white shadow-md shadow-orange-500/25 scale-[1.02]"
                      : "bg-white text-slate-700 hover:bg-orange-50/70 border border-slate-200/80 hover:border-orange-200 shadow-xs"
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Adventure Cards Grid - Widescreen Luxury Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {filteredStyles.map((style) => (
            <StyleCard key={style.id} style={style} />
          ))}
        </div>

        {/* Bottom Trust & Safety Guarantees Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                IMF & NIM Certified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                IRF River Captains
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                Medical Oxygen on Treks
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-blue-500 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                Leave No Trace Camps
              </span>
            </div>
          </div>

          <Link
            to="/tours"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-slate-900/10 hover:shadow-orange-600/25 transition-all duration-300 group shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span>Search All 50+ Tours</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 3. Integrated Products & Collections Sections */}
      <section className="max-w-[1440px] 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <Products />
        <BrowserCollections />
      </section>
    </div>
  );
}
