import React from "react";
import img1 from "../../assets/places/almora.jpeg";
import img2 from "../../assets/places/naintal.jpeg";
import img3 from "../../assets/places/rishikesh.jpeg";
import img4 from "../../assets/places/mussoire.jpg";

export default function Products() {
  // Dynamic products data
  const packages = [
    {
      id: 1,
      title: "Almora Adventure",
      location: "Almora, Uttarakhand",
      price: "$199",
      image: img1, // use imported variable
    },
    {
      id: 2,
      title: "Nainital Lake Trip",
      location: "Nainital, Uttarakhand",
      price: "$149",
      image: img2,
    },
    {
      id: 3,
      title: "Rishikesh Adventure",
      location: "Rishikesh, Uttarakhand",
      price: "$299",
      image: img3,
    },
    {
      id: 4,
      title: "Mussoorie Scenic Tour",
      location: "Mussoorie, Uttarakhand",
      price: "$249",
      image: img4,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Explore Uttarakhand Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col items-center space-y-2">
                <h3 className="text-lg font-semibold">{pkg.title}</h3>
                <p className="text-gray-500">{pkg.location}</p>
                <p className="text-orange-600 font-bold">{pkg.price}</p>
                <button className="mt-2 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
