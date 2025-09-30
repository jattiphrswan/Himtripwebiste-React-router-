import React from "react";
import bannerImg from "../../assets/adventurs/adventuresbanner.jpeg";
import { ADVENTURE_STYLES } from "../Backend/BackenData"; // adjust path if needed
import Products from "./product";
import BrowserCollections from "./BrowserCollections";

const StyleCard = ({ style }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group transform transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
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

export default function AdventureStylesPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans ">
      <header className=" text-white shadow-2xl ml-10 mr-10 rounded-3xl" style={{
                  backgroundImage: `url(${bannerImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="lg:text-left text-center">
            <h1 className="text-sm font-semibold uppercase tracking-wider text-orange-200 mb-2">
              Adventure Styles of Uttarakhand
            </h1>
            <p className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              Find Your True Himalayan Calling.
            </p>
            <p className="text-xl text-orange-100 max-w-4xl mx-auto lg:mx-0">
              Dive deep into the heart of Devbhoomi with trips tailored to every
              kind of explorer, from spiritual seekers to extreme adventurers.
            </p>
            <a
              href="/tours"
              className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-lg font-bold rounded-full shadow-lg text-orange-800 bg-white hover:bg-orange-100 transition"
            >
              View All Tours
            </a>
          </div>
        </div>
      </header>

      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
          Our Most Popular Uttarakhand Experiences
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ADVENTURE_STYLES.map((style) => (
            <StyleCard key={style.id} style={style} />
          ))}
        </div>
      </section>
      <Products /> 
        <BrowserCollections />
      
    </div>
  );
}
