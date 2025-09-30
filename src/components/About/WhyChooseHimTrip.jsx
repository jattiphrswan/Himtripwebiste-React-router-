import React from "react";
import { FaUsers, FaStar, FaHeart, FaHeadset } from "react-icons/fa";

const WhyChooseHimTrip = () => {
  const features = [
    {
      id: 1,
      icon: <FaUsers className="text-4xl text-[#EA580C]" />,
      title: "3 Million+ Happy Customers",
      description:
        "Trusted by travelers from 70+ countries, exploring the beauty of Uttarakhand.",
    },
    {
      id: 2,
      icon: <FaStar className="text-4xl text-[#EA580C]" />,
      title: "4.6 / 5.0 Ratings",
      description:
        "Cumulative ratings of our Uttarakhand trips across multiple platforms.",
    },
    {
      id: 3,
      icon: <FaHeart className="text-4xl text-[#EA580C]" />,
      title: "Curated with Love",
      description:
        "Expert-guided trips meticulously planned to give you unforgettable Uttarakhand experiences.",
    },
    {
      id: 4,
      icon: <FaHeadset className="text-4xl text-[#EA580C]" />,
      title: "24/7 Support",
      description:
        "We are always there to help you before, during, and after your Uttarakhand trip.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Why Choose HimTrip
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-white rounded-2xl p-6 text-center shadow-lg transform transition duration-500 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fadeIn`}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default WhyChooseHimTrip;
