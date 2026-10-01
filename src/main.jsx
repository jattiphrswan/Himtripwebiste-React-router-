import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Adventure from "./components/Product/Adventure.jsx";
import AdventureDetail from "./components/Product/AdventureDetail.jsx";
import TourSearchResults from "./components/BookingPage/Tour_search_results.jsx";
import Contact from "./components/Contact/Contact.jsx";
import BookingPage from "./components/BookingPage/Booking.jsx";
import TracksPage from "./components/Product/TracksPage.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/Error.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* All routes share the Layout (Header + Footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tours" element={<TourSearchResults />} />
          <Route path="tracks" element={<TracksPage />} />
          <Route path="treks" element={<TracksPage />} />
          <Route path="adventure-styles" element={<Adventure />} />
          <Route path="adventure-styles/:id" element={<AdventureDetail />} />
          <Route path="adventure/:id" element={<AdventureDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="booking/:id" element={<BookingPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
