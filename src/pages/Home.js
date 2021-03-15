import React from 'react';

import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="Home">
      <div className="p-24">
        <div className="text-center">
          <h1 className="p-2 text-4xl font-semibold text-transparent bg-gradient-to-r bg-clip-text from-teal-600 to-teal-500 lg:text-6xl xl:text-6xl">
            Tailwind CSS Course
          </h1>
          <h2 className="p-4 text-3xl font-semibold text-transparent bg-gradient-to-r bg-clip-text from-orange-500 to-orange-300 lg:text-4xl xl:text-5xl">
            by Better.Dev
          </h2>

          <div className="grid pt-8 m-4 space-y-4 lg:space-x-8 lg:space-y-0 lg:grid-cols-2">
            <a
              className="px-6 py-3 font-bold text-orange-800 duration-200 transform bg-orange-200 shadow-lg hover:text-orange-100 hover:bg-orange-800 rounded-xl hover:shadow-xl"
              href="https://learn.better.dev/courses/beginner-tailwind/"
              target="_blank"
              rel="noreferrer"
            >
              Course Web Page
            </a>
            <a
              className="px-6 py-3 font-bold text-teal-800 duration-200 transform bg-teal-200 shadow-lg hover:text-teal-100 hover:bg-teal-800 rounded-xl hover:shadow-xl"
              href="https://tailwindcss.com/docs/guides/create-react-app"
              target="_blank"
              rel="noreferrer"
            >
              Install tailwindcss to React.js
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="pt-16">
            <div className="lessons">
              <h2 className="text-3xl font-thin">Lessons</h2>
              <hr />

              <ul className="py-4 text-sm list-disc list-inside md:text-base">
                <li>
                  <a
                    className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                    href="/lesson01"
                  >
                    Lesson 01 - Main Concepts
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                    href="/lesson02"
                  >
                    Lesson 02 - Layout Concepts
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                    href="/lesson03"
                  >
                    Lesson 03 - Creating Components: Cards
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                    href="/lesson04"
                  >
                    Lesson 04 - Creating Components: Buttons
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                    href="/lesson05"
                  >
                    Lesson 05 - Creating Components: Forms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-16">
            <div className="coursesite ">
              <h2 className="text-3xl font-thin">Course Site</h2>
              <hr />
              <ul className="py-4 list-disc list-inside">
                <li>
                  <a
                    className="text-blue-900 duration-300 hover:text-blue-400 transform-color"
                    href="/courseSite/"
                  >
                    Index
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 about">
          <h2 className="text-3xl font-thin">About</h2>
          <hr />
          <div className="mt-4 text-gray-700">
            <div>
              <p>
                I decided to create whole page with every lesson in this course
                by Chris Sev (@chris__sev) to be able to present everything I
                done and have some examples for my next working and learning
                progress.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-0 left-0 w-full border border-red-500 lg:absolute footer">
          <div className="flex justify-center mt-10 text-gray-800 hover:text-teal-600">
            <a href="https://github.com/jiribeck/learning-better_dev_course">
              <FaGithub size="2rem" />
            </a>
          </div>
          <div className="mt-2 text-sm text-center ">
            Made by{' '}
            <a
              className="text-gray-800 hover:text-teal-600"
              href="https://jiribeck.com"
              alt="jiribeck"
              target="_blank"
              rel="noreferrer"
            >
              jiribeck
            </a>{' '}
            - 2021
          </div>
        </div>
      </div>
    </div>
  );
}
