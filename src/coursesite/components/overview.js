import React from 'react';

export default function overview() {
  return (
    <div className="overview">
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-white"></div>
        <div className="pt-24 pb-24 bg-gradient-to-r from-purple-500 to-purple-700">
          <div className="container relative px-6 mx-auto lg:px-0">
            <h2 className="mb-8 text-5xl font-bold text-purple-50">
              Writing CSS is tough stuff!
            </h2>
            <div className="flex space-x-16">
              {/* left column */}
              <div className="w-2/3 p-16 space-y-8 text-lg leading-relaxed text-gray-800 bg-white rounded shadow-2xl">
                <p>
                  Tailwind makes writing CSS easier and lets us customize our
                  designs faster than any other CSS framework. If you want a CSS
                  framework that has pre-built components, then Tailwind may not
                  be for you. If you want a CSS framework that lets you design
                  quickly and customize your site, then{' '}
                  <strong className="font-bold text-teal-500">
                    Tailwind is gonna be a lot of fun
                  </strong>
                  .
                </p>
                <p>
                  After using Bulma to build{' '}
                  <a
                    className="text-blue-500 transition duration-200 transform hover:underline hover:text-blue-400"
                    href="https://scotch.io/"
                  >
                    Scotch.io
                  </a>
                  , my CSS files became littered with my own
                  <code className="inline-block px-1 font-mono text-sm text-red-700 bg-gray-200 rounded">
                    !important
                  </code>
                  classes to override the framework's styles. Tailwind doesn't
                  have the
                  <code className="inline-block px-1 font-mono text-sm text-red-700 bg-gray-200 rounded">
                    !important
                  </code>
                  problem since all our elements are designed on the fly.
                </p>
                <p>
                  <strong className="font-bold">Important Note:</strong>{' '}
                  Tailwind lets us design quickly, but this doesn't mean that
                  you don't need CSS knowledge however. To use Tailwind, you
                  need to have a good understanding of CSS properties. In this
                  course,{' '}
                  <strong className="font-bold">
                    we will learn Tailwind and we'll also learn CSS concepts
                  </strong>{' '}
                  to create good looking designs.{' '}
                  <strong className="font-bold">
                    Tailwind is the ultimate CSS shorthand
                  </strong>
                  , but we still need to learn the CSS, which we'll do in this
                  course.
                </p>
                <p className="relative text-3xl italic font-light text-gray-600">
                  <span className="absolute top-0 left-0 italic font-bold text-purple-600 transform -translate-x-3 -translate-y-3 opacity-50 font-6xl">
                    "
                  </span>
                  This isn't just a Tailwind course. This is also a "learn how
                  to design with CSS" course.
                </p>
                <p>
                  The hardest things about learning Tailwind is memorizing the
                  classes and also knowing which classes go well together. We'll
                  be writing a lot of Tailwind in this course so that the
                  repetition will help us commit Tailwind classes to memory.
                </p>
              </div>
              {/* right column */}
              <div className="flex-grow space-y-8 text-white">
                <div className="px-8 py-6 italic bg-purple-800 rounded shadow-md">
                  What classes should I use?
                </div>
                <div className="px-8 py-6 italic bg-purple-800 rounded shadow-md">
                  How do I make things look good?
                </div>
                <div className="px-8 py-6 italic bg-purple-800 rounded shadow-md">
                  My design looks basic?
                </div>
                <div className="px-8 py-6 italic bg-purple-800 rounded shadow-md">
                  How do I do responsive?
                </div>
                <div className="px-8 py-6 italic bg-purple-800 rounded shadow-md">
                  Why does my typography look so bad?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
