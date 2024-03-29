import React from 'react';

export default function hero() {
  return (
    <div id="hero">
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-r from-purple-500 to-purple-700"></div>
        <div className="container px-10 py-24 mx-auto text-center lg:px-0">
          {/* heading  */}
          <h1 className="py-2 mb-6 text-4xl font-extrabold tracking-wide sm:text-5xl md:text-6xl">
            <span className="text-transparent bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text">
              Beginner
            </span>{' '}
            <span className="text-transparent bg-gradient-to-r to-teal-400 from-purple-600 bg-clip-text">
              Tailwind
            </span>
          </h1>
          {/* paragraph */}
          <p className="mb-8 text-lg text-gray-700 sm:text-xl lg:text-2xl">
            Make good designs quickly. All without single line of custom CSS
          </p>
          {/* Big Button/Call to action  */}
          <a
            className="inline-block px-12 py-3 mb-32 text-lg font-bold tracking-wide text-purple-100 duration-500 transform rounded-lg shadow-lg hover:text-white hover:to-purple-600 hover:shadow-2xl bg-gradient-to-br from-purple-400 hover:from-purple-500 to-purple-700"
            href="https://beginnertailwind.com/"
            target="_blank"
            rel="noreferrer"
          >
            Get the course
          </a>
          {/*    lg:translate-x-4 lg:-translate-y-6 lg:absolute lg:transform */}
          <div className="relative mx-4">
            {/* teaser image info box  */}
            <div className="top-0 right-0 px-8 py-4 mb-0 text-sm text-left text-yellow-800 bg-yellow-200 border-t-4 border-yellow-500 rounded-lg shadow-lg xl:mx-auto xls:w-auto lg:translate-x-4 lg:-translate-y-6 lg:absolute lg:transform">
              <p className="font-bold">
                <strong>We'll create BeginnerTailwind.com </strong>{' '}
                <span className="opacity-50">
                  (it's the site you're on now)
                </span>
              </p>
              <p>We'll do it all without a single line of custom CSS!</p>
            </div>
            {/* teaser image */}
            <img
              className="mx-auto border-2 border-purple-400 rounded-lg shadow-2xl lg:w-auto"
              // width="90%"
              src="https://i.imgur.com/wysbBMS.png"
              alt="Teaser"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
