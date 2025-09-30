import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Uttarakhand Travel Guides - Top row */}
        <div className="border-b border-orange-500 pb-8 mb-12">
          <h2 className="mb-4 font-semibold uppercase">Uttarakhand Travel Guides</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
            <li><Link to="/short-treks" className="hover:underline hover:text-gray-200">10 Short Treks in Uttarakhand</Link></li>
            <li><Link to="/valley-of-flowers" className="hover:underline hover:text-gray-200">Best Time & Season to Visit Valley of Flowers</Link></li>
            <li><Link to="/places-summer" className="hover:underline hover:text-gray-200">20 Places to Visit in Uttarakhand in Summer</Link></li>
            <li><Link to="/places-december" className="hover:underline hover:text-gray-200">20 Best Places to Visit in Uttarakhand in December</Link></li>
            <li><Link to="/hill-stations" className="hover:underline hover:text-gray-200">40 Best Hill Stations in Uttarakhand</Link></li>
            <li><Link to="/uttarakhand-best-time" className="hover:underline hover:text-gray-200">Best Time & Season to Visit Uttarakhand</Link></li>
            <li><Link to="/brahmatal-weather" className="hover:underline hover:text-gray-200">A Detailed Guide - Brahmatal Weather</Link></li>
            <li><Link to="/places-november" className="hover:underline hover:text-gray-200">20 Best Places to Visit in November</Link></li>
            <li><Link to="/nandi-kund-trek" className="hover:underline hover:text-gray-200">Nandi Kund Trek</Link></li>
            <li><Link to="/temples-nainital" className="hover:underline hover:text-gray-200">10 Temples Near Nainital</Link></li>
            <li><Link to="/valley-of-flowers-guide" className="hover:underline hover:text-gray-200">Valley of Flowers Trek – Complete Guide 2025</Link></li>
            <li><Link to="/treks-may" className="hover:underline hover:text-gray-200">10 Uttarakhand Treks in May</Link></li>
            <li><Link to="/valley-difficulty" className="hover:underline hover:text-gray-200">How Difficult is the Valley of Flowers Trek?</Link></li>
            <li><Link to="/plan-valley-trip" className="hover:underline hover:text-gray-200">How To Plan Trip to Valley of Flowers & Hemkund Sahib</Link></li>
            <li><Link to="/snowfall-places" className="hover:underline hover:text-gray-200">10 Snowfall Places In Uttarakhand</Link></li>
            <li><Link to="/rivers-uttarakhand" className="hover:underline hover:text-gray-200">10 Rivers in Uttarakhand</Link></li>
            <li><Link to="/2-day-treks" className="hover:underline hover:text-gray-200">2 Day Treks in Uttarakhand</Link></li>
            <li><Link to="/chardham-packages" className="hover:underline hover:text-gray-200">CharDham Yatra Packages</Link></li>
            <li><Link to="/honeymoon-places" className="hover:underline hover:text-gray-200">15 Honeymoon Places In Uttarakhand</Link></li>
            <li><Link to="/munsiyari-winter" className="hover:underline hover:text-gray-200">10 Places to Visit in Munsiyari in Winter</Link></li>
          </ul>
        </div>

        {/* Main footer links - symmetrical 6-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Company */}
          <div>
            <h2 className="mb-4 font-semibold uppercase">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:underline hover:text-gray-200">About us</Link></li>
              <li><Link to="/careers" className="hover:underline hover:text-gray-200">Careers</Link></li>
              <li><Link to="/apply" className="hover:underline hover:text-gray-200">Apply Now!</Link></li>
            </ul>
          </div>

          {/* Travelers */}
          <div>
            <h2 className="mb-4 font-semibold uppercase">Travelers</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/days-to-come" className="hover:underline hover:text-gray-200">Days to Come Magazine</Link></li>
              <li><Link to="/win-adventure" className="hover:underline hover:text-gray-200">Win an Adventure</Link></li>
              <li><Link to="/why-use" className="hover:underline hover:text-gray-200">Why should I use HimTrip?</Link></li>
              <li><Link to="/after-booking" className="hover:underline hover:text-gray-200">After your booking</Link></li>
              <li><Link to="/cancellation-policy" className="hover:underline hover:text-gray-200">Cancellation policy</Link></li>
            </ul>
          </div>

          {/* Operators */}
          <div>
            <h2 className="mb-4 font-semibold uppercase">Operators</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/grow-business" className="hover:underline hover:text-gray-200">Grow a successful business</Link></li>
              <li><Link to="/payment-solutions" className="hover:underline hover:text-gray-200">Payment solutions</Link></li>
              <li><Link to="/increase-visibility" className="hover:underline hover:text-gray-200">Increase visibility</Link></li>
              <li><Link to="/maximize-bookings" className="hover:underline hover:text-gray-200">Maximize direct bookings</Link></li>
              <li><Link to="/operator-login" className="hover:underline hover:text-gray-200">Operator log in</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h2 className="mb-4 font-semibold uppercase">Guides</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/guide-of-the-year" className="hover:underline hover:text-gray-200">Guide of the Year</Link></li>
              <li><Link to="/guide-registration" className="hover:underline hover:text-gray-200">Guide registration</Link></li>
              <li><Link to="/guide-login" className="hover:underline hover:text-gray-200">Guide log in</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h2 className="mb-4 font-semibold uppercase">Partners</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/travel-agents" className="hover:underline hover:text-gray-200">Travel agents & advisors</Link></li>
              <li><Link to="/affiliates" className="hover:underline hover:text-gray-200">RISE: Affiliates & creators</Link></li>
              <li><Link to="/dmomarketers" className="hover:underline hover:text-gray-200">DMOs & marketers</Link></li>
              <li><Link to="/otas-airlines" className="hover:underline hover:text-gray-200">OTAs, airlines & GDSs</Link></li>
              <li><Link to="/partner-login" className="hover:underline hover:text-gray-200">Partner log in</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="mb-4 font-semibold uppercase">Support</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:underline hover:text-gray-200">Contact us</Link></li>
              <li><Link to="/help" className="hover:underline hover:text-gray-200">Help center</Link></li>
              <li className="text-gray-200 text-xs mt-2">
                United States & Canada +1 833 895 6770<br/>
                Great Britain +44 800 802 1046<br/>
                Australia +61 7 3106 8663
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <div className="text-center text-sm text-gray-200">
          © 2025 HimTrip. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
