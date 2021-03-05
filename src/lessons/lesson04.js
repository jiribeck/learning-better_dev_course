import React from 'react';

import Nav from '../components/Nav';

export default function lesson03() {
  return (
    <div className="lesson03">
      <div className="p-10">
        <Nav />
        <div className="text-center">
          <div className="text-3xl font-thin">Lesson 04</div>
          <div className="py-4 text-2xl font-medium">
            Creating Components: Buttons
          </div>
          <hr />
        </div>
        <div className="lesson-code">
          <div className="p-10">
            <div className="p-10 bg-blue-200">
              <h2>Section Header</h2>
              <div className="p-32 flex justify-center items-center border border-red-400 space-x-8">
                <a
                  className="px-8 py-4 bg-red-600 hover:bg-red-100 rounded-xl shadow-lg hover:shadow-2xl text-red-100 hover:text-red-600 font-semibold transition-color transition-shadow duration-200"
                  href="#"
                >
                  Learn More
                </a>
                <a
                  className="px-12 py-4 bg-yellow-400 hover:bg-yellow-600 rounded-full shadow-md  text-yellow-900 hover:text-yellow-100 font-semibold transition-color duration-500"
                  href="#"
                >
                  Login
                </a>
                <a
                  className="px-16 py-4 bg-green-800 hover:bg-red-800 border border-b-4 border-green-700 hover:border-red-700 rounded-sm shadow-2xl hover:shadow-none hover:shadow-xl text-white font-medium hover:font-bold text-2xl transition duration-300"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
            </div>
            <div className="p-10 bg-blue-400">
              <h2>Section Header</h2>
            </div>
            <div className="p-10 bg-red-400">
              <h2>Section Header</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
