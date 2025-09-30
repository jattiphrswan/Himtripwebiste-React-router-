import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo/Him Tour!.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const headerClass = isHome
    ? scrolled
      ? "bg-white/70 backdrop-blur-md shadow-md"
      : "bg-transparent"
    : "bg-white shadow-md";

  const textColor = isHome
    ? scrolled
      ? "text-gray-800"
      : "text-white"
    : "text-gray-800";

  const menuItems = ["Home", "About", "Adventure Styles", "Tours", "Contact"];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${headerClass}`}
    >
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-12" alt="Logo" />
          </Link>

          {/* Desktop Menu (hidden on mobile) */}
          <ul className="hidden lg:flex space-x-8 font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className={({ isActive }) =>
                    `${textColor} hover:text-orange-700 transition ${
                      isActive ? "text-orange-700" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              to="#"
              className={`font-medium rounded-lg text-sm px-4 py-2 focus:outline-none transition ${
                textColor === "text-white"
                  ? "text-white hover:bg-white/20"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Book Now
            </Link>
            <Link
              to="#"
              className={`font-medium rounded-lg text-sm px-4 py-2 focus:outline-none transition ${
                textColor === "text-white"
                  ? "text-white bg-orange-500 hover:bg-orange-700"
                  : "text-white bg-orange-700 hover:bg-orange-800"
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-md focus:outline-none text-gray-800"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <img src={logo} className="h-10" alt="Logo" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md focus:outline-none text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col mt-4 space-y-2 px-4">
            {menuItems.map((item) => (
              <li key={item}>
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded transition ${
                      isActive
                        ? "bg-orange-100 text-orange-700"
                        : "text-gray-800 hover:bg-gray-100"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Slide-in Buttons */}
          <div className="mt-6 px-4 space-y-2">
            <Link
              to="#"
              className="block w-full text-center py-2 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition"
            >
              Book Now
            </Link>
            <Link
              to="#"
              className="block w-full text-center py-2 rounded-lg bg-orange-700 text-white font-medium hover:bg-orange-800 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
