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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,          // 👈 enable automatic sliding
    autoplaySpeed: 3000,     // 👈 change slide every 3 seconds
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Browse Collections
          </h2>
          <p className="mt-2 text-gray-600">
            Get ideas on what to do, see, and eat
          </p>
        </div>

        <Slider {...settings}>
          {collections.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
