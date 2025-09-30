import React from "react";

export default function Contact() {
  return (
    <div className="relative w-full min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden 
                      animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Info Section */}
          <div className="p-10 bg-orange-600 text-white flex flex-col justify-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Contact Us</h2>
            <p className="text-base sm:text-lg">
              Have questions? Reach out to us via phone, email, or visit our location. We’re here to help!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📞</span>
                <a href="tel:+1234567890" className="hover:underline">
                  +1 234 567 890
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl">✉️</span>
                <a href="mailto:info@example.com" className="hover:underline">
                  info@example.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <p>123 Main Street, City, Country</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="p-6 sm:p-10">
            <form className="space-y-6">
              <div className="fade-in-up">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
              </div>

              <div className="fade-in-up">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
              </div>

              <div className="fade-in-up">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg px-6 py-3 transition duration-300 fade-in-up"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Tailwind Fade-in Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          .fade-in-up {
            animation: fadeIn 0.8s ease forwards;
            animation-delay: 0.2s;
          }
        `}
      </style>
    </div>
  );
}
