import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets//logo/Him Tour!.svg"; // import your logo image

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return; // Only listen to scroll on Home
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Determine header classes
  const headerClass = isHome
    ? scrolled
      ? "bg-white/70 backdrop-blur-md shadow-md"
      : "bg-transparent"
    : "bg-white shadow-md"; // Other pages always white

  const textColor = isHome
    ? scrolled
      ? "text-gray-800"
      : "text-white"
    : "text-gray-800";

  return (
    <header
      className={`fixed w-full max-w-8xl z-50 transition-all duration-500 ${headerClass}`}
    >
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>

          {/* Right buttons */}
          <div className="flex items-center lg:order-2 space-x-2">
            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className={`p-2 rounded-lg focus:outline-none transition ${
                textColor === "text-white"
                  ? "text-white hover:bg-white/20 focus:ring-4 focus:ring-white/30"
                  : "text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300"
              }`}
              aria-label="Wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
               4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 
               14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
               6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </Link>

            {/* Log in */}
            <Link
              to="#"
              className={`font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition ${
                textColor === "text-white"
                  ? "text-white hover:bg-white/20 focus:ring-4 focus:ring-white/30"
                  : "text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300"
              }`}
            >
              Log in
            </Link>

            {/* Get started */}
            <Link
              to="#"
              className={`font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition ${
                textColor === "text-white"
                  ? "text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
                  : "text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300"
              }`}
            >
              Get started
            </Link>
          </div>

          {/* Nav links */}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                "Home",
                "About",
                "Adventure Styles",
                "Tours",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <NavLink
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    } // Tours → /tours
                    className={({ isActive }) => {
                      const base = `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 lg:p-0 lg:hover:bg-transparent transition`;
                      const activeColor = "text-orange-700";
                      return `${base} ${
                        isActive ? activeColor : textColor
                      } hover:text-orange-700`;
                    }}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
