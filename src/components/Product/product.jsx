import React from "react";
import { Link } from "react-router-dom";
import toursData from "../Backend/BackenData";

const formatINR = (price) => `₹${price.toLocaleString("en-IN")}`;

export default function Products() {
  // Show only first 4 tours
  const displayedTours = toursData.slice(0, 4);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-10">
          Popular Tours
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {tour.destination}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-orange-600 font-bold text-lg">
                      {formatINR(tour.price)}
                    </span>
                    {tour.onSale && (
                      <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-full">
                        On Sale
                      </span>
                    )}
                  </div>
                </div>

                {/* Book Now Button */}
                <Link
                  to={`/booking/${tour.id}`}
                  className="mt-auto inline-block w-full text-center px-4 py-2 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Link to full tours page */}
        <div className="text-center mt-10">
          <Link
            to="/tours"
            className="inline-block px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
