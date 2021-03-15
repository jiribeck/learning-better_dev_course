import React from 'react';

import Nav from '../components/Nav';

export default function lesson01() {
  return (
    <div className="lesson01">
      <div className="p-10">
        <Nav />
        <div className="text-center">
          <div className="text-3xl font-thin text-center">Lesson 01</div>
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
            <button className="px-2 py-4 mr-3">Learn More</button>
            <button className="px-8 py-4 mr-3">Sign Up</button>
          </div>
          {/* box-properties */}
          <div className="p-20 bg-blue-400">
            <h2 className="mb-4">Box Properties</h2>
            <div className="p-10 bg-purple-400 border border-purple-500 rounded-lg shadow-2xl">
              I am a box
            </div>
          </div>
          {/* sizing and numbering */}
          {/* 1 point = 0.25rem = 4px (in modern browsers) */}
          <div className="p-20 bg-yellow-500">
            <button className="w-8 p-4 mx-1 bg-green-400 rounded">
              clickMe
            </button>
            <button className="w-12 p-4 mx-1 bg-green-400 rounded">
              clickMe
            </button>
            <button className="w-20 p-4 mx-1 bg-green-400 rounded">
              clickMe
            </button>
            <button className="w-32 p-4 mx-1 bg-green-400 rounded">
              clickMe
            </button>
            <button className="w-48 h-48 p-4 mx-1 bg-green-400 rounded">
              clickMe
            </button>
          </div>
          {/* typography */}
          <div className="p-20 leading-relaxed text-gray-800">
            <h2 className="mb-1 text-4xl font-bold tracking-wide text-gray-700">
              Learning Tailwind is Fun!
            </h2>
            <h3 className="mb-10 text-2xl font-thin text-gray-500">
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
          <div className="p-20 space-y-3 bg-gray-800">
            <div className="p-4 text-red-900 transition-colors duration-200 bg-red-100 rounded-lg hover:bg-red-900 hover:text-red-100">
              I am a box
            </div>
            <div className="p-4 text-red-700 duration-300 transform bg-red-200 rounded-lg hover:translate-x-4">
              I am a box
            </div>
            <div className="p-4 text-red-700 duration-1000 transform bg-red-300 rounded-lg hover:rotate-180">
              I am a box
            </div>
            <div className="p-4 text-red-100 duration-300 transform bg-red-400 rounded-lg hover:scale-105">
              I am a box
            </div>
            <div className="p-4 text-red-200 bg-red-500 rounded-lg">
              I am a box
            </div>
            <div className="p-4 text-red-200 bg-red-600 rounded-lg">
              I am a box
            </div>
            <div className="p-4 text-red-100 bg-red-700 rounded-lg animate-bounce">
              I am a box
            </div>
            <div className="p-4 text-red-200 bg-red-800 rounded-lg animate-pulse">
              I am a box
            </div>
            <div className="space-y-3 group">
              <div className="p-4 text-red-200 bg-red-900 rounded-lg group-hover:bg-red-200 group-hover:text-red-800">
                I am a box
              </div>
              <div className="p-4 text-blue-200 bg-blue-600 border-2 border-blue-700 rounded-lg group-hover:bg-blue-200 group-hover:text-blue-600">
                I am a box
              </div>
            </div>
          </div>
          {/* Gradients */}
          <div className="p-2O">
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
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
