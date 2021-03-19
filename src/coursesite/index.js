import React from 'react';

import Circles from './components/circles';
import Header from './components/header';
import Hero from './components/hero';
import Overview from './components/overview';

export default function courseIndex() {
  return (
    <div className="CourseIndex">
      <div className="bg-gradient-to-br from-white to-gray-200">
        <Circles />
        <div className="relative">
          <Header />
          <Hero />
          <Overview />
        </div>
      </div>
    </div>
  );
}
