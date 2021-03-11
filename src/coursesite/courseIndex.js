import React from 'react';

import Circles from './components/circles';
import Header from './components/header';
import Hero from './components/hero';

export default function courseIndex() {
  return (
    <div className="CourseIndex">
      <div className="bg-gradient-to-br from-white to-gray-200">
        <Circles />
        <div className="relative">
          <Header />
          <Hero />
        </div>
      </div>
    </div>
  );
}
