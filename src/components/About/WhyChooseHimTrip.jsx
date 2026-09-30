import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Star,
  Heart,
  Headphones,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Clock,
  Shield,
  HeartHandshake,
  Activity,
  RefreshCw,
} from "lucide-react";

const WhyChooseHimTrip = () => {
  const features = [
    {
      id: 1,
      stat: "3M+",
      statLabel: "Happy Explorers",
      badgeText: "Global Community",
      icon: Users,
      title: "3 Million+ Happy Customers",
      description:
        "Trusted by travelers from 70+ countries exploring the pristine peaks, valleys, and holy shrines of Devbhoomi Uttarakhand.",
      accentGradient: "from-orange-500 to-amber-500",
      lightBg: "bg-orange-50/70 border-orange-100",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-orange-500/25",
      badgeColor: "text-orange-700 bg-orange-100/70 border-orange-200",
      checkpoints: [
        "70+ Countries Represented",
        "99.4% Positive Feedback",
        "Solo, Couple & Family Friendly",
      ],
    },
    {
      id: 2,
      stat: "4.8★",
      statLabel: "Average Rating",
      badgeText: "Top Rated 2026",
      icon: Star,
      title: "4.8 / 5.0 Star Ratings",
      description:
        "Cumulative score across 14,500+ authentic traveler reviews on Google, TripAdvisor, and verified direct bookings.",
      accentGradient: "from-amber-500 to-yellow-500",
      lightBg: "bg-amber-50/70 border-amber-100",
      iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500 text-white shadow-amber-500/25",
      badgeColor: "text-amber-800 bg-amber-100/70 border-amber-200",
      checkpoints: [
        "14,500+ Verified Reviews",
        "TripAdvisor Excellence Award",
        "Transparent & Real Feedback",
      ],
      showStars: true,
    },
    {
      id: 3,
      stat: "100%",
      statLabel: "Pahadi Curated",
      badgeText: "Authentic Heritage",
      icon: Heart,
      title: "Curated with Love",
      description:
        "Handcrafted itineraries guided by native Himalayan locals — featuring secret viewpoints, cultural homestays, and genuine eco-care.",
      accentGradient: "from-rose-500 to-orange-500",
      lightBg: "bg-rose-50/70 border-rose-100",
      iconBg: "bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-rose-500/25",
      badgeColor: "text-rose-700 bg-rose-100/70 border-rose-200",
      checkpoints: [
        "Government & NIM Certified Guides",
        "Secret Scenic Trails & Viewpoints",
        "Direct Support to Mountain Villages",
      ],
    },
    {
      id: 4,
      stat: "24/7",
      statLabel: "Instant On-Call",
      badgeText: "Always Protected",
      icon: Headphones,
      title: "24/7 Live Guardian Support",
      description:
        "We are with you at every altitude — from pre-trip planning to real-time weather monitoring and 24/7 emergency mountain response.",
      accentGradient: "from-emerald-500 to-teal-500",
      lightBg: "bg-emerald-50/70 border-emerald-100",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-emerald-500/25",
      badgeColor: "text-emerald-700 bg-emerald-100/70 border-emerald-200",
      checkpoints: [
        "< 2 Min Instant WhatsApp Response",
        "On-Ground SOS & First-Aid Teams",
        "Dedicated Personal Trip Concierge",
      ],
    },
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Zero Hidden Charges",
      desc: "Transparent pricing with all taxes, permits & tolls included upfront.",
    },
    {
      icon: RefreshCw,
      title: "Flexible Rescheduling",
      desc: "Weather delay or sudden emergency? Shift your dates with complete ease.",
    },
    {
      icon: Activity,
      title: "Mountain Safety Protocols",
      desc: "Pulse oximeters, medical oxygen & certified first-responders on high treks.",
    },
    {
      icon: HeartHandshake,
      title: "Direct Village Benefit",
      desc: "Over 80% of trip costs directly empower native Pahadi families and drivers.",
    },
  ];

  return (
    <section className="relative w-full py-8 sm:py-14">
      {/* Background Ambient Glow Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-gradient-to-br from-orange-200/25 via-amber-100/20 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-gradient-to-tl from-emerald-100/25 via-teal-50/20 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 shadow-xs mb-3.5">
            <ShieldCheck className="w-4 h-4 text-orange-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-orange-700 font-heading">
              The HimTrip Promise
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading max-w-3xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent">
              HimTrip
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            We unite authentic Himalayan wonder with certified mountain safety,
            handcrafted local itineraries, and unmatched 24/7 personalized care.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-14">
          {features.map((feature) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={feature.id}
                className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_24px_50px_-10px_rgba(234,88,12,0.18)] hover:border-orange-300 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.accentGradient} opacity-90 group-hover:h-2 transition-all duration-300`}
                />

                {/* Ambient Top Glow */}
                <div
                  className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${feature.accentGradient} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`}
                />

                {/* Card Top Section: Icon & Stat Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Glowing Icon Badge */}
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center p-3.5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${feature.iconBg}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Stat Highlight Pill */}
                    <div className="text-right">
                      <span className="block text-2xl font-black text-slate-900 tracking-tight font-heading">
                        {feature.stat}
                      </span>
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        {feature.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* Micro Category Tag */}
                  <div className="mb-2.5">
                    <span
                      className={`inline-block px-2.5 py-0.5 text-[11px] font-bold rounded-md border tracking-wide uppercase ${feature.badgeColor}`}
                    >
                      {feature.badgeText}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-orange-600 transition-colors duration-200">
                    {feature.title}
                  </h3>

                  {/* Star Rating Micro-Visualizer */}
                  {feature.showStars && (
                    <div className="flex items-center gap-1 mb-2.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-400 fill-amber-400"
                        />
                      ))}
                      <span className="text-xs font-bold text-amber-600 ml-1.5">
                        4.8 / 5.0
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Trust Checkpoints */}
                <div className="pt-4 border-t border-slate-100/90 space-y-2">
                  {feature.checkpoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-medium text-slate-600"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Guarantees Strip */}
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden mb-12">
          {/* Subtle Background Pattern Accent */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60">
            {guarantees.map((item, idx) => {
              const GuaranteeIcon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-4 ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center shrink-0 text-orange-400 mt-0.5">
                    <GuaranteeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Free Consultation & Trip Planning Callout */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 border border-orange-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center shadow-lg shadow-orange-600/30 shrink-0 hidden sm:flex">
              <PhoneCall className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                Have questions or need a personalized Uttarakhand itinerary?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Our local mountain experts design custom family, group & solo escapes free of cost.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-orange-600/25 transition-all duration-200 active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Free Consultation</span>
            </Link>
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200 active:scale-95"
            >
              <span>Explore All Tours</span>
              <ArrowRight className="w-4 h-4 text-orange-600" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHimTrip;
