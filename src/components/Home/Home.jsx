import React from "react";
import Products from "../Product/product"; 
import BrowserCollections from "../Product/BrowserCollections";
import SearchForm from "../Product/SearchForm";
import WhyChooseHimTrip from "../About/WhyChooseHimTrip";
import AdventurePreview from "../Product/AdventurePreview"; 
import kedarnath from "../../assets/places/him.jpg"; 

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center animate-fadeIn"
        style={{ backgroundImage: `url(${kedarnath})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight sm:leading-snug drop-shadow-lg animate-fadeUp">
            Experience Uttarakhand Like Never Before
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-100 drop-shadow-md animate-fadeUp" style={{ animationDelay: "0.3s" }}>
            Breathtaking views aur unforgettable moments ka perfect combo.
          </p>
        </div>
      </div>

      {/* Sticky Search Form */}
      <div className="sticky top-[80px] z-40 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 animate-fadeIn">
        <SearchForm />
      </div>

      {/* Products, Collections, Adventure Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="animate-fadeUp" style={{ animationDelay: "0.2s" }}>
          <Products />
        </div>
        <div className="animate-fadeUp" style={{ animationDelay: "0.4s" }}>
          <BrowserCollections />
        </div>
        <div className="animate-fadeUp" style={{ animationDelay: "0.6s" }}>
          <AdventurePreview /> 
        </div>
      </section>

      {/* Why Choose HimTrip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeUp" style={{ animationDelay: "0.8s" }}>
        <WhyChooseHimTrip />
      </section>

      {/* TailwindCSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }

          .animate-fadeUp {
            animation: fadeUp 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
}
