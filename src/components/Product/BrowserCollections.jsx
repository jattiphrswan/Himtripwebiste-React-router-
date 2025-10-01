import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/broswer/adventurs.jpg";
import img2 from "../../assets/broswer/clearwater-lakes.jpg";
import img3 from "../../assets/broswer/Baijnath-Temple-An-Ancient-Shiva-Temple-in-Uttarakhand.jpg";
import img4 from "../../assets/broswer/govind-national-park.jpg";
import img5 from "../../assets/broswer/mountains.jpg";

const collections = [
  { id: 1, title: "Mountains", subtitle: "Explore majestic peaks", image: img1 },
  { id: 2, title: "Lakes", subtitle: "Relax by serene waters", image: img2 },
  { id: 3, title: "Temples", subtitle: "Discover spiritual places", image: img3 },
  { id: 4, title: "Adventure", subtitle: "Thrilling experiences", image: img4 },
  { id: 5, title: "Food", subtitle: "Taste local delicacies", image: img5 },
];

export default function BrowserCollections() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 animate-fadeUp">
            Browse Collections
          </h2>
          <p
            className="mt-2 text-gray-600 animate-fadeUp"
            style={{ animationDelay: "0.2s" }}
          >
            Get ideas on what to do, see, and eat
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {collections.map((item, index) => (
            <div key={item.id} className="px-3 sm:px-2">
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-500 transform hover:scale-105 opacity-0 animate-fadeUp"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Fade-up animation CSS */}
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
      </div>
    </section>
  );
}
