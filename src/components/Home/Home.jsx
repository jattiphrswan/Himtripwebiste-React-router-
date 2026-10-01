import React from "react";
import Products from "../Product/product"; 
import BrowserCollections from "../Product/BrowserCollections";
import SearchForm from "../Product/SearchForm";
import WhyChooseHimTrip from "../About/WhyChooseHimTrip";
import AdventurePreview from "../Product/AdventurePreview"; 
import ExploreUttarakhand from "./ExploreUttarakhand";
import TracksSection from "./TracksSection";
import kedarnath from "../../assets/places/him.jpg"; 

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[92vh] sm:min-h-screen bg-cover bg-center flex flex-col items-center justify-center animate-fadeIn pt-24 pb-16 px-4"
        style={{ backgroundImage: `url(${kedarnath})` }}
      >
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600/30 backdrop-blur-md border border-orange-400/40 text-orange-200 text-xs sm:text-sm font-semibold mb-4 shadow-sm animate-fadeUp">
            <span>✨ Discover Devbhoomi Uttarakhand</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight drop-shadow-xl animate-fadeUp font-heading">
            Experience Uttarakhand Like Never Before
          </h1>
          <p className="mt-4 text-base sm:text-xl text-gray-200 drop-shadow-md animate-fadeUp font-light" style={{ animationDelay: "0.2s" }}>
            Breathtaking views aur unforgettable moments ka perfect combo.
          </p>
        </div>

        {/* Hero Search Form */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-2 animate-fadeUp" style={{ animationDelay: "0.4s" }}>
          <SearchForm />
        </div>
      </div>

      {/* Main Sections: Explore Uttarakhand, Tracks, Tours, Collections, Adventure Preview */}
      <section className="max-w-[1440px] 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Section 1: Explore Uttarakhand & Quick Trip Planner */}
        <div className="animate-fadeUp" style={{ animationDelay: "0.2s" }}>
          <ExploreUttarakhand />
        </div>

        {/* Section 2: Himalayan Trekking Tracks Section */}
        <div className="animate-fadeUp" style={{ animationDelay: "0.3s" }}>
          <TracksSection />
        </div>

        {/* Section 3: Featured Tour Packages */}
        <div className="animate-fadeUp" style={{ animationDelay: "0.4s" }}>
          <Products />
        </div>

        {/* Section 4: Browse Collections */}
        <div className="animate-fadeUp" style={{ animationDelay: "0.5s" }}>
          <BrowserCollections />
        </div>

        {/* Section 5: Adventure Styles Preview */}
        <div className="animate-fadeUp" style={{ animationDelay: "0.6s" }}>
          <AdventurePreview /> 
        </div>
      </section>

      {/* Why Choose HimTrip */}
      <section className="max-w-[1440px] 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeUp" style={{ animationDelay: "0.8s" }}>
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
