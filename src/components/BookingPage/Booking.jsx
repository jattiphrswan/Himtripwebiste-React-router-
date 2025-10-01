import React, { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import toursData from "../Backend/BackenData"; // Your tours data

// Format price in INR
const formatINR = (price) => `₹${price.toLocaleString("en-IN")}`;

// Optional activities
const ACTIVITIES = [
  { id: "insurance", name: "Travel Insurance", price: 1500 },
  { id: "bike_rental", name: "Bike Rental (2 Days)", price: 3000 },
  { id: "porter", name: "Personal Porter Service", price: 5000 },
  { id: "transfer", name: "Dehradun Airport Transfer", price: 2000 },
];

// Initial booking state
const getInitialBookingData = (tour) => ({
  tour,
  numTravelers: 1,
  activities: [],
  travelers: [{ name: "", age: "", email: "" }],
  totalPrice: tour.price,
});

// Step progress bar
const StepIndicator = ({ currentStep, totalSteps }) => (
  <div className="flex justify-between items-center mb-8 px-2 sm:px-0 overflow-x-auto">
    {[...Array(totalSteps).keys()].map((i) => {
      const stepNum = i + 1;
      const isActive = stepNum === currentStep;
      const isCompleted = stepNum < currentStep;
      const labels = ["Tour & People", "Activities", "Traveler Details", "Confirmation"];
      return (
        <React.Fragment key={stepNum}>
          <div className="flex flex-col items-center min-w-[70px] sm:min-w-auto">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-colors duration-300 shadow-md ${
                isCompleted ? "bg-green-500" : isActive ? "bg-orange-600" : "bg-gray-300"
              }`}
            >
              {isCompleted ? "✓" : stepNum}
            </div>
            <span
              className={`text-xs sm:text-sm mt-1 text-center ${
                isActive ? "text-orange-600 font-semibold" : "text-gray-500"
              }`}
            >
              {labels[i]}
            </span>
          </div>
          {stepNum < totalSteps && (
            <div
              className={`flex-grow h-1 mx-1 sm:mx-2 transition-colors duration-300 ${
                isCompleted ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
          )}
        </React.Fragment>
      );
    })}
  </div>
);

