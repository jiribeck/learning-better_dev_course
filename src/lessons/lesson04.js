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
              <h2 className="text-blue-600 font-bold text-sm">
                1. Basic Buttons
              </h2>
              <div className="p-16 flex justify-center items-center space-x-8">
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
            <div className="p-10 bg-green-200">
              <h2 className="text-green-600 font-bold text-sm">
                2. Outlined and Shadowed Buttons
              </h2>
              <div className="p-16 flex justify-center text-xl space-x-8">
                <a
                  href="#"
                  className="px-8 py-4 bg-none border border-green-800 hover:border-green-600 rounded-md font-bold text-green-900 hover:text-green-600 transition-color duration-200"
                >
                  Do It
                </a>
                <a
                  href="#"
                  className="px-8 py-4 bg-green-400 hover:bg-white font-bold text-green-800 hover:text-green-600 rounded-full shadow-md hover:shadow-xl transition-color transition-shadow duration-500"
                >
                  Don't do it
                </a>
              </div>
            </div>
            <div className="p-10 bg-purple-800">
              <h2 className="text-purple-200 font-bold text-sm">
                3. Grouped and w/ an Icon Buttons
              </h2>
              <div className="flex justify-center p-16 text-xl space-x-12">
                <div className="flex justify-center items-center text-center space-x-0 text-sm">
                  <a
                    className="px-2 py-2 bg-purple-600 hover:bg-purple-700 text-purple-100 hover:text-purple-200 transition-color duration-300 rounded-l-full"
                    href="#"
                  >
                    👈🏼
                  </a>
                  <a
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-purple-100 hover:text-purple-200 transition-color duration-300"
                    href="#"
                  >
                    1
                  </a>
                  <a
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-purple-100 hover:text-purple-200 transition-color duration-300"
                    href="#"
                  >
                    2
                  </a>
                  <a
                    className="px-2 py-2 bg-purple-600 hover:bg-purple-700 text-purple-100 hover:text-purple-200 transition-color duration-300 rounded-r-full"
                    href="#"
                  >
                    👉🏼
                  </a>
                </div>
                <div className="text-sm text-center">
                  <a
                    href="#"
                    className="group flex items-center pl-6 bg-indigo-500 hover:bg-indigo-600 rounded-full"
                  >
                    <span className="text-indigo-900 group-hover:text-indigo-300 mr-4 font-semibold">
                      Click This
                    </span>
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 group-hover:bg-indigo-500">
                      🤜🏼
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
