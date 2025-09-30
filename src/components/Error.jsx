// src/components/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-orange-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist or an error occurred.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
