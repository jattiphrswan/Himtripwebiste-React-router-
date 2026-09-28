import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ADVENTURE_STYLES } from "../Backend/BackenData";
import toursData from "../Backend/BackenData";

const formatINR = (price) =>
  price !== null ? `₹${price.toLocaleString("en-IN")}` : "";

export default function AdventureDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  // Scroll to top when id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveFaq(null);
  }, [id]);

  // Find adventure by id or slug
  const adventure = ADVENTURE_STYLES.find(
    (item) => item.id.toString() === id || item.slug === id
  );

  // Fallback if not found
  if (!adventure) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
          <i className="ph-bold ph-compass text-6xl text-orange-600 mb-4 inline-block animate-bounce"></i>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Adventure Style Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The adventure experience you are looking for might have been moved or updated.
          </p>
          <Link
            to="/adventure-styles"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition shadow-lg"
          >
            <i className="ph ph-arrow-left text-xl mr-2"></i>
            Browse All Adventure Styles
          </Link>
        </div>
      </div>
    );
  }

  // Find matching tours
  const relatedTours = toursData.filter((tour) =>
    adventure.relatedTourIds
      ? adventure.relatedTourIds.includes(tour.id)
      : tour.category === adventure.title || tour.style.includes(adventure.title)
  );

  // Other adventures to explore
  const otherAdventures = ADVENTURE_STYLES.filter(
    (item) => item.id !== adventure.id
  );

  const toggleFaq = (idx) => {
    setActiveFaq((prev) => (prev === idx ? null : idx));
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-16">
      {/* Hero Header */}
      <section
        className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.75), rgba(15, 23, 0.88)), url(${adventure.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-orange-200 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <Link to="/adventure-styles" className="hover:text-white transition">
              Adventure Styles
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{adventure.title}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-semibold mb-4 shadow-sm">
              <i className={`ph-bold ${adventure.icon} text-orange-400 text-base`}></i>
              <span>{adventure.badge || "Uttarakhand Experience"}</span>
            </div>

            {/* Title & Tagline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4 drop-shadow-md">
              {adventure.title}
            </h1>
            <p className="text-lg sm:text-2xl text-orange-100 font-light leading-relaxed mb-8 drop-shadow">
              {adventure.tagline || adventure.description}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("tours-section")}
                className="px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full shadow-lg transition duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <i className="ph-bold ph-ticket text-xl"></i>
                <span>View Tours & Book</span>
              </button>
              <button
                onClick={() => scrollToSection("destinations-section")}
                className="px-6 py-3.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold rounded-full border border-white/40 transition duration-200 flex items-center gap-2"
              >
                <i className="ph-bold ph-map-pin text-xl"></i>
                <span>Top Destinations</span>
              </button>
              <Link
                to="/adventure-styles"
                className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-gray-200 hover:text-white font-medium rounded-full transition flex items-center gap-2"
              >
                <i className="ph ph-arrow-left text-xl"></i>
                <span>All Adventures</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="flex items-center gap-3 p-2 border-r border-gray-100 last:border-none">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <i className="ph-bold ph-gauge text-xl"></i>
            </div>
            <div>
              <span className="block text-xs text-gray-500 font-medium">Difficulty</span>
              <span className="block text-sm font-bold text-gray-900 truncate">
                {adventure.stats?.difficulty || "Moderate"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-r border-gray-100 last:border-none">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <i className="ph-bold ph-calendar text-xl"></i>
            </div>
            <div>
              <span className="block text-xs text-gray-500 font-medium">Best Season</span>
              <span className="block text-sm font-bold text-gray-900 truncate">
                {adventure.stats?.bestSeason || "All Year"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-r border-gray-100 last:border-none">
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
              <i className="ph-bold ph-clock text-xl"></i>
            </div>
            <div>
              <span className="block text-xs text-gray-500 font-medium">Ideal Duration</span>
              <span className="block text-sm font-bold text-gray-900 truncate">
                {adventure.stats?.duration || "3 - 7 Days"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-r border-gray-100 last:border-none">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <i className="ph-bold ph-mountains text-xl"></i>
            </div>
            <div>
              <span className="block text-xs text-gray-500 font-medium">Altitude / Terrain</span>
              <span className="block text-sm font-bold text-gray-900 truncate">
                {adventure.stats?.altitude || "Himalayan"}
              </span>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <i className="ph-bold ph-users-three text-xl"></i>
            </div>
            <div>
              <span className="block text-xs text-gray-500 font-medium">Ideal For</span>
              <span className="block text-sm font-bold text-gray-900 truncate">
                {adventure.stats?.idealFor || "All Travelers"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Overview & Highlights */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-orange-600 font-bold uppercase tracking-wider text-xs">
              <span className="w-6 h-0.5 bg-orange-600"></span>
              Why Experience It With HimTrip
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              The Magic of {adventure.title} in Devbhoomi Uttarakhand
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
              <p>{adventure.overview || adventure.description}</p>
              <p className="text-base text-gray-500">
                Whether you are an intrepid explorer seeking high-altitude summits or someone longing for authentic connection with the mountains, our specialized Uttarakhand itineraries combine certified safety standards, responsible eco-tourism, and rich local storytelling.
              </p>
            </div>

            {/* Inclusions checklist preview */}
            <div className="p-5 bg-orange-50 rounded-2xl border border-orange-100">
              <h4 className="font-bold text-orange-900 text-sm mb-3 flex items-center gap-2">
                <i className="ph-bold ph-shield-check text-orange-600 text-lg"></i>
                HimTrip Certified Standards on Every Departure:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <i className="ph-bold ph-check-circle text-green-600 text-base"></i>
                  <span>Certified Mountain Guides & Leaders</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ph-bold ph-check-circle text-green-600 text-base"></i>
                  <span>Full Medical Oxygen & First-Aid Ready</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ph-bold ph-check-circle text-green-600 text-base"></i>
                  <span>All Forest Permits & Insurance Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ph-bold ph-check-circle text-green-600 text-base"></i>
                  <span>Warm Nutritious Local Pahadi Meals</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Highlights Card Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {adventure.highlights &&
              adventure.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-200 flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <i className={`ph-bold ${highlight.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-normal">
                      {highlight.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Top Destinations / Routes Section */}
        {adventure.destinations && adventure.destinations.length > 0 && (
          <section id="destinations-section" className="scroll-mt-24 space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Explore The Iconic Terrain
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-1">
                Top Uttarakhand Routes & Destinations
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Handpicked places where {adventure.title} is at its peak splendor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {adventure.destinations.map((dest, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3 gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                        {dest.tag}
                      </span>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                        {dest.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {dest.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {dest.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-100 text-xs text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <i className="ph-bold ph-mountains text-orange-500"></i>
                        <span>Altitude: <strong>{dest.altitude}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <i className="ph-bold ph-clock text-orange-500"></i>
                        <span>Duration: <strong>{dest.duration}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">
                      Guided departures available
                    </span>
                    <button
                      onClick={() => scrollToSection("tours-section")}
                      className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                    >
                      Book Tour <i className="ph-bold ph-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Inclusions & Essential Gear Guide */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What's Included */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <i className="ph-bold ph-check-square-offset text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">What's Included</h3>
                <p className="text-xs text-gray-500">Transparent, no-hidden-cost pricing</p>
              </div>
            </div>

            <ul className="space-y-3">
              {(adventure.included || [
                "Certified local guides and safety personnel",
                "High quality equipment and permits",
                "Nutritious meals on expeditions",
                "Emergency first-aid support",
              ]).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                  <i className="ph-bold ph-check-circle text-green-600 text-lg shrink-0 mt-0.5"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Packing & Gear Checklist */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
                <i className="ph-bold ph-backpack text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Essential Packing List</h3>
                <p className="text-xs text-gray-500">What to bring for this adventure</p>
              </div>
            </div>

            <ul className="space-y-3">
              {(adventure.packingList || [
                "Comfortable outdoor footwear with good grip",
                "Layered clothing suitable for mountain climate",
                "Personal medications and hydration bottle",
                "Sun protection and headwear",
              ]).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                  <i className="ph-bold ph-caret-right text-orange-600 text-lg shrink-0 mt-0.5"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Curated / Related Tours Section */}
        <section id="tours-section" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Ready to Experience It?
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-1">
                Curated Tours for {adventure.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Handpicked guided departures with guaranteed departures and all-inclusive logistics.
              </p>
            </div>
            <Link
              to="/tours"
              className="text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 shrink-0"
            >
              <span>View All Tours</span>
              <i className="ph-bold ph-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTours.length > 0 ? (
              relatedTours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col border border-gray-100"
                >
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    />
                    {tour.onSale && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                        SALE
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {tour.duration} Days
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-yellow-600 mb-2 font-medium">
                        <i className="ph-fill ph-star text-sm"></i>
                        <span>{tour.rating}</span>
                        <span className="text-gray-400">({tour.reviews} reviews)</span>
                      </div>

                      <h3 className="font-bold text-lg text-gray-900 mb-1 leading-snug line-clamp-1">
                        {tour.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                        <i className="ph-bold ph-map-pin text-orange-500"></i>
                        <span>{tour.destination}</span>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        {tour.originalPrice && (
                          <span className="block text-xs text-gray-400 line-through">
                            {formatINR(tour.originalPrice)}
                          </span>
                        )}
                        <span className="text-xl font-black text-orange-600">
                          {formatINR(tour.price)}
                        </span>
                        <span className="block text-[10px] text-gray-500 uppercase font-semibold">
                          per person
                        </span>
                      </div>

                      <Link
                        to={`/booking/${tour.id}`}
                        className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-full transition shadow-md hover:shadow-lg"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full bg-white p-8 rounded-2xl text-center border border-gray-200">
                <i className="ph-bold ph-calendar-blank text-5xl text-orange-500 mb-3 inline-block"></i>
                <h4 className="text-lg font-bold text-gray-800">
                  Custom Itinerary Available for {adventure.title}
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto mt-1 mb-6">
                  We organize custom small-group and private departures tailored to your dates and preferences.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-2.5 bg-orange-600 text-white text-sm font-semibold rounded-full hover:bg-orange-700 transition"
                >
                  Request Custom Itinerary
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* FAQs Accordion */}
        {adventure.faqs && adventure.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {adventure.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 font-bold text-gray-800 hover:text-orange-600 transition"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <i
                      className={`ph-bold ph-caret-down text-lg text-gray-400 transition-transform duration-200 ${
                        activeFaq === idx ? "rotate-180 text-orange-600" : ""
                      }`}
                    ></i>
                  </button>

                  {activeFaq === idx && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Explore Other Adventure Styles Grid */}
        <section className="space-y-6 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Continue Exploring
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                Explore Other Adventure Styles
              </h2>
            </div>
            <Link
              to="/adventure-styles"
              className="text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              <span>View All 8 Styles</span>
              <i className="ph-bold ph-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {otherAdventures.map((style) => (
              <Link
                key={style.id}
                to={`/adventure-styles/${style.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col group border border-gray-100"
              >
                <div
                  className="h-36 w-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${style.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                  <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-800">
                    <i className={`ph-bold ${style.icon} text-base`}></i>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-gray-900 group-hover:text-orange-600 transition mb-1 text-base">
                      {style.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {style.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-orange-600 font-bold">
                    <span>Explore Single Page</span>
                    <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Need Expert Advice for {adventure.title}?
          </h2>
          <p className="text-orange-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Our mountain expedition leaders and itinerary specialists are ready to tailor your perfect Uttarakhand journey.
          </p>
          <div className="pt-2 flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white text-orange-700 font-bold rounded-full shadow-lg hover:bg-orange-50 transition"
            >
              Talk to a Mountain Specialist
            </Link>
            <Link
              to="/tours"
              className="px-8 py-3.5 bg-orange-700/60 hover:bg-orange-700 text-white font-bold rounded-full border border-white/30 transition"
            >
              Browse All Uttarakhand Tours
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
