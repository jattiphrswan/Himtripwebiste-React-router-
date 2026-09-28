import React from "react";
import { Link } from "react-router-dom";
import { ADVENTURE_STYLES } from "../Backend/BackenData";

// StyleCard Component with fade-in animation and single-page navigation
const StyleCard = ({ style, delay }) => (
  <Link
    to={`/adventure-styles/${style.id}`}
    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full opacity-0 animate-fadeUp border border-gray-100"
    style={{ animationDelay: `${delay}s` }}
  >
    <div
      className="h-44 w-full bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${style.imageUrl})` }}
    >
      <div className="w-full h-full bg-black/15 group-hover:bg-black/30 transition duration-300"></div>
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-gray-800 shadow flex items-center gap-1.5">
        <i className={`ph-bold ${style.icon} text-orange-600`}></i>
        <span>{style.stats?.duration || "Multi-Day"}</span>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow justify-between">
      <div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-2 leading-snug group-hover:text-orange-600 transition">
          {style.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{style.description}</p>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
        <div>
          <p className="text-xs font-semibold uppercase text-orange-600 mb-0.5">
            Explore Destinations:
          </p>
          <p className="text-sm text-gray-700 font-medium truncate">{style.example}</p>
        </div>

        <div className="flex items-center justify-between text-xs font-bold text-orange-600 group-hover:text-orange-700 pt-1">
          <span>View Adventure Guide</span>
          <span className="transform group-hover:translate-x-1 transition duration-200">
            →
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default function AdventurePreview() {
  // Only show first 4 adventures for Home page preview
  const previewAdventures = ADVENTURE_STYLES.slice(0, 4);

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center animate-fadeUp">
        Popular Uttarakhand Adventures
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {previewAdventures.map((style, index) => (
          <StyleCard key={style.id} style={style} delay={index * 0.2} />
        ))}
      </div>

      <div className="text-center mt-12 animate-fadeUp" style={{ animationDelay: "0.8s" }}>
        <Link
          to="/adventure-styles" // match your Route path
          className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-bold rounded-full shadow-lg text-white bg-orange-600 hover:bg-orange-700 transition"
        >
          View More Adventures
        </Link>
      </div>

      {/* Fade-up animation for all cards */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  );
}
