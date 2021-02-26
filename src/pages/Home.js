import React from 'react';

export default function Home() {
  return (
    <div className="Home">
      <div className="text-center p-14">
        <h1 className="text-4xl font-bold text-pink-900">
          Learning code from better.dev tailwind course
        </h1>
        <p className="p-10">
          <a
            className="mr-4 px-6 py-3 bg-yellow-200 rounded-xl text-yellow-800"
            href="https://learn.better.dev/courses/beginner-tailwind/"
          >
            Course Web Page
          </a>
          <a
            className="ml-4 px-6 py-3 bg-green-200 rounded-xl text-green-800"
            href="https://tailwindcss.com/docs/guides/create-react-app"
          >
            Install tailwindcss to React.js
          </a>
        </p>
      </div>
    </div>
  );
}
