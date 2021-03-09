import React from 'react';

import Nav from '../components/Nav';

export default function lesson03() {
  return (
    <div className="lesson03">
      <div className="p-10">
        <Nav />
        <div className="text-center">
          <div className="text-center text-3xl font-thin">Lesson 03</div>
          <div className="py-4 text-2xl font-medium">
            Creating Components: Cards
          </div>
          <hr />
        </div>
        <div className="lesson-code">
          {/* Card wih no image */}
          <div className="p-10 bg-blue-100">
            <h3 className="pb-2 text-blue-400 text-sm font-bold">
              1. Card with no image
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="mb-2 text-2xl font-bold text-gray-800">
                Class with no image
              </h2>
              <p className="font-light text-gray-600">This my cool card</p>
            </div>
          </div>
          {/* Class with an image */}
          <div className="p-10 bg-green-100">
            <h3 className="pb-2 text-green-400 text-sm font-bold">
              2. Card with an image
            </h3>
            <div className="bg-white rounded-lg shadow-lg w-full md:w-1/2">
              <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1612832021026-375ae70f24bf"
                alt="writing"
              />
              <div className="p-6">
                <h2 className="font-bold pb-2 text-2xl text-green-400">
                  Card with an image
                </h2>
                <p className="mb-2 text-green-900">
                  This is a litle bit better kind of card
                </p>
                <a
                  className="text-green-500 hover:text-green-800 underline text-sm"
                  href="/#"
                >
                  Read More 👉🏼
                </a>
              </div>
            </div>
          </div>
          {/* Horizontal Card */}
          <div className="p-10 bg-yellow-200">
            <h3 className="pb-2 text-yellow-600 text-sm font-bold">
              3. Horizontal &amp; Responsive Card
            </h3>
            <div className="md:max-h-48 bg-white rounded-lg shadow-lg">
              <img
                className="h-96 md:h-auto w-full md:w-1/3 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                src="https://images.unsplash.com/photo-1614853389929-8515eb4bb010"
                alt="sunshine"
              />
              <div className="p-6 md:w-2/3">
                <h2 className="font-bold text-xl md:text-3xl text-yellow-700 mb-2">
                  Horizontal Card
                </h2>
                <p className="text-yellow-600 w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                  Look a me go sideways Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quod, rerum dicta alias amet velit eum
                  praesentium, recusandae autem harum, corrupti odit culpa!
                  Asperiores voluptatibus dignissimos cum magni fugit
                  necessitatibus porro? Look a me go sideways Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Quod, rerum dicta alias
                  amet velit eum praesentium, recusandae autem harum, corrupti
                  odit culpa! Asperiores voluptatibus dignissimos cum magni
                  fugit necessitatibus porro? Look a me go sideways Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Quod, rerum dicta
                  alias amet velit eum praesentium, recusandae autem harum,
                  corrupti odit culpa! Asperiores voluptatibus dignissimos cum
                  magni fugit necessitatibus porro? Look a me go sideways Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Quod, rerum
                  dicta alias amet velit eum praesentium, recusandae autem
                  harum, corrupti odit culpa! Asperiores voluptatibus
                  dignissimos cum magni fugit necessitatibus porro?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
