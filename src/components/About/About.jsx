import React, { useState } from "react";
import { Link } from "react-router-dom";
import about from "../../assets/places/him.jpg";
import bannerImg from "../../assets/places/banner.webp";

// Mock Stats Data
const KEY_FACTS = [
  { value: "5000+", label: "Happy Travelers", icon: "ph-users-three-fill" },
  { value: "300+", label: "Tours Available", icon: "ph-map-trifold-fill" },
  { value: "10+", label: "Years Experience", icon: "ph-calendar-check-fill" },
  { value: "24/7", label: "Local Support", icon: "ph-headset-fill" },
];

// --- Tab Content Components ---
const OurStoryContent = () => (
  <>
    <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fadeIn">
      <div>
        <h2 className="text-3xl font-extrabold text-orange-600 mb-4 flex items-center gap-2">
          <i className="ph-bold ph-mountain text-4xl"></i> What is an Organized Adventure?
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          HimTrip was founded to unlock the spiritual, adventurous, and natural treasures of Uttarakhand.
        </p>
        <div className="text-md text-gray-600 mt-6 p-4 bg-orange-50 border-l-4 border-orange-400 rounded-md">
          We focus exclusively on <strong>"Devbhoomi"</strong>, offering authentic journeys.
        </div>
      </div>
      <div>
        <img src={about} alt="Himalayan adventure" className="rounded-xl w-full h-auto object-cover shadow-lg" />
      </div>
    </section>

    <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
      <div className="p-6 bg-blue-50 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <i className="ph-bold ph-eye text-blue-600"></i> Mission Statement
        </h3>
        <p className="text-gray-600">
          To provide safe, sustainable, and soulful travel experiences across Uttarakhand.
        </p>
      </div>
      <div className="p-6 bg-green-50 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <i className="ph-bold ph-chart-line text-green-600"></i> Vision for the Future
        </h3>
        <p className="text-gray-600">
          To be the most respected and responsible tour operator in the Indian Himalayas.
        </p>
      </div>
    </section>

    <section className="mb-12 p-6 sm:p-12 bg-gray-100 border-t rounded-xl shadow-inner animate-fadeIn">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { icon: "ph-shield-check", title: "Safety First", desc: "Certified guides, reliable equipment." },
          { icon: "ph-tree-evergreen", title: "Sustainability", desc: "Leave No Trace, support local communities." },
          { icon: "ph-house-line", title: "Local Connection", desc: "Experience genuine culture through locals." },
        ].map((val, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center"
          >
            <i className={`ph-bold ${val.icon} text-5xl text-orange-500 mb-3`}></i>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{val.title}</h3>
            <p className="text-gray-600 text-sm">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

const OurTeamContent = () => (
  <div className="p-8 sm:p-12 text-center min-h-[300px] bg-white rounded-xl shadow-md border border-gray-200 animate-fadeIn">
    <i className="ph-bold ph-users-four text-6xl text-orange-500 mb-4"></i>
    <h3 className="text-3xl font-extrabold text-gray-800 mb-4">Meet the HimTrip Family</h3>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Our team consists of passionate locals, certified trek leaders, and travel enthusiasts dedicated to perfect Himalayan experiences.
    </p>
  </div>
);

const CareersContent = () => (
  <div className="p-8 sm:p-12 text-center min-h-[300px] bg-white rounded-xl shadow-md border border-gray-200 animate-fadeIn">
    <i className="ph-bold ph-rocket text-6xl text-orange-500 mb-4"></i>
    <h3 className="text-3xl font-extrabold text-gray-800 mb-4">Join Our Adventure</h3>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Explore exciting career opportunities as guides, managers, and travel planners in the Himalayas.
    </p>
  </div>
);

// --- Main Component ---
export default function AboutPage() {
  const TABS = [
    { id: "story", label: "Our Story", icon: "ph-mountains" },
    { id: "team", label: "Our Team", icon: "ph-users" },
    { id: "careers", label: "Careers", icon: "ph-suitcase" },
    { id: "press", label: "Press & Media", icon: "ph-newspaper" },
  ];

  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const renderContent = () => {
    switch (activeTab) {
      case "story":
        return <OurStoryContent />;
      case "team":
        return <OurTeamContent />;
      case "careers":
        return <CareersContent />;
      case "press":
        return (
          <div className="p-8 sm:p-12 text-center min-h-[300px] bg-white rounded-xl shadow-md border border-gray-200 animate-fadeIn">
            <i className="ph-bold ph-newspaper text-6xl text-orange-500 mb-4"></i>
            <h3 className="text-3xl font-extrabold text-gray-800 mb-4">In The News</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Media inquiries regarding HimTrip's operations in Uttarakhand.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <header
        className="text-center pt-24 sm:pt-40 px-4 sm:px-12 text-white rounded-3xl"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeIn">
          Your Himalayan Journey, Crafted by Experts
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto animate-fadeIn">
          HimTrip shares the spiritual, adventurous, and natural treasures of Uttarakhand with the world.
        </p>
      </header>

      {/* Tabs Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 z-20 bg-gray-50">
        <div className="flex overflow-x-auto justify-start sm:justify-center max-w-6xl mx-auto px-4 sm:px-0">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-3 px-5 text-center text-sm sm:text-base font-semibold whitespace-nowrap transition duration-200 ease-in-out border-b-4
                ${activeTab === tab.id
                  ? "border-orange-600 text-orange-700 bg-orange-50/30"
                  : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800"
                }`}
            >
              <i className={`ph-bold ${tab.icon} text-lg`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <div className="p-6 sm:p-12 max-w-6xl mx-auto">{renderContent()}</div>

      {/* CTA Section */}
      <section
        className="relative text-center p-8 sm:p-16 bg-cover bg-center rounded-3xl mx-4 sm:mx-10 mb-10"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
        <div className="relative z-10 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Begin Your Himalayan Adventure?
          </h2>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto">
            Explore curated trips across Uttarakhand's majestic landscapes and start planning your next journey with us.
          </p>
          <Link
            to="/tours"
            className="inline-flex items-center px-8 sm:px-10 py-3 sm:py-4 border border-transparent text-lg sm:text-xl font-medium rounded-full shadow-lg text-white bg-orange-500 hover:bg-orange-100 hover:text-orange-600 transition focus:outline-none focus:ring-4 focus:ring-white/70"
          >
            <i className="ph ph-arrow-circle-right text-2xl mr-2"></i>
            View All Uttarakhand Tours
          </Link>
        </div>
      </section>

      {/* Tailwind fadeIn animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
        `}
      </style>
    </div>
  );
}
