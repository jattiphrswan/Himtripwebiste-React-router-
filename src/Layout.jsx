import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the page component (Home, About, Contact) */}
      <Footer />
    </>
  );
}

export default Layout;
