import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Mountain,
  Compass,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Flame,
  X,
  Menu,
} from "lucide-react";
import logo from "../../assets/logo/Him Tour!.svg";
import { UTTARAKHAND_TRACKS, ADVENTURE_STYLES } from "../Backend/BackenData";

// Curated reliable fallbacks and emojis so menus never break
const ADVENTURE_META = {
  1: {
    emoji: "🥾",
    fallback:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80",
  },
  2: {
    emoji: "🚣",
    fallback:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80",
  },
  3: {
    emoji: "🐅",
    fallback:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=400&q=80",
  },
  4: {
    emoji: "🛕",
    fallback:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80",
  },
  5: {
    emoji: "🏛️",
    fallback:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  6: {
    emoji: "🧘",
    fallback:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=400&q=80",
  },
  7: {
    emoji: "🏍️",
    fallback:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80",
  },
  8: {
    emoji: "⛺",
    fallback:
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=400&q=80",
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'tracks' | 'adventures' | null
  const [mobileTracksOpen, setMobileTracksOpen] = useState(false);
  const [mobileAdventuresOpen, setMobileAdventuresOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const navRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Close mega menu when route changes
  useEffect(() => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMegaMenu(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (menuName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 220);
  };

  const headerClass = isHome
    ? scrolled
      ? "bg-white/95 backdrop-blur-md shadow-md"
      : "bg-transparent"
    : "bg-white shadow-md";

  const textColor = isHome
    ? scrolled
      ? "text-slate-800"
      : "text-white"
    : "text-slate-800";

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClass}`}
      >
        <nav className="px-4 lg:px-6 py-2.5 max-w-screen-xl mx-auto relative">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img src={logo} className="h-10 sm:h-12" alt="HimTour Logo" />
            </Link>

            {/* Desktop Navigation Menu */}
            <ul className="hidden lg:flex items-center space-x-7 font-medium text-sm">
              {/* Home */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${textColor} hover:text-orange-600 transition ${
                      isActive ? "text-orange-600 font-bold" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* Tracks with Mega Menu */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter("tracks")}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to="/tracks"
                  onClick={() => setActiveMegaMenu(null)}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1.5 ${textColor} hover:text-orange-600 transition py-2 ${
                      isActive || activeMegaMenu === "tracks"
                        ? "text-orange-600 font-bold"
                        : ""
                    }`
                  }
                >
                  <span>Tracks</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMegaMenu === "tracks" ? "rotate-180 text-orange-600" : ""
                    }`}
                  />
                </NavLink>

                {/* ======================================================== */}
                {/* TRACKS MEGA MENU DROPDOWN (100% OPAQUE SOLID BG)         */}
                {/* ======================================================== */}
                {activeMegaMenu === "tracks" && (
                  <div
                    onMouseEnter={() => handleMouseEnter("tracks")}
                    onMouseLeave={handleMouseLeave}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[880px] max-w-[94vw] z-[100] animate-fadeIn"
                  >
                    {/* Solid White Opaque Container - Zero Background Bleed */}
                    <div className="bg-white rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.35)] border border-slate-200 p-6 text-slate-800 ring-1 ring-slate-900/10">
                      <div className="grid grid-cols-12 gap-6">
                        {/* Column 1: Featured Mountain Tracks (5 Cols) */}
                        <div className="col-span-5 border-r border-slate-100 pr-5">
                          <div className="flex items-center justify-between mb-3.5">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
                              <Mountain className="w-3.5 h-3.5" />
                              <span>Featured Tracks</span>
                            </span>
                            <Link
                              to="/tracks"
                              onClick={() => setActiveMegaMenu(null)}
                              className="text-xs font-bold text-slate-500 hover:text-orange-600 transition flex items-center gap-0.5"
                            >
                              <span>All Tracks</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="space-y-2">
                            {UTTARAKHAND_TRACKS.map((t) => (
                              <Link
                                key={t.id}
                                to={`/booking/${t.id}`}
                                onClick={() => setActiveMegaMenu(null)}
                                className="group/item flex items-center gap-3 p-2 rounded-2xl hover:bg-orange-50 transition-colors"
                              >
                                <img
                                  src={t.image}
                                  alt={t.title}
                                  onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src =
                                      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80";
                                  }}
                                  className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-sm border border-slate-100 group-hover/item:scale-105 transition-transform"
                                />
                                <div className="min-w-0 flex-1">
                                  <h4 className="text-xs font-bold text-slate-900 group-hover/item:text-orange-600 transition-colors truncate">
                                    {t.title}
                                  </h4>
                                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                                    <span className="font-semibold text-orange-700">
                                      {t.altitudeFt}
                                    </span>
                                    <span>•</span>
                                    <span>{t.durationDays} Days</span>
                                    <span>•</span>
                                    <span className="font-bold text-slate-800">
                                      ₹{t.price.toLocaleString("en-IN")}
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Trail Styles & Regions (4 Cols) */}
                        <div className="col-span-4 border-r border-slate-100 pr-5 space-y-5">
                          {/* Trail Styles */}
                          <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-600 flex items-center gap-1.5 mb-2.5">
                              <Compass className="w-3.5 h-3.5" />
                              <span>Track Categories</span>
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                              <li>
                                <Link
                                  to="/tracks"
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="hover:text-orange-600 flex items-center justify-between py-1 transition"
                                >
                                  <span>Summit Climbs (13,000+ ft)</span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-700 font-bold">
                                    Popular
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/tracks"
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="hover:text-orange-600 flex items-center justify-between py-1 transition"
                                >
                                  <span>High Glacial Lakes & Tarns</span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-bold">
                                    15,500 ft
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/tracks"
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="hover:text-orange-600 block py-1 transition"
                                >
                                  Velvet Alpine Bugyals (Meadows)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/tracks"
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="hover:text-orange-600 block py-1 transition"
                                >
                                  Historic Ridge Passes (Curzon Trail)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/tracks"
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="hover:text-orange-600 block py-1 transition"
                                >
                                  UNESCO Sanctuary Expeditions
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Mountain Regions */}
                          <div className="pt-2 border-t border-slate-100">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
                              Key Regions
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {["Chopta", "Gangotri", "Chamoli", "Joshimath", "Wan"].map(
                                (region) => (
                                  <Link
                                    key={region}
                                    to={`/tours?where=${region}`}
                                    onClick={() => setActiveMegaMenu(null)}
                                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-orange-50 hover:text-orange-700 text-slate-700 text-[11px] font-medium transition"
                                  >
                                    {region}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Column 3: Safety Guarantee & Promo Card (3 Cols) */}
                        <div className="col-span-3 flex flex-col justify-between">
                          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                              <ShieldCheck className="w-3 h-3" />
                              <span>NIM Certified</span>
                            </span>
                            <h4 className="text-xs font-bold text-slate-900 leading-snug">
                              100% Mountain Safety Guarantee
                            </h4>
                            <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                              Medical oxygen, 4-season tents, and oximeter monitoring on every single batch.
                            </p>
                          </div>

                          <Link
                            to="/tracks"
                            onClick={() => setActiveMegaMenu(null)}
                            className="mt-4 w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-xs shadow-md shadow-orange-600/25 hover:from-orange-700 hover:to-amber-700 transition"
                          >
                            <span>Explore All Tracks</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Adventure Styles with Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter("adventures")}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to="/adventure-styles"
                  onClick={() => setActiveMegaMenu(null)}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1.5 ${textColor} hover:text-orange-600 transition py-2 ${
                      isActive || activeMegaMenu === "adventures"
                        ? "text-orange-600 font-bold"
                        : ""
                    }`
                  }
                >
                  <span>Adventure Styles</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMegaMenu === "adventures"
                        ? "rotate-180 text-orange-600"
                        : ""
                    }`}
                  />
                </NavLink>

                {/* ======================================================== */}
                {/* ADVENTURE STYLES DROPDOWN (100% OPAQUE SOLID BG)         */}
                {/* ======================================================== */}
                {activeMegaMenu === "adventures" && (
                  <div
                    onMouseEnter={() => handleMouseEnter("adventures")}
                    onMouseLeave={handleMouseLeave}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[520px] max-w-[94vw] z-[100] animate-fadeIn"
                  >
                    {/* Solid White Opaque Container - Zero Bleed */}
                    <div className="bg-white rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.35)] border border-slate-200 p-5 text-slate-800 ring-1 ring-slate-900/10">
                      <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-100">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
                          <Flame className="w-3.5 h-3.5" />
                          <span>Explore Experiences</span>
                        </span>
                        <Link
                          to="/adventure-styles"
                          onClick={() => setActiveMegaMenu(null)}
                          className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-0.5"
                        >
                          <span>View All Styles</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {ADVENTURE_STYLES.slice(0, 6).map((style) => {
                          const meta = ADVENTURE_META[style.id] || {
                            emoji: "🏔️",
                            fallback:
                              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80",
                          };

                          return (
                            <Link
                              key={style.id}
                              to={`/adventure-styles/${style.id}`}
                              onClick={() => setActiveMegaMenu(null)}
                              className="flex items-center gap-3 p-2 rounded-xl hover:bg-orange-50 transition-colors group/adv"
                            >
                              <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-100 bg-slate-100">
                                <img
                                  src={style.imageUrl || meta.fallback}
                                  alt={style.title}
                                  onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = meta.fallback;
                                  }}
                                  className="w-full h-full object-cover group-hover/adv:scale-105 transition-transform"
                                />
                                <span className="absolute bottom-0 right-0 text-[10px] bg-black/60 rounded-tl-md px-1 text-white">
                                  {meta.emoji}
                                </span>
                              </div>
                              <div className="min-w-0 flex-1">
                                <h4 className="text-xs font-bold text-slate-900 group-hover/adv:text-orange-600 truncate transition">
                                  {style.title}
                                </h4>
                                <span className="text-[10px] text-slate-500 block truncate mt-0.5">
                                  {style.badge || "Himalayan Experience"}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-orange-50/50 -mx-5 -mb-5 px-5 py-3 rounded-b-3xl">
                        <span className="text-slate-600 font-medium text-[11px]">
                          Custom Himalayan itineraries available
                        </span>
                        <Link
                          to="/contact"
                          onClick={() => setActiveMegaMenu(null)}
                          className="font-bold text-orange-700 hover:text-orange-800 text-xs"
                        >
                          Talk to Mountain Expert →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Tours */}
              <li>
                <NavLink
                  to="/tours"
                  className={({ isActive }) =>
                    `${textColor} hover:text-orange-600 transition ${
                      isActive ? "text-orange-600 font-bold" : ""
                    }`
                  }
                >
                  Tours
                </NavLink>
              </li>

              {/* About */}
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${textColor} hover:text-orange-600 transition ${
                      isActive ? "text-orange-600 font-bold" : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              {/* Contact */}
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${textColor} hover:text-orange-600 transition ${
                      isActive ? "text-orange-600 font-bold" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Desktop Right CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                to="/tours"
                className={`font-semibold rounded-xl text-xs px-4 py-2.5 transition ${
                  textColor === "text-white"
                    ? "text-white hover:bg-white/20"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                Book Now
              </Link>
              <Link
                to="/tracks"
                className="font-bold rounded-xl text-xs px-4 py-2.5 text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-md shadow-orange-600/25 transition-all active:scale-95"
              >
                Explore Tracks
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-xl focus:outline-none transition ${
                textColor === "text-white" ? "text-white" : "text-slate-800"
              }`}
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* ======================================================== */}
          {/* MOBILE SLIDE-IN NAVIGATION MENU (100% RESPONSIVE)        */}
          {/* ======================================================== */}
          <div
            className={`fixed top-0 right-0 h-full w-[310px] sm:w-[350px] bg-white shadow-2xl transform transition-transform duration-300 ease-out z-50 flex flex-col justify-between overflow-y-auto ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div>
              {/* Mobile Header Bar */}
              <div className="flex justify-between items-center p-4 border-b border-slate-100">
                <img src={logo} className="h-9" alt="Him Tour Logo" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="p-4 space-y-1.5">
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3.5 py-2.5 rounded-xl font-bold text-sm transition ${
                      isActive
                        ? "bg-orange-50 text-orange-700 font-extrabold"
                        : "text-slate-800 hover:bg-slate-50"
                    }`
                  }
                >
                  Home
                </NavLink>

                {/* Mobile Accordion: Tracks */}
                <div>
                  <button
                    onClick={() => setMobileTracksOpen(!mobileTracksOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50 transition"
                  >
                    <span className="flex items-center gap-2">
                      <span>Tracks</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-bold">
                        5 Treks
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${
                        mobileTracksOpen ? "rotate-180 text-orange-600" : ""
                      }`}
                    />
                  </button>

                  {mobileTracksOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1.5 animate-fadeIn">
                      {UTTARAKHAND_TRACKS.map((t) => (
                        <Link
                          key={t.id}
                          to={`/booking/${t.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-orange-50 text-xs text-slate-700 font-medium transition"
                        >
                          <span className="truncate pr-2 font-semibold">
                            {t.title}
                          </span>
                          <span className="text-[10px] font-bold text-orange-700 shrink-0">
                            {t.altitudeFt}
                          </span>
                        </Link>
                      ))}
                      <Link
                        to="/tracks"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block p-2 text-xs font-bold text-orange-600 hover:text-orange-700"
                      >
                        View All Tracks Page →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Accordion: Adventure Styles */}
                <div>
                  <button
                    onClick={() => setMobileAdventuresOpen(!mobileAdventuresOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50 transition"
                  >
                    <span>Adventure Styles</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${
                        mobileAdventuresOpen ? "rotate-180 text-orange-600" : ""
                      }`}
                    />
                  </button>

                  {mobileAdventuresOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1 animate-fadeIn">
                      {ADVENTURE_STYLES.slice(0, 6).map((adv) => (
                        <Link
                          key={adv.id}
                          to={`/adventure-styles/${adv.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block p-2 rounded-xl hover:bg-orange-50 text-xs text-slate-700 font-medium transition truncate"
                        >
                          {adv.title}
                        </Link>
                      ))}
                      <Link
                        to="/adventure-styles"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block p-2 text-xs font-bold text-orange-600 hover:text-orange-700"
                      >
                        All Adventure Styles →
                      </Link>
                    </div>
                  )}
                </div>

                <NavLink
                  to="/tours"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3.5 py-2.5 rounded-xl font-bold text-sm transition ${
                      isActive
                        ? "bg-orange-50 text-orange-700 font-extrabold"
                        : "text-slate-800 hover:bg-slate-50"
                    }`
                  }
                >
                  Tours & Packages
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3.5 py-2.5 rounded-xl font-bold text-sm transition ${
                      isActive
                        ? "bg-orange-50 text-orange-700 font-extrabold"
                        : "text-slate-800 hover:bg-slate-50"
                    }`
                  }
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3.5 py-2.5 rounded-xl font-bold text-sm transition ${
                      isActive
                        ? "bg-orange-50 text-orange-700 font-extrabold"
                        : "text-slate-800 hover:bg-slate-50"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>

            {/* Mobile Bottom CTA Buttons */}
            <div className="p-4 border-t border-slate-100 space-y-2 shrink-0 bg-slate-50">
              <Link
                to="/tracks"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-600/25 transition active:scale-95"
              >
                Explore Mountain Tracks
              </Link>
              <Link
                to="/tours"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-white transition"
              >
                Browse All Tours
              </Link>
            </div>
          </div>

          {/* Mobile Backdrop Overlay */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </nav>
      </header>

      {/* Desktop Mega Menu Dimming Backdrop Overlay (Blocks Background Mixing) */}
      {activeMegaMenu && (
        <div
          className="fixed inset-0 top-[60px] bg-slate-950/40 backdrop-blur-[2px] z-40 transition-opacity animate-fadeIn"
          onClick={() => setActiveMegaMenu(null)}
        />
      )}
    </>
  );
}
