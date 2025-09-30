import React, { useState, useMemo } from "react";
import himImage from "../../assets/places/kedarnath.png";
import toursData from "../Backend/BackenData"; // import centralized data

// Use toursData instead of initialTours
const initialTours = toursData;
// --- MOCK DATA ---

// --- Helpers ---
const formatINR = (price) =>
  price !== null ? `₹${price.toLocaleString("en-IN")}` : null;

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i)
      stars.push(<i key={i} className="ph-fill ph-star text-base"></i>);
    else if (rating > i - 1)
      stars.push(<i key={i} className="ph-half-fill ph-star text-base"></i>);
    else
      stars.push(
        <i key={i} className="ph ph-star text-base text-gray-300"></i>
      );
  }
  return stars;
};

// --- Tour Card ---
const TourCard = ({ tour, alert }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
    <div className="h-40 relative overflow-hidden rounded-t-xl">
      {tour.onSale && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          SALE
        </span>
      )}
      <img
        src={tour.image} // use backend image
        alt={tour.title}
        className="w-full h-40 object-cover"
      />
    </div>

    <div className="p-4 flex flex-col flex-1">
      <div className="flex items-center text-sm text-yellow-600 mb-2">
        {renderStars(tour.rating)}
        <span className="text-gray-500 ml-2">
          ({tour.rating}/5 based on {tour.reviews} reviews)
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
        {tour.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4 flex items-center space-x-2">
        <i className="ph-bold ph-map-pin"></i>
        <span>{tour.destination}</span>
      </p>
      <div className="flex justify-between items-end border-t pt-3 mt-auto">
        <div className="text-lg">
          <span className="block text-sm text-gray-500">
            Duration: {tour.duration} days
          </span>
          <span className="block text-sm text-gray-500">
            Style: {tour.style}
          </span>
        </div>
        <div className="text-right">
          {tour.originalPrice && (
            <span className="block text-xs text-gray-500 line-through">
              {formatINR(tour.originalPrice)}
            </span>
          )}
          <span
            className={`text-2xl font-extrabold ${
              tour.onSale ? "text-red-600" : "text-orange-600"
            }`}
          >
            {formatINR(tour.price)}
          </span>
          <span className="block text-xs text-gray-500">per person</span>
        </div>
      </div>
    </div>
    <button
      onClick={() => alert(`Navigating to details for: ${tour.title}`)}
      className="w-full bg-orange-500 text-white py-3 font-semibold hover:bg-orange-600 transition focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-b-xl"
    >
      View Tour Details
    </button>
  </div>
);

