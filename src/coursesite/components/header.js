import React from 'react';

export default function header() {
  return (
    <div className="Header">
      <div className="text-gray-600">
        <div className="container flex items-center justify-between px-6 py-6 mx-auto lg:px-0">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <a
              className="text-2xl font-semibold text-teal-800 hover:text-teal-600"
              href="/courseSite/#"
            >
              Begginer Tailwind
            </a>
            <a
              href="/courseSite/#"
              className="hidden lg:inline-block hover:text-gray-900"
            >
              About
            </a>
            <a
              href="/courseSite/#"
              className="hidden lg:inline-block hover:text-gray-900"
            >
              What you will learn
            </a>
            <a
              href="/courseSite/#"
              className="hidden lg:inline-block hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="/courseSite/#"
              className="hidden lg:inline-block hover:text-gray-900"
            >
              FAQ
            </a>
            <a href="/" className="hidden lg:inline-block hover:text-gray-900">
              Back to main page
            </a>
          </div>
          {/* Right Section */}
          <div className="space-x-4">
            <a href="/#" className="hover:text-gray-900">
              Login
            </a>
            <a
              href="/#"
              className="hidden px-4 py-3 text-purple-700 duration-500 transform bg-purple-300 rounded-lg shadow lg:inline-block hover:shadow-lg hover:bg-purple-700 hover:text-purple-100"
            >
              Get the course
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
