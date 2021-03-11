import React from 'react';

export default function Home() {
  return (
    <div className="Home">
      <div className="p-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-900">
            Learning code from better.dev tailwind course
          </h1>
          <p className="p-10">
            <a
              className="px-6 py-3 mr-4 text-yellow-800 bg-orange-200 rounded-xl"
              href="https://learn.better.dev/courses/beginner-tailwind/"
              target="_blank"
              rel="noreferrer"
            >
              Course Web Page
            </a>
            <a
              className="px-6 py-3 ml-4 text-green-800 bg-teal-200 rounded-xl"
              href="https://tailwindcss.com/docs/guides/create-react-app"
              target="_blank"
              rel="noreferrer"
            >
              Install tailwindcss to React.js
            </a>
          </p>
        </div>

        <div className="pt-16 lessons">
          <h2 className="text-3xl font-thin">Lessons</h2>
          <hr />

          <ul className="py-4 list-disc list-inside">
            <li>
              <a
                className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                href="http://localhost:3000/lesson01"
              >
                Lesson 01 - Main Concepts
              </a>
            </li>
            <li>
              <a
                className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                href="http://localhost:3000/lesson02"
              >
                Lesson 02 - Layout Concepts
              </a>
            </li>
            <li>
              <a
                className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                href="http://localhost:3000/lesson03"
              >
                Lesson 03 - Creating Components: Cards
              </a>
            </li>
            <li>
              <a
                className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                href="http://localhost:3000/lesson04"
              >
                Lesson 04 - Creating Components: Buttons
              </a>
            </li>
            <li>
              <a
                className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                href="http://localhost:3000/lesson05"
              >
                Lesson 05 - Creating Components: Forms
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-16 lessons">
          <h2 className="text-3xl font-thin">Course Site</h2>
          <hr />
          <ul className="py-4 list-disc list-inside">
            <li>
              <a
                className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                href="http://localhost:3000/courseSite/courseIndex"
              >
                Index
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
