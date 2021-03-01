import React from 'react';

import Nav from '../components/Nav';

export default function lessonTemplate() {
  return (
    <div className="lesson01">
      <div className="p-10">
        <Nav />
        <div className="text-center">
          <div className="text-center text-3xl font-thin">Lesson 01</div>
          <div className="py-4 text-2xl font-medium">
            Spacing w/ Margin and Padding
          </div>
          <hr />
        </div>
        <div className="lesson-code">{/* here goes lesson code */}</div>
      </div>
    </div>
  );
}
