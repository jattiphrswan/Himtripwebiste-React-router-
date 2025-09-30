import React, { useState } from "react";
import { Link } from "react-router-dom";
import about from "../../assets/places/him.jpg";
import bannerImg from "../../assets/places/banner.webp"; // Background image for CTA section

// Mock Stats Data (Inspired by professional travel sites)
const KEY_FACTS = [
  { value: "5000+", label: "Happy Travelers", icon: "ph-users-three-fill" },
  { value: "300+", label: "Tours Available", icon: "ph-map-trifold-fill" },
  { value: "10+", label: "Years Experience", icon: "ph-calendar-check-fill" },
  { value: "24/7", label: "Local Support", icon: "ph-headset-fill" },
];

// --- Sub-components for Tab Content ---

const OurStoryContent = () => (
  <>
    {/* Section 1: Our Purpose & Origin (Two-Column Layout) */}
    <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Column 1: Our Purpose */}
      <div className="p-2 ">
        <h2 className="text-3xl font-extrabold text-orange-600 mb-4 flex items-center ">
          <i className="ph-bold ph-mountain text-4xl"></i>
          <span>What is an Organized Adventure?</span>
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          HimTrip was founded with a profound mission: to **unlock the
          spiritual, adventurous, and natural treasures of Uttarakhand** for the
          world. We believe travel should be transformative, respectful, and
          seamless.
        </p>
        <div className="text-md text-gray-600 mt-6 p-3 bg-orange-50 border-l-4 border-orange-400 rounded-md">
          We focus exclusively on the **"Devbhoomi"** (Land of the Gods),
          offering unparalleled local expertise for authentic, unforgettable
          journeys.
        </div>
      </div>

      {/* Column 2: Our Origin Story */}
      <div className=" ">
        <img src={about} alt=""  className="rounded-xl"/>
      </div>
    </section>

    {/* Section 2: Mission and Vision */}
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
        <i className="ph-bold ph-strategy text-orange-600 text-4xl"></i>
        <span>Our Mission and Vision</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-blue-50 rounded-xl shadow-inner border-l-4 border-blue-500">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center">
            <i className="ph-bold ph-eye text-blue-600 mr-2"></i> Mission
            Statement
          </h3>
          <p className="text-gray-600">
            To provide safe, sustainable, and soulful travel experiences across
            Uttarakhand, connecting travelers to the region's diverse
            landscapes, vibrant culture, and spiritual heritage.
          </p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl shadow-inner border-l-4 border-green-500">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center">
            <i className="ph-bold ph-chart-line text-green-600 mr-2"></i> Vision
            for the Future
          </h3>
          <p className="text-gray-600">
            To be the most respected and responsible tour operator in the Indian
            Himalayas, setting the standard for eco-friendly adventure and
            pilgrimage travel.
          </p>
        </div>
      </div>
    </section>

    {/* Section 3: Core Values (Refactored to Grid) */}
    <section className="mb-12 p-8 sm:p-12 bg-gray-100 border-t rounded-xl shadow-inner">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Our Core Values Define Every Trip
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Value 1: Safety */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-center">
          <i className="ph-bold ph-shield-check text-5xl text-green-600 mb-3"></i>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            1. Safety First
          </h3>
          <p className="text-gray-600 text-sm">
            Our **certified guides** are trained in high-altitude first aid. We
            prioritize acclimatization and use dependable equipment to ensure
            peace of mind.
          </p>
        </div>

        {/* Value 2: Sustainability */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-center">
          <i className="ph-bold ph-tree-evergreen text-5xl text-teal-600 mb-3"></i>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            2. Sustainability
          </h3>
          <p className="text-gray-600 text-sm">
            We implement strict **'Leave No Trace' policies** and ensure our
            economic impact positively benefits the local Himalayan communities.
          </p>
        </div>

        {/* Value 3: Local Connection */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-center">
          <i className="ph-bold ph-house-line text-5xl text-blue-600 mb-3"></i>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            3. Local Connection
          </h3>
          <p className="text-gray-600 text-sm">
            Experience genuine culture through **local villagers** and
            home-cooked regional cuisine, adding a cultural depth to your
            journey.
          </p>
        </div>
      </div>
    </section>
  </>
);

const OurTeamContent = () => (
  <div className="p-12 text-center min-h-[350px] bg-white rounded-xl shadow-md border border-gray-200">
    <i className="ph-bold ph-users-four text-7xl text-orange-500 mb-4"></i>
    <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
      Meet the HimTrip Family
    </h3>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Our team consists of passionate locals, certified trek leaders, and travel
      enthusiasts dedicated to making your Uttarakhand experience perfect. They
      are the heart and soul of HimTrip. *Content coming soon!*
    </p>
  </div>
);

const CareersContent = () => (
  <div className="p-12 text-center min-h-[350px] bg-white rounded-xl shadow-md border border-gray-200">
    <i className="ph-bold ph-rocket text-7xl text-orange-500 mb-4"></i>
    <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
      Join Our Adventure
    </h3>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Interested in sharing the magic of the Himalayas? We are looking for local
      guides, operations managers, and travel planners. Check back soon for
      exciting career opportunities to become a part of the HimTrip team!
    </p>
  </div>
);

// --- Main About Page Component ---

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
          <div className="p-12 text-center min-h-[350px] bg-white rounded-xl shadow-md border border-gray-200">
            <i className="ph-bold ph-newspaper text-7xl text-orange-500 mb-4"></i>
            <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
              In The News
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              For all media and press inquiries regarding HimTrip's operations
              in Uttarakhand, please contact us directly.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans   ">
      {/* The main container is now full width, removing max-w, shadow, and rounded corners */}
      <div className="w-full mx-auto shadow-none rounded-none overflow-hidden ">
        {/* Main Header & Hero Text */}
        <header
          className="text-center pt-40 sm:p-40  text-white rounded-3xl m-10 "
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
            Your Himalayan Journey, Crafted by Experts
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            We are HimTrip, a passionate team dedicated to sharing the
            spiritual, adventurous, and natural treasures of Uttarakhand with
            the world.
          </p>
        </header>

        {/* Key Facts / Trust Data Section (Constrains the white card in the center) */}

        {/* TAB NAVIGATION SECTION */}
        <nav className="border-b border-gray-200  sticky top-0 z-20 ">
          <div className="flex overflow-x-auto justify-start sm:justify-center max-w-6xl mx-auto px-4 sm:px-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                                    flex items-center space-x-2 py-4 px-6 text-center text-base font-semibold whitespace-nowrap 
                                    transition duration-200 ease-in-out border-b-4 
                                    ${
                                      activeTab === tab.id
                                        ? "border-orange-600 text-orange-700 bg-orange-50/50"
                                        : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800"
                                    }
                                `}
              >
                <i className={`ph-bold ${tab.icon} text-lg`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* TAB CONTENT AREA (Constrained for readability) */}
        <div className="p-8 sm:p-12 max-w-6xl mx-auto">{renderContent()}</div>

        {/* Section 5: CTA */}
        <section
          className="relative text-center p-12 bg-cover bg-center bg-no-repeat  mr-10 ml-10 mb-10 rounded-3xl"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to Begin Your Himalayan Adventure?
            </h2>
            <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
              Explore the curated trips designed just for Uttarakhand's majestic
              landscape and start planning your next journey with us.
            </p>
            <Link
              to="/tours" // change this to the route of your tours page
              className="inline-flex items-center px-10 py-4 border border-transparent text-xl font-normal rounded-full shadow-lg text-white bg-orange-500 hover:bg-orange-100 hover:text-orange-600 transition focus:outline-none focus:ring-4 focus:ring-white/70"
            >
              <i className="ph- ph-arrow-circle-right text-2xl mr-2"></i>
              View All Uttarakhand Tours
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
