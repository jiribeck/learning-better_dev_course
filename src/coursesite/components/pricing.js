import React from 'react';

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-56 bg-gray-300 "></div>
        <div className="pt-32 pb-16 text-blue-100 bg-blue-600 lg:text-center lg:pt-12">
          <div className="container mx-auto ">
            <div className="items-center px-2 space-y-8 lg:space-x-8 md:px-8 lg:px-16 lg:flex lg:space-y-0">
              <div className="relative order-2 px-8 py-12 mt-8 text-center text-black transition duration-500 transform bg-white border-8 border-purple-700 rounded-lg shadow-lg lg:px-8 lg:w-1/3 lg:mt-24 hover:shadow-xl hover:scale-110">
                <div className="absolute inset-x-0 top-0 flex items-end justify-center space-x-8 transform -translate-y-full">
                  <div class="w-2 rounded mb-8 h-16 bg-red-500 transform -rotate-45 origin-bottom"></div>
                  <div class="w-2 rounded mb-8 h-24 bg-yellow-500"></div>
                  <div class="w-2 rounded mb-8 h-16 bg-green-500 transform rotate-45 origin-bottom"></div>
                </div>

                <h4 className="mb-6 text-sm text-gray-600">
                  Start Tailwind<i>-ing</i>!
                </h4>
                <div>
                  <span className="text-5xl font-semibold text-purple-800 md:text-7xl">
                    <span className="opacity-50">$</span> 28.20
                  </span>
                </div>
                <div className="px-2 py-4 mt-10">
                  <a
                    href="courseSite/#"
                    className="px-6 py-4 text-xl font-semibold text-yellow-900 rounded-lg shadow-lg bg-gradient-to-r from-yellow-200 to-yellow-400 hover:from-yellow-300 hover:to-yellow-500"
                  >
                    Buy the Course
                  </a>
                </div>
              </div>
              <div className="order-1 space-y-2 text-xl text-center lg:flex-1 lg:text-left lg:pt-48">
                <p>
                  <strong className="text-white">75 videos</strong> at a smooth
                  pace
                </p>
                <p>
                  <strong className="text-white">9.25 hours</strong> of learning
                  + building
                </p>
                <p>
                  <strong className="text-white">Source code</strong> and
                  CodePens
                </p>
              </div>
              <div className="order-3 space-y-2 text-xl text-center lg:flex-1 lg:text-right lg:pt-48">
                <p>
                  Use the code in{' '}
                  <strong className="text-white">your projects</strong>
                </p>
                <p>
                  Access to <strong className="text-white">Discord</strong> for
                  support
                </p>
                <p>
                  Lifetime{' '}
                  <strong className="text-white">refund guarantee</strong>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="w-1/2 py-12 text-center lg:w-1/3 ">
                <h4 className="mb-2 text-3xl font-bold text-white">
                  Team Discount
                </h4>
                <p>
                  Tailwind is better when your whole team knows it. Buy 10
                  licenses for $470 $330 (30% off). Email{' '}
                  <a
                    href="courseSite/#"
                    className="font-semibold text-white underline"
                  >
                    chris@better.dev
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
