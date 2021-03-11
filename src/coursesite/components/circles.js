import React from 'react';

export default function circles() {
  return (
    <div className="Circles">
      {/* left circle decoration */}
      <div className="absolute top-0 translate-x-4 translate-y-4 opacity-50">
        <div className="absolute w-64 h-64 mt-10 ml-10 rounded-full opacity-50 bg-gradient-to-br from-red-100 to-red-200"></div>
        <div className="absolute w-64 h-64 mt-24 rounded-full opacity-50 mR-24 bg-gradient-to-br from-teal-100 to-teal-200"></div>
        <div className="absolute w-64 h-64 mr-10 rounded-full opacity-50 bg-gradient-to-br from-purple-100 to-purple-200"></div>
      </div>
      {/* right circle decoration */}
      <div className="absolute top-0 right-0 hidden mr-24 transform -translate-x-64 translate-y-64 lg:inline-block">
        <div className="absolute w-64 h-64 mt-10 ml-10 rounded-full opacity-50 bg-gradient-to-br from-red-100 to-red-200"></div>
        <div className="absolute w-64 h-64 mt-24 rounded-full opacity-50 mR-24 bg-gradient-to-br from-teal-100 to-teal-200"></div>
        <div className="absolute w-64 h-64 mr-10 rounded-full opacity-50 bg-gradient-to-br from-purple-100 to-purple-200"></div>
      </div>
    </div>
  );
}
