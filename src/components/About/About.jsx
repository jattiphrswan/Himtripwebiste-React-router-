import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
        <p className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Intro Paragraph + Image */}
         <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg sm:text-xl text-gray-700 text-justify md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 text-justify md:text-left">
            Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
            src="https://images.pexels.com/photos/130576/pexels-photo-130576.jpeg"
            alt="Team working"
          />
        </div>
      </section>

      {/* Two-Column Content */}
      <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
            src="https://images.pexels.com/photos/130576/pexels-photo-130576.jpeg"
            alt="Team working"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg sm:text-xl text-gray-700 text-justify md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 text-justify md:text-left">
            Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
        
      </section>

      {/* Closing Message */}
      <section className="text-center py-16 space-y-2">
        <p className="text-lg sm:text-xl font-medium text-gray-800">
          Thank you for visiting our page.
        </p>
        <p className="text-lg sm:text-xl text-gray-600">– Team Lorem</p>
      </section>
    </div>
  );
}
