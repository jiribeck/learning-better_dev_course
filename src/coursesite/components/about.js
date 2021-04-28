import React from 'react';

export default function about() {
  return (
    <div id="about">
      <div className="pt-6 pb-24 bg-gray-200 lg:text-center lg:pt-12">
        <div className="container px-10 mx-auto">
          <h2 className="mb-3 text-3xl font-bold text-teal-900 md:text-4xl">
            Some Tailwind Videos I have done
          </h2>
          <p className="mb-12 text-base leading-loose lg:text-lg">
            Hey there! My name is Chris Sev and I founded a web dev tutorial
            site Scotch.io. We were able to grow to 4M monthly pageviews and
            $300,000 yearly revenue. Scotch.io was acquired byDigitalOcean in
            November 2019. Nowadays I'm in search of the best ways to develop
            and design a business. Hope you enjoy this course and my other one
            MakeReactApps.com.
          </p>
          <div className="justify-center space-y-8 text-left lg:flex lg:space-x-8 lg:space-y-0">
            <div className="border border-gray-800 rounded shadow-lg lg:w-1/2">
              <p className="p-4 text-lg bg-white rounded-t text-grey-800">
                I have a Getting Started with Tailwind article on scotch.io and
                a 15 minute starter YouTube video.
              </p>
              <iframe
                className="w-full rounded-b"
                height="315"
                src="https://www.youtube.com/embed/6zIuAyLZPH0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="border border-gray-800 rounded shadow-lg lg:w-1/2">
              <p className="p-4 text-lg bg-white rounded-t text-grey-800">
                I did a Build Your 1st Tailwind Site for Traversy Media on
                YouTube also.
              </p>
              <iframe
                className="w-full rounded-b"
                height="315"
                src="https://www.youtube.com/embed/NRagrTU_v8o"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
