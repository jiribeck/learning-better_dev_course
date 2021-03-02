import React from 'react';

import Nav from '../components/Nav';

export default function lesson02() {
  return (
    <div className="lesson02">
      <div className="p-10">
        <Nav />
        <div className="text-center">
          <div className="text-center text-3xl font-thin">Lesson 02</div>
          <div className="py-4 text-2xl font-medium">Layot Concepts</div>
          <hr />
        </div>
        <div className="lesson-code">
          {/* ------------------ */}
          {/* Layout & positioning */}
          <div className="py-20 bg-gray-200">
            <div className="container mx-auto">
              <div className="relative bg-white p-10 rounded-lg shadow-lg">
                {/* Absolutely positioned label */}
                <div className="absolute top-0 right-0 text-xs bg-red-500 text-red-100 rounded py-1 px-2 transform translate-x-2 -translate-y-2">
                  Brand New Label
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Totam ipsam doloribus excepturi tempora quae perspiciatis quos
                  quam voluptas libero? Iusto fugit unde nihil nostrum vero
                  aliquid error nesciunt sapiente illum.
                </p>
              </div>
            </div>
          </div>
          {/* ------------------ */}
          {/* Responsive classes */}
          <div className="bg-blue-200 p-4 lg:p-20">
            {/* Colors as responsive  */}
            <h2 className="text-6xl text-black md:text-red-600 lg:text-yellow-600 xl:text-white">
              Mobile First
            </h2>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
              Different Sizes Per Device
            </h2>
            {/* Stacking vs. side by side */}
            <div className="md:flex">
              <div className="p-10 bg-white mt-2 md:w-1/2 md:mx-4">
                on mobile we stack
              </div>
              <div className="p-10 bg-white mt-2 md:w-1/2 md:mx-4">
                on desktop, we are side by side
              </div>
            </div>
          </div>
          {/* ------------------ */}
          {/* Flexbox */}
          {/* centering */}
          <div className="bg-green-700 h-64 flex justify-center items-center">
            <h2 className="text-4xl text-green-100">Centered!</h2>
          </div>
          {/* navigation */}
          <div className="bg-gray-300 p-10 flex justify-between">
            <div>logo</div>
            <div>navigation</div>
          </div>
          {/* creating a columns section  */}
          <div className="bg-yellow-500 p-10 lg:flex lg:space-x-4 lg:space-y-0 space-y-2">
            <div className="flex-shrink bg-white p-2">Hello</div>
            <div className="flex-grow bg-white p-2">Hello</div>
            <div className="flex-grow bg-white p-2">Hello</div>
          </div>
          {/* sidebar */}
          <div className="bg-purple-200 h-64">
            <div className="md:flex h-full items-stretch">
              <div className="hidden md:block md:w-1/5 bg-orange-500 p-10">
                sidebar
              </div>
              <div className="md:flex-grow h-full bg-purple-300 p-10">
                content
              </div>
            </div>
          </div>
          {/* ------------------ */}
          {/* Grid */}
          <div className="p-20 bg-gray-200 text-green-200 grid grid-cols-3 gap-2">
            <div className="bg-green-800 rounded p-5">card 1</div>
            <div className="bg-green-800 rounded p-5">card 2</div>
            <div className="bg-green-800 rounded p-5">card 3</div>
            <div className="bg-green-800 rounded p-5">card 4</div>
            <div className="bg-green-800 rounded p-5">card 5</div>
            <div className="bg-green-800 rounded p-5">card 6</div>
          </div>
          <div className="p-20 bg-purple-600 text-purple-800 grid grid-cols-3 grid-rows-3 gap-3">
            <div className="bg-purple-100 rounded p-5">card 1</div>
            <div className="row-span-2 bg-purple-100 rounded p-5">card 2</div>
            <div className="bg-purple-100 rounded p-5">card 3</div>
            <div className="row-span-2 bg-purple-100 rounded p-5">card 4</div>
            <div className="row-span-2 bg-purple-100 rounded p-5">card 5</div>
            <div className="bg-purple-100 rounded p-5">card 6</div>
          </div>

          <div className="p-20 bg-yellow-200 text-yellow-800 grid grid-cols-4 grid-rows-4 gap-3">
            <div className="bg-yellow-300 row-span-4 rounded p-5">image</div>
            <div className="bg-yellow-300 row-span-3 col-span-2 rounded p-5">
              content
            </div>
            <div className="bg-yellow-300 rounded p-5">action button</div>
            <div className="bg-yellow-300 row-start-4 col-start-2 col-span-4 rounded p-5">
              footer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
