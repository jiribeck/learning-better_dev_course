import React from 'react';

import Nav from '../components/Nav';

export default function lesson01() {
  return (
    <div className="lesson01">
      <div className="p-10">
        <Nav />
        <div className="text-center">
          <div className="text-center text-3xl font-thin">Lesson 01</div>
          <div className="py-4 text-2xl font-medium">Main Concepts</div>
          <hr />
        </div>
        <div className="lesson-code">
          {/* spacing */}
          <div className="p-20">
            <h2 className="mb-4">Spacing</h2>
            <p className="mb-4">
              Tailwind will help us with margin and padding
            </p>
            <button className="mr-3 px-2 py-4">Learn More</button>
            <button className="mr-3 px-8 py-4">Sign Up</button>
          </div>
          {/* box-properties */}
          <div className="p-20 bg-blue-400">
            <h2 className="mb-4">Box Properties</h2>
            <div className="p-10 bg-purple-400 rounded-lg border-purple-500 border shadow-2xl">
              I am a box
            </div>
          </div>
          {/* sizing and numbering */}
          {/* 1 point = 0.25rem = 4px (in modern browsers) */}
          <div className="p-20 bg-yellow-500">
            <button className="mx-1 p-4 bg-green-400 rounded w-8">
              clickMe
            </button>
            <button className="mx-1 p-4 bg-green-400 rounded w-12">
              clickMe
            </button>
            <button className="mx-1 p-4 bg-green-400 rounded w-20">
              clickMe
            </button>
            <button className="mx-1 p-4 bg-green-400 rounded w-32">
              clickMe
            </button>
            <button className="mx-1 p-4 bg-green-400 rounded w-48 h-48">
              clickMe
            </button>
          </div>
          {/* typography */}
          <div className="p-20 text-gray-800 leading-relaxed">
            <h2 className="mb-1 text-4xl text-gray-700 font-bold text-lg tracking-wide">
              Learning Tailwind is Fun!
            </h2>
            <h3 className="mb-10 text-2xl text-gray-500 font-thin">
              More fun than I expected!
            </h3>
            <p className="mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
              officia, hic doloribus eaque consequatur laudantium optio,
              accusamus possimus esse fugiat reiciendis voluptates explicabo
              sequi pariatur inventore? Assumenda consequuntur repudiandae quis.
            </p>
            <p className="mb-8">
              Powder bonbon toffee brownie candy cupcake topping lollipop
              tiramisu. Tart lemon drops marzipan pie pastry cake donut. Powder
              cookie lollipop gummi bears chupa chups biscuit jelly beans.
              Biscuit pudding tootsie roll. Pudding gingerbread apple pie toffee
              bear claw icing. Dessert sesame snaps chocolate bar. Icing cupcake
              ice cream chocolate carrot cake candy canes cookie apple pie.
            </p>
            <p className="mb-8">
              Cake pastry sesame snaps gingerbread caramels caramels powder bear
              claw. Chocolate chocolate croissant. Liquorice cotton candy
              chocolate cake liquorice ice cream apple pie topping topping ice
              cream. Halvah liquorice sweet roll. Icing oat cake brownie topping
              oat cake cupcake muffin sweet roll. Biscuit wafer biscuit pie
              fruitcake fruitcake apple pie bonbon.
            </p>
          </div>
          {/* colors */} {/* pseudo classes */}
          {/* transitions and transforms */}
          {/* animations */}
          <div className="p-20 bg-gray-800 space-y-3">
            <div className="p-4 rounded-lg bg-red-100 hover:bg-red-900 text-red-900 hover:text-red-100 transition-colors duration-200">
              I am a box
            </div>
            <div className="p-4 rounded-lg bg-red-200 text-red-700 transform hover:translate-x-4 duration-300">
              I am a box
            </div>
            <div className="p-4 rounded-lg bg-red-300 text-red-700 transform hover:rotate-180 duration-1000">
              I am a box
            </div>
            <div className="p-4 rounded-lg bg-red-400 text-red-100 transform hover:scale-105 duration-300">
              I am a box
            </div>
            <div className="p-4 rounded-lg bg-red-500 text-red-200">
              I am a box
            </div>
            <div className="p-4 rounded-lg bg-red-600 text-red-200">
              I am a box
            </div>
            <div className="p-4 rounded-lg bg-red-700 text-red-100 animate-bounce">
              I am a box
            </div>
            <div className="p-4 rounded-lg bg-red-800 text-red-200 animate-pulse">
              I am a box
            </div>
            <div className="group space-y-3">
              <div className="p-4 rounded-lg bg-red-900 text-red-200 group-hover:bg-red-200 group-hover:text-red-800">
                I am a box
              </div>
              <div className="p-4 rounded-lg bg-blue-600 text-blue-200 border-2 border-blue-700 group-hover:bg-blue-200 group-hover:text-blue-600">
                I am a box
              </div>
            </div>
          </div>
          {/* Gradients */}
          <div className="p-2O">
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
              <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-blue-700">
                Whoa Gradients!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
