import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Compass,
  Sparkles,
  Layers,
} from "lucide-react";

// Curated Collection Images
import templeImg from "../../assets/broswer/Baijnath-Temple-An-Ancient-Shiva-Temple-in-Uttarakhand.jpg";
import lakeImg from "../../assets/broswer/clearwater-lakes.jpg";
import mountainImg from "../../assets/broswer/Mountains.jpg";
import wildlifeImg from "../../assets/broswer/govind-national-park.jpg";
import raftingImg from "../../assets/adventurs/river-rafting.webp";
import campingImg from "../../assets/adventurs/camping.jpeg";
import trekkingImg from "../../assets/adventurs/tracking.jpg";
import yogaImg from "../../assets/adventurs/yoga.jpg";

const collections = [
  {
    id: 1,
    title: "Sacred Temples",
    subtitle: "Ancient stone shrines, Ganga aartis & holy pilgrimage circuits.",
    image: templeImg,
    badge: "Spiritual Darshan",
    count: "14+ Shrines",
    tag: "Pilgrimage",
    link: "/tours",
  },
  {
    id: 2,
    title: "Alpine Lakes",
    subtitle: "Pristine emerald waters, boating & serene lakeside retreats.",
    image: lakeImg,
    badge: "Scenic Waters",
    count: "9+ Lakes",
    tag: "Lakes & Boating",
    link: "/tours",
  },
  {
    id: 3,
    title: "Himalayan Peaks",
    subtitle: "Snow-crowned summits, panoramic passes & high-altitude vistas.",
    image: mountainImg,
    badge: "Snow Viewpoints",
    count: "18+ Peaks",
    tag: "Mountains",
    link: "/tours",
  },
  {
    id: 4,
    title: "River Rafting",
    subtitle: "Navigate legendary grade III/IV rapids on the roaring Ganges.",
    image: raftingImg,
    badge: "Adrenaline Rush",
    count: "Grade III/IV",
    tag: "Water Sports",
    link: "/adventure-styles/1",
  },
  {
    id: 5,
    title: "Wildlife Safaris",
    subtitle: "Untamed elephant corridors, deer herds & sanctuary trails.",
    image: wildlifeImg,
    badge: "Jungle Trail",
    count: "6 Sanctuaries",
    tag: "National Parks",
    link: "/adventure-styles/4",
  },
  {
    id: 6,
    title: "Wilderness Camping",
    subtitle: "Riverside dome tents, campfire stories & starry night skies.",
    image: campingImg,
    badge: "Night Sky",
    count: "12+ Campsites",
    tag: "Outdoor Stays",
    link: "/adventure-styles/3",
  },
  {
    id: 7,
    title: "Mountain Treks",
    subtitle: "Alpine meadows, glacial crossings & certified trek leaders.",
    image: trekkingImg,
    badge: "Summit Trails",
    count: "15+ Routes",
    tag: "Expeditions",
    link: "/adventure-styles/2",
  },
  {
    id: 8,
    title: "Yoga & Wellness",
    subtitle: "Ganga-side pranayama, satvik nutrition & sound healing retreats.",
    image: yogaImg,
    badge: "Peace & Healing",
    count: "Daily Sessions",
    tag: "Mindfulness",
    link: "/adventure-styles/5",
  },
];

export default function BrowserCollections() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 550,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3800,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280, // Laptops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="relative w-full py-6 sm:py-10">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-gradient-to-r from-orange-200/20 via-amber-100/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="w-full">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 shadow-xs mb-3">
              <Layers className="w-4 h-4 text-orange-600" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-orange-700 font-heading">
                Curated Travel Themes
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
              Browse{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Collections
              </span>
            </h2>

            <p className="mt-2.5 text-slate-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Explore Uttarakhand by your favorite mood — sacred shrines, tranquil lakes, adrenaline rapids, or campfire nights.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous Collection"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-orange-600 hover:border-orange-600 hover:text-white text-slate-700 shadow-sm transition-all duration-200 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next Collection"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-orange-600 hover:border-orange-600 hover:text-white text-slate-700 shadow-sm transition-all duration-200 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="-mx-2 sm:-mx-3">
          <Slider ref={sliderRef} {...settings}>
            {collections.map((item) => (
              <div key={item.id} className="px-2 sm:px-3 py-2">
                <Link
                  to={item.link}
                  className="group relative block h-[380px] sm:h-[400px] rounded-3xl overflow-hidden shadow-[0_6px_25px_-6px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_50px_-10px_rgba(234,88,12,0.25)] border border-slate-200/80 transition-all duration-500 hover:-translate-y-2 bg-slate-900"
                >
                  {/* Photo with zoom effect */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80";
                    }}
                  />

                  {/* Multi-stop scrim overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/25 group-hover:via-black/35 transition-colors duration-300" />

                  {/* Top Floating Tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider shadow-sm">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>{item.badge}</span>
                    </span>

                    <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border border-white/20 shadow-xs">
                      {item.count}
                    </span>
                  </div>

                  {/* Bottom Content Over Image */}
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <span className="text-orange-400 text-xs font-bold uppercase tracking-wider block mb-1">
                      {item.tag}
                    </span>

                    <h3 className="text-2xl sm:text-[26px] font-black text-white leading-tight font-heading group-hover:text-orange-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-200 mt-2 line-clamp-2 leading-relaxed font-normal">
                      {item.subtitle}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-bold text-white group-hover:text-orange-300 transition-colors">
                      <span>Explore Collection</span>
                      <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
