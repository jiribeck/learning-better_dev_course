import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="relative pt-20 text-gray-600 pb-14 bg-gradient-to-br from-gray-100 to-gray-300">
        <div className="absolute top-0 left-0 transform translate-x-6 translate-y-6">
          <div className="absolute w-32 h-32 bg-teal-200 rounded-full opacity-40"></div>
          <div className="absolute w-32 h-32 ml-24 bg-purple-200 rounded-full opacity-40"></div>
          <div className="absolute w-32 h-32 mt-16 ml-16 bg-red-200 rounded-full opacity-40"></div>
        </div>
        <div className="container relative px-10 mx-auto">
          <div className="justify-between space-y-8 lg:flex lg:space-y-0">
            <div className="flex flex-col justify-center">
              <h4 className="mb-4 text-3xl font-bold text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
                Get update on this course
              </h4>
              <form className="flex" action="" method="POST">
                <input
                  className="w-full p-3 placeholder-gray-300 border-2 border-r-0 border-gray-200 rounded-l outline-none focus:border-purple-400"
                  type="email"
                  name="Email"
                  placeholder="super@secret.com"
                />
                <button className="px-6 py-3 font-bold text-purple-700 transition-colors duration-500 bg-purple-400 rounded-r hover:bg-purple-700 hover:text-purple-100">
                  Submit
                </button>
              </form>
            </div>
            <div className="space-x-0 space-y-8 text-center md:space-x-12 md:flex md:justify-center md:space-y-0 lg:text-right">
              <div className="space-y-2">
                <p className="font-bold tracking-widest text-gray-400 uppercase ">
                  Company
                </p>
                <a
                  className="block hover:underline hover:text-gray-800"
                  href="/courseSite/#"
                >
                  About
                </a>
                <a
                  className="block hover:underline hover:text-gray-800"
                  href="/courseSite/#"
                >
                  Blog
                </a>
                <a
                  className="block hover:underline hover:text-gray-800"
                  href="/courseSite/#"
                >
                  Career
                </a>
              </div>
              <div className="space-y-2">
                <p className="font-bold tracking-widest text-gray-400 uppercase ">
                  Company
                </p>
                <a
                  className="block hover:underline hover:text-gray-800"
                  href="/courseSite/#"
                >
                  About
                </a>
                <a
                  className="block hover:underline hover:text-gray-800"
                  href="/courseSite/#"
                >
                  Blog
                </a>
                <a
                  className="block hover:underline hover:text-gray-800"
                  href="/courseSite/#"
                >
                  Career
                </a>
              </div>
              <div className="space-y-2">
                <p className="font-bold tracking-widest text-gray-400 uppercase ">
                  Company
                </p>
                <a
                  className="block hover:underline hover:text-gray-800"
                  href="/courseSite/#"
                >
                  About
                </a>
                <a
                  className="block hover:underline hover:text-gray-800"
                  href="/courseSite/#"
                >
                  Blog
                </a>
                <a
                  className="block hover:underline hover:text-gray-800"
                  href="/courseSite/#"
                >
                  Career
                </a>
              </div>
            </div>
          </div>
          <div className="justify-between pt-4 mt-12 space-y-4 text-sm text-center text-gray-600 border-t border-gray-300 md:flex md:text-left md:space-y-0">
            <div className="order-2 space-x-4">
              <a href="/courseSite/#">Discord</a>
              <a href="/courseSite/#">Twitter</a>
              <a href="/courseSite/#">YouTube</a>
            </div>
            <div className="order-1"> Copyright &copy; 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}