// --- App Component ---
export default function App() {
  const [filters, setFilters] = useState({
    destination: "Anywhere in Uttarakhand",
    styles: [],
    duration: 15,
    maxBudget: 0,
    sort: "Relevance",
  });
  const [message, setMessage] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const alertMessage = (msg) => {
    setMessage({ type: "info", text: msg });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleFilterChange = (name, value) =>
    setFilters((prev) => ({ ...prev, [name]: value }));
  const handleStyleToggle = (style) =>
    setFilters((prev) => ({
      ...prev,
      styles: prev.styles.includes(style)
        ? prev.styles.filter((s) => s !== style)
        : [...prev.styles, style],
    }));
  const handleToggleFilters = () => setShowFilters((prev) => !prev);

  const filteredAndSortedTours = useMemo(() => {
    let results = initialTours.filter((tour) => {
      const meetsStyle =
        filters.styles.length === 0 || filters.styles.includes(tour.style);
      const meetsBudget =
        filters.maxBudget === 0 || tour.price <= filters.maxBudget;
      const meetsDestination =
        filters.destination === "Anywhere in Uttarakhand" ||
        tour.destination.includes(filters.destination);
      const meetsDuration = tour.duration <= filters.duration;
      return meetsStyle && meetsBudget && meetsDestination && meetsDuration;
    });

    switch (filters.sort) {
      case "Price (Low to High)":
        results.sort((a, b) => a.price - b.price);
        break;
      case "Duration (Shortest)":
        results.sort((a, b) => a.duration - b.duration);
        break;
      case "Reviews":
        results.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return results;
  }, [filters]);

  return (
    <div className="w-full bg-white pt-16">
      {message && (
        <div className=" top-4 right-4 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 shadow-xl rounded-lg z-50">
          {message.text}
        </div>
      )}

      <header
        className="relative bg-cover bg-center bg-no-repeat text-white p-6 sm:p-8 rounded-b-3xl shadow-lg w-full z-20"
        style={{ backgroundImage: `url(${himImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-b-3xl"></div>

        {/* Centered content */}
        <div className="relative flex flex-col justify-center items-center text-center gap-4">
          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-100">
              Uttarakhand Adventure Search
            </span>
            <span className="block text-lg sm:text-2xl text-white mt-1 font-semibold">
              (HimTrip)
            </span>
          </h1>
        </div>

        <div className="relative  inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm text-white font-medium shadow-sm animate-pulse">
          Found {filteredAndSortedTours.length} adventure
          {filteredAndSortedTours.length !== 1 && "s"} in the Himalayas
        </div>
      </header>

      <div className="pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Sidebar */}
          <aside
            className={`${
              showFilters ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition-transform duration-300 fixed lg:static inset-y-0 left-0 w-80 lg:w-full max-w-xs bg-white lg:bg-gray-50 p-4 rounded-lg shadow-2xl lg:shadow-inner lg:sticky lg:top-4 h-fit overflow-y-auto z-40`}
          >
            <div className="flex justify-between items-center lg:hidden border-b pb-2 mb-4">
              <h2 className="text-xl font-semibold text-orange-700">Filters</h2>
              <button
                onClick={handleToggleFilters}
                className="text-gray-700 p-1 rounded-full hover:bg-gray-100"
              >
                <i className="ph ph-x text-2xl"></i>
              </button>
            </div>

            <h2 className="hidden lg:block text-xl font-semibold text-orange-700 mb-4 border-b pb-2 border-orange-200">
              Filter Your Journey in Uttarakhand
            </h2>

            {/* Destination */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination (Town/Region)
              </label>
              <select
                className="form-input w-full p-2 border border-gray-300 rounded-lg"
                value={filters.destination}
                onChange={(e) =>
                  handleFilterChange("destination", e.target.value)
                }
              >
                <option>Anywhere in Uttarakhand</option>
                <option>Rishikesh</option>
                <option>Kedarnath</option>
                <option>Nainital</option>
                <option>Auli</option>
                <option>Dehradun</option>
              </select>
            </div>

            {/* Style */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tour Style
              </label>
              <div className="space-y-2">
                {[
                  "Pilgrimage",
                  "Trekking",
                  "Adventure Sports",
                  "Family",
                  "Winter Sports",
                  "Sightseeing",
                ].map((style) => (
                  <label
                    key={style}
                    className="flex items-center text-sm text-gray-600 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.styles.includes(style)}
                      onChange={() => handleStyleToggle(style)}
                      className="form-checkbox text-orange-600 rounded"
                    />
                    <span className="ml-2">{style}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration: {filters.duration} Days
              </label>
              <input
                type="range"
                min="1"
                max="15"
                value={filters.duration}
                onChange={(e) =>
                  handleFilterChange("duration", parseInt(e.target.value))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>15+</span>
              </div>
            </div>

            {/* Budget */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Budget (₹)
              </label>
              <input
                type="number"
                placeholder="Max Price (e.g., 40000)"
                className="form-input w-full p-2 border border-gray-300 rounded-lg"
                value={filters.maxBudget}
                onChange={(e) =>
                  handleFilterChange("maxBudget", parseInt(e.target.value) || 0)
                }
              />
            </div>

            <button
              onClick={() => {
                alertMessage(
                  `Filters applied: Destination=${
                    filters.destination
                  }, Budget=${formatINR(filters.maxBudget)}`
                );
                handleToggleFilters();
              }}
              className="w-full py-2 mt-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Apply Filters
            </button>
          </aside>

          {/* Tour Cards */}
          <main className="lg:col-span-3 space-y-4 w-full">
            <div className="lg:hidden">
              <button
                onClick={handleToggleFilters}
                className="w-full py-2 bg-orange-100 text-orange-700 font-semibold rounded-lg hover:bg-orange-200 transition flex items-center justify-center space-x-2 border border-orange-300"
              >
                <i className="ph ph-sliders-horizontal text-lg"></i>
                <span>Filter Tours</span>
              </button>
            </div>

            {/* Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-2 sm:mb-0">
                Showing {filteredAndSortedTours.length} Uttarakhand tours
              </p>
              <div className="flex items-center space-x-2">
                <label
                  htmlFor="sort"
                  className="text-sm text-gray-600 whitespace-nowrap"
                >
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="form-input p-1 border border-gray-300 rounded-lg text-sm appearance-none bg-white"
                  value={filters.sort}
                  onChange={(e) => handleFilterChange("sort", e.target.value)}
                >
                  <option>Relevance</option>
                  <option>Price (Low to High)</option>
                  <option>Duration (Shortest)</option>
                  <option>Reviews</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAndSortedTours.length > 0 ? (
                filteredAndSortedTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} alert={alertMessage} />
                ))
              ) : (
                <div className="lg:col-span-3 sm:col-span-2 text-center p-12 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-xl font-medium text-yellow-800">
                    No Uttarakhand tours found matching your criteria.
                  </p>
                  <p className="text-sm text-yellow-600 mt-2">
                    Try adjusting your filters or search terms.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
