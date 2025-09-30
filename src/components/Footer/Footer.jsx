import React from "react";
import { Link } from "react-router-dom";
import toursData from "../Backend/BackenData"; // your tours data
import { ADVENTURE_STYLES } from "../Backend/BackenData";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Adventure Styles */}
        <div className="border-b border-gray-800 pb-8 mb-8">
          <h4 className="text-white font-bold text-xs uppercase mb-4">
            Adventure Styles
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {ADVENTURE_STYLES.map((style) => (
              <Link
                key={style.id}
                to="/adventure-styles"
                className="text-sm hover:text-orange-500 transition-colors block"
              >
                {style.title}
              </Link>
            ))}
          </div>
        </div>

        {/* 2. Top Tours */}
        <div className="border-b border-gray-800 pb-8 mb-8">
          <h4 className="text-white font-bold text-xs uppercase mb-4">
            Top Tours
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {toursData.slice(0, 8).map((tour) => (
              <Link
                key={tour.id}
                to={`/booking/${tour.id}`}
                className="text-sm hover:text-orange-500 transition-colors block"
              >
                {tour.title}
              </Link>
            ))}
          </div>
        </div>

        {/* 3. Company & Support Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 text-sm">
          <div>
            <h4 className="text-white font-bold text-xs uppercase mb-2">Company</h4>
            <ul className="space-y-1">
              <li><Link to="/about" className="hover:text-orange-500">About us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
              <li><Link to="/about" className="hover:text-orange-500">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase mb-2">Travelers</h4>
            <ul className="space-y-1">
              <li><Link to="/tours" className="hover:text-orange-500">All Tours</Link></li>
              <li><Link to="/adventure-styles" className="hover:text-orange-500">Adventure Styles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase mb-2">Operators</h4>
            <ul className="space-y-1">
              <li><Link to="#" className="hover:text-orange-500">Partner Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase mb-2">Guides</h4>
            <ul className="space-y-1">
              <li><Link to="#" className="hover:text-orange-500">Guide Registration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase mb-2">Support</h4>
            <ul className="space-y-1">
              <li><Link to="/contact" className="hover:text-orange-500">Help Center</Link></li>
              <li className="text-gray-500 text-xs">Phone: +91 9315667284</li>
            </ul>
          </div>
        </div>

        {/* 4. Social Media */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4">
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* 5. Footer Legal */}
        <div className="text-xs text-gray-500 text-center md:text-left">
          © 2025 Your Company. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
