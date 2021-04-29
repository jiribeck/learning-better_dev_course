import React from 'react';
import VideoLine from './videoLine';

export default function Videos() {
  return (
    <div id="Videos">
      <div className="py-32 text-blue-400 bg-gradient-to-b from-gray-600 to-gray-800">
        <div className="container px-6 mx-auto text-center text-gray-100 lg:px-0">
          <h2 className="mb-12 text-3xl font-bold text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-white to-purple-300">
            Modules/Videos
          </h2>
          <p className="mb-8 text-lg lg:text-2xl">
            9 hours of Tailwind learning in 18 modules and videos.
          </p>
          <div className="max-w-3xl mx-auto ">
            <VideoLine header="Getting Started" videos="6" minutes="33" />
            <VideoLine header="Main Concepts" videos="11" minutes="67" />
            <VideoLine header="Layout" videos="4" minutes="37" />
          </div>
        </div>
      </div>
    </div>
  );
}
