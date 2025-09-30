import React from "react";
import { Link } from "react-router-dom";
import { ADVENTURE_STYLES } from "../Backend/BackenData";

// StyleCard Component with fade-in animation
const StyleCard = ({ style, delay }) => (
  <div
    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group transform transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 flex flex-col h-full opacity-0 animate-fadeUp"
    style={{ animationDelay: `${delay}s` }}
  >
    <div
      className="h-40 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${style.imageUrl})` }}
    >
      <div className="w-full h-full bg-black/10 group-hover:bg-black/20 transition duration-300"></div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-extrabold text-gray-900 mb-2 leading-snug">
        {style.title}
      </h3>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{style.description}</p>
      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="text-xs font-semibold uppercase text-orange-600 mb-1">
          Explore Destinations:
        </p>
        <p className="text-sm text-gray-700 font-medium">{style.example}</p>
      </div>
    </div>
  </div>
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
