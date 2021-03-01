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
              className="mr-4 px-6 py-3 bg-yellow-200 rounded-xl text-yellow-800"
              href="https://learn.better.dev/courses/beginner-tailwind/"
              target="_blank"
            >
              Course Web Page
            </a>
            <a
              className="ml-4 px-6 py-3 bg-green-200 rounded-xl text-green-800"
              href="https://tailwindcss.com/docs/guides/create-react-app"
              target="_blank"
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
                className="text-blue-900 hover:text-blue-400 transfor-color duration-300"
                href="http://localhost:3000/lesson01"
              >
                Lesson 01 - Main Concepts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
