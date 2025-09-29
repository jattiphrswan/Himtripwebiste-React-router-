import React from "react";
import Products from "../Product/product"; 
import { Link } from "react-router-dom";
import kedarnath from "../../assets/places/him.jpg"; // import the image
import BrowserCollections from "../Product/BrowserCollections";
import SearchForm from "../Product/SearchForm";
import WhyChooseHimTrip from "../About/WhyChooseHimTrip";




export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${kedarnath})` }} // use style for dynamic local images
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl text-white space-y-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight sm:leading-snug drop-shadow-lg">
             Experience Uttarakhand Like Never Before
            </h1>
            <p className="text-lg sm:text-2xl text-gray-100 drop-shadow-md">
              Breathtaking views aur unforgettable moments ka perfect combo.
            </p>
          </div>
        </div>
      </div>
      <div className="sticky top-[80px] mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8 z-40 -mt-12">
        {/* Additional sections can be added here */}
        <SearchForm />
      </div>
      

      <div>
        {/* Additional sections can be added here */}
        
        <div className="text-center mb-10 ">
          {/* Products Section */}
             <Products />
            <BrowserCollections />
        </div>
      </div>
      
      <div>
        {/* Additional sections can be added here */}
        <WhyChooseHimTrip />
      </div>
    </div>
  );
}