// Traveler form
const TravelerDetailForm = ({ index, traveler, onChange }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
    <h4 className="text-lg font-semibold text-gray-700 mb-3">Traveler #{index + 1}</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          value={traveler.name}
          onChange={(e) => onChange(index, "name", e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
          placeholder="E.g., Anil Kumar"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
        <input
          type="number"
          value={traveler.age}
          onChange={(e) => onChange(index, "age", parseInt(e.target.value) || "")}
          min={1}
          max={100}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
          placeholder="Age"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email (Primary)</label>
        <input
          type="email"
          value={traveler.email}
          onChange={(e) => onChange(index, "email", e.target.value)}
          placeholder="email@example.com"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
          required={index === 0}
          disabled={index !== 0}
        />
      </div>
    </div>
  </div>
);

// Booking Component
export default function Booking() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [message, setMessage] = useState(null);
  const TOTAL_STEPS = 4;

  // Select tour based on id
  useEffect(() => {
    const selectedTour = toursData.find((t) => t.id.toString() === id);
    if (selectedTour) {
      setTour(selectedTour);
      setBookingData(getInitialBookingData(selectedTour));
    }
  }, [id]);

  // Price calculation
  const calculatedPrice = useMemo(() => {
    if (!bookingData) return 0;
    const base = bookingData.tour.price * bookingData.numTravelers;
    const activitiesCost = bookingData.activities.reduce((sum, id) => {
      const act = ACTIVITIES.find((a) => a.id === id);
      return sum + (act ? act.price : 0);
    }, 0);
    return base + activitiesCost;
  }, [bookingData]);

  useEffect(() => {
    if (bookingData) setBookingData((prev) => ({ ...prev, totalPrice: calculatedPrice }));
  }, [calculatedPrice]);

  if (!tour || !bookingData) return <div className="p-4">Loading...</div>;

  // Traveler & Activity handlers
  const handleNumTravelersChange = (count) => {
    const newCount = Math.max(1, Math.min(10, count));
    setBookingData((prev) => {
      const newTravelers = Array.from({ length: newCount }, (_, i) => prev.travelers[i] || { name: "", age: "", email: i === 0 ? prev.travelers[0]?.email || "" : "" });
      if (newCount > 0) newTravelers[0].email = prev.travelers[0]?.email || "";
      return { ...prev, numTravelers: newCount, travelers: newTravelers };
    });
  };

  const handleActivityToggle = (activityId) => {
    setBookingData((prev) => {
      const newActivities = prev.activities.includes(activityId)
        ? prev.activities.filter((id) => id !== activityId)
        : [...prev.activities, activityId];
      return { ...prev, activities: newActivities };
    });
  };

  const handleTravelerChange = (index, field, value) => {
    setBookingData((prev) => {
      const newTravelers = [...prev.travelers];
      newTravelers[index][field] = value;
      if (index === 0 && field === "email") {
        for (let i = 1; i < newTravelers.length; i++) if (!newTravelers[i].email) newTravelers[i].email = value;
      }
      return { ...prev, travelers: newTravelers };
    });
  };

  // Step navigation
  const validateStep = () => {
    if (currentStep === 1 && bookingData.numTravelers < 1) {
      setMessage({ type: "error", text: "Please specify at least 1 traveler." });
      setTimeout(() => setMessage(null), 3000);
      return false;
    }
    if (currentStep === 3) {
      for (let i = 0; i < bookingData.travelers.length; i++) {
        const t = bookingData.travelers[i];
        if (!t.name || !t.age) {
          setMessage({ type: "error", text: `Fill name & age for Traveler #${i + 1}` });
          setTimeout(() => setMessage(null), 3000);
          return false;
        }
        if (i === 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)) {
          setMessage({ type: "error", text: "Provide a valid email for primary contact" });
          setTimeout(() => setMessage(null), 3000);
          return false;
        }
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    window.scrollTo(0, 0);
  };
  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    setMessage({ type: "success", text: "Booking submitted successfully!" });
    setTimeout(() => setMessage(null), 4000);
  };

  // --- Render Step Content ---
  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">1. Select Your Journey</h3>
      <div className="p-6 bg-orange-50 border border-orange-200 rounded-xl shadow-inner">
        <h4 className="text-lg sm:text-xl font-semibold text-orange-700">{tour.title}</h4>
        <p className="text-sm sm:text-base text-gray-600 mt-1">{tour.destination}</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <div>
            <span className="font-medium block">Duration:</span>
            <span className="text-lg font-bold text-orange-600">{tour.duration} Days</span>
          </div>
          <div>
            <span className="font-medium block">Base Price (Per Person):</span>
            <span className="text-lg font-bold text-orange-600">{formatINR(tour.price)}</span>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Number of Travelers</label>
        <input
          type="number"
          min={1}
          max={10}
          value={bookingData.numTravelers}
          onChange={(e) => handleNumTravelersChange(parseInt(e.target.value) || 1)}
          className="w-full sm:w-1/2 p-3 border-2 border-orange-300 rounded-lg text-2xl font-bold text-center focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">2. Choose Add-on Activities</h3>
      <div className="space-y-3">
        {ACTIVITIES.map((activity) => (
          <div
            key={activity.id}
            className={`p-4 rounded-xl border-2 transition duration-200 cursor-pointer ${
              bookingData.activities.includes(activity.id)
                ? "bg-orange-100 border-orange-500 shadow-md"
                : "bg-white border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => handleActivityToggle(activity.id)}
          >
            <div className="flex justify-between items-center">
              <label className="flex items-center text-lg font-medium text-gray-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={bookingData.activities.includes(activity.id)}
                  readOnly
                  className="form-checkbox h-5 w-5 text-orange-600 rounded"
                />
                <span className="ml-3">{activity.name}</span>
              </label>
              <span className="text-lg font-semibold text-orange-600">{formatINR(activity.price)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">3. Traveler Details</h3>
      {bookingData.travelers.map((traveler, index) => (
        <TravelerDetailForm key={index} index={index} traveler={traveler} onChange={handleTravelerChange} />
      ))}
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-green-700">4. Review & Confirm Booking</h3>
      <p>Tour: {tour.title}</p>
      <p>Travelers: {bookingData.numTravelers}</p>
      <p>
        Activities:{" "}
        {bookingData.activities.map((id) => ACTIVITIES.find((a) => a.id === id)?.name).join(", ") || "None"}
      </p>
      <p>Total: {formatINR(bookingData.totalPrice)}</p>
    </div>
  );

  return (
    <div className="p-4 sm:p-8 min-h-screen bg-gray-100 font-sans">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10">
        <Link to="/tours" className="text-orange-600 hover:underline mb-4 inline-block">
          ← Back to Tours
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-orange-700 mb-6 border-b pb-2">
          Booking: {tour.title}
        </h1>

        <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        {message && (
          <div
            className={`mb-4 p-3 rounded-lg text-white text-sm sm:text-base ${
              message.type === "error" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {message.text}
          </div>
        )}

        <div className="mt-4 space-y-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
          {currentStep > 1 ? (
            <button
              onClick={handleBack}
              className="w-full sm:w-auto px-6 py-3 bg-gray-300 rounded-lg font-semibold hover:bg-gray-400 transition"
            >
              Back
            </button>
          ) : (
            <div className="w-full sm:w-auto"></div>
          )}
          {currentStep < TOTAL_STEPS ? (
            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
