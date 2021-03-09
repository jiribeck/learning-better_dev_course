import React from 'react';

import Nav from '../components/Nav';

export default function lesson05() {
  return (
    <div className="lesson05">
      <div className="p-10">
        <Nav />
        <div className="text-center">
          <div className="text-3xl font-thin">Lesson 04</div>
          <div className="py-4 text-2xl font-medium">
            Creating Components: Forms
          </div>
          <hr />
        </div>
        <div className="lesson-code">
          {/* Part 1 */}
          <div className="px-10 py-16 bg-blue-200">
            <h2 className="text-blue-600 font-bold text-sm mb-8">
              1. Basic Form
            </h2>
            <div className="bg-white w-full  lg:w-2/3 2xl:w-1/2 rounded-lg mx-auto">
              <form className="px-12 py-16" action="">
                <div className="mb-4">
                  <label
                    className="block mb-2 font-bold text-gray-600"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    className="p-3 border border-gray-300 w-full rounded-md shadow-lg focus:outline-none focus:border-green-300"
                    type="text"
                    id="name"
                    placeholder="jb-coding"
                  />
                </div>
                <div className="mb-8">
                  <label
                    className="block mb-2 font-bold text-gray-600"
                    for="twitter"
                  >
                    Twitter
                  </label>
                  <input
                    className="p-3 border border-gray-300 w-full rounded-md shadow-lg focus:outline-none focus:border-green-300"
                    type="text"
                    id="twitter"
                    placeholder="@jiribeck"
                  />
                  <p className="text-red-500 text-sm ml-2 mt-2">
                    Twitter username is required
                  </p>
                </div>
                <button
                  className="px-2 py-3 block mx-auto w-2/3 rounded-2xl bg-blue-800 text-blue-100 font-bold text-lg"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* Part 2 */}
          <div className="px-10 py-16 bg-green-200">
            <h2 className="text-green-600 font-bold text-sm mb-8">
              2. Minimal Form
            </h2>
            <div className="bg-white p-10 m-auto w-full lg:w-2/3">
              <form action="">
                <div className="flex mb-4">
                  <label
                    className="inline-block w-20 mr-6 text-gray-500 font-semibold"
                    for="name2"
                  >
                    Name
                  </label>
                  <input
                    className="flex-1 border-b-2 border-gray-300 focus:border-green-400 placeholder-gray-300 focus:outline-none "
                    type="text"
                    name="name2"
                    id="name2"
                    placeholder="jb coding"
                  />
                </div>
                <div className="flex mb-10">
                  <label
                    className="inline-block w-20 mr-6 text-gray-500 font-semibold"
                    for="twitter2"
                  >
                    Twitter
                  </label>
                  <input
                    className="flex-1 border-b-2 border-gray-300  focus:border-green-400 placeholder-gray-300 focus:outline-none"
                    type="text"
                    name="twitter2"
                    id="twitter2"
                    placeholder="@jiribeck"
                  />
                </div>
                <div className="text-right">
                  <button className="px-4 py-2 bg-green-500 text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="px-10 py-16 bg-purple-500">
            <h2 className="text-purple-200 font-bold text-sm mb-8">
              3. Pure Color Form
            </h2>
            <div className="text-xl">
              <form className="mx-auto md:w-2/3" action="">
                <div className="shadow-xl">
                  <div className="flex items-center bg-purple-300 rounded-t border-b border-purple-500">
                    <label
                      className="w-20 text-left mr-10 pl-2 text-purple-200 font-semibold"
                      for="name3"
                    >
                      Name
                    </label>
                    <input
                      className="flex-1 p-4 pl-0 bg-transparent text-white placeholder-purple-200 focus:outline-none"
                      type="text"
                      id="name3"
                      placeholder="jb coding"
                    />
                  </div>
                  <div className="flex items-center bg-purple-300 rounded-b">
                    <label
                      className="w-20 text-left mr-10 pl-2 text-purple-200 font-semibold"
                      for="twitter3"
                    >
                      Twitter
                    </label>
                    <input
                      className="flex-1 p-4 pl-0 bg-transparent text-white placeholder-purple-200 focus:outline-none"
                      type="text"
                      id="twitter3"
                      placeholder="@jiribeck"
                    />
                  </div>
                </div>
                <button className="block w-full mt-2 py-2 rounded text-white font-bold bg-pink-400 shadow-xl">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
