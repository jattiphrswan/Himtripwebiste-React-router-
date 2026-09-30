import React from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import { ADVENTURE_STYLES } from "../Backend/BackenData";

export default function AdventurePreview() {
  // Showcase first 4 adventures for the homepage
  const previewAdventures = ADVENTURE_STYLES.slice(0, 4);

  return (
    <section className="relative w-full py-6 sm:py-10">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-gradient-to-l from-orange-200/20 via-amber-100/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 shadow-xs mb-3">
            <Flame className="w-4 h-4 text-orange-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-orange-700 font-heading">
              Thrills & Expeditions
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Popular Uttarakhand{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Adventures
            </span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            From roaring glacial white-water rapids to sacred Himalayan summits and untamed tiger safaris — choose your thrill.
          </p>
        </div>

        {/* Adventure Cards Grid - Matching wide luxury layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {previewAdventures.map((style) => (
            <Link
              key={style.id}
              to={`/adventure-styles/${style.id}`}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_6px_25px_-6px_rgba(0,0,0,0.07)] hover:shadow-[0_24px_50px_-10px_rgba(234,88,12,0.22)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              {/* Top Accent Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500" />

              {/* Image Section */}
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

                {/* Bottom Over-Image Info */}
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
          ))}
        </div>

        {/* Bottom Trust Guarantees & View All Button */}
        <div className="mt-12 pt-8 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                IMF & NIM Certified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500 shrink-0" />
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

          {/* View All Button */}
          <Link
            to="/adventure-styles"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-orange-600 text-white text-sm font-bold shadow-lg shadow-slate-900/10 hover:shadow-orange-600/25 transition-all duration-300 group shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span>Explore All {ADVENTURE_STYLES.length}+ Adventure Styles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
