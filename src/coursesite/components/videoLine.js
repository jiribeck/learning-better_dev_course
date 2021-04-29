import React from 'react';

export default function VideoLine({ header, videos, minutes }) {
  return (
    <div className="items-center justify-between p-6 space-y-4 bg-gray-800 lg:space-y-0 md:flex first:rounded-t-lg last:rounded-b-lg even:bg-opacity-50">
      <h4 className="text-2xl">{header}</h4>
      <div className="flex justify-center space-x-8 md:justify-evenly">
        <div className="text-xl font-bold">
          {videos} <span className="block text-sm font-normal">videos</span>
        </div>
        <div className="text-xl font-bold">
          {minutes} <span className="block text-sm font-normal">minutes</span>
        </div>
      </div>
    </div>
  );
}
