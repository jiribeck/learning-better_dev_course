import React from 'react';
import Link from './link';

export default function header() {
  return (
    <div className="Header">
      <div className="text-gray-600">
        <div className="container flex items-center justify-between px-10 py-6 mx-auto ">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <a
              className="text-2xl font-semibold text-teal-800 hover:text-teal-600"
              href="/courseSite/#"
            >
              Begginer Tailwind
            </a>
            <Link text="About" url="/courseSite/#about" />
            <Link text=" What you will learn" url="/courseSite/#learn" />
            <Link text="Pricing" url="/courseSite/#pricing" />
            <Link text="FAQ" url="/courseSite/#faq" />
            <Link text="Back to main page" url="/#" />
          </div>

          {/* Right Section */}
          <div className="space-x-4">
            <a href="/#" className="hover:text-gray-900">
              Login
            </a>
            <a
              href="https://beginnertailwind.com/"
              className="hidden px-4 py-3 text-purple-700 duration-500 transform bg-purple-300 rounded-lg shadow lg:inline-block hover:shadow-lg hover:bg-purple-700 hover:text-purple-100"
              target="_blank"
              rel="noreferrer"
            >
              Get the course
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
