import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/Him Tour!.svg";
import toursData from "../Backend/BackenData";
import { ADVENTURE_STYLES } from "../Backend/BackenData";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
  Heart,
  ArrowUp,
  ArrowRight,
  CheckCircle2,
  Send,
  Sparkles,
  Mountain,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const popularDestinations = [
    "Kedarnath",
    "Badrinath",
    "Rishikesh",
    "Valley of Flowers",
    "Auli Skiing",
    "Chopta Tungnath",
    "Nainital Lake",
    "Jim Corbett Safari",
    "Haridwar",
    "Mussoorie",
    "Almora",
    "Gangotri",
    "Yamunotri",
    "Hemkund Sahib",
    "Lansdowne",
    "Chakrata",
  ];

  return (
    <footer className="relative bg-[#090d16] text-slate-300 font-sans border-t border-slate-800/80 overflow-hidden">
      {/* Background Ambient Glow Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-gradient-to-b from-orange-600/10 via-amber-600/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-gradient-to-t from-emerald-600/10 via-teal-600/5 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* 1. Newsletter / VIP Himalayan Explorers Club */}
        <div className="relative bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-700/60 shadow-2xl backdrop-blur-md mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-spin" style={{ animationDuration: "6s" }} />
                <span>Join 45,000+ Himalayan Explorers</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-heading">
                Unlock Secret Trails & VIP Early Bird Offers
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-xl leading-relaxed">
                Subscribe for real-time mountain weather bulletins, offbeat trek guides, and an instant ₹1,500 voucher on your next Uttarakhand adventure.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-emerald-950/70 border border-emerald-500/50 rounded-2xl p-4 text-center text-emerald-300 flex items-center justify-center gap-2.5 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-semibold">
                    Welcome to the Club! Check your inbox for your ₹1,500 voucher.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-600/30 transition-all duration-200 flex items-center justify-center gap-2 shrink-0 active:scale-95 cursor-pointer"
                    >
                      <span>Join Free</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 text-center sm:text-left flex items-center gap-1.5 justify-center sm:justify-start">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>No spam ever • 1-click unsubscribe anytime</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 2. Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <div className="bg-white/95 px-3 py-1.5 rounded-xl inline-block shadow-md">
                <img src={logo} alt="Him Tour Logo" className="h-9 w-auto" />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Devbhoomi's premier Himalayan travel collective. Specializing in high-altitude treks, sacred Char Dham yatras, river rafting expeditions, and tranquil wellness retreats across Uttarakhand.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-800/80 text-orange-400 px-3 py-1 rounded-lg border border-slate-700/60">
                <Mountain className="w-3.5 h-3.5" />
                <span>Uttarakhand Tourism Certified</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-800/80 text-emerald-400 px-3 py-1 rounded-lg border border-slate-700/60">
                <Award className="w-3.5 h-3.5" />
                <span>IMF & NIM Mountain Captains</span>
              </span>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <a
                href="tel:+919315667284"
                className="flex items-center gap-2.5 hover:text-orange-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-white tracking-wide">
                  +91 9315667284 <span className="text-slate-400 font-normal">(24/7 Traveler Help)</span>
                </span>
              </a>

              <a
                href="mailto:support@himtrip.com"
                className="flex items-center gap-2.5 hover:text-orange-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>support@himtrip.com</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-orange-500 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Tapovan, Rishikesh & Dehradun, Uttarakhand, India</span>
              </div>
            </div>
          </div>

          {/* Adventure Styles Col (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-1.5 border-b border-orange-500/40 inline-block font-heading">
              Adventure Styles
            </h4>
            <ul className="space-y-2.5 text-xs">
              {ADVENTURE_STYLES.slice(0, 7).map((style) => (
                <li key={style.id}>
                  <Link
                    to={`/adventure-styles/${style.id}`}
                    className="text-slate-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-orange-500 transition-colors" />
                    <span>{style.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/adventure-styles"
                  className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1 pt-1"
                >
                  <span>All Adventure Styles</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Tours Col (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-1.5 border-b border-orange-500/40 inline-block font-heading">
              Top Uttarakhand Tours
            </h4>
            <ul className="space-y-2.5 text-xs">
              {toursData.slice(0, 6).map((tour) => (
                <li key={tour.id}>
                  <Link
                    to={`/booking/${tour.id}`}
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate group-hover:translate-x-1 transition-transform">
                      {tour.title}
                    </span>
                    <span className="text-[11px] text-amber-400 font-semibold shrink-0 ml-2">
                      ₹{tour.price.toLocaleString()}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/tours"
                  className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1 pt-1"
                >
                  <span>Explore All 50+ Tours</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Travelers Col (3 cols on lg) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-1.5 border-b border-orange-500/40 inline-block font-heading">
                Company
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <Link to="/about" className="hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-orange-400 transition-colors">
                    Contact & SOS
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-orange-400 transition-colors">
                    Our Mountain Team
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-orange-400 transition-colors">
                    Eco-Conservation
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-orange-400 transition-colors">
                    Work With Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-1.5 border-b border-orange-500/40 inline-block font-heading">
                Travelers Hub
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <Link to="/tours" className="hover:text-orange-400 transition-colors">
                    Search Tours
                  </Link>
                </li>
                <li>
                  <Link to="/adventure-styles" className="hover:text-orange-400 transition-colors">
                    Adventure Styles
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-orange-400 transition-colors">
                    Trek Safety Guide
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-orange-400 transition-colors">
                    Weather Advisories
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-orange-400 transition-colors">
                    Booking Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Popular Destinations Tag Cloud */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider shrink-0 flex items-center gap-1.5 font-heading">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span>Trending Uttarakhand Circuits:</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {popularDestinations.map((dest, idx) => (
                <Link
                  key={idx}
                  to="/tours"
                  className="text-xs text-slate-400 hover:text-white bg-slate-900/90 hover:bg-orange-600/20 px-2.5 py-1 rounded-lg border border-slate-800 hover:border-orange-500/40 transition-colors"
                >
                  {dest}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Security, Payments & Social */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800/80">
          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>256-Bit SSL Encrypted</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-orange-400" />
              <span>Instant Confirmation</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>100% Local Pahadi Guides</span>
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-200 active:scale-95"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-600 hover:via-pink-600 hover:to-purple-600 hover:border-pink-600 transition-all duration-200 active:scale-95"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-200 active:scale-95"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-all duration-200 active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-200 active:scale-95"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 5. Copyright & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-slate-300 font-semibold">HimTrip Adventures & Tours Pvt. Ltd.</span>{" "}
              All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500">
              Crafted with authentic Pahadi pride in Devbhoomi Uttarakhand, India 🏔️
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <Link to="/about" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/about" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              Refund & Cancellation
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              Sitemap
            </Link>
          </div>

          {/* Smooth Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-orange-600 text-slate-300 hover:text-white border border-slate-800 hover:border-orange-500 transition-all duration-200 text-xs font-semibold group cursor-pointer shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
